"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5009],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),s=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=s(r),h=a,m=c["".concat(d,".").concat(h)]||c[h]||u[h]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},93054:function(e,t,r){var n=r(67294),a=r(88678);const o=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},90195:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return k}});var n=r(3905),a=r(39130),o=r(44035),i=r(93054),l=Object.defineProperty,d=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,h=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&h(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&h(e,r,t[r]);return e};const f={id:"board-introduction",title:"Board Bring Up Introduction"},g=void 0,b={unversionedId:"development/board-bring-up/board-introduction",id:"development/board-bring-up/board-introduction",title:"Board Bring Up Introduction",description:"",source:"@site/docs/development/board-bring-up/board-introduction.mdx",sourceDirName:"development/board-bring-up",slug:"/development/board-bring-up/board-introduction",permalink:"/4.16/docs/development/board-bring-up/board-introduction",draft:!1,tags:[],version:"current",frontMatter:{id:"board-introduction",title:"Board Bring Up Introduction"},sidebar:"docs",previous:{title:"External Memories",permalink:"/4.16/docs/development/hardware-selection/hardware-components/hardware-selection-external-memories"},next:{title:"1. Create Project",permalink:"/4.16/docs/development/board-bring-up/how-to/01-create-project"}},y={},k=[{value:"Tools of the trade",id:"tools-of-the-trade",level:2},{value:"Verification of Functionality",id:"verification-of-functionality",level:2},{value:"Overall Process",id:"overall-process",level:2}],w={toc:k};function v(e){var t,r=e,{components:l}=r,h=((e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=m(m({},w),h),d(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/activities-selected-001.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Project activity"),(0,n.kt)("p",null,"This chapter will help you through the board bring up phase of\nstarting TouchGFX programming on a new platform. Bringing up the\nboard means making sure that all necessary parts of the board and\ncorresponding drivers are working correctly before TouchGFX is added\nto the mix."),(0,n.kt)("p",null,"If you already have a working board with a display, many of the\nactivities in this phase will be easy. If you have a completely new custom\nmade board, you should expect that this phase will take some days to\ncomplete. The work does normally pay off as an unstable platform makes\nit difficult to write good applications. A stable and proven platform\non the other hand allows you to concentrate on the application."),(0,n.kt)("p",null,"This chapter is for you if are a developer with the task of ensuring\nthat your hardware and low-level software components on the board are\nworking as expected.\nThis chapter is not for you if you are concerned only with developing\nthe actual UI of your application."),(0,n.kt)("p",null,"In bringing up your board, you should have a thorough understanding of the components and peripherals on your board, the connections between all these, the protocols they communicate via and the driver code available and/or needed for each one."),(0,n.kt)("p",null,"The next chapter ",(0,n.kt)(a.Z,{to:"../touchgfx-hal-development/touchgfx-al-development-introduction",mdxType:"Link"},"TouchGFX AL Development")," discusses how to create the abstraction layer that allows TouchGFX to run on top of your hardware and drivers."),(0,n.kt)("h2",m({},{id:"tools-of-the-trade"}),"Tools of the trade"),(0,n.kt)("p",null,"Some important tools when bringing up an STM32 based board are listed in the table below."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Tool"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"STM32CubeMX"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"An easy to use tool for configuration of the MCU and generation of initialization source code for a project and internal peripherals.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"STM32Cube Firmware Package"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The Cube Firmware for your MCU family contains many example projects and applications that show how to use various peripherals.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Vendor datasheets"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The datasheets for your external devices, like the display or flash, contain important information such as timing and voltage for correct initialisation of both MCU (e.g. through CubeMX) and the external device.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Vendor driver code"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"To save time you should request example code for your external devices from the vendor. The driver code often needs to be ported to your STM32 MCU, but this is often simpler than writing driver code from scratch.")))),(0,n.kt)("p",null,"All the work done in board bring up phase is not dependent on TouchGFX and should not involve any TouchGFX code. Instead the work and the resulting code will serve as a solid foundation for developing the TouchGFX Abstraction Layer."),(0,n.kt)("p",null,"The primary goal is to make sure that your hardware and lower-level software is in fact working in accordance with your expectations for the final application."),(0,n.kt)("h2",m({},{id:"verification-of-functionality"}),"Verification of Functionality"),(0,n.kt)("p",null,"The code produced during the board bring up, in form of one or more test projects will serve two purposes:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Abstraction Layer"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The board initialization code is the foundation upon which we will build the TouchGFX AL and ultimately the working UI application")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Test code"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The verification code written accompanying the board initialization code, will be the ultimate place to go to if/when things do not act as expected. During the board bring up phase you will create a number of small verification programs ensuring that the board and each particular component are working as expected. These verification programs will be of great value when progressing, they can be revisited and enhanced if/when things become uncertain.")))),(0,n.kt)("p",null,"Due to the above two reasons it can be very beneficial to save the verification programs systematically. This will allow you to use the test programs again later. For example to test new revisions of your hardware or to find the root cause, when your larger applications are unexpectedly failing. It is also recommended to make systematic notes of any measurements, e.g. memory bandwidth, done during development."),(0,n.kt)(o.Z,{imageSource:"/img/development/board-bring-up/components-selected-001.webp",noShadow:!0,width:"600",mdxType:"Figure"},"Board Initialisation Code is the bases for the TouchGFX AL"),(0,n.kt)("h2",m({},{id:"overall-process"}),"Overall Process"),(0,n.kt)("p",null,"Since we cannot know the concrete makeup of your hardware the following ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)(a.Z,{to:"how-to/01-create-project",mdxType:"Link"},"How To"))," guide will be a general step-by-step guide to bring up and prepare boards to run TouchGFX."),(0,n.kt)("p",null,"Each step of the guide will be concerned with one particular part of your hardware and/or software components and the bring up of this. One example of a custom component part of your hardware could be the touch controller. The overall goal is to communicate with the touch controller to get information on any touches on the display. The specific commands to send to the touch controller depends on the specific controller you are using on your hardware, so the guide cannot provide the complete driver. For this you need to combine the guide with the information in your touch controller datasheet."),(0,n.kt)(i.Z,{mdxType:"Note"},"When reading and performing the step-by-step guide for your custom board bring up, we recommend that you:",(0,n.kt)("ul",null,(0,n.kt)("li",null,"do one step at the time"),(0,n.kt)("li",null,"verify each step thoroughly before moving on"),(0,n.kt)("li",null,"use the guide as a means for debugging, when something is not working as intended, or go back and revisit previous steps to make sure you did not break those steps"),(0,n.kt)("li",null,"do not be alarmed if you experience unexpected behaviour - bringing up a board is a non trivial task"))),(0,n.kt)("p",null,"Each step in the guide will follow the following structure:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Motivation"),(0,n.kt)("br",{parentName:"li"}),"This part will explain the step and motivate why the step is an\nimportant step in preparing for running TouchGFX on your\nhardware. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Goal"),(0,n.kt)("br",{parentName:"li"}),"The goal part lists the goals for this step. A list of verification\npoints details the specific tests that you should perform. These\nverification points ensures that your software implements the\nrequirements needed to running TouchGFX sucessfully on your\nhardware.  "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Prerequisites"),(0,n.kt)("br",{parentName:"li"}),"Here we list items that are required to perform the tasks."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Do"),(0,n.kt)("br",{parentName:"li"}),"This part explains as concrete as possible how to write the software\nrequired to configure and use the hardware. For some steps it is not\npossible to be very precise as the software depends a lot on the\nhardware you use. In that case this part lists the steps on a higher\nlevel and you must find the details relevant for your hardware yourself.")),(0,n.kt)("p",null,"The individual how-to steps are:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Step"),(0,n.kt)("th",m({parentName:"tr"},{align:null}),"Content"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"how-to/01-create-project"}),"Create Project")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Create an empty project in CubeMX")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"how-to/02-cpu-running"}),"CPU Running")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Ensure that the MCU is running at the desired speed")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"how-to/03-display-internal"}),"Framebuffer in internal RAM")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Allocate a framebuffer in internal RAM and transmit it to the display")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"how-to/04-enable-external-ram"}),"External RAM")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Enable the external RAM")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"how-to/05-display-external"}),"Framebuffer in external RAM")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Move the framebuffer to external RAM and transmit it to the display")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"how-to/06-flash-external-addressable"}),"External addressable flash")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Enable external memory-mapped flash")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"how-to/07-flash-external-nonaddressable"}),"External block mode flash")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Enable external block-mode flash")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"how-to/08-hardware-acceleration"}),"Hardware acceleration")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Enable the Chrom-ART graphics accelerator")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"how-to/09-touch-controller"}),"Touch controller")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Setup communication to the touch controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"how-to/10-physical-buttons"}),"Physical buttons")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Configure access to physical buttons")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"how-to/11-flash-loader"}),"Flash loader")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Develop a way to write data to the external flash")))))}v.isMDXComponent=!0}}]);