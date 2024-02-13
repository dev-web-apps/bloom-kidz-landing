import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./routes";
import { ScrollToTop } from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes />
      </BrowserRouter>
    </>
  );
}

export default App;
