var e=Object.defineProperty,r=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(r,t,n)=>t in r?e(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n;"undefined"!=typeof require&&require;import{n as l,r as a,_ as i,R as s,c,s as d,a as u}from"./vendor.408de1e5.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver((e=>{for(const t of e)if("childList"===t.type)for(const e of t.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&r(e)})).observe(document,{childList:!0,subtree:!0})}function r(e){if(e.ep)return;e.ep=!0;const r=function(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?r.credentials="include":"anonymous"===e.crossorigin?r.credentials="omit":r.credentials="same-origin",r}(e);fetch(e.href,r)}}();const p="react-ant-upload";class m extends a.exports.Component{constructor(){super(...arguments),this.handleClick=()=>{console.log("click me!")}}render(){const e=this.props,{className:l,value:a,onChange:d}=e,u=((e,o)=>{var l={};for(var a in e)t.call(e,a)&&o.indexOf(a)<0&&(l[a]=e[a]);if(null!=e&&r)for(var a of r(e))o.indexOf(a)<0&&n.call(e,a)&&(l[a]=e[a]);return l})(e,["className","value","onChange"]),m=i(u);return s.createElement("div",((e,l)=>{for(var a in l||(l={}))t.call(l,a)&&o(e,a,l[a]);if(r)for(var a of r(l))n.call(l,a)&&o(e,a,l[a]);return e})({"data-component":p,className:c(p,l)},m),s.createElement("button",{style:{padding:20,width:"100%"},onClick:this.handleClick,className:"icon-play"},"Enjoy coding."))}}m.displayName=p,m.version="__VERSION__",m.defaultProps={value:null,onChange:l};const f=d.div`
  width: 80%;
  margin: 30px auto 0;
`;var y=e=>s.createElement(f,null,s.createElement(m,null));u.render(s.createElement(s.StrictMode,null,s.createElement(y,null)),document.getElementById("root"));
