"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1184],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),h=a,d=p["".concat(c,".").concat(h)]||p[h]||f[h]||o;return r?n.createElement(d,i(i({ref:t},u),{},{components:r})):n.createElement(d,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},44035:function(e,t,r){var n=r(67294),a=r(25026);t.Z=function(e){const t=e.noShadow||!1,r=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:r,height:o,src:i})),n.createElement("p",null,e.children))}},47331:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return d},default:function(){return b},frontMatter:function(){return h},metadata:function(){return m},toc:function(){return y}});var n=r(3905),a=r(44035),o=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&p(e,r,t[r]);return e};const h={id:"scenarios-spi",title:"SPI"},d=void 0,m={unversionedId:"development/touchgfx-hal-development/scenarios/scenarios-spi",id:"development/touchgfx-hal-development/scenarios/scenarios-spi",title:"SPI",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/touchgfx-hal-development/scenarios/scenarios-spi.mdx",sourceDirName:"development/touchgfx-hal-development/scenarios",slug:"/development/touchgfx-hal-development/scenarios/scenarios-spi",permalink:"/4.16/ko/docs/development/touchgfx-hal-development/scenarios/scenarios-spi",draft:!1,tags:[],version:"current",frontMatter:{id:"scenarios-spi",title:"SPI"}},g={},y=[{value:"Transfering the framebuffer",id:"transfering-the-framebuffer",level:2},{value:"Returning from flushFrameBuffer",id:"returning-from-flushframebuffer",level:2}],v={toc:y};function b(e){var t,r=e,{components:o}=r,p=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=f(f({},v),p),i(t,l({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,'The following scenario shows, generally, the steps involved in creating a TouchGFX driver when selecting "Custom" display interface in the TouchGFX generator using SPI. The steps involved are similar to that of other display interfaces where the MCU lacks an embedded display controller, e.g. through FMC over an Intel 8080 interface.'),(0,n.kt)("p",null,'Once the SPI peripheral is configured in CubeMX the TouchGFX Generator can be used to generate a HAL, using a "custom" display interface, that allows developers to transfer the updated parts of the framebuffer to a connected display using a proprietary driver that developers write themselves. Figure X shows a TouchGFX Generator configuration in which selecting Custom display interface will allow the generated code to support the transfer of the updated parts of the framebuffer to the display.'),(0,n.kt)(a.Z,{imageSource:"/img/development/touchgfx-hal-development/scenarios/custom-interface.webp",noShadow:!0,mdxType:"Figure"},"Project activity"),(0,n.kt)("p",null,"Generally, for displays with embedded GRAM such as 8080 or SPI displays, the driver is structured as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},'Based on area of the framebuffer to be redrawn, move the "display cursor" to a place in GRAM that matches this.'),(0,n.kt)("li",{parentName:"ol"},"GRAM\uc5d0 \uc785\ub825\ub418\ub294 \ud53d\uc140 \ub370\uc774\ud130\ub97c \uae30\ub85d\ud560 \uc900\ube44\ub97c \ud569\ub2c8\ub2e4."),(0,n.kt)("li",{parentName:"ol"},"\ud53d\uc140 \ub370\uc774\ud130\ub97c \uc804\uc1a1\ud569\ub2c8\ub2e4.")),(0,n.kt)("h2",f({},{id:"transfering-the-framebuffer"}),"Transfering the framebuffer"),(0,n.kt)("p",null,"When an area of the framebuffer has been updated, the TouchGFX Engine will call ",(0,n.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer"),"."),(0,n.kt)("p",null,"React to signal (S?) from TouchGFX Engine."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"void  TouchGFXHAL::flushFrameBuffer(const Rect& rect)\n{\n    /* Set Cursor */\n    __ST7789H2_SetDisplayWindow(rect.x, rect.y, rect.width, rect.height);\n\n    /* Prepare to write to LCD RAM */\n    ST7789H2_WriteReg(ST7789H2_WRITE_RAM, (uint8_t*)NULL, 0);\n\n    /* Send Pixels */\n    this->copyFrameBufferBlockToLCD(rect);\n}\n")),(0,n.kt)("p",null,"\uc544\ub798\uc758",(0,n.kt)("inlineCode",{parentName:"p"},"\xa0__ST7789H2_SetDisplayWindow\xa0"),'\ud568\uc218\ub294 GRAM\uc744 \uc0ac\uc6a9\ud558\ub294 \ub514\uc2a4\ud50c\ub808\uc774\uc5d0\uc11c \ubcf4\ud1b5 \uadf8\ub7ec\ud558\ub4ef\uc774 \ud2b9\uc815 \ub808\uc9c0\uc2a4\ud130\uc5d0 \uae30\ub85d\ud558\uc5ec GRAM\uc758 \uac00\uc0c1 "cursor"\uc5d0 \ub300\ud55c',(0,n.kt)("inlineCode",{parentName:"p"}," x"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"y")," \uc88c\ud45c\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-c"}),'extern "C"\nvoid __ST7789H2_SetDisplayWindow(uint16_t Xpos, uint16_t Ypos, uint16_t Width, uint16_t Height)\n{\n    uint8_t   parameter[4];\n\n    /* CASET: Column Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Xpos;\n    parameter[2] = 0x00;\n    parameter[3] = Xpos + Width - 1;\n    ST7789H2_WriteReg(ST7789H2_CASET, parameter, 4);\n\n    /* RASET: Row Address Set */\n    parameter[0] = 0x00;\n    parameter[1] = Ypos;\n    parameter[2] = 0x00;\n    parameter[3] = Ypos + Height - 1;\n    ST7789H2_WriteReg(ST7789H2_RASET, parameter, 4);\n}\n')),(0,n.kt)("p",null,"\uc544\ub798\uc758 ",(0,n.kt)("inlineCode",{parentName:"p"},"TouchGFXHAL::copyFrameBufferBlockToLCD "),"\ud568\uc218\ub294 \uc5c5\ub370\uc774\ud2b8\ub41c \uc601\uc5ed(",(0,n.kt)("inlineCode",{parentName:"p"},"Rect"),")\uc758 \ub77c\uc778\uc744 \ud55c\ubc88\uc5d0 \ud558\ub098\uc529 \uc804\uc1a1\ud558\uace0 \ud504\ub808\uc784 \ubc84\ud37c \ud3ec\uc778\ud130\ub97c \uadf8\uc5d0 \ub9de\uac8c \uc9c4\ud589\ub418\uac8c \ud558\ub294 \ube44\uacf5\uac1c \ud568\uc218\uc785\ub2c8\ub2e4."),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-cpp"}),"void TouchGFXHAL::copyFrameBufferBlockToLCD(const Rect rect)\n{\n    __IO uint16_t* ptr;\n    uint32_t height;\n\n    // Use default implementation (CPU copy!).\n    // This can be accelerated using regular DMA hardware\n    for (height = 0; height < rect.height ; height++)\n    {\n        ptr = getClientFrameBuffer() + rect.x + (height + rect.y)  * BSP_LCD_GetXSize();\n        LCD_IO_WriteMultipleData((uint16_t*)ptr, rect.width);\n    }\n}\n")),(0,n.kt)("h2",f({},{id:"returning-from-flushframebuffer"}),"Returning from flushFrameBuffer"),(0,n.kt)("p",null,"Once the function returns, TouchGFX Engine returns to its. If developers desire to use DMA to perform these transfers, then they must ensure that ",(0,n.kt)("inlineCode",{parentName:"p"},"HAL::flushFrameBuffer(Rect& rect)")," does not return by waiting on a semaphore that is signaled by a DMA Completed interrupt."))}b.isMDXComponent=!0}}]);