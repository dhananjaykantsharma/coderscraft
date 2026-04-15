import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }  // ← Promise type
) {
  try {
    const { id } = await params;  // ← await first

    const blog = await prisma.blog.findUnique({
      where: { slug: id },
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
  { params }: { params: Promise<{ id: string }> }  // ← Promise type
) {
  try {
    const { id } = await params;  // ← await first
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
      where: { slug: id },
      data: {
        title,
        slug,
        excerpt,
        author,
        featured_image,
        details: {
          upsert: {
            create: { content, meta_title, meta_description, meta_keyword },
            update: { content, meta_title, meta_description, meta_keyword },
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


export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try{
    const { id } = await params;
    console.log("Deleting blog with slug:", id);

    const deletedBlog = await prisma.blog.delete({
      where: { id: id },
    })

    console.log("Blog deleted successfully", deletedBlog);

    return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}