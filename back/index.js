const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');
const passport = require('passport');

const passportConfig = require('./passport');
const db = require('./models');
const userAPIRouter = require('./routes/user');
const postAPIRouter = require('./routes/post');
const postsAPIRouter = require('./routes/posts');
const hashtagAPIRouter = require('./routes/hashtag');
const hashtagsAPIRouter = require('./routes/hashtags');
const articleAPIRouter = require('./routes/article');
const workspaceAPIRouter = require('./routes/workspace');
const workspacesAPIRouter = require('./routes/workspaces');

dotenv.config(); // dotenv 실행 
const app = express();
db.sequelize.sync(); // 이거해주고, 서버실행시키면 알아서 테이블들 생성해줌 
passportConfig(); // passport 실행 

app.use(morgan('dev'));
app.use(cors({
  origin: true, // 모든 요청을 허락 
  credentials: true, // cors와 axios 둘다에서 이거 해주어야됨 (=쿠키설정)
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser(process.env.COOKIE_SECRET)); // 쿠키 암호화 키 
app.use(expressSession({
  resave: false, // 매번 세션 강제 저장. 보통은 false 
  saveUninitialized: false, // 빈 값도 저장. 보통은 false 
  secret: process.env.COOKIE_SECRET, // 쿠키 암호화 키 
  cookie: { // 쿠키 설정 
    httpOnly: true, // 자바스크립트로 쿠키에 접근할 수 없다 
    secure: false, // https를 쓸 때 true로 해주자 
  },
  name: 'rnbck', // 쿠키탭에 뜨는 connect.sid 만 봐도 express인거 해커들에게 들킴 --> 이름 지어주자 (=의미없는 이름)
}));
app.use(passport.initialize());
app.use(passport.session());

// API: 다른 서비스가 내 서비스의 기능을 실행할 수 있게 열어둔 창구
app.use('/api/user', userAPIRouter);
app.use('/api/post', postAPIRouter);
app.use('/api/posts', postsAPIRouter);
app.use('/api/hashtag', hashtagAPIRouter);
app.use('/api/hashtags', hashtagsAPIRouter);
app.use('/api/article', articleAPIRouter);
app.use('/api/workspace', workspaceAPIRouter);
app.use('/api/workspaces', workspacesAPIRouter);

app.listen(3065, () => {
  console.log('server is running on http://localhost:3065');
});