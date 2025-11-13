"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, Target, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TimelineMilestone {
  id: string;
  title: string;
  quarter: string;
  status: "completed" | "in-progress" | "upcoming";
  description?: string;
}

interface TimelineVisualProps {
  milestones: TimelineMilestone[];
  onMilestoneClick?: (id: string) => void;
  className?: string;
}

const statusConfig = {
  completed: {
    icon: CheckCircle2,
    color: "bg-emerald-500",
    textColor: "text-emerald-700",
    borderColor: "border-emerald-500",
    ringColor: "ring-emerald-500/20",
  },
  "in-progress": {
    icon: Clock,
    color: "bg-gecko-green",
    textColor: "text-gecko-green",
    borderColor: "border-gecko-green",
    ringColor: "ring-gecko-green/20",
  },
  upcoming: {
    icon: Target,
    color: "bg-gray-400",
    textColor: "text-gray-600",
    borderColor: "border-gray-400",
    ringColor: "ring-gray-400/20",
  },
};

export function TimelineVisual({ milestones, onMilestoneClick, className }: TimelineVisualProps) {
  return (
    <div className={cn("relative py-8", className)}>
      {/* Desktop Timeline (Horizontal) */}
      <div className="hidden lg:block">
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200 via-gecko-green/30 to-gray-200" />
          
          {/* Milestones */}
          <div className="relative grid grid-cols-1 gap-8" style={{ gridTemplateColumns: `repeat(${milestones.length}, minmax(0, 1fr))` }}>
            {milestones.map((milestone, index) => {
              const config = statusConfig[milestone.status];
              const Icon = config.icon;
              
              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Milestone Circle */}
                  <button
                    onClick={() => onMilestoneClick?.(milestone.id)}
                    className={cn(
                      "relative w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4",
                      config.color,
                      config.ringColor,
                      milestone.status === "in-progress" && "animate-pulse",
                      onMilestoneClick && "hover:scale-110 cursor-pointer"
                    )}
                    aria-label={`View ${milestone.title}`}
                  >
                    <Icon className="w-8 h-8 text-white" />
                  </button>
                  
                  {/* Milestone Info */}
                  <div className="mt-4 text-center max-w-[180px]">
                    <p className={cn("text-sm font-bold mb-1", config.textColor)}>
                      {milestone.quarter}
                    </p>
                    <h4 className="text-sm font-semibold text-gray-900 leading-tight">
                      {milestone.title}
                    </h4>
                    {milestone.description && (
                      <p className="text-xs text-gray-600 mt-2">
                        {milestone.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Mobile Timeline (Vertical) */}
      <div className="lg:hidden">
        <div className="relative pl-8">
          {/* Vertical Timeline Line */}
          <div className="absolute left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-200 via-gecko-green/30 to-gray-200" />
          
          {/* Milestones */}
          <div className="space-y-8">
            {milestones.map((milestone, index) => {
              const config = statusConfig[milestone.status];
              const Icon = config.icon;
              
              return (
                <motion.div
                  key={milestone.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Milestone Circle */}
                  <button
                    onClick={() => onMilestoneClick?.(milestone.id)}
                    className={cn(
                      "absolute -left-8 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none focus:ring-4",
                      config.color,
                      config.ringColor,
                      milestone.status === "in-progress" && "animate-pulse",
                      onMilestoneClick && "hover:scale-110 cursor-pointer"
                    )}
                    aria-label={`View ${milestone.title}`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </button>
                  
                  {/* Milestone Info */}
                  <div className="pl-8">
                    <p className={cn("text-sm font-bold mb-1", config.textColor)}>
                      {milestone.quarter}
                    </p>
                    <h4 className="text-base font-semibold text-gray-900 mb-2">
                      {milestone.title}
                    </h4>
                    {milestone.description && (
                      <p className="text-sm text-gray-600">
                        {milestone.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
