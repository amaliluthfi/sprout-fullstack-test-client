import  React, { useEffect } from 'react'
import trashIcon from '../trash-icon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { findUsers, deleteUser } from '../store/actions/userAction'

export default function Table() {
  const { users, loading } = useSelector(state => state)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(findUsers())
  }, [dispatch, users])

  function handleDelete(id) {
    dispatch(deleteUser(id))
    dispatch(findUsers())
  }

  if (loading) return <img className="position-absolute top-50 start-50 translate-middle" src="Pulse.svg" style={{ width: '100px' }} alt="pulse" /> 

  return(
    <>
      <table className="tables">
        <tr className="head">
          <th></th>
          <th>Name</th>
          <th>Phone Number</th>
          <th>Email</th>
          <th></th>
        </tr>
      {
        users?.map(user => {
          return (
            <tr>
              <td >
                  <div style={{ borderRadius: '80px', background: '#F69621', width: '28px', height: '28px', color: 'white',  padding: '4px'}}>
                    <p>{ 
                        (user?.name?.split(' ').length === 1)
                        ? 
                        user?.name?.split(' ')[0][0] + user?.name?.split(' ')[0][1]
                        :
                        user?.name?.split(' ')[0][0] + user?.name?.split(' ')[1][0]
                    }</p>
                  </div>
                </td>
              <td>{user.name}</td>
              <td>{user.phoneNumber}</td>
              <td>{user.email}</td>
              <td><a href="" onClick={(e) => {e.preventDefault(); handleDelete(user._id) }} ><img src={trashIcon} alt="trash icon" /></a></td>
            </tr>
          )
      })
       }
      </table>
    </>
  )
}