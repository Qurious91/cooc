import { Star, MapPin } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    title: '삼성전자 신제품 런칭 파티',
    chef: '김준호 셰프',
    location: '서울 강남',
    rating: 5,
    guests: 200,
    image:
      'https://images.unsplash.com/photo-1770005639914-e57bd01d86d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: '미슐랭 3스타 셰프의 모던 프렌치 코스 요리',
  },
  {
    title: '현대백화점 VIP 프라이빗 다이닝',
    chef: '박서연 셰프',
    location: '서울 압구정',
    rating: 5,
    guests: 50,
    image:
      'https://images.unsplash.com/photo-1768697358705-c1b60333da35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: '이탈리안 파인 다이닝 7코스',
  },
  {
    title: '국제 영화제 공식 리셉션',
    chef: '이동욱 셰프',
    location: '부산 해운대',
    rating: 5,
    guests: 300,
    image:
      'https://images.unsplash.com/photo-1767785990437-dfe1fe516fe8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: '한식과 양식의 퓨전 케이터링',
  },
  {
    title: '결혼식 프라이빗 셰프 서비스',
    chef: '최민지 셰프',
    location: '제주도',
    rating: 5,
    guests: 80,
    image:
      'https://images.unsplash.com/photo-1717838207789-62684e75a770?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    description: '웨딩을 위한 맞춤형 코스 요리',
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-white py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl">포트폴리오</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            성공적으로 진행한 프로젝트들을 소개합니다
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
                    <p className="text-sm text-gray-500">담당 셰프</p>
                    <p className="font-medium">{project.chef}</p>
                  </div>

                  <div className="text-right">
                    <p className="text-sm text-gray-500">참석 인원</p>
                    <p className="font-medium">{project.guests}명</p>
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