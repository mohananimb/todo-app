import axios from 'axios'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  loading,
  success,
  error,
  singleTodo
} from '../../features/todos/userSlice'

import {
  success as todoSuccess,
  error as todoError
} from '../../features/todos/todosSlice'

import styled from 'styled-components'

function Table ({ data }) {
  const dispatch = useDispatch()
  const state = useSelector(state => state.todos.data)

  const handleUser = async (id, userID, title) => {
    dispatch(loading())
    try {
      const data = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userID}`
      )

      const filterTodos = state.filter(item => item.userId === userID)
      dispatch(todoSuccess(filterTodos))

      dispatch(success(data?.data))
      dispatch(
        singleTodo({
          id,
          title
        })
      )
    } catch (err) {
      dispatch(error())
    }
  }

  const handleChange = async e => {
    if (e.target.value === '') {
      try {
        const datat = await axios.get(
          `https://jsonplaceholder.typicode.com/todos`
        )
        // console.log(datat)
        dispatch(todoSuccess(datat?.data))
      } catch (err) {
        dispatch(todoError())
      }
    } else {
      const filterData = data.filter(item => item.title === e.target.value)
      dispatch(todoSuccess(filterData))
    }
  }
  return (
    <div>
      <Header className='header'>
        <h3>Todos</h3>
        <form>
          <input type='text' onChange={handleChange} />
        </form>
      </Header>

      <table className='table'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Title</th>
            <th scope='col'>Status</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, i) => (
            <tr key={item.id}>
              <th scope='row'>{i + 1}</th>
              <td>{item.title}</td>
              <td>{item.completed.toString()}</td>
              <td>
                <button
                  onClick={() => handleUser(item.id, item.userId, item.title)}
                  className='btn btn-success'
                >
                  View User
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

const Header = styled.div`
  display: flex;
  justify-content: space-around;
`

export default Table
