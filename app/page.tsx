"use client";

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
import { useEffect } from "react";
import YoutubeVideoForm from "./components/YoutubeVideoForm";


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
  useEffect(() => {
    const handleSmoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = target.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleSmoothScroll);
    return () => document.removeEventListener('click', handleSmoothScroll);
  }, []);

  return (
  
      <div className="min-h-screen">
        {/*Hero Section*/}
        <section id="top" className="py-24 bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">

          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center gap-10 text-center mb-12">
              <AgentPulse size="large" color0="blue" />
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">Meet Your Personal {" "} <span className="bg-gradient-to-r from blue-600 to-blue-400 bg-clip-text text-transparent">AI Content Agent </span></h1>

              <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">We are here to help you create engaging and captivating content for your social media platforms.</p>

              {/*Youtube Video Form */}
              <YoutubeVideoForm />

            </div>
          </div>
        </section>

        {/*Features Section*/}
        <section id="features" className="py-20 bg-white">
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
        <section id="how-it-works" className="py-20 bg-gray-50">
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
        <footer className="bg-gradient-to-b from-blue-600 to-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">AI Content Agent</h3>
                <p className="text-blue-100">Your personal AI-powered content creation assistant, helping you create engaging content for your social media platforms.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                <ul className="space-y-2">
                  <li><a href="#top" className="text-blue-100 hover:text-white transition-colors">Home</a></li>
                  <li><a href="#features" className="text-blue-100 hover:text-white transition-colors">Features</a></li>
                  <li><a href="#how-it-works" className="text-blue-100 hover:text-white transition-colors">How It Works</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4 text-white">Contact</h3>
                <p className="text-blue-100">Email: support@aicontentagent.com</p>
                <div className="flex space-x-4 mt-4">
                  <a href="https://www.linkedin.com/in/harkirat-kaur-/" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="https://github.com/keeratkaur" target="_blank" rel="noopener noreferrer" className="text-blue-100 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="border-t border-blue-500/30 mt-8 pt-8 text-center text-blue-100">
              <p className="text-blue-500">&copy; {new Date().getFullYear()} AI Content Agent. All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
  );
}
