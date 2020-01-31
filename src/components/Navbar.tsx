import React from "react";
import MenuToggle from "./MenuToggle";
import NavbarSearch from "./NavbarSearch";
import MenuLogo from "./MenuLogo";
import NavbarMenu from "./NavbarMenu";
import UserDropdown from "./UserDropdown";

type StateType = {
  isMenuOpen: boolean;
  isFiltersOpen: boolean;
};

export default class Navbar extends React.Component<{}, StateType> {
  state: StateType = { isMenuOpen: false, isFiltersOpen: false };
  constructor(props: any) {
    super(props);
    this.menuHandler = this.menuHandler.bind(this);
  }

  menuHandler() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen
    });
  }

  render() {
    return (
      <header className="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
        <div className="flex justify-between px-4 py-3 xl:w-72 xl:bg-gray-900 xl:justify-center xl:py-5">
          <MenuLogo />
          <div className="flex sm:hidden">
            <MenuToggle
              open={this.state.isMenuOpen}
              action={this.menuHandler}
            />
          </div>
        </div>
        <nav
          className={`sm:flex sm:items-center sm:px-4 xl:flex-1 xl:justify-between ${
            this.state.isMenuOpen ? "block" : "hidden"
          }`}
        >
          <NavbarSearch />
          <div className="sm:flex sm:items-center">
            <NavbarMenu />
            <UserDropdown
              open={this.state.isMenuOpen}
              action={this.menuHandler}
            />
          </div>
        </nav>
      </header>
    );
  }
}
