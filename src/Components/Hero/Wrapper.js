import classes from "../Hero/Wrapper.module.css";

export default function Wrapper(props) {
  return <div className={classes.Container}>{props.children}</div>;
}
