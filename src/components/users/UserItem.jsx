import {Link} from 'react-router-dom'

function UserItem({user: { login , avatar_url} }) {
  return (
    <div className="col-xl-4 col-lg-4 col-md-6 p-3 ">
      <div className="card bg-primary text-white rounded">
            <div className='d-flex justify-content-center align-items-center'>
               <img src={avatar_url} alt="avatar" className='card-img-top w-25 rounded-circle'  />
               <div className='card-body'>
                  <p className='card-text'>{login}</p>
                  <Link className='card-link text-white' to={`/user/${login}`}>link</Link>
               </div>
            </div>
          </div>
    </div>
  )
}

export default UserItem
