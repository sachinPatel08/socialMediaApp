import react, { useEffect, useState ,useContext } from 'react';
import PostView from '../Views/PostView';
import Button from 'react-bootstrap/Button';
import globalData from '../context/CreateContext'
import MyPostView from '../Views/MyPostView';


const Posts = ()=>{

const [allPost , setAllPost] = useState([])
const [post , setPost] = useState([])
const [show , setShow] = useState(true)
const token = useContext(globalData)

const changeView = ()=>{
    if(show==false){
        setShow(true)
    }
}
const changeViewPost = ()=>{
if(show==true){
    setShow(false)
}
}


   useEffect(()=>{

        fetch(`http://localhost:5000/user/allPost`,{
            method: 'GET', 
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              },  
        }).then(res => res.json())
        .then(data => setAllPost(data))
   },[])
//    useEffect(()=>{

//     fetch(`http://localhost:5000/user/showPost`,{
//         method: 'GET', 
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'token':token[0],

//           },  
//     }).then(res => res.json())
//     .then(post => setPost(post))
// },[])

    return(
        <>

{
    allPost.map((data,i)=>{
        return(
        <PostView val={data}/>
        )
    })
}
   
        </>
    )

}

export default Posts;