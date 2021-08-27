import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col, Dropdown, Icon, message } from 'antd';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_ALL_HASHTAGS_REQUEST } from '../reducers/post';
import { LOG_OUT_REQUEST } from '../reducers/user';

const AppLayout = ({ children }) => {
    const { me } = useSelector(state => state.user);
    const { hashTags } = useSelector(state => state.post);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!me) {
            dispatch({
                type: LOAD_USER_REQUEST, // 첫페이지가 처음 렌더링 될때, (쿠키로)내 정보 불러온다 --> 이제 로그인 안풀리게 될것 
            });
        }
        dispatch({
            type: LOAD_ALL_HASHTAGS_REQUEST,
        });
    }, []);

    const IconFont = Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
      });

    const onLogout = useCallback(() => {
        dispatch({
          type: LOG_OUT_REQUEST,
        });
      }, []);

    const menu = (
        <Menu>
            <Menu.Item key="1">
                <Link href="/profile"><a><Icon type="user" /> 프로필 수정</a></Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={onLogout}>
                <IconFont type="icon-tuichu" />
                    로그아웃
            </Menu.Item>
        </Menu>
      );

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a style={{ color: 'orange', fontWeight: 'bold', fontSize: '20px' }} ><Icon type="twitter" style={{ fontSize: '20px' }} />LS-Tech</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
                {me && <Menu.Item key="write"><Link href="/write"><a>글쓰기</a></Link></Menu.Item>}
                {me 
                    ? <Menu.Item key="menu" style={{ float: 'right' }} >
                        <div id="components-dropdown-demo-dropdown-button">
                            <Dropdown.Button overlay={menu}>
                                {me.nickname}
                            </Dropdown.Button>
                        </div>
                    </Menu.Item>
                    : <Menu.Item key="login" style={{ float: 'right' }} ><LoginForm /></Menu.Item>
                }
            </Menu>
            <Row gutter={10}>
                <Col span={6}>
                </Col>
                <Col span={14}>
                    <br />
                    <br />
                    <br />
                    <br />
                    {children}  
                </Col>
                <Col span={4}>
                    <br />
                    <br />
                    <br />
                    <br />
                    {hashTags.map((c) => {
                        return (
                            <Link href={{ pathname: '/hashtag', query: { tag: c.name } }} as={`/hashtag/${c.name}`} key={c}>
                                <a style={{ color: '#3f729b' }} >#{c.name}<br /></a>
                            </Link>
                        );
                    })}
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.elementType, // any
};

export default AppLayout;