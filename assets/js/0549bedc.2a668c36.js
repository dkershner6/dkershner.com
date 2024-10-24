"use strict";(self.webpackChunkdkershner_com=self.webpackChunkdkershner_com||[]).push([[4935],{5362:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>h});var i=t(4848),a=t(8453);const o={title:"React FAQ",tags:["frontend","react"]},s="React FAQ",r={id:"react/react-faq",title:"React FAQ",description:"Categorized questions to help with some of the more advanced intracacies of React. When opinions, and not facts, are presented, it is noted.",source:"@site/docs/react/react-faq.md",sourceDirName:"react",slug:"/react/react-faq",permalink:"/resources/react/react-faq",draft:!1,unlisted:!1,tags:[{inline:!0,label:"frontend",permalink:"/resources/tags/frontend"},{inline:!0,label:"react",permalink:"/resources/tags/react"}],version:"current",lastUpdatedBy:"Derek Kershner",lastUpdatedAt:1729729794e3,frontMatter:{title:"React FAQ",tags:["frontend","react"]},sidebar:"docsSidebar",previous:{title:"Deploying Next.js Outside of Vercel",permalink:"/resources/react/nextjs-outside-vercel"}},l={},h=[{value:"Referential Equality",id:"referential-equality",level:4},{value:"Q. What is referential equality, how is it different from other equalities, and why is it important in React?",id:"q-what-is-referential-equality-how-is-it-different-from-other-equalities-and-why-is-it-important-in-react",level:5},{value:"React Hooks",id:"react-hooks",level:4},{value:"Custom React Hooks",id:"custom-react-hooks",level:5},{value:"Q. How should I think about custom React hooks in general?",id:"q-how-should-i-think-about-custom-react-hooks-in-general",level:6},{value:"Q. Should I use a custom hook or should I build a Context?",id:"q-should-i-use-a-custom-hook-or-should-i-build-a-context",level:6},{value:"React Hook Dependency Arrays",id:"react-hook-dependency-arrays",level:5},{value:"Q. Why am I forced to populate dependency arrays when [fill in the blank] works as well? (Exhaustive Dependencies ESLint Rule)",id:"q-why-am-i-forced-to-populate-dependency-arrays-when-fill-in-the-blank-works-as-well-exhaustive-dependencies-eslint-rule",level:6},{value:"Q. What about a blank dependency array, I only want it to run initially, so I&#39;m good there, right?",id:"q-what-about-a-blank-dependency-array-i-only-want-it-to-run-initially-so-im-good-there-right",level:6},{value:"useMemo / useCallback",id:"usememo--usecallback",level:5},{value:"Q. When should I useMemo and when should I useEffect + useState?",id:"q-when-should-i-usememo-and-when-should-i-useeffect--usestate",level:6},{value:"Q. I read an article telling me not to useMemo, are they right?",id:"q-i-read-an-article-telling-me-not-to-usememo-are-they-right",level:6},{value:"Q. Do I need to wrap [fill in the blank] in a hook, or can I just create a [non-wrapped same fill in the blank]? (useCallback for functions, useMemo for objects)",id:"q-do-i-need-to-wrap-fill-in-the-blank-in-a-hook-or-can-i-just-create-a-non-wrapped-same-fill-in-the-blank-usecallback-for-functions-usememo-for-objects",level:6},{value:"Misc",id:"misc",level:5},{value:"Q. why (if it is) is it better to use a ternary for a conditional render than a short circuit?",id:"q-why-if-it-is-is-it-better-to-use-a-ternary-for-a-conditional-render-than-a-short-circuit",level:6},{value:"User Experience (UX)",id:"user-experience-ux",level:3},{value:"Forms",id:"forms",level:4}];function c(e){const n={a:"a",code:"code",h1:"h1",h3:"h3",h4:"h4",h5:"h5",h6:"h6",header:"header",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"react-faq",children:"React FAQ"})}),"\n",(0,i.jsx)(n.p,{children:"Categorized questions to help with some of the more advanced intracacies of React. When opinions, and not facts, are presented, it is noted."}),"\n",(0,i.jsx)(n.h4,{id:"referential-equality",children:"Referential Equality"}),"\n",(0,i.jsx)(n.h5,{id:"q-what-is-referential-equality-how-is-it-different-from-other-equalities-and-why-is-it-important-in-react",children:"Q. What is referential equality, how is it different from other equalities, and why is it important in React?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Referential equality means the object maintains, as opposed to creates anew, a reference through whatever actions are occurring."}),"\n",(0,i.jsx)(n.li,{children:"Strict equality in Javascript, or ===, uses EXACT equality for primitives ('string' === 'string'), or REFERENTIAL equality for objects/arrays ([1,2,3] !== [1,2,3]). React uses this exact same logic to determine if something changed."}),"\n",(0,i.jsxs)(n.li,{children:['"Something changed" is the most important concept in React (hence the name). When something changes within a component, that component re-renders.',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:'The most dangerous situation you can encounter is when something creates a render loop. This is when "something changed" causes another change in an infinite cycle. (see Dependency Array section for defense of this)'}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"React has various tools to control referential equality built in. (See the useMemo / useCallback section for more details)"}),"\n",(0,i.jsx)(n.li,{children:'"Render safety", a phrase I made up, is shorthand for "correctly handles referential equality so that all downstream components can rely on the output".'}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"react-hooks",children:"React Hooks"}),"\n",(0,i.jsx)(n.h5,{id:"custom-react-hooks",children:"Custom React Hooks"}),"\n",(0,i.jsx)(n.h6,{id:"q-how-should-i-think-about-custom-react-hooks-in-general",children:"Q. How should I think about custom React hooks in general?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Hooks are 100% identical to functions aside from one fact: they can also access the native react hooks (useState, useMemo, etc)."}),"\n",(0,i.jsx)(n.li,{children:"Because of this, they are also tested differently."}),"\n",(0,i.jsx)(n.li,{children:'You should use custom hooks in the exact same way you would use functions that you call inside other functions (naming, easier understanding, encapsulation, reuse, etc). Feel free to nest several, or put a couple in a file with only one "public" one.'}),"\n"]}),"\n",(0,i.jsx)(n.h6,{id:"q-should-i-use-a-custom-hook-or-should-i-build-a-context",children:"Q. Should I use a custom hook or should I build a Context?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:['This question should be answered identically to "Should I build a context, or should I just do things inside my component?"',"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"(Personal Opinion) If you plan on needing these items more than 3 components down (prop drill), use a context."}),"\n",(0,i.jsx)(n.li,{children:"If you need these items widely in a horizontal fashion (one component has no common parent to the other), use a context."}),"\n",(0,i.jsx)(n.li,{children:"In all other situations, use hook(s)."}),"\n",(0,i.jsx)(n.li,{children:"A hook is easier to convert to a Context than vice-versa."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"react-hook-dependency-arrays",children:"React Hook Dependency Arrays"}),"\n",(0,i.jsx)(n.h6,{id:"q-why-am-i-forced-to-populate-dependency-arrays-when-fill-in-the-blank-works-as-well-exhaustive-dependencies-eslint-rule",children:"Q. Why am I forced to populate dependency arrays when [fill in the blank] works as well? (Exhaustive Dependencies ESLint Rule)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Kent C. Dodds says it well in ",(0,i.jsx)(n.a,{href:"https://kentcdodds.com/blog/react-hooks-pitfalls#pitfall-2-not-using-or-ignoring-the-eslint-plugin",children:"Pitfall 2"}),"."]}),"\n",(0,i.jsx)(n.li,{children:"Basically, even though something works well right now, doesn't mean it is future-proof. Placing every dependency into the array future-proofs it."}),"\n",(0,i.jsx)(n.li,{children:"If you are finding that adding to the array has changed how it works, add conditionals until it runs how it should."}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"useEffect(() => {\n    if (thingThatWillMakeThisOnlyFireOnce) {\n        fire();\n    }\n}, [thingThatWillMakeThisOnlyFireOnce]);\n"})}),"\n",(0,i.jsx)(n.h6,{id:"q-what-about-a-blank-dependency-array-i-only-want-it-to-run-initially-so-im-good-there-right",children:"Q. What about a blank dependency array, I only want it to run initially, so I'm good there, right?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"A blank dependency array (when you have actual dependencies, not always the case) shares all the same downsides as a limited dependency array. Works today, maybe not tomorrow."}),"\n",(0,i.jsx)(n.li,{children:'The solution is the same, add a conditional. If you have no condition easily available to determine "initial", create one and then change it once you have ran your condition.'}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"const [isInitialRender, setIsInitialRender] = useState(true);\n"})}),"\n",(0,i.jsx)(n.h5,{id:"usememo--usecallback",children:"useMemo / useCallback"}),"\n",(0,i.jsx)(n.h6,{id:"q-when-should-i-usememo-and-when-should-i-useeffect--usestate",children:"Q. When should I useMemo and when should I useEffect + useState?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["useMemo (or possibly just creating an object) is nearly always the answer. useMemo performs better than useState + useEffect at 1 render per use.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If you are downstream from useQuery, nearly always useMemo. react-query's queryCache is your state."}),"\n",(0,i.jsx)(n.li,{children:"If you are downstream from state you control, useMemo."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"If you are in a situation where you are creating data from a non-api-call, and you are the source of truth, this is a great use case for useEffect + useState. (~1% of the time)"}),"\n"]}),"\n",(0,i.jsx)(n.h6,{id:"q-i-read-an-article-telling-me-not-to-usememo-are-they-right",children:"Q. I read an article telling me not to useMemo, are they right?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Generally these fall into a few categories.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"The article is actually about React.memo and useMemo got thrown in somehow. React.memo is the FunctionComponent equivalent of PureFunction and should be used sparingly."}),"\n",(0,i.jsxs)(n.li,{children:["The article is written by someone who is managing an extremely mature, stable React environment, and every performance profiling millisecond counts. If we ever get to this point, I will revise this answer, but it is unlikely. For us, we should value safety to not infinite loop over a few milliseconds.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://kentcdodds.com/blog/usememo-and-usecallback",children:"Kent C. Dodds getting into the minutia of exactly when and how"}),", for those who are interested in 100% maximization."]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h6,{id:"q-do-i-need-to-wrap-fill-in-the-blank-in-a-hook-or-can-i-just-create-a-non-wrapped-same-fill-in-the-blank-usecallback-for-functions-usememo-for-objects",children:"Q. Do I need to wrap [fill in the blank] in a hook, or can I just create a [non-wrapped same fill in the blank]? (useCallback for functions, useMemo for objects)"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"These hooks are tools to maintain or break referential equality when you desire. If you do not wrap, a new version (breaking referential equality) is created every render."}),"\n",(0,i.jsxs)(n.li,{children:["This answer is heavily dependent on where you are in the render tree.","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"If you are in the child-most component of your domain, you definitely DO NOT need to wrap anything in a hook. There is nothing downstream from you at risk."}),"\n",(0,i.jsx)(n.li,{children:"If you are in a global context, you definitely almost always DO need to wrap everything in a hook. There are untold amounts of downstream resources expecting you to handle this well."}),"\n",(0,i.jsx)(n.li,{children:"If you are in between, use your discretion, but when it doubt, wrap it."}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.li,{children:"(useMemo specific) This can also depend on what you RETURN from the useMemo. If it is a primitive (string, number, boolean), you DO NOT need to wrap in a useMemo unless the calculation is expensive."}),"\n"]}),"\n",(0,i.jsx)(n.h5,{id:"misc",children:"Misc"}),"\n",(0,i.jsx)(n.h6,{id:"q-why-if-it-is-is-it-better-to-use-a-ternary-for-a-conditional-render-than-a-short-circuit",children:"Q. why (if it is) is it better to use a ternary for a conditional render than a short circuit?"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"isTrue ? <Component /> : null"}),"\nvs.\n",(0,i.jsx)(n.code,{children:"isTrue && <Component />"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx",children:"https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx"})}),"\n",(0,i.jsx)(n.p,{children:"Basically its an edge case, but better safe than sorry. Sorry being having a random falsy value on the screen."}),"\n",(0,i.jsx)(n.h3,{id:"user-experience-ux",children:"User Experience (UX)"}),"\n",(0,i.jsx)(n.h4,{id:"forms",children:"Forms"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8",children:"Checkbox vs Toggle Switch"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>r});var i=t(6540);const a={},o=i.createContext(a);function s(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);