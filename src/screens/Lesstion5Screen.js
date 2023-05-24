/** @format */

import { Button, Card, Input, Space } from 'antd';
import React, { useState } from 'react';
import HeaderComponent from '../components/HeaderComponent';
import CountComponent from './CountComponent';

function Lesstion5Screen()
{
  const [count, setCount] = useState(10);
  const [profile, setProfile] = useState({});
  const [subTitle, setSubTitle] = useState('');

  const handleSubmit = () =>
  {
    setSubTitle(
      `Name: ${profile.name}, Occupation: ${profile.occupation}, desc: ${profile.description}`
    );
  };

  return (
    <div className='col-8 offset-2'>
      {/* Header */}
      <HeaderComponent subTitle={subTitle} />
      {/* count  */}
      <div className='row'>
        <CountComponent
          count={count}
          onReset={() => setCount(5)}
          title='Count One'
          onIncrease={() => setCount(count - 1)}
          onDecrease={() => setCount(count + 1)}
        />

        <CountComponent
          count={10 - count}
          onReset={() => setCount(5)}
          title='Count Two'
          onIncrease={() => setCount(count + 1)}
          onDecrease={() => setCount(count - 1)}
        />
      </div>
      {/* form */}
      <Card style={{ marginTop: 20 }}>
        <Input
          placeholder='Description'
          value={profile.description}
          onChange={(val) =>
            setProfile({ ...profile, description: val.target.value })
          }
        />
        <div className='row mt-4'>
          <div className='col'>
            <Space>
              Name
              <Input
                placeholder='name'
                value={profile.name}
                onChange={(val) =>
                  setProfile({ ...profile, name: val.target.value })
                }
              />
            </Space>
          </div>
          <div className='col'>
            <Space>
              Occupation
              <Input
                placeholder='Occupation'
                value={profile.occupation}
                onChange={(val) =>
                  setProfile({ ...profile, occupation: val.target.value })
                }
              />
            </Space>
          </div>
        </div>
        <div className='text-center mt-4'>
          <Button
            type='primary'
            style={{ width: '100%' }}
            onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default Lesstion5Screen;
