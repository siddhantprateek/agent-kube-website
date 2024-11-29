import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
      {/* Gradient Container */}
      <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl py-24 px-8 shadow-sm border border-gray-100 min-h-[85vh]">
        {/* Main Content */}
        <div className="text-center mt-20 mb-12">
          <Badge 
            variant="secondary" 
            className="bg-gray-500/10 text-base my-4 text-stone-500 hover:text-stone-700 hover:cursor-pointer rounded-full px-4 py-1"
          >
            <span className="mr-2">✨ New</span>
            Introducing Agent Kube Operator →
          </Badge>
          
          <h1 className="text-6xl font-bold mb-4">
            Think, plan, and track
            <br />
            <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center font-semibold leading-none text-transparent dark:from-white dark:to-slate-900/10">
              all in one place
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-8">
            Efficiently manage your tasks and boost productivity.
          </p>

          <Button size="lg" className="px-8 py-6 text-lg">
            Get free demo
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Hero;