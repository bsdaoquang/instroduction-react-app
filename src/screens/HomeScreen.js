import { Button, Card, Divider, Input, List, Space, message } from 'antd'

import { ListTaskComponent, TaskItemComponent } from '../components'

import React from 'react'

function HomeScreen() {
  const handleAddNewTask = (val) => {
    if (!val) {
      message.error('Please enter task!')
    }

    message.success(`Task ${val} added!`)
  }

  return (
    <div className="col-8 offset-2 mt-4" style={{ padding: 20 }}>
      <Card title="Todo list" size="small" className="mt-4">
        <Input
          placeholder="Add new task"
          size="large"
          allowClear
          onPressEnter={(val) => handleAddNewTask(val.target.value)}
        />
        <Divider />

        <ListTaskComponent>
          {TASKS.length > 0 ? (
            <List
              itemLayout="horizontal"
              dataSource={TASKS}
              renderItem={(item, index) => (
                <TaskItemComponent
                  item={item}
                  index={index}
                  onDelete={(index) => message.info(`Deleted task ${index}`)}
                  onCompleted={(index) =>
                    message.info(`Change task state to is completed`)
                  }
                />
              )}
            />
          ) : null}
        </ListTaskComponent>
      </Card>
    </div>
  )
}

export default HomeScreen
