"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1495],{3905:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},d="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),s=a,m=d["".concat(c,".").concat(s)]||d[s]||k[s]||o;return n?r.createElement(m,l(l({ref:e},u),{},{components:n})):r.createElement(m,l({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i[d]="string"==typeof t?t:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},43861:function(t,e,n){var r=n(67294);class a extends r.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return r.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=a},8736:function(t,e,n){n.r(e),n.d(e,{assets:function(){return f},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return N}});var r=n(3905),a=n(39130),o=n(43861),l=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,k=(t,e,n)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,s=(t,e)=>{for(var n in e||(e={}))u.call(e,n)&&k(t,n,e[n]);if(p)for(var n of p(e))d.call(e,n)&&k(t,n,e[n]);return t};const m={title:"colortype"},g=void 0,h={unversionedId:"api/classes/structtouchgfx_1_1colortype",id:"api/classes/structtouchgfx_1_1colortype",title:"colortype",description:"",source:"@site/docs/api/classes/structtouchgfx_1_1colortype.mdx",sourceDirName:"api/classes",slug:"/api/classes/structtouchgfx_1_1colortype",permalink:"/4.16/docs/api/classes/structtouchgfx_1_1colortype",draft:!1,tags:[],version:"current",frontMatter:{title:"colortype"},sidebar:"docs",previous:{title:"Color",permalink:"/4.16/docs/api/classes/classtouchgfx_1_1_color"},next:{title:"ConstFont",permalink:"/4.16/docs/api/classes/classtouchgfx_1_1_const_font"}},f={},N=[{value:"Public Functions",id:"public-functions",level:2},{value:"Public Attributes",id:"public-attributes",level:2},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"colortype",id:"colortype",level:3},{value:"colortype",id:"colortype-1",level:3},{value:"getColor32",id:"getcolor32",level:3},{value:"operator uint32_t",id:"operator-uint32_t",level:3},{value:"Public Attributes Documentation",id:"public-attributes-documentation",level:2},{value:"color",id:"color",level:3}],y={toc:N};function b(t){var e,n=t,{components:l}=n,k=((t,e)=>{var n={};for(var r in t)u.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&p)for(var r of p(t))e.indexOf(r)<0&&d.call(t,r)&&(n[r]=t[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(e=s(s({},y),k),i(e,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null," This type can contain a color value.\nNote that in order to maintain backwards compatibility, casting this type to an integral value will yield a 16-bit value. To extract a 24/32-bit color from this type, use the getColor32 function. "),(0,r.kt)("h2",s({},{id:"public-functions"}),"Public Functions"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-colortype",mdxType:"Link"},"colortype")),"()")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Default constructor.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-colortype",mdxType:"Link"},"colortype")),"(uint32_t col)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Constructor which creates a colortype with the given color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"FORCE_INLINE_FUNCTION uint32_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-getcolor32",mdxType:"Link"},"getColor32")),"() const")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Gets color as a 32bit value suitable for passing to ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_color#function-getredcolor"}),"Color::getRedColor()"),", ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_color#function-getgreencolor"}),"Color::getGreenColor()")," and ",(0,r.kt)("a",s({parentName:"td"},{href:"classtouchgfx_1_1_color#function-getbluecolor"}),"Color::getBlueColor()")," which will handle all bitdeptchs.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-operator uint32_t",mdxType:"Link"},"operator uint32_t")),"() const")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"Cast that converts the given colortype to an uint32_t.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",s({},{id:"public-attributes"}),"Public Attributes"),(0,r.kt)("div",{class:"function-table",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:"right"})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"}),"uint32_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)("strong",{parentName:"td"},(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#variable-color",mdxType:"Link"},"color")))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The color.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:"right"})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("h2",s({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1colortype#function-colortype",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"colortype"}),"colortype"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-colortype",mdxType:"Link"},"colortype")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Default constructor. "),(0,r.kt)("p",null,"Creates a black (0) color. "))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1colortype#function-colortype",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"colortype-1"}),"colortype"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-colortype",mdxType:"Link"},"colortype")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"uint32_t"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"col"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",s({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Constructor which creates a colortype with the given color. "),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getcolorfrom24bitrgb"}),"Color::getColorFrom24BitRGB()")," to create a color that will work on your selected ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD")," type."),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"col"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"The color."))))),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getcolorfrom24bitrgb"}),"Color::getColorFrom24BitRGB"))))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1colortype#function-getcolor32",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"getcolor32"}),"getColor32"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"FORCE_INLINE_FUNCTION uint32_t","\xa0",(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-getcolor32",mdxType:"Link"},"getColor32")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Gets color as a 32bit value suitable for passing to ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getredcolor"}),"Color::getRedColor()"),", ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getgreencolor"}),"Color::getGreenColor()")," and ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getbluecolor"}),"Color::getBlueColor()")," which will handle all bitdeptchs. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The color 32.")),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getredcolor"}),"Color::getRedColor"),", ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getgreencolor"}),"Color::getGreenColor"),", ",(0,r.kt)("a",s({parentName:"p"},{href:"classtouchgfx_1_1_color#function-getbluecolor"}),"Color::getBlueColor"))))),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1colortype#function-operator uint32_t",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"operator-uint32_t"}),"operator uint32_t"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})),(0,r.kt)("th",s({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),(0,r.kt)(a.Z,{to:"structtouchgfx_1_1colortype#function-operator uint32_t",mdxType:"Link"},"operator uint32_t")),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"("),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null})),(0,r.kt)("td",s({parentName:"tr"},{align:null}),")"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"const"))))),(0,r.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,r.kt)("p",null,"Cast that converts the given colortype to an uint32_t. "),(0,r.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,r.kt)("div",{class:"api-content-indented",markdown:"1"},(0,r.kt)("p",null,"The result of the operation. ")))),(0,r.kt)("h2",s({},{id:"public-attributes-documentation"}),"Public Attributes Documentation"),(0,r.kt)(o.Z,{url:"structtouchgfx_1_1colortype#variable-color",mdxType:"DoxybookHeaderLink"}),(0,r.kt)("h3",s({},{id:"color"}),"color"),(0,r.kt)("div",{class:"api-container",markdown:"1"},(0,r.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,r.kt)("p",null,"uint32_t color ")),(0,r.kt)("div",{class:"api-container-content",markdown:"1"},(0,r.kt)("p",null,"The color. "))))}b.isMDXComponent=!0}}]);