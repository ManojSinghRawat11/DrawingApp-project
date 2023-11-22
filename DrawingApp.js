let canvas = document.querySelector("#canvas");

// undo,redo
let points = [];
let redoPoints = [];

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

window.addEventListener("resize", function(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
})

let ctx = canvas.getContext(`2d`);
ctx.fillStyle = "black";
ctx.lineCap = `round`;
 
let isPenDown = false;

canvas.addEventListener("mousedown", function(e){
    isPenDown = true;
    let {top, left} =canvas.getBoundingClientRect();
    let x = e.clientX - left;
    let y = e.clientY - top;

    ctx.beginPath();
    ctx.moveTo(x,y);

    let point = {
        id : "md",
        x : x,
        y : y,
        color: ctx.strokeStyle,
        width: ctx.lineWidth,
    }
    points.push(point);
});
canvas.addEventListener("mousemove", function(e){
    if(isPenDown){
        let {top, left} =canvas.getBoundingClientRect();
        let x = e.clientX - left;
        let y = e.clientY - top;

        ctx.lineTo(x,y);
        ctx.stroke();

        let point = {
            id : "mm",
            x : x,
            y : y,
            color: ctx.strokeStyle,
            width: ctx.lineWidth,
    }
    points.push(point);
}
});

canvas.addEventListener("mouseup", function(e){
    isPenDown = false;
});
