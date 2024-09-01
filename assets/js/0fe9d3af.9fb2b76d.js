"use strict";(self.webpackChunkjanstarke_blog=self.webpackChunkjanstarke_blog||[]).push([[6457],{7131:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var t=i(4848),r=i(8453);const s={layout:"post",title:"Using regripper on MacOS",date:new Date("2021-11-02T00:00:00.000Z"),categories:"forensics tools",authors:["jasa"]},l="Installation of regripper on MacOS",a={permalink:"/blog/2021/11/02/Using-regripper-on-darwin",source:"@site/blog/2021-11-02-Using-regripper-on-darwin.mdx",title:"Using regripper on MacOS",description:"Fixing construction of the plugins path",date:"2021-11-02T00:00:00.000Z",tags:[],readingTime:.76,hasTruncateMarker:!1,authors:[{name:"Jan Starke",title:"Senior Forensic Analyst",url:"https://github.com/janstarke",imageURL:"https://github.com/janstarke.png",key:"jasa"}],frontMatter:{layout:"post",title:"Using regripper on MacOS",date:"2021-11-02T00:00:00.000Z",categories:"forensics tools",authors:["jasa"]},unlisted:!1,prevItem:{title:"Analyzing Linux memory images with volatility",permalink:"/blog/2022/04/04/centos7-volatility"},nextItem:{title:"Forensic analysis of deleted `$MFT` entries",permalink:"/blog/2021/10/22/mft_entry_sequence"}},o={authorsImageUrls:[void 0]},c=[{value:"Fixing construction of the <code>plugins</code> path",id:"fixing-construction-of-the-plugins-path",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"git clone https://github.com/keydet89/RegRipper3.0.git\n\ncpan install Parse::Win32Registry\n\n# find out where Parse::Win32Registry was installed\n\ncp -r /usr/local/Cellar/perl/5.34.0/lib/perl5/site_perl/5.34.0/Parse .\n\nmv *.pm Parse/Win32Registry/WinNT/\n"})}),"\n",(0,t.jsxs)(n.h2,{id:"fixing-construction-of-the-plugins-path",children:["Fixing construction of the ",(0,t.jsx)(n.code,{children:"plugins"})," path"]}),"\n",(0,t.jsxs)(n.p,{children:["On unixoid systems, ",(0,t.jsx)(n.code,{children:"rip.pl"})," ignores the folder where it is stored and looks for the ",(0,t.jsx)(n.code,{children:"plugins"})," folder in the current working directory (",(0,t.jsx)(n.a,{href:"https://github.com/keydet89/RegRipper3.0/issues/42",children:"https://github.com/keydet89/RegRipper3.0/issues/42"}),"). This can be fixed using the following patch:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-diff",children:'diff --git a/Analysis/RegRipper3.0/rip.pl b/Analysis/RegRipper3.0/rip.pl\nindex 8f626a7..9027209 100644\n--- a/Analysis/RegRipper3.0/rip.pl\n+++ b/Analysis/RegRipper3.0/rip.pl\n@@ -67,7 +67,7 @@ $str =~ s/($path[scalar(@path) - 1])//;\n # code updated 20190318\n my $plugindir;\n ($^O eq "MSWin32") ? ($plugindir = $str."plugins/")\n-                   : ($plugindir = File::Spec->catfile("plugins"));\n+                   : ($plugindir = File::Spec->catfile($str, "plugins"));\n #my $plugindir = $str."plugins/";\n #my $plugindir = File::Spec->catfile("plugins");\n #print "Plugins Dir = ".$plugindir."\\n";\n'})}),"\n",(0,t.jsx)(n.h1,{id:"usage-example",children:"Usage example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"PERL5LIB=$(pwd) perl rip.pl -r Amcache.hve -p amcache_tln >amcache.tln\n"})}),"\n",(0,t.jsxs)(n.h1,{id:"convert-tln-format-to-bodyfile-format",children:["Convert ",(0,t.jsx)(n.code,{children:"TLN"})," format to ",(0,t.jsx)(n.code,{children:"bodyfile"})," format"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-shell",children:"awk -F '|' '{OFS=\"|\";print 0,$5,0,0,0,0,0,-1,$1,-1,-1}' <test.tln |TZ=UTC mactime -b - -d\n"})})]})}function d(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},8453:(e,n,i)=>{i.d(n,{R:()=>l,x:()=>a});var t=i(6540);const r={},s=t.createContext(r);function l(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);