"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[3],{3905:function(e,t,o){o.d(t,{Zo:function(){return s},kt:function(){return h}});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),u=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(o),m=r,h=d["".concat(c,".").concat(m)]||d[m]||p[m]||a;return o?n.createElement(h,i(i({ref:t},s),{},{components:o})):n.createElement(h,i({ref:t},s))}));function h(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:r,i[1]=l;for(var u=2;u<a;u++)i[u]=o[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}m.displayName="MDXCreateElement"},44035:function(e,t,o){var n=o(67294),r=o(25026);t.Z=function(e){const t=e.noShadow||!1,o=e.width,a=e.height,i=(0,r.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:o,height:a,src:i})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:i,target:"_blank"},n.createElement("img",{width:o,height:a,src:i})),n.createElement("p",null,e.children))}},31217:function(e,t,o){var n=o(67294);class r extends n.Component{render(){return n.createElement("code",null,this.props.children)}}t.Z=r},60204:function(e,t,o){var n=o(67294);class r extends n.Component{render(){return n.createElement("i",null,this.props.children)}}t.Z=r},4637:function(e,t,o){o.r(t),o.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return C},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return f}});var n=o(3905),r=o(44035),a=o(60204),i=o(31217),l=Object.defineProperty,c=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,o)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,h=(e,t)=>{for(var o in t||(t={}))d.call(t,o)&&m(e,o,t[o]);if(s)for(var o of s(t))p.call(t,o)&&m(e,o,t[o]);return e};const g={id:"tutorial-05",title:"Tutorial 5: Creating Custom Triggers and Actions"},b=void 0,k={unversionedId:"tutorials/tutorial-05",id:"tutorials/tutorial-05",title:"Tutorial 5: Creating Custom Triggers and Actions",description:"With TouchGFX Designer it is possible to define your own interaction components with custom triggers and actions. Each Screen in your application can contain a collection of actions (these are simply void methods in C++) that you can call from within TouchGFX Designer as well as in code, while custom containers can also have a collection of triggers (which is equal to a callback in C++) which your application can react to.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/tutorials/tutorial-05.mdx",sourceDirName:"tutorials",slug:"/tutorials/tutorial-05",permalink:"/4.16/zh-TW/docs/tutorials/tutorial-05",draft:!1,tags:[],version:"current",frontMatter:{id:"tutorial-05",title:"Tutorial 5: Creating Custom Triggers and Actions"},sidebar:"docs",previous:{title:"Tutorial 4: Creating a Scroll Wheel with Custom Behavior",permalink:"/4.16/zh-TW/docs/tutorials/tutorial-04"},next:{title:"AbstractButton",permalink:"/4.16/zh-TW/docs/api/classes/classtouchgfx_1_1_abstract_button"}},w={},f=[{value:"Adding a Custom Action to a Screen",id:"adding-a-custom-action-to-a-screen",level:2},{value:"Passing a Value to a Custom Action",id:"passing-a-value-to-a-custom-action",level:2},{value:"Using Custom Triggers in Custom Containers",id:"using-custom-triggers-in-custom-containers",level:2}],y={toc:f};function C(e){var t,o=e,{components:l}=o,m=((e,t)=>{var o={};for(var n in e)d.call(e,n)&&t.indexOf(n)<0&&(o[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&p.call(e,n)&&(o[n]=e[n]);return o})(o,["components"]);return(0,n.kt)("wrapper",(t=h(h({},y),m),c(t,u({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"With TouchGFX Designer it is possible to define your own interaction components with custom triggers and actions. Each Screen in your application can contain a collection of actions ",(0,n.kt)(a.Z,{mdxType:"InlineNote"},"(these are simply void methods in C++)")," that you can call from within TouchGFX Designer as well as in code, while custom containers can also have a collection of triggers ",(0,n.kt)(a.Z,{mdxType:"InlineNote"},"(which is equal to a callback in C++)")," which your application can react to."),(0,n.kt)("p",null,"In this tutorial, we will go through this functionality to learn the possibilities this gives us to create more clean and dynamic TouchGFX applications."),(0,n.kt)("h2",h({},{id:"adding-a-custom-action-to-a-screen"}),"Adding a Custom Action to a Screen"),(0,n.kt)("p",null,"In this section we will:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a new application with a background box and a button"),(0,n.kt)("li",{parentName:"ul"},"Add a custom action to the application"),(0,n.kt)("li",{parentName:"ul"},"Change the background color using the custom action when the button is pressed")),(0,n.kt)("p",null,'Let\'s start out by creating a new blank application with dimensions 480x272 and inserting a Box for the background (let\'s name this "background") and a Button (name this one "button"). You should have something similar to the image below:'),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/white-background-and-button.webp",mdxType:"Figure"},"Adding a white background Box and a Button"),(0,n.kt)("p",null,'Next, let\'s add a custom action to our Screen. You can do this from the properties tab of the Screen by selecting the Screen and pressing the + button in the "ACTIONS" group. Name the action "setBackgroundColor" and give it a description like "Sets the background color". This generates a virtual method in ',(0,n.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase.hpp")," called ",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor()")," with an empty implementation in ",(0,n.kt)("inlineCode",{parentName:"p"},"Screen1ViewBase.cpp"),"."),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/adding-custom-action-to-screen.webp",mdxType:"Figure"},"Adding a new custom action to a Screen"),(0,n.kt)("p",null,"You can add functionality to this method by overriding it in user code in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Screen1View.cpp")," file or by creating interactions through TouchGFX Designer. Let's try out the latter by going to the interactions tab for the screen and adding an interaction that calls our new method when our button is clicked."),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/calling-setbackgroundcolor-on-click.webp",mdxType:"Figure"},"Call setBackgroundColor when button is clicked"),(0,n.kt)("p",null,"Now we specify what actually happens when ",(0,n.kt)(i.Z,{mdxType:"InlineCode"},"setBackgroundColor")," is called. This is done by using our new custom action as a trigger in another interaction. Let's start out by simply setting the background Box color to black by using the action ",(0,n.kt)("em",{parentName:"p"},'"Change box color"')," when the trigger ",(0,n.kt)("em",{parentName:"p"},'"setBackgroundColor is called"')," happens."),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/implementing-setbackgroundcolor-functionality.webp",mdxType:"Figure"},"Implementing functionality for custom action setBackgroundColor"),(0,n.kt)("p",null,"Now run the simulator and press the button; the background should turn black. You have successfully created your first custom action."),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/black-color-result.webp",mdxType:"Figure"},"Pressing button turns background black"),(0,n.kt)("h2",h({},{id:"passing-a-value-to-a-custom-action"}),"Passing a Value to a Custom Action"),(0,n.kt)("p",null,"Building upon the application we have just created, this section will expand upon the custom action concept by:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Adding a parameter to the setBackgroundColor custom action"),(0,n.kt)("li",{parentName:"ul"},"Passing a random color to setBackgroundColor"),(0,n.kt)("li",{parentName:"ul"},"Using this to change the background to random colors when pressing the button")),(0,n.kt)("p",null,"Let's make this application a little more interesting by passing a value to our ",(0,n.kt)(i.Z,{mdxType:"InlineCode"},"setBackgroundColor")," custom action to make it more dynamic."),(0,n.kt)("p",null,"Goto the interactions tab fot the Screen and delete the two current interactions by pressing the x button for each of them, as we will be setting up new ones."),(0,n.kt)("p",null,"Go to the properties tab for the Screen to the custom action called ",(0,n.kt)(i.Z,{mdxType:"InlineCode"},"setBackgroundColor"),' and check off the checkbox for type and input "colortype" which will be the type of the parameter we are going to pass to the action (colortype is the built-in TouchGFX type for describing colors). It is not possible to name the parameter and it will be named ',(0,n.kt)("em",{parentName:"p"},'"value"'),"."),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/adding-type-to-action.webp",mdxType:"Figure"},"Setting up a parameter for a custom action"),(0,n.kt)("p",null,'Next let\'s setup an interaction which uses our newly added parameter value. We do this by using the trigger "setBackgroundColor is called" and the action "Execute C++ code". We want to use our new parameter to set the color of our background Box, so the code to execute should be:'),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"background.setColor(value);\nbackground.invalidate();\n")),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/set-color-execute-code.webp",mdxType:"Figure"},"Using the passed value to change color of background"),(0,n.kt)("p",null,'Notice that the trigger displays the name and type of the parameter "value : colortype".'),(0,n.kt)("p",null,'Next, let\'s set up the interaction that actually calls setBackgroundColor when our button is clicked. Add another interaction with trigger "Button is clicked" and action "Call Screen1 setBackgroundColor" and notice that the value property also displays which type it expects. Let\'s pass a random color to setBackgroundColor by utilizing the randomization method ',(0,n.kt)("inlineCode",{parentName:"p"},"rand()")," in ",(0,n.kt)("inlineCode",{parentName:"p"},"stdlib.h")," to get three random numbers between 0 and 255 and using those to specify the color. To gain access to ",(0,n.kt)("inlineCode",{parentName:"p"},"rand()"),' we need to include it into our application. Luckily for us, it is also possible to supply your own includes from within TouchGFX Designer for both screens and custom containers. Go to the properties tab for the screen and under the "INCLUDES" group, input:'),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#include <stdlib.h>\n")),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/include-stdlib.webp",mdxType:"Figure"},"Including stdlib to gain access to rand()"),(0,n.kt)("p",null,"Next, for the value property we are going to input:"),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Color::getColorFrom24BitRGB(rand()%256, rand()%256, rand()%256)\n")),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/pass-random-color-to-action.webp",mdxType:"Figure"},"Passing a random color when button is clicked"),(0,n.kt)("p",null,"Now run the simulator and try pressing the button a couple of times. You should see the background changing to random colors."),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/random-color-result-initial.webp",mdxType:"Figure"},"Resulting random color when clicking the button"),(0,n.kt)("h2",h({},{id:"using-custom-triggers-in-custom-containers"}),"Using Custom Triggers in Custom Containers"),(0,n.kt)("p",null,"Finally, Custom Containers can also define a collection of custom triggers so in this section we will expand upon the application by doing the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Create a new custom container called ColorEmitter"),(0,n.kt)("li",{parentName:"ul"},'Add a custom trigger to ColorEmitter called "colorChanged"'),(0,n.kt)("li",{parentName:"ul"},"Use the colorChanged trigger to signal out random colors to the application when the button is pressed"),(0,n.kt)("li",{parentName:"ul"},"Set up interactions in the screen to listen for the colorChanged trigger"),(0,n.kt)("li",{parentName:"ul"},"Use whatever color the ColorEmitter sends out to set the color of the background box")),(0,n.kt)("p",null,"Let's try using a custom trigger to signal some event in our application. Instead of our button interaction passing the random color to ",(0,n.kt)("inlineCode",{parentName:"p"},"setBackgroundColor"),", let's try and make a custom container send out the random color to our Screen, and then let the Screen use whatever value the custom container communicated. This should end up being a simple example of different UI components communicating with each other in an application to make smaller, more reusable components."),(0,n.kt)("p",null,'First, let\'s create a new custom container and call it "ColorEmitter". Insert a button and call it "button". You should have something similar to the image below:'),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/color-emitter-custom-container.webp",mdxType:"Figure"},"ColorEmitter custom container"),(0,n.kt)("p",null,"Now, let's make it so that whenever the button is clicked, the ColorEmitter will emit a random color to the world. Anyone can then decide to listen for this emit and use the color for something. In our case, we just want to mimic the behavior we had before by using the color to set the background color."),(0,n.kt)("p",null,'To make the custom container emit a color, first we need to create a custom trigger. Go to the properties tab for the custom container and press the + button in the "TRIGGERS" group. Name the trigger "colorChanged", give it description "The color has changed" and give it the type "colortype".'),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/adding-custom-trigger-to-custom-container.webp",mdxType:"Figure"},"Adding a custom trigger to a custom container"),(0,n.kt)("p",null,'Next, go to the interactions tab for the custom container and create a new interaction. Use trigger "Button is clicked" and action "Emit colorChanged". Now we want to communicate a random color, so use the same code from earlier for the value property:'),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"touchgfx::Color::getColorFrom24BitRGB(rand()%256, rand()%256, rand()%256)\n")),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/emitting-color-changed.webp",mdxType:"Figure"},"Emitting a custom trigger"),(0,n.kt)("p",null,"However, this won't work initially since the ",(0,n.kt)(i.Z,{mdxType:"InlineCode"},"touchgfx::Color"),' namespace is not automatically included within our custom container. So like earlier, we are going to supply our own include for the custom container. Go to the properties tab for the custom container and under the "INCLUDES" group, input:'),(0,n.kt)("pre",null,(0,n.kt)("code",h({parentName:"pre"},{className:"language-cpp"}),"#include <touchgfx/Color.hpp>\n")),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/extra-includes.webp",mdxType:"Figure"},"Supplying extra includes"),(0,n.kt)("p",null,'Now we want to replace our old button with the new ColorEmitter custom container we have created. Select Screen1 and delete the button here. This should give a domain error in the interaction that was using this button, so delete that interaction also as we will create a new one for the ColorEmitter. Now insert an instance of our ColorEmitter on Screen1, then create a new interaction on Screen1. For the trigger, you should see an option called "ColorEmitter colorChanged happens". Select that one and for the action use "Call Screen1 setBackgroundColor". Now we need to use the value from the colorChanged emit, which will always be named "value" (like discussed earlier in this article). Therefore, input "value" into the value property.'),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/emit-colorchanged-happens-interaction.webp",mdxType:"Figure"},"Setting up an interaction to listen for colorChanged custom trigger"),(0,n.kt)("p",null,"Now run simulator and try pressing the button again. The same behavior should be present, with the background changing to random colors. But now, instead of just having all the functionality implemented in the Screen, we've successfully created our own communication between the Screen and some of its smaller, reusable components, namely our simple ColorEmitter."),(0,n.kt)(r.Z,{imageSource:"/img/tutorials/tutorial-05/random-color-result-final.webp",mdxType:"Figure"},"Resulting random color when button is clicked"))}C.isMDXComponent=!0}}]);