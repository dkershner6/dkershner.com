"use strict";(self.webpackChunkdkershner_com=self.webpackChunkdkershner_com||[]).push([[6600],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(n),m=o,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,s=new Array(r);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:o,s[1]=i;for(var d=2;d<r;d++)s[d]=n[d];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1481:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=n(7462),o=(n(7294),n(3905));const r={title:"The DynamoDB Book",description:"Using key-value stores are all about consistency (as is any database actually, but simple databases are far less forgiving of inconsistencies). This book establishes reasonable, practiced patterns that will help you from making simple mistakes in your data modeling journey.",image:"/img/books/dynamodb-book.png",tags:["learning","fundamentals","books","Alex DeBrie","design-patterns","score-5","engineering"]},s="The DynamoDB Book",i={unversionedId:"learning/books/dynamodb-book",id:"learning/books/dynamodb-book",title:"The DynamoDB Book",description:"Using key-value stores are all about consistency (as is any database actually, but simple databases are far less forgiving of inconsistencies). This book establishes reasonable, practiced patterns that will help you from making simple mistakes in your data modeling journey.",source:"@site/docs/learning/books/dynamodb-book.md",sourceDirName:"learning/books",slug:"/learning/books/dynamodb-book",permalink:"/resources/learning/books/dynamodb-book",draft:!1,tags:[{label:"learning",permalink:"/resources/tags/learning"},{label:"fundamentals",permalink:"/resources/tags/fundamentals"},{label:"books",permalink:"/resources/tags/books"},{label:"Alex DeBrie",permalink:"/resources/tags/alex-de-brie"},{label:"design-patterns",permalink:"/resources/tags/design-patterns"},{label:"score-5",permalink:"/resources/tags/score-5"},{label:"engineering",permalink:"/resources/tags/engineering"}],version:"current",frontMatter:{title:"The DynamoDB Book",description:"Using key-value stores are all about consistency (as is any database actually, but simple databases are far less forgiving of inconsistencies). This book establishes reasonable, practiced patterns that will help you from making simple mistakes in your data modeling journey.",image:"/img/books/dynamodb-book.png",tags:["learning","fundamentals","books","Alex DeBrie","design-patterns","score-5","engineering"]},sidebar:"docsSidebar",previous:{title:"Design Patterns",permalink:"/resources/learning/books/design-patterns"},next:{title:"Engineering Leadership Interviews",permalink:"/resources/learning/books/engineering-leadership-interviews"}},l={},d=[{value:"TLDR",id:"tldr",level:2},{value:"Why?",id:"why",level:2},{value:"Who should read?",id:"who-should-read",level:2},{value:"Important Concepts",id:"important-concepts",level:2},{value:"Make Naming and Usage of PK/SK 100% Consistent",id:"make-naming-and-usage-of-pksk-100-consistent",level:3},{value:"Relationships in a Non-RDBMS",id:"relationships-in-a-non-rdbms",level:3},{value:"Other Engineer Comments",id:"other-engineer-comments",level:2}],c={toc:d};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"the-dynamodb-book"},"The DynamoDB Book"),(0,o.kt)("p",null,"Supercharge your Data Modeling"),(0,o.kt)("p",null,"by Alex DeBrie"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"DynamoDB Book Cover",src:n(398).Z,width:"634",height:"733"})),(0,o.kt)("h2",{id:"tldr"},"TLDR"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"This book aims to help you data model for DynamoDB. This is a worthy adversary, your attention to detail up front is well-warranted."),(0,o.kt)("li",{parentName:"ul"},"The rules posited in this book are the impetus for the patterns behind our own models. The explanations are very detailed and easy to follow."),(0,o.kt)("li",{parentName:"ul"},"AWS-Famous Rick Houlihan approves, the godfather of hideous, but effective data modeling (yes, this book will feel gross at first).")),(0,o.kt)("h2",{id:"why"},"Why?"),(0,o.kt)("p",null,"Using key-value stores are all about consistency (as is any database actually, but simple databases are far less forgiving of inconsistencies). This book establishes reasonable, practiced patterns that will help you from making simple mistakes in your data modeling journey."),(0,o.kt)("p",null,"In addition, DynamoDB has some of its own quirks (things like Billing), and it talks about all of them in great detail."),(0,o.kt)("p",null,"One of my favorite parts of this book is when it talks about optimizations NOT being worth it, and to favor simplicity in these cases."),(0,o.kt)("h2",{id:"who-should-read"},"Who should read?"),(0,o.kt)("p",null,"This book is basically required reading for anyone working with DynamoDB. This book does the most comprehensive job of explaining it of any resource I have come in contact with."),(0,o.kt)("h2",{id:"important-concepts"},"Important Concepts"),(0,o.kt)("h3",{id:"make-naming-and-usage-of-pksk-100-consistent"},"Make Naming and Usage of PK/SK 100% Consistent"),(0,o.kt)("p",null,"This was probably the largest and most impactful takeaway from this book. Forget saving space, just create more fields and name them exactly the same every single time."),(0,o.kt)("h3",{id:"relationships-in-a-non-rdbms"},"Relationships in a Non-RDBMS"),(0,o.kt)("p",null,"Relationships are managed in application code for key-value stores, but this book establishes patterns to help you create code to more firmly and obviously declare these in code."),(0,o.kt)("h2",{id:"other-engineer-comments"},"Other Engineer Comments"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The book covers all the core concepts of DynamoDB you'll need to know. The author introduces the reader to the fundamentals of Data Modeling, and how you would approach designing a single table database. For any dev coming from a RDMS background, this is where the biggest mental model shift comes in. Once the reader has a grasp on how to build out your Entities and Models then it's time for a more in-depth look at examples and strategies. The last few chapters of the book are dedicated to real life project examples. I found this extremely helpful to work through and reference previous chapters when something wasn't clear to me."),(0,o.kt)("p",{parentName:"blockquote"},"-TJ Walsh")))}u.isMDXComponent=!0},398:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/dynamodb-book-5ca0dcf64289ae4251066d148459527d.png"}}]);