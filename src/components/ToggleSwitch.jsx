import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";
import { IoMenuOutline } from "react-icons/io5";
const ToggleSwitch =()=>{
    const {isActive, setIsActive} = useContext(GlobalContext)
    return(
        <div className={`toggle-switch ${isActive ? 'active' : ''}`} onClick={()=>setIsActive(!isActive)}><IoMenuOutline></IoMenuOutline></div>
    )
}

export default ToggleSwitch