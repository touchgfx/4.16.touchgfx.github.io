"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[2568],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(n),h=a,m=u["".concat(c,".").concat(h)]||u[h]||p[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},22425:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("div",{class:"code-header"},r.createElement("div",null,r.createElement("h5",null,this.props.children)))}}t.Z=a},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,o=e.height,i=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:i,target:"_blank"},r.createElement("img",{width:n,height:o,src:i})),r.createElement("p",null,e.children))}},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},31217:function(e,t,n){var r=n(67294);class a extends r.Component{render(){return r.createElement("code",null,this.props.children)}}t.Z=a},93054:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}t.Z=i},37793:function(e,t,n){var r=n(67294),a=n(88678);const o=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}));class i extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-tip)",header:"Tip",type:"tip",icon:o},this.props.children)}}t.Z=i},18524:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return x},frontMatter:function(){return y},metadata:function(){return v},toc:function(){return k}});var r=n(3905),a=n(44035),o=n(93054),i=n(37793),l=n(22425),c=n(31217),s=Object.defineProperty,d=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))h.call(t,n)&&g(e,n,t[n]);if(p)for(var n of p(t))m.call(t,n)&&g(e,n,t[n]);return e};const y={id:"code-structure",title:"Code Structure"},b=void 0,v={unversionedId:"development/ui-development/software-architecture/code-structure",id:"development/ui-development/software-architecture/code-structure",title:"Code Structure",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/software-architecture/code-structure.mdx",sourceDirName:"development/ui-development/software-architecture",slug:"/development/ui-development/software-architecture/code-structure",permalink:"/4.16/zh-CN/docs/development/ui-development/software-architecture/code-structure",draft:!1,tags:[],version:"current",frontMatter:{id:"code-structure",title:"Code Structure"},sidebar:"docs",previous:{title:"The Screen Concept",permalink:"/4.16/zh-CN/docs/development/ui-development/software-architecture/screen-definition-and-mvp"},next:{title:"Using IDEs with TouchGFX",permalink:"/4.16/zh-CN/docs/development/ui-development/working-with-touchgfx/using-ides-with-touchgfx"}},w={},k=[{value:"Generated Code vs. User Code",id:"generated-code-vs-user-code",level:2},{value:"Files Generated by TouchGFX Designer",id:"files-generated-by-touchgfx-designer",level:2},{value:"Example",id:"example",level:2},{value:"TouchGFX Designer View",id:"touchgfx-designer-view",level:3},{value:"Layers",id:"layers",level:3},{value:"Code",id:"code",level:3}],C={toc:k};function x(e){var t,n=e,{components:s}=n,g=((e,t)=>{var n={};for(var r in e)h.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=f(f({},C),g),d(t,u({components:s,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"This section explains the structure of a TouchGFX project - from the code generated by TouchGFX Designer to the extending code written by the user."),(0,r.kt)("h2",f({},{id:"generated-code-vs-user-code"}),"Generated Code vs. User Code"),(0,r.kt)("p",null,"The code generated by TouchGFX Designer will be completely separate from the code written by the user. In fact, the generated code is placed in the folder ",(0,r.kt)("inlineCode",{parentName:"p"},"generated/gui_generated"),", whereas the handwritten code is placed in the ",(0,r.kt)("inlineCode",{parentName:"p"},"gui")," folder."),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"gui_generated")," code serves as base classes for user code classes. The base classes contain all the setup code configured in TouchGFX Designer. The following class diagram shows the relationship of the classes:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/code-levels.webp",mdxType:"Figure"},"Class hierarchy of engine, generated and user classes"),(0,r.kt)("p",null,"As shown above, TouchGFX Designer applications consist of 3 different layers of code:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Engine"),": these classes are the standard classes provided by TouchGFX. These act as base classes for the generated classes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"Generated"),": these classes and corresponding files will be regenerated whenever TouchGFX Designer generates code. Therefore, these classes and files should not be edited manually, as any manual changes will be overwritten on the next run of the code generator. These classes are base classes for the user classes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"User"),": these classes are intended for handwritten code. The user is free to put any code in this layer. The user classes will be generated if not present, but will never be altered by TouchGFX Designer. They ",(0,r.kt)("em",{parentName:"li"},"belong to the user"),".")),(0,r.kt)(o.Z,{mdxType:"Note"},"The architecture of the applications generated by TouchGFX Designer is open in the sense that there should be no limits to what you can create. If something (e.g. a widget, animation, or effect) is not supported by TouchGFX Designer, you can add them in user classes. The code generated by TouchGFX Designer is by design not allowed to restrict you in your way of doing TouchGFX applications."),(0,r.kt)("h2",f({},{id:"files-generated-by-touchgfx-designer"}),"Files Generated by TouchGFX Designer"),(0,r.kt)("p",null,"As a rule, TouchGFX Designer will ",(0,r.kt)("em",{parentName:"p"},"only")," regenerate files within the ",(0,r.kt)("inlineCode",{parentName:"p"},"generated")," folder in a TouchGFX project and it is therefore important that you do not manually edit these, as they will be overwritten. However, TouchGFX Designer can also generate missing files needed for compilation, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"application.config"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"simulator/main.cpp")," and skin images located in ",(0,r.kt)("inlineCode",{parentName:"p"},"assets/images/__designer"),". In actuality, TouchGFX Designer only needs the following to be able to generate, compile and run a project:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},".touchgfx")," file describing the project"),(0,r.kt)("li",{parentName:"ul"},"User code (if any) located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"gui")," folder"),(0,r.kt)("li",{parentName:"ul"},"User images (if any) located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"assets/images")," folder"),(0,r.kt)("li",{parentName:"ul"},"Texts (if any) located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"assets/texts/texts.xlsx")," file"),(0,r.kt)("li",{parentName:"ul"},"Fonts (if any) located in the ",(0,r.kt)("inlineCode",{parentName:"li"},"assets/fonts")," folder")),(0,r.kt)(i.Z,{mdxType:"Tip"},"When using version control such as Git, this means that only the files listed above actually need to be commited to a repository. The rest can be generated by TouchGFX Designer itself."),(0,r.kt)("h2",f({},{id:"example"}),"Example"),(0,r.kt)("p",null,"A simple example of an application having both generated and user code will be given below. This should illustrate the aspects above in more detail."),(0,r.kt)("h3",f({},{id:"touchgfx-designer-view"}),"TouchGFX Designer View"),(0,r.kt)("p",null,"The following example has just one screen. The screen ",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreen")," consists of a ",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box")," ",(0,r.kt)("inlineCode",{parentName:"p"},"box1")," and a ",(0,r.kt)("a",f({parentName:"p"},{href:"../ui-components/buttons/button"}),"Button")," ",(0,r.kt)("inlineCode",{parentName:"p"},"button1"),". We have set up an interaction to call the virtual function ",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor()")," when ",(0,r.kt)("inlineCode",{parentName:"p"},"button1")," is clicked."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/designer-application.webp",mdxType:"Figure"},"TouchGFX Designer application"),(0,r.kt)("p",null,"Whenever we press the button we would like to change the color of the background box to a new random color. To demonstrate how to write your own custom code, we will implement this behavior in user code."),(0,r.kt)("h3",f({},{id:"layers"}),"Layers"),(0,r.kt)("p",null,"The different classes involved in this example can be seen below:"),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/code-levels-detailed.webp",mdxType:"Figure"},"Example classes"),(0,r.kt)("p",null,"We see that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenViewBase"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplicationBase")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeapBase")," are in the generated space, implying that:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"They will be regenerated whenever a change is made in TouchGFX Designer"),(0,r.kt)("li",{parentName:"ul"},"The user should not manually edit these classes"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenView"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenPresenter"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplication")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeap")," are created in the user code space, meaning that:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"These will not be regenerated when changes are made in TouchGFX Designer"),(0,r.kt)("li",{parentName:"ul"},"The user is free to add custom code here"))),(0,r.kt)("li",{parentName:"ul"},"All the setup of ",(0,r.kt)("inlineCode",{parentName:"li"},"box1")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"button1")," is done in the generated view base class ",(0,r.kt)("inlineCode",{parentName:"li"},"MyScreenViewBase"),"."),(0,r.kt)("li",{parentName:"ul"},"All the functions for transitioning between screens are in the generated application base class ",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendApplicationBase"),"."),(0,r.kt)("li",{parentName:"ul"},"All the book keeping, making sure that the right amount of memory is allocated, is located in the generated heap base class ",(0,r.kt)("inlineCode",{parentName:"li"},"FrontendHeapBase"),".")),(0,r.kt)("p",null,"The user is free to edit the user code classes. For instance you could add more widgets. For now we will just implement the ",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor")," function to actually change the color of ",(0,r.kt)("inlineCode",{parentName:"p"},"box1"),"."),(0,r.kt)("h3",f({},{id:"code"}),"Code"),(0,r.kt)("p",null,"Looking at the view base code, we see the setup of the box and button generated by TouchGFX Designer. We also see the setup of and the call to the virtual function ",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"buttonCallbackHandler"),", but at the moment this function does not do anything:"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{27-37}","{27-37}":!0}),'/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>\n#include <touchgfx/Color.hpp>\n#include "BitmapDatabase.hpp"\n\nMyScreenViewBase::MyScreenViewBase() :\n    buttonCallback(this, &MyScreenViewBase::buttonCallbackHandler)\n{\n    box1.setPosition(0, 0, 800, 480);\n    box1.setColor(touchgfx::Color::getColorFrom24BitRGB(255, 255, 255));\n\n    button1.setXY(155, 106);\n    button1.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n    button1.setAction(buttonCallback);\n\n    add(box1);\n    add(button1);\n}\n\nvoid MyScreenViewBase::setupScreen()\n{\n\n}\n\nvoid MyScreenViewBase::buttonCallbackHandler(const touchgfx::AbstractButton& src)\n{\n    if (&src == &button1)\n    {\n        //Interaction1\n        //When button1 clicked call virtual function\n        //Call setRandomColor\n        setRandomColor();\n    }\n}\n')),(0,r.kt)("p",null,"Looking at the header file for the view base class, we see the declaration of ",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor")," and an instruction to override and implement the function in user code:"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenViewBase.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{23-26}","{23-26}":!0}),"/*********************************************************************************/\n/********** THIS FILE IS GENERATED BY TOUCHGFX DESIGNER, DO NOT MODIFY ***********/\n/*********************************************************************************/\n#ifndef MYSCREENVIEWBASE_HPP\n#define MYSCREENVIEWBASE_HPP\n\n#include <gui/common/FrontendApplication.hpp>\n#include <mvp/View.hpp>\n#include <gui/myscreen_screen/MyScreenPresenter.hpp>\n#include <touchgfx/widgets/Box.hpp>\n#include <touchgfx/widgets/Button.hpp>\n\nclass MyScreenViewBase : public touchgfx::View<MyScreenPresenter>\n{\npublic:\n    MyScreenViewBase();\n    virtual ~MyScreenViewBase() {}\n    virtual void setupScreen();\n\n    /*\n     * Virtual Action Handlers\n     */\n    virtual void setRandomColor()\n    {\n        // Override and implement this function in MyScreen\n    }\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box box1;\n    touchgfx::Button button1;\n\nprivate:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::Callback<MyScreenViewBase, const touchgfx::AbstractButton&> buttonCallback;\n\n    /*\n     * Callback Handler Declarations\n     */\n    void buttonCallbackHandler(const touchgfx::AbstractButton& src);\n\n};\n\n#endif // MYSCREENVIEWBASE_HPP\n")),(0,r.kt)("p",null,"So let's do just that. Navigate to the user code header file ",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreenView.hpp")," and override the function:"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/generated/gui_generated/src/my_screen/MyScreenView.hpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{14}","{14}":!0}),"#ifndef MYSCREENVIEW_HPP\n#define MYSCREENVIEW_HPP\n\n#include <gui_generated/myscreen_screen/MyScreenViewBase.hpp>\n#include <gui/myscreen_screen/MyScreenPresenter.hpp>\n\nclass MyScreenView : public MyScreenViewBase\n{\npublic:\n    MyScreenView();\n    virtual ~MyScreenView() {}\n    virtual void setupScreen();\n    virtual void tearDownScreen();\n    virtual void setRandomColor();\nprotected:\n};\n\n#endif // MYSCREENVIEW_HPP\n")),(0,r.kt)("p",null,"Then we need to implement the actual behavior of ",(0,r.kt)("inlineCode",{parentName:"p"},"setRandomColor")," in the cpp file for ",(0,r.kt)("inlineCode",{parentName:"p"},"MyScreenView"),":"),(0,r.kt)(l.Z,{mdxType:"CodeHeader"},"MyApplication/gui/src/my_screen/MyScreenView.cpp"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-cpp",metastring:"{19-23}","{19-23}":!0}),"#include <gui/myscreen_screen/MyScreenView.hpp>\n#include <touchgfx/Color.hpp>\n#include <stdlib.h>\n\nMyScreenView::MyScreenView()\n{\n\n}\n\nvoid MyScreenView::setupScreen()\n{\n    MyScreenViewBase::setupScreen();\n}\n\nvoid MyScreenView::tearDownScreen()\n{\n    MyScreenViewBase::tearDownScreen();\n}\n\nvoid MyScreenView::setRandomColor()\n{\n    box1.setColor(touchgfx::Color::getColorFrom24BitRGB(rand()&0xff, rand()&0xff, rand()&0xff));\n    box1.invalidate();\n}\n")),(0,r.kt)("p",null,"Running the simulator now shows that we have succeeded in creating a simple application utilizing both generated and user code - the background box now changes to a random color everytime you click the button."),(0,r.kt)(a.Z,{imageSource:"/img/development/ui-development/software-architecture/code-structure/simulator-random-color.gif",mdxType:"Figure"},"Simulator showcasing the application"),(0,r.kt)(i.Z,{mdxType:"Tip"},"Of course you do not need to use any features of the code generated by TouchGFX Designer but it will potentially save a lot of time. It is possible to do TouchGFX applications the old-school way by just adding the necessary files by hand.",(0,r.kt)("br",null),(0,r.kt)("br",null),"It is also possible to mix and match. For example, you can have screens that are not defined within the TouchGFX Designer project. You can add the ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"gotoXYZ")," functions to the ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"FrontendApplication")," class and add the views, presenters and transitions you need for your screen to the ",(0,r.kt)(c.Z,{mdxType:"InlineCode"},"FrontendHeap"),"."))}x.isMDXComponent=!0}}]);