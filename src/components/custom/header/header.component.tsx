
import LOGO from "@/assets/logo.png";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <>
      {/* Navigation */}
      <nav className="flex items-center justify-between pt-6 px-[3rem]">
        <div className="flex items-center space-x-4">
          <img src={LOGO} className="h-[3rem] -mr-5" alt="" />

          <span className="text-xl font-bold">AgentKube</span>
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-gray-600 hover:text-gray-900">Features</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Solutions</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Resources</a>
          <a href="#" className="text-gray-600 hover:text-gray-900">Pricing</a>
        </div>

        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign in</Button>
          <Button>Get demo</Button>
        </div>
      </nav>
    </>
  )
}

export default Header