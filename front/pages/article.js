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
        dispatch({
            type: LOAD_ARTICLE_REQUEST,
            data: id,
        });
    }, []);

    //console.log('(pages)article: ', article);

    return ( // 해당 제목에 해당하는 게시글 보여줌 
        <div>
            {article.map((c) => {
                return (
                    <ArticleCard key={c} article={c}/>
                );
            })}
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