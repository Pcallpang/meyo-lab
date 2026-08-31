export const profile = {
  teacherName: "미요Lab",
  title: "미요Lab 미요앱 실험실",
  introTitle: "미요Lab 미요앱 실험실",
  introDescription: "미요툰, 미요앱 시리즈로 미요 세계관을 위한 실험실",
  catalogTitle: "미요Lab 활동 탭",
  catalogDescription: "미요앱 시리즈와 소개를 구경해보세요.",
  /* 왼쪽 프로필 사진입니다. public/assets/ 안에 파일을 넣고 경로를 적으세요. */
  photo: { src: "/assets/miyo-profile.png", alt: "더드미요 캐릭터" },
  /* 홈 탭 위쪽 미니룸 이미지입니다. public/assets/ 안에 파일을 넣고 경로를 적으세요. */
  miniroom: { src: "/assets/miyo-miniroom.png", alt: "미요 미니룸" },
  /* 아래는 탭 이름표입니다. 나만의 이름으로 바꿔도 되고, 안 바꾸면 기본값 그대로 나옵니다. */
  storyLabel: "미요툰",
  boardLabel: "미요앱",
  boardSubtitle: "앱과 게시글",
  boardEmptyText: "아직 올린 글이 없습니다.",
  photoLabel: "사진첩",
  photoSubtitlePrefix: "미요 캐릭터",
  /* 오른쪽 위, 옛날 싸이월드 주소창을 흉내 낸 문구입니다. */
  displayUrl: "http://cyworld.com/miyolab"
};

/* 프로필 탭에 들어가는 소개 글입니다. 문구만 바꿔서 쓰세요. */
export type ProfileBlock =
  | { kind: "text"; lines: string[] }
  | { kind: "list"; heading: string; items: string[] }
  | { kind: "contact"; items: { label: string; value: string; href: string }[] };

export type ProfileSection = {
  id: string;
  title: string;
  /* 제목 옆 작은 글씨입니다. 생략하면 제목만 나옵니다. */
  subtitle?: string;
  blocks: ProfileBlock[];
};

export const profileSections: ProfileSection[] = [
  {
    id: "instructor",
    title: "소개",
    blocks: [
      {
        kind: "text",
        lines: [
          "안녕하세요, 이준혁입니다 🍀",
          "학창 시절엔 물리를 배운 적이 없었습니다. 그런데 지금은, 그 물리를 가르치는 교사가 되었고 이제는 좋아하게 되어버렸습니다. 돌고 돌아 물리에 진심이 된 교직 경력 10년차 교사입니다.",
          "수업 시간에는 물리를, 수업이 끝나면 캐릭터 '미요'를 그리고 이야기를 만듭니다. 미요툰 작가이자, 미요 세계관을 앱으로 옮기는 미요앱 개발자로도 활동하고 있습니다. 요즘은 바이브 코딩으로 학급 경영과 수업에 필요한 도구들을 직접 만드는 재미에도 푹 빠져 있습니다."
        ]
      },
      {
        kind: "list",
        heading: "하고 있는 일들",
        items: [
          "고등학교 3학년 담임 & 물리 교과 지도",
          "아주대학교 AI융합교육과 석사 졸업",
          "평택시 진학지도 리더교사 운영진 (2023~현재)",
          "화성·평택·용인·안성 찾아가는 1:1 맞춤형 진로진학 컨설팅",
          "평택·용인·안성 진학박람회 진학컨설팅 부스 운영",
          "경기도 물리교육 연구회 / AX교육전환 전국단위 연구회 (2026)",
          "하이러닝 연구학교 및 AI서논술형 연구회 (2025~현재)",
          "Dorms 교사 커뮤니티 활동 (2026)"
        ]
      },
      {
        kind: "list",
        heading: "강의 경력",
        items: [
          "2026 경기진협 의치한약수 전형 분석 자료 제작",
          "2026 물리 신규교사 대상 하이러닝 및 에듀테크 교사 연수",
          "2026 안산 양지고 하이러닝 및 에듀테크 교사 연수",
          "2026 행정혁신 생성형 Gemini 활용법 행정직원 연수"
        ]
      },
      {
        kind: "contact",
        items: [
          { label: "📩 Email", value: "ljh6479z@gmail.com", href: "mailto:ljh6479z@gmail.com" },
          { label: "📷 미요툰", value: "@me_yotoon", href: "https://www.instagram.com/me_yotoon" },
          { label: "📷 미요앱", value: "@me_yoapp", href: "https://www.instagram.com/me_yoapp/" }
        ]
      }
    ]
  },
  {
    id: "miyotoon",
    title: "미요툰 소개",
    subtitle: "그림으로 남기는 기록",
    blocks: [
      {
        kind: "text",
        lines: [
          "미요툰은 미요 캐릭터들이 등장하는 짧은 만화입니다.",
          "수업하다 만난 순간, 배우다 겪은 실수를 한 컷으로 남깁니다.",
          "새 에피소드는 인스타그램 @me_yotoon 에 먼저 올라갑니다."
        ]
      }
    ]
  },
  {
    id: "miyoapp",
    title: "미요앱 소개",
    subtitle: "직접 만드는 작은 도구",
    blocks: [
      {
        kind: "text",
        lines: [
          "미요앱은 수업에 바로 쓰려고 만든 작은 웹 도구 모음입니다.",
          "설치 없이 링크만 열면 되는 가벼운 형태를 지향합니다.",
          "완성한 앱은 미요앱 탭에 하나씩 올릴 예정입니다."
        ]
      }
    ]
  }
];

