import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Icon, Card, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

const PostCard = ({ post }) => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

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