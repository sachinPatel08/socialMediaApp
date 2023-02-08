import react, { useEffect, useState, useContext } from "react";
import PostView from "../Views/PostView";
import Button from "react-bootstrap/Button";
import globalData from "../context/CreateContext";
import MyPostView from "../Views/MyPostView";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Posts = () => {
  const navigate = useNavigate()
  const [allPost, setAllPost] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [post, setPost] = useState([]);
  const [show, setShow] = useState(true);
  const token = useContext(globalData);

  useEffect(() => {
    fetch(`http://localhost:5000/user/allPost`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setAllPost(data.reverse()));
  });

  const PushPost = () => {
    const data = { title, content };
    fetch("http://localhost:5000/user/createPost", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        token: token[0],
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <>
      <Div>
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          data-bs-whatever="@mdo"
          className="btn btn-dark"
        >
          Post
        </button>
      </Div>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                New Post
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="recipient-name" className="col-form-label">
                    Title:
                  </label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control"
                    id="recipient-name"
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="message-text" className="col-form-label">
                    Content:
                  </label>
                  <textarea
                    className="form-control"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    id="message-text"
                  ></textarea>
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button
                onClick={PushPost}
                type="button"
                className="btn btn-primary"
              >
                Create Post
              </button>
            </div>
          </div>
        </div>
      </div>
      {allPost.map((data, i) => {
        return <PostView key={data.id} val={data} />;
      })}
    </>
  );
};

const Div = styled.div`
  position: fixed;
  z-index: 999;
  right: 3%;
  bottom: 3%;
`;

export default Posts;
