import Calc1 from "../mutator/form1";
import Calc5 from '../mutator/form5';
import Calc9 from '../mutator/form9';
import Calc10 from '../mutator/form10';
import Calc11 from '../mutator/form11';
import Calc12 from '../mutator/form12';
import Calc14 from "../mutator/form14";
import Calc15 from '../mutator/form15';
import Calc16 from '../mutator/form16';
import Calc17 from '../mutator/form17';
import Calc18 from '../mutator/form18';

const  Rightsec = ({no=1}) => {
    return (
        <div className="area4" id="area4">
            <p style={{fontSize:'30px'}}>Calc</p>
            {/* <Calc1 /> */}
            {/* <Calc14 /> */}
            {
                no==1 ? (<Calc1 />) : ('')
            }
        </div>
    )
}

export default Rightsec;
