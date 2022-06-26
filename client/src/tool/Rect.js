import Tool from "./Tools";

export default class Rect extends Tool {
  constructor(canvas) {
    super(canvas);
    this.listen();
    //
  }
  listen() {
    this.canvas.onmousedown = this.mosueDownHander.bind(this);
    this.canvas.onmousemove = this.mosueMoveHander.bind(this);
    this.canvas.onmouseup = this.mosueUpHander.bind(this);
  }
  mosueUpHander(e) {
    this.mouseDown = false;
  }
  mosueDownHander(e) {
    //console.log('nousesown')
    this.mouseDown = true;
    this.ctx.beginPath(
      
    );
    this.startX = e.pageX - e.target.offsetLeft
    this.startY = e.pageY - e.target.offsetTop
    this.saved = this.canvas.toDataURL()

  }
  mosueMoveHander(e) {
    if (this.mouseDown) {
      let currentX = e.pageX - e.target.offsetLeft
      let currentY = e.pageY - e.target.offsetTop
      let widht = currentX - this.startX
      let height = currentY - this.startY
      this.draw(this.startX , this.startY , widht , height);
    }
    
  }
  draw(x, y , w, h) {
    const img = new Image()
    img.src = this.saved
    img.onload = () =>{
      
    }
    this.ctx.rect(x,y,w,h)
    this.ctx.fill()
    this.ctx.stroke()
  }
}
