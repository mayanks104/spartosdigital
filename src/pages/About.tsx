import React from 'react';
import { Users, Target, Award, Rocket } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-black pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-green-500/10 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Spartos Digital
            </h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We're a team of passionate digital innovators committed to transforming businesses through technology and strategic solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 border border-green-500/20 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-gray-400">
                To empower businesses with cutting-edge digital solutions that drive growth, innovation, and sustainable success in the modern marketplace.
              </p>
            </div>
            <div className="p-8 border border-green-500/20 rounded-lg">
              <h2 className="text-2xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-gray-400">
                To be the global leader in digital transformation, setting new standards for innovation, quality, and client success in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-6 text-center">
              <Users className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Client Focus</h3>
              <p className="text-gray-400">Your success is our priority. We're committed to delivering solutions that exceed expectations.</p>
            </div>
            <div className="p-6 text-center">
              <Target className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-400">We stay ahead of the curve, embracing new technologies and methodologies.</p>
            </div>
            <div className="p-6 text-center">
              <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
              <p className="text-gray-400">Quality is non-negotiable. We deliver excellence in every project we undertake.</p>
            </div>
            <div className="p-6 text-center">
              <Rocket className="w-12 h-12 text-green-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Growth</h3>
              <p className="text-gray-400">We're dedicated to continuous improvement and helping our clients scale.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a"
                alt="CEO"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">David Chen</h3>
              <p className="text-green-500">CEO & Founder</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                alt="CTO"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Sarah Johnson</h3>
              <p className="text-green-500">Chief Technology Officer</p>
            </div>
            <div className="text-center">
              <img
                src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7"
                alt="COO"
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
              />
              <h3 className="text-xl font-semibold text-white">Michael Roberts</h3>
              <p className="text-green-500">Chief Operations Officer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;