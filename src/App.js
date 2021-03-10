import React, { useEffect } from 'react'
import Table from './components/Table'
import UserDetails from './components/UserDetails'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { loading, success, error } from './features/todos/todosSlice'
import axios from 'axios'
function App () {
  const dispatch = useDispatch()
  const state = useSelector(state => state.todos.data)

  useEffect(() => {
    dispatch(loading())
    const getData = async () => {
      try {
        const data = await axios.get(`${process.env.REACT_APP_TODOS}`)
        dispatch(success(data?.data))
      } catch (err) {
        dispatch(error())
      }
    }

    getData()
  }, [dispatch])
  return (
    <Div>
      <Table data={state} />
      <UserDetails />
    </Div>
  )
}

const Div = styled.div`
  display: flex;
  justify-content: space-around;
`

export default App
