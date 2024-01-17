import { useEffect } from "react"
import Header from "./header.jsx"
import { Projects, OtherProjects } from "./projects_showcase.jsx"
import hideStuff from "./utilities.jsx"


function Links() {
  return (
    <ul className="w-4/5 md:w-6 flex md:fixed left-10 bottom-0 md:flex-col justify-between items-center md:min-h-60 md:h-2/5 mx-auto" id="contact-me">
      <li className="w-5 hover:-translate-y-1">
        <a href="" aria-label="Github Profile link">
          <img src="./public/icons/github.svg" alt="github icon"/>
        </a>
      </li>
      <li className="w-5 hover:-translate-y-1">
        <a href="" aria-label="Gmail Link">
          <img src="./public/icons/insta.svg" alt="instagram icon"/>
        </a>
      </li>
      <li className="w-5 hover:-translate-y-1">
        <a href="https://www.twitter.com/PapaBob31" aria-label="Twitter Profile Link">
          <img src="./public/icons/twitter.svg" alt="twitter icon"/>
        </a>
      </li>
      <li className="w-5 hover:-translate-y-1">
        <a href="https://github.com/PapaBob31" aria-label="">
          <img src="./public/icons/linkedin.svg" alt="linkedin icon"/>
        </a>
      </li>
      <div className="w-0.5 h-14 bg-white mx-auto hidden md:block"></div>
    </ul>
  )
}


export default function Main() {
  useEffect(hideStuff, [])
  return (
    <>
      <Header/>
      <main className="md:w-3/4 mx-[5%] md:mx-auto md:ps-16">
        <section className="md:w-3/5 w-4/5">
          <p className="my-6 hide-stuff" id="about-me">Hi, my name is</p>
          <h1 className="text-5xl md:text-6xl font-bold my-6 hide-stuff">Adedamola Egbebi</h1>
          <h2 className="text-4xl md:text-5xl font-bold my-6 hide-stuff">Front End Web Developer</h2>
          <p className="my-6 hide-stuff">
            I specialize in building modern, intuitive, accessible, scalable and user friendly websites.
            I have hands on experience using web technologies like React, typescript, vanilla javascript, tailwindcss to name a few.
            I'm also very familiar with the python programming language.
          </p>
          <p className="my-2 hide-stuff" id="experience">Here are a few technologies I’m quite familiar with:</p>
          <ul className="flex flex-wrap w-3/4 justify-between hide-stuff">
            <li className="w-1/2">JavaScript (ES6+)</li>
            <li className="w-1/2">TypeScript</li>
            <li className="w-1/2">React</li>
            <li className="w-1/2">Tailwindcss</li>
            <li className="w-1/2">Sass</li>
            <li className="w-1/2">Python</li>
          </ul>
          {/*<button className="hide-stuff">Here's my Resume</button>*/}
        </section>
        <section id="work">
         <Projects/>
        </section>
        <section className="lg:w-3/4 mx-auto md:flex flex-wrap">
          <OtherProjects/>
        </section>       
        <Links/>
      </main>
    </>
  )
}