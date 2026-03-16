import { MessageSquare, Search, FileCheck, Calendar } from 'lucide-react';

const steps = [
  {
    icon: MessageSquare,
    title: '상담 신청',
    description: '이벤트 정보와 요구사항을 알려주세요',
    step: '01',
  },
  {
    icon: Search,
    title: '셰프 매칭',
    description: '최적의 셰프 후보를 선정하여 제안합니다',
    step: '02',
  },
  {
    icon: FileCheck,
    title: '계약 체결',
    description: '조건 협의 후 안전한 계약을 진행합니다',
    step: '03',
  },
  {
    icon: Calendar,
    title: '이벤트 진행',
    description: '당일까지 꼼꼼하게 관리하고 지원합니다',
    step: '04',
  },
];

export default function Process() {
  return (
    <section id="process" className="bg-gray-50 py-20 text-gray-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl sm:text-4xl md:text-5xl">프로세스</h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            간단한 4단계로 완벽한 셰프 섭외를 경험하세요
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