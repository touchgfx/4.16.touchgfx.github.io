"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[18],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),g=i,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[d]="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class i extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,r){var n=r(67294),i=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,a=e.height,o=(0,i.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:a,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:a,src:o})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),i=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=o},88678:function(e,t,r){var n=r(67294);class i extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,r){var n=r(67294);class i extends n.Component{render(){return n.createElement("code",null,this.props.children)}}t.Z=i},60204:function(e,t,r){var n=r(67294);class i extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=i},10630:function(e,t,r){var n=r(67294);class i extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=i},37793:function(e,t,r){var n=r(67294),i=r(88678);const a=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends n.Component{render(){return n.createElement(i.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:a},this.props.children)}}t.Z=o},50551:function(e,t,r){r.r(t),r.d(t,{assets:function(){return N},contentTitle:function(){return w},default:function(){return C},frontMatter:function(){return b},metadata:function(){return P},toc:function(){return x}});var n=r(3905),i=r(44035),a=r(29415),o=r(37793),l=r(10630),s=r(31217),p=r(60204),c=r(39130),d=r(22425),u=Object.defineProperty,g=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))k.call(t,r)&&y(e,r,t[r]);if(h)for(var r of h(t))f.call(t,r)&&y(e,r,t[r]);return e};const b={id:"circle-progress",title:"CircleProgress"},w=void 0,P={unversionedId:"development/ui-development/ui-components/progress-indicators/circle-progress",id:"development/ui-development/ui-components/progress-indicators/circle-progress",title:"CircleProgress",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/progress-indicators/circle-progress.mdx",sourceDirName:"development/ui-development/ui-components/progress-indicators",slug:"/development/ui-development/ui-components/progress-indicators/circle-progress",permalink:"/4.16/zh-CN/docs/development/ui-development/ui-components/progress-indicators/circle-progress",draft:!1,tags:[],version:"current",frontMatter:{id:"circle-progress",title:"CircleProgress"},sidebar:"docs",previous:{title:"LineProgress",permalink:"/4.16/zh-CN/docs/development/ui-development/ui-components/progress-indicators/line-progress"},next:{title:"Box",permalink:"/4.16/zh-CN/docs/development/ui-development/ui-components/shapes/box"}},N={},x=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"\u52a8\u4f5c",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"User Code",id:"user-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],T={toc:x};function C(e){var t,r=e,{components:u}=r,y=((e,t)=>{var r={};for(var n in e)k.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&f.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=v(v({},T),y),g(t,m({components:u,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A CircleProgress shows the current progress by using a ",(0,n.kt)("a",v({parentName:"p"},{href:"../shapes/circle"}),"Circle")," as the progress indicator on top of a background ",(0,n.kt)("a",v({parentName:"p"},{href:"../images/image"}),"Image"),". The ",(0,n.kt)(l.Z,{mdxType:"Property"},"Color"),", the ",(0,n.kt)(l.Z,{mdxType:"Property"},"Alpha")," and overall parameters regarding the Circle can be configured. It is possible to create a custom background image and change the different parameters of the progress indicator such as the position and the size to fit the custom background image."),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/circle-progress/widget-appearance.gif",mdxType:"Figure"},"CircleProgress running in the simulator"),(0,n.kt)("h2",v({},{id:"widget-group"}),"Widget Group"),(0,n.kt)("p",null,"The CircleProgress can be found in the Progress Indicators widget group in TouchGFX Designer."),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-components/circle-progress/widget-group.webp",mdxType:"Figure"},"CircleProgress in TouchGFX Designer"),(0,n.kt)("h2",v({},{id:"properties"}),"Properties"),(0,n.kt)("p",null,"The properties for a CircleProgress in TouchGFX Designer."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Group")),(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,n.kt)(p.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"W")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,n.kt)("br",null),(0,n.kt)(p.Z,{mdxType:"InlineNote"},"The size of a CircleProgress is determined by the size of the selected background image."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,n.kt)("br",null),(0,n.kt)(p.Z,{mdxType:"InlineNote"},"Locking the widget also disables interacting with the widget through the screen."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget. ",(0,n.kt)(p.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Style")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,n.kt)("br",null),(0,n.kt)(p.Z,{mdxType:"InlineNote"},"These styles contain images that are free to use"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image & Color")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Background")," specifies background image.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Progress")," specifies either a color or an image to use as fill for the Circle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Values")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Range Min")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"Range Max")," specify the minimum and maximum integer values of the indicator.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Initial")," specifies the initial value of the progress indicator.",(0,n.kt)(l.Z,{mdxType:"Property"},"Steps Total")," specifies at what granularity the progress indicator reports new values. For instance, if the progress needs to be reported as 0%, 10%, 20%, ..., 100%, the total value should be set to 10.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Steps Min")," specifies the minimum steps the progress indicator shows.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Center Position X")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"Center Position Y")," specify the center position of the progress circle relative to its CircleProgress parent.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Start & End Angle")," specify the start and end angle of the drawn Circle.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Radius")," specifies the size of the progress cirlce.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Line Width")," specifies the width of the progress circle. If the value is 0, the progress circle is as large as the radius. Otherwise, the width specified will configure the width of the progress circle starting outside and moving inwards.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Cap Style")," specifies line ending style.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the widget. ",(0,n.kt)(p.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixins")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(l.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,n.kt)(l.Z,{mdxType:"Property"},"Alpha")," value.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(l.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,n.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(l.Z,{mdxType:"Property"},"Y")," values.")))),(0,n.kt)("h2",v({},{id:"interactions"}),"Interactions"),(0,n.kt)("p",null,"The actions and triggers supported by the CircleProgress are described in the following sections."),(0,n.kt)("h3",v({},{id:"actions"}),"\u52a8\u4f5c"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Widget specific actions")),(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Set value")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Set the value of the progress indicator.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,n.kt)("h3",v({},{id:"triggers"}),"Triggers"),(0,n.kt)("p",null,"A CircleProgress does not emit any triggers."),(0,n.kt)("h2",v({},{id:"performance"}),"Performance"),(0,n.kt)("p",null,"A CircleProgress consists of a Circle and a background Image. The Circle is based on the CanvasWidget and is heavily dependent on the MCU for rendering. Therefore, the CircleProgress is considered a demanding widget on most platforms."),(0,n.kt)("p",null,"For more details on CanvasWidget drawing performance, read the ",(0,n.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,n.kt)("h2",v({},{id:"examples"}),"Examples"),(0,n.kt)("h3",v({},{id:"generated-code"}),"Generated Code"),(0,n.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a CircleProgress."),(0,n.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"circleProgress.setXY(188, 84);\ncircleProgress.setProgressIndicatorPosition(0, 0, 104, 104);\ncircleProgress.setRange(0, 100);\ncircleProgress.setCenter(52, 52);\ncircleProgress.setRadius(50);\ncircleProgress.setLineWidth(0);\ncircleProgress.setStartEndAngle(0, 360);\ncircleProgress.setBackground(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_BG_MEDIUM_CIRCLE_INDICATOR_BG_FULL_ID));\ncircleProgressPainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_PROGRESSINDICATORS_FILL_MEDIUM_CIRCLE_INDICATOR_FILL_FULL_ID));\ncircleProgress.setPainter(circleProgress1Painter);\ncircleProgress.setValue(0);\n")),(0,n.kt)("h3",v({},{id:"user-code"}),"User Code"),(0,n.kt)("p",null,"The following example illustrates how to implement the ",(0,n.kt)("inlineCode",{parentName:"p"},"handleTickEvent()")," function to simulate progress. Running this code creates the application shown at the ",(0,n.kt)("a",v({parentName:"p"},{href:"circle-progress"}),"beginning of this article"),"."),(0,n.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\nprotected:\n    bool increase = true;\n};\n")),(0,n.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::handleTickEvent()\n{\n    int currentValue = circleProgress.getValue();\n    int16_t max;\n    int16_t min;\n    circleProgress.getRange(min, max);\n\n    if (currentValue == min)\n    {\n        increase = true;\n    }\n    else if (currentValue == max)\n    {\n        increase = false;\n    }\n\n    int nextValue = increase == true ? currentValue+1 : currentValue-1;\n\n    circleProgress.setValue(nextValue);\n}\n")),(0,n.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the CircleProgress class in user code. Remember to force a redraw by calling ",(0,n.kt)(s.Z,{mdxType:"InlineCode"},"circleProgress1.invalidate()")," if you change the appearance of the widget."),(0,n.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,n.kt)("p",null,"To further explore the CircleProgress, try creating a new application within TouchGFX Designer with the following UI template:"),(0,n.kt)(i.Z,{imageSource:"/img/development/ui-development/ui-templates/progress-indicator-example.webp",mdxType:"Figure"},"ProgressIndicator Example UI template in TouchGFX Designer"),(0,n.kt)("h2",v({},{id:"api-reference"}),"API Reference"),(0,n.kt)(a.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_circle_progress",mdxType:"Link"},"API reference for the CircleProgress class"))))}C.isMDXComponent=!0}}]);