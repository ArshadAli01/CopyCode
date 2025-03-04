import React from 'react';
import Card from './Card';
import FadeInAnimation from './FadeInAnimation';

const footerExamples = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=800",
    headerText: "Simple Footer",
    codeSnippet: `<footer class="bg-gray-900 text-white py-12">
  <div class="container mx-auto px-6">
    <div class="grid grid-cols-4 gap-8">
      <!-- Footer content -->
    </div>
  </div>
</footer>`
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    headerText: "Newsletter Footer",
    codeSnippet: `<footer class="bg-white border-t">
  <div class="max-w-7xl mx-auto py-12 px-4">
    <form class="flex gap-4">
      <input type="email" placeholder="Enter your email" />
      <button type="submit">Subscribe</button>
    </form>
  </div>
</footer>`
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    headerText: "Social Media Footer",
    codeSnippet: `<footer class="bg-gradient-to-r from-gray-800 to-gray-900 text-white">
  <div class="container mx-auto py-8">
    <div class="flex justify-center space-x-6">
      <!-- Social icons -->
    </div>
  </div>
</footer>`
  }
];

function FooterComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-12">
      <FadeInAnimation>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Footer Design Showcase
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600">
            Browse through our collection of footer designs that provide essential
            information and navigation while maintaining visual harmony.
          </p>
        </div>
      </FadeInAnimation>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {footerExamples.map((example, index) => (
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

export default FooterComponent;