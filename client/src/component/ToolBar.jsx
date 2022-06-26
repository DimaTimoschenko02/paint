import React from "react";
import '../style/toolbar.scss'
import toolState from "../store/toolState";
import Brush from "../tool/Brush";
import canvasState from "../store/canvasState";
import Rect from "../tool/Rect";
const ToolBar = () =>{
    return(
        <div className="toolbar">
            <button className="toolbar__btn brush" onClick={() => toolState.setTool(new Brush(canvasState.canvas))}/>
            <button className="toolbar__btn rect" onClick = {() => toolState.setTool(new Rect(canvasState.canvas))}/>
            <button className="toolbar__btn circle"/>
            <button className="toolbar__btn eraser"/>
            <button className="toolbar__btn line"/>
            <input type="color" style = {{marginLeft: 10}} />
            <button className="toolbar__btn undo"/>
            <button className="toolbar__btn redo"/>
            <button className="toolbar__btn save"/>
        </div>
    )
}

export default ToolBar