import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, NavLink } from 'react-router-dom';
import { deletePostAction, getPostsApi, putPostAction } from '../../api/getPostsApi';
import { getPosts } from '../../store/actions/getPostsAction'
import { deletePost } from '../../store/actions/deletePostAction'
import { editPosts } from '../../store/actions/editPostsAction'
import { Card, Button } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
import { EditOutlined, DeleteOutlined, CloseOutlined } from '@ant-design/icons';
import FormComponent from '../../Components/Form';


const Posts = () => {
    const { Meta } = Card;
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(null)
    const [textValue, setTextValue] = useState('')
    const [newPost, setNewPost] = useState(false)

    const postsData = useSelector(state => state.getPostsReducer.posts);
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const userId = searchParams.get('userId');

    const addPost = () => {
        setNewPost(!newPost);
    };

    const loadPosts = () => async () => {
        const posts = await getPostsApi(userId);
        dispatch(getPosts(posts));
    };

    const changePost = (postId, newBody) => async () => {
        const { id, body } = await putPostAction(postId, newBody);
        dispatch(editPosts(id, body));
    };
    useEffect(() => {
        dispatch(loadPosts())
    }, []);

    const handleEdit = (id) => {
        setTextValue('');
        if (edit !== id) {
            setEdit(id)
        } else {
            setEdit(null)
        }
    }

    const editValue = (callback) => (e) => {
        callback(e.target.value)
    }

    const deletePostHandle = id => async () => {
        const res = await deletePostAction(id);
        if (res) {
            dispatch(deletePost(id));
        }
    };

    const handleSubmit = (id) => {
        if (textValue !== ' ') {
            dispatch(changePost(id, textValue))
            setEdit(null);
        }
    }
    return (
        <div className="site-card-wrapper">
            <Button
                style={{ width: 300, height: 240, margin: 10 }}
                onClick={addPost}
            >
                {newPost ? 'Close' : 'New Post'}
            </Button>
            {newPost && (
                <FormComponent
                    setNewPost={setNewPost}
                    userId={userId}
                />
            )}
            {postsData.map(i => (
                <Card
                    className='main-page-card'
                    key={i.id}
                    style={{ width: 300 }}
                    actions={[
                        <EditOutlined key="edit"
                            onClick={() => handleEdit(i.id)}
                        />,
                        <DeleteOutlined
                            onClick={deletePostHandle(i.id)}
                        />
                    ]}
                >
                    <Meta
                        title={i.title}
                        description={i.body}
                    />
                    <div style={{ paddingTop: 10, textAlign: 'end' }}>
                        <NavLink to={`/comments?postId=${i.id}`}
                        >Comments</NavLink>
                    </div>
                    {edit === i.id &&
                        (<form
                            style={{ height: 178 }}
                            id="textarea"
                            onSubmit={e => handleSubmit(i.id, e)}
                        >
                            <CloseOutlined
                                onClick={() => setEdit(null)}
                            />
                            <TextArea rows={4}
                                onChange={editValue(setTextValue)}
                                defaultValue={i.body}
                            />

                            <Button
                                htmlType="submit"
                            > Edit </Button>
                        </form>)}
                </Card>
            ))}
        </div>
    )
}

export default Posts