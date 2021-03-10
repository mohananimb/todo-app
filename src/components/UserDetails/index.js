import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'

function UserDetails () {
  const state = useSelector(state => state.user?.data)
  const user = useSelector(state => state.user.singleTodo)
  return (
    Object.keys(user).length !== 0 && (
      <div>
        <h3>User Details</h3>
        <div>
          <Row>
            <span>TODO ID</span>
            <span>{user?.id}</span>
          </Row>
          <Row>
            <span>Title</span>
            <span>{user?.title}</span>
          </Row>
          <Row>
            <span>User ID</span>
            <span>{state?.id}</span>
          </Row>
          <Row>
            <span>Name</span>
            <span>{state?.username}</span>
          </Row>
          <Row>
            <span>Email</span>
            <span>{state?.email}</span>
          </Row>
        </div>
      </div>
    )
  )
}

const Row = styled.div`
  display: flex;
  justify-content: space-around;
`

export default UserDetails
