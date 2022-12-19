"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[7995],{3905:function(t,e,r){r.d(e,{Zo:function(){return p},kt:function(){return m}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},i=Object.keys(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)r=i[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),d=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},p=function(t){var e=d(t.components);return a.createElement(c.Provider,{value:e},t.children)},u="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,i=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),u=d(r),k=n,m=u["".concat(c,".").concat(k)]||u[k]||s[k]||i;return r?a.createElement(m,o(o({ref:e},p),{},{components:r})):a.createElement(m,o({ref:e},p))}));function m(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var i=r.length,o=new Array(i);o[0]=k;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l[u]="string"==typeof t?t:n,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},43861:function(t,e,r){var a=r(67294);class n extends a.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return a.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=n},68802:function(t,e,r){r.r(e),r.d(e,{assets:function(){return b},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return h}});var a=r(3905),n=r(39130),i=r(43861),o=Object.defineProperty,l=Object.defineProperties,c=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?o(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,k=(t,e)=>{for(var r in e||(e={}))p.call(e,r)&&s(t,r,e[r]);if(d)for(var r of d(e))u.call(e,r)&&s(t,r,e[r]);return t};const m={title:"Point3D"},f=void 0,g={unversionedId:"api/classes/structtouchgfx_1_1_point3_d",id:"api/classes/structtouchgfx_1_1_point3_d",title:"Point3D",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1_point3_d.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1_point3_d",permalink:"/4.16/ja/docs/api/classes/structtouchgfx_1_1_point3_d",draft:!1,tags:[],version:"current",frontMatter:{title:"Point3D"},sidebar:"docs",previous:{title:"Point",permalink:"/4.16/ja/docs/api/classes/structtouchgfx_1_1_point"},next:{title:"Point4",permalink:"/4.16/ja/docs/api/classes/classtouchgfx_1_1_point4"}},b={},h=[{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"U",id:"u",level:3},{value:"V",id:"v",level:3},{value:"X",id:"x",level:3},{value:"Y",id:"y",level:3},{value:"Z",id:"z",level:3}],v={toc:h};function y(t){var e,r=t,{components:o}=r,s=((t,e)=>{var r={};for(var a in t)p.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&d)for(var a of d(t))e.indexOf(a)<0&&u.call(t,a)&&(r[a]=t[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(e=k(k({},v),s),l(e,c({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A 3D point. "),(0,a.kt)("h2",k({},{id:"public-attributes"}),"Public Attributes"),(0,a.kt)("div",{class:"function-table",markdown:"1"},(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",k({parentName:"tr"},{align:"right"})),(0,a.kt)("th",k({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_point3_d#variable-u",mdxType:"Link"},"U")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The U coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_point3_d#variable-v",mdxType:"Link"},"V")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The V coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_point3_d#variable-x",mdxType:"Link"},"X")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The X coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),(0,a.kt)("a",k({parentName:"td"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_point3_d#variable-y",mdxType:"Link"},"Y")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The Y coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"}),"float"),(0,a.kt)("td",k({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},(0,a.kt)(n.Z,{to:"structtouchgfx_1_1_point3_d#variable-z",mdxType:"Link"},"Z")))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null}),"The Z coordinate.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",k({parentName:"tr"},{align:"right"})),(0,a.kt)("td",k({parentName:"tr"},{align:null})))))),(0,a.kt)("h2",k({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-u",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"u"}),"U"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float U ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The U coordinate. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-v",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"v"}),"V"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float V ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The V coordinate. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-x",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"x"}),"X"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")," X ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The X coordinate. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-y",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"y"}),"Y"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,(0,a.kt)("a",k({parentName:"p"},{href:"../namespacetouchgfx#typedef-fixed28_4"}),"fixed28_4")," Y ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The Y coordinate. "))),(0,a.kt)(i.Z,{url:"structtouchgfx_1_1_point3_d#variable-z",mdxType:"DoxybookHeaderLink"}),(0,a.kt)("h3",k({},{id:"z"}),"Z"),(0,a.kt)("div",{class:"api-container",markdown:"1"},(0,a.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,a.kt)("p",null,"float Z ")),(0,a.kt)("div",{class:"api-container-content",markdown:"1"},(0,a.kt)("p",null,"The Z coordinate. "))))}y.isMDXComponent=!0}}]);