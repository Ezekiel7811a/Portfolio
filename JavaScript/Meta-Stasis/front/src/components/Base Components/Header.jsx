import { NavLink } from "@solidjs/router"

function Header() {
    return (
        <div class="fixed h-1/10 w-auto rounded-md bg-gradient-to-r from-gray-900/70 via-gray-900/50 to-gray-900/70 flex items-center justify-between p-3 top-1 left-1 right-1 select-none">
            <div class="flex justify-evenly w-1/2 gap-1">
                <NavLink href="/builder" class="text-white text-xl hover-underline-animation">Builder</NavLink>
                <NavLink href="/crafter" class="text-white text-xl hover-underline-animation">Crafter</NavLink>
            </div >
            <div class="flex-grow flex">
                <NavLink href="/" class="flex-nowrap flex items-center gap-1 brightness-200 hover-underline-animation border-slate-900 rounded-md">
                    <p className="text-amber-800 text-2xl">Meta</p>
                    <p className="text-gray-600 text-2xl">-</p>
                    <p className="text-violet-900 text-2xl">Stasis</p>
                </NavLink>
            </div>
            <div class="flex justify-evenly w-1/2 gap-1">
                <NavLink href="/simulator" class="text-white text-xl hover-underline-animation">Simulateur</NavLink>
                <NavLink href="/calculator" class="text-white text-xl hover-underline-animation">Calculateur</NavLink>
            </div>
        </div >
    )
}

export default Header