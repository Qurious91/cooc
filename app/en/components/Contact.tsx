'use client';

import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    guests: '',
    date: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    alert('Your inquiry has been received. We will contact you within 24 hours.');

    setFormData({
      name: '',
      email: '',
      phone: '',
      eventType: '',
      guests: '',
      date: '',
      message: '',
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const callSubmit = () => {
    alert('📱 010-0000-0000');
  };

  return (
    <section id="contact" className="bg-gray-50 py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl">Contact Us</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Feel free to reach out if you have any questions
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100">
                    <Phone className="text-zinc-600" size={20} />
                  </div>

                  <div>
                    <p className="mb-1 font-medium">Phone</p>
                    <p className="text-gray-600">02-1234-5678</p>
                    <p className="text-sm text-gray-500">Weekdays 09:00 - 18:00</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100">
                    <Mail className="text-zinc-600" size={20} />
                  </div>

                  <div>
                    <p className="mb-1 font-medium">Email</p>
                    <p className="text-gray-600">no-reply@cooc.agency</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-zinc-100">
                    <MapPin className="text-zinc-600" size={20} />
                  </div>

                  <div>
                    <p className="mb-1 font-medium">Address</p>
                    <p className="text-gray-600">123 Teheran-ro, Gangnam-gu, Seoul</p>
                    <p className="text-sm text-gray-500">10th Floor</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl bg-zinc-50 p-6">
              <h4 className="mb-2 font-medium">Need a quick consultation?</h4>
              <p className="mb-4 text-sm text-gray-600">
                For urgent inquiries, please call us for immediate assistance.
              </p>
              <button 
                className="w-full rounded-lg bg-zinc-600 py-3 text-white transition-colors hover:bg-zinc-700"
                onClick={callSubmit}
              >
                Request a Call
              </button>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-zinc-500"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Phone *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-zinc-500"
                    placeholder="+82) 10-1234-5678"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-zinc-500"
                  placeholder="example@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-transparent focus:ring-2 focus:ring-zinc-500"
                  placeholder="Please describe your requirements or inquiry"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-zinc-600 py-4 text-white transition-colors hover:bg-zinc-700"
              >
                <Send size={20} />
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}