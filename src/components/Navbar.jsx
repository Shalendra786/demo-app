import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';
const Navbaar = () => {
    return (
        <>
      
          <Navbar
                color="light"
                expand="md"
                fixed="top"
                light
            >
                <NavbarBrand href="/">
                    Shailendra Mishra
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() { }} />
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                            <NavLink href="/">
                               Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/about">
                            About Me 
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">
                            Contact Me 
                            </NavLink>
                        </NavItem>
                        
                    </Nav>
                    
                </Collapse>
            </Navbar>
        </>

    )
}
export default Navbaar;