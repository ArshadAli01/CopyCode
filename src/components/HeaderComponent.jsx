import React from 'react';
import Card from './Card';
import FadeInAnimation from './FadeInAnimation';

const headerExamples = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&q=80&w=800",
    headerText: "Minimalist Header",
    codeSnippet: `<header class="flex items-center justify-between px-6 py-4">
  <div class="logo">Brand</div>
  ...
</header>`
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800",
    headerText: "Hero Header",
    codeSnippet: `<header class="relative h-screen flex items-center">
  <div class="container mx-auto text-center">
  ...
</header>`
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    headerText: "Centered Header",
    codeSnippet: `<header class="text-center py-8">
  <nav class="space-y-4">
  ...
</header>`
  },
  {
    id: 4,
    imageSrc: "https://images.unsplash.com/photo-1550439062-609e1531270e?auto=format&fit=crop&q=80&w=800",
    headerText: "Sticky Navigation",
    codeSnippet: `<header class="fixed top-0 w-full bg-white shadow-sm">
  <div class="container mx-auto px-4 py-3">
  ...
</header>`
  },
  {
    id: 5,
    imageSrc: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?auto=format&fit=crop&q=80&w=800",
    headerText: "Transparent Header",
    codeSnippet: `<header class="absolute top-0 w-full bg-transparent">
  <div class="container mx-auto px-6 py-4">
  ...
</header>`
  },
  {
    id: 6,
    imageSrc: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?auto=format&fit=crop&q=80&w=800",
    headerText: "Split Header",
    codeSnippet: `<header class="grid grid-cols-2 gap-4 px-6 py-4">
  <div class="flex items-center">Left Content</div>
  ...
</header>`
  }
];

function HeaderComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-12">
      <FadeInAnimation>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Header Design Showcase
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600">
            Explore our collection of beautiful and responsive header designs for
            modern web applications. Each design is carefully crafted with attention to
            detail and user experience.
          </p>
        </div>
      </FadeInAnimation>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {headerExamples.map((example, index) => (
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

export default HeaderComponent;