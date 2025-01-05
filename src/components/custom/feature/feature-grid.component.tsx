import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { Share2Icon, ChartSpline } from "lucide-react";
import { cn } from "@/lib/utils";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import Marquee from "@/components/ui/marquee";
import { CHATUI, MONITOR } from "@/assets";

interface ComponentProps {
  className?: string;
}

// Simple integration grid to replace AnimatedBeamMultipleOutputDemo
const SimpleIntegrationGrid = ({ className }: ComponentProps) => {
  const integrations = [
    "Slack", "GitHub", "PagerDuty", "Discord"
  ];

  return (
    <div className={cn("grid grid-cols-2 gap-2 p-4", className)}>
      {integrations.map((integration) => (
        <div
          key={integration}
          className="flex items-center justify-center rounded-lg border-2 border-gray-400/20 bg-gray-800/50 p-4 text-sm font-medium text-gray-200 hover:bg-gray-700/50 transition-colors"
        >
          {integration}
        </div>
      ))}
    </div>
  );
};

const TalkToClusterGrid = ({ className }: ComponentProps) => {
  return (
    <div className={cn("p-4", className)}>
      <img src={CHATUI} className="opacity-50 ml-20 mt-20 hover:opacity-100 rounded-xl transition-opacity" alt="" />
    </div>
  );
};

const MonitoringClusterGrid = ({ className }: ComponentProps) => {
  return (
    <div className={cn("p-4", className)}>
      <img src={MONITOR} className="opacity-50 ml-80 mt-20 rounded-2xl hover:opacity-100 transition-opacity" alt="" />
    </div>
  );
};

const files = [
  {
    name: "Cluster Investigated",
    body: "Bitcoin is a cryptocurrency invented in 2008 by an unknown person or group of people using the name Satoshi Nakamoto.",
  },
  {
    name: "Created API Key",
    body: "A spreadsheet or worksheet is a file made of rows and columns that help sort data, arrange data easily, and calculate numerical data.",
  },
  {
    name: "Edited Production deployment",
    body: "Scalable Vector Graphics is an Extensible Markup Language-based vector image format for two-dimensional graphics with support for interactivity and animation.",
  },
  {
    name: "Secrets keys.gpg changed",
    body: "GPG keys are used to encrypt and decrypt email, files, directories, and whole disk partitions and to authenticate messages.",
  },
  {
    name: "Config seed.txt changed",
    body: "A seed phrase, seed recovery phrase or backup seed phrase is a list of words which store all the information needed to recover Bitcoin funds on-chain.",
  },
];

const features = [
  {
    Icon: FileTextIcon,
    name: "Audits",
    description: "Audit and share incident reports to shareholders/customers.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)]"
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-400/20 bg-gray-800/40 hover:bg-gray-700/50",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium text-gray-200">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-gray-400">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
  {
    Icon: ChartSpline,
    name: "Monitoring",
    description: "Get real-time monitoring insights.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <MonitoringClusterGrid className="absolute right-2 top-4 h-[400px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: Share2Icon,
    name: "Integrations",
    description: "Supports 100+ integrations and counting.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-2",
    background: (
      <SimpleIntegrationGrid className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
  {
    Icon: CalendarIcon,
    name: "Talk to Cluster",
    description: "Interact with cluster effortlessly.",
    className: "col-span-3 lg:col-span-1",
    href: "#",
    cta: "Learn more",
    background: (
      <TalkToClusterGrid className="absolute right-2 top-4 h-[400px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },
];

const FeatureGrid = () => {
  return (
    <BentoGrid className="text-gray-200">
      {features.map((feature, idx) => (
        <BentoCard 

          key={idx} 
          {...feature}
          className={cn(feature.className, "border-gray-400/20 bg-gray-800/40 hover:bg-gray-700/50")}
        />
      ))}
    </BentoGrid>
  );
}

export default FeatureGrid;