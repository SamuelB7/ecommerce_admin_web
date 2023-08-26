import NavbarSimple from "../../components/navbar";

export default {
    title: 'Components/Navbar',
    component: NavbarSimple
}

export const NavbarSimpleStory = () => <NavbarSimple openMenu={console.log("OPEN MENU")} />