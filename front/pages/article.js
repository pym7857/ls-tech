import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_ARTICLE_REQUEST } from '../reducers/post';
import ArticleCard from '../components/ArticleCard';

const Article = ({ id }) => { // getInitialProps로부터 전달받은 props 
    //console.log(id);
    const dispatch = useDispatch();
    const { article } = useSelector(state => state.post);

    useEffect(() => {
        console.log('fff');
        dispatch({
            type: LOAD_ARTICLE_REQUEST, // id에 맞는 article하나 불러옴 
            data: id,
        });
    }, []);

    // 순서: 기존것 -> REQUEST -> SUCCESS 
    console.log('article: ', article);

    return ( // article이 배열형태 이므로 이렇게 해줌 (=실제로는 한개 들어있음)
      <div>
        {article.map(c => (
          <ArticleCard key={c} article={c} />
        ))}
      </div>
      );
};

Article.propTypes = {
    id: PropTypes.number.isRequired,
};

Article.getInitialProps = async (context) => {
  console.log('article getInitialProps', context.query.id);
  return { id: context.query.id }; // 서버로부터 받은 데이터 --> 프론트의 props로 전달 
                                     // 현재 파일: 7번째 줄 ! 
};

export default Article;