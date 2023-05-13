import { Card, Rate } from 'antd'
import React from 'react'
import TitleComponent from './TitleComponent'

const { Meta } = Card

function CardStoryItem({ item }) {
  return (
    <Card
      style={{ margin: 12 }}
      type="inner"
      cover={<img src={item.image} />}
      hoverable
    >
      <Meta
        title={<TitleComponent title={item.title} />}
        description={`Trạng thái: ${item.status}`}
      />
      <Rate count={5} disabled />
    </Card>
  )
}

export default CardStoryItem
