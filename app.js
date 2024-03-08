const canvas = document.querySelector('canvas')
const lineWidth = document.querySelector('#line-width')
const colorInput = document.querySelector("#color")
const ColorOptions = document.getElementsByClassName("color-options")
const ctx = canvas.getContext("2d")
canvas.width = 800
canvas.height= 600

ctx.lineWidth =2
 let isPaint = false
function mouseMoveOn(event){
    if(isPaint){
        ctx.lineTo(event.offsetX,event.offsetY)
        ctx.stroke()
        return
    }
    ctx.beginPath()
    ctx.moveTo(event.offsetX,event.offsetY)
}
function startPainting(){
   isPaint = true
}
function stopPainting(){
    isPaint = false
}

function cancelPanting(){
    isPaint = false
}

function lineWidthChangeHandler(event){
    console.log(event.target.value)
  ctx.lineWidth = event.target.value
}
function onColorChange(event){
    ctx.strokeStyle = event.target.value
}
function handleColorChange(event){
    const selectedColor = event.target.dataset.color
    colorInput.value = selectedColor
    ctx.strokeStyle=selectedColor
    console.log(event.target.dataset.color)
}
function addEventListenerColor(colorOption){
     colorOption.addEventListener('click',handleColorChange)
}

canvas.addEventListener("mousemove",mouseMoveOn)
canvas.addEventListener("mousedown",startPainting)
canvas.addEventListener("mouseup",stopPainting)	 
document.addEventListener('mouseleave',cancelPanting)
lineWidth.addEventListener("change",lineWidthChangeHandler)
colorInput.addEventListener("change",onColorChange)	 
for(let i=0;i<ColorOptions.length;i++){
    addEventListenerColor(ColorOptions[i])
}
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 