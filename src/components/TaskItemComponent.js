import { Button, Checkbox, List, Space } from 'antd'
import React from 'react'

function TaskItemComponent(props)
{
  const { item, index, onDelete, onCompleted } = props

  return (

    <List.Item
      actions={[
        <Button
          onClick={() => onDelete(index)}
          size="small"
          danger
          type="primary"
        >
          Del
        </Button>,
      ]}
    >
      <List.Item.Meta
        title={
          <Checkbox onChange={() => onCompleted(index)}>
            <p style={{
              textDecoration: item.isCompleted ? 'line-through' : 'auto',
              color: item.isCompleted ? '#e0e0e0' : '#212121'
            }}>{item.content}</p>
          </Checkbox>
        }
        description={`Task ID: ${item.id}`}
      />
    </List.Item>

  )
}

export default TaskItemComponent
