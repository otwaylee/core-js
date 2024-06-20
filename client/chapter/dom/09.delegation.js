/* ------------------------ */
/* Event delegation         */
/* ------------------------ */


const nav = getNode('nav')





function handleClick(e){
  const target = e.target;
  const name = target.dataset.name;
  const li =  target.closest('li');

if(!li) return;
  /* 클래스를 사용한 위임 ---------------- */
  
  // if(li.matches('about')){
    //   console.log('about!!')
    // }
    // if(li.classList.contains('home')){
      //   console.log('home!!')
      // }
      // if(li.classList.contains('contact')){
        //   console.log('contact!!')
        // }
        
        
  /* 속성을 사용한 위임 ------------------ */
        // console.log(li.getAttribute('data-name'))
        // console.log(li.dataset.name);
        // console.log(attr(li, 'data-name'))
        
//   if(name === 'about') console.log('about!')
// if(name === 'home') console.log('home!')
// if(name === 'countact') console.log('countact!')
              
  /* 노드를 사용한 위임 ------------------ */
  // 정확히 li 만 조회해야 함
  
  if(li.textContent.includes('ABOUT')) console.log('about!');
  if(li.textContent.includes('HOME')) console.log('home!');
  if(li.textContent.includes('CONTACT')) console.log('contact!');





}

nav.addEventListener('click', handleClick)