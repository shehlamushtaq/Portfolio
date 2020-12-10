import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Menu = () => {

    const cls = "current";
    const [selected, setSelected] = useState([cls, '', '', '']);

    const ChangeMenu = (ind) => {
        let arr = ['', '', '', ''];
        arr[ind] = cls;
        setSelected(arr);
    }

    return (
        <nav id="nav-wrap">

        <ul id="nav" className="nav">
           <li className={selected[0]}><Link to="/" className="smoothscroll" onClick={() => ChangeMenu(0)}>Home</Link></li>
           <li className={selected[1]}><Link to="/qualification" className="smoothscroll" onClick={() => ChangeMenu(1)}>Qualifications</Link></li>
           <li className={selected[2]}><Link to="/projects" className="smoothscroll" onClick={() => ChangeMenu(2)}>Projects</Link></li>
         <li className={selected[3]}><Link to="/contact" className="smoothscroll" onClick={() => ChangeMenu(3)}>Contact</Link></li>
        </ul>
     </nav>
    )
}

export default Menu
