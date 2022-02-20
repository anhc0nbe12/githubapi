import { useContext, useState } from 'react'
import UsersContext from '../../context/github/UserContext'
import AlertContext from '../../context/alert/AlertContext'
import { searchUsers } from '../../context/github/UserActions'
function UserSearch() {
  const [text, setText] = useState('')
  const { users, dispatch } = useContext(UsersContext)
  const {setAlert} = useContext(AlertContext)
  const TextChanged = (e) => setText(e.target.value)
  const HandleSubmit = async (e) => {
    e.preventDefault()
    if (text === '') {
      setAlert('enter something', 'error')
    } else {
      dispatch({type: 'SET_LOADING'})
      const users = await searchUsers(text)
      dispatch({type:'GET_USERS', payload: users})
      setText('')
    }
  }
  return (
    <div className="d-flex justify-content-center align-items-center ">
      <form className="form-group d-inline-flex" onSubmit={HandleSubmit}>
        <input
          type="text"
          className="form-control rounded-start border-2"
          onChange={TextChanged}
          value={text}
        />
        <input
          type="submit"
          className="btn btn-primary rounded-end border-2  "
        />
      </form>
      {users.length > 0 && (
        <button className="btn btn-dark border-2 ms-2 rounded" onClick={()=> dispatch({type: 'CLEAR_SEARCH'})}>Clear</button>
      )}
    </div>
  )
}

export default UserSearch
