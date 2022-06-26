import { observer } from "mobx-react-lite";
import React , { useEffect  , useRef} from "react";
import '../style/canvas.scss'
import canvasState from "../store/canvasState";
import toolState from "../store/toolState";
import Brush from "../tool/Brush";
const Canvas = observer(() =>{
    const canvasRef = useRef()


    useEffect(() =>{
        canvasState.setCanvas(canvasRef.current)
        toolState.setTool(new Brush(canvasRef.current))
        console.log(toolState.tool)
        console.log(canvasState.canvas)
    }  , [])
   

    return(
        <div className = "canvas">
            <canvas ref = {canvasRef} width={600} height = {400}/>
                
        </div>
    )
})

export default Canvas