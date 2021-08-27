import { Button, Form, Input } from 'antd';
import React, { useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';
import gravatar from 'gravatar';

import { EDIT_NICKNAME_REQUEST } from '../reducers/user';

const NicknameEditForm = () => {
  const [editedName, setEditedName] = useState('');
  const dispatch = useDispatch();
  const { me, isEditingNickname } = useSelector(state => state.user);

  const onChangeNickname = useCallback((e) => {
    setEditedName(e.target.value);
  }, []);
  
  const onEditNickname = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: EDIT_NICKNAME_REQUEST,
      data: editedName,
    });
    Router.push('/');
  }, [editedName]);

  //console.log(editedName);

  var gravatarEmail = '';
  if (me) {
      gravatarEmail = me.nickname + '@gmail.com';
  }

  return (
    <div>
        <img 
            src={gravatar.url(gravatarEmail, { s: '28px', d: 'retro' })}
            style={{ width: '80px', borderRadius: '80px' }}
        />
        <Form onSubmit={onEditNickname}>
            <Input addonBefore="닉네임" value={editedName || (me && me.nickname)} onChange={onChangeNickname} style={{ width: '300px' }} />
            {'\u00A0'}{'\u00A0'}
            <Button type="primary" htmlType="submit" loading={isEditingNickname} >수정</Button>
        </Form>
    </div>

  );
};

export default NicknameEditForm;