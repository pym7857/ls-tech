import { Button, Form, Input } from 'antd';
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import { EDIT_POST_REQUEST, LOAD_ARTICLE_REQUEST } from '../reducers/post';
import WysiwygEditor from '../components/WysiwygEditor'

const PostEditForm = ({ id }) => {
  const dispatch = useDispatch();
  const [editedTitle, setEditedTitle] = useState('');
  const [editedSubTitle, setEditedSubTitle] = useState('');
  const [editedContent, setEditedContent] = useState('');
  const { isEditingPost } = useSelector(state => state.post);
  const { article } = useSelector(state => state.post);

  useEffect(() => {
    dispatch({
        type: LOAD_ARTICLE_REQUEST, // article 받아오기 
        data: id,
    });
  }, []);

  const onChangeTitle = useCallback((e) => {
    setEditedTitle(e.target.value);
  }, []);
  const onChangeSubTitle = useCallback((e) => {
    setEditedSubTitle(e.target.value);
  }, []);
  // const onChangeContent = useCallback((e) => {
  //   setEditedContent(e.target.value);
  // }, []);

  const onEditPost = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: EDIT_POST_REQUEST, // postId, 수정된 게시글 --> 두개 보내야됨 
      data: {
        postId: id,
        editedObject: {
          editedTitle: editedTitle,
          editedSubTitle: editedSubTitle,
          editedContent: editedContent,
        }
      },
    }, [editedTitle, editedSubTitle, editedContent]);
    Router.push('/');
  }, [editedTitle, editedSubTitle, editedContent]);

  //console.log(editedContent);

    return (
      <div>
        {article.map(c => (
          <Form onSubmit={onEditPost}>
              <div>
                <h1>Hello Next.js 👋</h1>
                <Input.TextArea maxLength={50} placeholder="제목을 적어주세요" value={editedTitle || c.title} onChange={onChangeTitle} style={{ height: '30px' }} />
                <Input.TextArea maxLength={100} placeholder="소제목을 적어주세요" value={editedSubTitle || c.subTitle} onChange={onChangeSubTitle} style={{ height: '30px' }} />
                <WysiwygEditor initialValue={editedContent || c.content} onChange={(value) => setEditedContent(value)} />
              </div>
              <br />
              <div style={{ textAlign: 'center' }} >
                <Button htmlType="submit" loading={isEditingPost} >
                  Submit
                </Button>
              </div>
          </Form>
        ))}
      </div>
    );


};

export default PostEditForm;