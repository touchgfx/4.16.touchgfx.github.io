"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5674],{3905:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return g}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(n),u=i,g=s["".concat(p,".").concat(u)]||s[u]||d[u]||r;return n?a.createElement(g,l(l({ref:t},m),{},{components:n})):a.createElement(g,l({ref:t},m))}));function g(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class i extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var a=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,r=e.height,l=(0,i.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:r,src:l})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:l,target:"_blank"},a.createElement("img",{width:n,height:r,src:l})),a.createElement("p",null,e.children))}},56398:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return h},default:function(){return k},frontMatter:function(){return g},metadata:function(){return f},toc:function(){return b}});var a=n(3905),i=n(44035),r=n(22425),l=Object.defineProperty,o=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&d(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&d(e,n,t[n]);return e};const g={id:"creating-dynamic-l8-images",title:"Creating Dynamic L8 Images"},h=void 0,f={unversionedId:"development/ui-development/scenarios/creating-dynamic-l8-images",id:"development/ui-development/scenarios/creating-dynamic-l8-images",title:"Creating Dynamic L8 Images",description:"This section explains the use of dynamic L8 images and especially how to create the palette.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/development/ui-development/scenarios/creating-dynamic-l8-images.mdx",sourceDirName:"development/ui-development/scenarios",slug:"/development/ui-development/scenarios/creating-dynamic-l8-images",permalink:"/4.16/zh-TW/docs/development/ui-development/scenarios/creating-dynamic-l8-images",draft:!1,tags:[],version:"current",frontMatter:{id:"creating-dynamic-l8-images",title:"Creating Dynamic L8 Images"},sidebar:"docs",previous:{title:"Using the L8 Image Format to Reduce Memory Consumption",permalink:"/4.16/zh-TW/docs/development/ui-development/scenarios/using-the-l8-image-format-to-reduce-memory-consumption"},next:{title:"TouchGFX on Low Cost Hardware",permalink:"/4.16/zh-TW/docs/development/scenarios/touchgfx-on-lowcost-hardware"}},y={},b=[{value:"Dynamic L8 Images",id:"dynamic-l8-images",level:2},{value:"Creating a Dynamic L8 image with 24-bit palette",id:"creating-a-dynamic-l8-image-with-24-bit-palette",level:3},{value:"Accessing the palette",id:"accessing-the-palette",level:3},{value:"Dynamic L8 Bitmap Example",id:"dynamic-l8-bitmap-example",level:2},{value:"Manipulating the Palette",id:"manipulating-the-palette",level:3}],v={toc:b};function k(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},v),d),o(t,p({components:l,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This section explains the use of dynamic L8 images and especially how to create the palette."),(0,a.kt)("p",null,"Read in general about ",(0,a.kt)("a",u({parentName:"p"},{href:"../touchgfx-engine-features/dynamic-bitmaps"}),"Dynamic Bitmaps here")," and about the ",(0,a.kt)("a",u({parentName:"p"},{href:"using-the-l8-image-format-to-reduce-memory-consumption"}),"L8 image format here"),"."),(0,a.kt)("h2",u({},{id:"dynamic-l8-images"}),"Dynamic L8 Images"),(0,a.kt)("p",null,"Dynamic L8 bitmaps are created like any other dynamic bitmap, except that we also have to specify the type of palette  to create for the bitmap."),(0,a.kt)("p",null,"TouchGFX supports 3 types of palettes:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"Palette")),(0,a.kt)("th",u({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"th"},"\u8aaa\u660e")))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_ARGB8888"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"32-bit, 8 bits for each of red, green, blue and per pixel alpha channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_RGB888"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"24-bit, 8 bits for each of red, green and blue, no per pixel alpha channel")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",u({parentName:"tr"},{align:null}),"CLUT_FORMAT_L8_RGB565"),(0,a.kt)("td",u({parentName:"tr"},{align:null}),"16-bit, 5 bits for red, 6 bits for green, 5 bits for blue, no per pixel alpha channel")))),(0,a.kt)("h3",u({},{id:"creating-a-dynamic-l8-image-with-24-bit-palette"}),"Creating a Dynamic L8 image with 24-bit palette"),(0,a.kt)("p",null,"Here we create a 100x100 pixels L8 bitmap with a 24-bit palette:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreate(100, 100, Bitmap::L8, Bitmap::CLUT_FORMAT_L8_RGB888);\n")),(0,a.kt)("p",null,"This call allocated a 100x100 L8 bitmap and a 24-bit palette in the bitmap cache. The palette always holds 256 colors for dynamic bitmaps."),(0,a.kt)("h3",u({},{id:"accessing-the-palette"}),"Accessing the palette"),(0,a.kt)("p",null,"The palette is located 4 bytes after the pixels (aligned on 32-bit). The bytes contains information about the palette type and length of the palette."),(0,a.kt)("p",null,"We can get a pointer to the (so far uninitialized) palette like this:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"//Get a pointer to the bitmap data (pixels and palette)\nuint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);\n\n//1 byte pr pixel, round up to 32-bit\nuint32_t byteSize = 100*100;\nbyteSize = ((byteSize + 3) & ~3);\n\n//Palette starts four bytes after the pixels\nuint8_t* pal = (data + byteSize + 4);\n")),(0,a.kt)("h2",u({},{id:"dynamic-l8-bitmap-example"}),"Dynamic L8 Bitmap Example"),(0,a.kt)("p",null,"We will now go through an example of creating a dynamic L8 bitmap and manipulating the palette. Manipulating the palette if not a typical thing to do for a general application. The example serves the purpose of illustrating how to access and generate a palette."),(0,a.kt)("p",null,"First we create a Screen in TouchGFXDesigner and insert a white Box in the background and an Image at e.g. x=140, y=8:"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/designer-img.webp",mdxType:"Figure"},"Creating a Screen"),(0,a.kt)("p",null,"Now generate the code and open the Screen1View.cpp file. We must insert code in ",(0,a.kt)("em",{parentName:"p"},"setupScreen")," to initialize the bitmap cache and create a dynamic bitmap."),(0,a.kt)("p",null,"We create a bitmap of 200*256 pixels. Remember each pixel in an L8 bitmap is one byte. We color each row of the image with a different color. First row has color 0, last row has color 255."),(0,a.kt)("p",null,"Then we initialize the colors in the palette. We calculate the start address of the palette and set the RGB values of the 256 colors. Here we create colors that go from green to red and back to green again."),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),'#ifdef SIMULATOR\nuint32_t cacheBuffer[320*1024/4]; //simulate PSRAM\nuint16_t* psram = (uint16_t*)cacheBuffer;\n#else\nuint16_t* psram = (uint16_t*)(0xd0000000 + 480*272*2*2); //Address after two 16bit framebuffers\n#endif\n\nScreen1View::Screen1View()\n{\n\n}\n\nvoid Screen1View::setupScreen()\n{\n    Screen1ViewBase::setupScreen();\n\n    //Create one dynamic bitmap\n    Bitmap::setCache(psram, 320*1024, 1); //320Kb cache\n    BitmapId dynamicBitmap1 = Bitmap::dynamicBitmapCreate(200, 256, Bitmap::L8, Bitmap::CLUT_FORMAT_L8_RGB888);\n    imageDynamic.setBitmap(Bitmap(dynamicBitmap1));\n\n    if (dynamicBitmap1 == BITMAP_INVALID)\n    {\n        touchgfx_printf("Unable to create dynamic bitmap\\n");\n    }\n    else\n    {\n        uint8_t* data = Bitmap::dynamicBitmapGetAddress(dynamicBitmap1);\n\n        uint8_t* pixel = data;\n        //make colored rows\n        for (int y = 0; y<256; y++)\n        {\n            for (int x = 0; x<200; x++)\n            {\n                *pixel++ = y;\n            }\n        }\n\n        uint32_t byteSize = 200*256;\n        byteSize = ((byteSize + 3) & ~3);\n\n        //Palette starts four bytes after the pixels\n        uint8_t* pal = (data + byteSize + 4);\n\n        //Make palette with 256 colors from green to red to green\n        for (int i = 0; i<256; i++)\n        {\n            //BGR\n            pal[i*3 + 0] = 0x00;\n            pal[i*3 + 1] = 127*(1+cosf(i*6.28f/255));\n            pal[i*3 + 2] = 255*(sinf(i*3.14f/255));\n        }\n    }\n}\n')),(0,a.kt)("p",null,"This gives us a Screen that looks like this:"),(0,a.kt)(i.Z,{imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/img-20200225-151937.bmp",mdxType:"Figure"},"Showing L8 image"),(0,a.kt)("h3",u({},{id:"manipulating-the-palette"}),"Manipulating the Palette"),(0,a.kt)("p",null,"Since we have access to the palette used for the dynamic L8 bitmap, we can easily manipulate it."),(0,a.kt)("p",null,"Here we cycle the colors one index down and force a redraw of the image in every frame:"),(0,a.kt)(r.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",u({parentName:"pre"},{className:"language-cpp"}),"...\nvoid Screen1View::handleTickEvent()\n{\n    //get palette address\n    uint8_t* data = Bitmap::dynamicBitmapGetAddress(imageDynamic.getBitmap());\n    uint32_t byteSize = 200*256;\n    byteSize = ((byteSize + 3) & ~3);\n    uint8_t* pal = (data + byteSize + 4);\n\n    //Cycle palette, copy color 0\n    int8_t blue = pal[0], green = pal[1], red = pal[2];\n\n    //Move palette down, 1->0, 2->1, ...\n    for (int i = 0; i<255*3; i+=3)\n    {\n        pal[i] = pal[i+3];\n        pal[i+1] = pal[i+4];\n        pal[i+2] = pal[i+5];\n    }\n\n    //Insert color 0 as color 255\n    pal[255*3+0] = blue;\n    pal[255*3+1] = green;\n    pal[255*3+2] = red;\n\n    //Force redraw by invalidating\n    imageDynamic.invalidate();\n}\n")),(0,a.kt)("p",null,'This will move colors in the dynamic bitmap "upwards":'),(0,a.kt)(i.Z,{width:"200",imageSource:"/img/development/ui-development/scenarios/creating-dynamic-l8-images/demo.gif",mdxType:"Figure"},"Cycling the L8 palette"))}k.isMDXComponent=!0}}]);