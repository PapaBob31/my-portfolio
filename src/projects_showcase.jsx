import { useEffect } from "react"
import hideStuff from "./utilities"


export function Projects() {
  useEffect(hideStuff, [])

  const projects_details = [
    {
      title: "2048 Game",
      description: "Recreation of the 2048 game built with react and typescript",
      git_link: "https://github.com/PapaBob31/2048-game",
      live_site: "https://2o48-game.netlify.app/",
      img_link: "./images/2048.png",
      tools: ["React", "Typescript", "HTML", "CSS", "JS"]
    },
    {
      title: "DMDB",
      description: "TMDB client where you can view info about movies and tvseries like their release date, duration and others",
      git_link: "https://github.com/PapaBob31/DMDB",
      live_site: "https://papabob31.github.io/DMDB/",
      img_link: "./images/dmdb.png",
      tools: ["HTML", "CSS", "JS"]
    },
    {
      title: "Color Generator",
      description: "Web app that generates 20 distinct variations of a color and their corresponding hex code.",
      git_link: "https://github.com/PapaBob31/Color-generator-hex",
      live_site: "https://color-variations.netlify.app/",
      img_link: "./images/colors.png",
      tools: ["React", "Typescript", "HTML", "CSS", "JS"]
    },
    {
      title: "Fylo",
      description: "Landing page for a fictional file storage website. This was completed as a challenge from frontendmentor.io",
      git_link: "https://github.com/PapaBob31/fylo-dark-theme-landing-page",
      live_site: "https://papabob31.github.io/fylo-dark-theme-landing-page/",
      img_link: "./images/fylo.png",
      tools: ["HTML", "CSS", "JS"]
    },
  ]

  return projects_details.map((detail, index) => (
    <figure className={"w-full relative mb-12 lg:flex hide-stuff min-h-72 border lg:border-0 rounded-lg border-neutral-800 shadow-neutral-800 shadow-none shadow-lg "
     + (index%2 === 1 ? "justify-end": "")} key={index}>
      <div className="absolute lg:relative lg:w-3/5 w-full h-full">
        <img src={detail.img_link} className="w-full h-full object-cover lg:object-fill rounded-lg lg:rounded-none"/>
        <div className="hidden lg:block bg-zinc-900/50 absolute w-full h-full top-0 left-0 transition-bg duration-300 hover:bg-transparent"></div>
      </div>
      <figcaption className={"absolute w-full top-0 lg:w-1/2 h-full p-3 bg-zinc-900/80 lg:bg-transparent transition-bg duration-300 lg:hover:bg-transparent hover:bg-zinc-900/20 "
       + (index%2 === 1 ? "lg:left-0" : "lg:right-0")}>
        <h2 className={"text-3xl my-6 text-white" + (!(index%2 === 1) ? " lg:text-end": "")}>{detail.title}</h2>
        <p className="lg:p-5 rounded-lg lg:bg-zinc-800 mb-6 bg-transparent text-[#d9d9f4]">{detail.description}</p>
        <ul className={"flex text-[#d9d9f4]" + (!(index%2 === 1) ? " lg:justify-end": "")} aria-label="Tools used">
          {detail.tools.map((tool, index) => (
            <li className="mr-4" key={index}>{tool}</li>
          ))}
        </ul>
        <div className={"flex mt-4" + (!(index%2 === 1) ? " lg:justify-end": "")}>
          <a href={detail.git_link} aria-label className="inline-block w-6">
            <img src="./icons/github.svg" alt="github icon"/>
          </a>
          <a href={detail.live_site} aria-label className="inline-block w-6 ml-6">
            <img src="./icons/link.svg" alt="External link icon"/>
          </a>
        </div>
      </figcaption>
    </figure>
  ))
}

 // rgba(24, 24, 27, 0.1);

export function OtherProjects() {
  useEffect(hideStuff, [])

  const details = [
    {
      title: "Bob's Bakery",
      description:  "Built a responsive landing Page for a fictional bakery.",
      tools: ["HTML", "CSS", "JS"],
      live_site: "https://papabob31.github.io/Bob-s-Bakery-landing-page/",
      git_link: "https://github.com/PapaBob31/Bob-s-Bakery-landing-page",
    },
    {
      title: "Sunny Side agency landing page",
      description:  "This was built as a solution to a frontend mentor challenge",
      tools: ["HTML", "CSS", "SASS", "JS"],
      live_site: "https://papabob31.github.io/sunnyside-frontendmentor/",
      git_link: "https://github.com/PapaBob31/sunnyside-frontendmentor",
    },
    {
      title: "Ping Pong Game",
      description: "I built the classic ping pong video game in python with the pygame library.",
      tools: ["Python", "Pygame library"],
      live_site: null,
      git_link: "https://github.com/PapaBob31/pingpong_again",
    },
    {
      title: "Side Scroller Game",
      description: "A basic endless Sidescroller game written in python with the pygame library.",
      tools: ["Python", "Pygame library"],
      live_site: null,
      git_link: "https://github.com/PapaBob31/side-scroller-game",
    }
  ]

  return details.map((detail, index) => (
    <article className="bg-zinc-800 p-6 md:w-[45%] md:mr-4 mb-4 hide-stuff" key={index}>
      <div className="flex align-middle justify-between">
        <img src="./icons/folder.svg" alt="folder icon" className="w-10"/>
        <div>
          <a href={detail.git_link} aria-label className="inline-block w-6">
            <img src="./icons/github.svg" alt="github icon"/>
          </a>
          {detail.live_site && <a href={detail.live_site} aria-label className="inline-block w-6 ml-6">
            <img src="./icons/link.svg" alt="External link icon"/>
          </a>}
        </div>
      </div>
      <h1 className="text-xl font-bold text-white mt-2">{detail.title}</h1>
      <p className="mt-2">{detail.description}</p>
      <ul className="flex mt-2" aria-label="Tools used">
        {detail.tools.map((tool, index) => (
          <li className="mr-4" key={index}>{tool}</li>
        ))}
      </ul>
    </article>
  ))
}
