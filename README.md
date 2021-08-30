# ls-tech

- [x] 로그인 페이지 구현 (회원가입 x)
- [x] 글쓰기, 글 보기 구현 (=상태관리) 
- [x] Quill 글쓰기 구현 (https://github.com/zenoamaro/react-quill) --> next 9버전 이상 필요 (global css load)
- [x] Quill 글쓴거 데이터베이스와 연동 및 게시글 보이기  
- [x] Quill 글쓰는칸에 이미지 붙여넣기 
- [x] Quill (markdown -> 원 글씨)  (https://codepen.io/ckujawa/pen/ExVOYEZ)
- [x] AntD Css 손보기 
- [x] 해시태그 구현 --> next는 동적 주소 불가: express + next 구현     
- [x] 해시태그 검색기능
- [x] 해시태그 정규표현식 수정 `ex) #오렌지<li>#사과</li>`  --> https://regexr.com   
- [x] DB 연동 (=Sequalize)
- [x] NextJS에서 markdown으로 작성한 콘텐츠를 보여주는 방법 --> https://growd.tistory.com/78
- [x] React Nextjs에서 tui.editor 사용하기 ("@toast-ui/react-editor": "^2.0.1",) 📌
  - https://github.com/myeongjae-kim/tui.editor-with-nextjs
  - https://myeongjae.kim/blog/2020/04/05/tui-editor-with-nextjs
- [x] 닉네임 변경 (비밀번호 변경 X --> me객체) 
- [x] 글 수정 기능   
- [x] 글 수정 버튼 보이는 범위 --> 글쓴이에게만 보이는 로직
- [x] floating button --> 상태좋은 라이브러리 없음 --> 제작 X
- [x] 페이지네이션 제작 --> https://cotak.tistory.com/112 --> TODO: 로직 짜기 
- [ ] ✔ 트리구조 페이지 (=컨플루언스) --> 모달창 띄우기 --> 🚫로그인했을때만 보여지도록 
  - 팀 페이지 + 개인 페이지 --> 현재 생각중인 구조: 팀위키(공통), 개인위키(private), 추가위키(=사용자 생성)
  - TODO: Workspace생성 버튼(+) --> 누르면, 워크스페이스 생성 (=모달창)
  - TODO: postDB에 treeNumber 컬럼(=난수) 추가 --> 방법: sequelize수정후, node_moduels삭제후, back>npm run dev
  - TODO: pages --> root임. /spaces/{WorkspaceName앞 세글자}/pages 들어갔을때, 해당 pages안의 recent posts 보여주기 
  - TODO: pages [...] 버튼 누르면, 총 2단계까지만 생성가능하도록. Big Subject , Small Subject (=티스토리)
  - TODO: 라우터 구조체계 다 바꿔야됨 (기존: /article/1)
  - TODO: 끝단 url : /spaces/{WorkspaceName앞 세글자}/pages/{treeNumber}/YM(=페이지 이름) --> 여기에도 post있을 수 있고, 
  - TODO: 또는 url : /spaces/{WorkspaceName앞 세글자}/pages/{treeNumber}/YM/algorithm(=페이지 이름) --> 여기에도 post있을 수 있다
- [ ] ✔ 화면 왼쪽 layout Router 이슈
  - https://0strich.tistory.com/37
  - https://codingbroker.tistory.com/72
- [ ] ✔ 검색봇이 긁어갈 수 있는 범위 설정 --> robots.txt: https://searchadvisor.naver.com/guide/seo-basic-robots
- [ ] ✔ `비밀글` 선택/비선택
- [ ] ✔ 글 공유 기능 
- [x] footer 제작 (=toss-tech) --> 불가능 --> 페이지 3구역으로 나눠놨음 
- [x] 시간지나면, 게시글 자동저장 & 임시저장 
  - 서버 갔다오면 안됨. front에서 session에 가지고 있어야됨 
  - `redux-persist` 쓰면 안됨. 내가 바꾸려는건 글쓰기 text임. 이건 reducer에서 가져오는게 아님 
  - `redux-persist` 놀라운 오류 해결 --> https://github.com/rt2zz/redux-persist/issues/826#issuecomment-410146610
  - JS localStorage 사용하자 (window.localStorage) --> localStorage VS sessionStorage 
  - useEffect()로 웹 스토리지에 상태 저장하기: https://www.daleseo.com/react-hooks-use-web-storage/ 
  - Next.js에서 window 사용 불가한 이유: https://sumini.dev/issue/000-nextjs-window,document-is-not-defined/  
  - Next.js에서 window 사용 가능한 방법: https://velog.io/@sji7532/Next-Next%EC%97%90%EC%84%9C%EC%9D%98-alert-window-document-localStorage-%EC%82%AC%EC%9A%A9-%EA%B0%80%EB%8A%A5%ED%95%A0%EA%B9%8C
- [ ] 💥 버그: 새 글 쓸때도 localStorage에 있는 글자들 불러오고 있음 
- [ ] 💥 버그: 브라우저 창 축소시키면, 화면 무너짐
- [ ] 💥 버그: 글 등록하면, 화면에 2개등록된것 처럼 보임 (처음만)
- [ ] 💥 수정할 사항: antd아이콘 너무 무거움   
- [ ] ✔ 깃허브 연동 (=단군 소프트 help) 
- [ ] ✔ 웹 서비스 캐시 똑똑하게 다루기 --> https://toss.tech/article/smart-web-service-cache 
- [ ] 🙄 게시글 검색기능 (=반응형)  --> 시간 남으면 마지막에 만들기 --> AppLayout과 index.js 상태를 어떻게 연결..????
- [ ] 🙄 프로필 사진 수정 기능 --> 시간 남으면 만들기 
- [x] MD Viewer
- [ ] HTML Viewer
- [ ] Excel Viewer
- [ ] SSR 적용 
- [ ] 렌더링 최적화 (=속도 문제 개선)
- [ ] ✔ Next Code splitting --> next/dynamic --> 현재 Home에만 적용해놓음
- [ ] AWS 호스팅
