(self.webpackChunkdkershner_com=self.webpackChunkdkershner_com||[]).push([[8553],{8820:(e,t,n)=>{"use strict";n.d(t,{A:()=>p});var o=n(6540),r=n(4164),i=n(8040),a=n(1848),s=n(5669),c=n(2850),l=n(8413),d=n(1609);function u(e){return(0,d.Ay)("MuiList",e)}(0,l.A)("MuiList",["root","padding","dense","subheader"]);var f=n(4848);const m=(0,a.Ay)("ul",{name:"MuiList",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.disablePadding&&t.padding,n.dense&&t.dense,n.subheader&&t.subheader]}})({listStyle:"none",margin:0,padding:0,position:"relative",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>e.subheader,style:{paddingTop:0}}]}),p=o.forwardRef((function(e,t){const n=(0,s.b)({props:e,name:"MuiList"}),{children:a,className:l,component:d="ul",dense:p=!1,disablePadding:h=!1,subheader:g,...y}=n,b=o.useMemo((()=>({dense:p})),[p]),v={...n,component:d,dense:p,disablePadding:h},S=(e=>{const{classes:t,disablePadding:n,dense:o,subheader:r}=e,a={root:["root",!n&&"padding",o&&"dense",r&&"subheader"]};return(0,i.A)(a,u,t)})(v);return(0,f.jsx)(c.A.Provider,{value:b,children:(0,f.jsxs)(m,{as:d,className:(0,r.A)(S.root,l),ref:t,ownerState:v,...y,children:[g,a]})})}))},2850:(e,t,n)=>{"use strict";n.d(t,{A:()=>o});const o=n(6540).createContext({})},787:(e,t,n)=>{"use strict";n.d(t,{Ay:()=>k});var o=n(6540),r=n(4164),i=n(8040);const a=function(e){return"string"==typeof e};var s=n(1848),c=n(9559),l=n(5669);const d=n(8473).A;var u=n(690),f=n(2850),m=n(8413),p=n(1609);function h(e){return(0,p.Ay)("MuiListItem",e)}(0,m.A)("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);var g=n(2927);function y(e){return(0,p.Ay)("MuiListItemSecondaryAction",e)}(0,m.A)("MuiListItemSecondaryAction",["root","disableGutters"]);var b=n(4848);const v=(0,s.Ay)("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),S=o.forwardRef((function(e,t){const n=(0,l.b)({props:e,name:"MuiListItemSecondaryAction"}),{className:a,...s}=n,c=o.useContext(f.A),d={...n,disableGutters:c.disableGutters},u=(e=>{const{disableGutters:t,classes:n}=e,o={root:["root",t&&"disableGutters"]};return(0,i.A)(o,y,n)})(d);return(0,b.jsx)(v,{className:(0,r.A)(u.root,a),ownerState:d,ref:t,...s})}));S.muiName="ListItemSecondaryAction";const w=S,x=(0,s.Ay)("div",{name:"MuiListItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters,!n.disablePadding&&t.padding,n.hasSecondaryAction&&t.secondaryAction]}})((0,c.A)((({theme:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:e})=>!e.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:e})=>!e.disablePadding&&e.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:e})=>!e.disablePadding&&!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>!e.disablePadding&&!!e.secondaryAction,style:{paddingRight:48}},{props:({ownerState:e})=>!!e.secondaryAction,style:{[`& > .${g.A.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:e})=>e.button,style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:e})=>e.hasSecondaryAction,style:{paddingRight:48}}]})))),C=(0,s.Ay)("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),k=o.forwardRef((function(e,t){const n=(0,l.b)({props:e,name:"MuiListItem"}),{alignItems:s="center",children:c,className:m,component:p,components:g={},componentsProps:y={},ContainerComponent:v="li",ContainerProps:{className:S,...k}={},dense:I=!1,disableGutters:A=!1,disablePadding:M=!1,divider:P=!1,secondaryAction:O,slotProps:j={},slots:_={},...R}=n,L=o.useContext(f.A),$=o.useMemo((()=>({dense:I||L.dense||!1,alignItems:s,disableGutters:A})),[s,L.dense,I,A]),E=o.useRef(null),D=o.Children.toArray(c),N=D.length&&d(D[D.length-1],["ListItemSecondaryAction"]),B={...n,alignItems:s,dense:$.dense,disableGutters:A,disablePadding:M,divider:P,hasSecondaryAction:N},H=(e=>{const{alignItems:t,classes:n,dense:o,disableGutters:r,disablePadding:a,divider:s,hasSecondaryAction:c}=e,l={root:["root",o&&"dense",!r&&"gutters",!a&&"padding",s&&"divider","flex-start"===t&&"alignItemsFlexStart",c&&"secondaryAction"],container:["container"]};return(0,i.A)(l,h,n)})(B),T=(0,u.A)(E,t),W=_.root||g.Root||x,z=j.root||y.root||{},F={className:(0,r.A)(H.root,z.className,m),...R};let V=p||"li";return N?(V=F.component||p?V:"div","li"===v&&("li"===V?V="div":"li"===F.component&&(F.component="div")),(0,b.jsx)(f.A.Provider,{value:$,children:(0,b.jsxs)(C,{as:v,className:(0,r.A)(H.container,S),ref:T,ownerState:B,...k,children:[(0,b.jsx)(W,{...z,...!a(W)&&{as:V,ownerState:{...B,...z.ownerState}},...F,children:D}),D.pop()]})})):(0,b.jsx)(f.A.Provider,{value:$,children:(0,b.jsxs)(W,{...z,as:V,ref:T,...!a(W)&&{ownerState:{...B,...z.ownerState}},...F,children:[D,O&&(0,b.jsx)(w,{children:O})]})})}))},2510:(e,t,n)=>{"use strict";n.d(t,{A:()=>b});var o=n(6540),r=n(4164),i=n(8040),a=n(4136),s=n(1848),c=n(9559),l=n(5669),d=n(3169),u=n(3745);const f=n(1529).A;var m=n(690),p=n(2850),h=n(2927),g=n(4848);const y=(0,s.Ay)(u.A,{shouldForwardProp:e=>(0,d.A)(e)||"classes"===e,name:"MuiListItemButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.dense&&t.dense,"flex-start"===n.alignItems&&t.alignItemsFlexStart,n.divider&&t.divider,!n.disableGutters&&t.gutters]}})((0,c.A)((({theme:e})=>({display:"flex",flexGrow:1,justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minWidth:0,boxSizing:"border-box",textAlign:"left",paddingTop:8,paddingBottom:8,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${h.A.selected}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,a.X4)(e.palette.primary.main,e.palette.action.selectedOpacity),[`&.${h.A.focusVisible}`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))`:(0,a.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.focusOpacity)}},[`&.${h.A.selected}:hover`]:{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))`:(0,a.X4)(e.palette.primary.main,e.palette.action.selectedOpacity+e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:e.vars?`rgba(${e.vars.palette.primary.mainChannel} / ${e.vars.palette.action.selectedOpacity})`:(0,a.X4)(e.palette.primary.main,e.palette.action.selectedOpacity)}},[`&.${h.A.focusVisible}`]:{backgroundColor:(e.vars||e).palette.action.focus},[`&.${h.A.disabled}`]:{opacity:(e.vars||e).palette.action.disabledOpacity},variants:[{props:({ownerState:e})=>e.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:e})=>!e.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:e})=>e.dense,style:{paddingTop:4,paddingBottom:4}}]})))),b=o.forwardRef((function(e,t){const n=(0,l.b)({props:e,name:"MuiListItemButton"}),{alignItems:a="center",autoFocus:s=!1,component:c="div",children:d,dense:u=!1,disableGutters:b=!1,divider:v=!1,focusVisibleClassName:S,selected:w=!1,className:x,...C}=n,k=o.useContext(p.A),I=o.useMemo((()=>({dense:u||k.dense||!1,alignItems:a,disableGutters:b})),[a,k.dense,u,b]),A=o.useRef(null);f((()=>{s&&A.current&&A.current.focus()}),[s]);const M={...n,alignItems:a,dense:I.dense,disableGutters:b,divider:v,selected:w},P=(e=>{const{alignItems:t,classes:n,dense:o,disabled:r,disableGutters:a,divider:s,selected:c}=e,l={root:["root",o&&"dense",!a&&"gutters",s&&"divider",r&&"disabled","flex-start"===t&&"alignItemsFlexStart",c&&"selected"]},d=(0,i.A)(l,h.Y,n);return{...n,...d}})(M),O=(0,m.A)(A,t);return(0,g.jsx)(p.A.Provider,{value:I,children:(0,g.jsx)(y,{ref:O,href:C.href||C.to,component:(C.href||C.to)&&"div"===c?"button":c,focusVisibleClassName:(0,r.A)(P.focusVisible,S),ownerState:M,className:(0,r.A)(P.root,x),...C,classes:P,children:d})})}))},2927:(e,t,n)=>{"use strict";n.d(t,{A:()=>a,Y:()=>i});var o=n(8413),r=n(1609);function i(e){return(0,r.Ay)("MuiListItemButton",e)}const a=(0,o.A)("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"])},7199:(e,t,n)=>{"use strict";n.d(t,{A:()=>D});var o=n(6540);const r=o.createContext(null);function i(){return o.useContext(r)}const a="function"==typeof Symbol&&Symbol.for?Symbol.for("mui.nested"):"__THEME_NESTED__";var s=n(4848);const c=function(e){const{children:t,theme:n}=e,c=i(),l=o.useMemo((()=>{const e=null===c?{...n}:function(e,t){if("function"==typeof t)return t(e);return{...e,...t}}(c,n);return null!=e&&(e[a]=null!==c),e}),[n,c]);return(0,s.jsx)(r.Provider,{value:l,children:t})};var l=n(9214),d=n(5463);const u=o.createContext();const f=function({value:e,...t}){return(0,s.jsx)(u.Provider,{value:e??!0,...t})};var m=n(2221);const p={};function h(e,t,n,r=!1){return o.useMemo((()=>{const o=e&&t[e]||t;if("function"==typeof n){const i=n(o),a=e?{...t,[e]:i}:i;return r?()=>a:a}return e?{...t,[e]:n}:{...t,...n}}),[e,t,n,r])}const g=function(e){const{children:t,theme:n,themeId:o}=e,r=(0,d.A)(p),a=i()||p,u=h(o,r,n),g=h(o,a,n,!0),y="rtl"===u.direction;return(0,s.jsx)(c,{theme:g,children:(0,s.jsx)(l.T.Provider,{value:u,children:(0,s.jsx)(f,{value:y,children:(0,s.jsx)(m.A,{value:u?.components,children:t})})})})};var y=n(8312);function b({theme:e,...t}){const n=y.A in e?e[y.A]:void 0;return(0,s.jsx)(g,{...t,themeId:n?y.A:void 0,theme:n||e})}var v=n(3571),S=n(7437);function w(e){const{styles:t,defaultTheme:n={}}=e,o="function"==typeof t?e=>{return t(null==(o=e)||0===Object.keys(o).length?n:e);var o}:t;return(0,s.jsx)(S.mL,{styles:o})}const x="mode",C="color-scheme",k="data-color-scheme";function I(e){if("undefined"!=typeof window&&"function"==typeof window.matchMedia&&"system"===e){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}}function A(e,t){return"light"===e.mode||"system"===e.mode&&"light"===e.systemMode?t("light"):"dark"===e.mode||"system"===e.mode&&"dark"===e.systemMode?t("dark"):void 0}function M(e,t){if("undefined"==typeof window)return;let n;try{n=localStorage.getItem(e)||void 0,n||localStorage.setItem(e,t)}catch{}return n||t}function P(e){const{defaultMode:t="light",defaultLightColorScheme:n,defaultDarkColorScheme:r,supportedColorSchemes:i=[],modeStorageKey:a=x,colorSchemeStorageKey:s=C,storageWindow:c=("undefined"==typeof window?void 0:window)}=e,l=i.join(","),d=i.length>1,[u,f]=o.useState((()=>{const e=M(a,t),o=M(`${s}-light`,n),i=M(`${s}-dark`,r);return{mode:e,systemMode:I(e),lightColorScheme:o,darkColorScheme:i}})),[,m]=o.useState(!1),p=o.useRef(!1);o.useEffect((()=>{d&&m(!0),p.current=!0}),[d]);const h=function(e){return A(e,(t=>"light"===t?e.lightColorScheme:"dark"===t?e.darkColorScheme:void 0))}(u),g=o.useCallback((e=>{f((n=>{if(e===n.mode)return n;const o=e??t;try{localStorage.setItem(a,o)}catch{}return{...n,mode:o,systemMode:I(o)}}))}),[a,t]),y=o.useCallback((e=>{e?"string"==typeof e?e&&!l.includes(e)?console.error(`\`${e}\` does not exist in \`theme.colorSchemes\`.`):f((t=>{const n={...t};return A(t,(t=>{try{localStorage.setItem(`${s}-${t}`,e)}catch{}"light"===t&&(n.lightColorScheme=e),"dark"===t&&(n.darkColorScheme=e)})),n})):f((t=>{const o={...t},i=null===e.light?n:e.light,a=null===e.dark?r:e.dark;if(i)if(l.includes(i)){o.lightColorScheme=i;try{localStorage.setItem(`${s}-light`,i)}catch(c){}}else console.error(`\`${i}\` does not exist in \`theme.colorSchemes\`.`);if(a)if(l.includes(a)){o.darkColorScheme=a;try{localStorage.setItem(`${s}-dark`,a)}catch(c){}}else console.error(`\`${a}\` does not exist in \`theme.colorSchemes\`.`);return o})):f((e=>{try{localStorage.setItem(`${s}-light`,n),localStorage.setItem(`${s}-dark`,r)}catch{}return{...e,lightColorScheme:n,darkColorScheme:r}}))}),[l,s,n,r]),b=o.useCallback((e=>{"system"===u.mode&&f((t=>{const n=e?.matches?"dark":"light";return t.systemMode===n?t:{...t,systemMode:n}}))}),[u.mode]),v=o.useRef(b);return v.current=b,o.useEffect((()=>{if("function"!=typeof window.matchMedia||!d)return;const e=(...e)=>v.current(...e),t=window.matchMedia("(prefers-color-scheme: dark)");return t.addListener(e),e(t),()=>{t.removeListener(e)}}),[d]),o.useEffect((()=>{if(c&&d){const e=e=>{const n=e.newValue;"string"!=typeof e.key||!e.key.startsWith(s)||n&&!l.match(n)||(e.key.endsWith("light")&&y({light:n}),e.key.endsWith("dark")&&y({dark:n})),e.key!==a||n&&!["light","dark","system"].includes(n)||g(n||t)};return c.addEventListener("storage",e),()=>{c.removeEventListener("storage",e)}}}),[y,g,a,s,l,t,c,d]),{...u,mode:p.current||!d?u.mode:void 0,systemMode:p.current||!d?u.systemMode:void 0,colorScheme:p.current||!d?h:void 0,setMode:g,setColorScheme:y}}var O=n(8842),j=n(4778);const _={attribute:"data-mui-color-scheme",colorSchemeStorageKey:"mui-color-scheme",defaultLightColorScheme:"light",defaultDarkColorScheme:"dark",modeStorageKey:"mui-mode"},{CssVarsProvider:R,useColorScheme:L,getInitColorSchemeScript:$}=function(e){const{themeId:t,theme:n={},modeStorageKey:r=x,colorSchemeStorageKey:a=C,disableTransitionOnChange:c=!1,defaultColorScheme:l,resolveTheme:d}=e,u={allColorSchemes:[],colorScheme:void 0,darkColorScheme:void 0,lightColorScheme:void 0,mode:void 0,setColorScheme:()=>{},setMode:()=>{},systemMode:void 0},f=o.createContext(void 0),m="string"==typeof l?l:l.light,p="string"==typeof l?l:l.dark;return{CssVarsProvider:function(e){const{children:u,theme:m,modeStorageKey:p=r,colorSchemeStorageKey:h=a,disableTransitionOnChange:y=c,storageWindow:b=("undefined"==typeof window?void 0:window),documentNode:v=("undefined"==typeof document?void 0:document),colorSchemeNode:S=("undefined"==typeof document?void 0:document.documentElement),disableNestedContext:x=!1,disableStyleSheetGeneration:C=!1,defaultMode:k="system"}=e,I=o.useRef(!1),A=i(),M=o.useContext(f),O=!!M&&!x,j=o.useMemo((()=>m||("function"==typeof n?n():n)),[m]),_=j[t],{colorSchemes:R={},components:L={},cssVarPrefix:$,...E}=_||j,D=Object.keys(R).filter((e=>!!R[e])).join(","),N=o.useMemo((()=>D.split(",")),[D]),B="string"==typeof l?l:l.light,H="string"==typeof l?l:l.dark,T=R[B]&&R[H]?k:R[E.defaultColorScheme]?.palette?.mode||E.palette?.mode,{mode:W,setMode:z,systemMode:F,lightColorScheme:V,darkColorScheme:G,colorScheme:K,setColorScheme:U}=P({supportedColorSchemes:N,defaultLightColorScheme:B,defaultDarkColorScheme:H,modeStorageKey:p,colorSchemeStorageKey:h,defaultMode:T,storageWindow:b});let X=W,q=K;O&&(X=M.mode,q=M.colorScheme);const Y=q||E.defaultColorScheme,J=E.generateThemeVars?.()||E.vars,Q={...E,components:L,colorSchemes:R,cssVarPrefix:$,vars:J};if("function"==typeof Q.generateSpacing&&(Q.spacing=Q.generateSpacing()),Y){const e=R[Y];e&&"object"==typeof e&&Object.keys(e).forEach((t=>{e[t]&&"object"==typeof e[t]?Q[t]={...Q[t],...e[t]}:Q[t]=e[t]}))}const Z=E.colorSchemeSelector;o.useEffect((()=>{if(q&&S&&Z&&"media"!==Z){const e=Z;let t=Z;if("class"===e&&(t=".%s"),"data"===e&&(t="[data-%s]"),e?.startsWith("data-")&&!e.includes("%s")&&(t=`[${e}="%s"]`),t.startsWith("."))S.classList.remove(...N.map((e=>t.substring(1).replace("%s",e)))),S.classList.add(t.substring(1).replace("%s",q));else{const e=t.replace("%s",q).match(/\[([^\]]+)\]/);if(e){const[t,n]=e[1].split("=");n||N.forEach((e=>{S.removeAttribute(t.replace(q,e))})),S.setAttribute(t,n?n.replace(/"|'/g,""):"")}else S.setAttribute(t,q)}}}),[q,Z,S,N]),o.useEffect((()=>{let e;if(y&&I.current&&v){const t=v.createElement("style");t.appendChild(v.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),v.head.appendChild(t),window.getComputedStyle(v.body),e=setTimeout((()=>{v.head.removeChild(t)}),1)}return()=>{clearTimeout(e)}}),[q,y,v]),o.useEffect((()=>(I.current=!0,()=>{I.current=!1})),[]);const ee=o.useMemo((()=>({allColorSchemes:N,colorScheme:q,darkColorScheme:G,lightColorScheme:V,mode:X,setColorScheme:U,setMode:z,systemMode:F})),[N,q,G,V,X,U,z,F]);let te=!0;(C||!1===E.cssVariables||O&&A?.cssVarPrefix===$)&&(te=!1);const ne=(0,s.jsxs)(o.Fragment,{children:[(0,s.jsx)(g,{themeId:_?t:void 0,theme:d?d(Q):Q,children:u}),te&&(0,s.jsx)(w,{styles:Q.generateStyleSheets?.()||[]})]});return O?ne:(0,s.jsx)(f.Provider,{value:ee,children:ne})},useColorScheme:()=>o.useContext(f)||u,getInitColorSchemeScript:e=>function(e){const{defaultLightColorScheme:t="light",defaultDarkColorScheme:n="dark",modeStorageKey:o=x,colorSchemeStorageKey:r=C,attribute:i=k,colorSchemeNode:a="document.documentElement",nonce:c}=e||{};let l="",d=i;if("class"===i&&(d=".%s"),"data"===i&&(d="[data-%s]"),d.startsWith(".")){const e=d.substring(1);l+=`${a}.classList.remove('${e}'.replace('%s', light), '${e}'.replace('%s', dark));\n      ${a}.classList.add('${e}'.replace('%s', colorScheme));`}const u=d.match(/\[([^\]]+)\]/);if(u){const[e,t]=u[1].split("=");t||(l+=`${a}.removeAttribute('${e}'.replace('%s', light));\n      ${a}.removeAttribute('${e}'.replace('%s', dark));`),l+=`\n      ${a}.setAttribute('${e}'.replace('%s', colorScheme), ${t?`${t}.replace('%s', colorScheme)`:'""'});`}else l+=`${a}.setAttribute('${d}', colorScheme);`;return(0,s.jsx)("script",{suppressHydrationWarning:!0,nonce:"undefined"==typeof window?c:"",dangerouslySetInnerHTML:{__html:`(function() {\ntry {\n  let colorScheme = '';\n  const mode = localStorage.getItem('${o}') || 'system';\n  const dark = localStorage.getItem('${r}-dark') || '${n}';\n  const light = localStorage.getItem('${r}-light') || '${t}';\n  if (mode === 'system') {\n    // handle system mode\n    const mql = window.matchMedia('(prefers-color-scheme: dark)');\n    if (mql.matches) {\n      colorScheme = dark\n    } else {\n      colorScheme = light\n    }\n  }\n  if (mode === 'light') {\n    colorScheme = light;\n  }\n  if (mode === 'dark') {\n    colorScheme = dark;\n  }\n  if (colorScheme) {\n    ${l}\n  }\n} catch(e){}})();`}},"mui-color-scheme-init")}({colorSchemeStorageKey:a,defaultLightColorScheme:m,defaultDarkColorScheme:p,modeStorageKey:r,...e})}}({themeId:y.A,theme:()=>(0,O.A)({cssVariables:!0}),colorSchemeStorageKey:_.colorSchemeStorageKey,modeStorageKey:_.modeStorageKey,defaultColorScheme:{light:_.defaultLightColorScheme,dark:_.defaultDarkColorScheme},resolveTheme:e=>{const t={...e,typography:(0,j.A)(e.palette,e.typography)};return t.unstable_sx=function(e){return(0,v.A)({sx:e,theme:this})},t}});const E=R;function D({theme:e,...t}){if("function"==typeof e)return(0,s.jsx)(b,{theme:e,...t});return"colorSchemes"in(y.A in e?e[y.A]:e)?(0,s.jsx)(E,{theme:e,...t}):(0,s.jsx)(b,{theme:e,...t})}},5396:(e,t,n)=>{"use strict";n.d(t,{A:()=>l});var o=n(9453);function r(e){return String(parseFloat(e)).length===String(e).length}function i(e){return parseFloat(e)}function a(e){return(t,n)=>{const o=String(t).match(/[\d.\-+]*\s*(.*)/)[1]||"";if(o===n)return t;let r=i(t);"px"!==o&&("em"===o||"rem"===o)&&(r=i(t)*i(e));let a=r;if("px"!==n)if("em"===n)a=r/i(e);else{if("rem"!==n)return t;a=r/i(e)}return parseFloat(a.toFixed(5))+n}}function s({lineHeight:e,pixels:t,htmlFontSize:n}){return t/(e*n)}function c({cssProperty:e,min:t,max:n,unit:o="rem",breakpoints:r=[600,900,1200],transform:i=null}){const a={[e]:`${t}${o}`},s=(n-t)/r[r.length-1];return r.forEach((n=>{let r=t+s*n;null!==i&&(r=i(r)),a[`@media (min-width:${n}px)`]={[e]:`${Math.round(1e4*r)/1e4}${o}`}})),a}function l(e,t={}){const{breakpoints:n=["sm","md","lg"],disableAlign:i=!1,factor:l=2,variants:d=["h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","caption","button","overline"]}=t,u={...e};u.typography={...u.typography};const f=u.typography,m=a(f.htmlFontSize),p=n.map((e=>u.breakpoints.values[e]));return d.forEach((e=>{const t=f[e];if(!t)return;const n=parseFloat(m(t.fontSize,"rem"));if(n<=1)return;const a=n,d=1+(a-1)/l;let{lineHeight:u}=t;if(!r(u)&&!i)throw new Error((0,o.A)(6));r(u)||(u=parseFloat(m(u,"rem"))/parseFloat(n));let h=null;i||(h=e=>function({size:e,grid:t}){const n=e-e%t,o=n+t;return e-n<o-e?n:o}({size:e,grid:s({pixels:4,lineHeight:u,htmlFontSize:f.htmlFontSize})})),f[e]={...t,...c({cssProperty:"fontSize",min:d,max:a,unit:"rem",breakpoints:p,transform:h})}})),u}},7248:function(e,t,n){var o;"undefined"!=typeof self&&self,o=function(e){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=3)}([function(t,n){t.exports=e},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}function a(e,t){return(a=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function s(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=c(e);if(t){var i=c(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,n)}}function c(e){return(c=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var l=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var d=l(n(0)),u=function(e){i(n,e);var t=s(n);function n(){return r(this,n),t.apply(this,arguments)}return n}(d.default.Component);t.Parallax=u;var f=function(e){i(n,e);var t=s(n);function n(){return r(this,n),t.apply(this,arguments)}return n}(d.default.Component);t.Background=f},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.canUseDOM=t.getNodeHeight=t.isScrolledIntoView=t.getWindowHeight=void 0,t.getWindowHeight=function(e){if(!e)return 0;var t=window,n=document,o=n.documentElement,r=n.getElementsByTagName("body")[0];return t.innerHeight||o.clientHeight||r.clientHeight},t.isScrolledIntoView=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,o=arguments.length>2?arguments[2]:void 0;if(!o)return!1;var r=e.getBoundingClientRect().top-n,i=e.getBoundingClientRect().bottom+n;return r<=t.getWindowHeight(o)&&i>=0},t.getNodeHeight=function(e,n){return e?n&&"clientHeight"in n?n.clientHeight:t.getWindowHeight(e):0},t.canUseDOM=function(){return!("undefined"==typeof window||!window.document||!window.document.createElement)}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.Background=t.Parallax=void 0;var r=o(n(4));t.Parallax=r.default;var i=o(n(7));t.Background=i.default},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=c(n(0)),d=n(1),u=n(5),f=n(2),m=c(n(6)),p={position:"absolute",left:"50%",WebkitTransform:"translate3d(-50%, 0, 0)",transform:"translate3d(-50%, 0, 0)",WebkitTransformStyle:"preserve-3d",WebkitBackfaceVisibility:"hidden",MozBackfaceVisibility:"hidden",MsBackfaceVisibility:"hidden"},h=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,e);var t=a(n);function n(e){var o;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),(o=t.call(this,e)).onWindowResize=function(){o.parentHeight=f.getNodeHeight(o.canUseDOM,o.parent),o.updatePosition()},o.onWindowLoad=function(){o.updatePosition()},o.onScroll=function(){if(o.canUseDOM){var e=Date.now();e-o.timestamp>=10&&f.isScrolledIntoView(o.node,100,o.canUseDOM)&&(window.requestAnimationFrame(o.updatePosition),o.timestamp=e)}},o.onContentMount=function(e){o.content=e},o.updatePosition=function(){if(o.content){var e=!1;o.contentHeight=o.content.getBoundingClientRect().height,o.contentWidth=o.node.getBoundingClientRect().width,o.img&&o.img.naturalWidth/o.img.naturalHeight<o.contentWidth/o.getImageHeight()&&(e=!0);var t=u.getRelativePosition(o.node,o.canUseDOM),n=!!o.img,r=o.bg&&o.state.splitChildren.bgChildren.length>0;n&&o.setImagePosition(t,e),r&&o.setBackgroundPosition(t),n||r||o.setState({percentage:t})}},o.state={bgImage:e.bgImage,bgImageSrcSet:e.bgImageSrcSet,bgImageSizes:e.bgImageSizes,imgStyle:p,bgStyle:Object.assign(Object.assign({},p),e.bgStyle),percentage:0,splitChildren:u.getSplitChildren(e)},o.canUseDOM=f.canUseDOM(),o.node=null,o.content=null,o.bgImageLoaded=!1,o.bgImageRef=void 0,o.parent=e.parent,o.parentHeight=f.getNodeHeight(o.canUseDOM,o.parent),o.timestamp=Date.now(),o.isDynamicBlur=u.getHasDynamicBlur(e.blur),o}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(n,[{key:"componentDidMount",value:function(){var e=this.props.parent,t=this.state,n=t.bgImage,o=t.bgImageSrcSet,r=t.bgImageSizes;this.parent=e||document,this.addListeners(),n?this.loadImage(n,o,r):this.updatePosition()}},{key:"componentDidUpdate",value:function(e){var t=this.props,n=t.parent,o=t.bgImage,r=t.bgImageSrcSet,i=t.bgImageSizes,a=this.state.bgImage;e.parent!==n&&(this.removeListeners(this.parent),this.parent=n,n&&this.addListeners()),this.parentHeight=f.getNodeHeight(this.canUseDOM,this.parent),a!==o&&this.loadImage(o,r,i)}},{key:"componentWillUnmount",value:function(){this.removeListeners(this.parent),this.releaseImage()}},{key:"setBackgroundPosition",value:function(e){var t=this.props,n=t.disabled,o=t.strength,r=Object.assign({},this.state.bgStyle);if(!n){var i="translate3d(-50%, ".concat((o<0?o:0)-o*e,"px, 0)");r.WebkitTransform=i,r.transform=i}this.setState({bgStyle:r,percentage:e})}},{key:"setImagePosition",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=this.props,o=n.disabled,r=n.strength,i=n.blur,a=t?"auto":"".concat(this.getImageHeight(),"px"),s=t?"".concat(this.contentWidth,"px"):"auto",c=Object.assign(Object.assign({},this.state.imgStyle),{height:a,width:s});if(!o){var l="translate3d(-50%, ".concat((r<0?r:0)-r*e,"px, 0)"),d="none";i&&(d="blur(".concat(u.getBlurValue(this.isDynamicBlur,i,e),"px)")),c.WebkitTransform=l,c.transform=l,c.WebkitFilter=d,c.filter=d}this.setState({imgStyle:c,percentage:e})}},{key:"getImageHeight",value:function(){var e=this.props.strength,t=(e<0?2.5:1)*Math.abs(e);return Math.floor(this.contentHeight+t)}},{key:"loadImage",value:function(e,t,n){var o=this;this.releaseImage(),this.bgImageRef=new Image,this.bgImageRef.onload=function(r){o.setState({bgImage:e,bgImageSrcSet:t,bgImageSizes:n},(function(){return o.updatePosition()})),o.props.onLoad&&o.props.onLoad(r)},this.bgImageRef.onerror=this.bgImageRef.onload,this.bgImageRef.src=e,this.bgImageRef.srcset=t||"",this.bgImageRef.sizes=n||""}},{key:"releaseImage",value:function(){this.bgImageRef&&(this.bgImageRef.onload=null,this.bgImageRef.onerror=null,delete this.bgImageRef)}},{key:"addListeners",value:function(){this.canUseDOM&&this.parent&&(this.parent.addEventListener("scroll",this.onScroll,!1),window.addEventListener("resize",this.onWindowResize,!1),window.addEventListener("load",this.onWindowLoad,!1))}},{key:"removeListeners",value:function(e){this.canUseDOM&&(e&&e.removeEventListener("scroll",this.onScroll,!1),window.removeEventListener("resize",this.onWindowResize,!1),window.removeEventListener("load",this.onWindowLoad,!1))}},{key:"render",value:function(){var e=this,t=this.props,n=t.className,o=t.style,r=t.bgClassName,i=t.contentClassName,a=t.bgImageAlt,s=t.renderLayer,c=t.bgImageStyle,d=t.lazy,u=this.state,f=u.bgImage,p=u.bgImageSrcSet,h=u.bgImageSizes,g=u.percentage,y=u.imgStyle,b=u.bgStyle,v=u.splitChildren;return l.default.createElement("div",{className:"react-parallax ".concat(n),style:Object.assign({position:"relative",overflow:"hidden"},o),ref:function(t){e.node=t}},f?l.default.createElement("img",{className:r,src:f,srcSet:p,sizes:h,ref:function(t){e.img=t},alt:a,style:Object.assign(Object.assign({},y),c),loading:d?"lazy":"eager"}):null,s?s(-(g-1)):null,v.bgChildren.length>0?l.default.createElement("div",{className:"react-parallax-background-children",ref:function(t){e.bg=t},style:b},v.bgChildren):null,l.default.createElement(m.default,{onMount:this.onContentMount,className:i},v.children))}}],[{key:"getDerivedStateFromProps",value:function(e){return{splitChildren:u.getSplitChildren(e)}}}]),n}(d.Parallax);h.defaultProps={bgClassName:"react-parallax-bgimage",bgImageAlt:"",className:"",contentClassName:"",disabled:!1,strength:100},t.default=h},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.setBlur=t.getBlurValue=t.getHasDynamicBlur=t.getSplitChildren=t.getRelativePosition=t.getPercentage=void 0;var r=n(0),i=n(2);t.getPercentage=function(e,t,n){return(n-e)/(t-e)||0},t.getRelativePosition=function(e,n){if(!n)return 0;var o=e.getBoundingClientRect(),r=o.top,a=o.height,s=i.getNodeHeight(n),c=a>s?a:s,l=Math.round(r>c?c:r);return t.getPercentage(0,c,l)},t.getSplitChildren=function(e){var t=[],n=r.Children.toArray(e.children);return n.forEach((function(e,o){var r=e;r.type&&r.type.isParallaxBackground&&(t=t.concat(n.splice(o,1)))})),{bgChildren:t,children:n}},t.getHasDynamicBlur=function(e){return"object"===o(e)&&void 0!==e.min&&void 0!==e.max},t.getBlurValue=function(e,t,n){return e?t.min+(1-n)*t.max:t},t.setBlur=function(e,t){e.style.webkitFilter="blur(".concat(t,"px)"),e.style.filter="blur(".concat(t,"px)")}},function(e,t,n){"use strict";var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var r=o(n(0));t.default=function(e){var t=e.children,n=e.onMount,o=e.className;return r.default.createElement("div",{ref:function(e){return n(e)},className:o||"react-parallax-content",style:{position:"relative"}},t)}},function(e,t,n){"use strict";function o(e){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t){return(i=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function a(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=s(e);if(t){var i=s(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return function(e,t){return!t||"object"!==o(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}(this,n)}}function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var c=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var l=c(n(0)),d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&i(e,t)}(n,e);var t=a(n);function n(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,n),t.apply(this,arguments)}return function(e,t,n){t&&r(e.prototype,t),n&&r(e,n)}(n,[{key:"render",value:function(){var e=this.props,t=e.className,n=e.children;return l.default.createElement("div",{className:"react-parallax-background ".concat(t)},n)}}]),n}(n(1).Background);d.defaultProps={className:""},d.isParallaxBackground=!0,t.default=d}])},e.exports=o(n(6540))}}]);