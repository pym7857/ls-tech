import React, { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Icon, Card, Avatar } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import gravatar from 'gravatar';
import styled from 'styled-components';
import { TagsFilled, EditFilled } from '@ant-design/icons';

const PostCard = ({ post }) => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    var gravatarEmail = '';
    if (post.User) {
        gravatarEmail = post.User.nickname + '@gmail.com';
    }

    const HashTagWrapper = styled.button`
        border: 1px solid #e6e6e6;
        border-radius: 3px;
        color: grey;
        background-color: #e6e6e6;

        &:hover {
            text-decoration:underline;
            cursor: pointer;
        }
    `;

    return (
        <div style={{ height: '200px', borderBottom: '1px solid #d1d1d1' }} >
            <div>
                <div style={{ float: 'left', width: '80%' }}>
                    <div>
                        <Link href={{ pathname: '/article', query: { id: post.id } }} as={`/article/${post.id}`} >
                            <a>
                                <p style={{ fontSize: '15px', color: 'black', marginBottom: '-2px', marginTop: '20px'}}>{post.createdAt.split('T')[0]}</p>
                                <p style={{ fontSize: '30px', fontWeight: 'bold', color: 'black', marginBottom: '-2px', textOverflow: 'ellipsis'}}>{post.title}</p>
                                <p style={{ fontSize: '20px', color: 'black', textOverflow: 'ellipsis'}}>{post.subTitle}</p>
                            </a>
                        </Link>
                    </div>
                    <div>
                        <TagsFilled style={{ fontSize: '20px' }} />
                        {'\u00A0'}
                        {post.content.split(/(#[^\s]+)/g).map((v) => {
                            // 해시태그인 애들은 Link로 감싸준다 
                            if (v.match(/(#[\S]+)/)) { // ex) #사과<li>
                                //console.log(v.split('<')[0].slice(1));
                                return (
                                    <Link href={{ pathname: '/hashtag', query: { tag: v.split('<')[0].slice(1) } }} as={`/hashtag/${v.split('<')[0].slice(1)}`} key={v}>
                                        <a style={{ color: '#3f729b' }}>
                                            <HashTagWrapper>
                                                {v.split('<')[0].slice(1)} 
                                            </HashTagWrapper>
                                            {'\u00A0'}
                                        </a>
                                    </Link>
                                );
                            }
                            //return v; // 해시태그 아닌애들은 그냥 문자열 리턴 
                        })}
                    </div>
                </div>
                <div style={{ float: 'left', width: '20%' }}>
                    <br /><br />
                    <div>
                        <img 
                            src={gravatar.url(gravatarEmail, { s: '70px', d: 'retro' })}
                            style={{ borderRadius: '70px' }}
                        />   
                    </div>
                    <div >
                        <EditFilled />
                        {'\u00A0'}
                        {post.User.nickname}
                    </div>
                </div>
            </div>
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