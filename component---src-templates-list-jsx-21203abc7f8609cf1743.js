(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"07k4":function(e,t,n){"use strict";var a=n("vOnD").c.section.withConfig({displayName:"PostsWrapper",componentId:"sc-11gsmgo-0"})(["margin:auto;padding:120px 0 0;max-width:1176px;font-size:0;@media (max-width:414px){padding:70px 16px 0;}&:before,&:after{display:block;content:'';clear:both;}h1{margin:.67em 0;font-size:32px;}time{margin:1em 0;font-size:14px;}"]);t.a=a},"6VI9":function(e,t,n){"use strict";n("rB9j"),n("EnZy"),n("qePV"),n("pNMO"),n("4Brf"),n("07d7"),n("0oug"),n("4mDm"),n("PKPk"),n("3bBZ"),n("+2oP"),n("sMBO"),n("pjDv");function a(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,l=[],c=!0,i=!1;try{for(n=n.call(e);!(c=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);c=!0);}catch(o){i=!0,r=o}finally{try{c||null==n.return||n.return()}finally{if(i)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){var t=a(e.pathname.split("/"),4),n=t[1],r=t[2],l=t[3];return"pages"===n?Number(r)||1:Number(l)||1}},VOFg:function(e,t,n){"use strict";n.r(t);var a=n("q1tI"),r=n.n(a),l=(n("6uTu"),n("+2oP"),n("2B1R"),n("tkto"),n("pNMO"),n("zKZe"),n("17x9")),c=n.n(l),i=n("qhky"),o=n("07k4"),u=n("/3x3"),m=n("XYvH"),s=n("dz3X"),p=n("6VI9"),f=n("WlAH"),E=["images","tags","path"];function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function y(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var g=function(e){var t=e.data,n=e.location,a=Object(p.a)(n),l=Object(s.a)(t),c=l.length,g=l.slice((a-1)*f.CONTENT_PER_PAGE,a*f.CONTENT_PER_PAGE);return r.a.createElement(r.a.Fragment,null,r.a.createElement(o.a,null,r.a.createElement(i.a,null,r.a.createElement("title",null,"".concat(f.PREFIX,"POSTS")),r.a.createElement("meta",{name:"og:title",content:"".concat(f.PREFIX,"POSTS")})),g.map((function(e){var t=e.node.frontmatter,n=t.images,a=t.tags,l=t.path,c=y(t,E);return r.a.createElement(u.a,d({key:l,path:l,images:n,tags:a},c))}))),r.a.createElement(m.a,{postCount:c,location:n}))};g.propTypes={data:c.a.shape({}).isRequired,location:c.a.shape({}).isRequired};var h=g;t.default=function(e){return r.a.createElement(h,e)}},XYvH:function(e,t,n){"use strict";n("pjDv"),n("PKPk"),n("TeQF"),n("07d7"),n("yq1k"),n("JTJg"),n("ma9I"),n("2B1R");var a=n("17x9"),r=n.n(a),l=n("q1tI"),c=n.n(l),i=n("Wbzz"),o=n("ma3e"),u=n("WlAH"),m=n("6VI9"),s=n("vOnD").c.nav.withConfig({displayName:"styled__Wrapper",componentId:"sc-56q0vy-0"})(["margin:1em 0;text-align:center;ul{display:flex;justify-content:center;align-items:center;width:100%;}li{display:flex;padding:0 .4em;}"]),p=function(e){var t=e.postCount,n=e.location,a=e.prefix,r=t?Math.ceil(t/u.CONTENT_PER_PAGE):0,l=Array.from(new Array(r),(function(e,t){return t+1})),p=Object(m.a)(n),f=r>=u.PAGE_PER_SCREEN,E=f?l.filter((function(e){return Math.abs(p-e)<=Math.floor(u.PAGE_PER_SCREEN/2)})):l,d=E.includes(1),y=E.includes(r);return 0===l.length?null:c.a.createElement(s,null,c.a.createElement("ul",null,f&&!d?c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,c.a.createElement(i.Link,{to:"".concat(a,"1")},c.a.createElement(o.a,null))),c.a.createElement("li",null,c.a.createElement(o.f,null))):null,1!==p?c.a.createElement("li",null,c.a.createElement(i.Link,{to:"".concat(a).concat(p-1)},c.a.createElement(o.c,null))):null,E.map((function(e){return p===e?c.a.createElement("li",{key:e,className:p===e?"active":""},e):c.a.createElement("li",{key:e,className:p===e?"active":""},c.a.createElement(i.Link,{to:"".concat(a).concat(e)},e))})),r!==p?c.a.createElement("li",null,c.a.createElement(i.Link,{to:"".concat(a).concat(p+1)},c.a.createElement(o.d,null))):null,f&&!y?c.a.createElement(c.a.Fragment,null,c.a.createElement("li",null,c.a.createElement(o.f,null)),c.a.createElement("li",null,c.a.createElement(i.Link,{to:"".concat(a).concat(r)},c.a.createElement(o.b,null)))):null))};p.propTypes={postCount:r.a.number.isRequired,location:r.a.shape({pathname:r.a.string.isRequired}).isRequired,prefix:r.a.string},p.defaultProps={prefix:"/pages/"};t.a=p}}]);
//# sourceMappingURL=component---src-templates-list-jsx-21203abc7f8609cf1743.js.map