export default function Header() {
  return (
    <header className="flex justify-between text-white w-full">
      <h1>Adedamola</h1>
      <ul className="block w-4/5 fixed top-0 left-0 bg-zinc-800 md:bg-inherit h-screen translate-x-full md:relative md:flex md:w-1/3 justify-between">
        <li className="mt-12 md:mt-0"><a href="">About</a></li>
        <li className="mt-12 md:mt-0"><a href="">Experience</a></li>
        <li className="mt-12 md:mt-0"><a href="">Work</a></li>
        <li className="mt-12 md:mt-0"><a href="">Contact</a></li>
      </ul>
      <div className="w-8 h-6 bg-white md:hidden"></div>
    </header>
  )
}