const article = document.querySelector('.article')
const toggle = article.querySelector('.js-share-btn')
const shareMenu = article.querySelector('#share-menu')

function openMenu () {
  toggle.setAttribute('aria-expanded', 'true')
  shareMenu.setAttribute('data-state', 'opened')
}

function closeMenu () {
  toggle.setAttribute('aria-expanded', 'false')
  shareMenu.setAttribute('data-state', 'closing')
}

toggle.addEventListener('click', e => {
  if (!e.target.closest('.js-share-btn')) return
  const isOpen = toggle.getAttribute('aria-expanded') === 'true'
  isOpen ? closeMenu() : openMenu()

  document.body.addEventListener(
    'animationend',
    e => {
      if (e.animationName !== 'reduceOpacity') return
      shareMenu.setAttribute('data-state', 'closed')
    },
    { once: true }
  )
})
