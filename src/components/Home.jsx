import { Redirect } from "react-router";


const Home = ({loggedIn}) => {

    
    return loggedIn?(
           <Redirect to="/login"/>):( <Redirect to="/quiz"/>
    
    )
}
 
export default Home;