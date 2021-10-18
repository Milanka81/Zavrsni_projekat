import { useState } from "react";
import { useHistory } from "react-router";
import { getAllUsers, postUser } from "../service";
import BackgroundStyle from "./styled/Background.style";
import Wrapper from "./styled/Wrapper";
import { TextField } from "@material-ui/core";
import ButtonStyle from "./styled/Submit";
import Title from "./styled/Title";
import { isEmailEmpty, isPasswordEmpty, isValidUsername, isUsernameEmpty, isValidPassword } from "./validation";
import H4 from "./styled/H4";
const Register = ({setUser}) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errors, setErrors] = useState([false,false,false])
    let errorRegister = ["Fill all the Fields", "Username must have minimum 5 characters" ,"Password must have minimum 8 characters"]

    const history = useHistory()
    
      return (
      <BackgroundStyle>
          <Wrapper>

            
        <form onSubmit={(e)=> {
            e.preventDefault()
            
            if(isUsernameEmpty(username)  || isEmailEmpty(email) || isPasswordEmpty(password) ){
                setErrors(prev=>prev.map((err, i) => i===0? true: err))
                return
            }
            setErrors(prev=>prev.map((err, i) => i===0? false: err))
            if(!isValidUsername(username)){
                setErrors(prev=>prev.map((err, i) => i===1? true: err))
                return
            }
            setErrors(prev=>prev.map((err, i) => i===1? false: err))
            if(!isValidPassword(password)){
                setErrors(prev=>prev.map((err, i) => i===2? true: err))
                return
            }
            setErrors(prev=>prev.map((err, i) => i===2? false: err))
            getAllUsers().then(res=>{
                if(!res.data.some(user => user.username === username || user.email === email)){
                    postUser(username,email,password).then(res => {
                        setUser(res.data);
                        history.push('/quiz')
                    })

                }
            })
            

        }}>
              <Title>Create Accaunt</Title>
            <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Username"
            variant="outlined"
            onChange={(e) => setUsername(e.target.value)} />  
              <br/>
          <TextField
            style={{ marginBottom: 25 }}
            label="Enter Your Email"
            type="email"
            variant="outlined"
            onChange={(e) => setEmail(e.target.value)}
          />  <br/>
            <TextField style={{marginBottom: 25 }}
            label="Enter Your Password"
            variant="outlined" onChange={(e)=> {setPassword(e.target.value)}}/>
            <H4>{errors[1]? errorRegister[1] : ''}</H4>
            <H4>{errors[2]? errorRegister[2] : ''}</H4>
            <H4>{errors[0]? errorRegister[0] : ''}</H4>

            <ButtonStyle type="submit">Register</ButtonStyle>
            
        
           
        </form>
        </Wrapper>
        </BackgroundStyle>
    );
}
 
 
export default Register;