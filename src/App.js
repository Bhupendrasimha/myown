import { useEffect } from "react";
import AppRouter from "./AppRouter";
import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Styles
import "./styles/App.scss";

function App() {
  return (
    <div className="app-container">
      <AppRouter />
      <ToastContainer />
    </div>
  );
}

export default App;
