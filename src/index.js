import './styles/index.scss'

function main() {
  initializeHero3D()
}

function initializeHero3D() {
  const container = document.querySelector('.js-hero-3d-container')
  const man = document.querySelector('.js-hero-3d-man')

  container.addEventListener('mousemove', (e) => {
    const MAX_TRANSLATE_MAN = 30

    const { x, y, width, height } = container.getBoundingClientRect()
    const top = e.clientY - y
    const left = e.clientX - x

    const translateX = left / width
    const translateY = top / height

    man.style.transform = `translate(
      ${translateX * MAX_TRANSLATE_MAN}px, 
      ${translateY * MAX_TRANSLATE_MAN}px)
    `
  })
}

document.addEventListener('DOMContentLoaded', main)