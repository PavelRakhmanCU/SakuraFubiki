import { useState } from "react";
import { useNavigate } from "react-router-dom";
const MenuCard = ({ item }) => {
  const [isClicked, setIsClicked] = useState(false);
const navigate=useNavigate()
  const handleClick=(route)=>{
    switch(route){
        case 'Dinner':
            navigate('/dinner')
            break;
            case 'Brunch':
                navigate('/brunch')
                break;
            case 'Dessert':
                navigate('/dessert')
                break;
                case 'Bar':
                    navigate('/bar')
                    break;
                    default:
                        break;
    }
}
  return (
    <div
      className={`menu-card ${isClicked ? "clicked" : ""}`}
      onClick={() => setIsClicked(!isClicked)}
    >
      <h3 className="menu-card-title">{item.title}</h3>
      {item.image && (
        <img src={item.image} alt="menu-image" className="menu-card-image"></img>
      )}
      <div className="menu-card-body">
        <p className="menu-card-description">{item.description}</p>
        <button onClick={(event)=>{event.stopPropagation();handleClick(item.title)}}>View Menu</button>
      </div>
    </div>
  );
};

export default MenuCard;