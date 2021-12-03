(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1361],{3905:function(t,a,e){"use strict";e.d(a,{Zo:function(){return d},kt:function(){return m}});var n=e(67294);function r(t,a,e){return a in t?Object.defineProperty(t,a,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[a]=e,t}function l(t,a){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable}))),e.push.apply(e,n)}return e}function o(t){for(var a=1;a<arguments.length;a++){var e=null!=arguments[a]?arguments[a]:{};a%2?l(Object(e),!0).forEach((function(a){r(t,a,e[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(a){Object.defineProperty(t,a,Object.getOwnPropertyDescriptor(e,a))}))}return t}function i(t,a){if(null==t)return{};var e,n,r=function(t,a){if(null==t)return{};var e,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||(r[e]=t[e]);return r}(t,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)e=l[n],a.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var c=n.createContext({}),k=function(t){var a=n.useContext(c),e=a;return t&&(e="function"==typeof t?t(a):o(o({},a),t)),e},d=function(t){var a=k(t.components);return n.createElement(c.Provider,{value:a},t.children)},u={inlineCode:"code",wrapper:function(t){var a=t.children;return n.createElement(n.Fragment,{},a)}},p=n.forwardRef((function(t,a){var e=t.components,r=t.mdxType,l=t.originalType,c=t.parentName,d=i(t,["components","mdxType","originalType","parentName"]),p=k(e),m=r,s=p["".concat(c,".").concat(m)]||p[m]||u[m]||l;return e?n.createElement(s,o(o({ref:a},d),{},{components:e})):n.createElement(s,o({ref:a},d))}));function m(t,a){var e=arguments,r=a&&a.mdxType;if("string"==typeof t||r){var l=e.length,o=new Array(l);o[0]=p;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var k=2;k<l;k++)o[k]=e[k];return n.createElement.apply(null,o)}return n.createElement.apply(null,e)}p.displayName="MDXCreateElement"},43861:function(t,a,e){"use strict";var n=e(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}a.Z=r},31217:function(t,a,e){"use strict";e.d(a,{Z:function(){return N}});var n=e(67294),r=e(73727),l=e(11368),o=e(35096),i=e(84487);const c=(0,n.createContext)({collectLink:()=>{}});var k=e(25026),d=e(67023),u=Object.defineProperty,p=Object.defineProperties,m=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,g=(t,a,e)=>a in t?u(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,b=(t,a)=>{for(var e in a||(a={}))f.call(a,e)&&g(t,e,a[e]);if(s)for(var e of s(a))h.call(a,e)&&g(t,e,a[e]);return t};var N=function(t){var a,e=t,{isNavLink:u,to:g,href:N,activeClassName:_,isActive:y,"data-noBrokenLinkCheck":v,autoAddBaseUrl:x=!0}=e,w=((t,a)=>{var e={};for(var n in t)f.call(t,n)&&a.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&s)for(var n of s(t))a.indexOf(n)<0&&h.call(t,n)&&(e[n]=t[n]);return e})(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{siteConfig:{trailingSlash:T}}=(0,l.Z)(),{withBaseUrl:B}=(0,k.C)(),L=(0,n.useContext)(c),O=g||N,F=(0,o.Z)(O),Z=null==O?void 0:O.replace("pathname://","");let A=void 0!==Z?(P=Z,x&&(t=>t.startsWith("/"))(P)?B(P):P):void 0;var P;A&&F&&(A=(0,d.applyTrailingSlash)(A,T));const R=(0,n.useRef)(!1),j=u?r.OL:r.rU,D=i.Z.canUseIntersectionObserver;let C;(0,n.useEffect)((()=>(!D&&F&&null!=A&&window.docusaurus.prefetch(A),()=>{D&&C&&C.disconnect()})),[A,D,F]);const E=null!==(a=null==A?void 0:A.startsWith("#"))&&void 0!==a&&a,M=!A||!F||E;return A&&F&&!E&&!v&&L.collectLink(A),M?n.createElement("a",b(b({href:A},O&&!F&&{target:"_blank",rel:"noopener noreferrer"}),w)):n.createElement(j,b((S=b({},w),p(S,m({onMouseEnter:()=>{R.current||null==A||(window.docusaurus.preload(A),R.current=!0)},innerRef:t=>{var a,e;D&&t&&F&&(a=t,e=()=>{null!=A&&window.docusaurus.prefetch(A)},C=new window.IntersectionObserver((t=>{t.forEach((t=>{a===t.target&&(t.isIntersecting||t.intersectionRatio>0)&&(C.unobserve(a),C.disconnect(),e())}))})),C.observe(a))},to:A||""}))),u&&{isActive:y,activeClassName:_}));var S}},35096:function(t,a,e){"use strict";function n(t){return!0===/^(\w*:|\/\/)/.test(t)}function r(t){return void 0!==t&&!n(t)}e.d(a,{b:function(){return n},Z:function(){return r}})},25026:function(t,a,e){"use strict";e.d(a,{C:function(){return l},Z:function(){return o}});var n=e(11368),r=e(35096);function l(){const{siteConfig:{baseUrl:t="/",url:a}={}}=(0,n.Z)();return{withBaseUrl:(e,n)=>function(t,a,e,{forcePrependBaseUrl:n=!1,absolute:l=!1}={}){if(!e)return e;if(e.startsWith("#"))return e;if((0,r.b)(e))return e;if(n)return a+e;const o=e.startsWith(a)?e:a+e.replace(/^\//,"");return l?t+o:o}(a,t,e,n)}}function o(t,a={}){const{withBaseUrl:e}=l();return e(t,a)}},67271:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t,a){if(t.startsWith("#"))return t;if(void 0===a)return t;const[e]=t.split(/[#?]/),n="/"===e?"/":(r=e,a?function(t){return t.endsWith("/")?t:`${t}/`}(r):function(t){return t.endsWith("/")?t.slice(0,-1):t}(r));var r;return t.replace(e,n)}},67023:function(t,a,e){"use strict";var n=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(a,"__esModule",{value:!0}),a.uniq=a.applyTrailingSlash=void 0;var r=e(67271);Object.defineProperty(a,"applyTrailingSlash",{enumerable:!0,get:function(){return n(r).default}});var l=e(11080);Object.defineProperty(a,"uniq",{enumerable:!0,get:function(){return n(l).default}})},11080:function(t,a){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(t){return Array.from(new Set(t))}},27160:function(t,a,e){"use strict";e.r(a),e.d(a,{frontMatter:function(){return s},contentTitle:function(){return f},metadata:function(){return h},toc:function(){return g},default:function(){return N}});var n=e(3905),r=e(31217),l=e(43861),o=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(t,a,e)=>a in t?o(t,a,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[a]=e,m=(t,a)=>{for(var e in a||(a={}))d.call(a,e)&&p(t,e,a[e]);if(k)for(var e of k(a))u.call(a,e)&&p(t,e,a[e]);return t};const s={title:"ManyBlockAllocator"},f=void 0,h={unversionedId:"api/classes/classtouchgfx_1_1_many_block_allocator",id:"api/classes/classtouchgfx_1_1_many_block_allocator",isDocsHomePage:!1,title:"ManyBlockAllocator",description:"This class is partial framebuffer allocator using multiple blocks.",source:"@site/docs/api/classes/classtouchgfx_1_1_many_block_allocator.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_many_block_allocator",permalink:"/4.16/ko/docs/api/classes/classtouchgfx_1_1_many_block_allocator",version:"current",frontMatter:{title:"ManyBlockAllocator"},sidebar:"docs",previous:{title:"LockFreeDMA_Queue",permalink:"/4.16/ko/docs/api/classes/classtouchgfx_1_1_lock_free_d_m_a___queue"},next:{title:"Matrix4x4",permalink:"/4.16/ko/docs/api/classes/classtouchgfx_1_1_matrix4x4"}},g=[{value:"Public Functions",id:"public-functions",children:[]},{value:"Additional inherited members",id:"additional-inherited-members",children:[{value:'Protected Types inherited from <Link to="classtouchgfx_1_1_frame_buffer_allocator">FrameBufferAllocator</Link>',id:"protected-types-inherited-from-framebufferallocator",children:[]},{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_frame_buffer_allocator">FrameBufferAllocator</Link>',id:"public-functions-inherited-from-framebufferallocator",children:[]}]},{value:"Public Functions Documentation",id:"public-functions-documentation",children:[{value:"allocateBlock",id:"allocateblock",children:[]},{value:"freeBlockAfterTransfer",id:"freeblockaftertransfer",children:[]},{value:"getBlockForTransfer",id:"getblockfortransfer",children:[]},{value:"hasBlockReadyForTransfer",id:"hasblockreadyfortransfer",children:[]},{value:"hasEmptyBlock",id:"hasemptyblock",children:[]},{value:"ManyBlockAllocator",id:"manyblockallocator",children:[]},{value:"markBlockReadyForTransfer",id:"markblockreadyfortransfer",children:[]},{value:"peekBlockForTransfer",id:"peekblockfortransfer",children:[]}]}],b={toc:g};function N(t){var a,e=t,{components:o}=e,p=((t,a)=>{var e={};for(var n in t)d.call(t,n)&&a.indexOf(n)<0&&(e[n]=t[n]);if(null!=t&&k)for(var n of k(t))a.indexOf(n)<0&&u.call(t,n)&&(e[n]=t[n]);return e})(e,["components"]);return(0,n.kt)("wrapper",(a=m(m({},b),p),i(a,c({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," This class is partial framebuffer allocator using multiple blocks.\nNew buffers can be allocated until no free blocks are available. After transfer to ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),", a block is queued for allocation again."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator",mdxType:"Link"},"FrameBufferAllocator")),(0,n.kt)("h2",m({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","uint16_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),"(const uint16_t x, const uint16_t y, const uint16_t width, const uint16_t height, uint8_t ** block)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Allocates a framebuffer block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Free a block after transfer to the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","const uint8_t *"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),"(",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," & rect)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Get the block ready for transfer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Check if a block is ready for transfer to the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasemptyblock",mdxType:"Link"},"hasEmptyBlock")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Check if a block is ready for drawing (the block is empty).")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-manyblockallocator",mdxType:"Link"},"ManyBlockAllocator")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Marks a previously allocated block as ready to be transferred to the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),".")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0","const ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-peekblockfortransfer",mdxType:"Link"},"peekBlockForTransfer")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Get the Rect of the next block to transfer.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",m({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,n.kt)("h3",m({},{id:"protected-types-inherited-from-framebufferallocator"}),"Protected Types inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator",mdxType:"Link"},"FrameBufferAllocator")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"enum"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#enum-blockstate",mdxType:"Link"},"BlockState"))," { EMPTY, ALLOCATED, DRAWN, SENDING }")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"BlockState is used for internal state of each block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",m({},{id:"public-functions-inherited-from-framebufferallocator"}),"Public Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator",mdxType:"Link"},"FrameBufferAllocator")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:"right"})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-~framebufferallocator",mdxType:"Link"},"~FrameBufferAllocator")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_frame_buffer_allocator"}),"FrameBufferAllocator")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:"right"})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",m({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"allocateblock"}),"allocateBlock"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","uint16_t","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-allocateblock",mdxType:"Link"},"allocateBlock")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"x ,"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"y ,"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"width ,"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"const uint16_t"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"height ,"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"uint8_t **"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"block"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Allocates a framebuffer block. "),(0,n.kt)("p",null,"The block will have at least the width requested. The height of the allocated block can be lower than requested if not enough memory is available."),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"x"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The absolute x coordinate of the block on the screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"y"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The absolute y coordinate of the block on the screen.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"width"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The width of the block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"height"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"The height of the block.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"block"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Pointer to pointer to return the block address in."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The height of the allocated block. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-allocateblock",mdxType:"Link"},"touchgfx::FrameBufferAllocator::allocateBlock")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"freeblockaftertransfer"}),"freeBlockAfterTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-freeblockaftertransfer",mdxType:"Link"},"freeBlockAfterTransfer")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Free a block after transfer to the ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),". "),(0,n.kt)("p",null,"Marks a previously allocated block as transferred and ready to reuse. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-freeblockaftertransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::freeBlockAfterTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"getblockfortransfer"}),"getBlockForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","const uint8_t *","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-getblockfortransfer",mdxType:"Link"},"getBlockForTransfer")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)("a",m({parentName:"td"},{href:"classtouchgfx_1_1_rect"}),"Rect")," &"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"rect"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Get the block ready for transfer. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"rect"),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"Reference to rect to write block x, y, width, and height."))))),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"Returns the address of the block ready for transfer. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-getblockfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::getBlockForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"hasblockreadyfortransfer"}),"hasBlockReadyForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"hasBlockReadyForTransfer")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Check if a block is ready for transfer to the ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),". "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"True if a block is ready for transfer. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasblockreadyfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::hasBlockReadyForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-hasemptyblock",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"hasemptyblock"}),"hasEmptyBlock"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-hasemptyblock",mdxType:"Link"},"hasEmptyBlock")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Check if a block is ready for drawing (the block is empty). "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"True if a block is empty. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-hasemptyblock",mdxType:"Link"},"touchgfx::FrameBufferAllocator::hasEmptyBlock")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-manyblockallocator",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"manyblockallocator"}),"ManyBlockAllocator"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-manyblockallocator",mdxType:"Link"},"ManyBlockAllocator")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"})),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"markblockreadyfortransfer"}),"markBlockReadyForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"markBlockReadyForTransfer")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Marks a previously allocated block as ready to be transferred to the ",(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_l_c_d"}),"LCD"),". "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-markblockreadyfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::markBlockReadyForTransfer")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_many_block_allocator#function-peekblockfortransfer",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",m({},{id:"peekblockfortransfer"}),"peekBlockForTransfer"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})),(0,n.kt)("th",m({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",m({parentName:"tr"},{align:null}),"virtual","\xa0","const Rect &","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_many_block_allocator#function-peekblockfortransfer",mdxType:"Link"},"peekBlockForTransfer")),(0,n.kt)("td",m({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null})),(0,n.kt)("td",m({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",m({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Get the Rect of the next block to transfer. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_rect"}),"Rect")," ready for transfer.")),(0,n.kt)("div",{class:"api-note",markdown:"1"},(0,n.kt)("h5",null,"Note"),(0,n.kt)("p",null,"This function should only be called when the allocator has a block ready for transfer. ")),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"See also:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",m({parentName:"p"},{href:"classtouchgfx_1_1_many_block_allocator#function-hasblockreadyfortransfer"}),"hasBlockReadyForTransfer"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_frame_buffer_allocator#function-peekblockfortransfer",mdxType:"Link"},"touchgfx::FrameBufferAllocator::peekBlockForTransfer")))))}N.isMDXComponent=!0}}]);