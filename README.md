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
- [ ] ✔ 트리구조 페이지 (=컨플루언스) --> 모달창 띄우기 
  - 팀 페이지 + 개인 페이지
  - Workspace와 Channel은 layout에 들어가야됨
- [ ] ✔ 검색봇이 긁어갈 수 있는 범위 설정 --> robots.txt: https://searchadvisor.naver.com/guide/seo-basic-robots
- [ ] ✔ `비밀글` 선택/비선택
- [x] footer 제작 (=toss-tech) --> 불가능 --> 페이지 3구역으로 나눠놨음 
- [ ] ✔ 시간지나면, 게시글 자동저장 & 임시저장 
  - 서버 갔다오면 안됨. front에서 session에 가지고 있어야됨 
  - `redux-persist` 쓰면 안됨. 내가 바꾸려는건 글쓰기 text임. 이건 reducer에서 가져오는게 아님 
  - `redux-persist` 놀라운 오류 해결 --> https://github.com/rt2zz/redux-persist/issues/826#issuecomment-410146610
  - JS localStorage 사용하자 
- [ ] ✔ 깃허브 연동 (=단군 소프트 help) 
- [ ] 🙄 게시글 검색기능 (=반응형)  --> 시간 남으면 마지막에 만들기 --> AppLayout과 index.js 상태를 어떻게 연결..????
- [ ] 🙄 프로필 사진 수정 기능 --> 시간 남으면 만들기 
- [x] MD Viewer
- [ ] HTML Viewer
- [ ] Excel Viewer
- [ ] SSR 적용 
- [ ] 렌더링 최적화 (=속도 문제 개선)
- [ ] ✔ Next Code splitting --> next/dynamic --> 현재 Home에만 적용해놓음
- [ ] AWS 호스팅
