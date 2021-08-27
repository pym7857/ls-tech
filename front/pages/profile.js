import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NicknameEditForm from '../components/NicknameEditForm';
import { LOAD_USER_POSTS_REQUEST } from '../reducers/post';

const Profile = () => {
  const dispatch = useDispatch();
  const { me } = useSelector(state => state.user);

  useEffect(() => {
    if (me) {
      dispatch({
        type: LOAD_USER_POSTS_REQUEST,
        data: me.id,
      });
    }
  }, [me && me.id]);

  return (
    <div>
      <NicknameEditForm />
    </div>
  );
};

export default Profile;