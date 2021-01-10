import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getCommentsApi } from '../../api/getCommentsAPi'
import { getComments } from '../../store/actions/getCommentsAction';
import { Card } from 'antd';

const Comments = () => {

    const commentsData = useSelector(state => state.getCommentsReducer.comments);
    const dispatch = useDispatch();
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const postId = searchParams.get('postId');

    const loadComments = () => async () => {
        const comments = await getCommentsApi(postId);
        dispatch(getComments(comments));
    };

    useEffect(() => {
        dispatch(loadComments())
    }, [])

    return (
        <div className="site-card-wrapper">
            <div>
                <h2>Comments</h2>
                {commentsData.map(i => (
                    <Card
                        type='inner'
                        key={i.id}
                        title={i.email}
                        style={{ maxWidth: 600 }}
                    >
                        <h4>{i.name}</h4>  <br />
                        {i.body}
                    </Card>
                ))}
            </div>
        </div>
    )
}

export default Comments


