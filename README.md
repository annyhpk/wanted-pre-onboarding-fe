# :: 원티드 프리온보딩 프론트엔드 코스 사전과제 결과

## Quick Overview

```
npm install

npm run start
```

\*\* React를 구동할 수 있는 기본적인 환경이 필요합니다.

## 역할
| 이름  | 역할                                         |
|-----|--------------------------------------------|
| 김찬호 | GNB, 피드 컴포넌트 구현, 로그인 컴포넌트-밸리데이션 구현, 라우터 구현 |

# :: 폴더 구조

---
```plaintext
├── src
│   ├── components
│   │     ├── Feed
│   │     │   ├── index.jsx
│   │     │   └── style.js
│   │     ├── FeedImage
│   │     │   ├── index.jsx
│   │     │   └── style.js
│   │     ├── GlobalNavigatior
│   │     │   ├── index.jsx
│   │     │   └── style.js
│   │     ├── LoginForm
│   │     │   ├── index.jsx
│   │     │   └── style.js
│   │     └── Spliner
│   │         └── index.jsx
│   │
│   ├── context
│   │     └── LoginContext.js
│   ├── hooks
│   │     └── useValidation.js
│   ├── pages
│   │     ├── LoginPage.jsx
│   │     ├── MainPage.jsx
│   │     └── PreAssignmentGuide.jsx  
│   ├── styles
│   │     └── globalStyles.js
│   │
│   ├── App.js
│   └── index.js
│
├── public
│   └── data
│        └── feedData.json


```

## 로그인 기능 - `Login`

- [x] 로그인 컴포넌트 개발 (`input` 2개, `button` 1개)
- [x] 렌더링 최적화 (Submit 할 때 Form Ref를 사용하여 FormData 인스턴스에 담아 사용 )
- [x] 로그인 시 ID, PW 모두 입력 후 버튼 활성화.
- [x] Local Storage 에 로그인 정보 저장 (다시 접속했을 경우에 정보가 유지)
- [x] 로그인 성공시 메인 페이지로 이동.

## 글로벌 네비게이션 바 - `GNB`

- [x] css`position sticky`를 사용하여 항상 고정된 GNB 구현.
- [x] 모바일`640px`의 경우 `Input 창`이 사라지고 `space-between`정렬.
- [x] GNB 가장 오른쪽 `Logout 버튼` 구현.

## input 값 검증 - `Validation`

- [x] 이메일과 비밀번호의 유효성을 확인.
  - 이메일 조건 - `@` , `.` 포함.
  - 비밀번호 조건 - 대문자, 숫자, 특수문자 포함 8자리 이상.
  - 정규 표현식을 사용하여 Validation 함수를 만들고 분리
- [x] Validation 상태를 CSS로 표현.
  - Email Input
    - 이메일 조건을 만족하지 못하면 input의 border를 red 색상으로 변경 및 input 하단에 조건 표시
  - Password Input
    - 비밀번호 조건을 만족하지 못하면 input의 border를 red 색상으로 변경 및 input 하단에 조건 표시
  - Login Button
    - Validation Check가 모두 통과된 경우에만 Button 활성화.

## 라우팅 - `Routing`

- [x] 로그인,로그아웃 시 라우팅 로직을 통해 페이지가 이동 되도록 구현. 
  - localStorage를 사용하여 로그인 상태 저장하고 페이지 이동시 로그인상태를 체크하여 라우팅
  - contextAPI를 이용하여 전역상태 초기값으로 localStorage를 불러오도록 구현.


## 게시물(피드) - `Feeds`

- [x] 피드 컴포넌트 레이아웃을 인스타그램과 유사하게 구현.
- [x] public/data 디렉토리에 `feedData.json`로 구성하여 fetch, axios 등을 이용하여 data를 요청.
- [x] Feed는 최소 3개이상 렌더링 되도록 구현.
- [ ] 각각의 Feed에 댓글을 추가할 수 있도록 개발해주세요. (Enter key & 클릭으로 게시 가능하도록)
- [x] Feed는 화면 중앙에 위치 해야하며 모바일 대응이 가능해야 합니다.
- [ ] 게시 후 Input은 초기화 되어야 합니다.
- [x] Feed의 이미지는 자유롭게 사용하시되 각각 사이즈가 각각 달라야 합니다. (ex. 정사각형, 세로가 긴 것, 가로가 긴 것 등)
- [x] Feeds의 Image가 로딩된 후 컴포넌트가 로딩 되도록 Loading을 구현.

