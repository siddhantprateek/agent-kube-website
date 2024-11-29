
import { Footer, Header, Hero } from "@/components/custom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header />

      {/* Main Container */}
      <Hero />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;