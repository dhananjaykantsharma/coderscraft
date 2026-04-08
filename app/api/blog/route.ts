import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    console.log("[API/BLOG] POST request received");
    const body = await req.json();
    console.log("[API/BLOG] Request body:", body);
    
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
      console.log("[API/BLOG] Missing required fields");
      return NextResponse.json(
        { error: "Title, slug, and content are required" },
        { status: 400 }
      );
    }

    console.log("[API/BLOG] Creating blog with Prisma...");
    const newBlog = await prisma.blog.create({
      data: {
        title,
        slug,
        excerpt,
        author,
        featured_image,
        details: {
          create: {
            content,
            meta_title,
            meta_description,
            meta_keyword,
          },
        },
      },
      include: {
        details: true,
      },
    });

    console.log("[API/BLOG] Blog created successfully:", newBlog.id);
    return NextResponse.json(newBlog, { status: 201 });
  } catch (error: any) {
    console.error("[API/BLOG] Error creating blog:", error);
    if (error?.code === "P2002") {
      console.log("[API/BLOG] Slug already exists");
      return NextResponse.json(
        { error: "Slug already exists" },
        { status: 400 }
      );
    }
    return NextResponse.json(
      { error: error?.message ?? "Failed to create blog post" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    console.log("[API/BLOG] GET request received");
    const blogs = await prisma.blog.findMany({
      include: {
        details: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
    console.log("[API/BLOG] Fetched blogs:", blogs.length);
    return NextResponse.json(blogs);
  } catch (error) {
    console.error("[API/BLOG] Error fetching blogs:", error);
    return NextResponse.json(
      { error: "Failed to fetch blogs" },
      { status: 500 }
    );
  }
}
