import React, { useState, useEffect} from 'react'
import { IPosts } from './IPosts'
import  {fetchPosts}  from '../src/Services/fetchPosts'
 import './User.css'

interface IPost{
    [x: string]: any;
    postData: any;
}

const Posts = ()=>{
    const [postData, setpostData] = useState<IPost>({
        postData:[] as IPosts[]
    })

    useEffect(()=>{
    
        fetchPosts.getPosts()
        .then((res: { data: any; })=> setpostData({
            postData: res.data
        }))
        //eslint-disable-next-line
    },[])

    return (
        <>
        <table id="customers">
            <tbody>
                <tr>
                    <td>{postData.postData.id}</td>
                    <td>{postData.postData.title}</td>
                </tr>
            </tbody>
        </table>
        
        </>
    )

   
}
export default Posts