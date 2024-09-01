"use strict";(self.webpackChunkjanstarke_blog=self.webpackChunkjanstarke_blog||[]).push([[7788],{8021:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var i=t(4848),s=t(8453);const o={title:"Userspace tool for (anti-forensically safe) wiping unallocated disk space",date:"2014-02-20",categories:["forensics"],layout:"post",authors:["jasa"]},a=void 0,l={permalink:"/blog/2014/02/20/userspace-tool-for-wiping-unallocated-disk-space",source:"@site/blog/2014-02-20-userspace-tool-for-wiping-unallocated-disk-space.mdx",title:"Userspace tool for (anti-forensically safe) wiping unallocated disk space",description:"This is just a simple idea and could as easily be rewritten in, e.g., Powershell, Perl, Python or whatever you want.",date:"2014-02-20T00:00:00.000Z",tags:[],readingTime:1.52,hasTruncateMarker:!1,authors:[{name:"Jan Starke",title:"Senior Forensic Analyst",url:"https://github.com/janstarke",imageURL:"https://github.com/janstarke.png",key:"jasa"}],frontMatter:{title:"Userspace tool for (anti-forensically safe) wiping unallocated disk space",date:"2014-02-20",categories:["forensics"],layout:"post",authors:["jasa"]},unlisted:!1,prevItem:{title:"Invalid TCP segments created by macof",permalink:"/blog/2015/02/01/invalid-tcp-segments-created-by-macof"},nextItem:{title:"Solaris: Bufferoverflows in lx-Zones ausnutzen",permalink:"/blog/2014/01/27/solaris-bufferoverflows-in-lx-zones-ausnutzen"}},r={authorsImageUrls:[void 0]},c=[];function d(e){const n={code:"code",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This is just a simple idea and could as easily be rewritten in, e.g., Powershell, Perl, Python or whatever you want."}),"\n",(0,i.jsx)(n.p,{children:"I had some problems with compressing the image of a virtual machine, which has been intensively used for a long period of time. I deleted all files inside the VM, but this does not really wipe the data, so that blocks of deleted files must be compressed as well. The simple fix of this is to overwrite unallocated blocks with all zeros."}),"\n",(0,i.jsxs)(n.p,{children:["Now, how to accomplish this? This is easy: We create a new file, and fill it with zeros. If we are finished (",(0,i.jsx)(n.code,{children:"fwrite()"}),"failes), we are done and delete the file. That's it."]}),"\n",(0,i.jsx)(n.p,{children:"Here is the code. Feel free to reimplement it in the language of your choice:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-c",children:'#include <stdio.h>\n#include <stdlib.h>\n#include <string.h>\n#include <signal.h>\n\nconst size_t block_size = 512;\nconst size_t block_count = 1;\nstatic const char* filename = "diskwipe.dat";\nstatic char* block = 0;\nstatic FILE* fp = NULL;\n\nvoid cleanup() {\n\tif (block) {\n\t\tfree(block);\n\t}\n\n\tif (fp != NULL) {\n\t\tfflush(fp);\n\t\tfclose(fp);\n\t\tfp = NULL;\n\t}\n\n\tif (0 != _unlink(filename)) {\n\t\tperror("Unable to delete diskwipe.dat: ");\n\t}\n}\n\nvoid finish(int res) {\n\tcleanup();\n\texit(res);\n}\n\nvoid handle_sigint (int sig) {\n\tfinish(1);\n}\n\nvoid do_wipe() {\n\tunsigned long int count = 0;\n\tfp = fopen(filename, "wbc");\n\tif (fp == NULL) {\n\t\tperror("Unable to open diskwipe.dat: ");\n\t\tfinish(1);\n\t}\n\n\twhile (block_count == fwrite(block, block_size, block_count, fp)) {\n\t\tfflush(fp);\n\t\tfprintf(stderr, "\\\\r%lu", ++count);\n\t}\n\tfclose(fp);\n}\n\nint main(int argc, char* argv[]) {\n\tsignal(SIGINT, handle_sigint);\n\n\tblock = (char*) malloc(block_size);\n\tmemset(block, 0, block_size);\n\t\n\tdo_wipe();\n\tfinish(0);\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"By the way, this is a very simple way for doing anti forensics:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"do bad stuff"}),"\n",(0,i.jsx)(n.li,{children:"delete your files/traces"}),"\n",(0,i.jsx)(n.li,{children:"do a userspace wipe using a builtin scripting language, preferably using a one-liner"}),"\n"]})]})}function f(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>l});var i=t(6540);const s={},o=i.createContext(s);function a(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);