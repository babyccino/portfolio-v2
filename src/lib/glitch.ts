const glitchClassList = ["!absolute", "top-0", "hue-rotate-90", "-z-10", "saturate-[3]"]

export function isAnchor(el: HTMLElement): el is HTMLAnchorElement {
  return "href" in el
}

export function deTab(el: HTMLElement) {
  if (!el) return
  el.tabIndex = -1
  el.ariaHidden = "true"
  el.id = ""

  if (isAnchor(el)) el.setAttribute("href", "")

  for (const child of el.children) {
    deTab(child as HTMLElement)
  }
}

export function glitchElement(id: string) {
  const element = document.getElementById(id) as HTMLDivElement
  setTimeout(() => {
    element.classList.remove("opacity-0")
  }, 300)

  element.before(element.cloneNode(true))
  const glitchClone = element.previousSibling as HTMLDivElement
  deTab(glitchClone)
  glitchClone.classList.add(...glitchClassList, "glitch-1")

  element.before(element.cloneNode(true))
  const glitchClone2 = element.previousSibling as HTMLDivElement
  deTab(glitchClone2)
  glitchClone2.classList.add(...glitchClassList, "glitch-2")

  setTimeout(() => {
    // glitchClone.remove()
    // glitchClone2.remove()
  }, 3000)
  document.addEventListener("astro:before-preparation", () => {
    // glitchClone.remove()
    // glitchClone2.remove()
  })
}
