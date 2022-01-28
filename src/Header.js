import Menu from "./Menu";
function Header(props){
    console.log(props)
    return (
        <div>
            Header.{props.version}{props.name}
<Menu menu={props.menu}/>

        </div>
    )
}
export default Header;

