import React from 'react'
import {Input} from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { setSearch } from '../slices/dataSlice'


const Searcher = ({toggle}) => {
  const search = useSelector(state => state.search)
  const dispatch = useDispatch()

  return (
    <Input.Search placeholder='Pokemon name..' onChange={(e)=>dispatch(setSearch(e.target.value.toLowerCase()))}
    value={search}
    disabled={toggle}
    />
    
  )
}

export default Searcher