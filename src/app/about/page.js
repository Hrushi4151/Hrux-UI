import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-50 text-gray-800 py-12">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Page Title */}
        <h1 className="text-4xl font-bold text-center text-gray-900 mb-8">
          About Us
        </h1>

        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-lg leading-7">
            Welcome to <span className="font-bold text-gray-900">AI WebDesigner</span>, 
            where creativity meets technology! Our mission is to empower businesses and 
            individuals with stunning, AI-powered web designs that are not only beautiful 
            but also functional and optimized for success.
          </p>
        </div>

        {/* Core Values Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Value 1 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
            <p className="text-sm leading-6">
              We constantly push the boundaries of technology to deliver innovative 
              solutions tailored to your unique needs.
            </p>
          </div>
          {/* Value 2 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Creativity</h3>
            <p className="text-sm leading-6">
              Our designs combine artistic vision with AI precision, creating websites 
              that captivate and engage audiences.
            </p>
          </div>
          {/* Value 3 */}
          <div className="bg-white shadow-md p-6 rounded-lg text-center">
            <h3 className="text-2xl font-semibold mb-4">Customer First</h3>
            <p className="text-sm leading-6">
              Your success is our priority. We collaborate closely with you to bring 
              your vision to life.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">
            Meet the Team
          </h2>
          <div className="grid grid-cols-1 ">
            <div className="text-center">
              <img
                src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
                alt="Team Member 1"
                className="rounded-full w-32 h-32 mx-auto mb-4"
              />
              <h4 className="text-xl font-semibold">Hrushikesh More</h4>
              <p className="text-sm text-gray-600">CEO & Founder</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">
            Ready to Transform Your Website?
          </h2>
          <p className="text-lg mb-6">
            Let us help you design a website that stands out and achieves your goals.
          </p>
          <a
            href="/contact"
            className="px-6 py-3 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
