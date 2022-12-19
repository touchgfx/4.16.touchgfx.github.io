"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1624],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return g}});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),s=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,g=p["".concat(c,".").concat(m)]||p[m]||u[m]||i;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class o extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=o},44035:function(e,t,n){var a=n(67294),o=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,r=(0,o.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:i,src:r})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:n,height:i,src:r})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),o=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class r extends a.Component{render(){return a.createElement(o.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=r},88678:function(e,t,n){var a=n(67294);class o extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=o},31217:function(e,t,n){var a=n(67294);class o extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=o},60204:function(e,t,n){var a=n(67294);class o extends a.Component{render(){return a.createElement("i",null,this.props.children)}}t.Z=o},10630:function(e,t,n){var a=n(67294);class o extends a.Component{render(){return a.createElement("i",null,this.props.children)}}t.Z=o},37793:function(e,t,n){var a=n(67294),o=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class r extends a.Component{render(){return a.createElement(o.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=r},35914:function(e,t,n){n.r(t),n.d(t,{assets:function(){return C},contentTitle:function(){return b},default:function(){return P},frontMatter:function(){return w},metadata:function(){return T},toc:function(){return N}});var a=n(3905),o=n(44035),i=n(29415),r=n(10630),l=n(37793),c=n(31217),s=n(60204),d=n(39130),p=n(22425),u=Object.defineProperty,m=Object.defineProperties,g=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,v=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&v(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&v(e,n,t[n]);return e};const w={id:"analog-clock",title:"AnalogClock"},b=void 0,T={unversionedId:"development/ui-development/ui-components/miscellaneous/analog-clock",id:"development/ui-development/ui-components/miscellaneous/analog-clock",title:"AnalogClock",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/analog-clock.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/analog-clock",permalink:"/4.16/ko/docs/development/ui-development/ui-components/miscellaneous/analog-clock",draft:!1,tags:[],version:"current",frontMatter:{id:"analog-clock",title:"AnalogClock"},sidebar:"docs",previous:{title:"TextArea",permalink:"/4.16/ko/docs/development/ui-development/ui-components/miscellaneous/text-area"},next:{title:"DigitalClock",permalink:"/4.16/ko/docs/development/ui-development/ui-components/miscellaneous/digital-clock"}},C={},N=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Time",id:"time",level:3},{value:"Clock Hands",id:"clock-hands",level:3},{value:"Hour, Minute and Second Hands",id:"hour-minute-and-second-hands",level:4},{value:"Animation",id:"animation",level:3},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"User Code",id:"user-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],x={toc:N};function P(e){var t,n=e,{components:u}=n,v=((e,t)=>{var n={};for(var a in e)k.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&h)for(var a of h(e))t.indexOf(a)<0&&f.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=y(y({},x),v),m(t,g({components:u,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"An AnalogClock is a widget that enables the display of a classic analog watch, as opposed to the ",(0,a.kt)("a",y({parentName:"p"},{href:"digital-clock"}),"DigitalClock")," which displays time with text. The clock uses a background image as the clock face. The hour, minute and second hands are each using an image and rotate around a configurable center."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-appearance.gif",mdxType:"Figure"},"AnalogClock running in the simulator (sped up footage)"),(0,a.kt)("h2",y({},{id:"widget-group"}),"Widget Group"),(0,a.kt)("p",null,"The AnalogClock can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/widget-group-v4.16.webp",mdxType:"Figure"},"AnalogClock in TouchGFX Designer"),(0,a.kt)("h2",y({},{id:"properties"}),"Properties"),(0,a.kt)("p",null,"The properties for a AnalogClock in TouchGFX Designer."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Group")),(0,a.kt)("th",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,a.kt)(s.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{mdxType:"Property"},"X")," and ",(0,a.kt)(r.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(r.Z,{mdxType:"Property"},"W")," and ",(0,a.kt)(r.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,a.kt)("br",null),(0,a.kt)(s.Z,{mdxType:"InlineNote"},"The size of a AnalogClock is taken from the size of the associated image and cannot be altered except by changing the image."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(r.Z,{mdxType:"Property"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,a.kt)("br",null),(0,a.kt)(s.Z,{mdxType:"InlineNote"},"Locking the widget also disables interacting with the widget through the screen."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(r.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget. ",(0,a.kt)(s.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{mdxType:"Property"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,a.kt)("br",null),(0,a.kt)(s.Z,{mdxType:"InlineNote"},"These styles contain images that are free to use"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{mdxType:"Property"},"Image")," specifies the image to be used as background.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(r.Z,{mdxType:"Property"},"Rotation Center X")," and ",(0,a.kt)(r.Z,{mdxType:"Property"},"Rotation Center Y")," specifies the point at which the clock hands should rotate")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Time")),(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{mdxType:"Property"},"Use Am/Pm")," specifies if time should be in 12h or 24h format.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(r.Z,{mdxType:"Property"},"Initial Time")," specifies the initial time the clock shows.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Clock Hands")),(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{mdxType:"Property"},"Clock Hands")," specifies which clock hands ",(0,a.kt)(s.Z,{mdxType:"InlineNote"},"(Second, Minute and Hour Hand)")," the AnalogClock should show and the order of the hands.",(0,a.kt)("br",null),"Each clock hand can set a ",(0,a.kt)(r.Z,{mdxType:"Property"},"Hand Image")," and their rotation point by setting ",(0,a.kt)(r.Z,{mdxType:"Property"},"Rotation Position X")," and ",(0,a.kt)(r.Z,{mdxType:"Property"},"Rotation Position Y"),".",(0,a.kt)("br",null),(0,a.kt)("br",null),"The Minute and Hour Hand have the option to use sweeping hand motion by setting ",(0,a.kt)(r.Z,{mdxType:"Property"},"Sweeping Movement"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animations")),(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{mdxType:"Property"},"Animate Clock Hand Movement")," specifies if animation of the clock hands are enabled.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(r.Z,{mdxType:"Property"},"Duration")," specifies how long the amination is.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(r.Z,{mdxType:"Property"},"Easing")," and ",(0,a.kt)(r.Z,{mdxType:"Property"},"Easing Option")," specify the easing equation used.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)(r.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(r.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(r.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,a.kt)(r.Z,{mdxType:"Property"},"X")," and ",(0,a.kt)(r.Z,{mdxType:"Property"},"Y")," values.")))),(0,a.kt)("h3",y({},{id:"time"}),"Time"),(0,a.kt)("p",null,"The Time property group allows the user to set the initial time of the clock widget and whether or not to use Am/Pm standard."),(0,a.kt)("p",null,"Choosing Am/Pm also results in a slight code generation change. Instead of using the following function in Analog Clock to initialize the time:",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)")),(0,a.kt)("p",null,"The following function is used when using 12-hour notation:",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"initializeTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,a.kt)("p",null,"To update the time displayed by the clock, one of the following functions can be used.",(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"setTime24Hour(uint8_t hour, uint8_t minute, uint8_t second)"),(0,a.kt)("br",null)," ",(0,a.kt)("inlineCode",{parentName:"p"},"setTime12Hour(uint8_t hour, uint8_t minute, uint8_t second, bool am)")),(0,a.kt)("h3",y({},{id:"clock-hands"}),"Clock Hands"),(0,a.kt)("p",null,"In the Clock Hands property group, the user can define which hands to use and their z-order. The hand defined first will be rendered above the others."),(0,a.kt)("h4",y({},{id:"hour-minute-and-second-hands"}),"Hour, Minute and Second Hands"),(0,a.kt)("p",null,"Each hand needs an image and a rotation position. The rotation position determines the point at which the defined hand image should rotate around itself."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-hands-props.webp",mdxType:"Figure"},"Clock hand properties"),(0,a.kt)("p",null,"The hour and minute hands have the ability to use ",(0,a.kt)(r.Z,{mdxType:"Property"},"Sweeping Movement"),". When this option is enabled the hand will no longer do an instantaneous jump from one position to another."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-no-sweeping-movement.gif",mdxType:"Figure"},"Sweeping movement disabled"),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-with-sweeping-movement.gif",mdxType:"Figure"},"Sweeping movement enabled"),(0,a.kt)("h3",y({},{id:"animation"}),"Animation"),(0,a.kt)("p",null,"The animation section allows the user to define more advanced hand movement. However, if the hour and minute hand have ",(0,a.kt)(r.Z,{mdxType:"Property"},"Sweeping Movement")," enabled, they will not animate."),(0,a.kt)("p",null,"In the following example the animation duration is set to '30', easing is set to 'Bounce' with 'Out' as its easing option:"),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-components/analog-clock/analog-clock-animation.gif",mdxType:"Figure"},"Example of a clock animation"),(0,a.kt)("h2",y({},{id:"interactions"}),"Interactions"),(0,a.kt)("p",null,"The actions and triggers supported by an AnalogClock are described in the following sections."),(0,a.kt)("h3",y({},{id:"actions"}),"Actions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,a.kt)("th",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Description")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",y({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",y({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",y({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",y({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,a.kt)("h3",y({},{id:"triggers"}),"Triggers"),(0,a.kt)("p",null,"An AnalogClock does not emit any triggers."),(0,a.kt)("h2",y({},{id:"performance"}),"Performance"),(0,a.kt)("p",null,"An AnalogClock consists of an ",(0,a.kt)("a",y({parentName:"p"},{href:"../images/image"}),"Image")," and three ",(0,a.kt)("a",y({parentName:"p"},{href:"../images/texture-mapper"}),"TextureMappers"),", which are MCU resource intensive components. Therefore, an AnalogClock is considered a demanding widget on most platforms."),(0,a.kt)("p",null,"For more details on drawing performance, read the ",(0,a.kt)("a",y({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,a.kt)("h2",y({},{id:"examples"}),"Examples"),(0,a.kt)("h3",y({},{id:"generated-code"}),"Generated Code"),(0,a.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up an AnalogClock."),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    analogClock.setXY(124, 15);\n    analogClock.setBackground(BITMAP_BLUE_CLOCKS_BACKGROUNDS_CLOCK_STANDARD_BACKGROUND_ID, 116, 116);\n    analogClock.setupMinuteHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_MINUTE_HAND_ID, 7, 67);\n    analogClock.setMinuteHandSecondCorrection(false);\n    analogClock.setupHourHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_HOUR_HAND_ID, 7, 52);\n    analogClock.setHourHandMinuteCorrection(false);\n    analogClock.setupSecondHand(BITMAP_BLUE_CLOCKS_HANDS_CLOCK_STANDARD_SECOND_HAND_ID, 3, 66);\n    analogClock.initializeTime24Hour(10, 10, 0);\n\n    add(analogClock);\n}\n\nvoid mainViewBase::setupScreen()\n{\n\n}\n')),(0,a.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the AnalogClock class in user code. Remember to force a redraw by calling ",(0,a.kt)(c.Z,{mdxType:"InlineCode"},"analogClock.invalidate()")," if you change the appearance of the widget."),(0,a.kt)("h3",y({},{id:"user-code"}),"User Code"),(0,a.kt)("p",null,"The following example shows how to set up clock movement:"),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"#ifndef MAINVIEW_HPP\n#define MAINVIEW_HPP\n\n#include <gui_generated/main_screen/mainViewBase.hpp>\n#include <gui/main_screen/mainPresenter.hpp>\n\nclass mainView : public mainViewBase\n{\npublic:\n    mainView();\n    virtual ~mainView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void handleTickEvent();\n\nprotected:\n    int tickCounter;\n    int analogHours;\n    int analogMinutes;\n    int analogSeconds;\n};\n\n#endif // MAINVIEW_HPP\n\n")),(0,a.kt)(p.Z,{mdxType:"CodeHeader"},"mainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/mainView.hpp>\n\nmainView::mainView()\n{\n}\n\nvoid mainView::setupScreen()\n{\n    mainViewBase::setupScreen();\n    analogHours = analogClock.getCurrentHour();\n    analogMinutes = analogClock.getCurrentMinute();\n    analogSeconds = analogClock.getCurrentSecond();\n}\n\nvoid mainView::tearDownScreen()\n{\n    mainViewBase::tearDownScreen();\n}\n\nvoid mainView::handleTickEvent()\n{\n    tickCounter++;\n\n    if (tickCounter % 60 == 0)\n    {\n        if (++analogSeconds >= 60)\n        {\n            analogSeconds = 0;\n            if (++analogMinutes >= 60)\n            {\n                analogMinutes = 0;\n                if (++analogHours >= 24)\n                {\n                    analogHours = 0;\n                }\n            }\n        }\n\n        // Update the clocks\n        analogClock.setTime24Hour(analogHours, analogMinutes, analogSeconds);\n    }\n}\n")),(0,a.kt)("h3",y({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,a.kt)("p",null,"To further explore the AnalogClock, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/ui-templates/clock-example.webp",mdxType:"Figure"},"Clock Example UI template in TouchGFX Designer"),(0,a.kt)("h2",y({},{id:"api-reference"}),"API Reference"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_analog_clock",mdxType:"Link"},"API reference for the AnalogClock class"))))}P.isMDXComponent=!0}}]);