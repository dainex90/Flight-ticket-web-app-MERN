import DropdownMenu from "./DropdownMenu";

function SideNavbar() {

    const mainContentItems = ["item1", "item2", "item3", "Item 4"];
    const additionalInformationItems = ["Store", "Contact-Center", "Regional", "Our Vision"];
    const programmesItems = ["Internship","Study-Plans","Service"];

    return ( 
        <div className="navbar-general-container" id="side-navbar">
            <nav>
                <ul>
                    < DropdownMenu title="Main Content" content={mainContentItems} type="side-navbar" />
                    < DropdownMenu title="Additional Information" content={additionalInformationItems} type="side-navbar" />
                    < DropdownMenu title="Programmes" content={programmesItems} type="side-navbar" />
                </ul>
            </nav>
        </div>
    );
}

export default SideNavbar;