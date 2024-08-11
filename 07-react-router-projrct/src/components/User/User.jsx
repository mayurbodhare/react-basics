import { useParams } from 'react-router-dom'

function User() {
    const {userid} = useParams();
  return (
    <div className='bg-gray-600 text-white text-center text-3xl relative p-4 my-4 mx-10 w-auto'>User: {userid}</div>
  )
}

export default User