import logo from './logo.svg';
import './App.css';
import Login from './login/login';
import Signup from './login/signup/signup';

function App() {
  return (
    <div className="App">
      <body>
        <p>Seccion Login</p>
        <Login/>
        <p>Seccion Registro</p>
        <Signup />
      </body>
    </div>
  );
}

export default App;
