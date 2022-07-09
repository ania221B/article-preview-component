const article = document.querySelector('.article')

document.body.addEventListener('click', e => {
  if (e.target.closest('.menu-wrapper')) return

  if (!e.target.closest('.js-share-btn')) {
    article.classList.remove('menu-is-open')
  } else {
    article.classList.toggle('menu-is-open')
  }
})
