
import React, {useState} from 'react';
import Home from './components/Home.jsx';
import Login from './components/Login.jsx';
import Quiz from './components/Quiz.jsx';
import Register from './components/Register.jsx';
import {BrowserRouter as Router, Switch, Link, Route} from 'react-router-dom'
import ButtonStyle from './components/styled/Button.style';


function App() {

  
  const [user, setUser] = useState(null)
  
  
  
  return (

    <Router>
      <nav style={{display: 'flex', justifyContent:'space-between'}}>
      <ButtonStyle><Link to="/">Home</Link> </ButtonStyle>
      <ButtonStyle> <Link to="/login">Login</Link></ButtonStyle>
      <ButtonStyle><Link to="/register">Register</Link></ButtonStyle>
      <ButtonStyle><Link to="/quiz">Quiz</Link></ButtonStyle>
      
      </nav>
     
      <Switch>
        <Route exact path="/">
          <Home loggedIn={user} />
        </Route>
        <Route exact path="/login">
          <Login setUser={setUser}/>
        </Route>
        <Route exact path="/register">
          <Register setUser={setUser}/>
        </Route>
        <Route exact path="/quiz">
          <Quiz loggedIn={user}/>
        </Route>
      </Switch>
      <wallpaper></wallpaper>
    </Router>
  )
}

export default App;
