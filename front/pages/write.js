
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

  // 웹 스토리지는 오직 문자형(string) 데이터 타입만 지원하기 때문에 데이터를 쓰기 전에 
  // JSON.stringify() 함수로 직렬화(serialization) 하고, 읽기 전에 JSON.parse() 함수로 역직렬화(deserialization) 해야함
  
  useEffect(() => {
    setTitleText(JSON.parse(window.localStorage.getItem("titleText")) || '');
    setSubTitleText(JSON.parse(window.localStorage.getItem("subTitleText")) || '');
  }, []);
  
  // 이 방법도 가능 
  // useEffect(() => {
  //   window.localStorage.setItem("titleText", JSON.stringify(titleText));
  // }, [titleText]);

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

  // const onChangeText = useCallback((e) => {
  //   setText(e.target.value);
  // }, []);
  const onChangeTitleText = useCallback((e) => {
    setTitleText(e.target.value);
    localStorage.setItem('titleText', JSON.stringify(e.target.value))
  }, []);
  const onChangeSubTitleText = useCallback((e) => {
    setSubTitleText(e.target.value);
    localStorage.setItem('subTitleText', JSON.stringify(e.target.value))
  }, []);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onSubmit={onSubmitForm}>
        <h1>Hello Next.js 👋</h1>
        <Input.TextArea maxLength={50} placeholder="제목을 적어주세요" value={titleText} onChange={onChangeTitleText} style={{ height: '30px' }} />
        <Input.TextArea maxLength={100} placeholder="소제목을 적어주세요" value={subTitleText} onChange={onChangeSubTitleText} style={{ height: '30px' }} />
        <WysiwygEditor onChange={(value) => setText(value)} />
        <br />
        <div style={{ textAlign: 'center' }} >
          <Button htmlType="submit" loading={isAddingPost}>Submit</Button>
        </div>
    </Form>
  )
}