/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import styled from 'styled-components'

const Container = styled.div`
  a {
    margin: 5px 10px;
  }
`

export function Navbar() {
  return (
    <Container>
      <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
        <a 
        href="#"
        className="navbar-brand mb-0 h1 align-top"
        >
          <img 
          className="d-inline-block"
          src="https://getbootstrap.com//docs/4.0/assets/brand/bootstrap-solid.svg" 
          width="30" 
          height="30" 
          alt="BigDayBook"
          />
          igDayBook
        </a>

{/*         <form class="d-flex">
          <input 
          type="text" 
          className="form-control me-2" 
          placeholder="Search for a post..." 
          />
          <button type="submit" className="btn btn-primary">Search</button>
        </form> */}
      </nav>
    </Container>
  );
}

