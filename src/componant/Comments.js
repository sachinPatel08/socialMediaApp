import react,{useContext} from 'react';
import globalData from '../context/CreateContext'

const Comments = ()=>{
    const data = useContext(globalData)

    return(
        <>
       <h1>{data[1]}</h1>
        </>
    )

}

export default Comments;