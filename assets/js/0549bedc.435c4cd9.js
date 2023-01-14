"use strict";(self.webpackChunkdkershner_com=self.webpackChunkdkershner_com||[]).push([[7871],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=u(a),m=o,p=h["".concat(s,".").concat(m)]||h[m]||d[m]||r;return a?n.createElement(p,i(i({ref:t},c),{},{components:a})):n.createElement(p,i({ref:t},c))}));function p(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[h]="string"==typeof e?e:o,i[1]=l;for(var u=2;u<r;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>u});var n=a(7462),o=(a(7294),a(3905));const r={title:"React FAQ",tags:["frontend","react"]},i="React FAQ",l={unversionedId:"react/react-faq",id:"react/react-faq",title:"React FAQ",description:"Categorized questions to help with some of the more advanced intracacies of React. When opinions, and not facts, are presented, it is noted.",source:"@site/docs/react/react-faq.md",sourceDirName:"react",slug:"/react/react-faq",permalink:"/resources/react/react-faq",draft:!1,tags:[{label:"frontend",permalink:"/resources/tags/frontend"},{label:"react",permalink:"/resources/tags/react"}],version:"current",lastUpdatedBy:"Derek Kershner",lastUpdatedAt:1673731459,formattedLastUpdatedAt:"Jan 14, 2023",frontMatter:{title:"React FAQ",tags:["frontend","react"]},sidebar:"docsSidebar",previous:{title:"Deploying Next.js Outside of Vercel",permalink:"/resources/react/nextjs-outside-vercel"}},s={},u=[{value:"Referential Equality",id:"referential-equality",level:4},{value:"Q. What is referential equality, how is it different from other equalities, and why is it important in React?",id:"q-what-is-referential-equality-how-is-it-different-from-other-equalities-and-why-is-it-important-in-react",level:5},{value:"React Hooks",id:"react-hooks",level:4},{value:"Custom React Hooks",id:"custom-react-hooks",level:5},{value:"Q. How should I think about custom React hooks in general?",id:"q-how-should-i-think-about-custom-react-hooks-in-general",level:6},{value:"Q. Should I use a custom hook or should I build a Context?",id:"q-should-i-use-a-custom-hook-or-should-i-build-a-context",level:6},{value:"React Hook Dependency Arrays",id:"react-hook-dependency-arrays",level:5},{value:"Q. Why am I forced to populate dependency arrays when fill in the blank works as well? (Exhaustive Dependencies ESLint Rule)",id:"q-why-am-i-forced-to-populate-dependency-arrays-when-fill-in-the-blank-works-as-well-exhaustive-dependencies-eslint-rule",level:6},{value:"Q. What about a blank dependency array, I only want it to run initially, so I&#39;m good there, right?",id:"q-what-about-a-blank-dependency-array-i-only-want-it-to-run-initially-so-im-good-there-right",level:6},{value:"useMemo / useCallback",id:"usememo--usecallback",level:5},{value:"Q. When should I useMemo and when should I useEffect + useState?",id:"q-when-should-i-usememo-and-when-should-i-useeffect--usestate",level:6},{value:"Q. I read an article telling me not to useMemo, are they right?",id:"q-i-read-an-article-telling-me-not-to-usememo-are-they-right",level:6},{value:"Q. Do I need to wrap fill in the blank in a hook, or can I just create a non-wrapped same fill in the blank? (useCallback for functions, useMemo for objects)",id:"q-do-i-need-to-wrap-fill-in-the-blank-in-a-hook-or-can-i-just-create-a-non-wrapped-same-fill-in-the-blank-usecallback-for-functions-usememo-for-objects",level:6},{value:"Misc",id:"misc",level:5},{value:"Q. why (if it is) is it better to use a ternary for a conditional render than a short circuit?",id:"q-why-if-it-is-is-it-better-to-use-a-ternary-for-a-conditional-render-than-a-short-circuit",level:6},{value:"User Experience (UX)",id:"user-experience-ux",level:3},{value:"Forms",id:"forms",level:4}],c={toc:u};function h(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"react-faq"},"React FAQ"),(0,o.kt)("p",null,"Categorized questions to help with some of the more advanced intracacies of React. When opinions, and not facts, are presented, it is noted."),(0,o.kt)("h4",{id:"referential-equality"},"Referential Equality"),(0,o.kt)("h5",{id:"q-what-is-referential-equality-how-is-it-different-from-other-equalities-and-why-is-it-important-in-react"},"Q. What is referential equality, how is it different from other equalities, and why is it important in React?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Referential equality means the object maintains, as opposed to creates anew, a reference through whatever actions are occurring."),(0,o.kt)("li",{parentName:"ul"},"Strict equality in Javascript, or ===, uses EXACT equality for primitives ('string' === 'string'), or REFERENTIAL equality for objects/arrays (","[1,2,3]"," !== ","[1,2,3]","). React uses this exact same logic to determine if something changed."),(0,o.kt)("li",{parentName:"ul"},'"Something changed" is the most important concept in React (hence the name). When something changes within a component, that component re-renders.',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'The most dangerous situation you can encounter is when something creates a render loop. This is when "something changed" causes another change in an infinite cycle. (see Dependency Array section for defense of this)'))),(0,o.kt)("li",{parentName:"ul"},"React has various tools to control referential equality built in. (See the useMemo / useCallback section for more details)"),(0,o.kt)("li",{parentName:"ul"},'"Render safety", a phrase I made up, is shorthand for "correctly handles referential equality so that all downstream components can rely on the output".')),(0,o.kt)("h4",{id:"react-hooks"},"React Hooks"),(0,o.kt)("h5",{id:"custom-react-hooks"},"Custom React Hooks"),(0,o.kt)("h6",{id:"q-how-should-i-think-about-custom-react-hooks-in-general"},"Q. How should I think about custom React hooks in general?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Hooks are 100% identical to functions aside from one fact: they can also access the native react hooks (useState, useMemo, etc)."),(0,o.kt)("li",{parentName:"ul"},"Because of this, they are also tested differently."),(0,o.kt)("li",{parentName:"ul"},'You should use custom hooks in the exact same way you would use functions that you call inside other functions (naming, easier understanding, encapsulation, reuse, etc). Feel free to nest several, or put a couple in a file with only one "public" one.')),(0,o.kt)("h6",{id:"q-should-i-use-a-custom-hook-or-should-i-build-a-context"},"Q. Should I use a custom hook or should I build a Context?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},'This question should be answered identically to "Should I build a context, or should I just do things inside my component?"',(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"(Personal Opinion) If you plan on needing these items more than 3 components down (prop drill), use a context."),(0,o.kt)("li",{parentName:"ul"},"If you need these items widely in a horizontal fashion (one component has no common parent to the other), use a context."),(0,o.kt)("li",{parentName:"ul"},"In all other situations, use hook(s)."),(0,o.kt)("li",{parentName:"ul"},"A hook is easier to convert to a Context than vice-versa.")))),(0,o.kt)("h5",{id:"react-hook-dependency-arrays"},"React Hook Dependency Arrays"),(0,o.kt)("h6",{id:"q-why-am-i-forced-to-populate-dependency-arrays-when-fill-in-the-blank-works-as-well-exhaustive-dependencies-eslint-rule"},"Q. Why am I forced to populate dependency arrays when ","[fill in the blank]"," works as well? (Exhaustive Dependencies ESLint Rule)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Kent C. Dodds says it well in ",(0,o.kt)("a",{parentName:"li",href:"https://kentcdodds.com/blog/react-hooks-pitfalls#pitfall-2-not-using-or-ignoring-the-eslint-plugin"},"Pitfall 2"),"."),(0,o.kt)("li",{parentName:"ul"},"Basically, even though something works well right now, doesn't mean it is future-proof. Placing every dependency into the array future-proofs it."),(0,o.kt)("li",{parentName:"ul"},"If you are finding that adding to the array has changed how it works, add conditionals until it runs how it should.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"useEffect(() => {\n    if (thingThatWillMakeThisOnlyFireOnce) {\n        fire();\n    }\n}, [thingThatWillMakeThisOnlyFireOnce]);\n")),(0,o.kt)("h6",{id:"q-what-about-a-blank-dependency-array-i-only-want-it-to-run-initially-so-im-good-there-right"},"Q. What about a blank dependency array, I only want it to run initially, so I'm good there, right?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A blank dependency array (when you have actual dependencies, not always the case) shares all the same downsides as a limited dependency array. Works today, maybe not tomorrow."),(0,o.kt)("li",{parentName:"ul"},'The solution is the same, add a conditional. If you have no condition easily available to determine "initial", create one and then change it once you have ran your condition.')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"const [isInitialRender, setIsInitialRender] = useState(true);\n")),(0,o.kt)("h5",{id:"usememo--usecallback"},"useMemo / useCallback"),(0,o.kt)("h6",{id:"q-when-should-i-usememo-and-when-should-i-useeffect--usestate"},"Q. When should I useMemo and when should I useEffect + useState?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"useMemo (or possibly just creating an object) is nearly always the answer. useMemo performs better than useState + useEffect at 1 render per use.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you are downstream from useQuery, nearly always useMemo. react-query's queryCache is your state."),(0,o.kt)("li",{parentName:"ul"},"If you are downstream from state you control, useMemo."))),(0,o.kt)("li",{parentName:"ul"},"If you are in a situation where you are creating data from a non-api-call, and you are the source of truth, this is a great use case for useEffect + useState. (~1% of the time)")),(0,o.kt)("h6",{id:"q-i-read-an-article-telling-me-not-to-usememo-are-they-right"},"Q. I read an article telling me not to useMemo, are they right?"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Generally these fall into a few categories.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"The article is actually about React.memo and useMemo got thrown in somehow. React.memo is the FunctionComponent equivalent of PureFunction and should be used sparingly."),(0,o.kt)("li",{parentName:"ul"},"The article is written by someone who is managing an extremely mature, stable React environment, and every performance profiling millisecond counts. If we ever get to this point, I will revise this answer, but it is unlikely. For us, we should value safety to not infinite loop over a few milliseconds.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://kentcdodds.com/blog/usememo-and-usecallback"},"Kent C. Dodds getting into the minutia of exactly when and how"),", for those who are interested in 100% maximization.")))))),(0,o.kt)("h6",{id:"q-do-i-need-to-wrap-fill-in-the-blank-in-a-hook-or-can-i-just-create-a-non-wrapped-same-fill-in-the-blank-usecallback-for-functions-usememo-for-objects"},"Q. Do I need to wrap ","[fill in the blank]"," in a hook, or can I just create a ","[non-wrapped same fill in the blank]","? (useCallback for functions, useMemo for objects)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"These hooks are tools to maintain or break referential equality when you desire. If you do not wrap, a new version (breaking referential equality) is created every render."),(0,o.kt)("li",{parentName:"ul"},"This answer is heavily dependent on where you are in the render tree.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"If you are in the child-most component of your domain, you definitely DO NOT need to wrap anything in a hook. There is nothing downstream from you at risk."),(0,o.kt)("li",{parentName:"ul"},"If you are in a global context, you definitely almost always DO need to wrap everything in a hook. There are untold amounts of downstream resources expecting you to handle this well."),(0,o.kt)("li",{parentName:"ul"},"If you are in between, use your discretion, but when it doubt, wrap it."))),(0,o.kt)("li",{parentName:"ul"},"(useMemo specific) This can also depend on what you RETURN from the useMemo. If it is a primitive (string, number, boolean), you DO NOT need to wrap in a useMemo unless the calculation is expensive.")),(0,o.kt)("h5",{id:"misc"},"Misc"),(0,o.kt)("h6",{id:"q-why-if-it-is-is-it-better-to-use-a-ternary-for-a-conditional-render-than-a-short-circuit"},"Q. why (if it is) is it better to use a ternary for a conditional render than a short circuit?"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"isTrue ? <Component /> : null"),"\nvs.\n",(0,o.kt)("inlineCode",{parentName:"p"},"isTrue && <Component />")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx"},"https://kentcdodds.com/blog/use-ternaries-rather-than-and-and-in-jsx")),(0,o.kt)("p",null,"Basically its an edge case, but better safe than sorry. Sorry being having a random falsy value on the screen."),(0,o.kt)("h3",{id:"user-experience-ux"},"User Experience (UX)"),(0,o.kt)("h4",{id:"forms"},"Forms"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://uxplanet.org/checkbox-vs-toggle-switch-7fc6e83f10b8"},"Checkbox vs Toggle Switch"))))}h.isMDXComponent=!0}}]);