import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
)

export async function POST(request: Request) {
    try {
        console.log("Upload API called");
        const formData = await request.formData();
        const file = formData.get("file") as File;

        console.log("File received:", file ? { name: file.name, size: file.size, type: file.type } : "No file");

        if (!file) {
            console.log("No file uploaded - returning 400");
            return NextResponse.json({ message: "No file uploaded" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const filename = `${Date.now()}-${file.name.replace(/\s+/g, "-")}`;
        console.log("Generated filename:", filename);

        console.log("Uploading to Supabase...");
        const { error } = await supabase.storage
            .from("blog-images")       // ← your bucket name
            .upload(filename, buffer, {
                contentType: file.type,
                upsert: false,
            });

        if (error) {
            console.error("Supabase upload error:", error);
            throw error;
        }

        console.log("Upload successful, getting public URL...");
        const { data } = supabase.storage
            .from("blog-images")
            .getPublicUrl(filename);

        console.log("Public URL:", data.publicUrl);
        return NextResponse.json({ url: data.publicUrl });
    } catch (error: any) {
        console.error("Upload API error:", error);
        return NextResponse.json(
            { error: error.message ?? "Upload failed" },
            { status: 500 }
        );
    }
}