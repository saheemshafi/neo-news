import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const apiKey = "efa851cdcb5b4da2be6a3d0caf44dda7";
  //  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <>
      <Router>
        <Sidebar key="sidebar" logo={logo} />
        <Routes>
          <Route exact path="/" element={<News key="general" category="general" apiKey={apiKey} logo={logo} />} ></Route>
          <Route exact path="/business" element={<News key="business" category="business" apiKey={apiKey} logo={logo} />} ></Route>
          <Route exact path="/science" element={<News key="science" category="science" apiKey={apiKey} logo={logo} />} ></Route>
          <Route exact path="/entertainment" element={<News key="entertainment" category="entertainment" apiKey={apiKey} logo={logo} />} ></Route>
          <Route exact path="/health" element={<News key="health" category="health" apiKey={apiKey} logo={logo} />} ></Route>
          <Route exact path="/sports" element={<News key="sports" category="sports" apiKey={apiKey} logo={logo} />} ></Route>
          <Route exact path="/technology" element={<News key="technology" category="technology" apiKey={apiKey} logo={logo} />} ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
