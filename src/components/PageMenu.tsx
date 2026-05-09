function PageMenu(){

    const navItems = ['Home', 'Page - 1','Page - 2','Page - 3']

    return(
        <ul className="list-group">
            {navItems.map((navItems) => 
                <li className="list-group-item">{navItems}</li>
            )}
           
        </ul>
    )
    
}

export default PageMenu;