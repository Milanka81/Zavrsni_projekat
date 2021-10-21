import { useState } from "react";
import { Link , useHistory} from "react-router-dom";
import { getAllUsers } from "../service";
import ButtonStyle from "./styled/Submit";
import {TextField } from "@material-ui/core"
import BackgroundStyle from "./styled/Background.style";
import Wrapper from "./styled/Wrapper";
import ButtonStyle1 from "./styled/Button.style";
import H4 from "./styled/H4";
import H2 from "./styled/H2";
import { isPasswordEmpty, isUsernameEmpty } from "./validation";


const Login = ({setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState([false])
    let errorLogin = ["Wrong User Data"]
   
    const history = useHistory()
    return (  
        <BackgroundStyle>
            <Wrapper>
        <form onSubmit={(e)=> {
            e.preventDefault()
            setError(prev=>prev.map((err, i) => i===0? false: err))
            if(isUsernameEmpty(username) || isPasswordEmpty(password) ){
                setError(prev=>prev.map((err, i) => i===0? true: err))
                return
            }
            setError(prev=>prev.map((err, i) => i===0? false: err))
            getAllUsers().then(res=>{
                let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
                    setUser(user)
                    console.log('ulogovan');
                    history.push('/quiz')
            
            })
            
        }}>

            <H2>Have an Account?</H2>
            <TextField
            style={{ marginBottom: 25 }}
            label="Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)}
          /> <br/>
            <TextField style={{marginBottom: 25 }}
            label="Password"
            variant="outlined" onChange={(e)=> {setPassword(e.target.value)}}/>
       
            <ButtonStyle type="submit">LogIn</ButtonStyle>
        </form>
        <H4>{error[0]? errorLogin[0] : ''}</H4>

        <br/>
        <br/>
            <ButtonStyle1>
            <Link to="/register">Not registered?</Link>
            <br/>
           </ButtonStyle1>
            </Wrapper>
        </BackgroundStyle>
    );
}
 
export default Login;
