import{g as b}from"./index.92534d36.js";import{d as k,r as l,a as D,c as m,o as _}from"./vendor.bc4ce3e1.js";const j=k({setup(C){function c(){const e=b(40);return e.links.forEach(a=>{const o=e.nodes[a.source],r=e.nodes[a.target];!o.neighbors&&(o.neighbors=[]),!r.neighbors&&(r.neighbors=[]),o.neighbors.push(r),r.neighbors.push(o),!o.links&&(o.links=[]),!r.links&&(r.links=[]),o.links.push(a),r.links.push(a)}),e}const t=8,h=l(c()),n=l(new Set),s=l(new Set),i=l(null),d=e=>{n.value.clear(),s.value.clear(),e&&(n.value.add(e),e.neighbors.forEach(a=>n.value.add(a)),e.links.forEach(a=>s.value.add(a))),i.value=e||null},u=e=>{n.value.clear(),s.value.clear(),e&&(s.value.add(e),n.value.add(e.source),n.value.add(e.target))},v=e=>s.value.has(e)?5:1,g=e=>s.value.has(e)?4:0,p=e=>n.value.has(e)?"before":void 0,f=(e,a)=>{a.beginPath(),a.arc(e.x,e.y,t*1.4,0,2*Math.PI,!1),a.fillStyle=e===i.value?"red":"orange",a.fill()};return(e,a)=>{const o=D("VueForceGraph2D");return _(),m(o,{graphData:h.value,nodeRelSize:t,autoPauseRedraw:!1,linkWidth:v,linkDirectionalParticles:4,linkDirectionalParticleWidth:g,nodeCanvasObjectMode:p,nodeCanvasObject:f,onNodeHover:d,onLinkHover:u,backgroundColor:"#090723",linkColor:()=>"rgba(255,255,255,0.2)"},null,8,["graphData","linkColor"])}}});export{j as default};
