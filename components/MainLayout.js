import Footer from "./Footer";

export function MainLayout({ children }) {
  return (
    <>
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}