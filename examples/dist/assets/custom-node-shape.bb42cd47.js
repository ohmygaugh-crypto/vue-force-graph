import{g as s}from"./index.92534d36.js";import{d as p,r as d,a as f,c as g,o as c}from"./vendor.bc4ce3e1.js";const b=p({setup(m){function l({id:n,x:a,y:o},r,e){e.fillStyle=r,[()=>{e.fillRect(a-6,o-4,12,8)},()=>{e.beginPath(),e.moveTo(a,o-5),e.lineTo(a-5,o+5),e.lineTo(a+5,o+5),e.fill()},()=>{e.beginPath(),e.arc(a,o,5,0,2*Math.PI,!1),e.fill()},()=>{e.font="10px Sans-Serif",e.textAlign="center",e.textBaseline="middle",e.fillText("Text",a,o)}][n%4]()}const t=n=>"#"+(n*1234567%Math.pow(2,24)).toString(16).padStart(6,"0"),i=d(s(20));return(n,a)=>{const o=f("VueForceGraph2D");return c(),g(o,{graphData:i.value,backgroundColor:"#090723",nodeLabel:"id",nodeCanvasObject:(r,e)=>l(r,t(r.id),e),nodePointerAreaPaint:l,linkColor:()=>"rgba(255,255,255,.2)"},null,8,["graphData","nodeCanvasObject","linkColor"])}}});export{b as default};
