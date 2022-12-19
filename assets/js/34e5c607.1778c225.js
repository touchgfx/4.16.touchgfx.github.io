"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7198],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[c]="string"==typeof e?e:a,o[1]=p;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},22425:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:i,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:r,height:i,src:o})),n.createElement("p",null,e.children))}},29415:function(e,t,r){var n=r(67294),a=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,r){var n=r(67294);class a extends n.Component{render(){const e=`highlight highlight-${this.props.type}`;return n.createElement("div",{class:e},n.createElement("div",{class:"highlight-heading"},n.createElement("h5",null,n.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),n.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("code",null,this.props.children)}}t.Z=a},60204:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=a},93054:function(e,t,r){var n=r(67294),a=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:i},this.props.children)}}t.Z=o},10630:function(e,t,r){var n=r(67294);class a extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=a},37793:function(e,t,r){var n=r(67294),a=r(88678);const i=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class o extends n.Component{render(){return n.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=o},97028:function(e,t,r){r.r(t),r.d(t,{assets:function(){return N},contentTitle:function(){return T},default:function(){return P},frontMatter:function(){return b},metadata:function(){return w},toc:function(){return M}});var n=r(3905),a=r(44035),i=r(29415),o=r(10630),p=r(93054),l=r(37793),d=r(39130),s=r(31217),c=r(60204),u=r(22425),m=Object.defineProperty,h=Object.defineProperties,g=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable,y=(e,t,r)=>t in e?m(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))f.call(t,r)&&y(e,r,t[r]);if(k)for(var r of k(t))x.call(t,r)&&y(e,r,t[r]);return e};const b={id:"texture-mapper",title:"TextureMapper"},T=void 0,w={unversionedId:"development/ui-development/ui-components/images/texture-mapper",id:"development/ui-development/ui-components/images/texture-mapper",title:"TextureMapper",description:"",source:"@site/docs/development/ui-development/ui-components/images/texture-mapper.mdx",sourceDirName:"development/ui-development/ui-components/images",slug:"/development/ui-development/ui-components/images/texture-mapper",permalink:"/4.16/docs/development/ui-development/ui-components/images/texture-mapper",draft:!1,tags:[],version:"current",frontMatter:{id:"texture-mapper",title:"TextureMapper"},sidebar:"docs",previous:{title:"AnimatedImage",permalink:"/4.16/docs/development/ui-development/ui-components/images/animated-image"},next:{title:"Container",permalink:"/4.16/docs/development/ui-development/ui-components/containers/container"}},N={},M=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Origo &amp; Camera",id:"origo--camera",level:3},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"User Code",id:"user-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],Z={toc:M};function P(e){var t,r=e,{components:m}=r,y=((e,t)=>{var r={};for(var n in e)f.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&k)for(var n of k(e))t.indexOf(n)<0&&x.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=v(v({},Z),y),h(t,g({components:m,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"A TextureMapper is a widget capable of drawing a transformed image, that can be freely scaled and rotated around an adjustable origin.\nPerspective impression is also achieved by applying a virtual camera, where the amount of perspective is adjustable."),(0,n.kt)(p.Z,{mdxType:"Note"},(0,n.kt)("li",null,"This widget has a significant effect on the MCU load."),(0,n.kt)("li",null,"This widget does not support 1 bit per pixel color depth.")),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/widget-appearance.gif",mdxType:"Figure"},"TextureMapper running in the simulator"),(0,n.kt)("h2",v({},{id:"widget-group"}),"Widget Group"),(0,n.kt)("p",null,"The TextureMapper can be found in the Images widget group in TouchGFX Designer."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/widget-group.webp",mdxType:"Figure"},"TextureMapper in TouchGFX Designer"),(0,n.kt)("h2",v({},{id:"properties"}),"Properties"),(0,n.kt)("p",null,"The properties for a TextureMapper in TouchGFX Designer."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Group")),(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Name")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(o.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,n.kt)(c.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Location")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(o.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(o.Z,{mdxType:"Property"},"W")," and ",(0,n.kt)(o.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(o.Z,{mdxType:"Property"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,n.kt)("br",null),(0,n.kt)(c.Z,{mdxType:"InlineNote"},"Locking the widget also disables interacting with the widget through the screen."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(o.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget.",(0,n.kt)("br",null),(0,n.kt)(c.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen"),".",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(o.Z,{mdxType:"Property"},"Animation Texture Mapper")," specifies if the TextureMapper should be generated as an AnimationTextureMapper.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Style")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(o.Z,{mdxType:"Property"},"Style")," specifies a predefined setup of the widget, that sets select properties to predefined values.",(0,n.kt)("br",null),(0,n.kt)(c.Z,{mdxType:"InlineNote"},"These styles contain images that are free to use"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Image")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(o.Z,{mdxType:"Property"},"Image")," specifies the image that should be transformed.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(o.Z,{mdxType:"Property"},"Lock Image to Center")," specifies if the image position should be locked to the center of the widget.",(0,n.kt)("br",null),(0,n.kt)(c.Z,{mdxType:"InlineNote"},"If the Texture Mapper is resized at run time, this option does not maintain a centered position for the image."),".",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(o.Z,{mdxType:"Property"},"Y")," specify the top left corner of the image to be transformed within the widget.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Angle & Scale")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(o.Z,{mdxType:"Property"},"X Angle"),", ",(0,n.kt)(o.Z,{mdxType:"Property"},"Y  Angle")," and ",(0,n.kt)(o.Z,{mdxType:"Property"},"Z Angle")," specify the rotation transformation of the image within the widget.",(0,n.kt)("br",null),(0,n.kt)(c.Z,{mdxType:"InlineNote"},"Angles are in radians."),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(o.Z,{mdxType:"Property"},"Scale")," specifies the scale transformation of the image in the widget.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Origo")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(o.Z,{mdxType:"Property"},"Lock Origo to Center")," specifies if the rotation point of the image is locked to the center of the widget.",(0,n.kt)("br",null),(0,n.kt)(c.Z,{mdxType:"InlineNote"},"If the Texture Mapper is resized at run time, this option does not maintain a centered origo position"),".",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(o.Z,{mdxType:"Property"},"X Origo"),", ",(0,n.kt)(o.Z,{mdxType:"Property"},"Y Origo")," and ",(0,n.kt)(o.Z,{mdxType:"Property"},"Z Origo")," specify the point at which the image within the widget be rotated and scaled.",(0,n.kt)("br",null),(0,n.kt)("br",null),"For more details on the intricacies of this, refer to the ",(0,n.kt)("a",v({parentName:"td"},{href:"#origo--camera"}),"Origo & Camera section"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Camera")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(o.Z,{mdxType:"Property"},"Camera Distance")," specifies the distance of the virtual camera.",(0,n.kt)("br",null)," ",(0,n.kt)(c.Z,{mdxType:"InlineNote"},"This changes the amount of perspective when the image is rotated."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Appearance")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(o.Z,{mdxType:"Property"},"Rendering Algorithm")," specifies the algorithm used to render the image within the widget.",(0,n.kt)("br",null),(0,n.kt)(c.Z,{mdxType:"InlineNote"},"The options are Nearest-neighbour and Bilinear Interpolation"),".",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(o.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the widget.",(0,n.kt)("br",null),(0,n.kt)(c.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Mixins")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)(o.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(o.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(o.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,n.kt)(o.Z,{mdxType:"Property"},"Alpha")," value.",(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)(o.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,n.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,n.kt)(o.Z,{mdxType:"Property"},"Y")," values.")))),(0,n.kt)("h3",v({},{id:"origo--camera"}),"Origo & Camera"),(0,n.kt)("p",null,"Origo determines the location around which the transformation of the selected image should take place. The coordinate properties ",(0,n.kt)(o.Z,{mdxType:"Property"},"X Origo")," and ",(0,n.kt)(o.Z,{mdxType:"Property"},"Y Origo")," is in relation to the width and height of the TextureMapper and not in relation to the width and height of the chosen image."),(0,n.kt)("p",null,"The coordinate property ",(0,n.kt)(o.Z,{mdxType:"Property"},"Z Origo")," is in relation to the ",(0,n.kt)(o.Z,{mdxType:"Property"},"Camera Distance"),". If the ",(0,n.kt)(o.Z,{mdxType:"Property"},"Camera Distance")," is set to 1000, and the image should rotate around it's own axis the ",(0,n.kt)(o.Z,{mdxType:"Property"},"Z Origo")," should also be set to 1000."),(0,n.kt)("p",null,"To lock the transformation location in the center of the TextureMapper, put a check mark in the checkbox with the label ",(0,n.kt)(o.Z,{mdxType:"Property"},"Lock Origo to Center"),". This will lock the ",(0,n.kt)(o.Z,{mdxType:"Property"},"X Origo")," and ",(0,n.kt)(o.Z,{mdxType:"Property"},"Y Origo")," properties to the center of the TextureMapper and lock the ",(0,n.kt)(o.Z,{mdxType:"Property"},"Z Origo")," to the value of the ",(0,n.kt)(o.Z,{mdxType:"Property"},"Camera Distance"),"."),(0,n.kt)("p",null,"The ",(0,n.kt)(o.Z,{mdxType:"Property"},"Camera Distance")," changes the amount of perspective that is shown when the image is rotated. The closer the ",(0,n.kt)(o.Z,{mdxType:"Property"},"Camera Distance")," is, the greater the FOV (field of view) becomes, and therefore the percieved amount of perspective increases."),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/texture-mapper/coordinate-setup.webp",noShadow:!0,mdxType:"Figure"},"Coordinate system used for the origo and camera distance in Texture Mapper"),(0,n.kt)("h2",v({},{id:"interactions"}),"Interactions"),(0,n.kt)("p",null,"The actions and triggers supported by the TextureMapper are described in the following sections."),(0,n.kt)(p.Z,{mdxType:"Note"},"If a rotation or scale interaction is applied to a TextureMapper, that has a duration or delay greater than zero, it will be generated as a AnimationTextureMapper."),(0,n.kt)("h3",v({},{id:"actions"}),"Actions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Widget specific action")),(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Rotate TextureMapper")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Rotate the TextureMapper around its ",(0,n.kt)(o.Z,{mdxType:"Property"},"Origo")," in x-, y- and z-axis, either relative to its current orientation or to a specific angle.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Scale TextureMapper")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Scale the TextureMapper either relative to its current size or to a specific size.")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Standard widget actions")),(0,n.kt)("th",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"th"},"Description")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Move widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Fade widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Hide widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",v({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},"Show widget")),(0,n.kt)("td",v({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,n.kt)("h3",v({},{id:"triggers"}),"Triggers"),(0,n.kt)("p",null,"A TextureMapper does not emit any triggers."),(0,n.kt)("h2",v({},{id:"performance"}),"Performance"),(0,n.kt)("p",null,"A TextureMapper heavily depends upon the MCU for scaling and rotating the image. Therefore, a TextureMapper is considered a demanding widget on most platforms."),(0,n.kt)("p",null,"For more details on drawing performance, read the ",(0,n.kt)("a",v({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,n.kt)("h2",v({},{id:"examples"}),"Examples"),(0,n.kt)("h3",v({},{id:"generated-code"}),"Generated Code"),(0,n.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a TextureMapper."),(0,n.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),'#include <gui_generated/screen1_screen/Screen1ViewBase.hpp>\n#include "BitmapDatabase.hpp"\n\nScreen1ViewBase::Screen1ViewBase() :\n    interaction1Counter(0)\n{\n    textureMapper.setXY(150, 46);\n    textureMapper.setBitmap(touchgfx::Bitmap(BITMAP_BLUE_LOGO_TOUCHGFX_LOGO_ID));\n    textureMapper.setWidth(180);\n    textureMapper.setHeight(180);\n    textureMapper.setBitmapPosition(26.000f, 26.000f);\n    textureMapper.setScale(1.000f);\n    textureMapper.setCameraDistance(1000.000f);\n    textureMapper.setOrigo(90.000f, 90.000f, 1000.000f);\n    textureMapper.setCamera(90.000f, 90.000f);\n    textureMapper.updateAngles(-0.500f, -0.500f, -0.500f);\n    textureMapper.setRenderingAlgorithm(touchgfx::TextureMapper::BILINEAR_INTERPOLATION);\n\n    add(textureMapper);\n}\n\nvoid Screen1ViewBase::setupScreen()\n{\n\n}\n')),(0,n.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the TextureMapper class in user code. Remember to force a redraw by calling ",(0,n.kt)(s.Z,{mdxType:"InlineCode"},"textureMapper.invalidate()")," if you change the appearance of the widget."),(0,n.kt)("h3",v({},{id:"user-code"}),"User Code"),(0,n.kt)("p",null,"If the Texture Mapper is setup to be a AnimationTextureMapper, there are two callbacks that can be setup:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setTextureMapperAnimationStepAction")," is invoked every time the current animations have performed a step."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setTextureMapperAnimationEndedAction")," is invoked when all animations have ended.")),(0,n.kt)("p",null,"The following two pieces of code demonstrate how to set up these two callbacks:"),(0,n.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"class Screen1View\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\nprivate:\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperStepActionCallback;\n    touchgfx::Callback<Screen1View, const touchgfx::AnimationTextureMapper&> textureMapperAnimationEndedCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src);\n    void textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src);\n};\n")),(0,n.kt)(u.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,n.kt)("pre",null,(0,n.kt)("code",v({parentName:"pre"},{className:"language-cpp"}),"#include <gui/screen1_screen/Screen1View.hpp>\n\nScreen1View::Screen1View() :\n  textureMapperStepActionCallback(this, &Screen1View::textureMapperStepActionCallbackHandler),\n  textureMapperAnimationEndedCallback(this, &Screen1View::textureMapperAnimationEndedCallbackHandler)\n{\n  textureMapper.setTextureMapperAnimationStepAction(textureMapperStepActionCallback);\n  textureMapper.setTextureMapperAnimationEndedAction(textureMapperAnimationEndedCallback);\n  add(textureMapper);\n}\n\nvoid Screen1View::textureMapperStepActionCallbackHandler(const touchgfx::AnimationTextureMapper& src)\n{\n    if (&src == &textureMapper)\n    {\n        //execute code whenever the animation running in AnimationTextureMapper steps\n    }\n}\n\nvoid Screen1View::textureMapperAnimationEndedCallbackHandler(const touchgfx::AnimationTextureMapper& src)\n{\n    if (&src == &textureMapper)\n    {\n        //execute code whenever the animation running in AnimationTextureMapper ends\n    }\n}\n")),(0,n.kt)("h3",v({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,n.kt)("p",null,"To further explore the TextureMapper, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/texture-mapper-example.webp",mdxType:"Figure"},"TextureMapper Example UI template in TouchGFX Designer"),(0,n.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/animation-texture-mapper-example.webp",mdxType:"Figure"},"Animation TextureMapper Example UI template in TouchGFX Designer"),(0,n.kt)("h2",v({},{id:"api-reference"}),"API Reference"),(0,n.kt)(i.Z,{mdxType:"FurtherReading"},(0,n.kt)("li",null,(0,n.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_texture_mapper",mdxType:"Link"},"API reference for the TextureMapper class")),(0,n.kt)("li",null,(0,n.kt)(d.Z,{to:"../../../../api/classes/classtouchgfx_1_1_animation_texture_mapper",mdxType:"Link"},"API reference for the AnimationTextureMapper class"))))}P.isMDXComponent=!0}}]);