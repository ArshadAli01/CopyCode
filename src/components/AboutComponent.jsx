import React from 'react';
import Card from './Card';
import FadeInAnimation from './FadeInAnimation';

const aboutExamples = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    headerText: "Team Grid",
    codeSnippet: `<section class="py-20 bg-gray-50">
  <div class="container mx-auto px-4">
    <div class="grid grid-cols-3 gap-8">
      <!-- Team member cards -->
    </div>
  </div>
</section>`
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    headerText: "Company Story",
    codeSnippet: `<section class="py-16">
  <div class="max-w-4xl mx-auto px-4">
    <div class="prose prose-lg">
      <!-- Story content -->
    </div>
  </div>
</section>`
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&q=80&w=800",
    headerText: "Mission Statement",
    codeSnippet: `<section class="bg-primary text-white py-24">
  <div class="container mx-auto text-center">
    <h2 class="text-4xl font-bold mb-8">Our Mission</h2>
    <p class="max-w-2xl mx-auto">Mission statement...</p>
  </div>
</section>`
  }
];

function AboutComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-12">
      <FadeInAnimation>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            About Page Designs
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600">
            Tell your story with our collection of about page components designed
            to showcase your team, mission, and company culture.
          </p>
        </div>
      </FadeInAnimation>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {aboutExamples.map((example, index) => (
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

export default AboutComponent;