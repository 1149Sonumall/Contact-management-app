import React from 'react'
import Navbar from './Navbar'
// import { useDispatch, useSelector } from 'react-redux'
// import { Link } from 'react-router-dom';
// import { deleteUser } from './UserReducer';
// import Linechart from './Linechart';
// import Navbar from './Navbar';

function Home() {
  // const users = useSelector((state)=>state.users);
  // // console .log(users)
  // const dispatch = useDispatch();
  // const handleDelte = (id)=>{
  //   dispatch(deleteUser({id:id}))
  // }

  
  return (
    <div>
      <Navbar/>
    </div>
    // <div className='container'>
      
      
    //   <Link to='/chart'>chart</Link>
    //   <h2>Contact Management App</h2>
    //   <Link to='/create' className='btn btn-success my-3'>Create +</Link>
    //   <table className='table'>
    //     <thead>
    //       <tr>
    //         <th>id</th>
    //         <th>Name</th>
    //         <th>Email</th>
    //         <th >Action</th>
    //       </tr>
    //     </thead>
    //     <tbody>
    //       {users.map((user,index)=>(
    //         <tr key = {index}>
    //           <td>{user.id}</td>
    //           <td>{user.name}</td>
    //           <td>{user.email}</td>
    //           <td>
    //             <Link to={`/edit/${user.id}`} className='btn btn-sm btn-primary'>Edit</Link>
    //             <button onClick={()=>handleDelte(user.id)} className='btn btn-sm btn-danger'>Delete</button>
    //           </td>

    //         </tr>

    //       ))}

    //     </tbody>
        
    //   </table>
    // </div>

  )
}

export default Home