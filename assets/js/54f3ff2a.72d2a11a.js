"use strict";(self.webpackChunkdkershner_com=self.webpackChunkdkershner_com||[]).push([[9499],{3905:(e,r,n)=>{n.d(r,{Zo:()=>c,kt:()=>m});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function a(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=t.createContext({}),l=function(e){var r=t.useContext(u),n=r;return e&&(n="function"==typeof e?e(r):a(a({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(u.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(n),d=i,m=p["".concat(u,".").concat(d)]||p[d]||f[d]||o;return n?t.createElement(m,a(a({ref:r},c),{},{components:n})):t.createElement(m,a({ref:r},c))}));function m(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var u in r)hasOwnProperty.call(r,u)&&(s[u]=r[u]);s.originalType=e,s[p]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=n[l];return t.createElement.apply(null,a)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8594:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var t=n(7462),i=(n(7294),n(3905));const o={description:"Tips while using Azure Functions (Learned the hard way).",title:"Azure Functions Tips & Tricks",tags:["azure","cloud","serverless","functions"]},a="Azure Functions Tips & Tricks (Learned the hard way)",s={unversionedId:"azure/azure-functions-findings",id:"azure/azure-functions-findings",title:"Azure Functions Tips & Tricks",description:"Tips while using Azure Functions (Learned the hard way).",source:"@site/docs/azure/azure-functions-findings.md",sourceDirName:"azure",slug:"/azure/azure-functions-findings",permalink:"/resources/azure/azure-functions-findings",draft:!1,tags:[{label:"azure",permalink:"/resources/tags/azure"},{label:"cloud",permalink:"/resources/tags/cloud"},{label:"serverless",permalink:"/resources/tags/serverless"},{label:"functions",permalink:"/resources/tags/functions"}],version:"current",frontMatter:{description:"Tips while using Azure Functions (Learned the hard way).",title:"Azure Functions Tips & Tricks",tags:["azure","cloud","serverless","functions"]},sidebar:"docsSidebar",previous:{title:"Overview",permalink:"/resources/"},next:{title:"Azure Node Opaque Errors with Solutions",permalink:"/resources/azure/azure-node-opaque-errors-with-solutions"}},u={},l=[],c={toc:l};function p(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"azure-functions-tips--tricks-learned-the-hard-way"},"Azure Functions Tips & Tricks (Learned the hard way)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Always set WEBSITE_RUN_FROM_PACKAGE to 1 (in Application Settings / Environment Variables). Without this, the function app constantly fails and takes forever to deploy (~30min vs ~3min).",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/azure/azure-functions/run-functions-from-deployment-package"},"Azure recommends this"),", but it isn't obvious unless you happen upon those docs."))),(0,i.kt)("li",{parentName:"ul"},"When using Node, all functions must be in the root in order to run locally. This means no monorepos or any form of organization when using Functions."),(0,i.kt)("li",{parentName:"ul"},"In order to run locally when using queue-triggered functions, you must have a local storage emulator running. The simplest method is to install azurite globally ",(0,i.kt)("inlineCode",{parentName:"li"},"npm i -g azurite"),", then just simply run ",(0,i.kt)("inlineCode",{parentName:"li"},"azurite"),".",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"You can also install the VSCode function by the same name, which is also pretty simple to use."))),(0,i.kt)("li",{parentName:"ul"},"If you get odd eslint or prettier behavior when using the Azure extensions to generate code, try changing the line endings from CRLF to LF.")))}p.isMDXComponent=!0}}]);