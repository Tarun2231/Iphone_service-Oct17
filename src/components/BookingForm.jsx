import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Smartphone, FileText, CheckCircle } from 'lucide-react';
import { services } from '../data/mockData';

const BookingForm = () => {
  const [searchParams] = useSearchParams();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    customerName: '',
    phoneNumber: '',
    deviceBrand: '',
    deviceModel: '',
    serviceId: searchParams.get('service') || '',
    date: '',
    time: '',
    notes: ''
  });

  const [errors, setErrors] = useState({});

  const selectedService = services.find(s => s.id === parseInt(formData.serviceId));

  const validateForm = () => {
    const newErrors = {};

    if (!formData.customerName.trim()) {
      newErrors.customerName = 'Customer name is required';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (!/^\+?[\d\s\-\(\)]+$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.deviceBrand.trim()) {
      newErrors.deviceBrand = 'Device brand is required';
    }

    if (!formData.deviceModel.trim()) {
      newErrors.deviceModel = 'Device model is required';
    }

    if (!formData.serviceId) {
      newErrors.serviceId = 'Please select a service';
    }

    if (!formData.date) {
      newErrors.date = 'Please select a date';
    } else {
      const selectedDate = new Date(formData.date);
      const today = new Date();
      today.setHours(0, 0, 0, 0);
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date';
      }
    }

    if (!formData.time) {
      newErrors.time = 'Please select a time';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Simulate form submission
      console.log('Booking submitted:', formData);
      setIsSubmitted(true);
    }
  };

  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minutes = 0; minutes < 60; minutes += 30) {
        const timeString = `${hour.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
        slots.push(timeString);
      }
    }
    return slots;
  };

  if (isSubmitted) {
    return (
      <div className="max-w-md mx-auto text-center py-12">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Booking Confirmed!</h2>
        <p className="text-gray-600 mb-6">
          Thank you for choosing PhoneService Pro. We'll contact you soon to confirm your appointment.
        </p>
        <div className="bg-gray-50 rounded-lg p-4 text-left">
          <h3 className="font-semibold mb-2">Booking Details:</h3>
          <p><strong>Service:</strong> {selectedService?.name}</p>
          <p><strong>Date:</strong> {formData.date}</p>
          <p><strong>Time:</strong> {formData.time}</p>
          <p><strong>Device:</strong> {formData.deviceBrand} {formData.deviceModel}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Book Your Service</h2>
        <p className="text-gray-600">Fill out the form below to schedule your phone repair service</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Customer Name */}
          <div>
            <label htmlFor="customerName" className="block text-sm font-medium text-gray-700 mb-2">
              <User className="h-4 w-4 inline mr-1" />
              Customer Name *
            </label>
            <input
              type="text"
              id="customerName"
              name="customerName"
              value={formData.customerName}
              onChange={handleInputChange}
              className={`input-field ${errors.customerName ? 'border-red-500' : ''}`}
              placeholder="Enter your full name"
            />
            {errors.customerName && (
              <p className="text-red-500 text-sm mt-1">{errors.customerName}</p>
            )}
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 mb-2">
              <Phone className="h-4 w-4 inline mr-1" />
              Phone Number *
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              className={`input-field ${errors.phoneNumber ? 'border-red-500' : ''}`}
              placeholder="+1 (555) 123-4567"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm mt-1">{errors.phoneNumber}</p>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Device Brand */}
          <div>
            <label htmlFor="deviceBrand" className="block text-sm font-medium text-gray-700 mb-2">
              <Smartphone className="h-4 w-4 inline mr-1" />
              Device Brand *
            </label>
            <select
              id="deviceBrand"
              name="deviceBrand"
              value={formData.deviceBrand}
              onChange={handleInputChange}
              className={`input-field ${errors.deviceBrand ? 'border-red-500' : ''}`}
            >
              <option value="">Select Brand</option>
              <option value="iPhone">iPhone</option>
              <option value="Samsung">Samsung</option>
              <option value="Google">Google</option>
              <option value="OnePlus">OnePlus</option>
              <option value="Huawei">Huawei</option>
              <option value="Xiaomi">Xiaomi</option>
              <option value="Other">Other</option>
            </select>
            {errors.deviceBrand && (
              <p className="text-red-500 text-sm mt-1">{errors.deviceBrand}</p>
            )}
          </div>

          {/* Device Model */}
          <div>
            <label htmlFor="deviceModel" className="block text-sm font-medium text-gray-700 mb-2">
              Device Model *
            </label>
            <input
              type="text"
              id="deviceModel"
              name="deviceModel"
              value={formData.deviceModel}
              onChange={handleInputChange}
              className={`input-field ${errors.deviceModel ? 'border-red-500' : ''}`}
              placeholder="e.g., iPhone 13 Pro, Galaxy S21"
            />
            {errors.deviceModel && (
              <p className="text-red-500 text-sm mt-1">{errors.deviceModel}</p>
            )}
          </div>
        </div>

        {/* Service Selection */}
        <div>
          <label htmlFor="serviceId" className="block text-sm font-medium text-gray-700 mb-2">
            Select Service *
          </label>
          <select
            id="serviceId"
            name="serviceId"
            value={formData.serviceId}
            onChange={handleInputChange}
            className={`input-field ${errors.serviceId ? 'border-red-500' : ''}`}
          >
            <option value="">Choose a service</option>
            {services.map(service => (
              <option key={service.id} value={service.id}>
                {service.name} - ${service.price}
              </option>
            ))}
          </select>
          {errors.serviceId && (
            <p className="text-red-500 text-sm mt-1">{errors.serviceId}</p>
          )}
          {selectedService && (
            <div className="mt-2 p-3 bg-primary-50 rounded-lg">
              <p className="text-sm text-primary-800">
                <strong>{selectedService.name}</strong> - {selectedService.description}
              </p>
              <p className="text-sm text-primary-600">
                Estimated time: {selectedService.estimatedTime}
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Date */}
          <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
              <Calendar className="h-4 w-4 inline mr-1" />
              Preferred Date *
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleInputChange}
              min={new Date().toISOString().split('T')[0]}
              className={`input-field ${errors.date ? 'border-red-500' : ''}`}
            />
            {errors.date && (
              <p className="text-red-500 text-sm mt-1">{errors.date}</p>
            )}
          </div>

          {/* Time */}
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
              <Clock className="h-4 w-4 inline mr-1" />
              Preferred Time *
            </label>
            <select
              id="time"
              name="time"
              value={formData.time}
              onChange={handleInputChange}
              className={`input-field ${errors.time ? 'border-red-500' : ''}`}
            >
              <option value="">Select time</option>
              {generateTimeSlots().map(time => (
                <option key={time} value={time}>{time}</option>
              ))}
            </select>
            {errors.time && (
              <p className="text-red-500 text-sm mt-1">{errors.time}</p>
            )}
          </div>
        </div>

        {/* Notes */}
        <div>
          <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
            <FileText className="h-4 w-4 inline mr-1" />
            Additional Notes
          </label>
          <textarea
            id="notes"
            name="notes"
            value={formData.notes}
            onChange={handleInputChange}
            rows={3}
            className="input-field"
            placeholder="Describe the issue or any special requirements..."
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full py-3 text-lg"
        >
          Book Service
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
