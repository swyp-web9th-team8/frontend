## 프로젝트 구조

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx
│   ├── page.tsx
│   └── (routes)/          # 라우트 그룹
├── assets/                 # 이미지, 비디오, 폰트트 등
│   ├── fonts/
│   ├── icons/
│   ├── images/
├── components/            # 아토믹 디자인 컴포넌트
│   ├── atoms/            # 기본 UI 요소
│   │   ├── Button/
│   │   │   ├── Button.tsx
│   │   │   └── index.ts
│   ├── molecules/        # Atoms 조합
│   ├── organisms/        # 복잡한 컴포넌트
│   └── templates/        # 페이지 템플릿
├── constants/           # 상수
├── data/                # 데이터
├── hooks/               # 커스텀 훅
│   ├── queries/           # 데이터 fetching
│   ├── mutations/         # 데이터 수정
│   ├── features/          # 이외의의 훅
├── stores/              # 스토어어
├── styles/              # 스타일일
├── types/               # 타입 정의
└── utils/               # 유틸리티 함수
```
