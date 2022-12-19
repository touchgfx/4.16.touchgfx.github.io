"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5487],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),s=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?o.createElement(h,l(l({ref:t},c),{},{components:n})):o.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[d]="string"==typeof e?e:r,l[1]=a;for(var s=2;s<i;s++)l[s]=n[s];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},44035:function(e,t,n){var o=n(67294),r=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,l=(0,r.Z)(e.imageSource);return t?o.createElement("div",{class:"figure noshadow"},o.createElement("a",{href:l,target:"_blank"},o.createElement("img",{width:n,height:i,src:l})),o.createElement("p",null,e.children)):o.createElement("div",{class:"figure"},o.createElement("a",{href:l,target:"_blank"},o.createElement("img",{width:n,height:i,src:l})),o.createElement("p",null,e.children))}},82985:function(e,t,n){var o=n(67294);class r extends o.Component{render(){return o.createElement("code",{class:"shortcut"},this.props.children)}}t.Z=r},1263:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return b},frontMatter:function(){return h},metadata:function(){return g},toc:function(){return y}});var o=n(3905),r=n(44035),i=n(82985),l=Object.defineProperty,a=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&p(e,n,t[n]);return e};const h={id:"simulator",title:"Simulator"},f=void 0,g={unversionedId:"development/ui-development/working-with-touchgfx/simulator",id:"development/ui-development/working-with-touchgfx/simulator",title:"Simulator",description:"",source:"@site/i18n/ja/docusaurus-plugin-content-docs/current/development/ui-development/working-with-touchgfx/simulator.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/simulator",permalink:"/4.16/ja/docs/development/ui-development/working-with-touchgfx/simulator",draft:!1,tags:[],version:"current",frontMatter:{id:"simulator",title:"Simulator"},sidebar:"docs",previous:{title:"Widgets and Containers",permalink:"/4.16/ja/docs/development/ui-development/working-with-touchgfx/widgets-and-containers"},next:{title:"Compiling & Flashing",permalink:"/4.16/ja/docs/development/ui-development/working-with-touchgfx/compiling-and-flashing"}},k={},y=[{value:"How To Run",id:"how-to-run",level:2},{value:"Using TouchGFX Designer",id:"using-touchgfx-designer",level:3},{value:"Using TouchGFX Environment",id:"using-touchgfx-environment",level:3},{value:"Simulator Features",id:"simulator-features",level:2},{value:"Simulator Only User Code",id:"simulator-only-user-code",level:2}],v={toc:y};function b(e){var t,n=e,{components:l}=n,p=((e,t)=>{var n={};for(var o in e)c.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&s)for(var o of s(e))t.indexOf(o)<0&&d.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=m(m({},v),p),a(t,u({components:l,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"Building a TouchGFX UI often involves a lot of tweeking of the graphics details to match the specification of the UI."),(0,o.kt)("p",null,"To speed up the development process it is important to have a fast turnaround time when trying out and debugging your application. Flashing a board can often take quite some time so doing this each time you have made a small change to your application will really slow down the development. To alleviate this, the TouchGFX PC simulator is a great addition to your development tools."),(0,o.kt)("p",null,"You simply compile your application for your PC and run the application there. The code executed is exactly the same as on target hardware except for the Board Bring Up code and Abstraction Layer which are made for the PC instead of your board. This means that you can test things like placement of widgets, interactions, animations, state machines and so on just as precise as on target hardware. You can even ",(0,o.kt)("a",m({parentName:"p"},{href:"debugging"}),"debug")," your code using IDEs like Visual Studio if you like. Of course things like performance analysis and interactions with real backend systems must be done on your board."),(0,o.kt)(r.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/simulator-example.gif",mdxType:"Figure"},"Simulator example"),(0,o.kt)("h2",m({},{id:"how-to-run"}),"How To Run"),(0,o.kt)("h3",m({},{id:"using-touchgfx-designer"}),"Using TouchGFX Designer"),(0,o.kt)("p",null,'To launch the simulator from within TouchGFX Designer, simply press the "Run Simulator" button in the top right corner or press ',(0,o.kt)(i.Z,{mdxType:"Shortcut"},"F5")," on your keyboard."),(0,o.kt)(r.Z,{imageSource:"/img/development/ui-development/working-with-touchgfx/simulator/run-simulator-designer.webp",mdxType:"Figure"},"Launching the simulator from TouchGFX Designer"),(0,o.kt)("h3",m({},{id:"using-touchgfx-environment"}),"Using TouchGFX Environment"),(0,o.kt)("p",null,"To launch the simulator using the TouchGFX environment, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Open the TouchGFX Environment"),(0,o.kt)("li",{parentName:"ol"},"Navigate to the location of your TouchGFX application"),(0,o.kt)("li",{parentName:"ol"},"Run the command ",(0,o.kt)("inlineCode",{parentName:"li"},"make -f simulator/gcc/Makefile -j6")," to compile the simulator"),(0,o.kt)("li",{parentName:"ol"},"Run the command ",(0,o.kt)("inlineCode",{parentName:"li"},"./build/bin/simulator.exe")," to launch the simulator")),(0,o.kt)("p",null,"Run steps 3 and 4 whenever you have made a change to your TouchGFX application."),(0,o.kt)("h2",m({},{id:"simulator-features"}),"Simulator Features"),(0,o.kt)("p",null,"Apart from capturing mouse input, the TouchGFX simulator also includes other useful features, listed below:"),(0,o.kt)("table",{"spaces-before":"0"},(0,o.kt)("tr",null,(0,o.kt)("th",null,"Shortcut"),(0,o.kt)("th",null,"Feature")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)(i.Z,{mdxType:"Shortcut"},"F1")),(0,o.kt)("td",null,"Enables/disables debug info.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)(i.Z,{mdxType:"Shortcut"},"F2")),(0,o.kt)("td",null,"Enables/disables highlighting invalidated area.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)(i.Z,{mdxType:"Shortcut"},"F3")),(0,o.kt)("td",null,"Takes a screenshot and places the image under the ",(0,o.kt)("code",null,"screenshots")," folder.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)(i.Z,{mdxType:"Shortcut"},"CTRL + F3")),(0,o.kt)("td",null,"Takes screenshots of the next 50 frames and places the images under the ",(0,o.kt)("code",null,"screenshots")," folder.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)(i.Z,{mdxType:"Shortcut"},"SHIFT + F3")),(0,o.kt)("td",null,"Takes a screenshot and places it in your clipboard.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)(i.Z,{mdxType:"Shortcut"},"F4")),(0,o.kt)("td",null,"If a simulator skin is used - enables/disables the simulator skin.",(0,o.kt)("br",null),"If a simulator skin is ",(0,o.kt)("i",null,"not")," used - enables/disables window border.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)(i.Z,{mdxType:"Shortcut"},"F9")),(0,o.kt)("td",null,"Pauses the simulator by preventing ticks to be sent to the application. Pressing F9 again will resume normal execution.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)(i.Z,{mdxType:"Shortcut"},"F10")),(0,o.kt)("td",null,'While the simulator is paused (after pressing F9) it is possible to send a single tick to the application by pressing F10 thereby "single step" the application.')),(0,o.kt)("tr",null,(0,o.kt)("td",null,(0,o.kt)(i.Z,{mdxType:"Shortcut"},"ESC")),(0,o.kt)("td",null,"Close the simulator."))),(0,o.kt)("h2",m({},{id:"simulator-only-user-code"}),"Simulator Only User Code"),(0,o.kt)("p",null,"If you have some code that should only run when using TouchGFX simulator, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"#IFDEF Simulator")," in your C++ code:"),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),"#IFDEF Simulator\n  // Your simulator specific user code here\n#ENDIF\n")),(0,o.kt)("p",null,"If you want to output a debug text to the console you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx_printf")," function. This is a printf like function that will only be included when building simulator code and thus will not interfere when running on target hardware. Therefore there is no need to use ",(0,o.kt)("inlineCode",{parentName:"p"},"#IFDEF Simulator")," in this case."),(0,o.kt)("pre",null,(0,o.kt)("code",m({parentName:"pre"},{className:"language-cpp"}),'int i = 0;\ntouchgfx_printf("Application is running through simulator! \\n");\ntouchgfx_printf("Print our value for integer i = %i \\n", i);\n')))}b.isMDXComponent=!0}}]);