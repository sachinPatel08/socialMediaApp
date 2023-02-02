import {useContext} from 'react'
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import {Outlet} from 'react-router'


const Sidebar = ()=>{
 
    return(
        <Main>
       <div className="sidebar">
         <div className="logo">
            <div className="logo-txt">SocialApp</div>
         </div>
         <hr style={{color:"white"}}></hr>
           
    <NavLink className="txt" to="/Dashboard/Post">
    <div className="list">
            <i class="fa fa-address-card" aria-hidden="true"></i> &nbsp; Posts
            </div>
    </NavLink>
    <NavLink className="txt" to="/Dashboard/Followers">
           <div className="list"><i class="fa fa-users" aria-hidden="true"></i> &nbsp; Followers</div>
    </NavLink>
    <NavLink className="txt" to="/Dashboard/Comments">
           <div className="list"><i class="fa fa-comments" aria-hidden="true"></i> &nbsp; Comments</div>
    </NavLink>
    <NavLink className="txt" to="/Dashboard/setting">
           <div className="list"><i class="fa-solid fa-gear"></i> &nbsp; Setting</div>
    </NavLink>
    <NavLink className="txt" to="/Dashboard/Logout">
           <div className="list"><i class="fa fa-sign-out" aria-hidden="true"></i> &nbsp; Logout</div>
    </NavLink>
       </div>
       
        </Main>
    )
}
const Main = styled.div`

position:fixed;
top:0;
min-height:100%;
width:15rem;
overflow:hidden;
padding-top:20px;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
background-color:#212529;
display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  
.logo-txt{
  display:flex;
  justify-content:center;
  align-items:center;
  margin:0 0 30px 0;
   font-size:18px;
   color:white;
  }

  .txt{
    text-decoration:none;
  }
  .list{
    color:white;
   margin:10px 0 10px 0;
   padding:10px;
   
   &:hover{
    background-color:white;
    color:black;
   }
   
  }
  
}

`
export default Sidebar;


