import React from 'react';
import { Phone, Clock, Shield, Star, CheckCircle, ArrowRight, Zap, Droplets, Battery, Smartphone } from 'lucide-react';

const FastRepair = () => {
  const services = [
    {
      icon: Smartphone,
      title: "Screen Repair",
      description: "Professional screen replacement for all iPhone models",
      price: "From $89",
      time: "30-45 min",
      features: ["Original quality screens", "Warranty included", "Same-day service"]
    },
    {
      icon: Battery,
      title: "Battery Replacement",
      description: "Replace your old battery with a new high-capacity one",
      price: "From $49",
      time: "20-30 min",
      features: ["Genuine batteries", "Improved performance", "12-month warranty"]
    },
    {
      icon: Droplets,
      title: "Water Damage",
      description: "Expert water damage repair and data recovery",
      price: "From $129",
      time: "1-2 hours",
      features: ["Diagnostic included", "Data recovery", "Component repair"]
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "Fast Service",
      description: "Most repairs completed in under 1 hour"
    },
    {
      icon: Shield,
      title: "Warranty",
      description: "All repairs come with warranty protection"
    },
    {
      icon: Star,
      title: "Expert Techs",
      description: "Certified technicians with years of experience"
    },
    {
      icon: Zap,
      title: "Same Day",
      description: "Get your phone back the same day"
    }
  ];

  const testimonials = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Amazing service! My iPhone screen was fixed in 30 minutes. Highly recommend!"
    },
    {
      name: "Mike R.",
      rating: 5,
      text: "Water damage repair was excellent. They saved my phone and all my data!"
    },
    {
      name: "Lisa K.",
      rating: 5,
      text: "Fast, professional, and affordable. Best phone repair shop in town!"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Fast iPhone Repair
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Screen • Battery • Water Damage
            </p>
            <p className="text-lg text-blue-200 mb-10 max-w-2xl mx-auto">
              Professional iPhone repair services with same-day turnaround. 
              Expert technicians, quality parts, and warranty included.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Book Repair Now
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center">
                Call: (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Fast Repair Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional iPhone repairs with same-day service and warranty protection
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>
                    <div className="mb-6">
                      <div className="text-3xl font-bold text-blue-600 mb-2">
                        {service.price}
                      </div>
                      <div className="flex items-center justify-center text-gray-500">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{service.time}</span>
                      </div>
                    </div>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                      Book This Service
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Fast Repair?
            </h2>
            <p className="text-lg text-gray-600">
              The fastest and most reliable iPhone repair service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600">
              Fast, reliable, and professional iPhone repair service
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">
                  "{testimonial.text}"
                </p>
                <p className="font-semibold text-gray-900">
                  {testimonial.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Fix Your iPhone?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get your iPhone repaired today with our fast, professional service. 
            Same-day repairs available!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200 flex items-center justify-center">
              <ArrowRight className="mr-2 h-5 w-5" />
              Book Repair Now
            </button>
            <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold py-4 px-8 rounded-lg text-lg transition-colors duration-200">
              (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-xl font-semibold mb-2">Address</h3>
              <p className="text-gray-300">
                123 Tech Street<br />
                Digital City, DC 12345
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300">
                (555) 123-4567<br />
                Available 9AM-6PM
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Hours</h3>
              <p className="text-gray-300">
                Mon-Fri: 9AM-6PM<br />
                Sat: 10AM-4PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FastRepair;
