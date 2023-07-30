import React, {useEffect, useState} from 'react'
import axios from 'axios'


const Data = () => {
    const [data, setdata] = useState([]);
    {
        useEffect(()=> {
            axios.get('http://localhost:3500/login')
            .then(res => setdata(res.data))
            .catch(res => console.log(res));
        }, [])
    }
  return (
    <>
    <div className='h4'>Data</div>

    <table className='table'>
        <thead>
            <tr>
                <th>ID</th>
                <th>email</th>
                <th>password</th>
            </tr>
        </thead>
        <tbody>
            {
                data.map((value,key)=>(
                    <tr key={key}>
                        <td>{value.id}</td>
                        <td>{value.email}</td>
                        <td>{value.password}</td>

                    </tr>
                ))
            }
          
        </tbody>

    </table>
    </>
  )
}

export default Data