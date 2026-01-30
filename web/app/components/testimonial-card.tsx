// components/testimonial-card.tsx
import { Star } from "lucide-react";

// Interface
export interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  text: string;
}

// Componente
export function TestimonialCard({ name, role, company, text }: TestimonialCardProps) {
  return (
    <div className="relative w-[350px] h-[200px] mx-4 p-6 rounded-2xl border border-gray-20  shadow-sm hover:shadow-md transition-shadow">
      {/* ... resto do código do card ... */}
    </div>
  );
}

export const testimonials = [
  {
    name: "Alex Johnson",
    role: "Product Manager",
    company: "TechCorp",
    text: "Clawd transformed our customer support. Response times improved by 300%!",
  },
  {
    name: "Sarah Chen",
    role: "Founder",
    company: "StartupXYZ",
    text: "The AI understands context so well. It's like having another team member.",
  },
  {
    name: "Marcus Rivera",
    role: "CTO",
    company: "InnovateLabs",
    text: "Implementation was seamless. Our customers love the instant responses.",
  },
  {
    name: "Priya Patel",
    role: "Operations Lead",
    company: "GlobalRetail",
    text: "Reduced our support tickets by 60% in the first month alone.",
  },
];