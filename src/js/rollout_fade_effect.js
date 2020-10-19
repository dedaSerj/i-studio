'user strict'

export function rollOut(elemsList = null, rootMargin = "0px 0px 0px 0px") {
  if (!elemsList) return

  const rollOutOptions = {
    root: null,
    rootMargin,
    threshold: 0,
  }

  const rollOutObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      const { target, isIntersecting } = entry

      if (!isIntersecting) return

      target.classList.add('rollOut')
      observer.unobserve(target)

    })
  }, rollOutOptions)

  addObserverRollOut(elemsList)

  function addObserverRollOut(elemsList) {
    elemsList.forEach(elem => rollOutObserver.observe(elem))
  }
}