import React,{ useState }  from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {  useNavigate, useParams } from 'react-router-dom'
import { updateuser } from './UserReducer';




function Update() {
    const {id} = useParams()
    const users = useSelector((state)=>state.users);
    const existinguser = users.filter(f=> f.id == id)
    const {name,email}=existinguser[0]
    const [uname,setName] = useState(name)
    const [uemail,setEmail] = useState(email)
    const dispatch=useDispatch();
    const navigate = useNavigate()


    const handleupdate = (event)=>{
        event.preventDefault();
        dispatch(updateuser({
            id:id,
            name:uname,
            email:uemail

        }))
        navigate('/')
    }



  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
            <div className='w-50 border bg-secondary text-white p-5'>
                <h3>Edit contact</h3>
                <form  onSubmit={handleupdate}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input type='text' name='name' className='from-control' placeholder='enter name' 
                        value={uname} onChange={e =>setName(e.target.value)}/>
                    </div>

                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input type='email' name='email' className='from-control' placeholder='enter email'
                         value={uemail} onChange={e =>setEmail(e.target.value)}/>
                    </div><br />

                    <button className='btn btn-info' >Submit</button>
                </form>

            </div>

        </div>
  )
}

export default Update