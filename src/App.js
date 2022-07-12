import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import News from './components/News';

function App() {
 const apiKey = "efa851cdcb5b4da2be6a3d0caf44dda7";
//  const apiKey = process.env.REACT_APP_API_KEY;
  return (
    <>
      <Sidebar key="sidebar" logo={logo} />
      <News key="news" apiKey={apiKey} logo={logo}/>
    </>
  );
}

export default App;
