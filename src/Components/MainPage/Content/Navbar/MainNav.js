import Nav from "./Nav";

const MainNav = props => {
  return (
    <>
      <Nav isLoggedIn ={props.isLoggedIn} isMainGenealogist={props.isMainGenealogist} isGenealogist={props.isGenealogist}/>
      <main>{props.children}</main>
    </>
  )
}
export default MainNav