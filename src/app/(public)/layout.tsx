import Footer from "@/components/design/Footer";
import Header from "@/components/design/Header";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header></Header>
      <main className="main-content">{children}</main>
      <Footer />
    </>
  );
}
