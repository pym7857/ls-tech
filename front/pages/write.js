
import React, { useCallback, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

import { ADD_POST_REQUEST } from '../reducers/post';
import WysiwygEditor from '../components/WysiwygEditor'

export default function Write() {
  const dispatch = useDispatch();
  const [titleText, setTitleText] = useState('');
  const [subTitleText, setSubTitleText] = useState('');
  const [text, setText] = useState('');
  const { isAddingPost, postAdded } = useSelector(state => state.post);

  useEffect(() => {
    if (postAdded) {
      setText('');
    }
  }, [postAdded]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (!titleText || !titleText.trim()) {
      return alert('제목을 작성하세요.'); // return으로 끊어줘야 밑에부분 실행안됨 
    }
    if (!subTitleText || !subTitleText.trim()) {
      return alert('소제목을 작성하세요.');  
    }
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.'); 
    }
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        title: titleText,
        subTitle: subTitleText,
        content: text,
      },
    }, [titleText, subTitleText, text]);
    Router.push('/');
  },[titleText, subTitleText, text]);

  console.log('text: ', text)

  const onChangeText = useCallback((e) => {
    setText(e.target.value);
  }, []);

  const onChangeTitleText = useCallback((e) => {
    setTitleText(e.target.value);
  }, []);

  const onChangeSubTitleText = useCallback((e) => {
    setSubTitleText(e.target.value);
  }, []);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onSubmit={onSubmitForm}>
        <h1>Hello Next.js 👋</h1>
        <Input.TextArea maxLength={50} placeholder="제목을 적어주세요" value={titleText} onChange={onChangeTitleText} style={{ height: '30px' }} />
        <Input.TextArea maxLength={100} placeholder="소제목을 적어주세요" value={subTitleText} onChange={onChangeSubTitleText} style={{ height: '30px' }} />
        <WysiwygEditor onChange={(value) => setText(value)} />
        <div>
          <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>짹짹</Button>
        </div>
    </Form>
  )
}