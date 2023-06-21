import { NavLink } from "@solidjs/router";
function Footer(props) {

    const { lang } = props

    switch (lang) {
        case "fr":
            return (
                <footer class="rounded-md bg-gradient-to-r from-gray-900 via-transparent to-gray-900 opacity-70 flex flex-col flex-nowrap items-center justify-center left-1 bottom-1 right-1 h-1/10 fixed w-auto select-none">
                    <NavLink href="https://www.wakfu.com"><img src="../../src/assets/wakfuLogo.svg" alt="Your SVG Logo" class="select-none h-10 brightness-200" /></NavLink>
                    <p class="text-white text-xs">"Meta-Stasis" est un fansite sans lien avec Ankama Games, éditeur du MMORPG "Wakfu" </p>
                </footer>
            );
    }
}
export default Footer;