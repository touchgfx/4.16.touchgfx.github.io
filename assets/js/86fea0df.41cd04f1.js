"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6737],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||a;return n?r.createElement(h,l(l({ref:t},d),{},{components:n})):r.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:i,l[1]=o;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,l=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:a,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class i extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=i},60204:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=i},10630:function(e,t,n){var r=n(67294);class i extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),i=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=l},51661:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return w},default:function(){return Z},frontMatter:function(){return b},metadata:function(){return x},toc:function(){return T}});var r=n(3905),i=n(44035),a=n(29415),l=n(10630),o=n(37793),p=n(31217),s=n(60204),d=n(39130),c=n(22425),u=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&y(e,n,t[n]);if(g)for(var n of g(t))k.call(t,n)&&y(e,n,t[n]);return e};const b={id:"line",title:"Line"},w=void 0,x={unversionedId:"development/ui-development/ui-components/shapes/line",id:"development/ui-development/ui-components/shapes/line",title:"Line",description:"",source:"@site/docs/development/ui-development/ui-components/shapes/line.mdx",sourceDirName:"development/ui-development/ui-components/shapes",slug:"/development/ui-development/ui-components/shapes/line",permalink:"/4.16/docs/development/ui-development/ui-components/shapes/line",draft:!1,tags:[],version:"current",frontMatter:{id:"line",title:"Line"},sidebar:"docs",previous:{title:"BoxWithBorder",permalink:"/4.16/docs/development/ui-development/ui-components/shapes/box-with-border"},next:{title:"Circle",permalink:"/4.16/docs/development/ui-development/ui-components/shapes/circle"}},N={},T=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],P={toc:T};function Z(e){var t,n=e,{components:u}=n,y=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=v(v({},P),y),m(t,h({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A Line is a widget based on the CanvasWidget capable of drawing a straight line from one point to another. The Line can be filled by a single color or an image using a Painter object."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/line/widget-appearance.webp",mdxType:"Figure"},"Line running in the simulator"),(0,r.kt)("h2",v({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The Line can be found in the Shapes widget group in TouchGFX Designer."),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/line/widget-group.webp",mdxType:"Figure"},"Line in TouchGFX Designer"),(0,r.kt)("h2",v({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a Line in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"W")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Image & Color")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Image")," specifies the image assigned to the line from the Designer skin library or the Project folder. ",(0,r.kt)("br",null),(0,r.kt)("br",null),"If the image is not chosen, ",(0,r.kt)(l.Z,{mdxType:"Property"},"Color")," specifies the color of the line.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Start Position X")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"Start Position Y")," specify the start coordinates of the line relative to the top left corner of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"End Position X")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"End Position Y")," specify the end coordinates of the line relative to the top left corner of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Line Width")," specifies the width of the line.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Cap Style")," specifies the shape of the edges of the line.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the widget.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)(l.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)(l.Z,{mdxType:"Property"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(l.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(l.Z,{mdxType:"Property"},"Y")," values.")))),(0,r.kt)("h2",v({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the Line are described in the following sections."),(0,r.kt)("h3",v({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Description")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",v({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",v({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",v({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"A Line does not emit any triggers."),(0,r.kt)("h2",v({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A Line is a CanvasWidget and is heavily dependent on the MCU for rendering. Therefore, the Line is considered a demanding widget on most platforms."),(0,r.kt)("p",null,"For more details on CanvasWidget drawing performance, read the ",(0,r.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance"),"."),(0,r.kt)("h2",v({},{id:"examples"}),"Examples"),(0,r.kt)("h3",v({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Line."),(0,r.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n    lineName.setPosition(0, 0, 800, 480);\n    lineNamePainter.setBitmap(touchgfx::Bitmap(BITMAP_DARK_BACKGROUNDS_MAIN_BG_800X480PX_ID));\n    lineName.setPainter(lineNamePainter);\n    lineName.setStart(200, 200);\n    lineName.setEnd(550, 150);\n    lineName.setLineWidth(50);\n    lineName.setLineEndingStyle(touchgfx::Line::ROUND_CAP_ENDING);\n\n    add(lineName);\n}\n')),(0,r.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the other available in the Line class in user code. Remember to force a redraw by calling ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"lineName.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the Line, try creating a new application within TouchGFX Designer with the following UI template:"),(0,r.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-templates/line-and-circle-example.webp",mdxType:"Figure"},"Line and Circle Example UI template in TouchGFX Designer"),(0,r.kt)("h2",v({},{id:"api-reference"}),"API Reference"),(0,r.kt)(a.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_line",mdxType:"Link"},"API reference for the Line class"))))}Z.isMDXComponent=!0}}]);