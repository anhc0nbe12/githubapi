import { useContext} from 'react'
import UserItem from './UserItem'
import Spinner from '../layout/Spinner'
import UsersContext from '../../context/github/UserContext'
function UserResults() {
  const { isLoading, users} = useContext(UsersContext)
  
  if (!isLoading){
   return (
      <div className="py-3 row">
        {users.map((user) => (
           <UserItem key={user.id} user={user} />
        ))}
      </div>
    )
  }
  else{
     return <Spinner />
  }
}

export default UserResults
