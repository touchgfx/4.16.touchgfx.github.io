"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4585],{3905:function(e,t,a){a.d(t,{Zo:function(){return l},kt:function(){return f}});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},l=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,l=m(e,["components","mdxType","originalType","parentName"]),s=c(a),u=i,f=s["".concat(p,".").concat(u)]||s[u]||d[u]||r;return a?n.createElement(f,o(o({ref:t},l),{},{components:a})):n.createElement(f,o({ref:t},l))}));function f(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=u;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[s]="string"==typeof e?e:i,o[1]=m;for(var c=2;c<r;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},22425:function(e,t,a){var n=a(67294);class i extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=i},94921:function(e,t,a){a.r(t),a.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return u},metadata:function(){return h},toc:function(){return y}});var n=a(3905),i=a(22425),r=Object.defineProperty,o=Object.defineProperties,m=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&s(e,a,t[a]);if(p)for(var a of p(t))l.call(t,a)&&s(e,a,t[a]);return e};const u={id:"dynamic-bitmaps",title:"Dynamic Bitmaps"},f=void 0,h={unversionedId:"development/ui-development/touchgfx-engine-features/dynamic-bitmaps",id:"development/ui-development/touchgfx-engine-features/dynamic-bitmaps",title:"Dynamic Bitmaps",description:"",source:"@site/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",permalink:"/4.16/docs/development/ui-development/touchgfx-engine-features/dynamic-bitmaps",draft:!1,tags:[],version:"current",frontMatter:{id:"dynamic-bitmaps",title:"Dynamic Bitmaps"},sidebar:"docs",previous:{title:"Canvas Widgets",permalink:"/4.16/docs/development/ui-development/touchgfx-engine-features/canvas-widgets"},next:{title:"Binary Fonts",permalink:"/4.16/docs/development/ui-development/touchgfx-engine-features/using-binary-fonts"}},g={},y=[{value:"Dynamic Bitmap Configuration",id:"dynamic-bitmap-configuration",level:2},{value:"Using a Dynamic Bitmap Example",id:"using-a-dynamic-bitmap-example",level:2},{value:"Dynamic Bitmap Operations",id:"dynamic-bitmap-operations",level:2},{value:"Creating a Dynamic Bitmap",id:"creating-a-dynamic-bitmap",level:3},{value:"Deleting a Dynamic Bitmap",id:"deleting-a-dynamic-bitmap",level:3},{value:"Get the address of the pixels in a Dynamic Bitmap",id:"get-the-address-of-the-pixels-in-a-dynamic-bitmap",level:3},{value:"Set the solid area of a Dynamic Bitmap",id:"set-the-solid-area-of-a-dynamic-bitmap",level:3}],b={toc:y};function v(e){var t,a=e,{components:r}=a,s=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&l.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),s),o(t,m({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"This section explains how to use Dynamic Bitmaps. Recall that standard\nbitmaps are compiled into the application and therefore must be\navailable at compile time. The bitmaps are converted from e.g. PNG\nfiles and stored in an internal format together with size and format\ninformation."),(0,n.kt)("p",null,"It is also possible to create a bitmap in RAM at runtime. This is\ncalled a ",(0,n.kt)("em",{parentName:"p"},"dynamic bitmap"),". A dynamic bitmap can be used just as the\nstatic bitmaps that are compiled into the application. This means that\nyou can use a dynamic bitmap with e.g. the Image and Button widgets."),(0,n.kt)("h2",d({},{id:"dynamic-bitmap-configuration"}),"Dynamic Bitmap Configuration"),(0,n.kt)("p",null,"When you create a dynamic bitmap the RAM for the pixels is allocated from\nthe bitmap cache. You must therefore configure a bitmap cache before\nyou can create dynamic bitmaps."),(0,n.kt)("p",null,"See the article on ",(0,n.kt)("a",d({parentName:"p"},{href:"caching-bitmaps"}),"bitmap caching"),"\nfor configuration instructions."),(0,n.kt)("p",null,"It is required to define the maximum number of Dynamic Bitmaps used in\nyour application. This maximum is passed to TouchGFX together with the\nbitmap cache address and size. Here we configure a bitmap cache with\nup to 4 dynamic bitmaps:"),(0,n.kt)(i.Z,{mdxType:"CodeHeader"},"BoardConfiguration.cpp (extract)"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{4-4}","{4-4}":!0}),"// Place cache start address in SDRAM at address 0xC0008000;\nuint16_t* cacheStartAddr = (uint16_t*)0xC0008000;\nuint32_t cacheSize = 0x300000; //3 MB, as example\nHAL& hal = touchgfx_generic_init<STM32F4HAL>(dma, display, tc, DISPLAY_WIDTH, DISPLAY_HEIGHT, cacheStartAddr, cacheSize, 4);\n")),(0,n.kt)("h2",d({},{id:"using-a-dynamic-bitmap-example"}),"Using a Dynamic Bitmap Example"),(0,n.kt)("p",null,"To use the dynamic bitmap we need a widget to show it. So insert an\nImage widget in the view (in code or in the Designer):"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{4-4}","{4-4}":!0}),"class TemplateView : public View\n{\nprivate:\n    Image image;\n}\n")),(0,n.kt)("p",null,"Create the dynamic bitmap in setupScreen. Here we use the 16bpp format\nRGB565. If your framebuffer is e.g 24 bit use RGB888. To create a\ntransparent bitmap, use the format ARGB8888:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-cpp",metastring:"{5-6}","{5-6}":!0}),"void TemplateView::setupScreen()\n{\n    BitmapId bmpId;\n\n    //Create (16bit) dynamic bitmap of size 100x150\n    const int width = 100;\n    const int height = 150;\n    bmpId = Bitmap::dynamicBitmapCreate(100, 150, Bitmap::RGB565);\n\n    //set all pixels white\n    if (bmpId != BITMAP_INVALID)\n    {\n       memset(Bitmap::dynamicBitmapGetAddress(bmpId), 0xFF, width*height*2);\n    }\n\n    //Make Image widget show the dynamic bitmap\n    image.setBitmap(Bitmap(bmpId));\n\n    //Position image and add to View\n    image.setXY(20, 20);\n    add(image);\n    ...\n}\n")),(0,n.kt)("p",null,"If you want to load your image from a file you can replace the call to memset with your loader code. See the article ",(0,n.kt)("a",d({parentName:"p"},{href:"../scenarios/loading-images-at-runtime"}),"Loading Images At Runtime")),(0,n.kt)("h2",d({},{id:"dynamic-bitmap-operations"}),"Dynamic Bitmap Operations"),(0,n.kt)("p",null,"The dynamic bitmap operations are all placed in the Bitmap class."),(0,n.kt)("h3",d({},{id:"creating-a-dynamic-bitmap"}),"Creating a Dynamic Bitmap"),(0,n.kt)("p",null,"The following method creates a dynamic bitmap with the width, height\nand bitmap format specified. The bitmap is only created if enough\nunused memory is available. The method returns BITMAP_INVALID if the\nbitmap was not created."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"static BitmapId Bitmap::dynamicBitmapCreate(const uint16_t width, const uint16_t height, BitmapFormat format)\n")),(0,n.kt)("h3",d({},{id:"deleting-a-dynamic-bitmap"}),"Deleting a Dynamic Bitmap"),(0,n.kt)("p",null,"This method deletes a dynamic bitmap."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"static bool Bitmap::dynamicBitmapDelete(BitmapId id)\n")),(0,n.kt)("h3",d({},{id:"get-the-address-of-the-pixels-in-a-dynamic-bitmap"}),"Get the address of the pixels in a Dynamic Bitmap"),(0,n.kt)("p",null,"The following method returns the address of the dynamic bitmap. This\nmethod is used by file loaders to copy image data into the bitmap."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"static uint8_t* dynamicBitmapGetAddress(BitmapId id)\n")),(0,n.kt)("h3",d({},{id:"set-the-solid-area-of-a-dynamic-bitmap"}),"Set the solid area of a Dynamic Bitmap"),(0,n.kt)("p",null,"The following method sets the solid rectangle of a dynamic bitmap."),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"static bool dynamicBitmapSetSolidRect(BitmapId id, const Rect& solidRect)\n")),(0,n.kt)("p",null,'Read more about the "solid area" concept in the ',(0,n.kt)("a",d({parentName:"p"},{href:"custom-widgets#solid-area"}),"Custom Widgets"),"\narticle."),(0,n.kt)("p",null,"By default the solid area is set to be the whole bitmap for\nnon-transparent formats like RGB565 and RGB888.\nIt is set to empty for transparent formats like ARGB8888."))}v.isMDXComponent=!0}}]);