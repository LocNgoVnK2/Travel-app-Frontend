import "./NavbarStyles.css";
import { Link,useNavigate  } from 'react-router-dom';
import { MenuItems } from "./MenuItems";
import { useState } from "react";
export default function Navbar() {
   const [BarClicked,setBarCkicked] = useState(false);
   const [userName, setUserName] = useState('John Doe');
   const navigate = useNavigate();


   const handleClicking = () =>{

    setBarCkicked(!BarClicked);
   }
  // hàm tạo để làm mẫu chuyển state 
  const handleNavigateToContact = () => {
    navigate('/contact', { state: { userName } });
  }


  return (
    <>
    <nav className="NavbarItems">
        <h1 className="navbar-logo"> Nature Travel </h1>

        <div className="menu-icons" onClick={handleClicking}>
            <i className={BarClicked?"fas fa-times":"fas fa-bars"}></i>
        </div>

        <ul className={BarClicked?"nav-menu active":"nav-menu"}>
           {MenuItems.map((item,index)=>{ // map nhận vào 1 arrow funtion
                return (
                    <li key ={index}>
                        <Link to={item.url} className={item.cName}>
                            <i className={item.icon}></i> {item.title}
                        </Link>
                    </li>
                );
           })} 
           <button /*onClick={handleNavigateToContact}*/>Sign up</button>  {/* các để truyền prop sang 1 page khác mà truyền trức tiếp qua khi route */}
        </ul>
    </nav>
    </>
  );
}