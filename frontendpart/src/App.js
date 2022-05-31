import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import HomeScreen from './Components/HomeScreen';
import 'bootstrap/dist/css/bootstrap.min.css';
import Issues from './Components/Issues';
import StartPage from './Components/pages/StartPage';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
     
      <Router>
      <ToastContainer />
      {/* <Issues></Issues> */}
      <StartPage /> 
      {/* <Main></Main> */}
      {/* <HomeScreen></HomeScreen> */}
      </Router>
    </div>
  );
}

export default App;
