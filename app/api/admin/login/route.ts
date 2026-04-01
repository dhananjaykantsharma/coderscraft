import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(req: Request) {
  const { email = "", password = "" } = await req.json();

  const normalizedEmail = String(email).trim().toLowerCase();
  const normalizedPassword = String(password).trim();
  const adminEmail = process.env.ADMIN_EMAIL?.trim().toLowerCase();
  const adminPassword = process.env.ADMIN_PASSWORD?.trim();
  const jwtSecret = process.env.JWT_SECRET;

  if (!adminEmail || !adminPassword || !jwtSecret) {
    return NextResponse.json(
      { success: false, message: "Server auth configuration is missing." },
      { status: 500 }
    );
  }

  if (normalizedEmail === adminEmail && normalizedPassword === adminPassword) {
    const token = jwt.sign({ role: "admin" }, jwtSecret, { expiresIn: "1d" });

    const response = NextResponse.json({ success: true });

    response.cookies.set("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  }

  return NextResponse.json(
    { success: false, message: "Invalid email or password." },
    { status: 401 }
  );
}