import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Icon, Card, Avatar, Button } from 'antd';

const PostCard = ({ post }) => {
    return (
        <Card
            key={+post.createdAt}
            actions={[
                <Icon type="heart" key="heart" />
            ]}
        >
            <Card.Meta
                avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
                title={post.User.nickname}
                description={post.content}
            >
            </Card.Meta>
        </Card>
    );
};

PostCard.propTypes = {
    post: PropTypes.shape({ // shape: 객체 상태 
        User: PropTypes.object,
        content: PropTypes.string,
        createdAt: PropTypes.object,
    }),
};

export default PostCard;