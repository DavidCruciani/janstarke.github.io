"use strict";(self.webpackChunkjanstarke_blog=self.webpackChunkjanstarke_blog||[]).push([[833],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>c});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),m=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=m(a),k=r,c=d["".concat(p,".").concat(k)]||d[k]||u[k]||l;return a?n.createElement(c,i(i({ref:t},s),{},{components:a})):n.createElement(c,i({ref:t},s))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=k;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},8553:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const l={layout:"page",title:"Forensic triage and data gathering"},i=void 0,o={unversionedId:"forensics/triage",id:"forensics/triage",title:"Forensic triage and data gathering",description:"In this page I'm summarizing a lot of stuff which is related to collection triage data.",source:"@site/docs/02_forensics/triage.md",sourceDirName:"02_forensics",slug:"/forensics/triage",permalink:"/forensics/triage",draft:!1,tags:[],version:"current",frontMatter:{layout:"page",title:"Forensic triage and data gathering"},sidebar:"tutorialSidebar",previous:{title:"Forensic snippets for me and you",permalink:"/forensics/snippets"},next:{title:"Development",permalink:"/category/development"}},p={},m=[{value:"in Linux",id:"in-linux",level:2},{value:"in MacOS",id:"in-macos",level:2},{value:"Filesystem timeline",id:"filesystem-timeline",level:2}],s={toc:m},d="wrapper";function u(e){let{components:t,...a}=e;return(0,r.kt)(d,(0,n.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"In this page I'm summarizing a lot of stuff which is related to collection triage data."),(0,r.kt)("h1",{id:"required-tools"},"Required tools"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"sleuthkit ",(0,r.kt)("a",{parentName:"li",href:"https://www.sleuthkit.org/"},"https://www.sleuthkit.org/")),(0,r.kt)("li",{parentName:"ul"},"afflib-tools ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/simsong/AFFLIBv3"},"https://github.com/simsong/AFFLIBv3"))),(0,r.kt)("h1",{id:"expected-result-sorted-by-priority"},"Expected Result (sorted by priority)"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Bodyfile for all partitions"),(0,r.kt)("li",{parentName:"ol"},"Windows event logs"),(0,r.kt)("li",{parentName:"ol"},"Registry"),(0,r.kt)("li",{parentName:"ol"},"User hives"),(0,r.kt)("li",{parentName:"ol"},"User profiles")),(0,r.kt)("h1",{id:"mounting-stuff"},"Mounting stuff"),(0,r.kt)("h2",{id:"in-linux"},"in Linux"),(0,r.kt)("p",null,"If you have vmdk files, you first need to turn them to raw images (which is vvery slow) or you need to create a raw view onto them:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo affuse -o ro,allow_other /cases/sample/myserver.vmdk /mnt/aff/myserver/\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o ro")),(0,r.kt)("td",{parentName:"tr",align:null},"read-only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o allow_other")),(0,r.kt)("td",{parentName:"tr",align:null},"allow access to other users")))),(0,r.kt)("p",null,"Next, to make things easy, we create loop devices for every partition:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo losetup --show -f -P /mnt/aff/myserver/myserver.vmdk.raw\n/dev/loop2\n")),(0,r.kt)("p",null,"this generates ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/loop2p1")," for partition 1, and so on. To see which partitions you have, use ",(0,r.kt)("inlineCode",{parentName:"p"},"mmls"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"--show")),(0,r.kt)("td",{parentName:"tr",align:null},"print device name after setup  (with ",(0,r.kt)("inlineCode",{parentName:"td"},"-f"),")")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"-f ","|"," --find")),(0,r.kt)("td",{parentName:"tr",align:null},"find first unused device")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("code",null,"-P ","|","\xa0--partscan")),(0,r.kt)("td",{parentName:"tr",align:null},"create a partitioned loop device")))),(0,r.kt)("p",null,"Now, we could mount a partition. Keep in mind that you never, ever, omit the ",(0,r.kt)("inlineCode",{parentName:"p"},"ro")," option!"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo mount -o ro,show_sys_files,streams_interface=windows /dev/loop2p1 /mnt/myserver/C\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o ro")),(0,r.kt)("td",{parentName:"tr",align:null},"read-only")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o show_sys_files")),(0,r.kt)("td",{parentName:"tr",align:null},"Show the metafiles in directory listings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-o streams_interface=windows")),(0,r.kt)("td",{parentName:"tr",align:null},"enable access to streams using the Windows syntax (e.g. ",(0,r.kt)("inlineCode",{parentName:"td"},"cat file:stream"),")")))),(0,r.kt)("h2",{id:"in-macos"},"in MacOS"),(0,r.kt)("p",null,"Currently, I do not know any option to mount ",(0,r.kt)("inlineCode",{parentName:"p"},"VMDK")," files in MacOS. However, one can convert images using qemu-img:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"qemu-img convert -f vmdk -O raw myserver.vmdk myserver.vmdk.raw\n")),(0,r.kt)("p",null,"Now, you can attach that raw image as a loop device:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"sudo hdiutil attach -imagekey diskimage-class=CRawDiskImage -nomount -readonly myserver.vmdk.raw\n")),(0,r.kt)("h1",{id:"handling-lvm-partitions"},"Handling LVM partitions"),(0,r.kt)("p",null,"Assume you now have a partition ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/loop20p1")," which contains a physical volume (pv). You can use kpartx to read the volume information and create the relevant device nodes:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo kpartx -r -a -v /dev/loop20p1\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-r")),(0,r.kt)("td",{parentName:"tr",align:null},"read-only partition mappings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-a")),(0,r.kt)("td",{parentName:"tr",align:null},"add partition mappings")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-v")),(0,r.kt)("td",{parentName:"tr",align:null},"operate verbosely")))),(0,r.kt)("p",null,"Now, you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"pvs")," to display information about physical volumes. In my case, I had a physical volume named ",(0,r.kt)("inlineCode",{parentName:"p"},"data_pv"),". Next, you need to activate the volumes you're going to work with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vgchange --activate y data_pv\n")),(0,r.kt)("p",null,"This will create a lot of device nodes beneath ",(0,r.kt)("inlineCode",{parentName:"p"},"/dev/data_pv"),", one for every logical volume in ",(0,r.kt)("inlineCode",{parentName:"p"},"data_pv"),". You can now work with them."),(0,r.kt)("p",null,"I took a lot of information from ",(0,r.kt)("a",{parentName:"p",href:"https://countuponsecurity.com/tag/linux-lvm-forensics/"},"https://countuponsecurity.com/tag/linux-lvm-forensics/")),(0,r.kt)("h1",{id:"timeline"},"Timeline"),(0,r.kt)("h2",{id:"filesystem-timeline"},"Filesystem timeline"),(0,r.kt)("p",null,"To create a filesystem timeline, you need to know the following information:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Which partition to triage?"),(0,r.kt)("li",{parentName:"ul"},"Which timezone has been configured on the system?")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'fls -r -m "C:/" -z CET /dev/loop2p1 >myserver_c.bodyfile\n')),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Option"),(0,r.kt)("th",{parentName:"tr",align:null},"Meaning"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-r")),(0,r.kt)("td",{parentName:"tr",align:null},"Recurse on directory entries")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},'-m "C:/"')),(0,r.kt)("td",{parentName:"tr",align:null},"Display output in mactime input format with ",(0,r.kt)("inlineCode",{parentName:"td"},"C:/")," as the actual mount point of the image")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"-z CET")),(0,r.kt)("td",{parentName:"tr",align:null},"Time zone of original machine (",(0,r.kt)("inlineCode",{parentName:"td"},"CET"),") (only useful with -l)")))),(0,r.kt)("h1",{id:"important-windows-triage-artifacts"},"Important Windows triage artifacts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Artifact"),(0,r.kt)("th",{parentName:"tr",align:null},"Location"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"System Registry"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%windir%\\System32\\config\\SYSTEM")," ",(0,r.kt)("inlineCode",{parentName:"td"},"%windir%\\System32\\config\\SOFTWARE"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Event Logs"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"%windir%\\System32\\winevt\\Logs\\*.evtx"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User profile hives"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C:\\Users\\*\\NTUSER.DAT"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"User profiles"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"C:\\Users\\*"))))))}u.isMDXComponent=!0}}]);