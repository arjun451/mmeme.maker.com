const canvas = document.querySelector('canvas')
const lineWidth = document.querySelector('#line-width')
const colorInput = document.querySelector("#color")
const ColorOptions = document.getElementsByClassName("color-options")
const mode = document.querySelector("#mode")
const destroy = document.querySelector("#destroy")
const eraseMode = document.querySelector("#erase-mode")
const fileInput = document.querySelector("#file-input")
const savePainting = document.querySelector("#save-painting") 
const ctx = canvas.getContext("2d")


const CANVAS_WIDTH = 800
const CANVAS_HEIGHT = 600
let isPaint = false
let isFill = false


canvas.height= CANVAS_HEIGHT
canvas.width = CANVAS_WIDTH

ctx.lineWidth  = lineWidth.value

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

function handleCanvasClick(){
    if(isFill){
        ctx.fillStyle = colorInput.value
        ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
        return
    }
}

function modeChangeHandler( ){
    if(isFill){
      isFill = false
      mode.innerText = "Fill"
    }else{
     isFill = true
     mode.innerText = "Draw"
    }
    console.log('clicked')
}

function handleDestroy(){
    ctx.fillStyle = 'white'
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
}

function handleEraseMode(){
   isFill = false 
   mode.innerText = "Fill"
   ctx.strokeStyle = 'white'
}

function handleSave(){
    console.log("handle saved")
    const url = canvas.toDataURL()
    const a = document.createElement('a')
    a.href = url
    a.download = "my-painting.png";
    a.click()
}
function handleFileInput(event){
    console.log("handle file input",event.target.files[0] )
    const file = event.target.files[0]
    const url =URL.createObjectURL(file)
    const image = new Image()
    image.src = url;
    image.onload = function(){
        ctx.drawImage(image,0,0,CANVAS_WIDTH,CANVAS_HEIGHT)
    }
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
canvas.addEventListener("click",handleCanvasClick)

mode.addEventListener('click',modeChangeHandler)
destroy.addEventListener("click",handleDestroy)	 
eraseMode.addEventListener('click',handleEraseMode)
fileInput.addEventListener('change',handleFileInput)
savePainting.addEventListener("click",handleSave)
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 