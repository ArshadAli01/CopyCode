import React from 'react';
import Card from './Card';
import FadeInAnimation from './FadeInAnimation';

const cardExamples = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    headerText: "Basic Card",
    codeSnippet: `<div class="bg-white rounded-lg shadow-md p-6">
  <h3 class="text-xl font-bold mb-2">Card Title</h3>
  <p class="text-gray-600">Card content goes here...</p>
</div>`
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=800",
    headerText: "Image Card",
    codeSnippet: `<div class="overflow-hidden rounded-lg shadow-lg">
  <img src="image.jpg" class="w-full h-48 object-cover" />
  <div class="p-6">
    <h3 class="font-bold">Title</h3>
  </div>
</div>`
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80&w=800",
    headerText: "Interactive Card",
    codeSnippet: `<div class="transform hover:-translate-y-1 transition-all duration-300
  bg-white rounded-xl shadow-md overflow-hidden">
  <div class="p-6">Content</div>
</div>`
  }
];

function CardComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-12">
      <FadeInAnimation>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Card Design Showcase
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600">
            Explore our versatile card designs perfect for displaying content in an
            organized and visually appealing way.
          </p>
        </div>
      </FadeInAnimation>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardExamples.map((example, index) => (
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

export default CardComponent;