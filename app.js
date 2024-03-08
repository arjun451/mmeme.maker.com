const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")

canvas.width = 800
canvas.height= 600
 
ctx.fillRect(100,200,100,300)
ctx.fillRect(400,200,100,300)
ctx.fillRect(250,300,100,150)
ctx.moveTo(100,200)
ctx.lineTo(300,20)
ctx.moveTo(300,20)
ctx.stroke()
ctx.lineTo(500,200)
ctx.moveTo(500,200)
ctx.lineTo(100,200)
ctx.stroke()
ctx.fillStyle()