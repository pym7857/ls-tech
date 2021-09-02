import React, { useCallback, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Menu, Input, Row, Col, Dropdown, Icon, message } from 'antd';
import { CaretRightFilled, CaretDownOutlined, EllipsisOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router'

import Modal from '../components/Modal';
import {
    AddButton,
    Channels,
    MenuScroll,
    WorkspaceButton,
    WorkspaceModal,
    WorkspaceName,
    Workspaces,
    WorkspaceWrapper,
    Label,
    Button,
} from '../components/AppLeftLayoutStyles';
import { ADD_CH2_REQUEST, LOAD_CHANNEL2S_REQUEST } from '../reducers/workspace';

const Channel1 = ({ id }) => { // getInitialProps로부터 전달받은 props 
    const [showCreateSubPageModal, setShowCreateSubPageModal] = useState(false);
    const [channel2Opened, setChannel2Opened] = useState(false);
    const [newSubPage, setNewSubPage] = useState('');
    const [newSubPageUrl, setNewSubPageUrl] = useState('');
    const dispatch = useDispatch();
    const { channel2s } = useSelector(state => state.workspace);

    const router = useRouter();
    console.log('(channel1)router: ', router);

    useEffect(() => {
        dispatch({
            type: LOAD_CHANNEL2S_REQUEST, // id에 맞는 workspace하나 불러옴 
            data: id,
        });
    }, [id]);

    // 순서: 기존것 -> REQUEST -> SUCCESS 
    //console.log('url: ', url);
    //console.log('workspace: ', workspace);

    /* onClick 했을때, channel2 열고닫기 */
    const onToggleChannel2 = useCallback(() => {
      setChannel2Opened(prev => !prev);

      if (!channel2Opened) { // 닫혀있는 경우에, ▶ 눌렀을때(onClick)
          dispatch({
              type: LOAD_CHANNEL2S_REQUEST,
              data: id, 
          });
      }
  }, [channel2Opened]);

  // 얘가 EllipsisMenu2보다 위에있어야됨 
  const onClickCreateSubPage = useCallback(() => {
      setShowCreateSubPageModal(true);
  }, []);

  const EllipsisMenu2 = (
      <Menu>
        <Menu.Item onClick={onClickCreateSubPage}>
            서브 페이지 생성 
        </Menu.Item>
      </Menu>
  );

  // 화면에 있는 모든 모달들을 전부 닫는 함수 
  const onCloseModal = useCallback(() => {
      setShowCreateSubPageModal(false);
  }, []);

  const onChangeNewSubPage = useCallback((e) => {
      setNewSubPage(e.target.value);
  }, []);
  const onChangeNewSubPageUrl = useCallback((e) => {
      setNewSubPageUrl(e.target.value);
  }, []);

  const onCreateSubPage = useCallback((e) => {
      e.preventDefault();
      // 필수값들 다 들어있나 검사 
      if (!newSubPage || !newSubPage.trim()) {
          return alert('페이지 이름을 작성하세요.');
      }
      if (!newSubPageUrl || !newSubPageUrl.trim()) {
          return alert('페이지 url을 작성하세요.');
      }
      dispatch({
          type: ADD_CH2_REQUEST,
          data: {
              newSubPage: newSubPage,
              newSubPageUrl: newSubPageUrl,
              mainPageId : id,
          },
      }, [newSubPage, newSubPageUrl]);
      setShowCreateSubPageModal(false);
      setNewSubPage(''); // 완료되고나서는 input창 비워주기  
      setNewSubPageUrl(''); // 완료되고나서는 input창 비워주기 
  }, [newSubPage, newSubPageUrl]);

    return ( // workspace가 배열형태 이므로 이렇게 해줌 (=실제로는 한개 들어있음)
      <div>
            <div style={{ fontSize: '20px', fontWeight: 'bold', display: 'flex' }}>
                <div onClick={onToggleChannel2}>
                    {'\u00A0'}{'\u00A0'}{channel2Opened ? <CaretDownOutlined /> : <CaretRightFilled />}{id}
                </div>
                
                <div style={{ marginLeft: 'auto', marginRight: '5px' }} >
                    <Dropdown overlay={EllipsisMenu2} >
                        <EllipsisOutlined />
                    </Dropdown>
                </div>
            </div>
            <div>
                {channel2s && channel2s.length > 0 && channel2Opened &&
                    channel2s.map((ch2) => {
                        return ( // map에 return 안해주면 안뜸 
                            <div style={{ fontSize: '20px', fontWeight: 'bold', display: 'flex' }}>
                                <div>
                                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                                    {'\u00A0'}{'\u00A0'}{'\u00A0'}{'\u00A0'}
                                    {ch2.name}
                                </div>
                            </div>
                        );
                    })
                }
            </div>
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
      );
};

Channel1.propTypes = {
    id: PropTypes.string.isRequired,
};

Channel1.getInitialProps = async (context) => {
  console.log('channel1 getInitialProps', context.query.id);
  return { id: context.query.id }; // 서버로부터 받은 데이터 --> 프론트의 props로 전달 
                                     // 현재 파일: 7번째 줄 ! 
};

export default Channel1;