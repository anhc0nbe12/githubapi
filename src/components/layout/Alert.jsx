import {useContext} from 'react'
import AlertContext from '../../context/alert/AlertContext'

function Alert() {
   const {alert} = useContext(AlertContext)
  return alert !== null && (
     <div className='container d-flex justify-content-center align-items-end'>
        {alert.type === 'error' &&(
         <p className="alert alert-danger rounded p-0" role="alert">
           {alert.msg}
         </p>
        )}
     </div>
  )
}

export default Alert
