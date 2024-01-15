import { useEffect } from "react"
import hideStuff from "./utilities"


export function Projects() {
  useEffect(hideStuff, [])

  const projects_details = [
    {
      title: "2048 Game",
      description: "Recreation of the 2048 game built with react and typescript",
      git_link: "",
      live_site: "https://2o48-game.netlify.app/",
      img_link: "./public/images/2048.png",
      tools: ["React", "Typescript", "HTML", "CSS", "JS"]
    },
    {
      title: "DMDB",
      description: "TMDB client where you can view info about movies and tvseries like their release date, duration and others",
      git_link: "",
      live_site: "",
      img_link: "./public/images/dmdb.png",
      tools: ["HTML", "CSS", "JS"]
    },
    {
      title: "Color Generator",
      description: "Web app that generates 20 distinct variations of a color and their corresponding hex code.",
      git_link: "",
      live_site: "",
      img_link: "./public/images/colors.png",
      tools: ["React", "Typescript", "HTML", "CSS", "JS"]
    },
    {
      title: "Fylo",
      description: "Landing page for a fictional file storage website. This was completed as a challenge from frontendmentor.io",
      git_link: "https://github.com/PapaBob31/fylo-dark-theme-landing-page",
      live_site: "",
      img_link: "./public/images/fylo.png",
      tools: ["HTML", "CSS", "JS"]
    },
  ]

  return projects_details.map((detail, index) => (
    <figure className={"w-full relative my-12 md:flex hide-stuff min-h-72 " + (index%2 === 1 ? "justify-end": "")} key={index}>
      <div className="relative md:w-3/5 w-full">
        <img src={detail.img_link} className="w-full h-full"/>
        <div className="bg-zinc-900 opacity-80 md:opacity-70 absolute w-full h-full top-0 left-0 transition-opacity duration-300 md:hover:opacity-0"></div>
      </div>
      <figcaption className={"absolute w-full top-0 md:w-1/2 h-full p-3 " + (index%2 === 1 ? "md:left-0" : "md:right-0")}>
        <h2 className={"text-3xl my-6" + (!(index%2 === 1) ? " md:text-end": "")}>{detail.title}</h2>
        <p className="md:p-5 rounded-lg md:bg-zinc-800 mb-6 bg-transparent">{detail.description}</p>
        <ul className={"flex" + (!(index%2 === 1) ? " md:justify-end": "")} aria-label="Tools used">
          {detail.tools.map((tool, index) => (
            <li className="mr-4" key={index}>{tool}</li>
          ))}
        </ul>
        <div className={"flex mt-4" + (!(index%2 === 1) ? " md:justify-end": "")}>
          <a href={detail.git_link} aria-label className="inline-block w-6">
            <img src="./public/icons/github.svg" alt="github icon"/>
          </a>
          <a href={detail.live_site} aria-label className="inline-block w-6 ml-6">
            <img src="./public/icons/link.svg" alt="External link icon"/>
          </a>
        </div>
      </figcaption>
    </figure>
  ))
}

export function OtherProjects() {
  useEffect(hideStuff, [])

  const details = [
    {
      title: "Bob's Bakery",
      description:  "Built a responsive landing Page for a fictional bakery.",
      tools: ["HTML", "CSS", "JS"],
      live_site: "",
      git_link: "",
    },
    {
      title: "Sunny Side agency landing page",
      description:  "This was built as a solution to a frontend mentor challenge",
      tools: ["HTML", "CSS", "SASS", "JS"],
      live_site: "",
      git_link: "",
    },
    {
      title: "Ping Pong Game",
      description: "I built the classic ping pong video game in python with the pygame library.",
      tools: ["Python", "Pygame library"],
      live_site: null,
      git_link: "",
    },
    {
      title: "Side Scroller Game",
      description: "A basic endless Sidescroller game written in python with the pygame library.",
      tools: ["Python", "Pygame library"],
      live_site: null,
      git_link: "",
    }
  ]

  return details.map((detail, index) => (
    <article className="bg-zinc-800 p-6 md:w-[45%] md:mr-4 mb-4 hide-stuff" key={index}>
      <div className="flex align-middle justify-between">
        <img src="./public/icons/folder.svg" alt="folder icon" className="w-10"/>
        <div>
          <a href={detail.git_link} aria-label className="inline-block w-6">
            <img src="./public/icons/github.svg" alt="github icon"/>
          </a>
          {detail.live_site && <a href={detail.live_site} aria-label className="inline-block w-6 ml-6">
            <img src="./public/icons/link.svg" alt="External link icon"/>
          </a>}
        </div>
      </div>
      <h1>{detail.title}</h1>
      <p>{detail.description}</p>
      <ul className="flex" aria-label="Tools used">
        {detail.tools.map((tool, index) => (
          <li className="mr-4" key={index}>{tool}</li>
        ))}
      </ul>
    </article>
  ))
}
