"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[1587],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),h=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=h(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=h(a),d=r,u=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return a?n.createElement(u,o(o({ref:t},c),{},{components:a})):n.createElement(u,o({ref:t},c))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:r,o[1]=l;for(var h=2;h<i;h++)o[h]=a[h];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},22425:function(e,t,a){var n=a(67294);class r extends n.Component{render(){return n.createElement("div",{class:"code-header"},n.createElement("div",null,n.createElement("h5",null,this.props.children)))}}t.Z=r},44035:function(e,t,a){var n=a(67294),r=a(25026);t.Z=function(e){const t=e.noShadow||!1,a=e.width,i=e.height,o=(0,r.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:a,height:i,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:a,height:i,src:o})),n.createElement("p",null,e.children))}},22697:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return w},frontMatter:function(){return u},metadata:function(){return g},toc:function(){return y}});var n=a(3905),r=a(44035),i=a(22425),o=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,h=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&p(e,a,t[a]);if(h)for(var a of h(t))m.call(t,a)&&p(e,a,t[a]);return e};const u={id:"performance",title:"Performance"},f=void 0,g={unversionedId:"basic-concepts/performance",id:"basic-concepts/performance",title:"Performance",description:"",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/basic-concepts/performance.mdx",sourceDirName:"basic-concepts",slug:"/basic-concepts/performance",permalink:"/4.16/ko/docs/basic-concepts/performance",draft:!1,tags:[],version:"current",frontMatter:{id:"performance",title:"Performance"},sidebar:"docs",previous:{title:"Main Loop",permalink:"/4.16/ko/docs/basic-concepts/rendering"},next:{title:"Operating Systems",permalink:"/4.16/ko/docs/basic-concepts/operating-system"}},b={},y=[{value:"Measuring the Rendering Time",id:"measuring-the-rendering-time",level:2},{value:"Counting the Lost Frames",id:"counting-the-lost-frames",level:2},{value:"Compensating for Lost Frames",id:"compensating-for-lost-frames",level:3},{value:"What Affects the Rendering Time?",id:"what-affects-the-rendering-time",level:2},{value:"How Much of the Screen Is Updated?",id:"how-much-of-the-screen-is-updated",level:3},{value:"The Number of Layers in the Graphics",id:"the-number-of-layers-in-the-graphics",level:3},{value:"The Complexity of Rendering the Pixels",id:"the-complexity-of-rendering-the-pixels",level:3},{value:"Hardware Support for Rendering",id:"hardware-support-for-rendering",level:3},{value:"When Should You Consider Rendering Time",id:"when-should-you-consider-rendering-time",level:2},{value:"Tips To Get Good Performance",id:"tips-to-get-good-performance",level:2}],k={toc:y};function w(e){var t,a=e,{components:o}=a,p=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&h)for(var n of h(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},k),p),l(t,s({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"In this section we will discuss performance aspects of an embedded graphical user interface."),(0,n.kt)("p",null,"A high performance is here defined as getting a high frame rate while still obtaining the desired graphical effects and animations."),(0,n.kt)("p",null,"Let's recall from the previous section how the frame rate of the user interface is affected by the main loop. Assume again that there is a parallel RGB display attached to the LTDC and two framebuffers. The basic situation is illustrated below:"),(0,n.kt)(r.Z,{imageSource:"/img/basic-concepts/rendering/engine-cycle-2fb-normal.webp",noShadow:"true",mdxType:"Figure"},"Double framebuffers"),(0,n.kt)("p",null,"As the display is assumed refreshed 60 times each second there is approximately 16 ms between each refresh. The calculation is this: 1 s / 60 = 0.01667 s = 16.67 ms."),(0,n.kt)("p",null,"TouchGFX starts drawing frame 1 into framebuffer 2 at the time where the transfer of framebuffer 1 has started. If the rendering of frame 1 is finished before the next transfer starts we can transfer framebuffer 2. If not finished within 16.67 ms framebuffer 1 is transferred again and the display will appear unchanged:"),(0,n.kt)(r.Z,{imageSource:"/img/basic-concepts/rendering/engine-cycle-2fb-long-render.webp",noShadow:"true",mdxType:"Figure"},"Main loop time above 16.67 ms"),(0,n.kt)("p",null,"This situation is denoted a lost frame."),(0,n.kt)("p",null,"The time for the collect and update phases are typically minuscule, e.g. less than 1 ms, and therefore more or less neglectable when considering the overall time taken of the main loop. Therefore, in the following and in general, when considering render time, this includes the collect and update phases."),(0,n.kt)("p",null,"If the rendering time in many frames exceeds the 16.67 ms time limit the frame rate on the display will be 30 frames per second (fps)."),(0,n.kt)("p",null,"If the rendering generally is shorter than 16.67 ms, but in some frames longer than 16.67 ms, the frame rate may be close to 60 fps in average, but the animation may not appear fluent to the user. Depending on the application it can look like some steps in the animation are fast and some are slow. This is not desireable."),(0,n.kt)("p",null,"The rendering time can also be even longer. If it is just above 33 ms, the framerate will drop to 20 fps as we only have a new frame ready on every third transfer."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",d({parentName:"tr"},{align:null}),"FPS"),(0,n.kt)("th",d({parentName:"tr"},{align:null}),"Max rendering time"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"60"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"16.67 ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"30"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"33.34 ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"20"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"50.00 ms")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",d({parentName:"tr"},{align:null}),"15"),(0,n.kt)("td",d({parentName:"tr"},{align:null}),"66.67 ms")))),(0,n.kt)("p",null,"The table shows the maximum rendering time (including the collect and update phases) that is available for a given framerate."),(0,n.kt)("p",null,"To achieve a good performance of a user interface it can be very beneficial to check and monitor the frame rate regularly. Two approaches can be used:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Measure the rendering time"),(0,n.kt)("li",{parentName:"ul"},"Count the lost frames")),(0,n.kt)("h2",d({},{id:"measuring-the-rendering-time"}),"Measuring the Rendering Time"),(0,n.kt)("p",null,"The first approach of measuring the rendering time gives the most detailed information. The idea is basically to measure the time from the frame transfer to the end of the rendering phase. The graphics engine calls a function on the GPIO class when the collect phase starts and makes another call when the rendering phase ends. The application defines these function and can hook into them to peform measurements."),(0,n.kt)("p",null,"The measurements can be done in two ways:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Use external timing device like an oscilloscope: To measure using an oscilloscope, the application should implement the ",(0,n.kt)("inlineCode",{parentName:"li"},"set(GPIO_ID)")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"clear(GPIO_ID)")," methods from the ",(0,n.kt)("inlineCode",{parentName:"li"},"GPIO")," interface. The oscilloscope can then measure the rendering time as the time elapsed while the output is high."),(0,n.kt)("li",{parentName:"ul"},"Use an internal timer: Another approach is to use an internal timer, like the sysTick timer. When the GPIO::set(RENDER_TIME) is called the application can save the value of the timer in a variable. When the clear call is made the application can read the timer again and subtract the previous value to get the render time. The speed of the timer will define the resolution of the measurement. The application must somehow make the render time visible. One way is to save the value in a global variable and maybe show the value on the screen in a TextArea. The value can also be checked with a debugger.")),(0,n.kt)("h2",d({},{id:"counting-the-lost-frames"}),"Counting the Lost Frames"),(0,n.kt)("p",null,"The graphics engine counts the number of transfers that has occured during the last collect-update-rendering phase. The application can easily check this value to see if a frame was lost and the frame rate therefore lowered."),(0,n.kt)("p",null,"The count is available in the ",(0,n.kt)("em",{parentName:"p"},"HAL")," class:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void handleTickEvent() {\n  tickCounter += 1;\n  if (HAL::getInstance()->getLCDRefreshCount() > 1) {\n    //Alert programmer somehow\n    ...\n  }\n}\n")),(0,n.kt)("h3",d({},{id:"compensating-for-lost-frames"}),"Compensating for Lost Frames"),(0,n.kt)("p",null,"When frames are lost and the framerate of one of our animations therefore lowered we can compensate to a certain degree. We can either:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"wait it out - let the animation go on, resulting in a longer animation duration, and possibly unsmooth animation."),(0,n.kt)("li",{parentName:"ul"},"skip some frames - make sure that the overall animation does not take longer time than intended by skipping frames.")),(0,n.kt)("p",null,"TouchGFX can be instructed to automaticallly skip some frames, when frames are lost. This can be accomplished by ticking animations more than once per actual frame. This can help in making animations more fluent when the render time is uneven."),(0,n.kt)(i.Z,{mdxType:"CodeHeader"},"HAL.hpp"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-cpp"}),"void setFrameRateCompensation(bool enabled)\n")),(0,n.kt)("h2",d({},{id:"what-affects-the-rendering-time"}),"What Affects the Rendering Time?"),(0,n.kt)("p",null,"A number of different things affect the rendering time: The size of the updated parts, the use of layering, the complexity of the widgets, and the available hardware support for the rendering."),(0,n.kt)("h3",d({},{id:"how-much-of-the-screen-is-updated"}),"How Much of the Screen Is Updated?"),(0,n.kt)("p",null,"The rendering time is generally proportional to the number of pixels that must be updated. So if an animation takes too long time to render, a possible fix is to reduce the area of the animation. For example, if you have a rotating image and the performance is not good enough, the performance can be improved by reducing the size of the image."),(0,n.kt)(r.Z,{imageSource:"/img/basic-concepts/performance/reducing-image-size.webp",noShadow:"true",mdxType:"Figure"},"Reducing image size reduces the rendering time"),(0,n.kt)("p",null,"Remember that the graphics engine redraws the areas that the application invalidated. This means that it is important to only invalidate the areas that actually requires a refresh."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The larger the invalidated areas, the longer the render time.")),(0,n.kt)("h3",d({},{id:"the-number-of-layers-in-the-graphics"}),"The Number of Layers in the Graphics"),(0,n.kt)("p",null,"In a typical application the graphics will consist of different elements that are stacked upon each other. If one of the elements is updated all the elements must typically be redrawn."),(0,n.kt)("p",null,"A typical example of this is a background image, a frame, and some text:"),(0,n.kt)(r.Z,{imageSource:"/img/basic-concepts/performance/text-in-a-frame.webp",noShadow:"true",mdxType:"Figure"},"Layering graphical elements"),(0,n.kt)("p",null,"This user interface is created by putting a TextArea widget on top of an Image widget showing a transparent frame. Both on top of the background Image:"),(0,n.kt)(r.Z,{imageSource:"/img/basic-concepts/performance/text-in-a-frame-designer.webp",noShadow:"true",mdxType:"Figure"},"Layering graphical elements in TouchGFX Designer"),(0,n.kt)("p",null,"This solution is used very often in application. It is a very easy solution with a high flexibility, as it is, for example, possible to change the frame at runtime or move the frame and the text on the background."),(0,n.kt)("p",null,"The problem regarding rendering time is that if the text is updated at runtime and needs to be redrawn, the graphics engine also needs to redraw the background and the frame; and then the new text. This increases the time to render the text considerably."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The more layers in an invalidated area, the longer the render time.")),(0,n.kt)("h3",d({},{id:"the-complexity-of-rendering-the-pixels"}),"The Complexity of Rendering the Pixels"),(0,n.kt)("p",null,"Not all pixels are equally difficult to render to the framebuffer. In all types of rendering the graphical engine must write the resulting pixel to the framebuffer. But the cost of calculating the pixel to write differs."),(0,n.kt)("p",null,"The fixed color, e.g. used in the Box Widget, has the lowest cost, as the calculation of a pixel is done once and reused for all the pixels. This means that we can get a very high performance by using a lot of Boxes. This is not recommended as the user interface will not be of high quality."),(0,n.kt)("p",null,"An image has the next lowest cost of pixel calculation since the pixels are stored in a ready to use format in the bitmaps. Calculating the pixel to write to the framebuffer is a matter of loading the color value from the correct place in the bitmap."),(0,n.kt)("p",null,'Text bears a cost comparable to images as the individual letters are actually represented as small images. In practice the cost is higher as the high number of small images gives rise to a considerable "start-stop" cost. For example the calculation of the position of the individual letters. In order for text to look as nice as possible, it is represented as small images with transparency, see the notes on transparency below.'),(0,n.kt)("p",null,"Rotated or scaled images are more expensive. The task is again to load the pixel value from the bitmap, but this time it is a more time consuming calculation because the graphics engine has to incorporate the scaling and rotation."),(0,n.kt)("p",null,"Geometric elements like a circle are even more expensive. This time we cannot load the pixel color from a bitmap, but we have to calculate both the shape of the circle and the color of individual pixels in the circle."),(0,n.kt)("p",null,'Transparency adds to the cost of drawing an element. An element is transparent if some of the pixels are not solid. This increases the cost of drawing as the graphical engine first has to draw the element behind the transparent element (as we saw in the "text in a frame" section). Secondly the graphical engine then has to combine the background pixel with the pixel of the transparent element and write the result to the framebuffer. This calculation takes considerably more time than just writing the calculated pixel.'),(0,n.kt)(r.Z,{imageSource:"/img/basic-concepts/performance/box-image-texture-circle.webp",noShadow:"true",mdxType:"Figure"},"Box, Image, rotated Image, and circle. Solid elements in the first row. Transparent elements below."),(0,n.kt)("p",null,"Transparency always gives you an extra layer. But putting solid pixels on top of other solid pixels does not always increase the number of layers. The graphical engine tries to not draw pixels that are covered by other solid pixels, as this would be a waste of precious time."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"The more expensive elements in the invalidated area, the longer the render time.")),(0,n.kt)("p",null,"Remember that is only the elements that are part of the invalidated area, that adds to the rendering time. Elements outside of the invalidated areas do not impact the rendering time."),(0,n.kt)("p",null,"Read more about ui components and performance ",(0,n.kt)("a",d({parentName:"p"},{href:"../development/ui-development/ui-components/general-ui-component-performance"}),"here"),"."),(0,n.kt)("h3",d({},{id:"hardware-support-for-rendering"}),"Hardware Support for Rendering"),(0,n.kt)("p",null,"Some STM32 microcontrollers contain a graphical accelerator called Chrom-ART (or DMA2D). This accelerator can reduce the rendering time. As the accelerator runs in parallel with the microcontroller core, the microcontroller is free to run other tasks while the accelerator renders graphics."),(0,n.kt)("p",null,"Chrom-ART is mainly useful for images and text. It is automatically used by the graphics engine when available."),(0,n.kt)("h2",d({},{id:"when-should-you-consider-rendering-time"}),"When Should You Consider Rendering Time"),(0,n.kt)("p",null,"Rendering time is not equally important all the time. You should pay attention to the rendering time when a slow frame rate is visible to the user. This is typically the case when you have an animation running on part of the screen (like a rotating icon) or when you move or slide something across the screen. If the update frequency is low it will appear step-wise instead of fluent to the user. If this is the case you should check the rendering time."),(0,n.kt)("p",null,"On the other hand, if you replace the whole screen with a new screen, it is normally not visible to the user if the frame rate dropped significantly during the change. This is because the user cannot see when the rendering started, but only when it finished."),(0,n.kt)("p",null,"These two rules mean that for animated elements (e.g. moving) you should use few layers and refrain from using complex elements and many layers. For other parts of the screen, this could be unproblematic."),(0,n.kt)(r.Z,{imageSource:"/img/basic-concepts/performance/clock-and-scrolllist.webp",noShadow:"true",mdxType:"Figure"},"Analog clock and a scroll list"),(0,n.kt)("p",null,"In this example we have an analog clock on the left. The three clock hands are rendered by rotating small elongated images. This is normally fine as the hands do not move all the time. But if we wanted to move the clock around on the screen, they would be redrawn in every frame and that could be problematic, as drawing rotated images is typically time consuming."),(0,n.kt)("p",null,"On the right we have a scroll list. The user can move this list of numbers up and down, so we need a high framerate for the user interface to appear responsive. Therefore it is important that we consider the rendering time of the elements in the scroll list or reduce the size of the scroll list."),(0,n.kt)("h2",d({},{id:"tips-to-get-good-performance"}),"Tips To Get Good Performance"),(0,n.kt)("p",null,"We end this section with a summary of the tips to obtain a good performance:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Do not redraw unchanged things")," Make sure that you do not accidentially invalidate unnecessary parts of the display. This reduces the performance without any benifit."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Find balance between quality and speed")," Reducing the complexity of the elements can improve the performance. A good balance between this and the performance is often the key."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Utilize hardware capabilities")," The capability of a microcontroller with hardware acceleration (Chrom-ART) is often higher than a microcontroller without. Consider using a microcontroller with Chrom-ART."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Replace calculated graphics with images")," The calculated circle is slower than an image of a circle. In general images can replace many static elements."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Adjust display refresh rate")," As we discussed in the beginning of this section is the refresh rate a hard limit for the rendering time. If the rendering time exceeds the refresh rate, the frame rate drops. If your rendering time is just a little above the refresh rate, it may be possible to lower the refresh rate of the display to e.g. 55 Hz (corresponding to 18.2 ms), and keep the high frame rate.")))}w.isMDXComponent=!0}}]);