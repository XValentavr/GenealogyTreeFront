import Nav from "./Nav";

const MainNav = props => {
  return (
    <>
      <Nav isLoggedIn ={props.isLoggedIn}/>
      <main>{props.children}</main>
    </>
  )
}
export default MainNav