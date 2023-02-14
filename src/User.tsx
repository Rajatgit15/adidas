import React, { useState, useEffect} from 'react'
import { IUser } from './IUser'
import  {fetchUsers}  from '../src/Services/fetchUsers'
import './User.css'

interface IState{
    loading: boolean;
    users: IUser[];
    errorMsg: string;
}

const Users:React.FC = () =>{
    const [list, setList] = useState<IState>({
        loading: false,
        users: [] as IUser[],
        errorMsg: ''
    })

    useEffect(()=>{
        setList({...list, loading: true})
        fetchUsers.getUsers()
        .then((res: { data: any; })=> setList({
            ...list, loading: false, users: res.data
        }))
        .catch((err: { message: any; })=> setList({
            ...list, loading: false, errorMsg: err.message
        }))
        //eslint-disable-next-line
    },[])

    const { loading, users} = list

    return (
        <>
        {loading && <h1>loading...</h1>}
            <table  id="customers">
                <thead>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Username</td>
                    </tr>
                </thead>
                <tbody>
                    { users.length > 0 && users.map( user =>(
                        <tr key = {user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.username}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Users