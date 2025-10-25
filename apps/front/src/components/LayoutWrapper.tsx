import Header from "./Header";
import Footer from "./Footer";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <Header />

      {/* Main Body */}
      <main className="flex-1 container mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-45 py-6">
        {children}
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
