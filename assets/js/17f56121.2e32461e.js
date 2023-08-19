"use strict";(self.webpackChunkjanstarke_blog=self.webpackChunkjanstarke_blog||[]).push([[6351],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,g=p["".concat(s,".").concat(m)]||p[m]||f[m]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8268:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={title:"Rexgen is back again",date:"2015-03-08",categories:["allgemein"],layout:"post"},i=void 0,l={permalink:"/blog/2015/03/08/rexgen-is-back-again",source:"@site/blog/2015-03-08-rexgen-is-back-again.md",title:"Rexgen is back again",description:"... with a new version 1.2.3 and a new repository location//github.com/janstarke/rexgen",date:"2015-03-08T00:00:00.000Z",formattedDate:"March 8, 2015",tags:[],readingTime:.8,hasTruncateMarker:!1,authors:[],frontMatter:{title:"Rexgen is back again",date:"2015-03-08",categories:["allgemein"],layout:"post"},prevItem:{title:"Merging wordlist files",permalink:"/blog/2015/08/05/merging-wordlist-files"},nextItem:{title:"How to (not) hack jasa's blog",permalink:"/blog/2015/02/11/how-to-not-hack-jasas-blog"}},s={authorsImageUrls:[]},c=[{value:"New features:",id:"new-features",level:2},{value:"What else is new?",id:"what-else-is-new",level:2}],u={toc:c},p="wrapper";function f(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"... with a new version 1.2.3 and a new repository location: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/janstarke/rexgen"},"https://github.com/janstarke/rexgen")),(0,a.kt)("h2",{id:"new-features"},"New features:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"improved uppercase/lowercase variation: 'a(?i:bc)' creates abc, abC, aBC, aBc"),(0,a.kt)("li",{parentName:"ul"},"that's it. But I had to rewrite a lot of internal data representation, so that the modifier ",(0,a.kt)("inlineCode",{parentName:"li"},"i")," for ",(0,a.kt)("em",{parentName:"li"},"ignore case")," may be the first one in long list of additional iterators. One of my ideas for the next versions is some kind of Levenshtein Iterator. The idea is that the modifier will create all variants of a word with a Levenshtein distance of 1")),(0,a.kt)("h2",{id:"what-else-is-new"},"What else is new?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"John the Ripper (jumbo) uses the new API of rexgen, so you can build the newest version JtR together with the newest version of rexgen")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"wfuzz does not use rexgen, until now. I created a fork of wfuzz ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/janstarke/wfuzz"},"https://github.com/janstarke/wfuzz"),". Unfortunately, xmendez ignores my pull request :-( But you can use my fork and I will try to keep it up2date"))),(0,a.kt)("p",null,"So long"))}f.isMDXComponent=!0}}]);