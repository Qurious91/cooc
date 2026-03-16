// Dummy data for Chef-Brand Platform

export interface Chef {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  experience: string;
  location: string;
  bio: string;
  tags: string[];
}

export interface Brand {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  location: string;
  budget: string;
  tags: string[];
}

export interface Proposal {
  id: string;
  from: string;
  fromType: "chef" | "brand";
  title: string;
  description: string;
  date: string;
  status: "pending" | "accepted" | "rejected";
  budget?: string;
}

export interface ScheduleItem {
  id: string;
  date: string;
  title: string;
  time: string;
  isPublic: boolean;
}

export const chefs: Chef[] = [
  {
    id: "1",
    name: "AAA 셰프",
    specialty: "한식 파인다이닝",
    image: "https://images.unsplash.com/photo-1697659602792-31dcb2a5a4ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBjaGVmJTIwY29va2luZyUyMGtpdGNoZW58ZW58MXx8fHwxNzczNjMyNDYzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    experience: "15년",
    location: "서울 강남구",
    bio: "미쉐린 2스타 레스토랑 출신으로 한식의 현대화를 추구합니다.",
    tags: ["한식", "파인다이닝", "미쉐린"],
  },
  {
    id: "2",
    name: "BBB 셰프",
    specialty: "프렌치 디저트",
    image: "https://images.unsplash.com/photo-1449818841066-458e2db9db7f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYXN0cnklMjBjaGVmJTIwYmFraW5nJTIwZGVzc2VydHxlbnwxfHx8fDE3NzM2NTQ4MzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.8,
    experience: "12년",
    location: "서울 서초구",
    bio: "프랑스 르 꼬르동 블루 졸업, 디저트 전문 셰프입니다.",
    tags: ["디저트", "프렌치", "베이커리"],
  },
  {
    id: "3",
    name: "CCC 셰프",
    specialty: "일식 오마카세",
    image: "https://images.unsplash.com/photo-1730635251799-19e51bd60ca5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXNoaSUyMGNoZWYlMjBqYXBhbmVzZXxlbnwxfHx8fDE3NzM2NTQ4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.7,
    experience: "18년",
    location: "서울 용산구",
    bio: "도쿄에서 10년간 수련 후 서울에서 오마카세를 운영하고 있습니다.",
    tags: ["일식", "오마카세", "스시"],
  },
  {
    id: "4",
    name: "DDD 셰프",
    specialty: "이탈리안 요리",
    image: "https://images.unsplash.com/photo-1570054054068-0ad5c3f5136e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpdGFsaWFuJTIwY2hlZiUyMHBhc3RhfGVufDF8fHx8MTc3MzY1NDgzOXww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.6,
    experience: "10년",
    location: "서울 마포구",
    bio: "이탈리아 볼로냐에서 정통 파스타를 배운 이탈리안 전문 셰프입니다.",
    tags: ["이탈리안", "파스타", "피자"],
  },
  {
    id: "5",
    name: "EEE 셰프",
    specialty: "한식 전통요리",
    image: "https://images.unsplash.com/photo-1708388065014-abafa002040a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBjaGVmJTIwY29va2luZ3xlbnwxfHx8fDE3NzM2NTQ4MzV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.9,
    experience: "20년",
    location: "서울 종로구",
    bio: "전통 한식의 맛을 지키면서 현대적 감각을 더하는 것이 목표입니다.",
    tags: ["한식", "전통", "발효"],
  },
  {
    id: "6",
    name: "FFF 셰프",
    specialty: "퓨전 요리",
    image: "https://images.unsplash.com/photo-1609159127964-ef8fc6bc0625?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwdGVhbSUyMGNvbGxhYm9yYXRpb24lMjBraXRjaGVufGVufDF8fHx8MTc3MzY1NDg0MHww&ixlib=rb-4.1.0&q=80&w=1080",
    rating: 4.5,
    experience: "8년",
    location: "서울 성동구",
    bio: "동서양의 맛을 조화롭게 융합하는 퓨전 요리 전문 셰프입니다.",
    tags: ["퓨전", "창작", "모던"],
  },
];

