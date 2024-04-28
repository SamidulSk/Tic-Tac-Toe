import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa'; 

function Icon({ name }) { // Destructuring the 'name' prop properly
    if (name == "circle") { 
        return <FaRegCircle />;
    }
    else if (name == "cross") { 
        return <FaTimes />;
    }
    else {
        return <FaPen />;
    }
}
export default Icon;
