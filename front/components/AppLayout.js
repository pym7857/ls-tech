import React, { useEffect } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col, Card, Avatar, Form, Button } from 'antd';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import { LOAD_USER_REQUEST } from '../reducers/user';

const AppLayout = ({ children }) => {
    const { me } = useSelector(state => state.user);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!me) {
            dispatch({
                type: LOAD_USER_REQUEST, // 첫페이지가 처음 렌더링 될때, (쿠키로)내 정보 불러온다 --> 이제 로그인 안풀리게 될것 
            });
        }
    }, []);

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>ls-tech</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
                </Menu.Item>
                <Menu.Item key="write"><Link href="/write"><a>글쓰기</a></Link></Menu.Item>
            </Menu>
            <Row gutter={10}>
                <Col span={6}>
                    {me
                        ? <UserProfile />
                        : <LoginForm />}
                </Col>
                <Col span={14}>
                    {children}  
                </Col>
                <Col span={4}>
                    <Link href="https://www.naver.com"><a target="_blank">Naver</a></Link>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.propTypes = {
    children: PropTypes.elementType, // any
};

export default AppLayout;