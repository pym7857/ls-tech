import React, { useEffect, useCallback, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col, Dropdown, Icon, message } from 'antd';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import gravatar from 'gravatar';
import { ReadOutlined, EllipsisOutlined, LinkedinOutlined } from '@ant-design/icons';

import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_ALL_HASHTAGS_REQUEST } from '../reducers/post';
import { LOG_OUT_REQUEST } from '../reducers/user';

import {
    AddButton,
    Channels,
    Chats,
    Header,
    LogOutButton,
    MenuScroll,
    ProfileImg,
    ProfileModal,
    RightMenu,
    WorkspaceButton,
    WorkspaceModal,
    WorkspaceName,
    Workspaces,
    WorkspaceWrapper,
} from './LeftLayoutStyles';

const AppLayout = ({ children }) => {
    const [searchText, setSearchText] = useState('');
    const { me } = useSelector(state => state.user);
    const { hashTags } = useSelector(state => state.post);
    const { mainPosts } = useSelector(state => state.post);
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

    const onChangeSearchBox = useCallback((e) => {
        //console.log(e.target.value);
        setSearchText(e.target.value);
    }, []);

    //console.log(searchText);
    //console.log('mainPosts: ', mainPosts);

    var gravatarEmail = '';
    if (me) {
        gravatarEmail = me.nickname + '@gmail.com';
    }

    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item key="home">
                    <Link href="/">
                        <a style={{ color: '#000080', fontWeight: 'bold', fontSize: '20px' }} >
                            <Icon type="twitter" style={{ fontSize: '20px' }} />LS-Tech
                        </a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search 
                        enterButton style={{ verticalAlign: 'middle' }} 
                        onChange={onChangeSearchBox}
                    />
                </Menu.Item>
                {me && <Menu.Item key="write"><Link href="/write"><a>글쓰기</a></Link></Menu.Item>}
                {me 
                    ? <Menu.Item key="menu" style={{ float: 'right' }} >
                        <div id="components-dropdown-demo-dropdown-button">
                            <Dropdown.Button overlay={menu}>
                                <img 
                                    src={gravatar.url(gravatarEmail, { s: '28px', d: 'retro' })}
                                    style={{ width:'15px', borderRadius: '20px' }}
                                />
                                {'\u00A0'}
                                {me.nickname}
                            </Dropdown.Button>
                        </div>
                    </Menu.Item>
                    : <Menu.Item key="login" style={{ float: 'right' }} ><LoginForm /></Menu.Item>
                }
            </Menu>
            <Row gutter={10}>
                <Col span={6}>
                    <WorkspaceWrapper>
                        <Workspaces>
                            <WorkspaceButton>dddddd</WorkspaceButton>
                            <AddButton onClick={console.log('dd')}>+</AddButton>
                        </Workspaces>
                        <Channels>
                            <WorkspaceName onClick={console.log('dd')}>Sleact</WorkspaceName>
                            <MenuScroll>
                                {/* 최상위url: /spaces/{Workspace이름첫세글자}/pages */}
                                {/* <Link>  
                                    <a>
                                        <div style={{ fontSize: '30px', backgroundColor: 'green' }} >
                                            <ReadOutlined /> pages
                                            <EllipsisOutlined style={{ float: 'right' }} />
                                        </div>
                                    </a>
                                </Link> */}
                            </MenuScroll>
                        </Channels>
                    </WorkspaceWrapper>
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