"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2309],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children))}},40576:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return v}});var r=n(3905),i=n(44035),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,d=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&s(e,n,t[n]);return e};const m={id:"getting-started",title:"Getting Started"},f=void 0,g={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"Getting Started",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/introduction/getting-started.mdx",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/4.16/ko/docs/introduction/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"Getting Started"},sidebar:"docs",previous:{title:"Installation",permalink:"/4.16/ko/docs/introduction/installation"},next:{title:"Embedded Graphics",permalink:"/4.16/ko/docs/basic-concepts/embedded-graphics"}},h={},v=[{value:"TouchGFX Designer Quick Start",id:"touchgfx-designer-quick-start",level:2},{value:"Application Template + UI Template",id:"application-template--ui-template",level:3},{value:"Online Applications",id:"online-applications",level:3},{value:"\ub2e4\uc74c \ub2e8\uacc4",id:"whats-next",level:2}],b={toc:v};function y(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=d(d({},b),s),a(t,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\uc124\uce58\xa0\uc139\uc158\uc5d0 \uc124\uba85\ub418\uc5b4 \uc788\ub4ef\uc774, TouchGFX \uc0ac\uc6a9\uc744 \uc2dc\uc791\ud558\ub824\uba74 \uba3c\uc800 \ucd5c\uc2e0 \ubc84\uc804\uc758 TouchGFX\ub97c ",(0,r.kt)("a",d({parentName:"p"},{href:"installation"}),"\uc124\uce58")," \ud574\uc57c \ud569\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/getting-started/monitor-01.webp",noShadow:!0,mdxType:"Figure"}," "),(0,r.kt)("p",null,"\uc124\uce58\uac00 \uc644\ub8cc\ub418\uace0 \ub098\uba74 \uccab \ubc88\uc9f8 TouchGFX \ud504\ub85c\uc81d\ud2b8\ub97c \uc2dc\uc791\ud560 \uc900\ube44\uac00 \ub429\ub2c8\ub2e4. \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 TouchGFX \uac1c\ub150\uc744 \uc219\uc9c0\ud558\ub824\uba74 \ubcf8 \uc124\uba85\uc11c\uc758 \uba87 \uac00\uc9c0 \uc8fc\uc694 \uc139\uc158\ub4e4\uc744 \uaf2d \uc77d\uc5b4\ubcf4\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \uac00\uc7a5 \uae30\ubcf8\uc801\uc778 \uc139\uc158\uc740",(0,r.kt)("a",d({parentName:"p"},{href:"../development/development-introduction"}),"\xa0\uac1c\ubc1c \uc18c\uac1c(Development Introduction)")," \ub85c, \uc644\ubcbd\ud55c TouchGFX \ud504\ub85c\uc81d\ud2b8\uc5d0 \ud544\uc694\ud55c \uc18c\ud504\ud2b8\uc6e8\uc5b4 \ubc0f \ud558\ub4dc\uc6e8\uc5b4 \uad6c\uc131 \uc694\uc18c\ub97c \ube44\ub86f\ud574 \uc774\ub4e4\uc744 \uc0dd\uc131\ud558\uae30 \uc704\ud55c \ud65c\ub3d9 \ubc0f \ub3c4\uad6c\ub4e4\uc774 \uc18c\uac1c\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc678\uc5d0\ub3c4 \uc0ac\uc804 \uc81c\uc791\ub41c \uad6c\uc131 \uc694\uc18c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud504\ub85c\ud1a0\ud0c0\uc774\ud551\uc744 \ube60\ub974\uac8c \uc2dc\uc791\ud558\ub294 \ubc29\ubc95\uc774 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h2",d({},{id:"touchgfx-designer-quick-start"}),"TouchGFX Designer Quick Start"),(0,r.kt)("h3",d({},{id:"application-template--ui-template"}),"Application Template + UI Template"),(0,r.kt)("p",null,"TouchGFX\ub97c \uc2e4\ud5d8\uc801\uc73c\ub85c \uc0ac\uc6a9\ud574 \ubcf4\uace0 \uc2f6\uc740 \ubd84\ub4e4\uc740 UI \ud504\ub85c\uc81d\ud2b8 \uc608\uc2dc\ub97c \uc774\uc6a9\ud574 STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \ubc29\uc2dd\uc73c\ub85c TouchGFX Designer\ub97c \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/getting-started/application-template-ui-template.gif",mdxType:"Figure"},"Application template\uacfc UI template\uc744 \ud1b5\ud574 \uac04\ub2e8\ud558\uac8c \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"),(0,r.kt)("p",null,"TouchGFX Designer\uc758 \uc2dc\uc791 \ucc3d\uc5d0\uc11c \ub2e4\uc591\ud55c UI \uc608\uc2dc \uac00\uc6b4\ub370 \uc6d0\ud558\ub294 \uac83\uc744 \uc120\ud0dd\ud558\uc5ec \uc2dc\uc791\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ub354 \ub098\uc544\uac00 \uc774\ub97c \ub2e4\uc591\ud55c STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc5d0 \ub300\ud55c \ubcf4\ub4dc\ubcc4 \ucf54\ub4dc\uc5d0 \ud1b5\ud569\ud558\uc5ec \uc784\ubca0\ub514\ub4dc \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc608\uc2dc\ub97c \uc989\uc2dc \uc2e4\ud589\ud574 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"STM32 \ud3c9\uac00 \ud0a4\ud2b8\uac00 \uc5c6\ub294 \uacbd\uc6b0\uc5d0\ub294 PC\uc5d0\uc11c \uac04\ub2e8\ud558\uac8c TouchGFX \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ucd08\ubc18 \ub2e8\uacc4\ub4e4\uc5d0 \ub300\ud55c \uc9c0\uce68\uc740 \ud29c\ud1a0\ub9ac\uc5bc\xa0\ucc55\ud130\uc5d0\uc11c \ucc3e\uc544\ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\ub294 \ud504\ub85c\uc81d\ud2b8\ub97c \uc124\uce58 \ubc0f \uc2e4\ud589\ud558\uc5ec \ub2e4\uc18c \ubcf5\uc7a1\ud55c UI \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uad6c\ud604\ud558\ub294 \ubc29\ubc95\uc774 \ub098\uc640 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("h3",d({},{id:"online-applications"}),"Online Applications"),(0,r.kt)("p",null,"TouchGFX Designer\uc5d0\ub294 UI template\uc5d0 application template\uc744 \uacb0\ud569\ud560 \uc218 \uc788\ub294 \uae30\ub2a5 \uc678\uc5d0\ub3c4 \ud2b9\uc815 STM32 \ud3c9\uac00 \ud0a4\ud2b8\uc5d0 \ub300\ud55c \ud2b9\ubcc4 \ub370\ubaa8\uac00 \uba87 \uac00\uc9c0 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub4e4 \ub370\ubaa8\ub294 Online Applications \ud0ed \uc544\ub798\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)(i.Z,{imageSource:"/img/introduction/getting-started/online-application.gif",mdxType:"Figure"},"Online Application\uc744 \ud1b5\ud574 \uc2e0\uc18d\ud558\uac8c \ud504\ub85c\uc81d\ud2b8 \uc0dd\uc131"),(0,r.kt)("h2",d({},{id:"whats-next"}),"\ub2e4\uc74c \ub2e8\uacc4"),(0,r.kt)("p",null,"\uc5ec\uae30\uc11c \uc124\uba85\uc11c\ub97c \ucb49 \uc0b4\ud3b4\ubcf4\uba74\uc11c \uc790\uc2e0\uc5d0\uac8c \ud574\ub2f9\ud558\ub294 \ucc55\ud130\ub97c \uc77d\uc5b4\ubcf4\uc2dc\uae30 \ubc14\ub78d\ub2c8\ub2e4. \uc774\ub807\uac8c \uc124\uba85\uc11c\uc758 \uac1c\uc694\ub97c \uc77d\uace0 \uc790\uc138\ud55c \uc815\ubcf4\uc758 \uc704\uce58\ub97c \uc54c \uc218 \uc788\uc73c\uba70, TouchGFX \uc8fc\uc694 \uac1c\ub150\ub4e4\uc744 \uc219\uc9c0\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("p",null,"\uc8fc\uc694 \ucc55\ud130\ub4e4\uc740 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),"Basic Concepts"),": \uc774 \ucc55\ud130\ub294 \uc124\uba85\uc11c\uc758 \ub098\uba38\uc9c0 \ubd80\ubd84\ub4e4\uc5d0 \ub300\ud55c \ubc30\uacbd \uc9c0\uc2dd \uc5ed\ud560\uc744 \ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \uc774\ud6c4\uc5d0 \ub80c\ub354\ub9c1 \ub418\ub294 \ubaa8\ub4e0 \uc8fc\uc694 \uadf8\ub798\ud53d \uac1c\ub150\ub4e4\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \uc774\ud6c4\uc5d0 \ub80c\ub354\ub9c1 \ub418\ub294 \ubaa8\ub4e0 \uc8fc\uc694 \uadf8\ub798\ud53d \uac1c\ub150\ub4e4\uc744 \uc18c\uac1c\ud569\ub2c8\ub2e4. \ud604\uc7ac \uc9c0\uc2dd\uacfc \uc218\ud589\ud558\uac8c \ub420 TouchGFX \uac1c\ubc1c \ud65c\ub3d9\uc5d0 \ub530\ub77c \uba87\uba87 \uc139\uc158\ub4e4\uc740 \uac74\ub108 \ub6f0\uace0 \ub098\uc911\uc5d0 \uc138\ubd80\uc801\uc778 \ub0b4\uc6a9\uc774 \uad81\uae08\ud560 \ub54c \ucc38\uc870\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"../development/development-introduction"}),"Development"),": \ubcf8 \uc124\uba85\uc11c\uc758 \uba54\uc778 \ucc55\ud130\uc785\ub2c8\ub2e4. TouchGFX \ud504\ub85c\uc81d\ud2b8 \uad6c\uc870\ub97c \ube44\ub86f\ud574 \uc804\uccb4 \ud504\ub85c\uc81d\ud2b8 \uac1c\ubc1c \uc8fc\uae30\uc5d0 \ud3ec\ud568\ub418\uc5b4 \uc788\ub294 \uc6cc\ud06c\ud50c\ub85c\uc640 \ub3c4\uad6c\ub4e4\uc774 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc6cc\ud06c\ud50c\ub85c\uc758 \uac01 \ub2e8\uacc4\ub294 \uc790\uccb4 \uc139\uc158\uc744 \ud1b5\ud574 \uc790\uc138\ud788 \uc124\uba85\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c TouchGFX \ud504\ub808\uc784\uc6cc\ud06c\uc758 \ubaa8\ub4e0 \uae30\ub2a5\uacfc \uad6c\uc131 \uc694\uc18c\uc5d0 \ub300\ud55c \uc124\uba85\uc744 \ud3ec\ud568\ud574 \ud558\ub4dc\uc6e8\uc5b4\uc5d0\uc11c \uc560\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uc2e4\ud589\ud558\ub294 \ubc29\ubc95\uacfc UI \uac1c\ubc1c \ubc29\ubc95\uc744 \uc774\ud574\ud558\ub294 \ub370 \ud544\uc694\ud55c \ubaa8\ub4e0 \uc815\ubcf4\ub97c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")))}y.isMDXComponent=!0}}]);