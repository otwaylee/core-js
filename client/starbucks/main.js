



// const depthList = document.querySelectorAll('.depth');
// const header = document.querySelector('#header');
// const h = t => t.style.height = 0;



// aList.forEach((a) => {
//   a.addEventListener('mouseenter', () =>{
//     const target = a.lastElementChild;

//     depthList.forEach(h);
    
//     target.style.height = '100px'
//   })
// })


// header.addEventListener('mouseleave', () => depthList.forEach(h))

/* global gsap */

const aList = document.querySelectorAll('nav a');

aList.forEach((a) => {

  const target = a.lastElementChild;

  const tl = gsap.timeline({pasued:true})
  .to(target, {height:100, ease: 'power3.inOut'})

  
  a.addEventListener('mouseenter', () =>tl.play())
  a.addEventListener('mouseleave', () =>tl.reverse())
    
})