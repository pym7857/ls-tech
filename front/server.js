const express = require('express');
const next = require('next'); // express가 next를 돌리는 구조 
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const dotenv = require('dotenv');

const dev = process.env.NODE_ENV !== 'production'; // 여기 development로 설정하면 오류남 
const prod = process.env.NODE_ENV === 'production';

const app = next({ dev });
const handle = app.getRequestHandler(); // GET 요청 처리기 
dotenv.config();

app.prepare().then(() => {
  const server = express();

  server.use(morgan('dev'));
  server.use(express.json());
  server.use(express.urlencoded({ extended: true }));
  server.use(cookieParser(process.env.COOKIE_SECRET));
  server.use(expressSession({
    resave: false,
    saveUninitialized: false,
    secret: process.env.COOKIE_SECRET,
    cookie: {
      httpOnly: true,
      secure: false, // https 쓸때는 이 부분 true 
    },
  }));

  server.get('/hashtag/:tag', (req, res) => {
    return app.render(req, res, '/hashtag', { tag: req.params.tag }); // app은 next였음 (윗줄 참조)
                                                                      // pages폴더의 hashtag.js와 연결해줌 
  });

  server.get('/user/:id', (req, res) => {
    return app.render(req, res, '/user', { id: req.params.id }); // pages폴더의 user.js와 연결해줌 
  });

  server.get('*', (req, res) => { // 모든 get요청은 여기서 처리 
    return handle(req, res);
  });

  server.listen(3060, () => { // 프론트: 3060, 백: 3065
    console.log('next+express running on port 3060');
  });
});