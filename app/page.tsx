import { title } from "process";
import AgentPulse from "./components/AgentPulse";
import {
  Brain,
  Handshake,
  Image,
  MessageSquare,
  Video,
  // Analyze,
  // Insights
} from "lucide-react";


const steps=[
  {
    title:"Share your Video Link",
    description:"Share the link of your video to get started",
    icon: Video,
  },
  {
    title:"Analyze Your Video",
    description:"We'll analyze your video content",
    icon: Brain,
  },
  {
    title:"Receive Insights",
    description:"We'll provide you with insights and suggestions",
    icon: MessageSquare,
  }
]

const features = [
  {
    title: "Personalized Content",
    description: "We understand your unique needs and create content that resonates with your audience.",
    icon:Brain,
    iconBg:"bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent",
    iconColor:"text-blue-600",
  },
  // {
  //   title: "Engaging and Captivating",
  //   description: "Our AI agents bring your ideas to life, making your content engaging and captivating.",
  //   icon:Handshake,
  //   iconBg:"bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent",
  //   iconColor:"text-blue-600",
  // },
  {
    title: "Smart Transcription",
    description: "Our AI agents bring your ideas to life, making your content engaging and captivating.",
    icon:MessageSquare,
    iconBg:"bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent",
    iconColor:"text-blue-600",
  },
  {
    title:"Thumbnail Generation",
    description:"Our AI agents bring your ideas to life, making your content engaging and captivating.",
    icon:Image,
    iconBg:"bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent",
    iconColor:"text-blue-600",
  },
  {
    title: "AI Analysis",
    description: "Get deep insights and analytics powered by AI to improve your content strategy.",
    icon: Brain,
    iconBg: "bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent",
    iconColor: "text-blue-600",
  },
  {
    title: "Discuss with Your AI Agent",
    description: "Chat and brainstorm ideas directly with your AI-powered content assistant.",
    icon: MessageSquare,
    iconBg: "bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent",
    iconColor: "text-blue-600",
  },
  {
    title: "Short Script",
    description: "Generate concise and effective scripts for your videos or posts in seconds.",
    icon: Handshake,
    iconBg: "bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent",
    iconColor: "text-blue-600",
  },
]

export default function Home() {
  return (
  
      <div className="min-h-screen">
        {/*Hero Section*/}
        <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">

          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-10 text-center mb-12">
              <AgentPulse size="large" color0="blue" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Meet Your Personal {" "} <span className="bg-gradient-to-r from blue-600 to-blue-400 bg-clip-text text-transparent">AI Content Agent </span></h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">We are here to help you create engaging and captivating content for your social media platforms.</p>

              {/*Youtube Video Form */}

            </div>
          </div>
        </section>

        {/*Features Section*/}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12"> Features for You!</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/*Feature Cards*/}
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                   key={index}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300">
                      <div>
                    <Icon className={`w-12 h-12 ${feature.iconColor} mb-4`} />

                      </div>
                    <h3 className={`text-xl font-semibold mb-2 ${feature.iconBg}`}>{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        
        {/*How it works section*/}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Meet your AI Agent in 3 simple Steps!
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {/*Step Cards*/}
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300"
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-500 text-white">
                      {(() => {
                        const Icon = step.icon;
                        return <Icon className="w-6 h-6" />;
                      })()}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}

            </div>
          </div>
        </section>

        {/*Footer Section*/}
        <footer className="bg-gray-50 border-t border-gray-200">
          <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-4 md:mb-0">
                <p className="text-gray-600">© 2025 AI Content Agent. All rights reserved.</p>
              </div>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  Twitter
                </a>
                <a href="https://www.linkedin.com/in/harkirat-kaur-/" className="text-gray-600 hover:text-blue-600 transition-colors">
                  LinkedIn
                </a>
                <a href="https://github.com/keeratkaur" className="text-gray-600 hover:text-blue-600 transition-colors">
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
  );
}
