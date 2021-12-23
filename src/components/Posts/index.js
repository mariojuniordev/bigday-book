import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { api } from "../../services/api";
import styled from 'styled-components'

const Container = styled.div`
  .card {
    width: 18rem;
    margin: 20px;
    display: inline-block;
  }
`

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
      <Container>
          {posts.map((post) => 
            <>
            <div className="card">
              <div className="card-body">
              <h5 className="card-title">User {post.id}</h5>
              <img 
              src="https://getbootstrap.com//docs/4.0/assets/brand/bootstrap-solid.svg"  
              className="card-img-top" alt="IMG..."
              />
              <h5 className="card-title">{post.title}</h5>
              <p className="card-text">{post.body}</p>
              <button
                onClick={handleOpenCommentsModal}
                class="btn btn-primary"
              >
                <img src="" alt="See Comments..." />
              </button>
              </div>
            </div>
            </>
          )}  
      </Container>

        <Modal 
        isOpen={isCommentsModalOpen}
        onRequestClose={handleCloseCommentsModal}
        >
          <button 
          type="button" 
          class="btn-close" 
          aria-label="Close"
          onClick={handleCloseCommentsModal}
          ></button>
            {comments.map((comment) => 
            <li className="list-group-item align-items-center">
            <h2>User {comment.id}</h2>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
            </li>
          )}
        </Modal>
    </>
    );
};



