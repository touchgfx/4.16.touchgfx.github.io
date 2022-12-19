"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[4993],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var o=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(n),p=i,m=d["".concat(s,".").concat(p)]||d[p]||h[p]||a;return n?o.createElement(m,r(r({ref:t},u),{},{components:n})):o.createElement(m,r({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[d]="string"==typeof e?e:i,r[1]=c;for(var l=2;l<a;l++)r[l]=n[l];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},22425:function(e,t,n){var o=n(67294);class i extends o.Component{render(){return o.createElement("div",{class:"code-header"},o.createElement("div",null,o.createElement("h5",null,this.props.children)))}}t.Z=i},44035:function(e,t,n){var o=n(67294),i=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,a=e.height,r=(0,i.Z)(e.imageSource);return t?o.createElement("div",{class:"figure noshadow"},o.createElement("a",{href:r,target:"_blank"},o.createElement("img",{width:n,height:a,src:r})),o.createElement("p",null,e.children)):o.createElement("div",{class:"figure"},o.createElement("a",{href:r,target:"_blank"},o.createElement("img",{width:n,height:a,src:r})),o.createElement("p",null,e.children))}},29415:function(e,t,n){var o=n(67294),i=n(88678);const a=o.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},o.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class r extends o.Component{render(){return o.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:a},this.props.children)}}t.Z=r},88678:function(e,t,n){var o=n(67294);class i extends o.Component{render(){const e=`highlight highlight-${this.props.type}`;return o.createElement("div",{class:e},o.createElement("div",{class:"highlight-heading"},o.createElement("h5",null,o.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),o.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=i},47199:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return M},frontMatter:function(){return v},metadata:function(){return k},toc:function(){return x}});var o=n(3905),i=n(67294);class a extends i.Component{render(){var e=`https://www.youtube.com/embed/${function(e){const t=/https:\/\/www\.youtube\.com\/watch\?v=(\w+)/;if(t.test(e))return t.exec(e)[1];const n=/https:\/\/youtu\.be\/(\w+)/;if(n.test(e))return n.exec(e)[1];return e}(this.props.url)}`;return i.createElement("div",{class:"videoWrapper"},i.createElement("iframe",{src:e,frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}))}}var r=a,c=n(22425),s=n(29415),l=n(44035),u=n(39130),d=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,C=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))g.call(t,n)&&C(e,n,t[n]);if(m)for(var n of m(t))f.call(t,n)&&C(e,n,t[n]);return e};const v={id:"custom-containers",title:"Custom Containers"},b=void 0,k={unversionedId:"development/ui-development/touchgfx-engine-features/custom-containers",id:"development/ui-development/touchgfx-engine-features/custom-containers",title:"Custom Containers",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/custom-containers.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/custom-containers",permalink:"/4.16/ko/docs/development/ui-development/touchgfx-engine-features/custom-containers",draft:!1,tags:[],version:"current",frontMatter:{id:"custom-containers",title:"Custom Containers"},sidebar:"docs",previous:{title:"Custom Triggers and Actions",permalink:"/4.16/ko/docs/development/ui-development/touchgfx-engine-features/custom-triggers-and-actions"},next:{title:"Caching Bitmaps",permalink:"/4.16/ko/docs/development/ui-development/touchgfx-engine-features/caching-bitmaps"}},w={},x=[{value:"In TouchGFX Designer",id:"in-touchgfx-designer",level:2},{value:"Composite Custom Containers",id:"composite-custom-containers",level:3},{value:"Custom Triggers and Actions",id:"custom-triggers-and-actions",level:3},{value:"In Code",id:"in-code",level:2},{value:"Create a class that extends\xa0the touchgfx::Container\xa0class",id:"create-a-class-that-extends-the-touchgfxcontainer-class",level:3},{value:"Declaring all children of the container as member variables",id:"declaring-all-children-of-the-container-as-member-variables",level:3},{value:"Setting the width and height of the container",id:"setting-the-width-and-height-of-the-container",level:3},{value:"Setting up each of the children",id:"setting-up-each-of-the-children",level:3},{value:"Adding each of the children to the hierarchy, in the right order",id:"adding-each-of-the-children-to-the-hierarchy-in-the-right-order",level:3},{value:"Implementing the desired behaviour via methods and callbacks",id:"implementing-the-desired-behaviour-via-methods-and-callbacks",level:3}],B={toc:x};function M(e){var t,n=e,{components:i}=n,a=((e,t)=>{var n={};for(var o in e)g.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&m)for(var o of m(e))t.indexOf(o)<0&&f.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=y(y({},B),a),h(t,p({components:i,mdxType:"MDXLayout"}))),(0,o.kt)("p",null,"When creating applications you might need a widget that is not\xa0found in\xa0the standard widget set included in TouchGFX."),(0,o.kt)("p",null,"One way of creating your own widgets is using custom containers. A custom container is an object that contains other existing widgets and combines the visual appearance and behaviours of these widgets. It is not dissimilar to the classic composite design pattern and we also refer to the contained widgets as the children of the container."),(0,o.kt)("p",null,"Drawing\xa0performance\xa0of custom containers will in general be very high. It will utilize the underlying drawing mechanisms of TouchGFX and will determine which parts of a container and the children needs to be redrawn automatically. This means\xa0that you do not need to worry about\xa0drawing performance when using containers."),(0,o.kt)("p",null,"However, there can be times where you need to reduce the footprint of a widget and in these scenarios, the more advanced approach called ",(0,o.kt)("a",y({parentName:"p"},{href:"custom-widgets"}),"Custom Widget")," might be preferable."),(0,o.kt)("h2",y({},{id:"in-touchgfx-designer"}),"In TouchGFX Designer"),(0,o.kt)("p",null,"If you want to create and use custom containers in TouchGFX Designer,\xa0we give a general introduction to how you can use them in your projects in the video below:"),(0,o.kt)(r,{url:"https://youtu.be/nX1nCAA4pyA",mdxType:"YouTube"}),(0,o.kt)("h3",y({},{id:"composite-custom-containers"}),"Composite Custom Containers"),(0,o.kt)("p",null,"It is possible to create a custom container that is composed of other custom containers. This can be a powerful way to construct components made up of smaller components. You can do this by adding instances of an already defined custom container found in the Widgets tab:"),(0,o.kt)(l.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-containers/composite-custom-containers-v4.15.webp",mdxType:"Figure"},"Inserting instances of custom containers"),(0,o.kt)("p",null,"Note that TouchGFX Designer will help you to avoid inserting instances that would result in a circular reference such as adding a custom container instance to the definition of itself:"),(0,o.kt)(l.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/custom-containers/circular-reference.webp",mdxType:"Figure"},"Potential circular reference disables the ability to insert an instance"),(0,o.kt)("h3",y({},{id:"custom-triggers-and-actions"}),"Custom Triggers and Actions"),(0,o.kt)("p",null,"One of the powerful aspects to a custom container is the ability to define custom triggers (callbacks) and custom actions (methods). This means that you can define integral behaviour to your custom container so it becomes more than just a reusable collection of widgets and enables communication with the rest of your application."),(0,o.kt)(s.Z,{mdxType:"FurtherReading"},"Read more about this functionality in the ",(0,o.kt)(u.Z,{to:"custom-triggers-and-actions",mdxType:"Link"},"Custom Triggers and Actions")," section."),(0,o.kt)("h2",y({},{id:"in-code"}),"In Code"),(0,o.kt)("p",null,"In this section we will create a custom container in code. The steps are as follows:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Create a class that extends\xa0the touchgfx::Container\xa0class"),(0,o.kt)("li",{parentName:"ul"},"Declaring all children of the container as member variables"),(0,o.kt)("li",{parentName:"ul"},"Setting the width and height of the container"),(0,o.kt)("li",{parentName:"ul"},"Setting up each of the children"),(0,o.kt)("li",{parentName:"ul"},"Adding each of the children to the hierarchy, in the right order"),(0,o.kt)("li",{parentName:"ul"},"Implementing the desired behaviour via methods and callbacks")),(0,o.kt)("p",null,"We will start from scratch and build upon the code until we end up with a simple fully functional custom container."),(0,o.kt)("h3",y({},{id:"create-a-class-that-extends-the-touchgfxcontainer-class"}),"Create a class that extends\xa0the touchgfx::Container\xa0class"),(0,o.kt)("p",null,"Start by creating a ",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.hpp")," header file with the code below. Use C++ inheritance to gain access to the methods and members of ",(0,o.kt)("inlineCode",{parentName:"p"},"touchgfx::Container")," (remember to include the header file for ",(0,o.kt)("inlineCode",{parentName:"p"},"Container.hpp"),"):"),(0,o.kt)(c.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{2,4}","{2,4}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainer();\n    virtual ~MyCustomContainer() {}\n    virtual void initialize();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\nprivate:\n\n};\n")),(0,o.kt)("h3",y({},{id:"declaring-all-children-of-the-container-as-member-variables"}),"Declaring all children of the container as member variables"),(0,o.kt)("p",null,"Declare which widgets are going to compose your custom container in the header file. In this example we will just add a box ",(0,o.kt)("inlineCode",{parentName:"p"},"myBox")," and a button ",(0,o.kt)("inlineCode",{parentName:"p"},"myButton"),"."),(0,o.kt)(c.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{19-20}","{19-20}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainer();\n    virtual ~MyCustomContainer() {}\n    virtual void initialize();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box myBox;\n    touchgfx::Button myButton;\n\nprivate:\n\n};\n")),(0,o.kt)("h3",y({},{id:"setting-the-width-and-height-of-the-container"}),"Setting the width and height of the container"),(0,o.kt)("p",null,"Create a cpp file ",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.cpp")," which includes the header file we just created. Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"setWidth()")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"setHeight()")," methods in the constructor to set whatever size you want for the custom container:"),(0,o.kt)(c.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{1,5-6}","{1,5-6}":!0}),"#include <gui/include/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",y({},{id:"setting-up-each-of-the-children"}),"Setting up each of the children"),(0,o.kt)("p",null,"Now we need to set up the properties for each widget in the constructor:"),(0,o.kt)(c.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{8-12}","{8-12}":!0}),"#include <gui/include/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFrom24BitRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",y({},{id:"adding-each-of-the-children-to-the-hierarchy-in-the-right-order"}),"Adding each of the children to the hierarchy, in the right order"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"add()")," method in the constructor to add the widgets as children of the custom container:"),(0,o.kt)(c.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{14-15}","{14-15}":!0}),"#include <gui/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFrom24BitRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n\n    add(myBox);\n    add(myButton);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n")),(0,o.kt)("h3",y({},{id:"implementing-the-desired-behaviour-via-methods-and-callbacks"}),"Implementing the desired behaviour via methods and callbacks"),(0,o.kt)("p",null,"To add some behaviour to our custom container, we can define some methods and callbacks in ",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.hpp"),". In this example we define a method ",(0,o.kt)("inlineCode",{parentName:"p"},"doSomething()")," whose sole purpose is to emit the callback ",(0,o.kt)("inlineCode",{parentName:"p"},"somethingHappened"),":"),(0,o.kt)(c.Z,{mdxType:"CodeHeader"},"MyCustomContainer.hpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{14-17,22,32-38,51}","{14-17,22,32-38,51}":!0}),"#include <gui/common/FrontendApplication.hpp>\n#include <touchgfx/containers/Container.hpp>\n\nclass MyCustomContainer : public touchgfx::Container\n{\npublic:\n    MyCustomContainerBase();\n    virtual ~MyCustomContainerBase() {}\n    virtual void initialize();\n\n    /*\n     * Callback Setters\n     */\n    void setSomethingHappenedCallback(touchgfx::GenericCallback<>& callback)\n    {\n        somethingHappenedCallback = &callback;\n    }\n\n    /*\n     * Methods\n     */\n    virtual void doSomething();\n\nprotected:\n    FrontendApplication& application() {\n        return *static_cast<FrontendApplication*>(touchgfx::Application::getInstance());\n    }\n\n    /*\n     * Callback Emitters\n     */\n    virtual void emitSomethingHappenedCallback()\n    {\n        if (somethingHappenedCallback && somethingHappenedCallback->isValid())\n        {\n            somethingHappenedCallback->execute();\n        }\n    }\n\n    /*\n     * Member Declarations\n     */\n    touchgfx::Box myBox;\n    touchgfx::Button myButton;\n\nprivate:\n\n    /*\n     * Callback Declarations\n     */\n    touchgfx::GenericCallback<>* somethingHappenedCallback;\n\n};\n")),(0,o.kt)("p",null,"Then to add the behaviour to our method and callback, implement them in the ",(0,o.kt)("inlineCode",{parentName:"p"},"MyCustomContainer.cpp")," file. For this simple surface level example, we will simply emit the ",(0,o.kt)("inlineCode",{parentName:"p"},"somethingHappened")," callback, but you can customize this as you want:"),(0,o.kt)(c.Z,{mdxType:"CodeHeader"},"MyCustomContainer.cpp"),(0,o.kt)("pre",null,(0,o.kt)("code",y({parentName:"pre"},{className:"language-cpp",metastring:"{23-26}","{23-26}":!0}),"#include <gui/containers/MyCustomContainer.hpp>\n\nMyCustomContainer::MyCustomContainer()\n{\n    setWidth(250);\n    setHeight(250);\n\n    myBox.setPosition(0, 0, 250, 250);\n    myBox.setColor(touchgfx::Color::getColorFrom24BitRGB(255, 255, 255));\n\n    myButton.setXY(40, 95);\n    myButton.setBitmaps(touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_ID), touchgfx::Bitmap(BITMAP_BLUE_BUTTONS_ROUND_EDGE_SMALL_PRESSED_ID));\n\n    add(myBox);\n    add(myButton);\n}\n\nvoid MyCustomContainer::initialize()\n{\n\n}\n\nvoid MyCustomContainer::doSomething()\n{\n    MyCustomContainer::emitSomethingHappenedCallback();\n}\n")),(0,o.kt)(s.Z,{mdxType:"FurtherReading"},"For a more detailed example on how to create and use a custom container, refer to ",(0,o.kt)(u.Z,{to:"../../../tutorials/tutorial-04",mdxType:"Link"},"Tutorial 4: Creating a Scroll Wheel with custom behavior"),"."))}M.isMDXComponent=!0}}]);