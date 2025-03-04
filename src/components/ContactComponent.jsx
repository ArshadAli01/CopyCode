import React from 'react';
import Card from './Card';
import FadeInAnimation from './FadeInAnimation';

const contactExamples = [
  {
    id: 1,
    imageSrc: "https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80&w=800",
    headerText: "Simple Contact Form",
    codeSnippet: `<form class="max-w-lg mx-auto space-y-6">
  <div>
    <label class="block text-sm font-medium text-gray-700">Name</label>
    <input type="text" class="mt-1 block w-full rounded-md border-gray-300" />
  </div>
  <div>
    <label class="block text-sm font-medium text-gray-700">Email</label>
    <input type="email" class="mt-1 block w-full rounded-md border-gray-300" />
  </div>
  <button type="submit" class="w-full bg-primary text-white rounded-md py-2">
    Send Message
  </button>
</form>`
  },
  {
    id: 2,
    imageSrc: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&q=80&w=800",
    headerText: "Contact with Map",
    codeSnippet: `<div class="grid grid-cols-2 gap-8">
  <div class="bg-white p-8 rounded-lg shadow-lg">
    <!-- Contact form -->
  </div>
  <div class="rounded-lg overflow-hidden">
    <!-- Map iframe -->
  </div>
</div>`
  },
  {
    id: 3,
    imageSrc: "https://images.unsplash.com/photo-1577563908411-5077b6dc7624?auto=format&fit=crop&q=80&w=800",
    headerText: "Contact Cards",
    codeSnippet: `<div class="grid grid-cols-3 gap-6">
  <div class="bg-white p-6 rounded-lg shadow text-center">
    <div class="text-primary text-2xl mb-4">
      <!-- Icon -->
    </div>
    <h3 class="font-bold">Email Us</h3>
    <p class="text-gray-600">contact@example.com</p>
  </div>
  <!-- More contact cards -->
</div>`
  }
];

function ContactComponent() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100 px-4 py-12">
      <FadeInAnimation>
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h1 className="text-5xl font-bold mb-6 gradient-text">
            Contact Components
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
          <p className="text-lg text-gray-600">
            Connect with your users through our collection of contact forms and
            components designed for seamless communication.
          </p>
        </div>
      </FadeInAnimation>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {contactExamples.map((example, index) => (
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

export default ContactComponent;