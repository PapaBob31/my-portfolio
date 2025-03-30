import { useEffect, useState } from "react"
import Header from "./header.jsx"
import { Projects, OtherProjects } from "./projects_showcase.jsx"
import hideStuff from "./utilities.jsx"


function Links() {
  return (
    <section id="contact-me">
      <h1 className="font-bold text-3xl text-white mt-6 mb-5 pb-4 text-center border-b border-b-zinc-700 hide-stuff">Contact me</h1>
      <ul className="w-4/5 my-6 flex justify-between items-center mx-auto hide-stuff">
        <li className="hover:-translate-y-1 duration-200">
          <a target="_blank" href="https://github.com/PapaBob31" aria-label="Github Profile link">
            <img src="./icons/github.svg" alt="github icon" className="w-8"/>
          </a>
        </li>
        <li className="hover:-translate-y-1 duration-200">
          <a target="_blank" href="mailto:egbebitimi121@gmail.com" aria-label="Gmail Link">
            <img src="./icons/email.svg" alt="Email icon" className="w-8"/>
          </a>
        </li>
        <li className="hover:-translate-y-1 duration-200">
          <a target="_blank" href="https://www.twitter.com/PapaBob31" aria-label="Twitter Profile Link">
            <img src="./icons/twitter.svg" alt="twitter icon" className="w-8"/>
          </a>
        </li>
        <li className="hover:-translate-y-1 duration-200">
          <a target="_blank" href="https://www.linkedin.com/in/adedamola-egbebi-3380442a1/" aria-label="Linkedin Icon">
            <img src="./icons/linkedin.svg" alt="linkedin icon" className="w-8"/>
          </a>
        </li>
      </ul>
    </section>
  )
}


export default function Main() {
  useEffect(()=>{
    hideStuff();
    window.addEventListener("resize", () => window.innerWidth > 767 && setMenuVisibility(false));
    return () => {};
  }, [])

  const [menuIsVisible, setMenuVisibility] = useState(false) // toggles menu visibility for small screens (767px and below).
  return (
    <>
      <Header menuIsVisible={menuIsVisible} showMenu={setMenuVisibility}/>
      <main className={`md:w-3/4 mx-[5%] md:mx-auto md:ps-16 ${menuIsVisible ? "blur-sm" : ""}`}>
        <section>
          <p className="md:w-3/5 w-4/5 my-6 hide-stuff text-white" id="about-me">Hi, my name is</p>
          <h1 className="md:w-3/5 w-4/5 text-5xl md:text-6xl font-bold my-6 hide-stuff text-white">Adedamola Egbebi</h1>
          <h2 className="md:w-3/5 w-4/5 text-4xl md:text-5xl font-bold my-6 hide-stuff text-[#e4e4ff]">Full Stack Web Developer</h2>
          <p className="my-6 hide-stuff md:w-3/5 w-full">
            I specialize in building modern, intuitive, accessible, scalable and user friendly websites.
            I have hands on experience using web development tools and software like React, typescript, vanilla js, tailwindcss, expressjs, mongodb to name a few.
            I'm also very familiar with the python programming language.
          </p>
          <button className="hide-stuff border text-xl font-semibold border-white rounded-lg p-3 text-white hover:text-black hover:bg-white duration-200">
            <a href="/Adedamola Egbebi - FullStack Web Developer.pdf" download>My Resume</a>
          </button>
          <p className="my-2 hide-stuff" id="experience">Here are a few of the technologies I’m quite familiar with:</p>
          <ul className="flex flex-wrap sm:w-[600px] w-4/5 justify-between hide-stuff">
            <li className="w-1/2 text-white flex items-center mb-2">
              <img src="./icons/js.svg" className="w-8 bg-white mr-2 rounded-lg" alt="JavaScript icon"/>
              <span>JavaScript (ES6+)</span>
            </li>
            <li className="w-1/2 text-white flex items-center mb-2">
              <img src="./icons/typescript.svg" className="w-8 bg-white mr-2 rounded-lg" alt="TypeScript icon"/>
              <span>TypeScript</span>
            </li>
            <li className="w-1/2 text-white flex items-center mb-2">
              <img src="./icons/react.svg" className="w-8 bg-white mr-2 rounded-lg" alt="React icon"/>
              <span>React</span>
            </li>
            <li className="w-1/2 text-white flex items-center mb-2">
              <img src="./icons/nextjs.svg" className="w-8 bg-white mr-2 rounded-lg" alt="Next JS icon"/>
              <span>NextJs</span>
            </li>
            <li className="w-1/2 text-white flex items-center mb-2">
              <img src="./icons/tailwind.svg" className="w-8 bg-white mr-2 rounded-lg" alt="Tailwind CSS icon"/>
              <span>Tailwindcss</span>
            </li>
            <li className="w-1/2 text-white flex items-center mb-2">
              <img src="./icons/express.svg" className="w-8 bg-white mr-2 rounded-lg" alt="Express Js icon"/>
              <span>ExpressJs</span>
            </li>
            <li className="w-1/2 text-white flex items-center mb-2">
              <img src="./icons/mongodb.svg" className="w-8 bg-white mr-2 rounded-lg" alt="Mongodb icon"/>
              <span>Mongodb</span>
            </li>
            <li className="w-1/2 text-white flex items-center mb-2">
              <img src="./icons/postgres.svg" className="w-8 bg-white mr-2 rounded-lg" alt="Postgresql icon"/>
              <span>Postgresql</span>
            </li>
            <li className="w-1/2 text-white flex items-center mb-2">
              <img src="./icons/vitest.svg" className="w-8 bg-white mr-2 rounded-lg" alt="Vitest icon"/>
              <span>Vitest</span>
            </li>
            <li className="w-1/2 text-white flex items-center mb-2">
              <img src="./icons/python.svg" className="w-8 bg-white mr-2 rounded-lg" alt="Python icon"/>
              <span>Python</span>
            </li>
          </ul>
          {/*<a target="_blank" href="https://icons8.com/icon/kg46nzoJrmTR/express-js">Express Js</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>*/}
        </section>
        <section id="work">
          <h1 className="font-bold text-3xl text-white pt-3 my-5 border-t border-t-zinc-700 hide-stuff">Some Projects I’ve Built</h1>
          <Projects/>
        </section>
        <section>
          <h1 className="font-bold text-3xl text-white mt-6 mb-5 text-center hide-stuff">Other Projects</h1>
          <div className="lg:w-3/4 mx-auto md:flex flex-wrap">
            <OtherProjects/>
          </div>
        </section>       
        <Links/>
      </main>
    </>
  )
}