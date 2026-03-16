import Image from 'next/image';

const categories = [
  {
    title: 'AAAA',
    description: 'AAAA',
    specialties: ['AAAA', 'AAAA', 'AAAA'],
    image:
      'https://images.unsplash.com/photo-1770005639914-e57bd01d86d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwcGxhdGVkJTIwZm9vZHxlbnwxfHx8fDE3NzI2NTEwODJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'BBBB',
    description: 'BBBB',
    specialties: ['BBBB', 'BBBB', 'BBBB'],
    image:
      'https://images.unsplash.com/photo-1767785990437-dfe1fe516fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdWxpbmFyeSUyMHRlYW0lMjBraXRjaGVufGVufDF8fHx8MTc3MjY1Mjg3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'CCCC',
    description: 'CCCC',
    specialties: ['CCCC'],
    image:
      'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwcmVzdGF1cmFudCUyMGludGVyaW9yfGVufDF8fHx8MTc3MjYzNDczNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
  {
    title: 'DDDD',
    description: 'DDDD',
    specialties: ['DDDD', 'DDDD', 'DDDD'],
    image:
      'https://images.unsplash.com/photo-1717838207789-62684e75a770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGVmJTIwY29va2luZyUyMHJlc3RhdXJhbnR8ZW58MXx8fHwxNzcyNjAwNjA3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
  },
];

export default function Chefs() {
  return (
    <section id="chefs" className="bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl">셰프</h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {categories.map((category, index) => (
            <div
              key={`with-image-${index}`}
              className="group relative overflow-hidden rounded-2xl shadow-md transition-all hover:shadow-2xl"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>

              <div className="absolute right-0 bottom-0 left-0 p-6 text-white">
                <h3 className="mb-2 text-xl">{category.title}</h3>
                <p className="mb-3 text-sm text-gray-200">{category.description}</p>
                <div className="flex flex-wrap gap-2">
                  {category.specialties.map((specialty, idx) => (
                    <span
                      key={idx}
                      className="rounded-full bg-white/20 px-3 py-1 text-xs backdrop-blur-sm"
                    >
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}