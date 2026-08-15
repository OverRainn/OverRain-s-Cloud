document.querySelectorAll('.img-result').forEach(i => {
  i.addEventListener('click', evt => {
    if (i.classList.contains('zoomed'))
      i.style.transform = ''
    else {
      const myScale = 500 / i.clientWidth
      i.style.transform = `scale(${myScale})`
    }
    i.classList.toggle('zoomed')
  })
})