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
                type: LOAD_USER_REQUEST, // ??????????????? ?????? ????????? ??????, (?????????)??? ?????? ???????????? --> ?????? ????????? ???????????? ?????? 
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
                <Link href="/profile"><a><Icon type="user" /> ????????? ??????</a></Link>
            </Menu.Item>
            <Menu.Item key="2" onClick={onLogout}>
                <IconFont type="icon-tuichu" />
                    ????????????
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
              ????????? ?????? 
          </Menu.Item>
        </Menu>
      );

      const EllipsisMenu2 = (
        <Menu>
          <Menu.Item onClick={onClickCreateSubPage}>
              ?????? ????????? ?????? 
          </Menu.Item>
        </Menu>
      );

    const onChangeSearchBox = useCallback((e) => {
        //console.log(e.target.value);
        setSearchText(e.target.value);
    }, []);

    const onCreateWorkspace = useCallback((e) => {
        e.preventDefault();
        // ???????????? ??? ???????????? ?????? 
        if (!newWorkspace || !newWorkspace.trim()) {
            return alert('?????????????????? ????????? ???????????????.');
        }
        if (!newUrl || !newUrl.trim()) {
            return alert('?????????????????? url??? ???????????????.');
        }
        dispatch({
            type: ADD_WORKSPACE_REQUEST,
            data: {
                newWorkspace: newWorkspace,
                newUrl: newUrl,
            },
        }, [newWorkspace, newUrl]);
        setShowCreateWorkspaceModal(false);
        setNewWorkspace(''); // ????????????????????? input??? ????????????  
        setNewUrl(''); // ????????????????????? input??? ???????????? 
    }, [newWorkspace, newUrl]);

    const onCreateMainPage = useCallback((e) => {
        e.preventDefault();
        // ???????????? ??? ???????????? ?????? 
        if (!newMainPage || !newMainPage.trim()) {
            return alert('????????? ????????? ???????????????.');
        }
        if (!newMainPageUrl || !newMainPageUrl.trim()) {
            return alert('????????? url??? ???????????????.');
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
        setNewMainPage(''); // ????????????????????? input??? ????????????  
        setNewMainPageUrl(''); // ????????????????????? input??? ???????????? 
    }, [newMainPage, newMainPageUrl, currentUrl]);

    const onCreateSubPage = useCallback((e) => {
        e.preventDefault();
        // ???????????? ??? ???????????? ?????? 
        if (!newSubPage || !newSubPage.trim()) {
            return alert('????????? ????????? ???????????????.');
        }
        if (!newSubPageUrl || !newSubPageUrl.trim()) {
            return alert('????????? url??? ???????????????.');
        }
        // dispatch({
        //     type: ADD_CH2_REQUEST,
        //     data: {
        //         newSubPage: newSubPage,
        //         newSubPageUrl: newSubPageUrl,
        //         mainPageId : , // TODO: ?????? ???????????? ? 
        //     },
        // }, [newSubPage, newSubPageUrl]);
        setShowCreateSubPageModal(false);
        setNewSubPage(''); // ????????????????????? input??? ????????????  
        setNewSubPageUrl(''); // ????????????????????? input??? ???????????? 
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

    // ????????? ?????? ?????? ???????????? ?????? ?????? ?????? 
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

    /* onClick ?????????, channel2 ???????????? */
    const onToggleChannel2 = useCallback(() => {
        setChannel2Opened(prev => !prev);

        // if (!channel2Opened) { // ???????????? ?????????, ??? ????????????(onClick)
        //     dispatch({
        //         type: LOAD_CHANNEL2S_REQUEST,
        //         data: activatedMainPageId, // TODO: ?????? ????????????? 
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
                {me && <Menu.Item key="write"><Link href="/write"><a>?????????</a></Link></Menu.Item>}
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
                                            <span>?????????????????? ??????</span>
                                            <Input id="workspace" value={newWorkspace} onChange={onChangeNewWorkspace} />
                                        </Label>
                                        <Label id="workspace-url-label">
                                            <span>?????????????????? url</span>
                                            <Input id="workspace" value={newUrl} onChange={onChangeNewUrl} />
                                        </Label>
                                        <Button type="submit">????????????</Button>
                                    </form>
                                </Modal>
                                <Modal show={showCreateMainPageModal} onCloseModal={onCloseModal}>
                                    <form onSubmit={onCreateMainPage}>
                                        <Label id="mainPage-label">
                                            <span>????????? ??????</span>
                                            <Input id="mainPage" value={newMainPage} onChange={onChangeNewMainPage} />
                                        </Label>
                                        <Label id="mainPage-url-label">
                                            <span>????????? url</span>
                                            <Input id="mainPage" value={newMainPageUrl} onChange={onChangeNewMainPageUrl} />
                                        </Label>
                                        <Button type="submit">????????????</Button>
                                    </form>
                                </Modal>
                                <Modal show={showCreateSubPageModal} onCloseModal={onCloseModal}>
                                    <form onSubmit={onCreateSubPage}>
                                        <Label id="subPage-label">
                                            <span>??????????????? ??????</span>
                                            <Input id="subPage" value={newSubPage} onChange={onChangeNewSubPage} />
                                        </Label>
                                        <Label id="subPage-url-label">
                                            <span>??????????????? url</span>
                                            <Input id="subPage" value={newSubPageUrl} onChange={onChangeNewSubPageUrl} />
                                        </Label>
                                        <Button type="submit">????????????</Button>
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