import { Redirect } from "react-router";


const Home = ({loggedIn}) => {

    
    return loggedIn?(
         <Redirect to="/quiz"/>):  (<Redirect to="/login"/>
    
    )
}
 
export default Home;
