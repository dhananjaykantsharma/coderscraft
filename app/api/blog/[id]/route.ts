import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const blog = await prisma.blog.findUnique({
      where: { slug: params.id },
      include: { details: true },
    });

    if (!blog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }

    return NextResponse.json(blog);
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch blog" }, { status: 500 });
  }
}

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await req.json();
    const {
      title,
      slug,
      excerpt,
      author,
      featured_image,
      content,
      meta_title,
      meta_description,
      meta_keyword,
    } = body;

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 }
      );
    }

    const updatedBlog = await prisma.blog.update({
      where: { slug: params.id },
      data: {
        title,
        slug,
        excerpt,
        author,
        featured_image,
        details: {
          upsert: {
            create: {
              content,
              meta_title,
              meta_description,
              meta_keyword,
            },
            update: {
              content,
              meta_title,
              meta_description,
              meta_keyword,
            },
          },
        },
      },
      include: { details: true },
    });

    return NextResponse.json(updatedBlog);
  } catch (error: any) {
    if (error?.code === "P2025") {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json(
      { error: error?.message ?? "Failed to update blog" },
      { status: 500 }
    );
  }
}
