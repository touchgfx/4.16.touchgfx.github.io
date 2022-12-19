"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[8419],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return u}});var a=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=a.createContext({}),s=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},d=function(e){var n=s(e.components);return a.createElement(c.Provider,{value:n},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),h=s(t),m=i,u=h["".concat(c,".").concat(m)]||h[m]||p[m]||o;return t?a.createElement(u,r(r({ref:n},d),{},{components:t})):a.createElement(u,r({ref:n},d))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,r=new Array(o);r[0]=m;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[h]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=t[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},22425:function(e,n,t){var a=t(67294);class i extends a.Component{render(){return a.createElement("div",{class:"code-header"},a.createElement("div",null,a.createElement("h5",null,this.props.children)))}}n.Z=i},44035:function(e,n,t){var a=t(67294),i=t(25026);n.Z=function(e){const n=e.noShadow||!1,t=e.width,o=e.height,r=(0,i.Z)(e.imageSource);return n?a.createElement("div",{class:"figure noshadow"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:t,height:o,src:r})),a.createElement("p",null,e.children)):a.createElement("div",{class:"figure"},a.createElement("a",{href:r,target:"_blank"},a.createElement("img",{width:t,height:o,src:r})),a.createElement("p",null,e.children))}},29415:function(e,n,t){var a=t(67294),i=t(88678);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class r extends a.Component{render(){return a.createElement(i.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:o},this.props.children)}}n.Z=r},88678:function(e,n,t){var a=t(67294);class i extends a.Component{render(){const e=`highlight highlight-${this.props.type}`;return a.createElement("div",{class:e},a.createElement("div",{class:"highlight-heading"},a.createElement("h5",null,a.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),a.createElement("div",{class:"highlight-content"},this.props.children))}}n.Z=i},31217:function(e,n,t){var a=t(67294);class i extends a.Component{render(){return a.createElement("code",null,this.props.children)}}n.Z=i},93054:function(e,n,t){var a=t(67294),i=t(88678);const o=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}));class r extends a.Component{render(){return a.createElement(i.Z,{color:"var(--highlight-color-note)",header:"Note",type:"note",icon:o},this.props.children)}}n.Z=r},45008:function(e,n,t){t.r(n),t.d(n,{assets:function(){return w},contentTitle:function(){return x},default:function(){return A},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return y}});var a=t(3905),i=t(39130),o=t(44035),r=t(31217),l=t(29415),c=t(22425),s=t(93054),d=Object.defineProperty,h=Object.defineProperties,p=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,k=(e,n,t)=>n in e?d(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,b=(e,n)=>{for(var t in n||(n={}))u.call(n,t)&&k(e,t,n[t]);if(m)for(var t of m(n))g.call(n,t)&&k(e,t,n[t]);return e};const f={id:"mixins",title:"Mixins"},x=void 0,v={unversionedId:"development/ui-development/touchgfx-engine-features/mixins",id:"development/ui-development/touchgfx-engine-features/mixins",title:"Mixins",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/development/ui-development/touchgfx-engine-features/mixins.mdx",sourceDirName:"development/ui-development/touchgfx-engine-features",slug:"/development/ui-development/touchgfx-engine-features/mixins",permalink:"/4.16/ko/docs/development/ui-development/touchgfx-engine-features/mixins",draft:!1,tags:[],version:"current",frontMatter:{id:"mixins",title:"Mixins"},sidebar:"docs",previous:{title:"Backend Communication",permalink:"/4.16/ko/docs/development/ui-development/touchgfx-engine-features/backend-communication"},next:{title:"Texts and Fonts",permalink:"/4.16/ko/docs/development/ui-development/touchgfx-engine-features/texts-and-fonts"}},w={},y=[{value:"Move Animator",id:"move-animator",level:2},{value:"Using Move Animator in User Code",id:"using-move-animator-in-user-code",level:3},{value:"Callback Implementation in User Code",id:"callback-implementation-in-user-code",level:3},{value:"API reference",id:"api-reference",level:3},{value:"Fade Animator",id:"fade-animator",level:2},{value:"Using Fade Animator in User Code",id:"using-fade-animator-in-user-code",level:3},{value:"Callback Implementation in User Code",id:"callback-implementation-in-user-code-1",level:3},{value:"API reference",id:"api-reference-1",level:3},{value:"ClickListener",id:"clicklistener",level:2},{value:"Callback Implementation in User Code",id:"callback-implementation-in-user-code-2",level:3},{value:"API reference",id:"api-reference-2",level:3},{value:"Draggable",id:"draggable",level:2},{value:"API reference",id:"api-reference-3",level:3}],E={toc:y};function A(e){var n,t=e,{components:d}=t,k=((e,n)=>{var t={};for(var a in e)u.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&m)for(var a of m(e))n.indexOf(a)<0&&g.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=b(b({},E),k),h(n,p({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,"A Mixin is a class that extends the functionality of a widget to, for example, be able to animate movement or a change in their alpha value. The Move Animator and Fade Animator mixins are the basis of TouchGFX Designer Interactions being able to generate code that animates movement and alpha change. These mixins can be added to a widget either through TouchGFX Designer or manually in User Code."),(0,a.kt)("h2",b({},{id:"move-animator"}),"Move Animator"),(0,a.kt)("p",null,"The Move Animator mixin makes the widget capable of animating a movement from its current position to a specified end position. The movement in both the X and Y direction can be described by supplying EasingEquations."),(0,a.kt)("p",null,'In TouchGFX Designer, the mixin can be applied by enabling it in the properties for the given widget in the "Mixins" section, as shown in the image below.'),(0,a.kt)("p",null,"The Move Animator mixin will automatically be applied to a widget if an ",(0,a.kt)("a",b({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"Interaction")," that moves the widget has been created."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-move-animator-enabled.webp",mdxType:"Figure"},"Move Animator mixin enabled in TouchGFX Designer"),(0,a.kt)("p",null,"Enabling the Move Animator mixin changes the declaration signature of the generated widget as seen below, where a ",(0,a.kt)("a",b({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box")," has had the Move Animator mixin enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"touchgfx::MoveAnimator< touchgfx::Box > box;\n")),(0,a.kt)("h3",b({},{id:"using-move-animator-in-user-code"}),"Using Move Animator in User Code"),(0,a.kt)("p",null,"When a widget has had the Move Animator mixin applied to it, the widget now has the capability of animating its movement from one position to another. In this section a demonstration of how to use this new functionality is shown."),(0,a.kt)("p",null,"After enabling the Move Animator mixin in TouchGFX Designer on a Box widget, the method ",(0,a.kt)(r.Z,{mdxType:"InlineCode"},"startMoveAnimation")," becomes available for use. This methods takes five arguments in the following order"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"endX: the X position relative to its parent that the widget should move to."),(0,a.kt)("li",{parentName:"ul"},"endY: the Y position relative to its parent that the widget should move to."),(0,a.kt)("li",{parentName:"ul"},"duration: the time in ticks the movement in the X and Y axis should take."),(0,a.kt)("li",{parentName:"ul"},"xProgressionEquation: the EasingEquation that should be used for the movement in the X axis."),(0,a.kt)("li",{parentName:"ul"},"yProgressionEquation: the EasingEquation that should be used for the movement in the Y axis.")),(0,a.kt)("p",null,"Below an example of a movement to the coordinates X: 0, X: 0 over a duration of 40 ticks, using a linear EasingEquation in both X and Y axis."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"    box.startMoveAnimation(0, 0, 40, EasingEquations::linearEaseNone, EasingEquations::linearEaseNone);\n")),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_easing_equations",mdxType:"Link"},"API Reference for the available EasingEquations")),(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"https://easings.net/",mdxType:"Link"},"Graphical demonstations of EasingEquations"))),(0,a.kt)("h3",b({},{id:"callback-implementation-in-user-code"}),"Callback Implementation in User Code"),(0,a.kt)("p",null,"When a Move Animator mixin has completed an animation, a callback is emitted. In this section a demonstration of how to implement this callback is shown."),(0,a.kt)("p",null,"After enabling the Move Animator mixin in TouchGFX Designer on a Box widget, the next step is to add declarations for a callback and a function to handle the event in the Screen header class file that inherits from the base class where the Box widget is located."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for move animation ended on a Box\n    void boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<Box>& comp);\n\nprotected:\n    // Declaring callback type of MoveAnimator<Box>\n    Callback <Screen1View, const touchgfx::MoveAnimator<Box>&> boxMoveAnimationEndedCallback;\n};\n")),(0,a.kt)("p",null,"Then the callback declaration and function to handle the event need to be bound to the view object."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n  // In constructor for callback, bind to this view object and bind which function to handle the event.\n  boxMoveAnimationEndedCallback(this, &Screen1View::boxMoveAnimationEndedHandler) { }\n")),(0,a.kt)("p",null,"Next step is to tell the Box widget which callback to use when its move animation has ended, this is done in ",(0,a.kt)(r.Z,{mdxType:"InlineCode"},"setupScreen()")," to ensure that the callback is set every time the screen is entered."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n  // Add the callback to box\n  box.setMoveAnimationEndedAction(boxMoveAnimationEndedCallback);\n}\n")),(0,a.kt)("p",null,"Last step is to implement the function, ",(0,a.kt)(r.Z,{mdxType:"InlineCode"},"boxMoveAnimationEndedHandler"),", that handles the callback. For good practice we check that the Box which move animation has ended is actually the 'box'"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxMoveAnimationEndedHandler(const touchgfx::MoveAnimator<touchgfx::Box>& b)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when move animation on 'box' has ended here.\n    }\n}\n")),(0,a.kt)("h3",b({},{id:"api-reference"}),"API reference"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_move_animator",mdxType:"Link"},"API reference for the MoveAnimator class"))),(0,a.kt)("h2",b({},{id:"fade-animator"}),"Fade Animator"),(0,a.kt)("p",null,"The Fade Animator mixin makes the widget capable of animating its alpha value to fade from its current alpha value to a specified end alpha value. The rate of fading can be described by supplying an EasingEquation."),(0,a.kt)(s.Z,{mdxType:"Note"},"Only widgets that implement an alpha value support the Fade Animator mixin. This means all the widgets that can contain other widgets, like the ",(0,a.kt)(i.Z,{to:"../ui-components/containers/container",mdxType:"Link"},"Container"),", do not support the Fade Animator mixin."),(0,a.kt)("p",null,'In TouchGFX Designer, the mixin can be applied by enabling it in the properties for the given widget in the "Mixins" section, as shown in the image below.'),(0,a.kt)("p",null,"The Fade Animator mixin will also automatically be applied to a widget if an ",(0,a.kt)("a",b({parentName:"p"},{href:"../designer-user-guide/interactions-view"}),"Interaction")," that fades the widget over a duration larger than zero has been added."),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-fade-animator-enabled.webp",mdxType:"Figure"},"Fade Animator mixin enabled in TouchGFX Designer"),(0,a.kt)("p",null,"Enabling the Fade Animator mixin changes the declaration signature of the generated widget as seen below, where a ",(0,a.kt)("a",b({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box")," has had the Fade Animator mixin enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"touchgfx::FadeAnimator< touchgfx::Box > box;\n")),(0,a.kt)("h3",b({},{id:"using-fade-animator-in-user-code"}),"Using Fade Animator in User Code"),(0,a.kt)("p",null,"When a widget has had the Fade Animator mixin applied to it, the widget now has the capability of animating its alpha value from one setting to another. In this section a demonstration of how to use this new functionality is shown."),(0,a.kt)("p",null,"After enabling the Fade Animator mixin in TouchGFX Designer on a Box widget, the method ",(0,a.kt)(r.Z,{mdxType:"InlineCode"},"startFadeAnimation")," becomes available for use. This method takes three arguments in the following order:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"endAlpha: the alpha value the widget should be when animation is completed."),(0,a.kt)("li",{parentName:"ul"},"duration: the time in ticks the animation to the new alpha value setting should take."),(0,a.kt)("li",{parentName:"ul"},"alphaProgressionEquation: the EasingEquation that should be used for the rate of change to the alpha value.")),(0,a.kt)("p",null,"Below an example of an alpha value change to 0 over a duration of 40 ticks, using a linear EasingEquation."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"    box.startFadeAnimation(0, 0, 40, EasingEquations::linearEaseNone);\n")),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_easing_equations",mdxType:"Link"},"API Reference for the available EasingEquations")),(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"https://easings.net/",mdxType:"Link"},"Graphical demonstations of EasingEquations"))),(0,a.kt)("h3",b({},{id:"callback-implementation-in-user-code-1"}),"Callback Implementation in User Code"),(0,a.kt)("p",null,"When a Fade Animator mixin has completed an animation, a callback is emitted. In this section a demonstration of how to implement this callback is shown."),(0,a.kt)("p",null,"After enabling the Fade Animator mixin in TouchGFX Designer on a Box widget, the next step is to add declarations for a callback and a function to handle the event in the Screen header class file that inherits from the base class where the Box widget is located."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for fade animation ended on a Box\n    void boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<Box>& comp);\n\nprotected:\n    // Declaring callback type of FadeAnimator<Box>\n    Callback <Screen1View, const touchgfx::FadeAnimator<Box>&> boxFadeAnimationEndedCallback;\n};\n")),(0,a.kt)("p",null,"Then the callback declaration and function to handle the event need to be bound to the view object."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n  // In constructor for callback, bind to this view object and bind which function to handle the event.\n  boxFadeAnimationEndedCallback(this, &Screen1View::boxFadeAnimationEndedHandler) { }\n")),(0,a.kt)("p",null,"Next step is to tell the Box widget which callback to use when its move animation has ended, this is done in ",(0,a.kt)(r.Z,{mdxType:"InlineCode"},"setupScreen()")," to ensure that the callback is set every time the screen is entered."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n  // Add the callback to box\n  box.setFadeAnimationEndedAction(boxFadeAnimationEndedCallback);\n}\n")),(0,a.kt)("p",null,"Last step is to implement the function, ",(0,a.kt)(r.Z,{mdxType:"InlineCode"},"boxFadeAnimationEndedHandler"),", that handles the callback. For good practice we check that the Box which fade animation has ended is actually the 'box'"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxFadeAnimationEndedHandler(const touchgfx::FadeAnimator<touchgfx::Box>& b)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when fade animation on 'box' has ended here.\n    }\n}\n")),(0,a.kt)("h3",b({},{id:"api-reference-1"}),"API reference"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_fade_animator",mdxType:"Link"},"API reference for the FadeAnimator class"))),(0,a.kt)("h2",b({},{id:"clicklistener"}),"ClickListener"),(0,a.kt)("p",null,"The Click Listener mixin makes the widget capable of responding to touch input by extending the widget with a callback."),(0,a.kt)("p",null,'In TouchGFX Designer, the mixin can be applied by enabling it in the properties for the given widget in the "Mixins" section, as shown in the image below.'),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-click-listener-enabled.webp",mdxType:"Figure"},"Click Listener mixin enabled in TouchGFX Designer"),(0,a.kt)("p",null,"Enabling the Click Listener mixin changes the declaration signature of the generated widget as seen below, where a ",(0,a.kt)("a",b({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box")," has had the Click Listener mixin enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"touchgfx::ClickListener< touchgfx::Box > box;\n")),(0,a.kt)("h3",b({},{id:"callback-implementation-in-user-code-2"}),"Callback Implementation in User Code"),(0,a.kt)("p",null,"When a Click Listener mixin receives a touch event, a callback is emitted. In this section a demonstration of how to implement this callback is shown."),(0,a.kt)("p",null,"After enabling the Click Listener mixin in TouchGFX Designer on a Box widget, the next step is to add declarations for a callback and a function to handle the event in the Screen header class file that inherits from the base class where the Box widget is located."),(0,a.kt)("p",null,"The callback should declare three things: which class type to bind to, which widget the callback originates from and the type of event that occurs. In this example it is ",(0,a.kt)(r.Z,{mdxType:"InlineCode"},"Screen1View"),", ",(0,a.kt)(r.Z,{mdxType:"InlineCode"},"const Box&")," and ",(0,a.kt)(r.Z,{mdxType:"InlineCode"},"const ClickEvent&")),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.hpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{5-6,9-10}","{5-6,9-10}":!0}),"class Screen1View : public Screen1ViewBase\n{\npublic:\n    Screen1View();\n    // Declaring callback handler for Box\n    void boxClickHandler(const Box& b, const ClickEvent& e);\n\nprotected:\n    // Declaring callback type of box and clickEvent\n    Callback<Screen1View, const Box&, const ClickEvent&> boxClickedCallback;\n};\n")),(0,a.kt)("p",null,"Then the callback declaration and function to handle the event need to be bound to the view object."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{2-3}","{2-3}":!0}),"Screen1View::Screen1View() :\n    // In constructor for callback, bind to this view object and bind which function to handle the event.\n    boxClickedCallback(this, &Screen1View::boxClickHandler) { }\n")),(0,a.kt)("p",null,"Next step is to tell the Box widget which callback to use when it is touched, this is done in ",(0,a.kt)(r.Z,{mdxType:"InlineCode"},"setupScreen()")," to ensure that the callback is set every time the screen is entered."),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp",metastring:"{3-4}","{3-4}":!0}),"void Screen1View::setupScreen()\n{\n    // Add the callback to box\n    box.setClickAction(boxClickedCallback);\n}\n")),(0,a.kt)("p",null,"Last step is to implement the function, ",(0,a.kt)(r.Z,{mdxType:"InlineCode"},"boxClickHandler"),", that handles the callback. For good practice we check that the Box which initiated the callback is actually the 'box'"),(0,a.kt)(c.Z,{mdxType:"CodeHeader"},"Screen1View.cpp"),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"void Screen1View::boxClickHandler(const Box& b, const ClickEvent& evt)\n{\n    if (&b == &box)\n    {\n        //Implement what should happen when 'box' is touched/clicked here.\n    }\n}\n")),(0,a.kt)("h3",b({},{id:"api-reference-2"}),"API reference"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_click_listener",mdxType:"Link"},"API reference for the ClickListener class"))),(0,a.kt)("h2",b({},{id:"draggable"}),"Draggable"),(0,a.kt)("p",null,"The Draggable mixin makes the widget capable of being dragged around via touch input."),(0,a.kt)("p",null,'In TouchGFX Designer, the mixin can be applied by enabling it in the properties for the given widget in the "Mixins" section, as shown in the image below.'),(0,a.kt)(o.Z,{imageSource:"/img/development/ui-development/touchgfx-engine-features/mixins/mixins-draggable-enabled.webp",mdxType:"Figure"},"Draggable mixin enabled in TouchGFX Designer"),(0,a.kt)("p",null,"Enabling the Draggable mixin changes the declaration signature of the generated widget as seen below, where a ",(0,a.kt)("a",b({parentName:"p"},{href:"../ui-components/shapes/box"}),"Box")," has had the Click Listener mixin enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",b({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Draggable< touchgfx::Box > box;\n")),(0,a.kt)("h3",b({},{id:"api-reference-3"}),"API reference"),(0,a.kt)(l.Z,{mdxType:"FurtherReading"},(0,a.kt)("li",null,(0,a.kt)(i.Z,{to:"../../../api/classes/classtouchgfx_1_1_draggable",mdxType:"Link"},"API reference for the Draggable class"))))}A.isMDXComponent=!0}}]);