import { useState } from "react"

export default function Header() {
  const [visibilityClass, setVisibilityClass] = useState("translate-x-full");
  return (
    <header className="flex justify-between text-white w-full px-4">
      <h1 className="font-semibold text-xl py-4">Adedamola</h1>
      <nav className="md:min-w-80 md:h-fit md:w-1/3">
        <button className="md:hidden p-1 text-black rounded-lg" onClick={() => setVisibilityClass("translate-x-0")} aria-label="Menu toggle">
        	<img src="icons/Hamburger Menu.svg" alt="Menu icon"/>
        </button>
        <div className={`md:static fixed top-0 right-0 ${visibilityClass} md:translate-x-0 
          w-[85vw] md:w-full md:bg-inherit bg-zinc-800 duration-500 ease-in-out md:h-fit h-screen p-4 z-10`}>
          <button className="text-black p-4 rounded-lg md:hidden" onClick={() => setVisibilityClass("translate-x-full")}>
            <img src="icons/close.svg" alt="Menu close icon"/>
          </button>
          <ul className="block md:flex justify-between">
            <li className="mt-12 md:mt-0"><a href="#about-me" className="text-zinc-200">About</a></li>
            <li className="mt-12 md:mt-0"><a href="#experience" className="text-zinc-200">Experience</a></li>
            <li className="mt-12 md:mt-0"><a href="#work" className="text-zinc-200">Work</a></li>
            <li className="mt-12 md:mt-0"><a href="#contact-me" className="text-zinc-200">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}