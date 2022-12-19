"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1370],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||f[p]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},35644:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return v},default:function(){return F},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return T}});var r=n(3905),a=n(44035),o=n(93054),i=n(37793),l=n(22425),c=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&m(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&m(e,n,t[n]);return e};const g={id:"scenarios-framebuffer-strategies",title:"\u5e27\u7f13\u5b58\u7b56\u7565"},v=void 0,b={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",id:"development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",title:"\u5e27\u7f13\u5b58\u7b56\u7565",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",permalink:"/4.16/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-framebuffer-strategies",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-framebuffer-strategies",title:"\u5e27\u7f13\u5b58\u7b56\u7565"},sidebar:"docs",previous:{title:"FMC\u548cSPI\u663e\u793a\u63a5\u53e3",permalink:"/4.16/zh-CN/docs/development/touchgfx-hal-development/scenarios/scenarios-fmc"},next:{title:"UI Development Introduction",permalink:"/4.16/zh-CN/docs/development/ui-development/ui-development-introduction"}},k={},T=[{value:"\u5355\u5e27\u7f13\u5b58",id:"single-frame-buffer",level:2},{value:"\u6309\u5206\u914d\u6765",id:"by-allocation",level:3},{value:"\u6309\u5730\u5740",id:"by-address",level:3},{value:"\u53cc\u5e27\u7f13\u5b58",id:"double-frame-buffer",level:2},{value:"\u6309\u5730\u5740",id:"by-address-1",level:3},{value:"\u6309\u5206\u914d",id:"by-allocation-1",level:3},{value:"\u90e8\u5206\u5e27\u7f13\u5b58",id:"partial-frame-buffer",level:2}],y={toc:T};function F(e){var t,n=e,{components:c}=n,m=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=h(h({},y),m),u(t,s({components:c,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This section shows how to configure the ",(0,r.kt)("a",h({parentName:"p"},{href:"../touchgfx-generator"}),"TouchGFX Generator")," to generate a TouchGFX HAL that uses one of the following Frame Buffer strategies:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u5e27\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"\u53cc\u5e27\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"\u90e8\u5206\u5e27\u7f13\u5b58")),(0,r.kt)("h2",h({},{id:"single-frame-buffer"}),"\u5355\u5e27\u7f13\u5b58"),(0,r.kt)("p",null,"\u901a\u8fc7\u9009\u62e9",(0,r.kt)("em",{parentName:"p"},"\u5355\u5e27\u7f13\u5b58"),"\u4f5c\u4e3a\u7f13\u51b2\u7b56\u7565\uff0c\u5f00\u53d1\u4eba\u5458\u65e2\u53ef\u4ee5\u7531\u7f16\u8bd1\u5668\u5728\u5185\u90e8RAM\u4e2d\u5206\u914d\u5e27\u7f13\u5b58\u533a\u57df\uff0c\u4e5f\u53ef\u4ee5\u81ea\u884c\u5728RAM\u4e2d\u6307\u5b9a\u5e27\u7f13\u5b58\u5b58\u50a8\u4f4d\u7f6e\u3002"),(0,r.kt)("h3",h({},{id:"by-allocation"}),"\u6309\u5206\u914d\u6765"),(0,r.kt)("p",null,"\u9009\u62e9",(0,r.kt)("em",{parentName:"p"},"\u6309\u5206\u914d"),"\u65f6\uff0cTouchGFX Generator\u5c06\u6839\u636e\u56fe\u5f62\u7684\u5927\u5c0f\u548c\u50cf\u7d20\u4f4d\u6df1\u6765\u5206\u914d\u5e27\u7f13\u5b58\u6570\u7ec4\u5927\u5c0f\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-single-alloc.webp",width:"400",mdxType:"Figure"},"\u5355\u5e27\u7f13\u5b58\uff0c\u6309\u4f4d\u7f6e"),(0,r.kt)("p",null,"\u751f\u6210\u7528\u4e8e\u914d\u7f6eHAL\u7684\u4ee3\u7801\uff0c\u5e76\u5c06\u8be5\u6570\u7ec4\u7528\u4f5c\u5e27\u7f13\u5b58\u3002"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{1-6,12}","{1-6,12}":!0}),'namespace {\n    // Use the section "TouchGFX_Framebuffer" in the linker script\n    // to specify the placement of the buffer\n    LOCATION_PRAGMA("TouchGFX_Framebuffer")\n    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");\n}\n\nvoid TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)frameBuf, (void*)0, (void*)0);\n}\n')),(0,r.kt)("h3",h({},{id:"by-address"}),"\u6309\u5730\u5740"),(0,r.kt)("p",null,"\u5f53\u4e3a\u5e27\u7f13\u5b58\u7684\u4f4d\u7f6e\u9009\u62e9",(0,r.kt)("em",{parentName:"p"},"\u6309\u5730\u5740"),"\u65f6\uff0cTouchGFX Generator\u5c06\u5728HAL\u521d\u59cb\u5316\u671f\u95f4\u4f7f\u7528\u6307\u5b9a\u5176\u8d77\u59cb\u5730\u5740\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-single-addr.webp",width:"400",mdxType:"Figure"},"\u5355\u5e27\u7f13\u5b58\uff0c\u6309\u5730\u5740"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5}","{5}":!0}),"void TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0, (void*)0);\n}\n")),(0,r.kt)("h2",h({},{id:"double-frame-buffer"}),"\u53cc\u5e27\u7f13\u5b58"),(0,r.kt)("p",null,"\u5728\u53cc\u5e27\u7f13\u5b58\u914d\u7f6e\u4e2d\uff0cTouchGFX Generator\u5c06\u6839\u636e\u6240\u9009\u5e27\u7f13\u5b58\u7b56\u7565\u548c\u663e\u793a\u63a5\u53e3\u5728HAL\u4e2d\u751f\u6210\u7528\u4e8e\u5e27\u7f13\u5b58\u5207\u6362\u7684\u4ee3\u7801\u3002 \u5728\u4e3b\u4e8b\u4ef6\u5faa\u73af\u671f\u95f4\uff0cTouchGFX Engine\u5c06\u4f1a\u7528\u5230\u4e0e\u5e27\u7f13\u5b58\u76f8\u8fde\u7684\u5b58\u50a8\u5668\u63a5\u53e3\u3002"),(0,r.kt)("h3",h({},{id:"by-address-1"}),"\u6309\u5730\u5740"),(0,r.kt)("p",null,"\u9009\u62e9",(0,r.kt)("em",{parentName:"p"},"\u6309\u5730\u5740"),"\u65f6\uff0cTouchGFX Generator\u5c06\u5728HAL\u521d\u59cb\u5316\u671f\u95f4\u4f7f\u7528\u4e24\u4e2a\u6307\u5b9a\u7684\u8d77\u59cb\u5730\u5740\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-double.webp",width:"400",mdxType:"Figure"},"\u53cc\u5e27\u7f13\u5b58\uff0c\u6309\u5730\u5740"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{5}","{5}":!0}),"void TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)0xC0000000, (void*)0xC003FC00, (void*)0);\n}\n")),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u5c06\u5e76\u884cRGB (LTDC)\u4f5c\u4e3a\u663e\u793a\u63a5\u53e3\u65f6\uff0c\u8d77\u59cb\u5730\u5740\u5c06\u4eceLTDC\u5c42\u8bbe\u7f6e\u4e2d\u7ee7\u627f\u3002"),(0,r.kt)("h3",h({},{id:"by-allocation-1"}),"\u6309\u5206\u914d"),(0,r.kt)("p",null,"\u9009\u62e9",(0,r.kt)("em",{parentName:"p"},"\u6309\u5206\u914d"),"\u65f6\uff0cTouchGFX Generator\u5c06\u6839\u636e\u56fe\u5f62\u7684\u5927\u5c0f\u548c\u50cf\u7d20\u4f4d\u6df1\u6765\u5206\u914d\u6570\u7ec4\u5927\u5c0f\uff0c\u8fd9\u4e0e\u4f7f\u7528\u5355\u5e27\u7f13\u5b58\u5b8c\u5168\u4e00\u6837\uff0c\u53ea\u662f\u5f00\u8f9f\u4e86\u4e24\u4e2a\u76f8\u540c\u5927\u5c0f\u7684\u6570\u7ec4\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/framebuffer-double-alloc.webp",width:"400",mdxType:"Figure"},"\u5355\u5e27\u7f13\u5b58\uff0c\u6309\u4f4d\u7f6e"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{1-5,11}","{1-5,11}":!0}),'namespace {\n    // Use the section "TouchGFX_Framebuffer" in the linker to specify the placement of the buffer\n    LOCATION_PRAGMA("TouchGFX_Framebuffer")\n    uint32_t frameBuf[(480 * 272 * 2 + 3) / 4 * 2] LOCATION_ATTRIBUTE("TouchGFX_Framebuffer");\n}\n\nvoid TouchGFXGeneratedHAL::initialize()\n{\n    HAL::initialize();\n\n    setFrameBufferStartAddresses((void*)frameBuf, (void*)(frameBuf + sizeof(frameBuf)/(sizeof(uint32_t)*2)), (void*)0);\n}\n')),(0,r.kt)("h2",h({},{id:"partial-frame-buffer"}),"\u90e8\u5206\u5e27\u7f13\u5b58"),(0,r.kt)("p",null,"\u901a\u8fc7\u9009\u62e9",(0,r.kt)("em",{parentName:"p"},"\u90e8\u5206\u7f13\u5b58"),"\u7b56\u7565\uff0c\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u9009\u62e9\u8bb8\u591a\u5185\u5b58\u5757\uff0c\u4ee5\u53ca\u8fd9\u4e9b\u7528\u4f5c\u5e27\u7f13\u5b58\u7684\u8bf8\u591a\u4e0d\u540c\u5757\u5927\u5c0f\u3002 \u8be5\u7b56\u7565\u4f7f\u7528TouchGFX\u6240\u8c13\u7684",(0,r.kt)("em",{parentName:"p"},"\u5e27\u7f13\u5b58\u5206\u914d\u5668"),"\uff0c\u4e0e\u5411\u5916\u90e8\u5b58\u50a8\u5668\u63d0\u4f9b\u5e27\u7f13\u5b58\u6240\u5904\u4f4d\u7f6e\u7684\u6307\u9488\u4e0d\u540c\uff0c\u4e5f\u4e0e\u5728\u5185\u90e8\u5b58\u50a8\u5668\u4e2d\u5206\u914d\u56fa\u5b9a\u5927\u5c0f\u7684\u6570\u7ec4\u4e0d\u540c\u3002"),(0,r.kt)("p",null,"\u6709\u5173\u5e27\u7f13\u5b58\u6982\u5ff5\u7684\u4e00\u822c\u6982\u8ff0\uff0c\u8bf7\u53c2\u89c1\u6709\u5173",(0,r.kt)("a",h({parentName:"p"},{href:"../../../basic-concepts/framebuffer"}),"\u5e27\u7f13\u5b58"),"\u7684\u6587\u7ae0\u3002"),(0,r.kt)(i.Z,{mdxType:"Tip"},"\u901a\u5e38\uff0cSTM32G0\u6ca1\u6709\u8db3\u591f\u7684\u5185\u90e8RAM\u6765\u627f\u62c5\u6574\u5e45\u56fe\u5f62\u7684\u5e27\u7f13\u5b58\u3002 \u201c\u90e8\u5206\u5e27\u7f13\u5b58\u201d\u4e0e\u8be5MCU\u7684\u4f4e\u6210\u672c\u89e3\u51b3\u65b9\u6848\u5b8c\u7f8e\u5339\u914d\u3002"),(0,r.kt)(a.Z,{noShadow:!0,imageSource:"/img/development/touchgfx-hal-development/scenarios/generator-partial-fb.webp",width:"400",mdxType:"Figure"},"\u90e8\u5206\u5e27\u7f13\u51b2\u5668"),(0,r.kt)("p",null,"\u7531\u4e8e\u90e8\u5206\u5e27\u7f13\u5b58\u901a\u5e38\u4ec5\u7528\u4e8e\u65e0TFT\u63a7\u5236\u5668\u4e14\u5185\u90e8RAM\u5f88\u5c0f\u7684\u4f4e\u6210\u672cMCU\uff0c\u56e0\u6b64\u90e8\u5206\u5e27\u7f13\u5b58\u7b56\u7565\u671f\u671b\u5f00\u53d1\u4eba\u5458\u5b9e\u73b0\u5c06\u5e27\u7f13\u5b58\u5185\u5bb9\u4f20\u8f93\u5230\u663e\u793a\u5668\u7684\u64cd\u4f5c\u3002 \u53c2\u89c1",(0,r.kt)("a",h({parentName:"p"},{href:"scenarios-fmc"}),"FMC/SPI\u65b9\u6848"),"\uff0c\u4ee5\u4e86\u89e3\u5982\u4f55\u5c06\u50cf\u7d20\u901a\u8fc7\u65e0TFT\u63a7\u5236\u5668\u7684MCU\u7684\u4e32\u53e3\u4f20\u8f93\u5230\u663e\u793a\u5668\u7b49\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u5728TouchGFX\u91cc\u4f7f\u7528\u90e8\u5206\u5e27\u7f13\u5b58\u7b56\u7565\uff0c\u5f00\u53d1\u4eba\u5458\u9700\u8981\u63d0\u4f9b\u7528\u4e8e\u4ee5\u4e0b\u4e24\u4e2a\u529f\u80fd\u7684\u5b9e\u73b0\u3002 \u4e0b\u9762\u663e\u793a\u7684\u4ee3\u7801\u7531CubeMx\u751f\u6210\uff0c\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp"),"\u91cc\u5b9a\u4e49\u4e86\u5f00\u53d1\u4eba\u5458\u8981\u7528\u5230\u7684TouchGFX Engine\u7684\u63a5\u53e3\u3002"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),'/* ******************************************************\n* Functions required by Partial Frame Buffer Strategy\n* ******************************************************\n*\n*  *  uint8_t isTransmittingData() must return whether or not data is currently being transmitted, over e.g. SPI.\n*  *  void transmitFrameBufferBlock(uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h) will be called\n*       when the framework wants to send a block. The user must then transfer\n*       the data represented by the arguments.\n*\n*  A user must call touchgfx::startNewTransfer(); once transmitFrameBufferBlock() has succesfully sent a block.\n*  E.g. if using DMA to transfer the block, this could be called in the "Transfer Completed" interrupt handler.\n*\n*/\nextern "C" void transmitFrameBufferBlock(uint8_t* pixels, uint16_t x, uint16_t y, uint16_t w, uint16_t h);\nextern "C" uint8_t isTransmittingData();\n')),(0,r.kt)("p",null,"The following function is also generated by CubeMX inside the read-only ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedHAL")," class inside ",(0,r.kt)("inlineCode",{parentName:"p"},"TouchGFX/target/generated/TouchGFXGeneratedHAL.cpp"),"."),(0,r.kt)(o.Z,{mdxType:"Note"},"\u6b64flushFrameBuffer()\u51fd\u6570\u901a\u5e38\u7528\u4e8e\u65e0TFT\u63a7\u5236\u5668\u7684MCU\u3002 \u5bf9\u4e8e\u90e8\u5206\u5e27\u7f13\u5b58\u5e94\u7528\uff0cTouchGFX Generator\u53ef\u4ee5\u57fa\u4e8e\u6b64\u65b9\u6cd5\u751f\u6210\u4e13\u95e8\u7528\u4e8e\u8be5\u7f13\u5b58\u7b56\u7565\u7684\u5b9a\u4e49\u3002"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"TouchGFXGeneratedHAL.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",h({parentName:"pre"},{className:"language-cpp",metastring:"{12,16}","{12,16}":!0}),"void TouchGFXGeneratedHAL::flushFrameBuffer(const touchgfx::Rect& rect)\n{\n    HAL::flushFrameBuffer(rect);\n\n    // Once flushFrameBuffer() is called by the framework a block is ready for transfer\n    // Mark it ready for transfer and transmit it if user defined method \n    // isTransmittingData() does not return false\n\n    // If data is not being transmitted, transfer the data with user defined method\n    // transmitFrameBufferBlock().\n    frameBufferAllocator->markBlockReadyForTransfer();\n    if (!isTransmittingData())\n    {\n        touchgfx::Rect r;\n        const uint8_t* pixels = frameBufferAllocator->getBlockForTransfer(r);\n        transmitFrameBufferBlock((uint8_t*)pixels, r.x, r.y, r.width, r.height);\n    }\n}\n")))}F.isMDXComponent=!0}}]);