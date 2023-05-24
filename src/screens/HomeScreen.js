import { Button, Card, Divider, Input, List, Space, message } from 'antd'
import { ListTaskComponent, TaskItemComponent } from '../components'
import React, { useState } from 'react'

// vùng import 

const HomeScreen = (props) =>
{

  const [content, setContent] = useState('');
  const [tasks, setTasks] = useState([]);
  /*
  
  vùng useState

  */


  /*
  
  useEffect

  */

  /*
    logic, function
  */

  const handleAddNewTask = () =>
  {
    const data = {
      id: tasks.length + 1,
      content,
      isCompleted: false,
      createdAt: Date.now()
    }

    const items = [...tasks, data]

    setTasks(items)

    setContent('')
    message.success('Add new task successfully!')
  }

  const handleRemoveTaks = (index) =>
  {
    tasks.splice(index, 1)

    const newItems = [...tasks]

    setTasks(newItems)

    message.success('Task removed!')
  }

  const handleChangeStatusTask = (index) =>
  {
    const newitems = [...tasks]

    const task = (newitems[index])


    task.isCompleted = !task.isCompleted

    setTasks(newitems)

  }



  return (
    <div className="col-8 offset-2 mt-4" style={{ padding: 20 }}>
      <Card title="Todo list" size="small" className="mt-4">
        <Input
          placeholder="Add new task"
          size="large"
          value={content}
          onChange={(val) => setContent(val.target.value)}
          allowClear
          onPressEnter={handleAddNewTask}
        />
        <Divider />

        <ListTaskComponent>
          {tasks.length > 0 ? (
            <List
              itemLayout="horizontal"
              dataSource={tasks}
              renderItem={(item, index) => (
                <TaskItemComponent
                  item={item}
                  index={index}
                  onDelete={(index) => handleRemoveTaks(index)}
                  onCompleted={(index) =>
                    handleChangeStatusTask(index)
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
