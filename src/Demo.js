import React from "react";
function Demo  (props){

return <div>
    <h3>addition = {Number(props.x)+Number(props.y)}</h3>
    <h3>substraction = {props.x-props.y}</h3>
    <h3>multiplication = {props.x*props.y}</h3>
    <h3>division = {props.x/props.y}</h3>
</div>
}
export default Demo;