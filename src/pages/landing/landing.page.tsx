
import { FeatureGrid, Footer, Header, Hero } from "@/components/custom";

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Header />
      </div>

      {/* Main Container */}

      <Hero />

      {/* <FeatureGrid /> */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FeatureGrid />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;