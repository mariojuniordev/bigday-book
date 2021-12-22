import { Main } from "./components/Main";
import { Navbar } from "./components/Navbar";
import { GlobalStyle } from "./styles/global";

export function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Navbar/>
      <Main/>
    </div>
  );
}

