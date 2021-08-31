import React, { useEffect, useCallback, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col, Dropdown, Icon, message } from 'antd';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import gravatar from 'gravatar';
import { ReadOutlined, EllipsisOutlined, CaretRightFilled, DownOutlined, LinkedinOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'

import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_ALL_HASHTAGS_REQUEST } from '../reducers/post';
import { LOG_OUT_REQUEST } from '../reducers/user';
import { ADD_WORKSPACE_REQUEST, LOAD_WORKSPACES_REQUEST } from '../reducers/workspace';

import Modal from './Modal';
import {
    AddButton,
    Channels,
    Chats,
    Header,
    MenuScroll,
    WorkspaceButton,
    WorkspaceModal,
    WorkspaceName,
    Workspaces,
    WorkspaceWrapper,
    Label,
    Button,
} from './AppLeftLayoutStyles';

const AppLayout = ({ children }) => {
    const [searchText, setSearchText] = useState('');
    const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(false);
    const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);
    const [newWorkspace, setNewWorkspace] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const { me } = useSelector(state => state.user);
    const { hashTags } = useSelector(state => state.post);
    const { mainPosts } = useSelector(state => state.post);
    const { workSpaces } = useSelector(state => state.workspace);
    const dispatch = useDispatch();

    const router = useRouter()
    console.log('router.query: ', router.query);

    useEffect(() => {
        if (!me) {
            dispatch({
                type: LOAD_USER_REQUEST, // 첫페이지가 처음 렌더링 될때, (쿠키로)내 정보 불러온다 --> 이제 로그인 안풀리게 될것 
            });
        }
        dispatch({
            type: LOAD_ALL_HASHTAGS_REQUEST,
        });
        dispatch({
            type: LOAD_WORKSPACES_REQUEST,
        });
    }, []);
    
    //console.log('workSpaces: ', workSpaces);
    //console.log('mainPosts: ', mainPosts);

    const IconFont = Icon.createFromIconfontCN({
        scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
      });

    const onLogout = useCallback(() => {
        dispatch({
          type: LOG_OUT_REQUEST,
        });
      }, []);

    const profileMenu = (
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

      const EllipsisMenu = (
        <Menu>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              1st menu item
            </a>
          </Menu.Item>
          <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
              2nd menu item
            </a>
          </Menu.Item>
        </Menu>
      );

    const onChangeSearchBox = useCallback((e) => {
        //console.log(e.target.value);
        setSearchText(e.target.value);
    }, []);

    const onClickCreateWorkspace = useCallback(() => {
        setShowCreateWorkspaceModal(true);
      }, []);

    const onCreateWorkspace = useCallback((e) => {
        e.preventDefault();
        // 필수값들 다 들어있나 검사 
        if (!newWorkspace || !newWorkspace.trim()) {
            return alert('워크스페이스 이름을 작성하세요.');
        }
        if (!newUrl || !newUrl.trim()) {
            return alert('워크스페이스 url을 작성하세요.');
        }
        dispatch({
            type: ADD_WORKSPACE_REQUEST,
            data: {
                newWorkspace: newWorkspace,
                newUrl: newUrl,
            },
        }, [newWorkspace, newUrl]);
        setShowCreateWorkspaceModal(false);
        setNewWorkspace(''); // 완료되고나서는 input창 비워주기  
        setNewUrl(''); // 완료되고나서는 input창 비워주기 
    }, [newWorkspace, newUrl]);


    // const onCreateWorkspace = useCallback((e) => {
    //     e.preventDefault();
    //     // 필수값들 다 들어있나 검사 
    //     if (!newWorkspace || !newWorkspace.trim()) return; // 띄어쓰기까지 막으려면 trim()도 넣어주자
    //     if (!newUrl || !newUrl.trim()) return;
    //     // --- 이 부분 dispatch로 수정 ---
    //     // axios
    //     //   .post(
    //     //     '/api/workspaces', // 워크스페이스 생성하는 API
    //     //     {
    //     //       workspace: newWorkspace,
    //     //       url: newUrl,
    //     //     },
    //     //     {
    //     //       withCredentials: true,
    //     //     },
    //     //   )
    //     //   .then(() => {
    //     //     revalidate();
    //     //     setShowCreateWorkspaceModal(false);
    //     //     setNewWorkpsace(''); // 완료되고나서는 input창 비워주기  
    //     //     setNewUrl(''); // 완료되고나서는 input창 비워주기 
    //     //   })
    //     //   .catch((error) => {
    //     //     console.dir(error);
    //     //     toast.error(error.response?.data, { position: 'bottom-center' }); // 사용자에게 에러표시
    //     //   });
    //   },
    //   [newWorkspace, newUrl],
    // );

    const onChangeNewWorkspace = useCallback((e) => {
        setNewWorkspace(e.target.value);
    }, []);

    const onChangeNewUrl = useCallback((e) => {
        setNewUrl(e.target.value);
    }, []);

    // 화면에 있는 모든 모달들을 전부 닫는 함수 
    const onCloseModal = useCallback(() => {
        setShowCreateWorkspaceModal(false);
    }, []);

    const toggleWorkspaceModal = useCallback(() => {
        setShowWorkspaceModal((prev) => !prev);
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
                            <Dropdown.Button overlay={profileMenu}>
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
                    {me &&
                        <div>
                            <ul>
                                
                            </ul>
                            <WorkspaceWrapper>
                                <Workspaces>
                                    {workSpaces.map((ws) => {
                                        return (
                                            <Link key={ws.id} href={{ pathname: '/workspace', query: { url: ws.url } }} as={`/workspace/${ws.url}`} >
                                                <WorkspaceButton>{ws.name.slice(0, 1).toUpperCase()}</WorkspaceButton>
                                            </Link>
                                        );
                                    })}
                                    <AddButton onClick={onClickCreateWorkspace}>+</AddButton>
                                </Workspaces>
                                <Channels>
                                    <WorkspaceName onClick={toggleWorkspaceModal}>
                                        {router.query.url}
                                    </WorkspaceName>
                                    <MenuScroll>
                                        {router.query.url &&
                                            <div style={{ fontSize: '20px' }} >
                                                <CaretRightFilled />
                                                <ReadOutlined />{'\u00A0'}Pages
                                                <div style={{ float: 'right', marginTop: '3px', marginRight: '5px' }}>
                                                    <Dropdown overlay={EllipsisMenu} >
                                                        <EllipsisOutlined />
                                                    </Dropdown>
                                                </div>
                                                
                                            </div>
                                        }
                                    </MenuScroll>
                                </Channels>
                            </WorkspaceWrapper>
                            <Modal show={showCreateWorkspaceModal} onCloseModal={onCloseModal}>
                                <form onSubmit={onCreateWorkspace}>
                                    <Label id="workspace-label">
                                        <span>워크스페이스 이름</span>
                                        <Input id="workspace" value={newWorkspace} onChange={onChangeNewWorkspace} />
                                    </Label>
                                    <Label id="workspace-url-label">
                                        <span>워크스페이스 url</span>
                                        <Input id="workspace" value={newUrl} onChange={onChangeNewUrl} />
                                    </Label>
                                    <Button type="submit">생성하기</Button>
                                </form>
                            </Modal>
                        </div>
                    }
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