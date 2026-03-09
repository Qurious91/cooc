import { Users, Award, Clock, Shield } from 'lucide-react';

const services = [
  {
    icon: Users,
    title: '맞춤형 셰프 매칭',
    description: '이벤트 성격과 예산에 맞는 최적의 셰프를 추천해드립니다.',
  },
  {
    icon: Award,
    title: '검증된 전문가',
    description:
      '미슐랭 스타부터 전문 요리사까지 철저히 검증된 셰프들만 보유하고 있습니다.',
  },
  {
    icon: Clock,
    title: '빠른 대응',
    description: '24시간 이내 최적의 셰프 후보를 제안하고 일정을 조율합니다.',
  },
  {
    icon: Shield,
    title: '안심 보증',
    description: '계약서 작성부터 이벤트 종료까지 전 과정을 책임지고 관리합니다.',
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl text-gray-900">우리의 서비스</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            셰프 섭외의 모든 과정을 원스톱으로 지원합니다
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
                  <Icon className="text-teal-700" size={28} />
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