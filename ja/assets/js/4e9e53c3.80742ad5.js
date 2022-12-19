"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5395],{3905:function(t,e,a){a.d(e,{Zo:function(){return p},kt:function(){return _}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function o(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var u=n.createContext({}),d=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(u.Provider,{value:e},t.children)},k="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),k=d(a),c=r,_=k["".concat(u,".").concat(c)]||k[c]||m[c]||l;return a?n.createElement(_,i(i({ref:e},p),{},{components:a})):n.createElement(_,i({ref:e},p))}));function _(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=c;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o[k]="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},43861:function(t,e,a){var n=a(67294);class r extends n.Component{render(){const t=/.*#(.*)/.exec(this.props.url)[1];return n.createElement("a",{"aria-hidden":"true",tabindex:"-1",class:"anchor enhancedAnchor_node_modules-@docusaurus-theme-classic-src-theme-Heading-",id:t})}}e.Z=r},66630:function(t,e,a){a.r(e),a.d(e,{assets:function(){return h},contentTitle:function(){return s},default:function(){return b},frontMatter:function(){return _},metadata:function(){return g},toc:function(){return N}});var n=a(3905),r=a(39130),l=a(43861),i=Object.defineProperty,o=Object.defineProperties,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?i(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,c=(t,e)=>{for(var a in e||(e={}))p.call(e,a)&&m(t,a,e[a]);if(d)for(var a of d(e))k.call(e,a)&&m(t,a,e[a]);return t};const _={title:"LockFreeDMA_Queue"},s=void 0,g={unversionedId:"api/classes/classtouchgfx_1_1_lock_free_d_m_a___queue",id:"api/classes/classtouchgfx_1_1_lock_free_d_m_a___queue",title:"LockFreeDMA_Queue",description:"",source:"@site/docs/api/classes/classtouchgfx_1_1_lock_free_d_m_a___queue.mdx",sourceDirName:"api/classes",slug:"/api/classes/classtouchgfx_1_1_lock_free_d_m_a___queue",permalink:"/4.16/ja/docs/api/classes/classtouchgfx_1_1_lock_free_d_m_a___queue",draft:!1,tags:[],version:"current",frontMatter:{title:"LockFreeDMA_Queue"},sidebar:"docs",previous:{title:"ListLayout",permalink:"/4.16/ja/docs/api/classes/classtouchgfx_1_1_list_layout"},next:{title:"ManyBlockAllocator",permalink:"/4.16/ja/docs/api/classes/classtouchgfx_1_1_many_block_allocator"}},h={},N=[{value:"Public Functions",id:"public-functions",level:2},{value:"Protected Functions",id:"protected-functions",level:2},{value:"Protected Attributes",id:"protected-attributes",level:2},{value:"Additional inherited members",id:"additional-inherited-members",level:2},{value:'Public Functions inherited from <Link to="classtouchgfx_1_1_d_m_a___queue">DMA_Queue</Link>',id:"public-functions-inherited-from-dma_queue",level:3},{value:'Protected Functions inherited from <Link to="classtouchgfx_1_1_d_m_a___queue">DMA_Queue</Link>',id:"protected-functions-inherited-from-dma_queue",level:3},{value:"Public Functions Documentation",id:"public-functions-documentation",level:2},{value:"isEmpty",id:"isempty",level:3},{value:"isFull",id:"isfull",level:3},{value:"LockFreeDMA_Queue",id:"lockfreedma_queue",level:3},{value:"pushCopyOf",id:"pushcopyof",level:3},{value:"Protected Functions Documentation",id:"protected-functions-documentation",level:2},{value:"first",id:"first",level:3},{value:"pop",id:"pop",level:3},{value:"Protected Attributes Documentation",id:"protected-attributes-documentation",level:2},{value:"capacity",id:"capacity",level:3},{value:"head",id:"head",level:3},{value:"q",id:"q",level:3},{value:"tail",id:"tail",level:3}],f={toc:N};function b(t){var e,a=t,{components:i}=a,m=((t,e)=>{var a={};for(var n in t)p.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&d)for(var n of d(t))e.indexOf(n)<0&&k.call(t,n)&&(a[n]=t[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(e=c(c({},f),m),o(e,u({components:i,mdxType:"MDXLayout"}))),(0,n.kt)("p",null," This implements a simple lock-free FIFO queue (single producer, single consumer) "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"See"),": ",(0,n.kt)("a",c({parentName:"p"},{href:"classtouchgfx_1_1_d_m_a___queue"}),"DMA_Queue")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Inherits from"),":  ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_d_m_a___queue",mdxType:"Link"},"DMA_Queue")),(0,n.kt)("h2",c({},{id:"public-functions"}),"Public Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-isempty",mdxType:"Link"},"isEmpty")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Query if this object is empty.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","bool"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-isfull",mdxType:"Link"},"isFull")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Query if this object is full.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-lockfreedma_queue",mdxType:"Link"},"LockFreeDMA_Queue")),"(",(0,n.kt)("a",c({parentName:"td"},{href:"structtouchgfx_1_1_blit_op"}),"BlitOp")," * mem, atomic_t n)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Constructs a lock-free queue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-pushcopyof",mdxType:"Link"},"pushCopyOf")),"(const ",(0,n.kt)("a",c({parentName:"td"},{href:"structtouchgfx_1_1_blit_op"}),"BlitOp")," & op)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Adds the specified blitop to the queue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",c({},{id:"protected-functions"}),"Protected Functions"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","const ",(0,n.kt)("a",c({parentName:"td"},{href:"structtouchgfx_1_1_blit_op"}),"BlitOp")," *"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-first",mdxType:"Link"},"first")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Gets the first element in the queue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0","void"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-pop",mdxType:"Link"},"pop")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Pops an element from the queue.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",c({},{id:"protected-attributes"}),"Protected Attributes"),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"atomic_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#variable-capacity",mdxType:"Link"},"capacity")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The number of elements the queue can contain.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"atomic_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#variable-head",mdxType:"Link"},"head")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Index to the head element.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),(0,n.kt)("a",c({parentName:"td"},{href:"structtouchgfx_1_1_blit_op"}),"BlitOp")," *"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#variable-q",mdxType:"Link"},"q")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Pointer to the queue memory.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"atomic_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#variable-tail",mdxType:"Link"},"tail")))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Index to the tail element.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",c({},{id:"additional-inherited-members"}),"Additional inherited members"),(0,n.kt)("h3",c({},{id:"public-functions-inherited-from-dma_queue"}),"Public Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_d_m_a___queue",mdxType:"Link"},"DMA_Queue")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"}),"virtual","\xa0"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_d_m_a___queue#function-~dma_queue",mdxType:"Link"},"~DMA_Queue")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Finalizes an instance of the ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_d_m_a___queue"}),"DMA_Queue")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h3",c({},{id:"protected-functions-inherited-from-dma_queue"}),"Protected Functions inherited from ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_d_m_a___queue",mdxType:"Link"},"DMA_Queue")),(0,n.kt)("div",{class:"function-table",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:"right"})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("strong",{parentName:"td"},(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_d_m_a___queue#function-dma_queue",mdxType:"Link"},"DMA_Queue")),"()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Initializes a new instance of the ",(0,n.kt)("a",c({parentName:"td"},{href:"classtouchgfx_1_1_d_m_a___queue"}),"DMA_Queue")," class.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:"right"})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("h2",c({},{id:"public-functions-documentation"}),"Public Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-isempty",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"isempty"}),"isEmpty"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-isempty",mdxType:"Link"},"isEmpty")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Query if this object is empty. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true if the queue is empty. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_d_m_a___queue#function-isempty",mdxType:"Link"},"touchgfx::DMA_Queue::isEmpty")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-isfull",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"isfull"}),"isFull"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","bool","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-isfull",mdxType:"Link"},"isFull")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Query if this object is full. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"true if the queue is full. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_d_m_a___queue#function-isfull",mdxType:"Link"},"touchgfx::DMA_Queue::isFull")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-lockfreedma_queue",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"lockfreedma_queue"}),"LockFreeDMA_Queue"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-lockfreedma_queue",mdxType:"Link"},"LockFreeDMA_Queue")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("a",c({parentName:"td"},{href:"structtouchgfx_1_1_blit_op"}),"BlitOp")," *"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"mem ,"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"atomic_t"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"n"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Constructs a lock-free queue. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"mem"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Pointer to the memory used by the queue to store elements.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"n"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Number of elements the memory provided can contain."))))))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-pushcopyof",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"pushcopyof"}),"pushCopyOf"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-pushcopyof",mdxType:"Link"},"pushCopyOf")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"const ",(0,n.kt)("a",c({parentName:"td"},{href:"structtouchgfx_1_1_blit_op"}),"BlitOp")," &"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"op"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Adds the specified blitop to the queue. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Parameters:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"op"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"The blitop to add."))))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_d_m_a___queue#function-pushcopyof",mdxType:"Link"},"touchgfx::DMA_Queue::pushCopyOf")))),(0,n.kt)("h2",c({},{id:"protected-functions-documentation"}),"Protected Functions Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-first",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"first"}),"first"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","const BlitOp *","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-first",mdxType:"Link"},"first")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Gets the first element in the queue. "),(0,n.kt)("div",{class:"api-content-indented-header",markdown:"1"},"Returns:"),(0,n.kt)("div",{class:"api-content-indented",markdown:"1"},(0,n.kt)("p",null,"The first element in the queue. ")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_d_m_a___queue#function-first",mdxType:"Link"},"touchgfx::DMA_Queue::first")))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-pop",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"pop"}),"pop"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-function",markdown:"1"},(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"virtual","\xa0","void","\xa0",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_lock_free_d_m_a___queue#function-pop",mdxType:"Link"},"pop")),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"("),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null})),(0,n.kt)("td",c({parentName:"tr"},{align:null}),")"),(0,n.kt)("td",c({parentName:"tr"},{align:null})))))),(0,n.kt)("div",{class:"api-container-content api-container-content-function",markdown:"1"},(0,n.kt)("p",null,"Pops an element from the queue. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Reimplements"),": ",(0,n.kt)(r.Z,{to:"classtouchgfx_1_1_d_m_a___queue#function-pop",mdxType:"Link"},"touchgfx::DMA_Queue::pop")))),(0,n.kt)("h2",c({},{id:"protected-attributes-documentation"}),"Protected Attributes Documentation"),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_lock_free_d_m_a___queue#variable-capacity",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"capacity"}),"capacity"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"atomic_t capacity ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"The number of elements the queue can contain. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_lock_free_d_m_a___queue#variable-head",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"head"}),"head"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"atomic_t head ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Index to the head element. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_lock_free_d_m_a___queue#variable-q",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"q"}),"q"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,(0,n.kt)("a",c({parentName:"p"},{href:"structtouchgfx_1_1_blit_op"}),"BlitOp")," * q ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Pointer to the queue memory. "))),(0,n.kt)(l.Z,{url:"classtouchgfx_1_1_lock_free_d_m_a___queue#variable-tail",mdxType:"DoxybookHeaderLink"}),(0,n.kt)("h3",c({},{id:"tail"}),"tail"),(0,n.kt)("div",{class:"api-container",markdown:"1"},(0,n.kt)("div",{class:"api-container-header api-container-header-variable",markdown:"1"},(0,n.kt)("p",null,"atomic_t tail ")),(0,n.kt)("div",{class:"api-container-content",markdown:"1"},(0,n.kt)("p",null,"Index to the tail element. "))))}b.isMDXComponent=!0}}]);