import Tool from "./Tools";

export default class Brush extends Tool{
    constructor(canvas){
        super(canvas)
        this.listen()
        //
        
    }
    listen(){
        this.canvas.onmousedown = this.mosueDownHander.bind(this)
        this.canvas.onmousemove = this.mosueMoveHander.bind(this)
        this.canvas.onmouseup = this.mosueUpHander.bind(this)
    }
    mosueUpHander(e){
        this.mouseDown = false
    }
    mosueDownHander(e){
        //console.log('nousesown')
        this.mouseDown = true
        this.ctx.beginPath(e.pageX - e.target.offsetLeft , e.pageY - e.target.offsetTop)
    }
    mosueMoveHander(e){
        if(this.mouseDown){
            this.draw(e.pageX - e.target.offsetLeft , e.pageY - e.target.offsetTop)
        }
    }
    draw(x,y){
        this.ctx.lineTo(x,y)
        this.ctx.stroke()
        //console.log('ssf')
    }
}