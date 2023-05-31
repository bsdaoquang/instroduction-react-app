/** @format */

import React, { useEffect, useState } from 'react';
import { posts } from '../datas/posts';
import { Avatar, Button, Card, Input, List, Spin, Space } from 'antd';

function Session8UseEffectCallApi()
{
  const [myPosts, setMyPosts] = useState([]);

  useEffect(() =>
  {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(postApi =>
      {
        console.log('====================================');
        setMyPosts(postApi);
        console.log('====================================');
      })
  }, [])



  return (
    <div>
      <Card
        title={`Posts`}
      >
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

export default Session8UseEffectCallApi;
