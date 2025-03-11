import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Pankaj',
    position: 'Marketing Head',
    company: 'Real Estate',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo13pb2TUYXcAe_PilekE3Z8l8Bhqekgm9aQ&s',
    content: 'Spartos Digital transformed our digital presence and helped scale our operations globally. Their expertise in app development and commitment to quality is unmatched.'
  },
  {
    name: 'Nishant',
    position: 'Marketing Manager',
    company: 'Healthcare',
    image: 'https://png.pngtree.com/png-clipart/20230823/original/pngtree-hospital-logo-icon-abstract-alliance-picture-image_8313149.png',
    content: 'The team\'s expertise in healthcare tech helped us revolutionize patient care. They delivered a secure, scalable solution that exceeded our expectations.'
  },
  {
    name: 'Rashmi',
    position: 'Founder',
    company: 'Ecommerce',
    image: 'https://w7.pngwing.com/pngs/621/196/png-transparent-e-commerce-logo-logo-e-commerce-electronic-business-ecommerce-angle-text-service.png',
    content: 'Our e-commerce platform\'s performance has improved dramatically since working with Spartos Digital. Their SEO and optimization strategies drove significant growth.'
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 bg-green-500/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it - hear what our clients have to say
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-6 bg-black border border-green-500/20 rounded-lg"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-white font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-400 text-sm">
                    {testimonial.position} at {testimonial.company}
                  </p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-green-500" fill="currentColor" />
                ))}
              </div>
              <p className="text-gray-400">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;