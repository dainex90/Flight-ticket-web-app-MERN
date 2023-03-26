import DropdownMenu from "./DropdownMenu";

function SideNavbar() {
    return ( 
        <div className="navbar-general-container" id="side-navbar">
            <nav>
                <ul>
                    < DropdownMenu title="Main Content"type="side-navbar" />
                    < DropdownMenu title="Additional Information" type="side-navbar" />
                    < DropdownMenu title="Programmes" type="side-navbar" />
                </ul>
            </nav>
        </div>
    );
}

export default SideNavbar;