/* 미요툰 회차는 src/config/miyotoon.ts 에 있습니다. */
export { episodes, type Episode } from "./miyotoon";

/* 미요앱 탭입니다. 앱과 게시글 링크를 여기에 추가하세요.
   preview 는 화면 미리보기 이미지입니다. public/assets/apps 에 넣고 경로를 적으세요.
   생략하면 썸네일 없이 제목만 나옵니다. */
export type BoardPost = {
  id: string;
  category: "앱" | "글";
  title: string;
  summary?: string;
  date: string;
  href: string;
  preview?: { src: string; alt: string };
};

export const boardPosts: BoardPost[] = [
  {
    id: "liftlog",
    category: "앱",
    title: "더드미요의 운동추천",
    summary: "더드미요 트레이너와 대화하며 운동을 기록하고 타이머로 세트를 관리합니다.",
    date: "2026.08.11",
    href: "https://liftlog-qayq.onrender.com/",
    preview: { src: "/assets/miyo/miyo-00.jpg", alt: "더드미요 캐릭터" }
  },
  {
    id: "aseating",
    category: "앱",
    title: "갓미요의 스마트AI 자리배치",
    summary: "교실 자리를 조건에 맞게 자동으로 배치해 주는 교사용 도구입니다.",
    date: "2026.08.11",
    href: "https://sn-aseating.vercel.app/login.html",
    preview: { src: "/assets/miyo/miyo-03.jpg", alt: "갓미요 캐릭터" }
  },
  {
    id: "miyo-trip",
    category: "앱",
    title: "야르미요의 여행플래너",
    summary: "여행 일정을 D-day와 함께 모아 보는 플래너입니다.",
    date: "2026.08.11",
    href: "https://miyo-trip.vercel.app/",
    preview: { src: "/assets/miyo/miyo-14.jpg", alt: "야르미요 캐릭터" }
  },
  {
    id: "miyo-planner",
    category: "앱",
    title: "미요의 플래너",
    summary: "할 일과 일정을 미요와 함께 계획하고 관리하는 플래너입니다.",
    date: "2026.08.14",
    href: "https://miyo-planner.vercel.app/",
    preview: { src: "/assets/miyo/miyo-01.jpg", alt: "미요 캐릭터" }
  },
  {
    id: "majorcompass",
    category: "앱",
    title: "왜요의 전공 맞춤 진로 설계",
    summary: "우리 학교 편제표에 맞춰 희망학과 선택 과목을 추천해주는 도구입니다.",
    date: "2026.08.16",
    href: "https://majorcompass-phi.vercel.app/",
    preview: { src: "/assets/miyo/miyo-13.jpg", alt: "왜요미요 캐릭터" }
  },
  {
    id: "naengjanggo",
    category: "앱",
    title: "훈수미요의 냉장고를 부탁해",
    summary: "냉장고 속 재료로 만들 수 있는 요리를 추천해주는 도구입니다.",
    date: "2026.08.23",
    href: "https://naengjanggo-butakhae.vercel.app/",
    preview: { src: "/assets/miyo/miyo-09.jpg", alt: "훈수미요 캐릭터" }
  }
];

