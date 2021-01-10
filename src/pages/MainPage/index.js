import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsersList } from '../../api/getUsersApi'
import { getUsers } from '../../store/actions/getUsersAction'
import { Card } from 'antd';
import { NavLink } from 'react-router-dom';
import './index.scss'

const MainPageComponent = () => {
    const usersData = useSelector(state => state.getUsersReducer.users);
    const dispatch = useDispatch();

    const loadUsers = () => async () => {
        const users = await getUsersList();
        dispatch(getUsers(users));
    };

    useEffect(() => {
        dispatch(loadUsers())
    }, [])

    return (
        <>
            <div className="site-card-wrapper">
                {usersData.map(i => (
                    <Card
                        hoverable
                        className='main-page-card'
                        key={i.id}
                        type="inner"
                        title={i.username}
                        extra={<NavLink to={`/posts?userId=${i.id}`}>Posts</NavLink>}>
                        <h4>{i.name}</h4>
                        <h5>{i.email}</h5>
                        <h5>{i.phone}</h5>
                        <h5>{i.website}</h5>
                    </Card>
                ))}
            </div>
        </>
    )
}

export default MainPageComponent