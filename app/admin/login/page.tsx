"use client";

import { useState } from "react";

export default function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email.trim(),
        password: password.trim(),
      }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      window.location.href = "/admin/dashboard";
      return;
    }

    alert(data.message || "Invalid credentials");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md">
        
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Admin Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-black border-gray-300 placeholder-gray-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-black border-gray-300 placeholder-gray-600"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="w-full bg-black text-white p-3 rounded-lg hover:bg-gray-800 transition"
          >
            Login
          </button>

        </form>
      </div>
    </div>
  );
}