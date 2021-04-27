history.scrollRestoration = "manual"


// autotext Script
const mainEl = document.getElementById('header-main')
const secEl = document.getElementById('header-sec')

const mainText = `Hi, I'm Kuba`
const secText = `Beginner programer.`

let mainIdx = 1
let secIdx = 1
let speed = 200

wrtieText()

function wrtieText (){
  mainEl.innerText = mainText.slice(0, mainIdx)
  mainIdx++
  if(mainText.length > mainIdx-1){
  setTimeout(wrtieText, speed);
  } else {
    setTimeout(writeSecText, speed)
  }
}

function writeSecText () {
  if(secText.length > secIdx-1){
    secEl.innerText = secText.slice(0, secIdx)
    secIdx++
    setTimeout(writeSecText, speed)}
    else{
      
    }
}

const nav = document.querySelector('nav')


window.addEventListener('scroll', fixNav)

function fixNav () {
  if(window.scrollY > nav.offsetHeight + 150){
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}
