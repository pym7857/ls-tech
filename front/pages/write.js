import Head from 'next/head';
import React, { useCallback, useState, useEffect } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import Router from 'next/router';

import { ADD_POST_REQUEST } from '../reducers/post';
import QuillEditor from '../components/QuillEditor';
import styles from '../styles/Home.module.css';

export default function Write() {
  const dispatch = useDispatch();
  const [titleText, setTitleText] = useState('');
  const [subTitleText, setSubTitleText] = useState('');
  const [text, setText] = useState('');
  const { isAddingPost, postAdded } = useSelector(state => state.post);

  // useEffect(() => {
  //   if (postAdded) {
  //     setText('');
  //   }
  // }, [postAdded]);

  const onSubmitForm = useCallback((e) => {
    e.preventDefault();
    if (!titleText || !titleText.trim()) {
      return alert('제목을 작성하세요.'); // return으로 끊어줘야 밑에부분 실행안됨 
    }
    if (!subTitleText || !subTitleText.trim()) {
      return alert('소제목을 작성하세요.'); // return으로 끊어줘야 밑에부분 실행안됨 
    }
    if (!text || !text.trim()) {
      return alert('게시글을 작성하세요.'); // return으로 끊어줘야 밑에부분 실행안됨 
    }
    //console.log(text);
    dispatch({
      type: ADD_POST_REQUEST,
      data: {
        title: titleText,
        subTitle: subTitleText,
        //content: text.trim(),
        content: text,
      },
    }, [titleText, subTitleText, text]);
    Router.push('/');
  }, [titleText, subTitleText, text]); // useCallback안에서 쓴 state는 여기에 무조건 넣어주어야 한다 

  // const onChangeText = useCallback((e) => {
  //   setText(e.target.value);
  // }, []);

  const onChangeTitleText = useCallback((e) => {
    setTitleText(e.target.value);
  }, []);

  const onChangeSubTitleText = useCallback((e) => {
    setSubTitleText(e.target.value);
  }, []);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onSubmit={onSubmitForm}>
      <div className={styles.container}>
        <Head>
          <title>Quill Sample</title>
          <link rel="icon" href="/favicon.ico" />
          
          {/* 관련된 리소스 로드 (CSS는 _app.js에서 global CSS로 로드하는 편이 좋을 거 같다.)*/}
          <link href="//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.css" rel="stylesheet"/>
          <script src="//cdn.jsdelivr.net/npm/katex@0.13.3/dist/katex.min.js"></script>
          <script src="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/highlight.min.js"></script>
          <script src="//cdn.quilljs.com/1.3.6/quill.min.js"></script>
          <link rel="stylesheet" href="//cdn.jsdelivr.net/gh/highlightjs/cdn-release@10.7.2/build/styles/default.min.css"/>
          <link rel="stylesheet" href="//cdn.quilljs.com/1.3.6/quill.snow.css"/>
        </Head>

        <h1 className={styles.title}>
          Quill Sample
        </h1>

        <Input.TextArea maxLength={50} placeholder="제목을 적어주세요" value={titleText} onChange={onChangeTitleText} style={{ height: '30px' }} />
        <Input.TextArea maxLength={100} placeholder="소제목을 적어주세요" value={subTitleText} onChange={onChangeSubTitleText} style={{ height: '30px' }} />
        <div style={{ width: '80%', marginTop: '40px' }}>
          <QuillEditor
            body={text}
            handleQuillChange={setText}
          />
        </div>

        <div style={{ width: '80%' }}>
          <p>text state 미리보기</p>
          {text}
        </div>

        <div>
          <Button type="primary" style={{ float: 'right' }} htmlType="submit" loading={isAddingPost}>짹짹</Button>
        </div>
      </div>
    </Form>
  )
}