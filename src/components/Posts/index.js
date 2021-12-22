import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { api } from "../../services/api";


export const Posts = ({ posts }) => {
  const [isCommentsModalOpen, setIsCommentsModalOpen] = useState(false);

  function handleOpenCommentsModal() {
    setIsCommentsModalOpen(true);
  }

  function handleCloseCommentsModal() {
    setIsCommentsModalOpen(false);

  }

  const [comments, setComments] = useState([]);

  useEffect(() => {
    api.get('/comments')
    .then(response => setComments(response.data));
  }, []); 

  return (
    <>
      <ul className="list-group">
        {posts.map((post) => <li className="list-group-item align-items-center">
          <h2>User {post.id}</h2>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button 
          onClick={handleOpenCommentsModal}
          class="btn btn-primary" 
          >
            <img src="../../assets/bf.png" alt="See Comments..."/>
          </button>
        </li>
        )}
      </ul>

      <Modal 
      isOpen={isCommentsModalOpen}
      onRequestClose={handleCloseCommentsModal}
      >
          <h2>Comments</h2>
          {comments.map((comment) => <li className="list-group-item align-items-center">
          <h2>User {comment.id}</h2>
          <h3>{comment.name}</h3>
          <p>{comment.body}</p>
        </li>
        )}
      </Modal>
    </>
    );
};