/* 사진첩 탭입니다. */
export type PhotoItem = {
  id: string;
  name: string;
  src: string;
};

export const photos: PhotoItem[] = [
  { id: "miyo-00", name: "더드미요", src: "/assets/miyo/miyo-00.jpg" },
  { id: "miyo-01", name: "미요", src: "/assets/miyo/miyo-01.jpg" },
  { id: "miyo-02", name: "미요X (사춘기)", src: "/assets/miyo/miyo-02.jpg" },
  { id: "miyo-03", name: "갓미요", src: "/assets/miyo/miyo-03.jpg" },
  { id: "miyo-04", name: "삐질미요", src: "/assets/miyo/miyo-04.jpg" },
  { id: "miyo-05", name: "맑눈광미요", src: "/assets/miyo/miyo-05.jpg" },
  { id: "miyo-06", name: "무뚝미요", src: "/assets/miyo/miyo-06.jpg" },
  { id: "miyo-07", name: "빡미요", src: "/assets/miyo/miyo-07.jpg" },
  { id: "miyo-08", name: "넵미요", src: "/assets/miyo/miyo-08.jpg" },
  { id: "miyo-09", name: "훈수미요", src: "/assets/miyo/miyo-09.jpg" },
  { id: "miyo-10", name: "핑프미요", src: "/assets/miyo/miyo-10.jpg" },
  { id: "miyo-11", name: "무지개반사미요", src: "/assets/miyo/miyo-11.jpg" },
  { id: "miyo-12", name: "앵무미요", src: "/assets/miyo/miyo-12.jpg" },
  { id: "miyo-13", name: "왜요미요", src: "/assets/miyo/miyo-13.jpg" },
  { id: "miyo-14", name: "야르미요", src: "/assets/miyo/miyo-14.jpg" },
  { id: "miyo-15", name: "갸루미요", src: "/assets/miyo/miyo-15.jpg" }
];

/* 왼쪽 아래 파도타기 목록입니다.
   고정 규칙: 첫 번째 항목은 반드시 "도름스 커뮤니티 나의 활동" 링크입니다. 지우지 마세요. */
export type WaveLink = {
  id: string;
  label: string;
  href: string;
};

export const waveLinks: WaveLink[] = [
  { id: "dorms-activity", label: "도름스 커뮤니티 나의 활동", href: "https://dorms.school/channels/3fad9324-3dee-49ae-8b5c-0a6686d85add" },
  { id: "miyotoon", label: "미요툰 인스타그램", href: "https://www.instagram.com/me_yotoon" },
  { id: "miyoapp", label: "미요앱 인스타그램", href: "https://www.instagram.com/me_yoapp/" },
  { id: "hamssaem-studio", label: "함쌤 작업실", href: "https://progh2.github.io/mini-homepage/" }
];

/* 미니홈피 BGM 입니다. 유튜브 영상을 음원으로 씁니다.
   videoId 는 https://www.youtube.com/watch?v=abcd1234XYZ 에서 v= 뒤에 오는 값입니다.
   배열을 비우면 플레이어가 아예 표시되지 않습니다.

   여러 곡이 이어진 플레이리스트 영상이라면, 같은 videoId 를 쓰면서 startAt 에
   각 곡이 시작하는 지점을 초 단위로 적으세요. 제목을 누르면 그 지점부터 재생됩니다.
   startAt 은 secondsAt("3:21") 처럼 적으면 편합니다. */
export type BgmTrack = {
  id: string;
  title: string;
  artist?: string;
  videoId: string;
  /* 영상 안에서 이 곡이 시작하는 지점입니다. 초 단위이고, 생략하면 처음부터입니다. */
  startAt?: number;
};

/* "3:21" 이나 "1:02:30" 을 초로 바꿔 줍니다. */
export function secondsAt(timestamp: string): number {
  return timestamp
    .split(":")
    .map(Number)
    .reduce((total, part) => total * 60 + part, 0);
}

