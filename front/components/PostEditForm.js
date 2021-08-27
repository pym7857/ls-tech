import { Button, Form, Input } from 'antd';
import React, { useState, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Router from 'next/router';

import { EDIT_POST_REQUEST, LOAD_ARTICLE_REQUEST } from '../reducers/post';

const PostEditForm = ({ id }) => {
  const dispatch = useDispatch();
  const [editedPost, setEditedPost] = useState('');
  const { isEditingPost } = useSelector(state => state.post);
  const { article } = useSelector(state => state.post);

  useEffect(() => {
    dispatch({
        type: LOAD_ARTICLE_REQUEST, // article 받아오기 
        data: id,
    });
  }, []);

  const onChangePost = useCallback((e) => {
    setEditedPost(e.target.value);
  }, []);
  const onEditPost = useCallback((e) => {
    e.preventDefault();
    dispatch({
      type: EDIT_POST_REQUEST, // postId, 수정된 게시글 --> 두개 보내야됨 
      data: {
        postId: id,
        editedPost: editedPost,
      },
    }, [editedPost]);
    Router.push('/');
  }, [editedPost]);

  console.log(editedPost);

    return (
      <div>
        {article.map(c => (
          <Form onSubmit={onEditPost}>
              <div>
                수정할 글 보이는곳 <br />
                <Input value={editedPost || c.content} onChange={onChangePost}/>
              </div>
              <Button type="primary" htmlType="submit" loading={isEditingPost} style={{ float: 'right' }} >
                수정
              </Button>
          </Form>
        ))}
      </div>
    );


};

export default PostEditForm;