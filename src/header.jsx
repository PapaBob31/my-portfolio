import { useState } from "react"

export default function Header() {
  const [visibilityClass, setVisibilityClass] = useState("translate-x-full");
  return (
    <header className="flex justify-between text-white w-full px-4">
      <h1>Adedamola</h1>
      <nav className="flex md:min-w-80 md:h-fit md:w-1/3 justify-between">
        <button className="bg-white md:hidden p-1 text-black rounded-lg" onClick={() => setVisibilityClass("translate-x-0")}>Menu</button>
        <div className={`md:static fixed top-0 right-0 ${visibilityClass} md:translate-x-0 
          w-[85vw] md:w-fit md:bg-inherit bg-zinc-800 duration-500 ease-in-out md:h-fit h-screen p-4 z-10`}>
          <button className="bg-white text-black p-4 rounded-lg" onClick={() => setVisibilityClass("translate-x-full")}>Close</button>
          <ul className="block md:flex justify-between">
            <li className="mt-12 md:mt-0"><a href="">About</a></li>
            <li className="mt-12 md:mt-0"><a href="">Experience</a></li>
            <li className="mt-12 md:mt-0"><a href="">Work</a></li>
            <li className="mt-12 md:mt-0"><a href="">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}