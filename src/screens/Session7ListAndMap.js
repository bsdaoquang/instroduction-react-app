/** @format */

import React, { useEffect, useState } from 'react';
import { posts } from '../datas/posts';
import { Avatar, Card, Input, List, Spin } from 'antd';

function Session7ListAndMap()
{
  const [myPosts, setMyPosts] = useState([]);
  const [postId, setPostId] = useState(2);

  const myId = 1;

  useEffect(() =>
  {
    getPostsById()
  }, [])

  const getPostsById = () =>
  {

    const items = posts.filter((element) => element.userId === postId);

    if (items.length > 0) {
      setMyPosts(items);
    } else {
      setMyPosts([])
    }
  }

  // console.log(myPosts)

  return (
    <div>
      <Card
        title={`My id: ${myId}`}
        extra={
          <Input
            placeholder='User id to get post'
            value={postId}
            type='number'
            onChange={(val) => setPostId(parseInt(val.target.value))}
            onPressEnter={() => getPostsById()}
          />
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
