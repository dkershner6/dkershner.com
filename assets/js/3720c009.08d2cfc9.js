"use strict";(self.webpackChunkdkershner_com=self.webpackChunkdkershner_com||[]).push([[4787],{5429:(e,t,s)=>{s.r(t),s.d(t,{default:()=>d});s(6540);var a=s(4164),r=s(6644),n=s(8630),l=s(7045),c=s(5233),i=s(1210),o=s(5225),g=s(4848);function u(e){let{title:t}=e;return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(r.be,{title:t}),(0,g.jsx)(i.A,{tag:"doc_tags_list"})]})}function h(e){let{tags:t,title:s}=e;return(0,g.jsx)(r.e3,{className:(0,a.A)(n.G.page.docsTagsListPage),children:(0,g.jsx)("div",{className:"container margin-vert--lg",children:(0,g.jsx)("div",{className:"row",children:(0,g.jsxs)("main",{className:"col col--8 col--offset-2",children:[(0,g.jsx)(o.A,{as:"h1",children:s}),(0,g.jsx)(c.A,{tags:t})]})})})})}function d(e){const t=(0,l.b)();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(u,{...e,title:t}),(0,g.jsx)(h,{...e,title:t})]})}},1883:(e,t,s)=>{s.d(t,{A:()=>c});s(6540);var a=s(4164),r=s(4783);const n={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var l=s(4848);function c(e){let{permalink:t,label:s,count:c,description:i}=e;return(0,l.jsxs)(r.A,{href:t,title:i,className:(0,a.A)(n.tag,c?n.tagWithCount:n.tagRegular),children:[s,c&&(0,l.jsx)("span",{children:c})]})}},5233:(e,t,s)=>{s.d(t,{A:()=>o});s(6540);var a=s(7045),r=s(1883),n=s(5225);const l={tag:"tag_Nnez"};var c=s(4848);function i(e){let{letterEntry:t}=e;return(0,c.jsxs)("article",{children:[(0,c.jsx)(n.A,{as:"h2",id:t.letter,children:t.letter}),(0,c.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,c.jsx)("li",{className:l.tag,children:(0,c.jsx)(r.A,{...e})},e.permalink)))}),(0,c.jsx)("hr",{})]})}function o(e){let{tags:t}=e;const s=(0,a.Q)(t);return(0,c.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,c.jsx)(i,{letterEntry:e},e.letter)))})}},7045:(e,t,s)=>{s.d(t,{Q:()=>n,b:()=>r});var a=s(3230);const r=()=>(0,a.T)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function n(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);