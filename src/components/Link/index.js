import "./index.css";

function Menu(props) {
  return (
    <a className="text-warning link" href={props.links}>
      {props.menu}
    </a>
  );
}

export default Menu;
