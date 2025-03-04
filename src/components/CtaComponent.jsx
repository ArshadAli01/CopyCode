import React from 'react';
import Card from './Card';
import FadeInAnimation from './FadeInAnimation';

const ctaExamples = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    headerText: "Simple CTA",
    codeSnippet: `<section class="bg-primary text-white py-16">
  <div class="container mx-auto text-center">
    <h2 class="text-3xl font-bold mb-4">Ready to get started?</h2>
    <button class="bg-white text-primary px-8 py-3 rounded-full">
      Get Started
    </button>
  </div>
</section>`
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    headerText: "Split CTA",
    codeSnippet: `<section class="grid grid-cols-2 gap-8 bg-gray-100">
  <div class="p-12">
    <h2 class="text-4xl font-bold">Left content</h2>
  </div>
  <div class="bg-primary p-12 text-white">
    <h3>Right content</h3>
  </div>
</section>`
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    headerText: "Newsletter CTA",
    codeSnippet: `<section class="bg-gradient-to-r from-primary to-secondary text-white py-20">
  <div class="max-w-4xl mx-auto text-center">
    <h2 class="text-3xl font-bold mb-8">Subscribe to our newsletter</h2>
    <form class="flex gap-4 justify-center">
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</section>`
  }
];

function CtaComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-12">
      <FadeInAnimation>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Call-to-Action Designs
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600">
            Drive user engagement with our collection of compelling call-to-action
            components designed for maximum conversion.
          </p>
        </div>
      </FadeInAnimation>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {ctaExamples.map((example, index) => (
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

export default CtaComponent;