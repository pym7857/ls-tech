import React, { useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import { LOAD_WORKSPACE_REQUEST } from '../reducers/workspace';

const Workspace = ({ url }) => { // getInitialProps로부터 전달받은 props 
    //console.log(id);
    const dispatch = useDispatch();
    const { workspace } = useSelector(state => state.workspace);

    useEffect(() => {
        dispatch({
            type: LOAD_WORKSPACE_REQUEST, // id에 맞는 workspace하나 불러옴 
            data: url,
        });
    }, [url]);

    // 순서: 기존것 -> REQUEST -> SUCCESS 
    console.log('url: ', url);
    console.log('workspace: ', workspace);

    return ( // workspace가 배열형태 이므로 이렇게 해줌 (=실제로는 한개 들어있음)
      <div>
        {workspace.map(c => 
          c.name
        )}
      </div>
      );
};

Workspace.propTypes = {
    url: PropTypes.string.isRequired,
};

Workspace.getInitialProps = async (context) => {
  console.log('workspace getInitialProps', context.query.url);
  return { url: context.query.url }; // 서버로부터 받은 데이터 --> 프론트의 props로 전달 
                                     // 현재 파일: 7번째 줄 ! 
};

export default Workspace;