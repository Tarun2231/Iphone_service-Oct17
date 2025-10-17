import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, DollarSign } from 'lucide-react';

const ServiceCard = ({ service }) => {
  return (
    <div className="card hover:shadow-lg transition-shadow duration-300">
      <div className="aspect-w-16 aspect-h-9 mb-4">
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>
      
      <div className="space-y-3">
        <div>
          <span className="inline-block bg-primary-100 text-primary-800 text-xs font-semibold px-2.5 py-0.5 rounded">
            {service.category}
          </span>
          <h3 className="text-xl font-semibold text-gray-900 mt-2">
            {service.name}
          </h3>
          <p className="text-gray-600 text-sm mt-1">
            {service.description}
          </p>
        </div>

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{service.estimatedTime}</span>
          </div>
          <div className="flex items-center space-x-1">
            <DollarSign className="h-4 w-4" />
            <span className="font-semibold text-lg text-primary-600">
              ${service.price}
            </span>
          </div>
        </div>

        <Link
          to={`/book?service=${service.id}`}
          className="btn-primary w-full text-center block"
        >
          Book Now
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
