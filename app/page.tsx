import {
BrainCogIcon,
EyeIcon,
GlobeIcon,
MonitorSmartphone,
MonitorSmartphoneIcon,
ServerCogIcon,
ZapIcon
} from "lucide-react"
import { describe } from "node:test";

const features = [
  {
    name: "Store your PDF Documents",
    description: "Easily upload and store your PDF documents for quick access and retrieval.",
    icon: GlobeIcon
  },
  {
    name: "Blazing Fast Response",
    description: "Utilize advanced AI algorithms to extract insights and answers from your documents.",
    icon: ZapIcon
  },
  {
    name: "Intelligent AI",
    description: "Utilize advanced AI algorithms to extract insights and answers from your documents.",
    icon: BrainCogIcon
  },
  {
    name: "Secure and Reliable",
    description: "Utilize advanced AI algorithms to extract insights and answers from your documents.",
    icon: MonitorSmartphoneIcon
  },
  
]
export default function Home() {
  return (
  
      <main className="flex-1 overflow-scroll p-2 lg:p-5 bg-gradient-to-bl from-white to-indigo-600">
        <div className="bg-white py-24 sm:py-32 rounded-md drop-shadow-xl">
          <div>
            hello
          </div>

        </div>
        </main>
  );
}
