import React from 'react'
import {Button} from 'antd'
import { StarOutlined,StarTwoTone } from '@ant-design/icons'

const StarButton = ({isFavorite, onClick}) => {
    const Icon = isFavorite ? <StarTwoTone  twoToneColor="#FBAB7E"/> : <StarOutlined/>
  return (
    <Button icon={Icon} onClick={onClick}/>
  )
}

export default StarButton