import Header from "./components/shared/header";
import HeroSection from "./components/hero-section";

export default function App() {
  return (
    <>
      <Header />
      <main className="mt-5 antialiased">
        <HeroSection />
      </main>
    </>
  );
}
