# x402 Project

솔라나 블록체인 기반의 x402 프로젝트 홈페이지입니다.

## 기능

- ✨ 깔끔하고 현대적인 디자인
- 🔄 로딩 화면
- 🔗 상단 네비게이션 (Twitter, Docs, App)
- 👛 팬텀월릿 연결 지원
- 🎨 화이트 톤 + 검정 테두리 디자인
- ⚡ 솔라나 블록체인 연동

## 설치 및 실행

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev

# 빌드
npm run build

# 빌드 미리보기
npm run preview
```

## 프로젝트 구조

```
src/
├── components/      # 재사용 가능한 컴포넌트
│   ├── Header.jsx  # 헤더 네비게이션
│   └── Loading.jsx # 로딩 화면
├── pages/          # 페이지 컴포넌트
│   ├── Home.jsx    # 홈 페이지
│   └── App.jsx     # 앱 페이지 (월릿 연결)
└── App.jsx         # 메인 앱 컴포넌트
```

## 기술 스택

- React 18
- Vite
- React Router
- Solana Wallet Adapter
- Phantom Wallet

## 라이선스

MIT

