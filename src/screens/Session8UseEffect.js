import { Input } from 'antd';
import React, { useEffect, useState } from 'react'
import ProductItem from '../components/ProductItem';

function Session8UseEffect()
{

  const [name, setName] = useState('');

  const products = [
    {
      id: 1,
      name: 'product 1'
    },
    {
      id: 2,
      name: 'product 1'
    },
    {
      id: 3,
      name: 'product 1'
    },
    {
      id: 4,
      name: 'product 1'
    },
    {
      id: 5,
      name: 'product 1'
    },

  ]

  useEffect(() =>
  {
    getDataFromBackend()

  }, [])




  /*

  useEffect là gì?
  khi nào cần sử dụng useEffect?

  Các trường hợp sử dụng useEffect

    - Chỉ thực hiện 1 lần khi component được gọi
      useEffect(() => {

      }, [])

    - Thực hiện khi thành phần phụ thuộc có sự thay đổi
      useEffect(() => {

      }, [thành phần phụ thuộc])
  */

  useEffect(() =>
  {
    window.addEventListener('scroll', () =>
    {
      // d something
    })

    return () =>
    {
      window.removeEventListener('scroll')
    }
  })

  const getDataFromBackend = () =>
  {
    console.log('data')
  }


  const showname = () =>
  {
    console.log(name)
  }

  return (
    <div>

      <Input placeholder='name' value={name} onChange={val => setName(val.target.value)} />
      {
        products.map(item => <ProductItem id={item.id} />)
      }
    </div>
  )
}

export default Session8UseEffect