"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8140],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=d(n),u=r,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:r,i[1]=s;for(var d=2;d<o;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},22425:function(e,t,n){var a=n(67294);class r extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,n){var a=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,r.Z)(e.imageSource);return t?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:i,target:"_blank"},a.createElement("img",{width:n,height:o,src:i})),a.createElement("p",null,e.children))}},65895:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return g},default:function(){return F},frontMatter:function(){return f},metadata:function(){return k},toc:function(){return y}});var a=n(3905),r=n(44035),o=n(39130),i=n(22425),s=Object.defineProperty,l=Object.defineProperties,d=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))h.call(t,n)&&u(e,n,t[n]);return e};const f={id:"using-serial-flash",title:"Using Serial Flash for images and fonts"},g=void 0,k={unversionedId:"development/scenarios/using-serial-flash",id:"development/scenarios/using-serial-flash",title:"Using Serial Flash for images and fonts",description:"",source:"@site/docs/development/scenarios/using-serial-flash.mdx",sourceDirName:"development/scenarios",slug:"/development/scenarios/using-serial-flash",permalink:"/4.16/docs/development/scenarios/using-serial-flash",draft:!1,tags:[],version:"current",frontMatter:{id:"using-serial-flash",title:"Using Serial Flash for images and fonts"},sidebar:"docs",previous:{title:"Using Non-Memory Mapped Flash for Storing Images",permalink:"/4.16/docs/development/scenarios/using-non-memory-mapped-flash"},next:{title:"Using Non-Memory Mapped Flash for Font Data",permalink:"/4.16/docs/development/scenarios/fonts-in-unmapped-flash"}},b={},y=[{value:"Configuration",id:"configuration",level:2},{value:"Implementation",id:"implementation",level:2},{value:"Images",id:"images",level:2},{value:"Font data",id:"font-data",level:2}],v={toc:y};function F(e){var t,n=e,{components:s}=n,u=((e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&h.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=m(m({},v),u),l(t,d({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"This section discusses how to use a serial flash (or other\nunmapped storage) to store images and fonts. The technique described here is especially usefull on STM32G0 and\nother deviced with very little RAM."),(0,a.kt)("p",null,"See the article ",(0,a.kt)("a",m({parentName:"p"},{href:"lowering-memory-usage-with-partial-framebuffer"}),"Lowering Memory Usage with Partial\nFramebuffer")," for a\nintroduction to partial framebuffers which are often used together\nwith a serial flash.",(0,a.kt)("br",{parentName:"p"}),"\n","See also the article ",(0,a.kt)("a",m({parentName:"p"},{href:"using-non-memory-mapped-flash"}),"Using Non-Memory Mapped Flash for storing\nimages")," for an introduction to caching\nbitmaps from unmapped flash to RAM."),(0,a.kt)("h2",m({},{id:"configuration"}),"Configuration"),(0,a.kt)("p",null,'To use a serial flash with your TouchGFX application you must change the TouchGFX Generator configuration to enable the "External Data Reader" in "Additional Features".'),(0,a.kt)(r.Z,{imageSource:"/img/development/touchgfx-hal-development/touchgfx-generator/additional-features-data-reader.webp",width:"520",noShadow:!0,mdxType:"Figure"},"Additional Features: Data Reader"),(0,a.kt)("p",null,"With this feature enabled the TouchGFX Generator changes the\nconfiguration to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," LCD class. It also\ngenerates a subclass of the ",(0,a.kt)("inlineCode",{parentName:"p"},"touchgfx::FlashDataReader"),":"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFXConfiguration.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp",metastring:"{2-2,8-9}","{2-2,8-9}":!0}),"static TouchGFXDataReader dataReader;\nstatic LCD16bppSerialFlash display(dataReader);\nstatic ApplicationFontProvider fontProvider;\n...\nvoid touchgfx_init()\n{\n    ...\n    hal.setDataReader(&dataReader);\n    fontProvider.setFlashReader(&dataReader);\n    ...\n}\n")),(0,a.kt)("p",null,"This code creates an instance of the ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," class and\npasses that instance to the display object, to the HAL object, and to\nthe ApplicationFontProvider object. These three objects will use the\ndataReader object to access data in the serial flash. The data can be\nboth images and font data."),(0,a.kt)("p",null,"The system programmer must finish the implementation of the\n",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," class to actually read data from a flash."),(0,a.kt)("h2",m({},{id:"implementation"}),"Implementation"),(0,a.kt)("p",null,"The ",(0,a.kt)("em",{parentName:"p"},"TouchGFXDataReader")," class implements the\n",(0,a.kt)("a",m({parentName:"p"},{href:"../../api/classes/classtouchgfx_1_1_flash_data_reader/#public-functions"}),(0,a.kt)("em",{parentName:"a"},"touchgfx::FlashDataReader")),"\ninterface. This interface has the following 4 methods that needs to be\nimplemented on a specific hardware."),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"include/touchgfx/hal/FlashDataReader.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"    bool addressIsAddressable(const void* address)\n    void copyData(const void* src, void* dst, uint32_t bytes)\n    void startFlashLineRead(const void* src, uint32_t bytes)\n    const uint8_t* waitFlashReadComplete()\n")),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"addressIsAddressable")," method is used by the ",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash"),"\nclass to decide if some data can be directly read (i.e. is located in\ninternal RAM or internal flash) or if it should be read through the\ndataReader object."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"copyData"),"*` method is used to copy data synchronously from the\nflash to RAM. This function is typically used when the data is not\nfurther processed. E.g. when copying a solid image to a framebuffer."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"startFlashLineRead")," method is used when multiple lines of data\nare required from the flash. The ",(0,a.kt)("inlineCode",{parentName:"p"},"startFlashLineRead")," method initiates\na read of data. The method can initiate an asynchronous read and\nshould return immediately after starting the read. The\n",(0,a.kt)("em",{parentName:"p"},"waitFlashReadComplete")," method should wait for the read to finish, and\nreturn a pointer to a buffer holding the data."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," can issue one flash read while processing the\npreviously read data (in some situations). This means that at least\ntwo buffers are required in the dataReader to gain full concurrency."),(0,a.kt)("p",null,"The TouchGFX Generator generates the ",(0,a.kt)("inlineCode",{parentName:"p"},"FlashDataReader")," in two classes:\n",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader"),". The\n",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," is the superclass of the two and contains\na default implementation. If that implementation is not suitable, the\napplication programmer can change the implementation of the virtual\nfunctions in the ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXDataReader")," class."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," implementation calls C-functions to do\nthe work. These application are implemented by the system programmer."),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"TouchGFX/target/generated/TouchGFXGeneratedDataReader.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'extern "C" __weak void DataReader_WaitForReceiveDone();\nextern "C" __weak void DataReader_ReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\nextern "C" __weak void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length);\n\nvoid TouchGFXGeneratedDataReader::startFlashLineRead(const void* src, uint32_t bytes)\n{\n    /* Start transfer using DMA */\n    DataReader_StartDMAReadData((uint32_t)src, (readToBuffer1 ? buffer1 : buffer2), bytes);\n}\n')),(0,a.kt)("p",null,"The implementation is found in the ",(0,a.kt)("inlineCode",{parentName:"p"},"MB1642BDataReader.c")," file:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"Core/Src/MB1642BDataReader.c"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"void DataReader_StartDMAReadData(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    readDataDMA(address24, buffer, length);\n}\n\nvoid readDataDMA(uint32_t address24, uint8_t* buffer, uint32_t length)\n{\n    // Pull Flash CS pin low\n    isReceivingData = 1;\n    FLASH_CS_GPIO_Port->BRR = FLASH_CS_Pin;\n\n    *((__IO uint8_t*)&hspi2.Instance->DR) = CMD_READ;\n\n    ...\n}\n")),(0,a.kt)("p",null,"This implementation is specific to the protocol used by the flash and\nthe GPIO used for SPI and CS. All three C functions must be\nimplemented for the ",(0,a.kt)("inlineCode",{parentName:"p"},"TouchGFXGeneratedDataReader")," class to work."),(0,a.kt)("h2",m({},{id:"images"}),"Images"),(0,a.kt)("p",null,"As mentioned in the introduction the ",(0,a.kt)("inlineCode",{parentName:"p"},"LCD16bppSerialFlash")," class can\nread image pixels through the dataReader object. For this to work we\nmust change the lnker script to put images in an address range outside\nthe internal flash range."),(0,a.kt)("p",null,"On the STM32G071 we have selected the address 0x90000000 as start address for the serial flash:"),(0,a.kt)(i.Z,{mdxType:"CodeHeader"},"gcc/STM32G071RBTX_FLASH.ld"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),"MEMORY\n{\n  RAM        (xrw)    : ORIGIN = 0x20000000,   LENGTH = 36K\n  FLASH      (rx)     : ORIGIN = 0x8000000,    LENGTH = 128K\n  SPI_FLASH  (r)      : ORIGIN = 0x90000000,   LENGTH = 8M\n}\n\n/* Sections */\nSECTIONS\n{\n  ...\n\n  ExtFlashSection :\n  {\n    *(ExtFlashSection ExtFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n\n  FontFlashSection :\n  {\n    *(FontFlashSection FontFlashSection.*)\n    *(.gnu.linkonce.r.*)\n    . = ALIGN(0x4);\n  } >SPI_FLASH\n}\n")),(0,a.kt)("p",null,"This puts the ",(0,a.kt)("inlineCode",{parentName:"p"},"ExtFlashSection")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"FontFlashSection")," into the 0x90000000 address range."),(0,a.kt)("p",null,"The remaining task is to write the data to the external flash using a flasher tool."),(0,a.kt)("p",null,"A short description on writing flash loaders for STM32CubeProgrammer can be found in section 2.3.3 in this document:"),(0,a.kt)(o.Z,{to:"https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf#page=25",mdxType:"Link"},"UM2237 STMCubeProgrammer User Manual"),(0,a.kt)("h2",m({},{id:"font-data"}),"Font data"),(0,a.kt)("p",null,"The above linker script puts the font pixel data and the font\ncharacter metadata (with and height) into the external flash (both\ntypes of data are in the FontFlashSection). This data is also read\nthrough the dataReader object when drawing characters on the Screen"),(0,a.kt)("p",null,'If you are not using the "Unmapped Storage Format" for your you must\nchange the linker script and the file\n',(0,a.kt)("inlineCode",{parentName:"p"},"include/touchgfx/hal/Config.hpp")," to move the font character metadata\nto internal flash."),(0,a.kt)("p",null,"See the article about ",(0,a.kt)("a",m({parentName:"p"},{href:"fonts-in-unmapped-flash"}),"Fonts in unmapped\nstorage")," for more information on the font\nformats."))}F.isMDXComponent=!0}}]);