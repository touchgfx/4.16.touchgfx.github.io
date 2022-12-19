"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[6292],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=d(n),c=r,m=u["".concat(p,".").concat(c)]||u[c]||g[c]||i;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:r,l[1]=o;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:i,src:l})),a.createElement("p",null,e.children))}},29415:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var a=n(67294);class r extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=r},31217:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("code",null,this.props.children)}}t.Z=r},60204:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("i",null,this.props.children)}}t.Z=r},10630:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("i",null,this.props.children)}}t.Z=r},37793:function(e,t,n){var a=n(67294),r=n(88678);const i=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends a.Component{render(){return a.createElement(r.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},95106:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return N},default:function(){return E},frontMatter:function(){return b},metadata:function(){return w},toc:function(){return T}});var a=n(3905),r=n(44035),i=n(29415),l=n(10630),o=n(37793),p=n(31217),d=n(60204),s=n(39130),u=n(22425),g=Object.defineProperty,c=Object.defineProperties,m=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,k=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,y=(e,t,n)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,v=(e,t)=>{for(var n in t||(t={}))k.call(t,n)&&y(e,n,t[n]);if(h)for(var n of h(t))f.call(t,n)&&y(e,n,t[n]);return e};const b={id:"gauge",title:"Gauge"},N=void 0,w={unversionedId:"development/ui-development/ui-components/miscellaneous/gauge",id:"development/ui-development/ui-components/miscellaneous/gauge",title:"Gauge",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/gauge.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/gauge",permalink:"/4.16/zh-CN/docs/development/ui-development/ui-components/miscellaneous/gauge",draft:!1,tags:[],version:"current",frontMatter:{id:"gauge",title:"Gauge"},sidebar:"docs",previous:{title:"DynamicGraph",permalink:"/4.16/zh-CN/docs/development/ui-development/ui-components/miscellaneous/dynamic-graph"},next:{title:"General UI Component Performance",permalink:"/4.16/zh-CN/docs/development/ui-development/ui-components/general-ui-component-performance"}},x={},T=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"\u52a8\u4f5c",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"User Code",id:"user-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],P={toc:T};function E(e){var t,n=e,{components:g}=n,y=((e,t)=>{var n={};for(var a in e)k.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&h)for(var a of h(e))t.indexOf(a)<0&&f.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=v(v({},P),y),c(t,m({components:g,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A Gauge is a widget capable of drawing a needle and arc indicating a given value within a specified range."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/gauge/widget-appearance.gif",mdxType:"Figure"},"Gauge running in the simulator"),(0,a.kt)("h2",v({},{id:"widget-group"}),"Widget Group"),(0,a.kt)("p",null,"The gauge can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-components/gauge/widget-group-v4.16.webp",mdxType:"Figure"},"Gauge in TouchGFX Designer"),(0,a.kt)("h2",v({},{id:"properties"}),"Properties"),(0,a.kt)("p",null,"The properties for a Gauge in TouchGFX Designer."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Group")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Name")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,a.kt)(d.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Location")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,a.kt)(l.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"W")," and ",(0,a.kt)(l.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,a.kt)("br",null),(0,a.kt)(d.Z,{mdxType:"InlineNote"},"Locking the widget also disables interacting with the widget through the screen."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget. ",(0,a.kt)(d.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen."))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Style")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{mdxType:"Property"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,a.kt)("br",null),(0,a.kt)(d.Z,{mdxType:"InlineNote"},"These styles contain images that are free to use"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Background")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{mdxType:"Property"},"Background Image")," specifies the image to be used as background.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Background offset")," specifies the x- and y-axis offset of the selected background image.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{mdxType:"Property"},"Rotation Center")," specifies the x- and y-axis point in the widget at which the needle and arc should rotate.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Start and End Angle")," specify the start and end angle of the needle and arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Value Range")," specifies the minimum and maximum integer values of the indicator.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Initial Value")," specifies the initial value of the gauge.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Animation")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{mdxType:"Property"},"Animate Movement")," specifies if animation of the needle and arc are enabled.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Easing")," and ",(0,a.kt)(l.Z,{mdxType:"Property"},"Easing Option")," specify the easing equation used.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Needle")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{mdxType:"Property"},"Needle Image")," specifies the image to be used as background.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Needle Rotation Center")," specifies the position in the needle image around which it will rotate.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Moving Rendering Algorithm")," specifies the algorithm used to draw the needle image while moving to new value.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Steady Rendering Algorithm")," specifies the algorithm used to draw the needle image while stationary.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Arc")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{mdxType:"Property"},"Use Arc")," specifies whether or not to use an arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Image/Color")," specifies either a color or an image to use as fill for the arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Set Arc position"),"  specifies whether or not to override the default arc size and position.",(0,a.kt)("br",null),(0,a.kt)(d.Z,{mdxType:"InlineNote"},"By default arc is placed in 0, 0 and has the same size as the gauge itself. Overriding the default setting is useful when you want to use an image as painter for the arc, but the arc, and thus the image, is smaller than the size of the gauge. So instead of having a large image of the size of the gauge with a lot of transparent lines, the the image can be cut to the wanted size and place the arc at a specific position. The arc will still follow the same rotation center."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Arc Position X and Y")," specifies the x- and y-axis position of the arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Arc Width and Height")," specifies the size of the arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Radius")," specifies the radius of the arc.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Line Width")," specifies the line width of the arc. ",(0,a.kt)(d.Z,{mdxType:"InlineNote"},"If the value is 0, the arc is as large as the radius."),(0,a.kt)("br",null),(0,a.kt)("br",null)," ",(0,a.kt)(l.Z,{mdxType:"Property"},"Cap Style")," specifies line ending style of the arc. ",(0,a.kt)(d.Z,{mdxType:"InlineNote"},"If the line width is set to 0, the capstyle selected will have no effect."),(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"Arc on top of Needle")," specifies whether or not the arc is on top of the needle.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Appearance")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the widget. ",(0,a.kt)(d.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid"),".")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Mixins")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)(l.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,a.kt)(l.Z,{mdxType:"Property"},"Alpha")," value.",(0,a.kt)("br",null),(0,a.kt)("br",null),(0,a.kt)(l.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,a.kt)(l.Z,{mdxType:"Property"},"X")," and ",(0,a.kt)(l.Z,{mdxType:"Property"},"Y")," values.")))),(0,a.kt)("p",null,"By default arc is placed in 0, 0 and has the same size as the gauge itself. Overriding the default setting is useful when you want to use an image as painter for the arc, but the arc, and thus the image, is smaller than the size of the gauge. So instead of having a large image of the size of the gauge with a lot of transparent lines, the the image can be cut to the wanted size and place the arc at a specific position. The arc will still follow the same rotation center."),(0,a.kt)("h2",v({},{id:"interactions"}),"Interactions"),(0,a.kt)("p",null,"The actions and triggers supported by a Gauge in TouchGFX Designer."),(0,a.kt)("h3",v({},{id:"actions"}),"\u52a8\u4f5c"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Widget specific actions")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Set value")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Set the value of the Gauge.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Update value")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Update the value of the Gauge with a duration.")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Move widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Fade widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Hide widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Show widget")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,a.kt)("h3",v({},{id:"triggers"}),"Triggers"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Trigger")),(0,a.kt)("th",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8bf4\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge value set")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Will be triggered for both instant updates and intermediate steps during an update animation. Will only trigger when the new value differs from the current one.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",v({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Gauge value updated")),(0,a.kt)("td",v({parentName:"tr"},{align:null}),"Will be triggered when an update animation is completed. If duration of the update is 0 the update will happen instantly but will still trigger this event.")))),(0,a.kt)("h2",v({},{id:"performance"}),"Performance"),(0,a.kt)("p",null,"A Gauge consists of an ",(0,a.kt)("a",v({parentName:"p"},{href:"../images/image"}),"Image"),", ",(0,a.kt)("a",v({parentName:"p"},{href:"../shapes/circle"}),"Circle")," and a ",(0,a.kt)("a",v({parentName:"p"},{href:"../images/texture-mapper"}),"TextureMapper"),"."),(0,a.kt)("p",null,"The Circle and TextureMapper components are MCU resource intensive components. Therefore, the Gauge is considered a demanding widget on most platforms."),(0,a.kt)("p",null,"For more details on drawing performance, read the ",(0,a.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,a.kt)("h2",v({},{id:"examples"}),"Examples"),(0,a.kt)("h3",v({},{id:"generated-code"}),"Generated Code"),(0,a.kt)("p",null,"In the generated code for the View base class we can see how the Designer sets up a Gauge."),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"MainViewBase.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/main_screen/mainViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nmainViewBase::mainViewBase()\n{\n    gauge.setBackground(touchgfx::Bitmap(BITMAP_BLUE_GAUGES_ORIGINAL_GAUGE_BACKGROUND_STYLE_01_ID));\n    gauge.setPosition(115, 11, 251, 251);\n    gauge.setCenter(125, 125);\n    gauge.setStartEndAngle(-85, 85);\n    gauge.setRange(0, 100);\n    gauge.setValue(0);\n    gauge.setEasingEquation(touchgfx::EasingEquations::elasticEaseOut);\n    gauge.setNeedle(BITMAP_BLUE_NEEDLES_ORIGINAL_GAUGE_NEEDLE_STYLE_01_ID, 11, 55);\n    gauge.setMovingNeedleRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n    gauge.setSteadyNeedleRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n    gauge.setArcVisible();\n    gaugePainter.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_GAUGES_ORIGINAL_GAUGE_FILL_STYLE_01_ID));\n    gauge.getArc().setPainter(gaugePainter);\n    gauge.getArc().setRadius(94);\n    gauge.getArc().setLineWidth(14);\n    gauge.getArc().setCapPrecision(180);\n    gauge.setArcPosition(28, 30, 196, 88);\n\n    add(gauge);\n}\n')),(0,a.kt)(o.Z,{mdxType:"Tip"},"You can use these functions and the others available in the Gauge class in user code. Remember to force a redraw by calling ",(0,a.kt)(p.Z,{mdxType:"InlineCode"},"gauge.invalidate()")," if you change the appearance of the widget."),(0,a.kt)("h3",v({},{id:"user-code"}),"User Code"),(0,a.kt)("p",null,"To set the value of the Gauge, ",(0,a.kt)("inlineCode",{parentName:"p"},"setValue(int value)")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"updateValue(int value, uint16_t duration)")," can be used."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"setValue(int value)")," will immediately move the needle and arc to the new value with no animation."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"updateValue(int value, uint16_t duration)")," animates needle and arc to new value over the defined duration in ticks. If duration is equal to 0, the update will be done immediately. The animation used will be the one defined on the gauge using ",(0,a.kt)("inlineCode",{parentName:"p"},"setEasingEquation(EasingEquation easingEquation)")),(0,a.kt)(u.Z,{mdxType:"CodeHeader"},"MainView.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/main_screen/MainView.hpp>\n\nMainView::MainView()\n{\n    tickCounter = 0;\n}\n\nvoid MainView::handleTickEvent()\n{\n    tickCounter++;\n\n    // Change value every 120 tick.\n    if (tickCounter % 120 == 0)\n    {\n      // Insert data point\n      gauge.updateValue(/* new integer value */, 30); // animates needle and arc to new value with a duration of 30 ticks\n    }\n}\n")),(0,a.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,a.kt)("p",null,"To further explore the Gauge, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,a.kt)(r.Z,{imageSource:"/img/development/ui-development/ui-templates/gauge-example.webp",mdxType:"Figure"},"Gauge Example UI template in TouchGFX Designer"),(0,a.kt)("h2",v({},{id:"api-reference"}),"API Reference"),(0,a.kt)(i.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(s.Z,{to:"../../../../api/classes/classtouchgfx_1_1_gauge",mdxType:"Link"},"API reference for the gauge class"))))}E.isMDXComponent=!0}}]);