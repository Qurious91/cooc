import { Users, Award, Clock, Shield } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: 'Personalized Chef Matching',
    description:
      'We recommend the most suitable chefs based on your event type and budget.',
  },
  {
    icon: Award,
    title: 'Verified Professionals',
    description:
      'From Michelin-starred chefs to experienced professionals, all chefs are thoroughly vetted.',
  },
  {
    icon: Clock,
    title: 'Fast Response',
    description:
      'We propose the best chef candidates and coordinate schedules within 24 hours.',
  },
  {
    icon: Shield,
    title: 'Reliable Guarantee',
    description:
      'We take full responsibility for the entire process, from contract signing to event completion.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl text-gray-900">Services</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We provide end-to-end support for every step of chef booking.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100">
                  <Icon className="text-zinc-700" size={28} />
                </div>

                <h3 className="mb-3 text-xl">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}