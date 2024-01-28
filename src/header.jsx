import { useState } from "react"

export default function Header({menuIsVisible, showMenu}) {
  const linkClass = `text-zinc-200 relative hover:after:scale-x-100 after:scale-x-0 after:content-[''] after:absolute after:h-0.5
                     after:w-full after:-bottom-2 after:block after:bg-[#e4e4ff] after:transition-transform duration-300`
  return (
    <>
      <div className={`md:hidden block fixed top-0 left-0 w-full h-full z-10 ${menuIsVisible ? "block" : "hidden"}`} onClick={() => showMenu(false)}></div>
      <header className="flex justify-between text-white w-full px-4">
        <h1 className={`font-semibold text-xl py-4 ${menuIsVisible ? "blur-sm" : ""}`}>Adedamola</h1>
        <nav className="md:min-w-80 md:h-fit md:w-1/3">
          <button className="md:hidden py-4 text-black rounded-lg" onClick={() => showMenu(true)} aria-label="Menu toggle">
          	<img src="icons/Hamburger Menu.svg" alt="Menu icon"/>
          </button>
          <div className={`md:static fixed top-0 right-0 ${menuIsVisible ? "translate-x-0" : "translate-x-full"} md:translate-x-0 
            w-[85vw] md:w-full md:bg-inherit bg-zinc-800 duration-500 ease-in-out md:h-fit h-screen p-4 z-10`}>
            <button className="text-inherit p-2 rounded-full md:hidden hover:bg-zinc-900 transition-bg duration-300" onClick={() => showMenu(false)}>
              <img src="icons/close.svg" alt="Menu close icon"/>
            </button>
            <ul className="block md:flex justify-between" onClick={() => showMenu(false)}>
              <li className="mt-12 md:mt-0">
                <a href="#about-me" className={linkClass}>About</a>
              </li>
              <li className="mt-12 md:mt-0">
                <a href="#experience" className={linkClass}>Experience</a>
              </li>
              <li className="mt-12 md:mt-0">
                <a href="#work" className={linkClass}>Work</a>
              </li>
              <li className="mt-12 md:mt-0">
                <a href="#contact-me" className={linkClass}>Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  )
}