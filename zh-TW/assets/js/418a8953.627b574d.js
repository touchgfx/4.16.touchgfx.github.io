"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[9925],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(n),f=i,m=d["".concat(u,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c[d]="string"==typeof e?e:i,a[1]=c;for(var l=2;l<o;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,a=(0,i.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:a,target:"_blank"},r.createElement("img",{width:n,height:o,src:a})),r.createElement("p",null,e.children))}},97013:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return m},default:function(){return y},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return v}});var r=n(3905),i=n(44035),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&d(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&d(e,n,t[n]);return e};const f={id:"getting-started",title:"\u5165\u9580"},m=void 0,g={unversionedId:"introduction/getting-started",id:"introduction/getting-started",title:"\u5165\u9580",description:"\u5728\u958b\u59cb\u4f7f\u7528TouchGFX\u524d\uff0c\u9700\u8981\u5b89\u88dd\u6700\u65b0\u7248\u7684TouchGFX\uff0c\u9019\u5c07\u5728\u5b89\u88dd\u90e8\u5206\u4e2d\u4ecb\u7d39\u3002",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/introduction/getting-started.mdx",sourceDirName:"introduction",slug:"/introduction/getting-started",permalink:"/4.16/zh-TW/docs/introduction/getting-started",draft:!1,tags:[],version:"current",frontMatter:{id:"getting-started",title:"\u5165\u9580"},sidebar:"docs",previous:{title:"\u5b89\u88dd",permalink:"/4.16/zh-TW/docs/introduction/installation"},next:{title:"Embedded Graphics",permalink:"/4.16/zh-TW/docs/basic-concepts/embedded-graphics"}},h={},v=[{value:"TouchGFXDesigner \u5feb\u901f\u5165\u9580",id:"touchgfx-designer-quick-start",level:2},{value:"\u61c9\u7528\u7bc4\u672c+UI\u7bc4\u672c",id:"application-template--ui-template",level:3},{value:"\u7dda\u4e0a\u61c9\u7528\u7a0b\u5f0f",id:"online-applications",level:3},{value:"\u4e0b\u4e00\u6b65",id:"whats-next",level:2}],b={toc:v};function y(e){var t,n=e,{components:o}=n,d=((e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=s(s({},b),d),a(t,c({components:o,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"\u5728\u958b\u59cb\u4f7f\u7528TouchGFX\u524d\uff0c\u9700\u8981\u5b89\u88dd\u6700\u65b0\u7248\u7684TouchGFX\uff0c\u9019\u5c07\u5728",(0,r.kt)("a",s({parentName:"p"},{href:"installation"}),"\u5b89\u88dd"),"\u90e8\u5206\u4e2d\u4ecb\u7d39\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/getting-started/monitor-01.webp",noShadow:!0,mdxType:"Figure"}," "),(0,r.kt)("p",null,"\u5b8c\u6210\u8a72\u64cd\u4f5c\u5f8c\uff0c\u60a8\u5c31\u53ef\u4ee5\u958b\u59cb\u7b2c\u4e00\u500bTouchGFX\u5c08\u6848\u3002 \u5f37\u70c8\u5efa\u8b70\u60a8\u95b1\u8b80\u672c\u7ae0\u7bc0\uff0c\u4ee5\u719f\u6089\u6700\u57fa\u672c\u7684TouchGFX\u6982\u5ff5\u3002 \u6700\u57fa\u790e\u7684\u7ae0\u7bc0\u70ba",(0,r.kt)("a",s({parentName:"p"},{href:"../development/development-introduction"}),"\u958b\u767c\u7c21\u4ecb"),"\uff0c\u6b64\u90e8\u5206\u5c07\u70ba\u60a8\u4ecb\u7d39\u5b8c\u6574\u7684TouchGFX\u5c08\u6848\u6240\u9700\u7684\u8edf\u786c\u9ad4\u5143\u4ef6\uff0c\u4ee5\u53ca\u5275\u5efa\u5b83\u5011\u6240\u9700\u7684\u64cd\u4f5c\u53ca\u5de5\u5177\u3002 \u8a72\u7ae0\u7bc0\u9084\u4ecb\u7d39\u4e86\u5982\u4f55\u4f7f\u7528\u9810\u88fd\u5143\u4ef6\u958b\u59cb\u5feb\u901f\u539f\u578b\u8a2d\u8a08\u3002"),(0,r.kt)("h2",s({},{id:"touchgfx-designer-quick-start"}),"TouchGFXDesigner \u5feb\u901f\u5165\u9580"),(0,r.kt)("h3",s({},{id:"application-template--ui-template"}),"\u61c9\u7528\u7bc4\u672c+UI\u7bc4\u672c"),(0,r.kt)("p",null,"\u5982\u679c\u60a8\u6e34\u671b\u958b\u59cb\u9ad4\u9a57TouchGFX\uff0c\u8acb\u8a66\u8457\u4e00\u500bUI\u7bc4\u4f8b\u5c08\u6848\uff0c\u4e26\u5728STM32\u8a55\u4f30\u5957\u4ef6\u4e0a\u57f7\u884c\u8a72\u5c08\u6848\uff0c\u751a\u81f3\u53ef\u4ee5\u555f\u52d5TouchGFXDesigner\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/getting-started/application-template-ui-template.gif",mdxType:"Figure"},"\u4f7f\u7528\u61c9\u7528\u7a0b\u5f0f\u7bc4\u672c\u8207UI\u7bc4\u672c\u5feb\u901f\u5efa\u7acb\u5c08\u6848"),(0,r.kt)("p",null,"\u5728TouchGFXDesigner\u7684\u555f\u52d5\u8996\u7a97\u4e2d\uff0c\u60a8\u53ef\u4ee5\u5f9e\u591a\u7a2eUI\u7bc4\u4f8b\u4e2d\u9032\u884c\u9078\u64c7\uff0c\u5c07\u6240\u9078\u7684\u7bc4\u4f8b\u4f5c\u70ba\u8d77\u9ede\u3002 \u60a8\u751a\u81f3\u53ef\u4ee5\u5c07\u8a72\u7bc4\u4f8b\u8207\u4e00\u7cfb\u5217STM32\u8a55\u4f30\u5957\u4ef6\u7684\u958b\u767c\u677f\u4e2d\u7684\u7279\u5b9a\u7a0b\u5f0f\u78bc\u76f8\u7d50\u5408\uff0c\u4ee5\u4fbf\u7acb\u5373\u5728\u786c\u9ad4\u4e0a\u904b\u884c\u7bc4\u4f8b\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u6c92\u6709STM32\u8a55\u4f30\u5957\u4ef6\uff0c\u60a8\u4e5f\u53ef\u4ee5\u53ea\u5728PC\u4e0a\u904b\u884cTouchGFX\u61c9\u7528\u7a0b\u5f0f\u3002 \u5982\u679c\u60a8\u5e0c\u671b\u6839\u64da\u64cd\u4f5c\u6307\u5357\u5b8c\u6210\u7b2c\u4e00\u6b65\uff0c\u5247\u53ef\u4ee5\u67e5\u770b",(0,r.kt)("a",s({parentName:"p"},{href:"../tutorials/tutorial-01"}),"\u6559\u7a0b"),"\u7ae0\u7bc0\u3002 \u9019\u88e1\u5c07\u5411\u60a8\u5c55\u793a\u5982\u4f55\u555f\u52d5\u4e26\u904b\u884c\u5c08\u6848\uff0c\u6700\u7d42\u5b8c\u6210\u4e00\u500b\u76f8\u7576\u8907\u96dc\u7684UI\u61c9\u7528\u7a0b\u5f0f\u3002"),(0,r.kt)("h3",s({},{id:"online-applications"}),"\u7dda\u4e0a\u61c9\u7528\u7a0b\u5f0f"),(0,r.kt)("p",null,"\u9664\u4e86\u80fd\u5920\u5c07\u61c9\u7528\u7a0b\u5f0f\u7bc4\u672c\u8207UI\u7bc4\u672c\u76f8\u7d50\u5408\u4ee5\u5916\uff0cTouchGFXDesigner\u9084\u5305\u62ec\u4e00\u4e9b\u91dd\u5c0d\u7279\u5b9aSTM32\u8a55\u4f30\u5957\u4ef6\u7684\u73fe\u6210\u7bc4\u4f8b\u3002 \u9019\u4e9b\u7bc4\u4f8b\u4f4d\u65bc\u7dda\u4e0a\u61c9\u7528\u7a0b\u5f0f\u9078\u9805\u4e0b\u3002"),(0,r.kt)(i.Z,{imageSource:"/img/introduction/getting-started/online-application.gif",mdxType:"Figure"},"\u4f7f\u7528\u7dda\u4e0a\u61c9\u7528\u7a0b\u5f0f\u5feb\u901f\u5275\u5efa\u5c08\u6848"),(0,r.kt)("h2",s({},{id:"whats-next"}),"\u4e0b\u4e00\u6b65"),(0,r.kt)("p",null,"\u6b64\u6642\uff0c\u5efa\u8b70\u60a8\u6d41\u89bd\u6587\u4ef6\u4e26\u95b1\u8b80\u76f8\u95dc\u7ae0\u7bc0\u3002 \u9019\u5c07\u4f7f\u60a8\u5c0d\u6587\u4ef6\u6709\u4e00\u500b\u5927\u81f4\u7684\u77ad\u89e3\uff0c\u5f9e\u800c\u8b93\u60a8\u77e5\u9053\u5f9e\u54ea\u88e1\u67e5\u5c0b\u66f4\u591a\u8cc7\u8a0a\uff0c\u4e26\u77ad\u89e3TouchGFX\u95dc\u9375\u6982\u5ff5\u3002"),(0,r.kt)("p",null,"\u4e3b\u8981\u7ae0\u7bc0\u5305\u62ec\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"../basic-concepts/embedded-graphics"}),"\u57fa\u672c\u6982\u5ff5"),": \u672c\u7ae0\u70ba\u672c\u6587\u4ef6\u7684\u5176\u9918\u7ae0\u7bc0\u63d0\u4f9b\u80cc\u666f\u77e5\u8b58\u3002 \u5176\u4e2d\u5c07\u4ecb\u7d39\u7a0d\u5f8c\u8981\u5f15\u7528\u7684\u6240\u6709\u95dc\u9375\u5716\u5f62\u6982\u5ff5\u3002 \u6839\u64da\u60a8\u7576\u524d\u7684\u77e5\u8b58\u4ee5\u53ca\u60a8\u5c07\u9032\u884c\u7684TouchGFX\u958b\u767c\u64cd\u4f5c\uff0c\u60a8\u53ef\u80fd\u60f3\u5148\u8df3\u904e\u67d0\u4e9b\u7ae0\u7bc0\uff0c\u4e26\u5728\u4ee5\u5f8c\u4e0d\u77ad\u89e3\u67d0\u4e9b\u7d30\u7bc0\u7684\u60c5\u6cc1\u4e0b\u56de\u904e\u982d\u4f86\u67e5\u770b\u9019\u4e9b\u7ae0\u7bc0\u3002"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"../development/development-introduction"}),"\u7814\u767ct"),": \u672c\u7ae0\u70ba\u672c\u6587\u4ef6\u7684\u4e3b\u8981\u7ae0\u7bc0\u3002 \u5b83\u89e3\u91cb\u4e86TouchGFX\u5c08\u6848\u7684\u7d50\u69cb\u4ee5\u53ca\u6574\u500b\u5c08\u6848\u958b\u767c\u9031\u671f\u4e2d\u6d89\u53ca\u7684\u5de5\u4f5c\u6d41\u7a0b\u548c\u5de5\u5177\u3002 \u5de5\u4f5c\u6d41\u7a0b\u4e2d\u7684\u6bcf\u500b\u6b65\u9a5f\u90fd\u6709\u5404\u81ea\u7684\u7ae0\u7bc0\uff0c\u4e26\u5c0d\u5176\u9032\u884c\u4e86\u8a73\u7d30\u63cf\u8ff0\u3002 \u60a8\u53ef\u4ee5\u5728\u5176\u4e2d\u627e\u5230\u6709\u95dc\u5982\u4f55\u4f7f\u60a8\u7684\u61c9\u7528\u7a0b\u5f0f\u5728\u786c\u9ad4\u4e0a\u904b\u884c\uff0c\u4ee5\u53ca\u5982\u4f55\u9032\u884cUI\u958b\u767c\u7684\u5168\u90e8\u6240\u9700\u77e5\u8b58\uff0c\u5305\u62ec\u5c0dTouchGFXFramework\u4e2d\u7684\u6240\u6709\u529f\u80fd\u548c\u5143\u4ef6\u7684\u63cf\u8ff0\u3002")))}y.isMDXComponent=!0}}]);