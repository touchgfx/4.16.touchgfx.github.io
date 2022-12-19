"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5325],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=d(r),u=a,m=h["".concat(l,".").concat(u)]||h[u]||p[u]||i;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:i,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:i,src:o})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),a=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},21517:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return v}});var n=r(3905),a=r(39130),i=r(29415),o=r(44035),s=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))h.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&u(e,r,t[r]);return e};const g={id:"embedded-graphics",title:"Embedded Graphics"},f=void 0,b={unversionedId:"basic-concepts/embedded-graphics",id:"basic-concepts/embedded-graphics",title:"Embedded Graphics",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/embedded-graphics.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/embedded-graphics",permalink:"/4.16/ko/docs/basic-concepts/embedded-graphics",draft:!1,tags:[],version:"current",frontMatter:{id:"embedded-graphics",title:"Embedded Graphics"},sidebar:"docs",previous:{title:"Getting Started",permalink:"/4.16/ko/docs/introduction/getting-started"},next:{title:"Color Formats",permalink:"/4.16/ko/docs/basic-concepts/color-formats"}},y={},v=[{value:"The four main parts",id:"the-four-main-parts",level:2},{value:"MCU",id:"mcu",level:3},{value:"RAM",id:"ram",level:3},{value:"Flash",id:"flash",level:3},{value:"Display",id:"display",level:3}],w={toc:v};function k(e){var t,r=e,{components:s}=r,u=((e,t)=>{var r={};for(var n in e)h.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},w),u),l(t,d({components:s,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The term embedded graphics means many things."),(0,n.kt)("p",null,"First of, the word embedded means different things to different people. To some an embedded system means a very dependable old 8 bit microcontroller, with no operating system, and virtually no RAM, ROM or GPIO. To others it might mean a modern day smart phone with gigabytes of everything."),(0,n.kt)("p",null,"Secondly, the word graphics has many interpretations. To some it means drawing your own pixels in your favourite painting program. To others again it means the 3D rendering software running on your gaming console."),(0,n.kt)("p",null,"To TouchGFX, embedded systems mean any system based on an STM32 microcontroller. And graphics means interactive applications with a user interface running at 60 frames per second."),(0,n.kt)("h2",m({},{id:"the-four-main-parts"}),"The four main parts"),(0,n.kt)("p",null,"In order to do graphics applications on such platforms, we consider four main components directly involved. Naturally many more components might be present in an embedded system, but these are less related to the display of graphics."),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/embedded-graphics-primer/4-main-parts.webp",noShadow:"true",mdxType:"Figure"},"MCU, RAM, Flash and display"),(0,n.kt)("p",null,"In short, TouchGFX, using the MCU, creates and updates an image in RAM, by assembling parts from flash. The assembled image is transferred to the display. This process is repeated as often as possible and needed."),(0,n.kt)("h3",m({},{id:"mcu"}),"MCU"),(0,n.kt)("p",null,"The MCU is doing all the heavy lifting in this process. It reads images in flash and writes them to RAM. It calculates the resulting colors when merging a semi-transparent red text onto an image and saves these to RAM. It renders and stores all the pixels of a circle to RAM. It transfers the image from RAM to the display."),(0,n.kt)(o.Z,{imageSource:"/img/basic-concepts/mcu-internal.svg",noShadow:"true",width:240,mdxType:"Figure"},"The MCU provides the CPU, internal flash, internal RAM and much more"),(0,n.kt)("p",null,"STM32 MCUs have specific capabilities, like LTDC, Chrom-ART, Chrom-GRC, ..., that help in the realization of graphics."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(a.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-mcu",mdxType:"Link"},"guide for selecting the right MCU")," and the ",(0,n.kt)(a.Z,{to:"../development/board-bring-up/how-to/02-cpu-running",mdxType:"Link"},"board bring up guide for setting up the MCU"),"."),(0,n.kt)("h3",m({},{id:"ram"}),"RAM"),(0,n.kt)("p",null,"RAM is where the resulting calculated image (",(0,n.kt)("a",m({parentName:"p"},{href:"framebuffer"}),"framebuffer"),") is stored. The RAM is being read and written by the MCU when updating the graphics. And read again when the resulting image is transferred to the display."),(0,n.kt)("p",null,"In many cases the resulting image is stored in RAM internal to the MCU. In cases where it is not feasible to have the resulting image in internal RAM, external RAM can be added to the setup."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(a.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"guide for selecting the right RAM")," and the ",(0,n.kt)(a.Z,{to:"../development/board-bring-up/how-to/04-enable-external-ram",mdxType:"Link"},"board bring up guide for setting up the RAM"),"."),(0,n.kt)("h3",m({},{id:"flash"}),"Flash"),(0,n.kt)("p",null,"Flash is where all static data is placed. Images, fonts and texts. The flash is read by the MCU and the contents written to or combined with the RAM."),(0,n.kt)("p",null,"Most often an external flash is added to the setup, as the internal flash is seldomly large enough to hold all graphics assets. For very simple applications the internal flash is enough."),(0,n.kt)("p",null,"Ideally the flash is memory mapped, such that pixels can be read directly from the flash and written to RAM. Otherwise, when the flash is not memory mapped, the contents of the flash can be transferred to RAM and then read from there instead."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(a.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-external-memories",mdxType:"Link"},"guide for selecting the right flash")," and the ",(0,n.kt)(a.Z,{to:"../development/board-bring-up/how-to/06-flash-external-addressable",mdxType:"Link"},"board bring up guide for setting up the flash"),"."),(0,n.kt)("h3",m({},{id:"display"}),"Display"),(0,n.kt)("p",null,"The display is where the image is actually displayed to the eyes of a person."),(0,n.kt)("p",null,"The calculated image (framebuffer) stored in RAM is sent by the MCU to the display at regular intervals."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},"See the ",(0,n.kt)(a.Z,{to:"../development/hardware-selection/hardware-components/hardware-selection-display",mdxType:"Link"}," guide for selecting the right display")," and the ",(0,n.kt)(a.Z,{to:"../development/board-bring-up/how-to/03-display-internal",mdxType:"Link"},"board bring up guide for setting up the display"),"."),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,"See ",(0,n.kt)(a.Z,{to:"../development/hardware-selection/hardware-selection-introduction",mdxType:"Link"},"Hardware selection")," for details on the possible hardware choices."),(0,n.kt)("li",null,"See ",(0,n.kt)(a.Z,{to:"../development/board-bring-up/board-introduction",mdxType:"Link"},"Board Bring Up")," for details on setting up the board and components.")))}k.isMDXComponent=!0}}]);