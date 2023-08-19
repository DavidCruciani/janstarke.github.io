"use strict";(self.webpackChunkjanstarke_blog=self.webpackChunkjanstarke_blog||[]).push([[5350],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),A=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=A(e.components);return a.createElement(s.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),m=A(n),u=r,d=m["".concat(s,".").concat(u)]||m[u]||c[u]||l;return n?a.createElement(d,i(i({ref:t},p),{},{components:n})):a.createElement(d,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var A=2;A<l;A++)i[A]=n[A];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2831:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>o,toc:()=>A});var a=n(7462),r=(n(7294),n(3905));const l={title:'New Malware: "Pro InvoiceWMZ45445"',date:"2015-12-01",categories:["forensics","malware"],layout:"post"},i=void 0,o={permalink:"/blog/2015/12/01/new-malware-pro-invoicewmz45445",source:"@site/blog/2015-12-01-new-malware-pro-invoicewmz45445.md",title:'New Malware: "Pro InvoiceWMZ45445"',description:"During the last few days I received two mails with the following attachment:",date:"2015-12-01T00:00:00.000Z",formattedDate:"December 1, 2015",tags:[],readingTime:1.11,hasTruncateMarker:!1,authors:[],frontMatter:{title:'New Malware: "Pro InvoiceWMZ45445"',date:"2015-12-01",categories:["forensics","malware"],layout:"post"},prevItem:{title:"Does Sodinokibi use bad crypto?",permalink:"/blog/2020/01/08/does-sodinokibi-use-bad-crypto"},nextItem:{title:"Merging wordlist files",permalink:"/blog/2015/08/05/merging-wordlist-files"}},s={authorsImageUrls:[]},A=[],p={toc:A},m="wrapper";function c(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"During the last few days I received two mails with the following attachment:"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Pro InvoiceWMZ45445.rar")),(0,r.kt)("p",null,"which contains an .exe file with the same name:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"ProInvoice1",src:n(1388).Z,width:"586",height:"73"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Metadata\xa0"),"of ",(0,r.kt)("inlineCode",{parentName:"p"},"Pro InvoiceWMZ45445.exe"),":****"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"MD5:\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"4EE08155DB928C449EDEA28D6A68B8CA")),(0,r.kt)("li",{parentName:"ul"},"SHA1:\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"6F57853E8788E2BD8E1433D8B2E1A701774593A4")),(0,r.kt)("li",{parentName:"ul"},"File Version:\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"1.0.0.1")),(0,r.kt)("li",{parentName:"ul"},"File Description: ",(0,r.kt)("inlineCode",{parentName:"li"},"TODO: <File description>")),(0,r.kt)("li",{parentName:"ul"},"Created with:\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"Microsoft Visual C++ ver. 8.0 [DEBUG] / Visual Studio 2005"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Indicators of Compromise (IOC) of ",(0,r.kt)("inlineCode",{parentName:"strong"},"Pro InvoiceWMZ45445.exe"),":")),(0,r.kt)("p",null,"Upon execution, the file does the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"wait 30 seconds"),(0,r.kt)("li",{parentName:"ul"},"create a file ",(0,r.kt)("inlineCode",{parentName:"li"},"sample.exe")," under ",(0,r.kt)("inlineCode",{parentName:"li"},"%AppData%RoamingNew folder")),(0,r.kt)("li",{parentName:"ul"},"starts the previously created file"),(0,r.kt)("li",{parentName:"ul"},"installs the ",(0,r.kt)("inlineCode",{parentName:"li"},"sample.exe")," under ",(0,r.kt)("inlineCode",{parentName:"li"},"HKCUSoftwareMicrosoftWindowsCurrentVersionRunSample (Autostart)")),(0,r.kt)("li",{parentName:"ul"},"changes some Internet Explorer Setting")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"procdot",src:n(849).Z,width:"2587",height:"685"})),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Metadata\xa0"),"of ",(0,r.kt)("inlineCode",{parentName:"p"},"sample.exe"),":****"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"sample.exe")," has the same Hashes as ",(0,r.kt)("inlineCode",{parentName:"p"},"Pro InvoiceWMZ45445.exe"),". Interesting, isn't it? So, this Malware isn't a Dropper; but instead it installs itself under a different name."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Indicators of Compromise (IOC) of ",(0,r.kt)("inlineCode",{parentName:"strong"},"sample.exe"),":")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"creates the Mutant ",(0,r.kt)("inlineCode",{parentName:"li"},"Sessions1BaseNamedObjectsMUTEX-zZEeV-Zndko")),(0,r.kt)("li",{parentName:"ul"},"tries to resolve fredamata81.ddns.net"),(0,r.kt)("li",{parentName:"ul"},"tries to connect to port 2015 of fredamata81.ddns.net (which seems to be closed at the moment)"),(0,r.kt)("li",{parentName:"ul"},"consumes a lot of CPU time (20% on my machine)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Additional Information")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The executable has Debug information stored externally in\xa0",(0,r.kt)("inlineCode",{parentName:"li"},"d:bak_desktopnew folderstub1000_11_25_2015bdebugstub1000_11_25_2015b.pdb"),". I assume the file has been compiled on 2015/11/25. Maybe ;-)")),(0,r.kt)("p",null,"More dynamic analysis will follow soon. First I must remove the call to ",(0,r.kt)("inlineCode",{parentName:"p"},"IsDebuggerPresent()"),". But not today, anymore..."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Update:")),(0,r.kt)("p",null,"Virustotal has documented this specimen under\xa0",(0,r.kt)("a",{parentName:"p",href:"https://www.virustotal.com/de/file/bf6c2c3f9cbb35023a38516e6b438f9125b7056429804c88c444fa37e0254956/analysis/",title:"https://www.virustotal.com/de/file/bf6c2c3f9cbb35023a38516e6b438f9125b7056429804c88c444fa37e0254956/analysis/"},"https://www.virustotal.com/de/file/bf6c2c3f9cbb35023a38516e6b438f9125b7056429804c88c444fa37e0254956/analysis/")))}c.isMDXComponent=!0},849:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/procdot-ce3aa1c066ee90e11b7ea974c14e423f.png"},1388:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);