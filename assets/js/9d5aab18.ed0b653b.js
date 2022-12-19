"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8515],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=o.createContext({}),u=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return o.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(n),h=i,m=p["".concat(c,".").concat(h)]||p[h]||d[h]||r;return n?o.createElement(m,l(l({ref:t},s),{},{components:n})):o.createElement(m,l({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=h;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a[p]="string"==typeof e?e:i,l[1]=a;for(var u=2;u<r;u++)l[u]=n[u];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},88678:function(e,t,n){var o=n(67294);class i extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{class:e},o.createElement("div",{class:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},31217:function(e,t,n){var o=n(67294);class i extends o.Component{render(){return o.createElement("code",null,this.props.children)}}t.Z=i},60204:function(e,t,n){var o=n(67294);class i extends o.Component{render(){return o.createElement("i",null,this.props.children)}}t.Z=i},93054:function(e,t,n){var o=n(67294),i=n(88678);const r=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class l extends o.Component{render(){return o.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:r},this.props.children)}}t.Z=l},19520:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return g},metadata:function(){return b},toc:function(){return T}});var o=n(3905),i=n(39130),r=n(93054),l=n(31217),a=n(60204),c=Object.defineProperty,u=Object.defineProperties,s=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))h.call(t,n)&&m(e,n,t[n]);return e};const g={id:"compiling-and-flashing",title:"Compiling & Flashing"},k=void 0,b={unversionedId:"development/ui-development/working-with-touchgfx/compiling-and-flashing",id:"development/ui-development/working-with-touchgfx/compiling-and-flashing",title:"Compiling & Flashing",description:"",source:"@site/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/compiling-and-flashing",permalink:"/4.16/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing",draft:!1,tags:[],version:"current",frontMatter:{id:"compiling-and-flashing",title:"Compiling & Flashing"},sidebar:"docs",previous:{title:"Simulator",permalink:"/4.16/docs/development/ui-development/working-with-touchgfx/simulator"},next:{title:"Debugging",permalink:"/4.16/docs/development/ui-development/working-with-touchgfx/debugging"}},v={},T=[{value:"Compiling TouchGFX Applications",id:"compiling-touchgfx-applications",level:2},{value:"Compiling for PC Simulator",id:"compiling-for-pc-simulator",level:3},{value:"GCC",id:"gcc",level:4},{value:"Visual Studio",id:"visual-studio",level:4},{value:"Compiling for Target Hardware",id:"compiling-for-target-hardware",level:3},{value:"Flashing STM32 Evaluation Kits",id:"flashing-stm32-evaluation-kits",level:2},{value:"GCC &amp; TouchGFX Designer",id:"gcc--touchgfx-designer",level:3},{value:"CubeIDE",id:"cubeide",level:3},{value:"IAR",id:"iar",level:3},{value:"Keil",id:"keil",level:3},{value:"Flashing Custom Hardware",id:"flashing-custom-hardware",level:2}],y={toc:T};function w(e){var t,n=e,{components:c}=n,m=((e,t)=>{var n={};for(var o in e)d.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&p)for(var o of p(e))t.indexOf(o)<0&&h.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=f(f({},y),m),u(t,s({components:c,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"This section describes how to go from TouchGFX application code to executing program, that is how to compile and flash in a specific setup."),(0,o.kt)("h2",f({},{id:"compiling-touchgfx-applications"}),"Compiling TouchGFX Applications"),(0,o.kt)("p",null,"When compiling a TouchGFX application, there are two options; compiling for the PC simulator or compiling for the target hardware."),(0,o.kt)("h3",f({},{id:"compiling-for-pc-simulator"}),"Compiling for PC Simulator"),(0,o.kt)("p",null,"There are two options for compiling projects for the PC Simulator; GCC and Visual Studio. ",(0,o.kt)("br",null),"\nBoth of these options are always available, since they are generated by TouchGFX Designer."),(0,o.kt)("h4",f({},{id:"gcc"}),"GCC"),(0,o.kt)("p",null,"The makefile is located at ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<touchgfx_application_root_folder>/simulator/gcc/Makefile")),(0,o.kt)("p",null,"TouchGFX includes a MinGW environment, that comes preinstalled with a GCC compiler and GNU Make, making it easy to execute the generated Makefile for the PC simulator."),(0,o.kt)("p",null,"The TouchGFX Environment can be launched either from ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<touchgfx_installation_directory>/env/MinGW/msys/1.0/msys.bat"),' or from the shortcut added to the Windows start menu, named "TouchGFX x.y.z Environment" where x, y and z describe the version number.'),(0,o.kt)("p",null,"After launching the TouchGFX Environment and navigating to the TouchGFX Application root folder, the simple command below can be executed to produce a simulator.exe file."),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{}),"make -f simulator/gcc/Makefile\n")),(0,o.kt)("p",null,"The simulator executable can then be launched from the TouchGFX Environment with the following command."),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{}),"./build/bin/simulator.exe\n")),(0,o.kt)("p",null,"The PC Simulator can also be compiled and launched from TouchGFX Designer, by using the ",(0,o.kt)(i.Z,{to:"../designer-user-guide/main-window#run-simulator",mdxType:"Link"},"Run Simulator")," command."),(0,o.kt)("h4",f({},{id:"visual-studio"}),"Visual Studio"),(0,o.kt)("p",null,"To compile the PC Simulator using Visual Studio, simply open the generated solution file located at ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<touchgfx_application_root_folder>/simulator/msvs/Application.sln")," using Visual Studio."),(0,o.kt)("p",null,"The PC Simulator can be launched directly from Visual Studio, enabling ",(0,o.kt)("a",f({parentName:"p"},{href:"debugging"}),"code debugging"),"."),(0,o.kt)(r.Z,{mdxType:"Note"},"Before being able to compile with GCC or Visual Studio, Run the ",(0,o.kt)(i.Z,{to:"../designer-user-guide/main-window#generate-code",mdxType:"Link"},"Generate")," command from TouchGFX Designer."),(0,o.kt)("h3",f({},{id:"compiling-for-target-hardware"}),"Compiling for Target Hardware"),(0,o.kt)("p",null,"Compiling projects for STM32 Evaluation Kits is quite simple for ",(0,o.kt)("a",f({parentName:"p"},{href:"../../../introduction/getting-started#application-template--ui-template"}),"Application Template")," based applications.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Each application template contains project files for GCC, CubeIDE, IAR and Keil:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GCC: ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<project_root_folder>/gcc/MakeFile")),(0,o.kt)("li",{parentName:"ul"},"CubeIDE: ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<project_root_folder>/STM32CubeIDE/.cproject")),(0,o.kt)("li",{parentName:"ul"},"IAR: ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<project_root_folder>/EWARM/Project.eww")),(0,o.kt)("li",{parentName:"ul"},"Keil: ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>.uvprojx"))),(0,o.kt)("p",null,"The active tool chain is set from CubeMX and is set to CubeIDE by default. ",(0,o.kt)(a.Z,{mdxType:"InlineNote"},"Please note that all project files are not present at the same time. The generated project file depends on the selected tool chain in CubeMX")),(0,o.kt)("p",null,"TouchGFX includes a MinGW environment, that comes preinstalled with the GNU Embedded Toolchain for Arm and GNU Make, making it easy to execute the included Makefile for the target hardware."),(0,o.kt)("p",null,"The TouchGFX Environment can be launched either from ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<touchgfx_installation_directory>/env/MinGW/msys/1.0/msys.bat"),' or from the shortcut added to the Windows start menu "TouchGFX x.y.z Environment"'),(0,o.kt)("p",null,"After launching the TouchGFX Environment and navigating to the project root folder, the simple command below can be executed to compile the project for the target hardware."),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{}),"make -f gcc/Makefile\n")),(0,o.kt)(r.Z,{mdxType:"Note"},"Before being able to compile with GCC, CubeIDE, IAR or Keil, run the ",(0,o.kt)(i.Z,{to:"../designer-user-guide/main-window#generate-code",mdxType:"Link"},"Generate")," command from TouchGFX Designer."),(0,o.kt)("h2",f({},{id:"flashing-stm32-evaluation-kits"}),"Flashing STM32 Evaluation Kits"),(0,o.kt)("p",null,"Flashing projects to STM32 Evaluation Kits is quite simple with projects based on a premade ",(0,o.kt)("a",f({parentName:"p"},{href:"../../../introduction/getting-started#application-template--ui-template"}),"Application Template"),".",(0,o.kt)("br",null)),(0,o.kt)("p",null,"Each project, when built, produces a binary that can be flashed by\neither ",(0,o.kt)(i.Z,{target:"_blank",to:"https://www.st.com/en/development-tools/stsw-link004.html",mdxType:"Link"},"ST Link Utility")," or ",(0,o.kt)(i.Z,{target:"_blank",to:"https://www.st.com/en/development-tools/stm32cubeprog.html",mdxType:"Link"},"Cube Programmer")),(0,o.kt)("p",null,"Therefore these tools must be installed to proceed with flashing."),(0,o.kt)("p",null,"It is suggested to install these tools to their default location."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"ST Link Utility default install location:",(0,o.kt)("br",null),(0,o.kt)(l.Z,{mdxType:"InlineCode"},"C:/Program Files (x86)/STMicroelectronics/STM32 ST-LINK Utility/ST-LINK Utility")),(0,o.kt)("li",{parentName:"ul"},"Cube Programmer default install location:",(0,o.kt)("br",null),(0,o.kt)(l.Z,{mdxType:"InlineCode"},"C:/Program Files/STMicroelectronics/STM32Cube/STM32CubeProgrammer"))),(0,o.kt)(r.Z,{mdxType:"Note"},"The Application Templates do not provide any flash loaders for flashing directly from within IAR, Keil, CubeIDE or other IDEs."),(0,o.kt)("h3",f({},{id:"gcc--touchgfx-designer"}),"GCC & TouchGFX Designer"),(0,o.kt)("p",null,"The Makefile included with an Application Template located at ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<project_root_folder>/gcc/MakeFile")," has a built-in flash command, as shown below, that uses either ST Link Utility or Cube Programmer (depending on the AT) to flash the STM32 Evaluation Kit. You can of course also use the desktop version of the flash tools to flash the boards with the generated .hex files."),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{}),"make -f gcc/Makefile flash\n")),(0,o.kt)("p",null,"The .hex file is located at ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<project_root_folder>/TouchGFX/build/bin/target.hex")),(0,o.kt)("p",null,"It is also possible to only write to the internal flash and thus skipping the external part. This can reduce the flash time considerably if you have a large set of images. However, you need to be sure that the content for the external flash has not changed since you wrote the external flash last time. If it has, and you do not reflash it, you will see strange behaviour. In this case reflash both the internal and external flash."),(0,o.kt)("pre",null,(0,o.kt)("code",f({parentName:"pre"},{}),"make -f gcc/Makefile intflash\n")),(0,o.kt)("p",null,"The .hex file is located at ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<project_root_folder>/TouchGFX/build/bin/inttarget.hex")),(0,o.kt)("p",null,"The Application Template also provides the configuration for TouchGFX Designer to be able to flash projects via the ",(0,o.kt)("a",f({parentName:"p"},{href:"../designer-user-guide/main-window#run-target"}),"Run Target Command"),". The command used by TouchGFX Designer to flash can be seen and overridden in the ",(0,o.kt)("a",f({parentName:"p"},{href:"../designer-user-guide/config-view#build"}),"Build Section")," of the ",(0,o.kt)("a",f({parentName:"p"},{href:"../designer-user-guide/config-view"}),"Config View")," in TouchGFX Designer."),(0,o.kt)("h3",f({},{id:"cubeide"}),"CubeIDE"),(0,o.kt)("p",null,"Application Templates provide support for flashing project compiled with CubeIDE, by using the .elf file output by CubeIDE, with the Cube Programmer."),(0,o.kt)("p",null,"The .elf file is located at ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<project_root_folder>/STM32CubeIDE/Debug/<STM32_evaluation_kit_name>.elf")),(0,o.kt)(a.Z,{mdxType:"InlineNote"},"e.g. C:/TouchGFXProjects/MyApplication/STM32CubeIDE/Debug/STM32F746G_DISCO.elf"),(0,o.kt)("h3",f({},{id:"iar"}),"IAR"),(0,o.kt)("p",null,"The Application Templates provide support for flashing project compiled with IAR, by using the .hex file output by IAR, with the Cube Programmer."),(0,o.kt)("p",null,"The .hex file is located at ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<project_root_folder>/EWARM/<STM32_evaluation_kit_name>/Exe/<STM32_evaluation_kit_name>.hex")),(0,o.kt)(a.Z,{mdxType:"InlineNote"},"e.g. C:/TouchGFXProjects/MyApplication/MDK-ARM/STM32F469I-DISCO/STM32F469I-DISCO.hex"),(0,o.kt)("h3",f({},{id:"keil"}),"Keil"),(0,o.kt)("p",null,"The Application Templates provide support for flashing project compiled with Keil, by using the .hex file output by Keil, with the Cube Programmer."),(0,o.kt)("p",null,"The .hex file is located at ",(0,o.kt)(l.Z,{mdxType:"InlineCode"},"<project_root_folder>/MDK-ARM/<STM32_evaluation_kit_name>/<STM32_evaluation_kit_name>.hex")),(0,o.kt)(a.Z,{mdxType:"InlineNote"},"e.g. C:/TouchGFXProjects/MyApplication/MDK-ARM/STM32F469I-DISCO/STM32F469I-DISCO.hex"),(0,o.kt)("h2",f({},{id:"flashing-custom-hardware"}),"Flashing Custom Hardware"),(0,o.kt)("p",null,"If instead what needs to be flashed is custom hardware, and not a predefined hardware setup like an STM32 Evaluation Kit, you can still use STM32CubeProgrammer. STM32CubeProgrammer does not necessarily come with a flash loading mechanism for your specific external memory. It is however possible to create a custom flash loader. Read the ",(0,o.kt)(i.Z,{to:"https://www.st.com/resource/en/user_manual/dm00403500-stm32cubeprogrammer-software-description-stmicroelectronics.pdf",mdxType:"Link"},"user manual on developing customized loaders for your external memory")," to find more info."))}w.isMDXComponent=!0}}]);