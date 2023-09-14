import "./index.css";

function Menu(props) {
  return <a className="text-warning" href={props.links} target="blank">{props.menu}</a>;
}


export default Menu;
