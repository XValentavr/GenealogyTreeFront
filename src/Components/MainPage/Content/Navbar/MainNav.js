import Nav from "./Nav";

const MainNav = props => {
  return (
    <>
      <Nav isLoggedIn ={props.isLoggedIn} isGenealogist={props.isGenealogist}/>
      <main>{props.children}</main>
    </>
  )
}
export default MainNav