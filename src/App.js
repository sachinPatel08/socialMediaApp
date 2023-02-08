import "./App.css";
import Home from "./componant/Home";
import Dashboard from "./componant/Dashboard/Dashboard";
import Post from "./componant/Post";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import Followers from "./componant/Followers";
import Login from "./componant/Login";
import Comments from "./componant/Comments";
import SingalPost from "./Views/SingalPost";
import SingalUser from "./Views/SingalUser";
import Logout from "./componant/Logout";
import MyPostView from "./Views/MyPostView";
const Routers = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    {
      path: "/Dashboard",
      element: <Dashboard />,
      children: [
        { path: "Post", element: <Post /> },
        { path: "Followers", element: <Followers /> },
        { path: "Comments/:id", element: <Comments /> },
        { path: "Post/:id", element: <SingalPost /> },
        { path: "User/:id", element: <SingalUser /> },
        { path: "myPost", element: <MyPostView /> },
        { path: "Logout", element: <Logout /> },
      ],
    },
  ]);
  return routes;
};

function App() {
  return (
    <Router>
      <Routers />
    </Router>
  );
}

export default App;
