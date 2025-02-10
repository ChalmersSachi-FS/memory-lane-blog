export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <header className="bg-blue-600 text-white p-4 text-center">
          <h1>Memory Lane Blog</h1>
        </header>
        <main className="p-6">{children}</main>
        <footer className="bg-blue-600 text-white p-4 text-center">
          <p>© 2025 Memory Lane</p>
        </footer>
      </body>
    </html>
  );
}
