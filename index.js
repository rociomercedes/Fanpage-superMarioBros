

const loadText = document.querySelector('.loading-text')
const bg = document.querySelector('.bg')
const bgCarga= document.querySelector('.bgCarga')
const newBg= document.querySelector('.principalPge')
const principal= document.querySelector('.principalPage')
const panels=document.querySelectorAll('.panel')


let load = 0
let int = setInterval(blurring, 30)


hide(principal)
document.body.style.backgroundColor = 'pink';


function blurring() {
  load++

  if (load > 99) {
    document.body.style.backgroundColor = '#07086bfe';
    clearInterval(int)
    close(bgCarga)
     show(principal)
  }

  loadText.innerText = `${load}%`
  loadText.style.opacity = scale(load, 0, 100, 1, 0)
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min
}

function close(bgCarga) {
  bgCarga.style.display = "none";
}

function hide(principal){
  principal.style.display="none";
}

function show(principal){
  principal.style.display="block";
}

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
      removeActionClasses()
      panel.classList.add('active')
      }
    )
  }
)

function removeActionClasses(){
  panels.forEach(panel=>{
    panel.classList.remove('active')
  }
    )
}