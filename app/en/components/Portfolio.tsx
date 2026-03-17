import { Star, MapPin } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: 'AAAA Product Launch Party',
    chef: 'Chef AAA',
    location: 'Gangnam, Seoul',
    rating: 5,
    guests: 200,
    image:
      'https://images.unsplash.com/photo-1770005639914-e57bd01d86d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Modern French course dining by a Michelin 3-star chef',
  },
  {
    title: 'BB Department Store VIP Private Dining',
    chef: 'Chef BBB',
    location: 'Apgujeong, Seoul',
    rating: 5,
    guests: 50,
    image:
      'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: '7-course Italian fine dining experience',
  },
  {
    title: 'Official Reception of International Film Festival',
    chef: 'Chef CCC',
    location: 'Haeundae, Busan',
    rating: 5,
    guests: 300,
    image:
      'https://images.unsplash.com/photo-1767785990437-dfe1fe516fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Fusion catering combining Korean and Western cuisine',
  },
  {
    title: 'Wedding Private Chef Service',
    chef: 'Chef DDD',
    location: 'Jeju Island',
    rating: 5,
    guests: 80,
    image:
      'https://images.unsplash.com/photo-1717838207789-62684e75a770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: 'Customized course dining tailored for weddings',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl">Portfolio</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Explore our successfully completed projects.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow hover:shadow-2xl"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6">
                <h3 className="mb-2 text-2xl">{project.title}</h3>

                <p className="mb-4 text-gray-600">
                  {project.description}
                </p>

                <div className="mb-4 flex items-center gap-4">
                  <div className="flex items-center gap-1">
                    <MapPin size={16} className="text-gray-500" />
                    <span className="text-sm text-gray-600">
                      {project.location}
                    </span>
                  </div>

                  <div className="flex items-center gap-1">
                    {[...Array(project.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-500 text-yellow-500"
                      />
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between border-t border-gray-200 pt-4">
                  <div>
                    <p className="text-sm text-gray-500">Assigned Chef</p>
                    <p className="font-medium">{project.chef}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500">Guests</p>
                    <p className="font-medium">{project.guests} guests</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}