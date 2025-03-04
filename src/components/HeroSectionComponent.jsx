import React from 'react';
import Card from './Card';
import FadeInAnimation from './FadeInAnimation';

const heroExamples = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800",
    headerText: "Gradient Hero",
    codeSnippet: `<section class="min-h-screen bg-gradient-to-br from-primary to-secondary">
  <div class="container mx-auto px-6 py-20">
    <h1 class="text-5xl font-bold text-white">Welcome</h1>
  </div>
</section>`
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
    headerText: "Split Content Hero",
    codeSnippet: `<section class="min-h-screen grid grid-cols-2">
  <div class="flex items-center justify-center">
    <div class="max-w-xl px-8">Content</div>
  </div>
  <div class="bg-cover" style="background-image: url(...)"></div>
</section>`
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    headerText: "Video Background Hero",
    codeSnippet: `<section class="relative min-h-screen">
  <video autoplay loop muted class="absolute inset-0 w-full h-full object-cover">
    <source src="video.mp4" type="video/mp4">
  </video>
  <div class="relative z-10">Content</div>
</section>`
  }
];

function HeroSectionComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-12">
      <FadeInAnimation>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Hero Section Showcase
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600">
            Discover our collection of stunning hero sections that make a lasting first impression.
            Each design is optimized for engagement and visual impact.
          </p>
        </div>
      </FadeInAnimation>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {heroExamples.map((example, index) => (
          <FadeInAnimation key={example.id} delay={index * 0.1}>
            <Card
              imageSrc={example.imageSrc}
              headerText={example.headerText}
              codeSnippet={example.codeSnippet}
            />
          </FadeInAnimation>
        ))}
      </div>
    </div>
  );
}

export default HeroSectionComponent;