const CYWORLD_BGM = "ShxagKy3CHQ";

/* 한 영상 안에 이어 붙은 곡들입니다. startAt 이 작은 것부터 차례로 적어야
   재생이 흘러갈 때 현재 곡 표시가 제대로 따라갑니다. */
export const bgmTracks: BgmTrack[] = [
  ["0:01", "프리스타일", "Y"],
  ["4:35", "샵(S#arp)", "내 입술 따뜻한 커피처럼"],
  ["8:19", "윤미래", "Memories"],
  ["12:30", "박명호", "사진(하늘만 바라봐)"],
  ["16:27", "에픽하이", "우산 (feat. 윤하)"],
  ["21:22", "리쌍", "Ballerino"],
  ["25:44", "키네틱플로우", "몽환의 숲 (feat. 이루마)"],
  ["29:49", "MC몽", "너에게 쓰는 편지 (feat. 린)"],
  ["33:15", "브라운 아이즈", "벌써 일년"],
  ["36:41", "김동률", "다시 사랑한다 말할까"],
  ["41:27", "프리스타일", "수취인불명"],
  ["45:25", "싸이", "낙원 (feat. 이재훈)"],
  ["49:07", "MC 스나이퍼", "BK Love"],
  ["53:28", "타우", "우리들의 행복한 시간"],
  ["57:15", "넬", "기억을 걷는 시간"],
  ["1:02:27", "다이나믹 듀오", "Ring My Bell"],
  ["1:06:15", "바이브", "Promise U"],
  ["1:10:19", "포맨", "다시 사랑할 수 있을까"],
  ["1:14:59", "Brown Eyed Girls", "Far Away (feat. MC몽)"],
  ["1:18:41", "키네틱플로우", "헤어지던 밤 (feat. 혜란)"],
  ["1:23:04", "리쌍", "헤어지지 못하는 여자, 떠나가지 못하는 남자"],
  ["1:27:47", "임정희", "눈물이 안났어"],
  ["1:31:24", "씨야", "사랑의 인사"],
  ["1:35:56", "izi", "응급실"],
  ["1:39:38", "버즈", "남자를 몰라"],
  ["1:43:47", "에이트", "사랑을 잃고 난 노래하네"],
  ["1:47:47", "리쌍", "Rush (feat. 정인)"],
  ["1:51:38", "나얼", "귀로"],
  ["1:56:03", "김종국 & SG워너비", "바람만 바람만"],
  ["2:00:23", "마골피", "비행소녀"],
  ["2:05:59", "버즈", "가시"],
  ["2:08:58", "MC스나이퍼", "봄이여 오라"],
  ["2:12:42", "리즈", "그댄 행복에 살텐데"],
  ["2:17:21", "바이브", "사진을 보다가"],
  ["2:21:56", "클래지콰이", "She Is"],
  ["2:25:40", "더 넛츠", "잔소리"],
  ["2:29:36", "임정희", "시계태엽"],
  ["2:33:05", "배치기", "현관을 열면"],
  ["2:37:48", "이루", "까만안경"]
].map(([at, artist, title], i) => ({
  id: `bgm-${String(i + 1).padStart(2, "0")}`,
  title,
  artist,
  videoId: CYWORLD_BGM,
  startAt: secondsAt(at)
}));

/* 홈 탭 아래쪽 한마디입니다. */
export type GuestbookEntry = {
  id: number;
  author: string;
  text: string;
  date: string;
};

export const guestbook: GuestbookEntry[] = [
  { id: 1, author: "김선생", text: "미요Lab 너무 기대됩니다! 화이팅!", date: "2026.08.09" },
  { id: 2, author: "미요팬", text: "미요앱 시리즈 언제 나오나요? 현기증 나요", date: "2026.08.08" },
  { id: 3, author: "박교사", text: "더드미요 표정 볼 때마다 웃겨요 ㅋㅋㅋ", date: "2026.08.07" },
  { id: 4, author: "코딩하는쌤", text: "미니룸에 있는 캐릭터들 다 이름이 있나요? 궁금해요", date: "2026.08.05" },
  { id: 5, author: "최학생", text: "선생님 홈피 너무 예뻐요 퍼가요~♡", date: "2026.08.01" }
];
