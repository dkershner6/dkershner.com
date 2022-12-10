"use strict";(self.webpackChunkdkershner_com=self.webpackChunkdkershner_com||[]).push([[162],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=a,d=p["".concat(u,".").concat(m)]||p[m]||h[m]||i;return r?n.createElement(d,o(o({ref:t},c),{},{components:r})):n.createElement(d,o({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:a,o[1]=s;for(var l=2;l<i;l++)o[l]=r[l];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const i={authors:["dkershner"],date:new Date("2022-12-03T00:00:00.000Z"),description:"Tips while using Azure Functions (Learned the hard way).",tags:["azure","cloud-architecture","serverless"],title:"Azure Functions Tips & Tricks"},o=void 0,s={permalink:"/blog/azure-functions-findings",source:"@site/blog/azure-functions-findings.md",title:"Azure Functions Tips & Tricks",description:"Tips while using Azure Functions (Learned the hard way).",date:"2022-12-03T00:00:00.000Z",formattedDate:"December 3, 2022",tags:[{label:"azure",permalink:"/blog/tags/azure"},{label:"cloud-architecture",permalink:"/blog/tags/cloud-architecture"},{label:"serverless",permalink:"/blog/tags/serverless"}],readingTime:.795,hasTruncateMarker:!1,authors:[{name:"Derek Kershner",title:"CTO",url:"https://github.com/dkershner6",imageURL:"https://github.com/dkershner6.png",key:"dkershner"}],frontMatter:{authors:["dkershner"],date:"2022-12-03T00:00:00.000Z",description:"Tips while using Azure Functions (Learned the hard way).",tags:["azure","cloud-architecture","serverless"],title:"Azure Functions Tips & Tricks"}},u={authorsImageUrls:[void 0]},l=[{value:"Tips while using Azure Functions (Learned the hard way)",id:"tips-while-using-azure-functions-learned-the-hard-way",level:2}],c={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"tips-while-using-azure-functions-learned-the-hard-way"},"Tips while using Azure Functions (Learned the hard way)"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Always set WEBSITE_RUN_FROM_PACKAGE to 1 (in Application Settings / Environment Variables). Without this, the function app constantly fails and takes forever to deploy (~30min vs ~3min).",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-functions/run-functions-from-deployment-package"},"Azure recommends this"),", but it isn't obvious unless you happen upon those docs."))),(0,a.kt)("li",{parentName:"ul"},"When using Node, all functions must be in the root in order to run locally. This means no monorepos or any form of organization when using Functions."),(0,a.kt)("li",{parentName:"ul"},"In order to run locally when using queue-triggered functions, you must have a local storage emulator running. The simplest method is to install azurite globally ",(0,a.kt)("inlineCode",{parentName:"li"},"npm i -g azurite"),", then just simply run ",(0,a.kt)("inlineCode",{parentName:"li"},"azurite"),".",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"You can also install the VSCode function by the same name, which is also pretty simple to use."))),(0,a.kt)("li",{parentName:"ul"},"If you get odd eslint or prettier behavior when using the Azure extensions to generate code, try changing the line endings from CRLF to LF.")))}p.isMDXComponent=!0}}]);