import React from 'react'
import { PageHeader } from 'antd';
import { Link, useHistory } from 'react-router-dom';
import { signOut } from '../api/AuthApi';
import { useDispatch, useSelector } from 'react-redux';
import { isLogin } from '../store/actions/isLogin';

const HeaderComponent = ({ children }) => {
    const history = useHistory();
    const dispatch = useDispatch()
    const login = useSelector(state => state.isLogin.login)

    const handleLogout = () => {
        // dispatch(signOut());
        dispatch(isLogin(false))
        history.push('/');
    };

    return (
        <>
            <PageHeader
                className="site-page-header"
            >
                <h3>
                    {!login ?
                        <Link to='/login'>Login</Link> :
                        <span onClick={() => handleLogout()}>
                            <a >Logout</a>
                        </span>}
                </h3>

            </PageHeader>
            {children}
        </>
    )
}
export default HeaderComponent
