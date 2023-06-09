/** @format */

import React, { useEffect, useState } from 'react';
import { posts } from '../datas/posts';
import { Avatar, Button, Card, Input, List, Spin, Space } from 'antd';

function Session7ListAndMap()
{
  const [myPosts, setMyPosts] = useState([]);
  const [postId, setPostId] = useState(2);

  const myId = 1;

  useEffect(() =>
  {
    getPostsById()
  }, [postId])

  const getPostsById = () =>
  {

    const items = posts.filter((element) => element.userId === postId);

    if (items.length > 0) {
      setMyPosts(items);
    } else {
      setMyPosts([])
    }
  }



  return (
    <div>
      <Card
        title={`My id: ${myId}`}
        extra={
          <Space>
            <Button onClick={() => postId > 1 ? alert(`post id can not less than 1`) : setPostId(postId - 1)}>-1</Button>
            <h5>{postId}</h5>
            <Button onClick={() => setPostId(postId + 1)}>+1</Button>
          </Space>

        }>
        {myPosts.length > 0 && (
          <List
            dataSource={myPosts}
            renderItem={(item, index) => (
              <List.Item>
                <List.Item.Meta
                  title={item.title}
                  description={item.body}
                  avatar={<Avatar>{`${item.userId}`}</Avatar>}
                />
              </List.Item>
            )}
          />
        )}
      </Card>
    </div>
  );
}

export default Session7ListAndMap;
