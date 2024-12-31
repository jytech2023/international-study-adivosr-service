import React from 'react';
import { Award, Users, Globe2, BookOpen, Building2, Lightbulb } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "Accredited Programs",
    description: "Internationally recognized degrees from top-ranked universities worldwide"
  },
  {
    icon: Users,
    title: "Global Network",
    description: "Connect with students and professionals from over 50 countries"
  },
  {
    icon: Globe2,
    title: "Cultural Immersion",
    description: "Experience diverse cultures and expand your global perspective"
  },
  {
    icon: BookOpen,
    title: "Expert Faculty",
    description: "Learn from world-renowned professors and industry experts"
  },
  {
    icon: Building2,
    title: "Modern Facilities",
    description: "State-of-the-art campuses with cutting-edge resources"
  },
  {
    icon: Lightbulb,
    title: "Career Support",
    description: "Comprehensive career guidance and placement assistance"
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose Our Program?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover the unique advantages that set our international study program apart
            and prepare you for global success.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl border border-gray-200 hover:border-emerald-500 transition-colors">
              <feature.icon className="w-12 h-12 text-emerald-500 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}