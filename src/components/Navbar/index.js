/* eslint-disable jsx-a11y/anchor-is-valid */
import styled from 'styled-components'

const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #8257e6;
`

export function Navbar() {
  return (
    <Container>
      <nav class="navbar navbar-expand-lg relative-top">
        <div class="navbar-brand">
          <h1>BigDayBook</h1>
        </div>
      </nav>
    </Container>
  );
}

