const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

canvas.width = 800
canvas.height= 600
ctx.fillRect(350-5,230-5,20,80) 
ctx.fillRect(400-5,200-5,50,200)
ctx.fillRect(480-5,230-5,20,80)

ctx.arc(420,130,50,0,Math.PI*2)
ctx.fill()
ctx.beginPath()
ctx.fillStyle = "red"
ctx.arc(400,109,5,Math.PI,Math.PI*2)
ctx.arc(450,109,5,Math.PI,Math.PI*2)
ctx.fill()
ctx.beginPath()
ctx.arc(420,140,15,0,Math.PI)
ctx.fill()