export const brands: Brand[] = [
  {
    id: "1",
    name: "프레시가든",
    category: "유기농 식품",
    image: "https://images.unsplash.com/photo-1760020945158-3e953b4d7ea6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZm9vZCUyMGJyYW5kJTIwaGVhbHRoeXxlbnwxfHx8fDE3NzM2NTQ4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "프리미엄 유기농 식재료를 제공하는 브랜드입니다.",
    location: "서울 강남구",
    budget: "500만원~1000만원",
    tags: ["유기농", "건강", "프리미엄"],
  },
  {
    id: "2",
    name: "테이스트메이커",
    category: "소스 & 조미료",
    image: "https://images.unsplash.com/photo-1615380547241-75c51aad004e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYnJhbmQlMjBwYWNrYWdpbmd8ZW58MXx8fHwxNzczNjU0ODM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "셰프의 손맛을 담은 프리미엄 소스 브랜드입니다.",
    location: "경기 성남시",
    budget: "300만원~800만원",
    tags: ["소스", "조미료", "프리미엄"],
  },
  {
    id: "3",
    name: "모닝브루",
    category: "카페 & 음료",
    image: "https://images.unsplash.com/photo-1758551472232-950e93adb790?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2ZmZWUlMjBicmFuZCUyMGNhZmV8ZW58MXx8fHwxNzczNjU0ODQwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "스페셜티 커피와 디저트를 제공하는 카페 브랜드입니다.",
    location: "서울 마포구",
    budget: "200만원~500만원",
    tags: ["카페", "커피", "디저트"],
  },
  {
    id: "4",
    name: "럭셔리다인",
    category: "레스토랑 프랜차이즈",
    image: "https://images.unsplash.com/photo-1769773297747-bd00e31b33aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjByZXN0YXVyYW50JTIwZGluaW5nfGVufDF8fHx8MTc3MzU1Mzc2M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "고급 다이닝 레스토랑 프랜차이즈를 운영하는 브랜드입니다.",
    location: "서울 강남구",
    budget: "1000만원~3000만원",
    tags: ["레스토랑", "파인다이닝", "프랜차이즈"],
  },
  {
    id: "5",
    name: "델리키친",
    category: "밀키트 & HMR",
    image: "https://images.unsplash.com/photo-1602318223323-9953cff641f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwYnJhbmQlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc3MzY1NDgzNXww&ixlib=rb-4.1.0&q=80&w=1080",
    description: "셰프의 레시피를 담은 프리미엄 밀키트 브랜드입니다.",
    location: "경기 용인시",
    budget: "500만원~1500만원",
    tags: ["밀키트", "HMR", "간편식"],
  },
  {
    id: "6",
    name: "그린팜",
    category: "농산물 직거래",
    image: "https://images.unsplash.com/photo-1767868281101-fd99e41148c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwYnJhbmQlMjBsb2dvJTIwZm9vZHxlbnwxfHx8fDE3NzM2NTQ4MzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    description: "농장에서 직접 재배한 신선한 농산물을 제공합니다.",
    location: "강원 춘천시",
    budget: "100만원~300만원",
    tags: ["농산물", "직거래", "신선"],
  },
];

export const myProposals: Proposal[] = [
  {
    id: "p1",
    from: "프레시가든",
    fromType: "brand",
    title: "유기농 밀키트 공동 개발",
    description: "프리미엄 유기농 재료를 활용한 밀키트를 셰프님과 공동 개발하고 싶습니다. 셰프님의 시그니처 레시피를 기반으로 제품을 출시할 계획입니다.",
    date: "2026-03-14",
    status: "pending",
    budget: "800만원",
  },
  {
    id: "p2",
    from: "럭셔리다인",
    fromType: "brand",
    title: "신규 레스토랑 메뉴 컨설팅",
    description: "강남 신규 매장 오픈을 앞두고 메뉴 구성 및 레시피 개발 컨설팅을 요청드립니다.",
    date: "2026-03-12",
    status: "accepted",
    budget: "1500만원",
  },
  {
    id: "p3",
    from: "모닝브루",
    fromType: "brand",
    title: "시즌 한정 디저트 메뉴 개발",
    description: "봄 시즌 한정 디저트 메뉴를 셰프님과 함께 개발하고 싶습니다.",
    date: "2026-03-10",
    status: "rejected",
    budget: "300만원",
  },
  {
    id: "p4",
    from: "델리키친",
    fromType: "brand",
    title: "프리미엄 밀키트 레시피 감수",
    description: "출시 예정인 프리미엄 밀키트 라인의 레시피를 감수해주실 셰프님을 찾고 있습니다.",
    date: "2026-03-15",
    status: "pending",
    budget: "600만원",
  },
];

export const brandProposals: Proposal[] = [
  {
    id: "bp1",
    from: "AAA 셰프",
    fromType: "chef",
    title: "한식 파인다이닝 콜라보",
    description: "한식 재해석을 통한 프리미엄 제품 라인 개발을 제안드립니다. 한식의 깊은 맛을 현대적으로 표현한 제품을 함께 만들고 싶습니다.",
    date: "2026-03-14",
    status: "pending",
    budget: "1000만원",
  },
  {
    id: "bp2",
    from: "BBB 셰프",
    fromType: "chef",
    title: "디저트 메뉴 개발 제안",
    description: "프렌치 디저트 기법을 활용한 신메뉴 개발을 제안합니다.",
    date: "2026-03-11",
    status: "accepted",
    budget: "500만원",
  },
  {
    id: "bp3",
    from: "CCC 셰프",
    fromType: "chef",
    title: "일식 오마카세 팝업 이벤트",
    description: "특별한 오마카세 팝업 이벤트를 통해 브랜드 인지도를 높이는 협업을 제안합니다.",
    date: "2026-03-13",
    status: "pending",
    budget: "2000만원",
  },
];

export const scheduleItems: ScheduleItem[] = [
  { id: "s1", date: "2026-03-16", title: "프레시가든 미팅", time: "10:00 - 11:30", isPublic: true },
  { id: "s2", date: "2026-03-17", title: "신메뉴 개발 워크숍", time: "14:00 - 17:00", isPublic: true },
  { id: "s3", date: "2026-03-18", title: "TV 촬영 (비공개)", time: "09:00 - 12:00", isPublic: false },
  { id: "s4", date: "2026-03-19", title: "럭셔리다인 메뉴 컨설팅", time: "13:00 - 16:00", isPublic: true },
  { id: "s5", date: "2026-03-20", title: "개인 연구 시간", time: "10:00 - 18:00", isPublic: false },
  { id: "s6", date: "2026-03-21", title: "팝업 레스토랑 운영", time: "17:00 - 22:00", isPublic: true },
  { id: "s7", date: "2026-03-22", title: "요리 클래스", time: "11:00 - 14:00", isPublic: true },
];
