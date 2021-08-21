import React, { useState, useCallback } from 'react';
import { Input, Form, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { LOG_IN_REQUEST } from '../reducers/user';

// 커스텀 훅 
export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => {
        setter(e.target.value);
    }, []);
    return [value, handler];
};

const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    const { isLoggingIn } = useSelector(state => state.user);
    const dispatch = useDispatch();

    // 자식 컴포넌트에 넘기는 함수는 무조건 useCallback으로 감싸준다
    const onSubmitForm = useCallback((e) => {  
        e.preventDefault();
        dispatch({
            type: LOG_IN_REQUEST,
            data: {
              userId: id, 
              password,
            },
          });
    }, [id, password]);

    return (
        <Form onSubmit={onSubmitForm} style={{ padding: '10px' }}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br />
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">비밀번호</label>
                <br />
                <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
            </div>
            <div style={{ marginTop: '10px' }}>
                <Button type="primary" htmlType="submit" loading={isLoggingIn}>로그인</Button>
            </div>
        </Form>
    );
};

export default LoginForm;