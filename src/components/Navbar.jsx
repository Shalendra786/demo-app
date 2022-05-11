
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
  } from 'reactstrap';
const Navbaar = () => {
    return (
        <>
      
          <Navbar
                color="info"
                expand="md"
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
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    
                </Collapse>
            </Navbar>
        </>

    )
}
export default Navbaar;