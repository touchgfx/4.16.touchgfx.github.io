(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8513],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,l=function(e,t){if(null==e)return{};var n,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=u(n),s=l,k=m["".concat(p,".").concat(s)]||m[s]||c[s]||a;return n?r.createElement(k,i(i({ref:t},d),{},{components:n})):r.createElement(k,i({ref:t},d))}));function s(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<a;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},22425:function(e,t,n){"use strict";var r=n(67294);class l extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=l},44035:function(e,t,n){"use strict";var r=n(67294),l=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,i=(0,l.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:a,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){"use strict";var r=n(67294);class l extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=l},93054:function(e,t,n){"use strict";var r=n(67294),l=n(88678);const a=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(l.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:a},this.props.children)}}t.Z=i},35096:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function l(e){return void 0!==e&&!r(e)}n.d(t,{b:function(){return r},Z:function(){return l}})},25026:function(e,t,n){"use strict";n.d(t,{C:function(){return a},Z:function(){return i}});var r=n(11368),l=n(35096);function a(){const{siteConfig:{baseUrl:e="/",url:t}={}}=(0,r.Z)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:a=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if((0,l.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return a?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=a();return n(e,t)}},79470:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return g},contentTitle:function(){return f},metadata:function(){return h},toc:function(){return b},default:function(){return N}});var r=n(3905),l=n(44035),a=n(93054),i=n(22425),o=Object.defineProperty,p=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&s(e,n,t[n]);if(d)for(var n of d(t))m.call(t,n)&&s(e,n,t[n]);return e};const g={id:"03-display-internal",title:"3. \u5185\u90e8RAM\u505a\u5e27\u7f13\u51b2",sidebar_label:"3. \u5185\u90e8RAM\u505a\u5e27\u7f13\u51b2"},f=void 0,h={unversionedId:"development/board-bring-up/how-to/03-display-internal",id:"development/board-bring-up/how-to/03-display-internal",isDocsHomePage:!1,title:"3. \u5185\u90e8RAM\u505a\u5e27\u7f13\u51b2",description:"\u52a8\u673a",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/board-bring-up/how-to/03-display-internal.mdx",sourceDirName:"development/board-bring-up/how-to",slug:"/development/board-bring-up/how-to/03-display-internal",permalink:"/4.16/zh-CN/docs/development/board-bring-up/how-to/03-display-internal",version:"current",sidebarPosition:3,frontMatter:{id:"03-display-internal",title:"3. \u5185\u90e8RAM\u505a\u5e27\u7f13\u51b2",sidebar_label:"3. \u5185\u90e8RAM\u505a\u5e27\u7f13\u51b2"},sidebar:"docs",previous:{title:"2. CPU\u8fd0\u884c",permalink:"/4.16/zh-CN/docs/development/board-bring-up/how-to/02-cpu-running"},next:{title:"4. \u5916\u90e8RAM",permalink:"/4.16/zh-CN/docs/development/board-bring-up/how-to/04-enable-external-ram"}},b=[{value:"\u52a8\u673a",id:"motivation",children:[]},{value:"\u76ee\u6807",id:"goal",children:[{value:"\u9a8c\u8bc1",id:"verification",children:[]}]},{value:"\u5148\u51b3\u6761\u4ef6",id:"prerequisites",children:[]},{value:"\u6267\u884c",id:"do",children:[{value:"\u5e76\u884cRGB\u663e\u793a\u5668",id:"parallel-rgb-displays",children:[]},{value:"SPI \u663e\u793a\u5668",id:"spi-display",children:[]}]},{value:"\u68c0\u67e5\u663e\u793a\u5668\u989c\u8272",id:"checking-the-display-colors",children:[]}],y={toc:b};function N(e){var t,n=e,{components:o}=n,s=((e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&d)for(var r of d(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=k(k({},y),s),p(t,u({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("h2",k({},{id:"motivation"}),"\u52a8\u673a"),(0,r.kt)("p",null,"\u5728\u8fd9\u4e00\u6b65\u4e2d\uff0c\u901a\u8fc7\u5c06\u50cf\u7d20\u6570\u636e\u4ece\u5185\u90e8RAM\u4f20\u8f93\u5230\u663e\u793a\u5668\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u663e\u793a\u5668\u4e0a\u4f1a\u663e\u793a\u5185\u5bb9\u3002 \u6b64\u6b65\u9aa4\u53ef\u786e\u4fdd\u6211\u4eec\u80fd\u5c06\u6570\u636e\u4f20\u8f93\u5230\u663e\u793a\u5668\uff0c\u5e76\u4e14\u53ef\u4ee5\u4e0d\u65ad\u66f4\u65b0\u663e\u793a\u5668\u5185\u5bb9\u3002"),(0,r.kt)("p",null,"\u9664\u4e86\u5c06\u56fe\u50cf\u6570\u636e\u4f20\u8f93\u5230\u663e\u793a\u5668\u4ee5\u5916\uff0c\u6211\u4eec\u8fd8\u5fc5\u987b\u786e\u4fdd\u53ef\u8fde\u7eed\u5c06\u65b0\u6570\u636e\u53d1\u9001\u5230\u663e\u793a\u5668\uff0c\u4e14\u4e0d\u4f1a\u5728\u663e\u793a\u5668\u4e0a\u51fa\u73b0\u9519\u8bef\u3002 \u6211\u4eec\u8fd8\u5c06\u6d4b\u91cf\u4f20\u8f93\u901f\u5ea6\uff0c\u56e0\u4e3a\u8fd9\u4f1a\u5f71\u54cd\u663e\u793a\u5668\u7684\u5e27\u7387\u3002"),(0,r.kt)("p",null,"\u6b63\u5982\u6211\u4eec\u4ece\u4e0a\u4e00\u8282\u4e2d\u5b66\u5230\u7684\u90a3\u6837\uff0c\u6211\u4eec\u5c06\u5728\u5185\u90e8RAM\u4e2d\u653e\u7f6e\u4e00\u4e2a\u5e27\u7f13\u51b2\uff0c\u8be5RAM\u53ef\u8bfb\u5199\u3002 \u6211\u4eec\u5c06\u91cd\u590d\u66f4\u65b0\u8be5\u5e27\u7f13\u51b2\uff0c\u5e76\u5c06\u5176\u4f20\u8f93\u5230\u663e\u793a\u5668\u3002"),(0,r.kt)("p",null,"\u56de\u987e\u6b64 ",(0,r.kt)("a",k({parentName:"p"},{href:"../../../basic-concepts/framebuffer"}),"\u5e27\u7f13\u51b2")," \u662f\u7531\u6b64 \u516c\u5f0f\u8ba1\u7b97\u7684\uff1a"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"\u5bbd x \u9ad8 x bpp")),(0,r.kt)("p",null,"\u4f8b\u5982\uff0c\u5206\u8fa8\u7387\u4e3a480 x 272\u768416\u4f4d\u666e\u901a\u663e\u793a\u5668\u5c06\u5360\u7528480x272x16/8\u5b57\u8282 \u537361120\u5b57\u8282\u7684\u7f13\u5b58\u3002"),(0,r.kt)("p",null,"\u5373\u4f7f\u663e\u793a\u5668\u5c3a\u5bf8\u8fc7\u5927\u5bfc\u81f4\u6240\u9700\u6574\u5e27\u7f13\u5b58\u65e0\u6cd5\u5b58\u50a8\u5728\u5185\u90e8RAM\u4e2d\uff0c\u4e5f\u4e0d\u5e94\u8df3\u8fc7\u6b64\u6b65\u9aa4\u3002 \u800c\u5e94\u5c06\u663e\u793a\u63a7\u5236\u5668\u914d\u7f6e\u4e3a\u4ec5\u66f4\u65b0\u663e\u793a\u5668\u7684\u4e00\u90e8\u5206\u3002 \u8fd9\u6837\u4e00\u6765\uff0c\u6211\u4eec\u53ef\u4ee5\u8c03\u6574\u5e27\u7f13\u51b2\u6240\u9700\u7684RAM\u91cf\uff0c\u5e76\u4f7f\u5176\u9002\u5408\u5185\u90e8RAM\u5927\u5c0f\u3002"),(0,r.kt)("p",null,"\u663e\u793a\u63a5\u53e3\u7684\u7c7b\u578b\u5bf9\u4f20\u8f93\u5e27\u7f13\u51b2\u6240\u9700\u7684\u8bbe\u7f6e\u548c\u4ee3\u7801\u6709\u5f88\u5927\u5f71\u54cd\u3002 \u5728\u672c\u8282\u4e2d\uff0c\u6211\u4eec\u5c06\u9996\u5148\u8ba8\u8bba\u8fde\u63a5\u81f3LTDC\u7684\u663e\u793a\u5668\u3002 \u5982\u679c\u60a8\u4f7f\u7528\u8bf8\u5982SPI\u663e\u793a\u5668\u4e4b\u7c7b\u7684\u663e\u793a\u5668\uff0c\u4ee3\u7801\u4f1a\u6709\u5f88\u5927\u533a\u522b\uff0c\u4f46\u4efb\u52a1\u548c\u76ee\u6807\u76f8\u540c\u3002"),(0,r.kt)("h2",k({},{id:"goal"}),"\u76ee\u6807"),(0,r.kt)("p",null,"\u672c\u8282\u7684\u76ee\u6807\u662f\u5c06\u5e27\u7f13\u51b2\u5185\u5bb9\u4f20\u8f93\u5230\u663e\u793a\u5668\u3002 You should also verify that you can modify the framebuffer content and resend the framebuffer continuously."),(0,r.kt)("h3",k({},{id:"verification"}),"\u9a8c\u8bc1"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u672c\u8282\u7684\u9a8c\u8bc1\u70b9\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\u9a8c\u8bc1\u70b9"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\u57fa\u672c\u539f\u7406"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u663e\u793a\u5e27\u7f13\u5b58"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u663e\u793a\u63a7\u5236\u5668\u6216SPI\u5df2\u914d\u7f6e\u5e76\u6b63\u5728\u8fd0\u884c")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u663e\u793a\u66f4\u65b0\u7684\u5e27\u7f13\u5b58"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u6211\u4eec\u77e5\u9053\u5982\u4f55\u91cd\u590d\u53d1\u9001\u5e27\u7f13\u5b58\u6570\u636e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u989c\u8272\u6b63\u786e"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"LTDC\u76f8\u5173\u7684GPIO\u914d\u7f6e\u6b63\u786e\uff0c\u663e\u793a\u5668\u7684\u6570\u636e\u683c\u5f0f\u4e0e\u6211\u4eec\u7684\u5e27\u7f13\u51b2\u5339\u914d")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u5e27\u7387\u6b63\u786e"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u914d\u7f6e\u50cf\u7d20\u65f6\u949f\u548c\u540c\u6b65\u6cbf\uff0c\u4ee5\u83b7\u5f97\u6240\u9700\u5e27\u7387")))),(0,r.kt)("h2",k({},{id:"prerequisites"}),"\u5148\u51b3\u6761\u4ef6"),(0,r.kt)("p",null,"\u4ee5\u4e0b\u662f\u6b64\u6b65\u9aa4\u7684\u5148\u51b3\u6761\u4ef6\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6709\u5173\u663e\u793a\u5668\u7684\u4fe1\u606f\uff0c\u901a\u5e38\u4e3a\u6570\u636e\u624b\u518c"),(0,r.kt)("li",{parentName:"ul"},"\u6709\u5173MCU\u548c\u663e\u793a\u5668\u4e4b\u95f4\u7684\u8fde\u63a5\u7684\u4fe1\u606f\u3002")),(0,r.kt)("h2",k({},{id:"do"}),"\u6267\u884c"),(0,r.kt)("p",null,"\u6839\u636e\u663e\u793a\u5668\u7c7b\u578b\uff0c\u6240\u9700\u8bbe\u7f6e\u4f1a\u6709\u6240\u4e0d\u540c\u3002 \u4f46\u5bf9\u4e8e\u6240\u6709\u7c7b\u578b\u7684\u663e\u793a\u5668\uff0c\u6211\u4eec\u90fd\u9700\u8981\u5185\u90e8RAM\u4e2d\u6709\u4e00\u4e2a\u5e27\u7f13\u51b2\u3002 \u4e00\u79cd\u5206\u914d\u8be5\u5b58\u50a8\u5668\u7684\u7b80\u5355\u65b9\u6cd5\u662f\u53ea\u58f0\u660e\u4e00\u4e2a\u5927\u5c0f\u5408\u9002\u7684\u5168\u5c40\u6570\u7ec4:"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"uint16_t framebuffer[480*272];  //16 bpp framebuffer\n")),(0,r.kt)("p",null,"\u5982\u679c\u5185\u90e8RAM\u4e0d\u8db3\u4ee5\u5bb9\u7eb3\u8be5\u6570\u7ec4\uff0c\u8bf7\u58f0\u660e\u4e00\u4e2a\u5bf9\u5e94\u4e8e\u8f83\u5c0f\u5206\u8fa8\u7387\u7684\u6570\u7ec4\uff0c\u6bd4\u65b9480x200\u3002"),(0,r.kt)("p",null,"\u5c06\u5e27\u7f13\u51b2\u4f20\u8f93\u5230\u663e\u793a\u5668\u7684\u65b9\u6cd5\u53d6\u51b3\u4e8e\u663e\u793a\u5668\u7c7b\u578b\u3002 \u6211\u4eec\u73b0\u5728\u6765\u4e86\u89e3\u4e00\u4e0b\u8fd9\u70b9\u3002"),(0,r.kt)("h3",k({},{id:"parallel-rgb-displays"}),"\u5e76\u884cRGB\u663e\u793a\u5668"),(0,r.kt)("p",null,"\u6211\u4eec\u9996\u5148\u5c06\u8ba8\u8bba\u8fde\u63a5\u81f3MCU\u7684LTDC\u63a7\u5236\u5668\u7684\u5e76\u884cRGB\u663e\u793a\u5668\u3002"),(0,r.kt)("p",null,"\u8fd9\u7c7b\u663e\u793a\u5668\u7684\u914d\u7f6e\u4efb\u52a1\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e0e\u663e\u793a\u5668\u6709\u5173\u7684GPIO\u8fde\u63a5"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6eLTDC\u63a7\u5236\u5668"),(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6eLTDC\u50cf\u7d20\u65f6\u949f"),(0,r.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u5e27\u7f13\u51b2\u5730\u5740"),(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u5e27\u7387")),(0,r.kt)("p",null,"\u4f5c\u4e3a\u8bf4\u660e\u6027\u793a\u4f8b\uff0c\u6211\u4eec\u5c06\u4f7f\u7528STM32F746Discovery\u8bc4\u4f30\u5957\u4ef6\u3002 \u6b64\u677f\u81ea\u5e26480*272\u663e\u793a\u5668\u3002"),(0,r.kt)("h4",k({},{id:"display-gpio"}),"\u663e\u793a\u76f8\u5173GPIO"),(0,r.kt)("p",null,"\u8be5\u663e\u793a\u5668\u4ee524 BPP\u6a21\u5f0f\u8fd0\u884c\uff0c\u6240\u4ee5\u6211\u4eec\u4e3aLTDC\u548c\u663e\u793a\u5668\u4e4b\u95f4\u7684\u8fde\u63a5\u914d\u7f6e24\u4e2aGPIO\u3002 \u8fd9\u5728\u591a\u5a92\u4f53-> LTDC-> GPIO\u8bbe\u7f6e\u4e0b\u7684CubeMX\u4e2d\u6700\u5bb9\u6613\u5b9e\u73b0:"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-01.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u914d\u7f6e\u663e\u793a\u76f8\u5173GPIO"),(0,r.kt)("p",null,"\u9664\u4e86\u7528\u4e8e\u50cf\u7d20\u4f20\u8f93\u768424\u4e2aGPIO(\u5982LTDC_B0) \u4ee5\u5916\uff0c\u6211\u4eec\u8fd8\u914d\u7f6e\u4e864\u4e2a\u663e\u793a\u63a7\u5236\u4fe1\u53f7:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\u4fe1\u53f7"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\u529f\u80fd"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"LTDC_CLK"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u50cf\u7d20\u65f6\u949f\u3002 \u5f53\u5bf924\u4e2a\u7ebf\u4e2d\u7684\u50cf\u7d20\u8fdb\u884c\u91c7\u6837\u65f6\uff0c\u5411\u663e\u793a\u5668\u53d1\u51fa\u4fe1\u53f7")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"LTDC_DE"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u6570\u636e\u4f7f\u80fd\u3002 \u5b83\u88ab\u6fc0\u6d3b\u65f6\u8fdb\u884c\u50cf\u7d20\u4f20\u8f93")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"LTDC_HSYNC"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u6c34\u5e73\u540c\u6b65\u3002 \u5141\u8bb8\u663e\u793a\u5668\u627e\u5230\u50cf\u7d20\u884c\u8d77\u70b9")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"LTDC_VSYNC"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u5782\u76f4\u540c\u6b65\u3002 \u5141\u8bb8\u663e\u793a\u5668\u627e\u5230\u5e27\u8d77\u70b9")))),(0,r.kt)("p",null,"\u68c0\u67e5\u60a8\u7684\u786c\u4ef6\u8bbe\u8ba1\u5e76\u8fdb\u884c\u76f8\u5e94\u7684\u914d\u7f6e\u3002"),(0,r.kt)("h4",k({},{id:"ltdc-configuration"}),"LTDC \u914d\u7f6e"),(0,r.kt)("p",null,"LTDC\u914d\u7f6e\u4f4d\u4e8e\u591a\u5a92\u4f53-> LTDC-> \u53c2\u6570\u8bbe\u7f6e\u4e0b\u7684CubeMX\u4e2d:"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-02.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u914d\u7f6eLTDC\u53c2\u6570"),(0,r.kt)("p",null,"\u6709\u6548\u5bbd\u5ea6\u548c\u9ad8\u5ea6\u4e0e\u663e\u793a\u5668\u7684\u5206\u8fa8\u7387\u5bf9\u5e94\u3002 \u6709\u5173\u540c\u6b65\u8109\u51b2\u5bbd\u5ea6\u548c\u6cbf\u5bbd\u5ea6\uff0c\u8bf7\u68c0\u67e5\u663e\u793a\u6570\u636e\u624b\u518c\u3002 \u53e6\u8bf7\u6ce8\u610f\u4fe1\u53f7\u6781\u6027\u3002 \u7070\u8272\u7684\u503c\u6839\u636e\u5176\u4ed6\u503c\u8ba1\u7b97\u800c\u6765\u3002 \u8fd9\u4e9b\u503c\u88ab\u5199\u5165LTDC\u5bc4\u5b58\u5668(\u4e5f\u53ef\u5728\u4ee3\u7801\u4e2d\u627e\u5230) \u3002"),(0,r.kt)("p",null,"\u73b0\u5728\u8bf7\u8f6c\u5230\u591a\u5a92\u4f53-> LTDC-> \u5c42\u8bbe\u7f6e\u201d\u4e0b\u7684LTDC\u5c42\u914d\u7f6e:"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-03.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u914d\u7f6eLTDC\u5c42\u53c2\u6570"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u8be5\u6d4b\u8bd5\uff0c\u5728TouchGFX\u4e2d\uff0c\u6211\u4eec\u901a\u5e38\u4ec5\u4f7f\u7528\u4e00\u5c42\u3002 \u7b2c0\u5c42\u7684\u5206\u8fa8\u7387\u5e94\u4e0e\u5e27\u7f13\u51b2\u5927\u5c0f\u5339\u914d\u3002 \u4ee5\u540e\u9700\u8981\u8bbe\u7f6e\u5e27\u7f13\u51b2\u5730\u5740\uff0c\u8fd9\u91cc\u5148\u4e0d\u7406\u5b83\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u58f0\u660e\u4e86\u5c0f\u4e8e\u663e\u793a\u5668\u5206\u8fa8\u7387\u7684\u5e27\u7f13\u51b2\u6570\u7ec4\uff0c\u5219\u8c03\u6574\u56fe\u5c42\u5927\u5c0f\uff0c\u4ee5\u4fbf\u4e0e\u5e27\u7f13\u51b2\u5c3a\u5bf8\u5339\u914d\u3002 LTDC\u5c06\u4f20\u8f93\u5e27\u7f13\u51b2\u4e2d\u6ca1\u6709\u7684\u663e\u793a\u5668\u50cf\u7d20\u80cc\u666f\u989c\u8272\u3002 \u5efa\u8bae\u5c06\u80cc\u666f\u989c\u8272\u8bbe\u7f6e\u4e3a\u53ef\u8bc6\u522b\u7684\u989c\u8272\uff0c\u5982\u7ea2\u8272(\u84dd\u8272)."),(0,r.kt)("h4",k({},{id:"clock-configuration"}),"\u65f6\u949f\u914d\u7f6e"),(0,r.kt)("p",null,"\u65f6\u949f\u914d\u7f6e\u4e5f\u5f88\u91cd\u8981\u3002 \u5fc5\u987b\u4f7f\u80fd\u6240\u6709GPIO\u548cLTDC\u7684\u65f6\u949f\u3002 \u50cf\u7d20\u65f6\u949f\u5fc5\u987b\u5728\u663e\u793a\u5668\u53ef\u63a5\u53d7\u7684\u8303\u56f4\u5185\u3002"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-04.png",noShadow:!1,width:"600",mdxType:"Figure"},"\u65f6\u949f\u914d\u7f6e"),(0,r.kt)("p",null,"LTDC\u53d6\u51b3\u4e8e3\u4e2a\u65f6\u949f: HCLK, PCLK2, and LCD_CLK."),(0,r.kt)("h4",k({},{id:"setting-the-framebuffer-address"}),"\u8bbe\u7f6e\u5e27\u7f13\u51b2\u5730\u5740"),(0,r.kt)("p",null,"\u5728CubeMX\u4e2d\uff0c\u6211\u4eec\u5c06\u7b2c0\u5c42\u7684\u5e27\u7f13\u51b2\u5730\u5740\u914d\u7f6e\u4e3a0xC0000000\u3002 \u6211\u4eec\u9700\u8981\u5c06\u5176\u66f4\u6539\u4e3a\u5185\u90e8RAM\u4e2d\u7684\u6570\u7ec4\u5730\u5740\u3002 \u8fd9\u53ef\u4ee5\u4f7f\u7528\u5176\u4e2d\u4e00\u4e2aCube\u56fa\u4ef6HAL\u51fd\u6570\u6765\u8f7b\u677e\u5b9e\u73b0\uff1a"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"main.c"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"  /* USER CODE BEGIN 2 */\n  HAL_LTDC_SetAddress(&hltdc, framebuffer, LTDC_LAYER_1);\n  /* USER CODE END 2 */\n")),(0,r.kt)("p",null,"HAL\u51fd\u6570\u4e2d\u7684\u5c42\u7f16\u53f7\u4e3a1\u30012\uff0c\u800cCubeMX\u4e2d\u7684\u5c42\u7f16\u53f7\u4e3a0\u30011\u3002 \u53e6\u5916\uff0c\u901a\u8fc7CubeMX\u751f\u6210\u4ee3\u7801\u4e2d\u7684",(0,r.kt)("em",{parentName:"p"},"MX_LTDC_Init(void)"),"\u51fd\u6570\u5168\u9762\u914d\u7f6eLTDC\u3002"),(0,r.kt)("p",null,"LTDC\u63a7\u5236\u5668\u5c06\u5e27\u7f13\u51b2\u91cd\u590d\u53d1\u9001\u81f3\u663e\u793a\u5668\u3002 \u663e\u793a\u7684\u56fe\u50cf\u53d6\u51b3\u4e8e\u5e27\u7f13\u51b2\u4e2d\u7684\u503c\u3002 \u5c1d\u8bd5\u5e27\u7f13\u51b2\u4e2d\u7684\u4e0d\u540c\u503c\u6216\u6a21\u5f0f\u3002 \u4f8b\u5982\uff0c\u4f7f\u7528memset\u5c06\u5e27\u7f13\u51b2\u6e05\u9664\u4e3a0xFF\uff0c\u4ee5\u663e\u793a\u767d\u5c4f\u3002"),(0,r.kt)(a.Z,{mdxType:"Note"},"\u5728\u67d0\u4e9b\u663e\u793a\u5668\u4e0a\uff0c\u5fc5\u987b\u5f00\u542f\u80cc\u5149\u624d\u80fd\u4f7f\u56fe\u5f62\u5e27\u53ef\u89c1\u3002"),(0,r.kt)("h4",k({},{id:"check-the-framerate"}),"\u68c0\u67e5\u5e27\u7387"),(0,r.kt)("p",null,"LTDC\u63a7\u5236\u5668\u4e3a\u6bcf\u4e2a\u5e27\u89e6\u53d1\u4e00\u4e2a\u4e2d\u65ad\u3002 \u8be5\u4e2d\u65ad\u53ef\u88ab\u5e94\u7528\u7a0b\u5e8f\u6240\u5229\u7528\u3002"),(0,r.kt)("p",null,"\u60a8\u5e94\u4f7f\u7528\u8c03\u8bd5\u5668\u6765\u68c0\u67e5\u662f\u5426\u89e6\u53d1\u4e86\u8be5\u4e2d\u65ad\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e9b\u4e2d\u65ad\u95f4\u7684\u65f6\u95f4\u662f\u6240\u6709\u50cf\u7d20\u4f20\u8f93\u548c\u540c\u6b65\u6cbf\u7684\u8017\u65f6\u603b\u548c\u3002 \u60a8\u53ef\u4ee5\u901a\u8fc7\u8c03\u8282\u540c\u6b65\u6cbf\u6765\u8c03\u8282\u5e27\u7387\u3002 \u540c\u6b65\u6cbf\u53c2\u6570\u662fLTDC\u914d\u7f6e\u7684\u4e00\u90e8\u5206\u3002 \u901a\u5e38\u901a\u8fc7\u589e\u5f3a\u573a\u524d\u6cbf\u6765\u964d\u4f4e\u5e27\u7387\u3002"),(0,r.kt)("p",null,"\u4e00\u79cd\u6d4b\u91cf\u5e27\u7387\u7684\u7b80\u5355\u65b9\u6cd5\u4e3a\u4f7f\u7528\u4e2d\u65ad\u5904\u7406\u7a0b\u5e8f\u4e2d\u7684HAL_GetTick():"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"stm32f7xx_it.c"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp",metastring:"{6-8}","{6-8}":!0}),"volatile int last = 0;\nvolatile int diff = 0;\nvoid LTDC_IRQHandler(void)\n{\n  /* USER CODE BEGIN LTDC_IRQn 0 */\n  int now = HAL_GetTick();\n  diff = last - now;\n  last = now;\n  /* USER CODE END LTDC_IRQn 0 */\n  HAL_LTDC_IRQHandler(&hltdc);\n  ...\n")),(0,r.kt)("p",null,"\u8bf7\u8bb0\u4f4f\uff0c\u5728\u6bcf\u79d260\u5e27\u7684\u60c5\u51b5\u4e0b\uff0c\u5404\u4e2a\u5e27\u4e4b\u95f4\u5e94\u8be5\u67091000 ms / 60 = 16 ms\u3002"),(0,r.kt)("h3",k({},{id:"spi-display"}),"SPI \u663e\u793a\u5668"),(0,r.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u5c06\u8ba8\u8bba\u4e0eSPI\u603b\u7ebf\u8fde\u63a5\u7684\u663e\u793a\u5668\u3002"),(0,r.kt)("p",null,"\u8fd9\u7c7b\u663e\u793a\u5668\u7684\u914d\u7f6e\u4efb\u52a1\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u914d\u7f6eSPI\u5916\u8bbe\u548cGPIO"),(0,r.kt)("li",{parentName:"ul"},"\u68c0\u67e5\u65f6\u949f"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u5199\u6216\u627e\u5230\u5fc5\u8981\u7684\u9a71\u52a8\u7a0b\u5e8f\u4ee3\u7801")),(0,r.kt)("h4",k({},{id:"spi-configuration"}),"SPI \u914d\u7f6e"),(0,r.kt)("p",null,"\u5728CubeMX\u4e2d\u542f\u52a8\u5e76\u4f7f\u80fdSPI\u3002 \u8fd9\u4e9b\u56fe\u50cf\u6765\u81eaSTM32G081\u9879\u76ee\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-05.png",noShadow:!1,width:"600",mdxType:"Figure"},"SPI \u914d\u7f6e"),(0,r.kt)("p",null,"\u68c0\u67e5\u4f7f\u7528\u7684SPI\u683c\u5f0f\u7684\u663e\u793a\u5668\u6570\u636e\u624b\u518c(\u6570\u636e\u5927\u5c0f\u548c\u4f4d\u987a\u5e8f) \u3002 \u8bf7\u8bb0\u4f4f\uff0c16\u4f4d\u5b57\u4ee5\u5c0f\u7aef\u5b57\u8282\u5e8f\u5b58\u50a8\u5728\u5e27\u7f13\u51b2\u4e2d\u3002 \u68c0\u67e5\u662f\u5426\u53ef\u4ee5\u5c06\u663e\u793a\u5668\u914d\u7f6e\u4e3a\u6b64\u683c\u5f0f\u3002 \u5982\u679c\u4e0d\u53ef\u4ee5\uff0c\u5219\u5fc5\u987b\u5728\u4f20\u8f93\u671f\u95f4\u8fdb\u884c\u6570\u636e\u8f6c\u6362\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u53e6\u8bf7\u6ce8\u610f\u65f6\u949f\u6781\u6027\u548c\u65f6\u949f\u76f8\u4f4d\u3002 \u8fd9\u4e9b\u53c2\u6570\u5df2\u5728\u663e\u793a\u5668\u6570\u636e\u624b\u518c\u4e2d\u6307\u5b9a\u3002"),(0,r.kt)("p",null,"SPI\u65f6\u949f(\u6bd4\u7279\u7387) \u7531FCLK\u7684\u5206\u9891\u5668\u63a7\u5236\u3002 \u6700\u5c0f\u5206\u9891\u5668\u4e3a2\u3002 \u5982\u679cMCU\u6b63\u5728\u8fd0\u884c(\u598264MHz) \uff0c\u5219\u6700\u5927SPI\u6bd4\u7279\u7387\u4e3a32 MBit/s\u3002"),(0,r.kt)("p",null,"\u5728GPIO\u9009\u9879\u5361\u4e0a\uff0c\u60a8\u53ef\u4ee5\u68c0\u67e5SPI\u5916\u8bbe\u7684GPIO\u914d\u7f6e\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-06.png",noShadow:!1,width:"600",mdxType:"Figure"},"SPI GPIO\u914d\u7f6e"),(0,r.kt)("p",null,"\u5728\u53f3\u4fa7\u7684\u5f15\u811a\u6392\u5217\u89c6\u56fe\u4e2d\u9009\u62e9GPIO\uff1a"),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/cubemx-07.png",noShadow:!1,width:"600",mdxType:"Figure"},"SPI GPIO\u9009\u62e9"),(0,r.kt)("p",null,"\u73b0\u5728\u5269\u4e0b\u7684\u4efb\u52a1\u4e3a\u914d\u7f6e\u663e\u793a\u5668\u5e76\u5728SPI\u901a\u9053\u4e0a\u4f20\u8f93\u5e27\u7f13\u51b2\u3002 CubeMX\u65e0\u6cd5\u4e3a\u60a8\u751f\u6210\u6b64\u4ee3\u7801\uff0c\u56e0\u4e3a\u5b83\u5728\u5f88\u5927\u7a0b\u5ea6\u4e0a\u53d6\u51b3\u4e8e\u663e\u793a\u5668\u3002",(0,r.kt)("br",{parentName:"p"}),"\n","\u5bf9\u4e8e\u8bb8\u591a\u663e\u793a\u5668\uff0c\u5fc5\u987b\u53d1\u9001\u4e00\u7cfb\u5217\u547d\u4ee4\uff0c\u5e76\u9075\u5faa\u7279\u5b9a\u7684\u4e0a\u7535\u65f6\u5e8f\u3002 \u4e4b\u540e\uff0c\u901a\u5e38\u9700\u8981\u8bbe\u7f6e\u989c\u8272\u6a21\u5f0f\uff0c\u7136\u540e\u5c06\u663e\u793a\u5668\u6253\u5f00\u3002 \u6240\u6709\u8fd9\u4e9b\u5747\u5fc5\u987b\u5728\u4f9b\u5e94\u5546\u63d0\u4f9b\u7684\u6570\u636e\u624b\u518c\u6216\u793a\u4f8b\u4e2d\u6307\u5b9a\u3002"),(0,r.kt)("p",null,"Cube\u56fa\u4ef6\u5305\u542b\u4f7f\u7528SPI\u901a\u4fe1\u7684\u793a\u4f8b\u3002 Cube HAL\u5305\u542b\u5404\u79cd\u52a9\u624b\u529f\u80fd\u3002 \u7528\u4e8e\u53d1\u9001\u6570\u636e\u7684\u57fa\u672c\u529f\u80fd\uff1a"),(0,r.kt)(i.Z,{mdxType:"CodeHeader"},"stm32g0xx_hal_spi.h"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"HAL_StatusTypeDef HAL_SPI_Transmit(SPI_HandleTypeDef *hspi, uint8_t *pData, uint16_t Size, uint32_t Timeout);\n")),(0,r.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f7f\u7528\u8fd9\u4e9b\u5e93\u51fd\u6570\uff0c\u76f4\u81f3\u901a\u4fe1\u7a33\u5b9a\u8fd0\u884c\u3002 \u7136\u540e\uff0c\u53ef\u901a\u8fc7\u7f16\u5199\u4e13\u7528\u51fd\u6570\u6765\u63d0\u9ad8\u6027\u80fd\u3002"),(0,r.kt)("p",null,"\u5728\u7f16\u5199SPI\u663e\u793a\u9a71\u52a8\u7a0b\u5e8f\u7684\u8fc7\u7a0b\u4e2d\uff0cSPI\u793a\u6ce2\u5668\u6216SPI USB\u8bb0\u5f55\u5668\u53ef\u80fd\u975e\u5e38\u6709\u7528\u3002"),(0,r.kt)(a.Z,{mdxType:"Note"},"\u4eceSPI\u4e0a\u7684\u4f4e\u9891\u5f00\u59cb\uff0c\u4ee5\u907f\u514d\u566a\u58f0\u95ee\u9898\u3002"),(0,r.kt)("h2",k({},{id:"checking-the-display-colors"}),"\u68c0\u67e5\u663e\u793a\u5668\u989c\u8272"),(0,r.kt)("p",null,"\u6b64\u65f6\uff0c\u60a8\u53ef\u4ee5\u5c06\u5e27\u7f13\u5b58\u5185\u5bb9\u4f20\u8f93\u5230\u663e\u793a\u5668\uff0c\u5efa\u8bae\u60a8\u5f7b\u5e95\u68c0\u67e5\u663e\u793a\u5668\u989c\u8272\u3002"),(0,r.kt)("p",null,"\u8be5\u60f3\u6cd5\u5c31\u662f\u5c06\u989c\u8272\u5199\u5165\u5e27\u7f13\u5b58\uff0c\u5e76\u901a\u8fc7\u89c6\u89c9\u6765\u68c0\u67e5\u663e\u793a\u5668\u3002 \u4ee5\u4e0b\u4e3a\u4e00\u4e9b\u793a\u4f8b\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\u6d4b\u8bd5"),(0,r.kt)("th",k({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u7ea2\u8272"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u5728\u5e27\u7f13\u5b58\u4e2d\u8bbe\u7f6e\u7ea2\u8272\u3002 \u663e\u793a\u5c4f\u4e5f\u5fc5\u987b\u4e3a\u7ea2\u8272\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u7eff\u8272"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u5728\u5e27\u7f13\u5b58\u4e2d\u8bbe\u7f6e\u7eff\u8272\u3002 \u663e\u793a\u5c4f\u4e5f\u5fc5\u987b\u4e3a\u7eff\u8272\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u84dd\u8272"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u5728\u5e27\u7f13\u5b58\u4e2d\u8bbe\u7f6e\u84dd\u8272\u3002 \u663e\u793a\u5c4f\u4e5f\u5fc5\u987b\u4e3a\u84dd\u8272\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u6df1\u8272"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u5982\u679c\u8bbe\u7f6e\u4e3a\u6df1\u8272\uff08\u59820x8000\uff09\uff0850%\u7ea2\u8272\uff09\uff0c\u5219\u5fc5\u987b\u5728\u663e\u793a\u5c4f\u4e0a\u663e\u793a\u9ed1\u8272\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u66f4\u6539\u989c\u8272"),(0,r.kt)("td",k({parentName:"tr"},{align:null}),"\u6bcf\u79d2\u66f4\u6539\u4e00\u6b21\u5e27\u7f13\u5b58\uff0c\u7136\u540e\u67e5\u770b\u663e\u793a\u5c4f\u662f\u5426\u66f4\u65b0\u3002")))),(0,r.kt)("p",null,"\u8981\u5c06\u989c\u8272\u653e\u5165RGB565\u5e27\u7f13\u51b2\u4e2d\uff0c\u53ef\u4f7f\u7528\u4ee5\u4e0b\u65b9\u6848\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"uint8_t r    = 0xff, g = 0x00, b = 0x00;             // Solid red\nuint16_t col = ((r>>3)<<11) | ((g>>2)<<5) | (b>>3);  // Convert colors to RGB565\n// put colors into the framebuffer\nfor(int i = 0; i < W*H; i++) {\n  framebuffer[i] = col;\n}\n")),(0,r.kt)("p",null,"\u5bf9\u4e8e24BPP\u663e\u793a\u5668\uff0c\u6700\u597d\u4f7f\u7528\u5b57\u8282\u6307\u9488\u6765\u8868\u793a\u4ee3\u7801(\u989c\u8272\u4ee5BGR\u987a\u5e8f\u5b58\u50a8):"),(0,r.kt)("pre",null,(0,r.kt)("code",k({parentName:"pre"},{className:"language-cpp"}),"uint8_t* framebuffer[480*272*3];  //24 bit framebuffer\n...\nuint8_t *fb = framebuffer;\nwhile(fb < (uint8_t*)(framebuffer + (480*272*3))) {\n  *fb++ = 0x00; // Write blue color and increment pointer by one byte\n  *fb++ = 0x00; // Write green color\n  *fb++ = 0xFF; // Write red color\n}\n")),(0,r.kt)(l.Z,{imageSource:"/img/development/board-bring-up/display/red-display-test.png",noShadow:!0,width:"600",mdxType:"Figure"},"\u663e\u793a\u5f69\u8272\u5e27\u7f13\u5b58"))}N.isMDXComponent=!0}}]);