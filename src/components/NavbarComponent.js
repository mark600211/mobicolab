import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';



class NavbarComponent extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false,
            navbarOnTop: false
        }

        this.handleStick = this.handleStick.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleStick);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleStick);
    }

    toggleNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    handleStick() {
        if (window.screenY < 100) {
            console.log("should lock");
            this.setState({
                navbarOnTop: true
            });
        } else {
            console.log("not locked");
            this.setState({
                navbarOnTop: false
            });
        }
    }

    render() {
        return (
            <div>
                <Navbar className="sticky-top" style={{ position: this.state.navbarOnTop ?  "fixed" : "relative" }} color="dark" dark expand="md">
                    <NavbarBrand href="/">
                        <img className="logo_navbar" object src="assets/images/list_logo.png" alt="Logo" />
                    </NavbarBrand>
                    <NavbarToggler onClick={this.toggleNav} />
                    <Collapse isOpen={this.state.isNavOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="#">О нас</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Наши партнёры</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Контакты</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default NavbarComponent;