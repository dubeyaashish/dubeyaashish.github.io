"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[435],{6819:function(e,t,l){l.r(t),l.d(t,{default:function(){return h}});var n=l(5785),a=l(7294),r=l(682),c=l(2086),i=l(1945),s=l(4051),u=l(1555),m=l(444);var o=function(e){const{title:t,image:l,price:n,handleClick:r}=e;return a.createElement(m.Z,{style:{width:"18rem"}},a.createElement(m.Z.Img,{variant:"top",src:l}),a.createElement(m.Z.Body,null,a.createElement(m.Z.Title,null,t," - ",n," Baht"),a.createElement(i.Z,{variant:"primary",onClick:r},"Add to Cart")))},E=l(30);var h=function(){let[e,t]=a.useState([]),[l,m]=a.useState("reds"),[h,Z]=(0,E.Z)("cart",[]);function d(e){h.push(e),console.table(h),Z((0,n.Z)(h))}return"undefined"!=typeof window&&localStorage.clear(),a.useEffect((()=>{let e=[];fetch("https://api.sampleapis.com/wines/"+l).then((e=>e.json())).then((l=>{for(let t=0;t<l.length;t++)e.push(a.createElement(o,{key:t,image:l[t].image,title:l[t].wine,price:59,handleClick:()=>{d(l[t])}}));t(e)}))}),[l]),a.createElement(r.Z,null,a.createElement("h1",null,"POS"),a.createElement(c.Z,{"aria-label":"Basic example"},a.createElement(i.Z,{variant:"secondary",onClick:()=>{m("reds")}},"Reds"),a.createElement(i.Z,{variant:"secondary",onClick:()=>{m("whites")}},"Whites")),a.createElement(s.Z,null,a.createElement(u.Z,null,a.createElement(s.Z,null,e)),a.createElement(u.Z,{sm:3},a.createElement("h2",null,"Cart "),h.map(((e,t)=>a.createElement(s.Z,{key:t},a.createElement(u.Z,null,e.winery),a.createElement(u.Z,null,59)))),a.createElement(s.Z,null,"Total: ",59*h.length," Baht"))))}}}]);
//# sourceMappingURL=component---src-pages-wine-js-e174190da142573b642b.js.map