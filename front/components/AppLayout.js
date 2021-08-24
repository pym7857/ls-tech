import React, { useEffect, useCallback } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col, Dropdown, Icon, message } from 'antd';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_ALL_HASHTAGS_REQUEST } from '../reducers/post';
import { LOG_OUT_REQUEST } from '../reducers/user';

const AppLayout = ({ children }) => {
    const { me } = useSelector(state => state.user);
    const { hashTags } = useSelector(state => state.post);
    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch({
          type: LOG_OUT_REQUEST,
        });
      }, []);

    function handleButtonClick(e) {
        //message.info('Click on left button.');
        console.log('click left button', e);
    }
    function handleMenuClick(e) {
        //message.info('Click on menu item.');
        console.log('click', e);
    }

    const menu = (
        <Menu onClick={onLogout}>
            <Menu.Item key="1">
                <Icon type="user" />
                    로그아웃
                </Menu.Item>
        </Menu>
      );

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

    //console.log(hashTags);

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
                            <Dropdown.Button onClick={handleButtonClick} overlay={menu}>
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