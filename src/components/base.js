import Leftsec from "./leftsec";
import Midsec from "./midsec";
import Rightsec from "./rightsec";
const Base =() =>{

    return (
        <div className="base" id="base"> 
        <Leftsec title={'content'}/>
        <Midsec />
        <Rightsec />
        </div>
    )

}

export default Base;
