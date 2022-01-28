function Menu(props){
    return ( <ol>
        {props.menu.map(el => <li key={el.link}> {el.title}</li> )}
    </ol>)
}

export default Menu;
