import React from 'react';
import Card from './Card';
import FadeInAnimation from './FadeInAnimation';

const testimonialExamples = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800",
    headerText: "Grid Testimonials",
    codeSnippet: `<div class="grid grid-cols-3 gap-8">
  <div class="bg-white p-6 rounded-lg shadow">
    <p class="text-gray-600">"Testimonial text..."</p>
    <div class="mt-4">
      <h4 class="font-bold">John Doe</h4>
      <p class="text-sm">CEO, Company</p>
    </div>
  </div>
</div>`
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800",
    headerText: "Carousel Testimonials",
    codeSnippet: `<div class="relative overflow-hidden">
  <div class="flex transition-transform duration-300">
    <!-- Testimonial slides -->
    <div class="flex-shrink-0 w-full">
      <!-- Testimonial content -->
    </div>
  </div>
</div>`
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&q=80&w=800",
    headerText: "Featured Testimonial",
    codeSnippet: `<div class="bg-gradient-to-r from-primary to-secondary text-white p-12 rounded-2xl">
  <blockquote class="text-2xl font-light">
    "Featured testimonial..."
  </blockquote>
  <footer class="mt-6">
    <!-- Author info -->
  </footer>
</div>`
  }
];

function TestimonialsComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-12">
      <FadeInAnimation>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Testimonial Showcase
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600">
            Showcase your client testimonials with our beautifully designed
            components that build trust and credibility.
          </p>
        </div>
      </FadeInAnimation>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonialExamples.map((example, index) => (
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

export default TestimonialsComponent;