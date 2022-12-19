"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5904],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:l,target:"_blank"},r.createElement("img",{width:n,height:i,src:l})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=l},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},60204:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},10630:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("i",null,this.props.children)}}t.Z=a},37793:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class l extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:i},this.props.children)}}t.Z=l},50179:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return T},default:function(){return E},frontMatter:function(){return v},metadata:function(){return b},toc:function(){return N}});var r=n(3905),a=n(44035),i=n(29415),l=n(37793),o=n(10630),p=n(31217),s=n(60204),c=n(39130),d=n(22425),u=Object.defineProperty,m=Object.defineProperties,h=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?u(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))f.call(t,n)&&x(e,n,t[n]);if(g)for(var n of g(t))k.call(t,n)&&x(e,n,t[n]);return e};const v={id:"text-area",title:"TextArea"},T=void 0,b={unversionedId:"development/ui-development/ui-components/miscellaneous/text-area",id:"development/ui-development/ui-components/miscellaneous/text-area",title:"TextArea",description:"A TextArea displays text on the screen. The text of a TextArea can be entirely configured in size, color, custom fonts, dynamic texts etc. For more information on how to handle texts in TouchGFX Designer, read the Texts and Fonts article.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/ui-components/miscellaneous/text-area.mdx",sourceDirName:"development/ui-development/ui-components/miscellaneous",slug:"/development/ui-development/ui-components/miscellaneous/text-area",permalink:"/4.16/zh-TW/docs/development/ui-development/ui-components/miscellaneous/text-area",draft:!1,tags:[],version:"current",frontMatter:{id:"text-area",title:"TextArea"},sidebar:"docs",previous:{title:"Slider",permalink:"/4.16/zh-TW/docs/development/ui-development/ui-components/miscellaneous/slider"},next:{title:"AnalogClock",permalink:"/4.16/zh-TW/docs/development/ui-development/ui-components/miscellaneous/analog-clock"}},w={},N=[{value:"Widget Group",id:"widget-group",level:2},{value:"Properties",id:"properties",level:2},{value:"Interactions",id:"interactions",level:2},{value:"Actions",id:"actions",level:3},{value:"Triggers",id:"triggers",level:3},{value:"Performance",id:"performance",level:2},{value:"Examples",id:"examples",level:2},{value:"Generated Code",id:"generated-code",level:3},{value:"User Code",id:"user-code",level:3},{value:"TouchGFX Designer Examples",id:"touchgfx-designer-examples",level:3},{value:"API Reference",id:"api-reference",level:2}],A={toc:N};function E(e){var t,n=e,{components:u}=n,x=((e,t)=>{var n={};for(var r in e)f.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&g)for(var r of g(e))t.indexOf(r)<0&&k.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=y(y({},A),x),m(t,h({components:u,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"A TextArea displays text on the screen. The text of a TextArea can be entirely configured in size, color, custom fonts, dynamic texts etc. For more information on how to handle texts in TouchGFX Designer, read the ",(0,r.kt)("a",y({parentName:"p"},{href:"../../touchgfx-engine-features/texts-and-fonts"}),"Texts and Fonts")," article."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-area/widget-appearance.gif",mdxType:"Figure"},"TextArea running in the simulator"),(0,r.kt)("h2",y({},{id:"widget-group"}),"Widget Group"),(0,r.kt)("p",null,"The TextArea can be found in the Miscellaneous widget group in TouchGFX Designer."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-components/text-area/widget-group-v4.16.webp",mdxType:"Figure"},"TextArea in TouchGFX Designer"),(0,r.kt)("h2",y({},{id:"properties"}),"Properties"),(0,r.kt)("p",null,"The properties for a TextArea in TouchGFX Designer."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Group")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Property Descriptions")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Name")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Name")," of the widget. ",(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Name is the unique identifier used in TouchGFX Designer and code"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Location")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Y")," specify the top left corner of the widget relative to its parent.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"W")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"H")," specify the width and height of the widget.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Auto-size")," specifies whether the size of the widget will be automatically set according to the text input.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Lock")," specifies if the widget should be locked in its current X, Y, W and H.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Locking the widget also disables interacting with the widget through the screen."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Visible")," specifies the visibility of the widget. ",(0,r.kt)("br",null)," ",(0,r.kt)(s.Z,{mdxType:"InlineNote"},"Making the widget invisible also disables interacting with the widget through the screen"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Text")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Single Use")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Ressource")," specify the type of text: unique or from a known ressource.",(0,r.kt)("br",null),(0,r.kt)("br",null),"When Single Use is selected:",(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Text")," specifies the content of the text to be displayed.",(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Typography")," specifies the format of the text.",(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Alignment")," specifies the horizontal alignment of the text.",(0,r.kt)("br",null),(0,r.kt)("br",null),"When Ressource is selected:",(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Ressource ID")," specifies the Ressource to retrieve the text from.",(0,r.kt)("br",null),(0,r.kt)("br",null),"Up to two wildcards can be created for dynamic text input, which are indicated as '","<","tag",">","'  where 'tag' can be any string.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Appearance")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Color")," specifies the color of the displayed text.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Alpha")," specifies the transparency of the widget.",(0,r.kt)("br",null),(0,r.kt)(s.Z,{mdxType:"InlineNote"},"The alpha value ranges between 0 and 255 for the widget. 0 is fully transparent and 255 is solid."),(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Line Spacing")," specifies the space between lines.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"Text Rotation")," sets the rotation in degrees for the text.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Mixins")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)(o.Z,{mdxType:"Property"},"Draggable")," specifies if the widget is draggable at runtime.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"ClickListener")," specifies if the widget emits a callback when clicked.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"FadeAnimator")," specifies if the widget can animate changes to its ",(0,r.kt)(o.Z,{mdxType:"Property"},"Alpha")," value.",(0,r.kt)("br",null),(0,r.kt)("br",null),(0,r.kt)(o.Z,{mdxType:"Property"},"MoveAnimator")," specifies if the widget can animate changes to ",(0,r.kt)(o.Z,{mdxType:"Property"},"X")," and ",(0,r.kt)(o.Z,{mdxType:"Property"},"Y")," values.")))),(0,r.kt)("h2",y({},{id:"interactions"}),"Interactions"),(0,r.kt)("p",null,"The actions and triggers supported by the TextArea are described in the following sections."),(0,r.kt)("h3",y({},{id:"actions"}),"Actions"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Widget specific action")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set text")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Set the text of the widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Resize widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Resize the widget.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Set wildcard")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Set the wildcard of the widget. A wildcard has to be already added to the TextArea for this action to work.")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"Standard widget action")),(0,r.kt)("th",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Move widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Move a widget to a new position over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Fade widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Modify alpha value of widget over time.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Hide widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Hides a widget (sets visibility to false).")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",y({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},"Show widget")),(0,r.kt)("td",y({parentName:"tr"},{align:null}),"Make a hidden widget visible (sets visibility to true).")))),(0,r.kt)("h3",y({},{id:"triggers"}),"Triggers"),(0,r.kt)("p",null,"The TextArea does not emit any triggers."),(0,r.kt)("h2",y({},{id:"performance"}),"Performance"),(0,r.kt)("p",null,"A TextArea is dependent on text drawing. Text drawing is very similar to general image drawing (though due to the nature of text characters, a significant amount of alpha blending takes place). Therefore, the TextArea is considered a fast performing widget on most platforms."),(0,r.kt)("p",null,"For more details on text drawing performance, read the ",(0,r.kt)("a",y({parentName:"p"},{href:"../general-ui-component-performance"}),"General UI Component Performance")," section."),(0,r.kt)("h2",y({},{id:"examples"}),"Examples"),(0,r.kt)("h3",y({},{id:"generated-code"}),"Generated Code"),(0,r.kt)("p",null,"In the generated code for the View base class we can see how TouchGFX Designer sets up a TextArea."),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"touchgfx::TextAreaWithOneWildcard textArea;\n\n/*\n * Wildcard Buffers\n */\nstatic const uint16_t TEXTAREA_SIZE = 20;\ntouchgfx::Unicode::UnicodeChar textAreaBuffer[TEXTAREA_SIZE];\n")),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1ViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),'textArea.setPosition(40, 111, 400, 50);\ntextArea.setColor(touchgfx::Color::getColorFrom24BitRGB(60, 180, 230));\ntextArea.setLinespacing(0);\nUnicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_TOUCHGFXID).getText());\ntextArea.setWildcard(textAreaBuffer);\ntextArea.setTypedText(touchgfx::TypedText(T_SINGLEUSEID1));\n')),(0,r.kt)(l.Z,{mdxType:"Tip"},"You can use these functions and the others available in the TextArea class in user code. Remember to force a redraw by calling ",(0,r.kt)(p.Z,{mdxType:"InlineCode"},"textArea.invalidate()")," if you change the appearance of the widget."),(0,r.kt)("h3",y({},{id:"user-code"}),"User Code"),(0,r.kt)("p",null,"The following example illustrates how to implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"handleTickEvent()")," function to change the text at runtime using a wildcard. Running this code creates the application shown at the ",(0,r.kt)("a",y({parentName:"p"},{href:"text-area"}),"beginning of this section"),"."),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    virtual ~Screen1View() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n\n    virtual void handleTickEvent();\nprotected:\n    uint8_t counter;\n    bool flag;\n};\n")),(0,r.kt)(d.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",y({parentName:"pre"},{className:"language-cpp"}),'Screen1View::Screen1View():\n    counter(0),\n    flag(true)\n{}\n\nvoid Screen1View::handleTickEvent()\n{\n    counter++;\n    if(counter%120 == 0) // every 2s\n    {\n        if(flag)\n        {\n            Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_STMICROID).getText());\n            flag = false;\n        }\n        else\n        {\n            Unicode::snprintf(textAreaBuffer, TEXTAREA_SIZE, "%s", touchgfx::TypedText(T_TOUCHGFXID).getText());\n            flag = true;\n        }\n        textArea.invalidate();\n        counter = 0;\n    }\n}\n')),(0,r.kt)("h3",y({},{id:"touchgfx-designer-examples"}),"TouchGFX Designer Examples"),(0,r.kt)("p",null,"To further explore the TextArea, try creating a new application within TouchGFX Designer with one of the following UI templates:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/text-example.webp",mdxType:"Figure"},"Text Example UI template in TouchGFX Designer"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/ui-templates/arabic-text-example.webp",mdxType:"Figure"},"Arabic Text Example UI template in TouchGFX Designer"),(0,r.kt)("h2",y({},{id:"api-reference"}),"API Reference"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},(0,r.kt)("li",null,(0,r.kt)(c.Z,{to:"../../../../api/classes/classtouchgfx_1_1_text_area",mdxType:"Link"},"API reference for the TextArea class"))))}E.isMDXComponent=!0}}]);