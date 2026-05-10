import { useState } from "react";


function PageMenu(){

    const navItems = ['Home', 'Page - 1','Page - 2','Page - 3'];
    let [selectedIndex, setSelectedIndex]  = useState(-1);

    return(
        <ul className="list-group">
            {navItems.map((navItems, index) => 
                <li className={selectedIndex == index ? 'list-group-item active' : 'list-group-item'} 
                    key={navItems} 
                    onClick={()=> setSelectedIndex(index)}>
                    {navItems}
                </li>   
            )}
           
        </ul>
    )
    
}

export default PageMenu;