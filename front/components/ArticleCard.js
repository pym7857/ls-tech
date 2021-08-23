import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Icon, Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import marked from 'marked';
import DOMPurify from "dompurify";

import 'highlight.js/styles/default.css';
import hljs from 'highlight.js';


import {
    LIKE_POST_REQUEST,
    UNLIKE_POST_REQUEST,
  } from '../reducers/post';

const ArticleCard = ({ article }) => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const liked = me && article.Likers && article.Likers.find(v => v.id === me.id); // 좋아요 누른 상태 

    //console.log('liked:', liked);

    const onToggleLike = useCallback(() => {
        if (!me) {
            return alert('로그인이 필요합니다!');
        }
        if (liked) { // 좋아요 누른 상태에서, 하트를 한번 더 누르면 
            dispatch({
                type: UNLIKE_POST_REQUEST,
                data: article.id,
            });
        } else { // 좋아요 안 누른 상태에서, 하트를 누르면 
            dispatch({
                type: LIKE_POST_REQUEST,
                data: article.id,
            });
        }
    }, [me && me.id, article && article.id, liked]);

    // markdown 형식 -> 일반 글 형식 
    const PreviewPanel = (props) => { // article.content   ex) <p>해시태그도 써볼까</p><ul><li>#md성공 #md</li><li>될까?</li></ul>
        // source : https://marked.js.org/using_advanced#options
        marked.setOptions({ 
            highlight: function(code, lang) {
                return hljs.highlight(lang, code).value;
            },
            renderer: new marked.Renderer(), // An object containing functions to render tokens to HTML. See extensibility for more details. 
            gfm: true, // If true, use approved GitHub Flavored Markdown (GFM) specification.
            breaks: true, // If true, add <br> on a single line break (copies GitHub behavior on comments, but not on rendered markdown files). Requires gfm be true.
        });

        const output = DOMPurify.sanitize(marked(props.mdText));
        console.log('output: ', output); // output:  <p><a href="httht">httht</a></p>
        return (
            <div 
                id='preview' 
                dangerouslySetInnerHTML= {{__html: output}}
            />
        );
    }

    //console.log('(article card) article:', article);

    return ( // 해당 제목에 해당하는 게시글 보여줌 
        <div>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card 
                    key={+article.createdAt}
                    title={article.title} 
                    bordered={false} 
                    actions={[
                        <Icon 
                            type="heart" 
                            key="heart"
                            theme={liked ? 'twoTone' : 'outlined'}
                            twoToneColor="#eb2f96"
                            onClick={onToggleLike} 
                        />
                    ]}
                >
                    <Card.Meta
                        avatar={(
                            <Link href={{ pathname: '/user', query: { id: article.User.id } }} as={`/user/${article.User.id}`}>
                                <a><Avatar>{article.User.nickname[0]}</Avatar></a>
                            </Link>
                        )}
                        title={article.User.nickname}
                        description={(
                            <div>
                                <div>
                                    <PreviewPanel mdText={article.content}/>
                                </div>

                                <hr />

                                {article.content.split(/(#[^\s]+)/g).map((v) => {
                                    // 해시태그인 애들은 Link로 감싸준다 
                                    if (v.match(/(#[\S]+)/)) { // ex) #사과<li>
                                        //console.log(v.split('<')[0].slice(1));
                                        return (
                                            <Link href={{ pathname: '/hashtag', query: { tag: v.split('<')[0].slice(1) } }} as={`/hashtag/${v.split('<')[0].slice(1)}`} key={v}>
                                                <a style={{ color: '#3f729b' }}>#{v.split('<')[0].slice(1)} </a>
                                            </Link>
                                        );
                                    }
                                    //return v; // 해시태그 아닌애들은 그냥 문자열 리턴 
                                })}

                            </div>
                        )}
                    >
                    </Card.Meta>
                </Card>
            </div>
        </div>
    );
};

ArticleCard.propTypes = {
    article: PropTypes.shape({ // shape: 객체 상태 
        title:  PropTypes.string,
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
    }),
};

export default ArticleCard;