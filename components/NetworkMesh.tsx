"use client";

import { motion } from "motion/react";

interface Node {
  id: string;
  x: number;
  y: number;
  r: number;
  color: string;
  delay: number;
}

interface Edge {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
}

const nodes: Node[] = [
  { id: "n0", x: 70, y: 90, r: 5, color: "#22D3EE", delay: 0 },
  { id: "n1", x: 180, y: 40, r: 7, color: "#8B5CF6", delay: 0.5 },
  { id: "n2", x: 300, y: 110, r: 4, color: "#3B82F6", delay: 1.0 },
  { id: "n3", x: 400, y: 50, r: 6, color: "#22D3EE", delay: 1.5 },
  { id: "n4", x: 460, y: 180, r: 5, color: "#8B5CF6", delay: 2.0 },
  { id: "n5", x: 350, y: 260, r: 8, color: "#3B82F6", delay: 0.8 },
  { id: "n6", x: 200, y: 240, r: 4, color: "#22D3EE", delay: 1.3 },
  { id: "n7", x: 80, y: 200, r: 6, color: "#D946EF", delay: 0.3 },
  { id: "n8", x: 260, y: 155, r: 5, color: "#8B5CF6", delay: 1.8 },
  { id: "n9", x: 130, y: 320, r: 4, color: "#3B82F6", delay: 2.3 },
  { id: "n10", x: 430, y: 310, r: 5, color: "#22D3EE", delay: 0.7 },
];

const edges: Edge[] = [
  { id: "e0-1", x1: nodes[0].x, y1: nodes[0].y, x2: nodes[1].x, y2: nodes[1].y },
  { id: "e1-2", x1: nodes[1].x, y1: nodes[1].y, x2: nodes[2].x, y2: nodes[2].y },
  { id: "e2-3", x1: nodes[2].x, y1: nodes[2].y, x2: nodes[3].x, y2: nodes[3].y },
  { id: "e3-4", x1: nodes[3].x, y1: nodes[3].y, x2: nodes[4].x, y2: nodes[4].y },
  { id: "e4-5", x1: nodes[4].x, y1: nodes[4].y, x2: nodes[5].x, y2: nodes[5].y },
  { id: "e5-6", x1: nodes[5].x, y1: nodes[5].y, x2: nodes[6].x, y2: nodes[6].y },
  { id: "e6-7", x1: nodes[6].x, y1: nodes[6].y, x2: nodes[7].x, y2: nodes[7].y },
  { id: "e7-0", x1: nodes[7].x, y1: nodes[7].y, x2: nodes[0].x, y2: nodes[0].y },
  { id: "e1-8", x1: nodes[1].x, y1: nodes[1].y, x2: nodes[8].x, y2: nodes[8].y },
  { id: "e8-5", x1: nodes[8].x, y1: nodes[8].y, x2: nodes[5].x, y2: nodes[5].y },
  { id: "e8-6", x1: nodes[8].x, y1: nodes[8].y, x2: nodes[6].x, y2: nodes[6].y },
  { id: "e2-8", x1: nodes[2].x, y1: nodes[2].y, x2: nodes[8].x, y2: nodes[8].y },
  { id: "e7-9", x1: nodes[7].x, y1: nodes[7].y, x2: nodes[9].x, y2: nodes[9].y },
  { id: "e5-10", x1: nodes[5].x, y1: nodes[5].y, x2: nodes[10].x, y2: nodes[10].y },
  { id: "e9-6", x1: nodes[9].x, y1: nodes[9].y, x2: nodes[6].x, y2: nodes[6].y },
  { id: "e4-10", x1: nodes[4].x, y1: nodes[4].y, x2: nodes[10].x, y2: nodes[10].y },
];

export default function NetworkMesh() {
  return (
    <div className="relative w-full h-full">
      <svg
        viewBox="0 0 530 380"
        className="w-full h-full"
        role="img"
        aria-label="Animated network mesh illustration"
        style={{ filter: "drop-shadow(0 0 20px rgba(139,92,246,0.25))" }}
      >
        <defs>
          <radialGradient id="nodeGlowPurple" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#8B5CF6" stopOpacity="1" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="nodeGlowCyan" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#22D3EE" stopOpacity="1" />
            <stop offset="100%" stopColor="#22D3EE" stopOpacity="0" />
          </radialGradient>
        </defs>

        {edges.map((edge, i) => (
          <motion.line
            key={edge.id}
            x1={edge.x1}
            y1={edge.y1}
            x2={edge.x2}
            y2={edge.y2}
            stroke="rgba(139,92,246,0.25)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: i * 0.08 }}
          />
        ))}

        {nodes.map((node) => (
          <motion.g key={node.id}>
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r * 3.5}
              fill={node.color}
              fillOpacity={0.08}
              animate={{ r: [node.r * 3, node.r * 5, node.r * 3] }}
              transition={{
                duration: 3 + node.delay,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <motion.circle
              cx={node.x}
              cy={node.y}
              r={node.r}
              fill={node.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: [0.7, 1, 0.7] }}
              transition={{
                scale: { duration: 0.5, delay: node.delay },
                opacity: {
                  duration: 2.5,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: node.delay,
                },
              }}
              style={{ filter: `drop-shadow(0 0 6px ${node.color})` }}
            />
          </motion.g>
        ))}
      </svg>
    </div>
  );
}

