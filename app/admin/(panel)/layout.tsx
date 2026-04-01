import Link from "next/link";

const navItems = [
  { href: "/admin/dashboard", label: "Dashboard" },
  { href: "/admin/blog", label: "Blog" },
];

export default function AdminPanelLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <div className="flex min-h-screen flex-col md:flex-row">
        <aside className="flex w-full flex-col bg-black p-5 text-white md:w-64">
          <Link href="/admin/dashboard" className="mb-8 text-2xl font-bold">
            Admin Panel
          </Link>

          <nav className="space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded-lg px-3 py-2 transition hover:bg-white/10"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="mt-8 space-y-2 border-t border-white/10 pt-6 text-sm text-gray-300 md:mt-auto">
            <Link href="/" className="block transition hover:text-white">
              ← Back to main site
            </Link>
            <Link href="/admin/login" className="block transition hover:text-white">
              Logout
            </Link>
          </div>
        </aside>

        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}
