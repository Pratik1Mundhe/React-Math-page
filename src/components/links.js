import { BrowserRouter as Router, Route  ,Switch} from 'react-router-dom';
import Integrate from "./integrate";
import {Link }from 'react-router-dom';
const Links = () => {
    return (

            <div className="Links" id="Links">
            <ol>
        <li id="link1"> <Link to='/integrate'> Integrate </Link> </li>
        <li id="link2"> <Link to='/DE'> DE </Link> </li>
      <Switch>
       <Route   path='/integrate' component={Integrate} ></Route> 
       {/* <Route   path='/DE' component={DE} ></Route>  */}
        
      </Switch>
         
            {/* <Integrate /> */}
{/*  
         <li>  <a href={''}></a>      </li> 
         <li>  <a href={''}></a>      </li>
          <li>  <a href={''}></a>      </li> 
          <li>  <a href={''}></a>      </li> */}
            </ol>
        </div>
      
    )
}


export default Links;