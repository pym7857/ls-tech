import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Card, Avatar, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import marked from 'marked';
import DOMPurify from "dompurify";

import {
  LIKE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
} from '../reducers/post';

const PostCard = ({ post }) => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const liked = me && post.Likers && post.Likers.find(v => v.id === me.id); // 좋아요 누른 상태 

    const onToggleLike = useCallback(() => {
        if (!me) {
            return alert('로그인이 필요합니다!');
        }
        if (liked) { // 좋아요 누른 상태에서, 하트를 한번 더 누르면 
            dispatch({
                type: UNLIKE_POST_REQUEST,
                data: post.id,
            });
        } else { // 좋아요 안 누른 상태에서, 하트를 누르면 
            dispatch({
                type: LIKE_POST_REQUEST,
                data: post.id,
            });
        }
    }, [me && me.id, post && post.id, liked]);

    // markdown 형식 -> 일반 글 형식 
    const PreviewPanel = (props) => { // post.content   ex) <p>해시태그도 써볼까</p><ul><li>#md성공 #md</li><li>될까?</li></ul>
        marked.setOptions({
            renderer: new marked.Renderer(),   
            gfm: true,
            breaks: true,
        });

        const output = DOMPurify.sanitize(marked(props.mdText));
        //console.log('output: ', output);
        return (
            <div 
                id='preview' 
                dangerouslySetInnerHTML= {{__html: output}}
            />
        );
    }

    return (
        <Card
            key={+post.createdAt}
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
                    <Link href={{ pathname: '/user', query: { id: post.User.id } }} as={`/user/${post.User.id}`}>
                        <a><Avatar>{post.User.nickname[0]}</Avatar></a>
                    </Link>
                )}
                title={post.User.nickname}
                description={(
                    <div>
                        <p>[preview panel]</p>
                        <PreviewPanel mdText={post.content}/>
                        <p>[hashtag panel]</p>
                        {post.content.split(/(#[^\s]+)/g).map((v) => {
                            if (v.match(/#[^\s]+[$<]/)) { // 해시태그인 애들은 Link로 감싸준다 
                                return (
                                    <Link href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }} as={`/hashtag/${v.slice(1)}`} key={v}>
                                        <a>{v}</a>
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
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({ // shape: 객체 상태 
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
    }),
};

export default PostCard;