import { MessageSquare, Search, FileCheck, Calendar } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: 'Consultation Request',
    description: 'Tell us about your event details and requirements.',
    step: '01',
  },
  {
    icon: Search,
    title: 'Chef Matching',
    description: 'We carefully select and propose the most suitable chefs.',
    step: '02',
  },
  {
    icon: FileCheck,
    title: 'Contract Agreement',
    description: 'We finalize terms and proceed with a secure contract.',
    step: '03',
  },
  {
    icon: Calendar,
    title: 'Event Execution',
    description: 'We provide thorough management and support through the event day.',
    step: '04',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-gray-50 py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl">Process</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Experience seamless chef booking in just four simple steps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={index} className="relative">
                {index < steps.length - 1 && (
                  <div className="absolute top-10 left-[60%] z-0 hidden h-0.5 w-full bg-zinc-200 lg:block" />
                )}

                <div className="relative z-10 rounded-2xl bg-white p-8 shadow-sm transition-shadow hover:shadow-xl">
                  <div className="absolute -top-4 -right-4 flex h-12 w-12 items-center justify-center rounded-full bg-zinc-700 text-white">
                    {step.step}
                  </div>

                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-100">
                    <Icon className="text-zinc-700" size={28} />
                  </div>

                  <h3 className="mb-3 text-xl">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}