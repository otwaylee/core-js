/* ---------------------------- */
/* Event bubbling & capturing   */
/* ---------------------------- */


/* 버블링 ----------------------------------------------------------------- */
const section = getNode('section')
const article = getNode('article')
const p = getNode('p')


section.addEventListener('click', (e) => {
  // console.log('target :', e.target);
  // console.log('currentTarget :', e.currentTarget)
  // console.log('this :', this)
  console.log('%c section', 'color: orange') // 주석에도 색깔 넣기 
})

article.addEventListener('click', (e) => {

  console.log('%c article', 'color: hotpink') // 주석에도 색깔 넣기 
})
p.addEventListener('click', (e) => {

  console.log('%c p', 'color: dodgerblue') // 주석에도 색깔 넣기 
})

/* 캡처링 ----------------------------------------------------------------- */