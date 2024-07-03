import React, { useState } from 'react';

const Index = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex items-center justify-between p-4 bg-gray-100 border-b">
        <img
          src="https://images.squarespace-cdn.com/content/v1/61d8f89da912a447b355c04c/907be22c-956f-4a77-b4ea-1d849dcb81c5/Logo+Full+-+Black+v.6.png"
          alt="Logo"
          className="h-12"
        />
        <h1 className="text-xl font-bold">Advanced Regulatory Tool</h1>
      </header>
      <div className="flex">
        <aside className="w-1/4 p-4 bg-gray-50 border-r">
          <h2 className="text-lg font-semibold mb-4">Filter Regulations</h2>
          {[
            {
              title: 'Part 23—Airworthiness Standards: Normal Category Airplanes',
              id: 'F23L',
              amendments: ['Amdt 64', 'Amdt 65'],
            },
            {
              title: 'Part 25—Airworthiness Standards: Transport Category Airplanes',
              id: 'F25L',
              amendments: ['Initial', 'Amdt 3', 'Correction'],
            },
            {
              title: 'Part 27—Airworthiness Standards: Normal Category Rotorcraft',
              id: 'F27L',
              amendments: ['Initial', 'Amdt 2'],
            },
            {
              title: 'Part 29—Airworthiness Standards: Transport Category Rotorcraft',
              id: 'F29L',
              amendments: ['Initial', 'Amdt 2'],
            },
          ].map((section, index) => (
            <div key={section.id}>
              <button
                className="accordion w-full text-left p-2 bg-gray-200 hover:bg-gray-300"
                onClick={() => toggleAccordion(index)}
              >
                {section.title}
              </button>
              <div
                className={`accordion-content ${
                  activeAccordion === index ? 'block' : 'hidden'
                } p-2`}
              >
                <select className="w-full p-2 mb-2 border">
                  <option value="">Select Design Standard</option>
                </select>
                <select className="w-full p-2 mb-2 border">
                  <option value="">Select Amendment</option>
                  {section.amendments.map((amendment) => (
                    <option key={amendment} value={amendment}>
                      {amendment}
                    </option>
                  ))}
                </select>
                <button className="w-full p-2 mb-2 bg-blue-500 text-white">
                  Filter
                </button>
                <button className="w-full p-2 bg-green-500 text-white">
                  Interact
                </button>
              </div>
            </div>
          ))}
        </aside>
        <main className="flex-1 p-4">
          <h2 className="text-xl font-semibold mb-4">Results</h2>
          <div className="results" id="results"></div>
        </main>
      </div>
      <footer className="flex items-center justify-between p-4 bg-gray-100 border-t">
        <img
          src="https://images.squarespace-cdn.com/content/v1/61d8f89da912a447b355c04c/1668676749056-04KMUGV3WW3MYKK4Y9G6/Logo+Mini+v.1.png"
          alt="Logo"
          className="h-8"
        />
        <h3 className="text-lg font-semibold">Advanced Regulatory Tool</h3>
      </footer>
    </div>
  );
};

export default Index;