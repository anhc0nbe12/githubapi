import { useParams } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import UsersContext from '../context/github/UserContext'
import { getUser } from '../context/github/UserActions'
import Spinner from '../components/layout/Spinner'
function User() {
  const { user, dispatch, isLoading } = useContext(UsersContext)
  const params = useParams()
  useEffect(() => {
    dispatch({ type: 'SET_LOADING' })
    const getUserData = async () => {
      const user = await getUser(params.login)
      dispatch({ type: 'GET_USER', payload: user })
    }
    getUserData()
  }, [dispatch, params.login])
  const {
    name,
    bio,
    login,
    avatar_url,
    type,
    hireable,
    html_url,
    blog,
    company,
    location,
  } = user
  if (isLoading) {
    return <Spinner />
  } else {
    return (
      <div className="row">
        <div
          className="p-2 card border-0 position-relative col-xl-4 col-lg-4 col-md-4 "
          style={{ backgroundColor: '#444444 !important ' }}
        >
          <img src={avatar_url} alt="" className="card-img-top w-100 rounded" />
          <div className="position-absolute bottom-0 start-0 card-body">
            <p className="ms-4 text-primary card-title p-0 my-0">{name}</p>
            <p className="ms-4 text-primary card-title p-0 my-0">{login}</p>
          </div>
        </div>
        <div className="col-xl-8 col-lg-8 col-md-8">
          <div className="d-flex justify-content-center align-items-center flex-column">
            <div className="d-inline-flex align-items-center justify-content-center">
              <a
                href={html_url}
                className="fs-2 text-primary mx-1"
                target="_blank"
                rel="noreferrer"
              >
                {login}
              </a>
              {type && (
                <span className="bg-success rounded-pill badge mx-1">
                  {type}
                </span>
              )}
              {hireable && (
                <span className="bg-info rounded-pill badge mx-1">
                  {hireable}
                </span>
              )}
            </div>
            <p className="text-center py-1">{bio}</p>
          </div>
          <div className="d-flex flex-column justify-content-start align-items-start p-1">
            {blog && <p className="card-text">Blog: {blog}</p>}
            {company && <p className="">Company: {company}</p>}
            {location && <p className="">Location: {location}</p>}
          </div>
        </div>
        <div>hello</div>
      </div>
    )
  }
}

export default User
