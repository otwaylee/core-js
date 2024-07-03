
class MyElement extends HTMLElement{

  constructor(){
    super();
  }

  connectedCallback(){
    console.log('탄생함') //* 태어난 시점을 체크하는 것
  }

  disconnectedCallback(){
    console.log('죽음') //* 브라우저에서 사라졌을 때
  }
}

customElements.define('c-element', MyElement)

const elem = document.createElement('c-element')
const app = document.getElementById('app')

app.appendChild(elem)