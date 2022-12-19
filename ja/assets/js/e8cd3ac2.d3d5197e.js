"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4744],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=p(r),m=i,h=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(h,l(l({ref:t},s),{},{components:r})):n.createElement(h,l({ref:t},s))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[d]="string"==typeof e?e:i,l[1]=o;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class i extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,r){var n=r(67294),i=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,l=(0,i.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:l,target:"_blank"},n.createElement("img",{width:r,height:a,src:l})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),i=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=l},88678:function(e,t,r){var n=r(67294);class i extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,r){var n=r(67294);class i extends n.Component{render(){return n.createElement("code",null,this.props.children)}}t.Z=i},60204:function(e,t,r){var n=r(67294);class i extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=i},10630:function(e,t,r){var n=r(67294);class i extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=i},37793:function(e,t,r){var n=r(67294),i=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=l},57624:function(e,t,r){r.r(t),r.d(t,{assets:function(){return N},contentTitle:function(){return w},default:function(){return P},frontMatter:function(){return b},metadata:function(){return x},toc:function(){return T}});var n=r(3905),i=r(44035),a=r(29415),l=r(10630),o=r(37793),c=r(31217),p=r(60204),s=r(39130),d=r(22425),u=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&y(e,r,t[r]);if(g)for(var r of g(t))k.call(t,r)&&y(e,r,t[r]);return e};const b={id:"circle",title:"Circle"},w=void 0,x={unversionedId:"development/ui-development/ui-components/shapes/circle",id:"development/ui-development/ui-components/shapes/circle",title:"Circle",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/shapes/circle.mdx",sourceDirName:"development/ui-development/ui-components/shapes",slug:"/development/ui-development/ui-components/shapes/circle",permalink:"/4.16/ja/docs/development/ui-development/ui-components/shapes/circle",draft:!1,tags:[],version:"current",frontMatter:{id:"circle",title:"Circle"},sidebar:"docs",previous:{title:"Line",permalink:"/4.16/ja/docs/development/ui-development/ui-components/shapes/line"},next:{title:"Shape",permalink:"/4.16/ja/docs/development/ui-development/ui-components/shapes/shape"}},N={},T=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],C={toc:T};function P(e){var t,r=e,{components:u}=r,y=((e,t)=>{var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&g)for(var n of g(e))t.indexOf(n)<0&&k.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=v(v({},C),y),m(t,h({components:u,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A Circle is a widget based on the CanvasWidget capable of drawing a circle. This circle can be a partial circle, and either filled or outlined. The center, radius, line width, line cap and circle arc can be modified. The Circle can either use an image or a single color as fill."),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/circle/widget-appearance.webp",mdxType:"Figure"},"Circle running in the simulator"),(0,n.kt)("h2",v({},{id:"widget-group"}),"Widget Group"),(0,n.kt)("p",null,"The Circle can be found in the Shapes widget group in TouchGFX Designer."),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/circle/widget-group.webp",mdxType:"Figure"},"Circle in TouchGFX Designer"),(0,n.kt)("h2",v({},{id:"properties"}),"Properties"),(0,n.kt)("p",null,"The properties for the Circle are described in the following sections."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Group")),(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,n.kt)(p.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"W")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,n.kt)("br",null),(0,n.kt)(p.Z,{mdxType:"InlineNote"},"Locking the widget also disables interacting with the widget through the screen."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget.",(0,n.kt)("br",null),(0,n.kt)(p.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image & Color")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Image")," specifies the image used to fill the circle from the Designer skin library or the Project folder. ",(0,n.kt)("br",null),(0,n.kt)("br",null),"If an image is not chosen, ",(0,n.kt)(l.Z,{mdxType:"Property"},"Color")," specifies the color used to fill the circle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Center Position X")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"Center Position Y")," specify the coordinates for the center of the circle, relative to the top left corner of the widget.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Start & End Angle")," specify the angles in degrees of the start and ending points of the circle.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Radius")," specifies the radius of the circle.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Line Width")," specifies the width of the line forming the circumference of the circle.",(0,n.kt)("br",null),(0,n.kt)(p.Z,{mdxType:"InlineNote"},"Set this to 0 to get a filled circle"),".",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Cap Style")," specifies the shape of the edges of the circle. ",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the widget.",(0,n.kt)("br",null),(0,n.kt)(p.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixins")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,n.kt)(l.Z,{mdxType:"Property"},"Alpha")," value.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,n.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"Y")," values.")))),(0,n.kt)("h2",v({},{id:"interactions"}),"Interactions"),(0,n.kt)("p",null,"The actions and triggers supported by the Circle are described in the following sections."),(0,n.kt)("h3",v({},{id:"actions"}),"Actions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Standard widget action")),(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,n.kt)("h3",v({},{id:"triggers"}),"Triggers"),(0,n.kt)("p",null,"A Circle does not emit any triggers."),(0,n.kt)("h2",v({},{id:"performance"}),"Performance"),(0,n.kt)("p",null,"A Circle is based on the CanvasWidget and is heavily dependent on the MCU for rendering. Therefore, the Circle is considered a demanding widget on most platforms."),(0,n.kt)("p",null,"For more details on CanvasWidget drawing performance, read the ",(0,n.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,n.kt)("h2",v({},{id:"examples"}),"Examples"),(0,n.kt)("h3",v({},{id:"generated-code"}),"Generated Code"),(0,n.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a Circle."),(0,n.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n#include <touchgfx/Color.hpp>\n\nScreen1ViewBase::Screen1ViewBase()\n{\n\n    touchgfx::CanvasWidgetRenderer::setupBuffer(canvasBuffer, CANVAS_BUFFER_SIZE);\n\n    circleName.setPosition(40, 36, 200, 200);\n    circleName.setCenter(100, 100);\n    circleName.setRadius(80);\n    circleName.setLineWidth(0);\n    circleName.setArc(0, 225);\n    circleName.setCapPrecision(180);\n    circleNamePainter.setColor(touchgfx::Color::getColorFrom24BitRGB(0, 171, 223));\n    circleName.setPainter(circleNamePainter);\n\n    add(circleName);\n}\n')),(0,n.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the Circle class in user code. Remember to force a redraw by calling ",(0,n.kt)(c.Z,{mdxType:"InlineCode"},"circleName.invalidate()")," if you change the appearance of the widget."),(0,n.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,n.kt)("p",null,"To further explore the Circle, try creating a new application within TouchGFX Designer with the following UI template:"),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-templates/line-and-circle-example.webp",mdxType:"Figure"},"Line and Circle Example UI template in TouchGFX Designer"),(0,n.kt)("h2",v({},{id:"api-reference"}),"API Reference"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_circle",mdxType:"Link"},"API reference for the Circle class")),(0,n.kt)("li",null,(0,n.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_canvas",mdxType:"Link"},"API reference for the Canvas class used to draw a Circle"))))}P.isMDXComponent=!0}}]);