import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Icon, Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import "@uiw/react-md-editor/dist/markdown-editor.css";
import "@uiw/react-markdown-preview/dist/markdown.css";
import MarkdownPreview from '@uiw/react-markdown-preview';

const ArticleCard = ({ article }) => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    console.log('article: ', article);

    return ( // 해당 제목에 해당하는 게시글 보여줌 
        <div>
            <div style={{ background: '#ECECEC', padding: '30px' }}>
                <Card 
                    key={+article.createdAt}
                    title={article.title} 
                    bordered={false} 
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
                                    {article.createdAt.split('T')[0]}
                                    <br />
                                    <br />
                                    <MarkdownPreview 
                                        source={article.content} 
                                        style={{ color: 'black' }}
                                    />
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

            <div>
                { me.id && me.id === article.User.id
                    ?
                    <div style={{ float: 'right' }} >
                        <Link href={{ pathname: '/edit', query: { id: article.id } }} as={`/edit/${article.id}`} key={article.id}>
                            <a><Button type="primary">글 수정</Button></a>
                        </Link>
                    </div>  
                    :
                    <div>
                    </div>
                }
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