exports.isLoggedIn = (req, res, next) => {
    if (req.isAuthenticated()) { // isAuthenticated: 로그인했는지 안했는지 판단해주는 공식적인 함수 
      next();
    } else {
      res.status(401).send('로그인이 필요합니다.');
    }
};

exports.isNotLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        next();
    } else {
        res.status(401).send('로그인한 사용자는 접근할 수 없습니다.');
    }
};