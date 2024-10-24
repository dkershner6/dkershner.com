"use strict";(self.webpackChunkdkershner_com=self.webpackChunkdkershner_com||[]).push([[1657],{2349:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=n(4848),t=n(8453);const o={description:"There are a few really bright spots in Azure to know about, and take full advantage of.",title:"What Azure does better than AWS",tags:["azure","cloud"]},a="Azure CosmosDB (vs DynamoDB)",i={id:"azure/what-azure-does-better-than-aws",title:"What Azure does better than AWS",description:"There are a few really bright spots in Azure to know about, and take full advantage of.",source:"@site/docs/azure/what-azure-does-better-than-aws.md",sourceDirName:"azure",slug:"/azure/what-azure-does-better-than-aws",permalink:"/resources/azure/what-azure-does-better-than-aws",draft:!1,unlisted:!1,tags:[{inline:!0,label:"azure",permalink:"/resources/tags/azure"},{inline:!0,label:"cloud",permalink:"/resources/tags/cloud"}],version:"current",lastUpdatedBy:"Derek Kershner",lastUpdatedAt:1729729794e3,frontMatter:{description:"There are a few really bright spots in Azure to know about, and take full advantage of.",title:"What Azure does better than AWS",tags:["azure","cloud"]},sidebar:"docsSidebar",previous:{title:"Azure Node Opaque Errors with Solutions",permalink:"/resources/azure/azure-node-opaque-errors-with-solutions"},next:{title:"Software Learning Resources",permalink:"/resources/learning/"}},l={},d=[{value:"CosmosDB Advantages",id:"cosmosdb-advantages",level:2},{value:"DynamoDB Advantages",id:"dynamodb-advantages",level:2},{value:"Why Aurora and not RDS?",id:"why-aurora-and-not-rds",level:2},{value:"Why Azure SQL over Aurora?",id:"why-azure-sql-over-aurora",level:2}];function h(e){const s={a:"a",blockquote:"blockquote",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"azure-cosmosdb-vs-dynamodb",children:"Azure CosmosDB (vs DynamoDB)"})}),"\n",(0,r.jsx)(s.p,{children:"This one is not cut and dry, just to be clear, but I believe CosmosDB to have chosen better tradeoffs than DynamoDB in general, but will try to present both sides."}),"\n",(0,r.jsx)(s.h2,{id:"cosmosdb-advantages",children:"CosmosDB Advantages"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Indexing is implemented in an opt-out fashion, allowing you significantly more flexibility up front, and then allowing you to optimize for performance later. This is much more intuitive than the opposite (as is so in DynamoDB). ",(0,r.jsxs)(s.strong,{children:["It is hard to overstate how powerful this single advantage is, but DynamoDB has ",(0,r.jsx)(s.a,{href:"/resources/learning/books/dynamodb-book",children:"entire books"})," written about how to best not screw this part up that simply aren't needed with CosmosDB."]})]}),"\n",(0,r.jsx)(s.li,{children:"Indexing is possible on array values."}),"\n",(0,r.jsx)(s.li,{children:"Massive up front data modeling savings because only one partition key needs to ever be chosen."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"dynamodb-advantages",children:"DynamoDB Advantages"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Very clear pricing."}),"\n",(0,r.jsx)(s.li,{children:"Very low level control."}),"\n",(0,r.jsx)(s.li,{children:"Transactions (across partitions and even tables)."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"TLDR: This one is close, and up for argument, but for MOST people with MOST workloads, I think CosmosDB serves the need better."})}),"\n",(0,r.jsx)(s.h1,{id:"azure-sql-vs-aurora",children:"Azure SQL (vs Aurora)"}),"\n",(0,r.jsx)(s.p,{children:"This one is also not cut and dry, and perhaps you could make an argument that a MySQL RDS is a better comparison, and likely Aurora outstrips Azure SQL somewhere at the extreme high end, but...hear me out."}),"\n",(0,r.jsx)(s.h2,{id:"why-aurora-and-not-rds",children:"Why Aurora and not RDS?"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Azure SQL is not only their cloud database, it also provides replication locally, regionally, globally, like Aurora does (and RDS does not)."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"why-azure-sql-over-aurora",children:"Why Azure SQL over Aurora?"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Ease of use (not even close)."}),"\n",(0,r.jsx)(s.li,{children:"Very cheap on the low end ($5/mo)."}),"\n",(0,r.jsx)(s.li,{children:"Very simple pricing (no need to worry about I/O transactions). In addition, I would argue that at all levels it is cheaper."}),"\n",(0,r.jsx)(s.li,{children:"More flexible provisioning (~3 models to go with)."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Those are not small advantages, and I would argue that there are only a few arguments that can be made for Aurora:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"Faster scaling for serverless? I haven't had any issues with Azure SQL myself, but this is a possibility."}),"\n",(0,r.jsx)(s.li,{children:"You have to use SQL Server? I guess that could be a con, though Azure does do postgres in some of the provisioning schemes."}),"\n",(0,r.jsx)(s.li,{children:"Higher scaling ceiling? This might be true, although I am not sure I will ever be able to create something that would know...and if I did, I probably wouldn't use SQL anyway..."}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"TLDR: It's easier and cheaper. Like, much easier."})}),"\n",(0,r.jsx)(s.h1,{id:"azure-storage-v1-queues-vs-sqs",children:"Azure Storage v1 Queues (vs SQS)"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"General-purpose v1 storage accounts enable access to block blobs, page blobs, files, queues, and tables, offering low transaction prices but with higher storage prices. General-purpose v1 accounts do not provide access to Cool or Archive storage."}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"https://azure.microsoft.com/en-us/pricing/details/storage/blobs/#pricing",children:"https://azure.microsoft.com/en-us/pricing/details/storage/blobs/#pricing"}),' (currently called "Other")']}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Higher storage, but lower transaction costs? For some forms of storage, this makes a ton of sense."}),"\n",(0,r.jsx)(s.p,{children:"The pricing is super simple: $0.00036 for 10,000 anythings (read, write, or delete). This is $0.036 per million."}),"\n",(0,r.jsx)(s.p,{children:"One absolute perfect fit is Queue storage, where things are stored for very short periods of time, and the item generally experiences one write, and one read."}),"\n",(0,r.jsx)(s.p,{children:"Compare this to SQS at $0.40 per million api calls. Granted, SQS allows batching of 10, but even on it's very best day where you get 10 messages every single call, Azure is still a bit cheaper, and that day will never actually happen anyway."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"TLDR: Azure Storage Queue v1 is ~1/10th the cost of AWS SQS"})}),"\n",(0,r.jsx)(s.h1,{id:"azure-table-storage-vsnothing",children:"Azure Table Storage (vs...Nothing)"}),"\n",(0,r.jsx)(s.p,{children:"This operates on the same pricing scheme as above. Not too much to write home about here, as it is essentially just a very, very simple key-value store."}),"\n",(0,r.jsx)(s.p,{children:"But, if your workload can fit into a very simple indexing structure, AWS simply has no equivalent, period. DynamoDB is closest and it is many magnitudes more expensive (~25x)."}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"TLDR: Unique offering!"})}),"\n",(0,r.jsx)(s.h1,{id:"conclusion",children:"Conclusion"}),"\n",(0,r.jsx)(s.p,{children:"OK, so this is a pretty tiny list, I admit. AWS is still the clear winner in aggregate, but I just wanted to weigh in on my comparative experiences, and where I sometimes get surprised. :)"})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>i});var r=n(6540);const t={},o=r.createContext(t);function a(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);