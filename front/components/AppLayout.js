import React, { useEffect, useCallback, useState } from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col, Dropdown, Icon, message } from 'antd';
import LoginForm from './LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import gravatar from 'gravatar';
import { ReadOutlined, EllipsisOutlined, CaretRightFilled, CaretDownOutlined, DownOutlined, LinkedinOutlined } from '@ant-design/icons';
import { useRouter } from 'next/router'

// import dynamic from 'next/dynamic';
// const SortableTree = dynamic(import('react-sortable-tree'), { ssr: false });
// import 'react-sortable-tree/style.css';

import { LOAD_USER_REQUEST } from '../reducers/user';
import { LOAD_ALL_HASHTAGS_REQUEST } from '../reducers/post';
import { LOG_OUT_REQUEST } from '../reducers/user';
import { 
    ADD_CH1_REQUEST, 
    ADD_CH2_REQUEST, 
    ADD_WORKSPACE_REQUEST, 
    LOAD_CHANNEL2S_REQUEST, 
    LOAD_CHANNELS_REQUEST, 
    LOAD_WORKSPACES_REQUEST 
} from '../reducers/workspace';

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
    const [channel2Opened, setChannel2Opened] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [showCreateWorkspaceModal, setShowCreateWorkspaceModal] = useState(false);
    const [showCreateMainPageModal, setShowCreateMainPageModal] = useState(false);
    const [showCreateSubPageModal, setShowCreateSubPageModal] = useState(false);
    const [showWorkspaceModal, setShowWorkspaceModal] = useState(false);
    const [newWorkspace, setNewWorkspace] = useState('');
    const [newUrl, setNewUrl] = useState('');
    const [newMainPage, setNewMainPage] = useState('');
    const [newMainPageUrl, setNewMainPageUrl] = useState('');
    const [newSubPage, setNewSubPage] = useState('');
    const [newSubPageUrl, setNewSubPageUrl] = useState('');
    const { me } = useSelector(state => state.user);
    const { hashTags } = useSelector(state => state.post);
    const { mainPosts } = useSelector(state => state.post);
    const { workSpaces } = useSelector(state => state.workspace);
    const { channels } = useSelector(state => state.workspace);
    const { channel2s } = useSelector(state => state.workspace);
    const dispatch = useDispatch();

    const router = useRouter()
    console.log('router.query.url: ', router.query.url);

    // const [ treeData, setTreeData ] = useState( [] );
	// const [ loaded, setLoaded ] = useState( false );

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
        // setTreeData(
		// 	[
		// 		{ title: 'Chicken', children: [ { title: 'Egg' } ] },
		// 		{ title: 'Fish', children: [ { title: 'fingerline' } ] },
		// 	]
		// );
    }, []);

    const currentUrl = router.query.url;

    useEffect(() => {
        if (currentUrl !== undefined) {
            dispatch({
                type: LOAD_CHANNELS_REQUEST,
                data: currentUrl,
            });
        }
    }, [currentUrl]);
    
    // console.log('workSpaces: ', workSpaces);
    // console.log('channels: ', channels);
    // console.log('channels.length: ', channels.length);

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

      const onClickCreateWorkspace = useCallback(() => {
        setShowCreateWorkspaceModal(true);
      }, []);

      const onClickCreateMainPage = useCallback(() => {
        setShowCreateMainPageModal(true);
      }, []);

      const onClickCreateSubPage = useCallback((id) => {
        setShowCreateSubPageModal(true);
      }, []);

      const EllipsisMenu = (
        <Menu>
          <Menu.Item onClick={onClickCreateMainPage}>
              페이지 생성 
          </Menu.Item>
        </Menu>
      );

      const EllipsisMenu2 = (
        <Menu>
          <Menu.Item onClick={onClickCreateSubPage}>
              서브 페이지 생성 
          </Menu.Item>
        </Menu>
      );

    const onChangeSearchBox = useCallback((e) => {
        //console.log(e.target.value);
        setSearchText(e.target.value);
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

    const onCreateMainPage = useCallback((e) => {
        e.preventDefault();
        // 필수값들 다 들어있나 검사 
        if (!newMainPage || !newMainPage.trim()) {
            return alert('페이지 이름을 작성하세요.');
        }
        if (!newMainPageUrl || !newMainPageUrl.trim()) {
            return alert('페이지 url을 작성하세요.');
        }
        dispatch({
            type: ADD_CH1_REQUEST,
            data: {
                newMainPage: newMainPage,
                newMainPageUrl: newMainPageUrl,
                currentUrl : currentUrl,
            },
        }, [newMainPage, newMainPageUrl]);
        setShowCreateMainPageModal(false);
        setNewMainPage(''); // 완료되고나서는 input창 비워주기  
        setNewMainPageUrl(''); // 완료되고나서는 input창 비워주기 
    }, [newMainPage, newMainPageUrl, currentUrl]);

    const onCreateSubPage = useCallback((e) => {
        e.preventDefault();
        // 필수값들 다 들어있나 검사 
        if (!newSubPage || !newSubPage.trim()) {
            return alert('페이지 이름을 작성하세요.');
        }
        if (!newSubPageUrl || !newSubPageUrl.trim()) {
            return alert('페이지 url을 작성하세요.');
        }
        // dispatch({
        //     type: ADD_CH2_REQUEST,
        //     data: {
        //         newSubPage: newSubPage,
        //         newSubPageUrl: newSubPageUrl,
        //         mainPageId : , // TODO: 여기 버그날듯 ? 
        //     },
        // }, [newSubPage, newSubPageUrl]);
        setShowCreateSubPageModal(false);
        setNewSubPage(''); // 완료되고나서는 input창 비워주기  
        setNewSubPageUrl(''); // 완료되고나서는 input창 비워주기 
    }, [newSubPage, newSubPageUrl]);

    const onChangeNewWorkspace = useCallback((e) => {
        setNewWorkspace(e.target.value);
    }, []);
    const onChangeNewUrl = useCallback((e) => {
        setNewUrl(e.target.value);
    }, []);

    const onChangeNewMainPage = useCallback((e) => {
        setNewMainPage(e.target.value);
    }, []);
    const onChangeNewMainPageUrl = useCallback((e) => {
        setNewMainPageUrl(e.target.value);
    }, []);

    const onChangeNewSubPage = useCallback((e) => {
        setNewSubPage(e.target.value);
    }, []);
    const onChangeNewSubPageUrl = useCallback((e) => {
        setNewSubPageUrl(e.target.value);
    }, []);

    // 화면에 있는 모든 모달들을 전부 닫는 함수 
    const onCloseModal = useCallback(() => {
        setShowCreateWorkspaceModal(false);
        setShowCreateMainPageModal(false);
        setShowCreateSubPageModal(false);
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

    /* onClick 했을때, channel2 열고닫기 */
    const onToggleChannel2 = useCallback(() => {
        setChannel2Opened(prev => !prev);

        // if (!channel2Opened) { // 닫혀있는 경우에, ▶ 눌렀을때(onClick)
        //     dispatch({
        //         type: LOAD_CHANNEL2S_REQUEST,
        //         data: activatedMainPageId, // TODO: 여기 버그날듯? 
        //     });
        // }
    }, [channel2Opened]);

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
                                <WorkspaceWrapper>
                                    <Workspaces>
                                        {workSpaces.map((ws) => {
                                            return (
                                                <Link key={ws.id} href={{ pathname: '/workspace', query: { url: ws.url } }} as={`/workspace/${ws.url}`} >
                                                    <WorkspaceButton>
                                                        {ws.name.slice(0, 1).toUpperCase()}
                                                    </WorkspaceButton>
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
                                                <div style={{ fontSize: '20px', fontWeight: 'bold', display: 'flex' }} >
                                                    <div>
                                                        <ReadOutlined />{'\u00A0'}Pages
                                                    </div>
                                                    <div style={{ marginLeft: 'auto', marginRight: '5px' }} >
                                                        <Dropdown overlay={EllipsisMenu} >
                                                            <EllipsisOutlined />
                                                        </Dropdown>
                                                    </div>
                                                </div>
                                            }
                                            {
                                                channels.map((ch) => {
                                                    return (
                                                        <div>
                                                            {ch.name}
                                                        </div>
                                                    );
                                                })
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
                                <Modal show={showCreateMainPageModal} onCloseModal={onCloseModal}>
                                    <form onSubmit={onCreateMainPage}>
                                        <Label id="mainPage-label">
                                            <span>페이지 이름</span>
                                            <Input id="mainPage" value={newMainPage} onChange={onChangeNewMainPage} />
                                        </Label>
                                        <Label id="mainPage-url-label">
                                            <span>페이지 url</span>
                                            <Input id="mainPage" value={newMainPageUrl} onChange={onChangeNewMainPageUrl} />
                                        </Label>
                                        <Button type="submit">생성하기</Button>
                                    </form>
                                </Modal>
                                <Modal show={showCreateSubPageModal} onCloseModal={onCloseModal}>
                                    <form onSubmit={onCreateSubPage}>
                                        <Label id="subPage-label">
                                            <span>서브페이지 이름</span>
                                            <Input id="subPage" value={newSubPage} onChange={onChangeNewSubPage} />
                                        </Label>
                                        <Label id="subPage-url-label">
                                            <span>서브페이지 url</span>
                                            <Input id="subPage" value={newSubPageUrl} onChange={onChangeNewSubPageUrl} />
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