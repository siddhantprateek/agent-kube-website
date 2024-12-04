
import LOGO from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <>
      {/* Navigation */}
      <nav className="flex items-center justify-between pt-6 px-[3rem]">
        <a href="/" className="flex items-center space-x-4">
          <img src={LOGO} className="h-[3rem] -mr-5" alt="" />
          <span className="text-xl font-bold">AgentKube</span>
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection('features-section')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            Features
          </button>
          <a href="#" className="text-gray-600 hover:text-gray-900">Solutions</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
        </div>

        <div className="flex items-center space-x-4">
          <a href="https://account.agentkube.com">Sign in</a>
          <Button>Get demo</Button>
        </div>
      </nav>
    </>
  )
}

export default Header