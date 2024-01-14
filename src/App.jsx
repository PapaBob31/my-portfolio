import { useEffect } from "react"
import Header from "./header.jsx"
import { Projects, OtherProjects } from "./projects_showcase.jsx"
import hideStuff from "./utilities.jsx"



function Links() {
  return (
    <ul className="w-6 flex md:fixed left-10 bottom-0 flex-col justify-between md:h-2/5">
      <li className="w-5 hover:-translate-y-1">
        <a href="" aria-label="">
          <img src="./public/icons/github.svg" alt="github icon"/>
        </a>
      </li>
      <li className="w-5 hover:-translate-y-1">
        <a href="" aria-label="">
          <img src="./public/icons/insta.svg" alt="instagram icon"/>
        </a>
      </li>
      <li className="w-5 hover:-translate-y-1">
        <a href="" aria-label="">
          <img src="./public/icons/twitter.svg" alt="twitter icon"/>
        </a>
      </li>
      <li className="w-5 hover:-translate-y-1">
        <a href="" aria-label="">
          <img src="./public/icons/linkedin.svg" alt="linkedin icon"/>
        </a>
      </li>
      <div className="w-0.5 h-14 bg-white mx-auto"></div>
    </ul>
  )
}


export default function Main() {
  useEffect(hideStuff, [])
  return (
    <>
      <Header/>
      <main className="w-3/4 mx-auto">
        <section className="w-1/2">
          <p className="my-6 hide-stuff">Hi, my name is</p>
          <h1 className="text-6xl font-bold my-6 hide-stuff">Adedamola Egbebi</h1>
          <h2 className="text-5xl font-bold my-6 hide-stuff delay-100">Front End Web Developer</h2>
          <p className="my-6 hide-stuff delay-200">
            I specialize in building modern, intuitive, accessible, scalable and user friendly websites.
            I have hands on experience using web technologies like React, typescript, vanilla javascript, tailwindcss to name a few.
            I'm also very familiar with the python programming language.
          </p>
          <p className="my-2 hide-stuff">Here are a few technologies I’m quite familiar with:</p>
          <ul className="flex flex-wrap w-1/2 justify-between hide-stuff">
            <li className="w-1/2">JavaScript (ES6+)</li>
            <li className="w-1/2">TypeScript</li>
            <li className="w-1/2">React</li>
            <li className="w-1/2">Tailwindcss</li>
            <li className="w-1/2">Sass</li>
            <li className="w-1/2">Python</li>
          </ul>
          <button className="hide-stuff">Here's my Resume</button>
        </section>
        <section>
         <Projects/>
        </section>
        <section className="w-3/4 mx-auto flex flex-wrap">
          <OtherProjects/>
        </section>       
        <Links/>
      </main>
    </>
  )
}