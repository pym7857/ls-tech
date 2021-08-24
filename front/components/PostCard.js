import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Icon, Card, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import {
  LIKE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
} from '../reducers/post';

const PostCard = ({ post }) => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const liked = me && post.Likers && post.Likers.find(v => v.id === me.id); // 좋아요 누른 상태 

    //console.log('liked:', liked);

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

    //console.log('(postCard) post:', post);

    return (
        <div>
            <div>
                <Link href={{ pathname: '/article', query: { id: post.id } }} as={`/article/${post.id}`} >
                    <a>
                        <p style={{ fontSize: '15px', color: 'black', marginBottom: '-2px', marginTop: '20px'}}>{post.createdAt.split('T')[0]}</p>
                        <p style={{ fontSize: '30px', fontWeight: 'bold', color: 'black', marginBottom: '-2px'}}>{post.title}</p>
                        <p style={{ fontSize: '20px', color: 'black'}}>{post.subTitle}</p>
                    </a>
                </Link>
            </div>

            {post.content.split(/(#[^\s]+)/g).map((v) => {
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

            <hr style={{ color: 'grey' }} />

        </div>

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