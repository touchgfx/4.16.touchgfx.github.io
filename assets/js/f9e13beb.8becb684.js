"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7252],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return f}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),u=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,f=p["".concat(l,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},s),{},{components:n})):o.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[p]="string"==typeof e?e:r,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var o=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,a=(0,r.Z)(e.imageSource);return t?o.createElement("div",{class:"figure noshadow"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:i,src:a})),o.createElement("p",null,e.children)):o.createElement("div",{class:"figure"},o.createElement("a",{href:a,target:"_blank"},o.createElement("img",{width:n,height:i,src:a})),o.createElement("p",null,e.children))}},64206:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return y}});var o=n(3905),r=n(39130),i=n(44035),a=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&d(e,n,t[n]);return e};const f={id:"welcome",title:"TouchGFX Documentation",sidebar_label:"Welcome",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications."},h=void 0,g={unversionedId:"introduction/welcome",id:"introduction/welcome",title:"TouchGFX Documentation",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications.",source:"@site/docs/introduction/welcome.mdx",sourceDirName:"introduction",slug:"/introduction/welcome",permalink:"/4.16/docs/introduction/welcome",draft:!1,tags:[],version:"current",frontMatter:{id:"welcome",title:"TouchGFX Documentation",sidebar_label:"Welcome",description:"The documentation site for TouchGFX - a user-friendly graphical C++ tool for creating powerful embedded touch applications."},sidebar:"docs",next:{title:"What is TouchGFX?",permalink:"/4.16/docs/introduction/what-is-touchgfx"}},b={},y=[{value:"About this documentation",id:"about-this-documentation",level:2},{value:"Target User",id:"target-user",level:3}],w={toc:y};function v(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var o in e)s.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&u)for(var o of u(e))t.indexOf(o)<0&&p.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=m(m({},w),d),c(t,l({components:a,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"Welcome to the official documentation of TouchGFX!"),(0,o.kt)(i.Z,{imageSource:"/img/introduction/welcome/frontpage.webp",noShadow:"true",mdxType:"Figure"}),(0,o.kt)("p",null,"If you are new to this documentation and/or TouchGFX, we recommend that you read on to get an overview of what this documentation has to offer.\nThe table of contents in the sidebar should let you easily access the documentation for your topic of interest.\nYou can also use the search function in the top right corner."),(0,o.kt)("h2",m({},{id:"about-this-documentation"}),"About this documentation"),(0,o.kt)("p",null,"The main documentation for the site is organized into the following sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"what-is-touchgfx"}),(0,o.kt)("strong",{parentName:"a"},"Introduction"))," - read surface-level information on TouchGFX and installation guide."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),(0,o.kt)("strong",{parentName:"a"},"Basic Concepts"))," - introduction to key graphics concepts."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"../development/development-introduction"}),(0,o.kt)("strong",{parentName:"a"},"Development"))," - how to develop a TouchGFX application including, structure, workflow and tools."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",m({parentName:"li"},{href:"../tutorials/tutorial-01"}),(0,o.kt)("strong",{parentName:"a"},"Tutorials"))," - a collection of TouchGFX tutorials.")),(0,o.kt)("h3",m({},{id:"target-user"}),"Target User"),(0,o.kt)("p",null,"The TouchGFX documentation is targeting software developers with a basic skill-set within C++ and embedded GUI development on STM32. Newcomers to Embedded GUI Development are supported in the section Basic Concepts, while step by step guides and tutorials support everyone towards a smooth learning in TouchGFX development as well."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"We would really like to improve this documentation in any way possible."),"\n",(0,o.kt)("em",{parentName:"p"},"If you don\u2019t understand something, or cannot find what you are looking for in the docs, help us make the documentation better by letting us know in the ",(0,o.kt)(r.Z,{to:"https://community.st.com/s/topic/0TO0X0000003iw6WAA/touchgfx",target:"_blank",mdxType:"Link"},"forum"),"!")))}v.isMDXComponent=!0}}]);