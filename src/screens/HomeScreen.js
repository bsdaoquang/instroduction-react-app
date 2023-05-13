import { Card, Button, List } from 'antd'
import React from 'react'
import { stories } from '../datas/stories'
import CardStoryItem from '../components/CardStoryItem'

function HomeScreen() {
  return (
    <div className="col-8 offset-2">
      <Card
        className="cardStory"
        title="Mới cập nhật"
        size="small"
        extra={<Button type="link" icon={<i class="fas fa-ellipsis-h" />} />}
      >
        <List
          grid={{ gutter: 16, column: 4 }}
          dataSource={stories}
          renderItem={(item) => <CardStoryItem item={item} />}
        />
      </Card>
    </div>
  )
}

export default HomeScreen
