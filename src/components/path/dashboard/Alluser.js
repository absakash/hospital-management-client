import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';

const Alluser = () => {

    const {data:users=[],refetch}=useQuery(
        {
            queryKey:['users'],
            queryFn:async()=>{
                const res=await fetch('http://localhost:4000/users');
                const data=await res.json();
                return data;

            }
        }
    );

    const handleAdmit=(id)=>{
       
        fetch(`http://localhost:4000/users/admin/${id}`,{
            method:'PUT',
            // headers:{
            //   authorization:`bearer ${localStorage.getItem('access_token')}`
            // }
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data);
            if(data.modifiedCount>0){
                refetch()
                toast.success('make admin successfully .......');
            }
        })

    }

    return (
        <div>
            <div className="overflow-x-auto">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Job</th>
        <th>admin power</th>
        <th>delete</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        users.map((user,i)=><tr key={user._id}>
             <td>{i+1} </td>
        <td>{user.name}</td>
        <td> {user.email} </td>
        <td>{user?.role!=='admin' &&<button onClick={()=>handleAdmit(user._id)} className='btn btn-success btn-sm '>make admit</button>}</td>
        <td><button className='btn-danger btn btn-sm'>delete</button></td>
        </tr>)
      }

    </tbody>
  </table>
</div>
        </div>
    );
};

export default Alluser;