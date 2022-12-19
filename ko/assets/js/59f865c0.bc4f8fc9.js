"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1317],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return _}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function c(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},s="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=d(a),g=r,_=s["".concat(o,".").concat(g)]||s[g]||u[g]||l;return a?n.createElement(_,i(i({ref:e},p),{},{components:a})):n.createElement(_,i({ref:e},p))}));function _(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=g;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c[s]="string"==typeof t?t:r,i[1]=c;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},61722:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return h},default:function(){return f},frontMatter:function(){return _},metadata:function(){return k},toc:function(){return b}});var n=a(3905),r=a(39130),l=a(43861),i=Object.defineProperty,c=Object.defineProperties,o=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,g=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&u(t,a,e[a]);if(d)for(var a of d(e))s.call(e,a)&&u(t,a,e[a]);return t};const _={title:"GraphDragEvent"},h=void 0,k={unversionedId:"api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event",id:"api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event",title:"GraphDragEvent",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event",permalink:"/4.16/ko/docs/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event",draft:!1,tags:[],version:"current",frontMatter:{title:"GraphDragEvent"},sidebar:"docs",previous:{title:"GraphClickEvent",permalink:"/4.16/ko/docs/api/classes/classtouchgfx_1_1_abstract_data_graph_1_1_graph_click_event"},next:{title:"GraphElementArea",permalink:"/4.16/ko/docs/api/classes/classtouchgfx_1_1_graph_element_area"}},m={},b=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"GraphDragEvent",id:"graphdragevent",level:3},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"dragEvent",id:"dragevent",level:3},{value:"index",id:"index",level:3}],v={toc:b};function f(t){var e,a=t,{components:i}=a,u=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&d)for(var n of d(t))e.indexOf(n)<0&&s.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=g(g({},v),u),c(e,o({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," An object of this type is passed with each callback that is sent when the graph is dragged.\nThe object contains the data index that was pressed and the details of the drag event, e.g. old and new screen coordinates. "),(0,n.kt)("h2",g({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#function-graphdragevent",mdxType:"Link"},"GraphDragEvent")),"(int16_t i, const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & event)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event"}),"GraphDragEvent")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",g({},{id:"public-attributes"}),"Public Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:"right"})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," &"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#variable-dragevent",mdxType:"Link"},"dragEvent")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The DragEvent that caused the callback to be executed.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"}),"int16_t"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#variable-index",mdxType:"Link"},"index")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The index of the item where the drag has ended.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:"right"})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",g({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#function-graphdragevent",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",g({},{id:"graphdragevent"}),"GraphDragEvent"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#function-graphdragevent",mdxType:"Link"},"GraphDragEvent")),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"int16_t"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"i ,"),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," &"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})),(0,n.kt)("td",g({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Initializes a new instance of the ",(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event"}),"GraphDragEvent")," class. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",g({parentName:"tr"},{align:null})),(0,n.kt)("th",g({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"i"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The index of the item where the drag has ended.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",g({parentName:"tr"},{align:null}),"event"),(0,n.kt)("td",g({parentName:"tr"},{align:null}),"The ",(0,n.kt)("a",g({parentName:"td"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," that caused the callback to be executed."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_abstract_data_graph#function-setdragaction"}),"setDragAction"))))),(0,n.kt)("h2",g({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#variable-dragevent",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",g({},{id:"dragevent"}),"dragEvent"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"const ",(0,n.kt)("a",g({parentName:"p"},{href:"classtouchgfx_1_1_drag_event"}),"DragEvent")," & dragEvent ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The DragEvent that caused the callback to be executed. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_abstract_data_graph_1_1_graph_drag_event#variable-index",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",g({},{id:"index"}),"index"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"int16_t index ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The index of the item where the drag has ended. "))))}f.isMDXComponent=!0}}]);