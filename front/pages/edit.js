import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import PostEditForm from '../components/PostEditForm';

const Edit = ({ id }) => { // getInitialProps로부터 전달받은 props 
    const dispatch = useDispatch();
    const { me } = useSelector(state => state.user);

    console.log('id=', id);

    return (
        <div>
            <PostEditForm id={id} />
        </div>
    );
};

Edit.propTypes = {
    id: PropTypes.string.isRequired,
  };
  
  Edit.getInitialProps = async (context) => {
    console.log('Edit getInitialProps', context.query.id);
    return { id: context.query.id }; // 서버로부터 받은 데이터 --> 프론트의 props로 전달 
                                       // 현재 파일: 7번째 줄 ! 
  };

export default Edit;