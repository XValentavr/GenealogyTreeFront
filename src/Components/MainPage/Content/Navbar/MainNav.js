import Nav from "./Nav";

const MainNav = props => {
  return (
    <>
      <Nav/>
      <main>{props.children}</main>
    </>
  )
}
export default MainNav