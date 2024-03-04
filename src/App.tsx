import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Routes from "./routes";
import { ScrollToTop } from "./components";
import { Alert } from "@mui/material";
import { transitions, positions, Provider as AlertProvider } from "react-alert";

const AlertTemplate = ({ style, options, message, close }: any) => (
  <div style={style}>
    <Alert severity={options?.type} onClose={close}>
      {message}
    </Alert>
  </div>
);

const options = {
  position: positions.BOTTOM_RIGHT,
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

function App() {
  return (
    <>
      <AlertProvider template={AlertTemplate} {...options}>
        <BrowserRouter>
          <ScrollToTop />
          <Routes />
        </BrowserRouter>
      </AlertProvider>
    </>
  );
}

export default App;
