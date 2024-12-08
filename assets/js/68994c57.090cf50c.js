"use strict";(self.webpackChunkdkershner_com=self.webpackChunkdkershner_com||[]).push([[3912],{1864:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var n=s(4848),r=s(8453);const i={title:"Deploying Next.js Outside of Vercel",description:"The current state of affairs for deploying Next.js outside of Vercel.",tags:["frontend","nextjs","react"]},o="Deploying Next.js Outside of Vercel",a={id:"react/nextjs-outside-vercel",title:"Deploying Next.js Outside of Vercel",description:"The current state of affairs for deploying Next.js outside of Vercel.",source:"@site/docs/react/nextjs-outside-vercel.md",sourceDirName:"react",slug:"/react/nextjs-outside-vercel",permalink:"/resources/react/nextjs-outside-vercel",draft:!1,unlisted:!1,tags:[{inline:!0,label:"frontend",permalink:"/resources/tags/frontend"},{inline:!0,label:"nextjs",permalink:"/resources/tags/nextjs"},{inline:!0,label:"react",permalink:"/resources/tags/react"}],version:"current",lastUpdatedBy:"Derek Kershner",lastUpdatedAt:1733700657e3,frontMatter:{title:"Deploying Next.js Outside of Vercel",description:"The current state of affairs for deploying Next.js outside of Vercel.",tags:["frontend","nextjs","react"]},sidebar:"docsSidebar",previous:{title:"Winning",permalink:"/resources/learning/books/winning"},next:{title:"React FAQ",permalink:"/resources/react/react-faq"}},l={},c=[{value:"Current Recommendation",id:"current-recommendation",level:2},{value:"Why not Vercel?",id:"why-not-vercel",level:2},{value:"Why not Remix or [insert other framework here]?",id:"why-not-remix-or-insert-other-framework-here",level:2},{value:"Serverless Framework (Components)",id:"serverless-framework-components",level:2},{value:"AWS Amplify",id:"aws-amplify",level:2},{value:"Azure Static Web Apps",id:"azure-static-web-apps",level:2}];function d(e){const t={a:"a",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"deploying-nextjs-outside-of-vercel",children:"Deploying Next.js Outside of Vercel"})}),"\n",(0,n.jsx)(t.p,{children:"This is meant as a reference document for the current state of affairs for deploying Next.js outside of Vercel. There are opinions present, but they are not meant to be taken as the only way to do things, just the experience of the author with doing so."}),"\n",(0,n.jsx)(t.h2,{id:"current-recommendation",children:"Current Recommendation"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.sst.dev/constructs/NextjsSite",children:"SST NextjsSite"})}),"\n",(0,n.jsx)(t.p,{children:"There are downsides to this structure, including that it is based on the now abandoned serverless components plugin, but it is still the best available option for deploying Next.js outside of Vercel for the time being."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["But this doesn't support Next.js 12 or 13 features!","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Correct, I recommend waiting on using these features. Alternatives are coming, but are not yet available."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["But why not [insert other framework here]?","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"See sections below which cover each other option."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"why-not-vercel",children:"Why not Vercel?"}),"\n",(0,n.jsx)(t.p,{children:"This is a fair question. For most sites, Vercel is a very simple, bulletproof way to deploy a Next.js site. It is also free for most use cases. However, there are some reasons you might want to deploy outside of Vercel:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"You use over 1TB of bandwidth. Pricing for Vercel jumps quite severely after this point, enterprise plans tend to start in the $2,000/month range, or pay as you go bandwidth is significantly more than other options."}),"\n",(0,n.jsx)(t.li,{children:"You are using infrastructure as code. Vercel doesn't fit all that well into this scenario, although doing so is certainly possible."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"why-not-remix-or-insert-other-framework-here",children:"Why not Remix or [insert other framework here]?"}),"\n",(0,n.jsxs)(t.p,{children:["For my money, this answer is all about incremental static regeneration, a form of stale-while-revalidate for frontends that allows a user to always get a static page for the absolute highest possible performance, while still getting the latest data from the backend. This is a huge win for performance, and is the main reason I use Next.js. You can read more about this in the ",(0,n.jsx)(t.a,{href:"https://nextjs.org/docs/basic-features/data-fetching/incremental-static-regeneration",children:"Next.js docs"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"serverless-framework-components",children:"Serverless Framework (Components)"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://www.serverless.com/plugins/serverless-nextjs-plugin",children:"https://www.serverless.com/plugins/serverless-nextjs-plugin"})}),"\n",(0,n.jsx)(t.p,{children:"SST is based on this implementation, and allows you to use the CDK instead of Serverless Framework, which is a huge win for no downside."}),"\n",(0,n.jsx)(t.h2,{id:"aws-amplify",children:"AWS Amplify"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.amplify.aws/start/q/integration/next",children:"https://docs.amplify.aws/start/q/integration/next"})}),"\n",(0,n.jsx)(t.p,{children:"AWS is the first out of the gate to implement using the standalone functionality provided by Next.js. This is great, but there are some major downsides that you should know about:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Incremental Static Regeneration is not REALLY supported. Currently, it loads synchronously and blocks the user experience while it does, effectively making it the exact same as SSR. This alone is reason enough to avoid this option, but it may be resolved if Cloudfront releases stale-while-revalidate support."}),"\n",(0,n.jsx)(t.li,{children:"Amplify does not play nice with the CDK. I have tried everything to make it do so, but it is simply impossible to do well. Amplify's CDK construct is beyond useless, and integrating the opposite direction using a portal-created Amplify is possible, more pleasant, but leaves much to be desired in terms of environment variables and redirects."}),"\n",(0,n.jsxs)(t.li,{children:["Amplify's pricing ",(0,n.jsx)(t.strong,{children:"seems"})," comparable to using Cloudfront, Lambdas, and S3, but if you look closely at the lambda GB/s pricing, it is MAGNITUDES more expensive."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"azure-static-web-apps",children:"Azure Static Web Apps"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/azure/static-web-apps/",children:"https://docs.microsoft.com/en-us/azure/static-web-apps/"})}),"\n",(0,n.jsx)(t.p,{children:"This is a great option, but it is not yet available for Next.js. It is currently in preview, and is expected to be released in the next few months. It is (probably) based on the standalone functionality provided by Next.js, and is a great option for those who are already using Azure."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"FWIW, I have ran into major sizing issues with regards to this option and the 100MB limit. Even an extremely simple website trips it, and there is no real visibility as to why. Perhaps this gets resolves in general availability, but it is a major issue for me."}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,s)=>{s.d(t,{R:()=>o,x:()=>a});var n=s(6540);const r={},i=n.createContext(r);function o(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);