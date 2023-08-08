import { HomeLink } from "../buttons/homeLink";
import { AboutLink } from "../buttons/aboutLink";
import { ContactLink } from "../buttons/contactLink";
import ThemeSwitch from "@/app/theme/themeSwitch";

const Nav = () => {
  return (
    <nav className="navbar h-[10%] border-b border-[--pri] backdrop-filter backdrop-blur-md sticky top-0 z-10">
      <section className="navbar-start"></section>
      <section className="navbar-center w-11/12 flex-row justify-between items-center">
        <span>Agustin Cabral</span>
        <HomeLink />
        <AboutLink />
        <ContactLink />
        <ThemeSwitch />
      </section>
      <section className="navbar-end"></section>
    </nav>
  )
};

export default Nav;