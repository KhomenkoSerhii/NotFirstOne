import React, { useState } from 'react'

import { useHistory } from 'react-router-dom';
import { Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { signIn } from '../../api/AuthApi';
import { useDispatch } from 'react-redux';
import { isLogin } from '../../store/actions/isLogin';

const Login = () => {
    const history = useHistory();
    const dispatch = useDispatch()
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!inputValue || !textareaValue) return;
        // const err = await signIn(username, password);
        // if (err) return;
        dispatch(isLogin(true))
        history.push('/');

    };

    const inputsChange = (callback) => (e) => {
        callback(e.target.value)
    }

    return (
        <div>
            <form
                onSubmit={handleSubmit}
                style={{ width: 300, margin: 'auto' }}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username"
                    onChange={inputsChange(setInputValue)}
                />
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    onChange={inputsChange(setTextareaValue)}
                    type="password"
                    placeholder="Password"
                />
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Log in
                    </Button>
            </form>
        </div>
    )
}
export default Login
