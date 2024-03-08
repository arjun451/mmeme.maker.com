const canvas = document.querySelector('canvas')
const ctx = canvas.getContext("2d")
const colors = [
"#CD5C5C",
"#F08080",
"#FA8072",
"#E9967A",
"#FFA07A",
"#DC143C",
"#FF0000",
"#B22222",
"#8B0000",
"#FFC0CB",
"#FFB6C1",
"#FF69B4",
"#FF1493",
"#C71585",
"#DB7093",
"#E6E6FA",
"#D8BFD8",
"#DDA0DD",
"#EE82EE",
"#DA70D6",
"#FF00FF",
"#FF00FF",
"#BA55D3",
"#9370DB",
"#663399",
"#8A2BE2",
"#9400D3",
"#9932CC",
"#8B008B",
"#800080",
"#4B0082",
"#6A5ACD",
"#483D8B",
"#7B68EE",
"#00FF7F",
"#3CB371",
"#2E8B57",
"#228B22",
"#008000",
"#006400",
"#9ACD32",
"#6B8E23",
"#808000",
"#556B2F",
"#66CDAA",
"#8FBC8B",
"#20B2AA",
"#008B8B",
"#008080",
"#00FFFF",
"#00FFFF",
"#E0FFFF",
"#AFEEEE",
"#7FFFD4",
"#40E0D0",
"#48D1CC",
"#00CED1",
"#5F9EA0",
"#4682B4",
"#B0C4DE",
"#B0E0E6",
"#ADD8E6",
"#87CEEB",
"#87CEFA",
"#00BFFF",
"#1E90FF",
"#6495ED",
"#7B68EE",
"#4169E1",
"#0000FF",
"#0000CD",
"#00008B",
"#000080",
"#191970",
]
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


canvas.addEventListener("mousemove",mouseMoveOn)
canvas.addEventListener("mousedown",startPainting)
canvas.addEventListener("mouseup",stopPainting)	 
document.addEventListener('mouseleave',cancelPanting)
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 
	 