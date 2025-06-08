import React from 'react'

type AgentPulseProps = {
    size?: "small" | "medium" | "large";
    color0?: "blue" |"green"|"purple";
}

function AgentPulse({
    size = "medium",
    color0 = "blue"
}: AgentPulseProps) {
    const sizeClasses={
        small:"w-2 h-2",
        medium:"w-4 h-4",
        large:"w-6 h-6"};

    const colorClasses={
        blue:"bg-blue-500 shadow-[0_0_0_2px_rgba(59,130,246,0.5)]",
        green:"bg-green-500 shadow-[0_0_0_2px_rgba(16,185,129,0.5)]",
        purple:"bg-purple-500 shadow-[0_0_0_2px_rgba(168,85,247,0.5)]"
    }
  return <div className={`${sizeClasses[size]} ${colorClasses[color0]} rounded-full animate-pulse`}/>
}

export default AgentPulse;
