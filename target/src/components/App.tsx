// import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Top from "./Top.jsx";
import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Top />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
