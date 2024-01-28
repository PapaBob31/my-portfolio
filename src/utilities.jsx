export function showStuff(entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("hide-stuff")
      entry.target.classList.add("show-stuff")
    }
  })
}

export default function hideStuff() {
  const elements = document.querySelectorAll(".hide-stuff")
  const observer = new IntersectionObserver(showStuff, {
    root: null,
    rootMargin: "0px",
    threshold: 0.2,
  })

  for (let i=0; i<elements.length; i++) {
    observer.observe(elements[i])
  }
  return ()=>{}
}