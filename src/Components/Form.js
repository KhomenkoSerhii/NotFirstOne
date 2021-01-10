import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPost } from '../api/getPostsApi';
import { addPost } from '../store/actions/addPost'
import { Form, Input, Button } from 'antd';

const FormComponent = ({ userId, setNewPost }) => {

    const { TextArea } = Input
    const [inputValue, setInputValue] = useState('');
    const [textareaValue, setTextareaValue] = useState('');
    const dispatch = useDispatch();

    const AddPost = (userId, title, body) => async () => {
        const newPost = await addNewPost(userId, title, body);
        dispatch(addPost(newPost));
    };

    const inputsChange = (callback) => (e) => {
        callback(e.target.value)
    }

    const handleSubmit = (event) => {
        if (inputValue.trim() !== '' && textareaValue.trim() !== '') {
            dispatch(AddPost(userId, inputValue, textareaValue))
            setNewPost(false);
        }
    };

    return (
        <form
            style={{ width: 300 }}
            onSubmit={handleSubmit}
        >
            <Form.Item
                style={{ paddingTop: 10 }}
            >
                Title
                <Input
                    type="text"
                    onChange={inputsChange(setInputValue)}
                    value={inputValue}
                    required
                />
            </Form.Item>
            <Form.Item  >
                Body:
                <TextArea
                    type="text"
                    onChange={inputsChange(setTextareaValue)}
                    value={textareaValue}
                    required
                />
            </Form.Item>

            <Button
                htmlType="submit"
            > Add </Button>
        </form>
    );
};

export default FormComponent