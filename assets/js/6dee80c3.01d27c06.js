"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[218],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,m=u["".concat(s,".").concat(d)]||u[d]||h[d]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},44035:function(e,t,n){var r=n(67294),a=n(25026);t.Z=function(e){const t=e.noShadow||!1,n=e.width,i=e.height,o=(0,a.Z)(e.imageSource);return t?r.createElement("div",{class:"figure noshadow"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children)):r.createElement("div",{class:"figure"},r.createElement("a",{href:o,target:"_blank"},r.createElement("img",{width:n,height:i,src:o})),r.createElement("p",null,e.children))}},29415:function(e,t,n){var r=n(67294),a=n(88678);const i=r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},r.createElement("path",{"fill-rule":"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}));class o extends r.Component{render(){return r.createElement(a.Z,{color:"var(--highlight-color-further-reading)",header:"Further reading",type:"further-reading",icon:i},this.props.children)}}t.Z=o},88678:function(e,t,n){var r=n(67294);class a extends r.Component{render(){const e=`highlight highlight-${this.props.type}`;return r.createElement("div",{class:e},r.createElement("div",{class:"highlight-heading"},r.createElement("h5",null,r.createElement("div",{class:"highlight-icon"},this.props.icon),this.props.header)),r.createElement("div",{class:"highlight-content"},this.props.children))}}t.Z=a},1269:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return g},default:function(){return x},frontMatter:function(){return f},metadata:function(){return w},toc:function(){return b}});var r=n(3905),a=n(44035),i=n(29415),o=n(39130),l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&d(e,n,t[n]);if(p)for(var n of p(t))h.call(t,n)&&d(e,n,t[n]);return e};const f={id:"examples",title:"Examples"},g=void 0,w={unversionedId:"development/ui-development/working-with-touchgfx/examples",id:"development/ui-development/working-with-touchgfx/examples",title:"Examples",description:"",source:"@site/docs/development/ui-development/working-with-touchgfx/examples.mdx",sourceDirName:"development/ui-development/working-with-touchgfx",slug:"/development/ui-development/working-with-touchgfx/examples",permalink:"/4.16/docs/development/ui-development/working-with-touchgfx/examples",draft:!1,tags:[],version:"current",frontMatter:{id:"examples",title:"Examples"},sidebar:"docs",previous:{title:"Debugging",permalink:"/4.16/docs/development/ui-development/working-with-touchgfx/debugging"},next:{title:"Keyboard Shortcuts",permalink:"/4.16/docs/development/ui-development/working-with-touchgfx/keyboard-shortcuts"}},v={},b=[{value:"UI Templates",id:"ui-templates",level:2},{value:"Online Applications",id:"online-applications",level:2}],y={toc:b};function x(e){var t,n=e,{components:l}=n,d=((e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&h.call(e,r)&&(n[r]=e[r]);return n})(n,["components"]);return(0,r.kt)("wrapper",(t=m(m({},y),d),s(t,c({components:l,mdxType:"MDXLayout"}))),(0,r.kt)("p",null,"To help further explore the possibilities and features of TouchGFX, multiple premade examples are made available to the user. These examples can be accessed through the ",(0,r.kt)("a",m({parentName:"p"},{href:"../designer-user-guide/startup-window"}),"Startup Window")," of TouchGFX Designer and all include free-to-use images, code, etc., which means that they can even be used as a base to build your own unique application from. Examples are combined with ",(0,r.kt)("a",m({parentName:"p"},{href:"../../development-introduction#application-templates-ats"}),"Application Templates")," to create TouchGFX applications. If you are new to TouchGFX, this can be a great starting source of inspiration and knowledge about how TouchGFX applications function."),(0,r.kt)("p",null,"Some examples focus on single features while others implement several different functionalities found in TouchGFX. Examples are divided into two different types."),(0,r.kt)("h2",m({},{id:"ui-templates"}),"UI Templates"),(0,r.kt)("p",null,"UI Templates are generally smaller, more self-contained examples that mostly focus on specific features such as different widgets. UI Templates can run on any STM32 evaluation kit and the PC simulator, but for the best experience it is encouraged to create projects where the resolution of the UI Template fits the resolution of your board. Some UI Templates are also built with specific color depths in mind, which means they might not display as well on lower color depth displays."),(0,r.kt)("p",null,"The UI Templates also include several demos made by the TouchGFX team which showcase more features with higher quality UI design. These can be a great place to start to get a feeling for what TouchGFX is capable of."),(0,r.kt)("p",null,"To create an application using a UI Template, start by pressing the card under the 'Application Template' label to see the available Application Templates. Click whichever Application Template you want and then press 'Select'. Next, press the card under the 'UI Template' label to see the available UI Templates. Click whichever UI Template you want and then press 'Select'. Optionally, select another resolution and color depth in the drop downs. Finally, press 'Create' to create an application from the selected Application Template and UI Template. Press either 'Run Simulator' or 'Run Target' to see the application running."),(0,r.kt)("p",null,"An animation of these steps can be seen below:"),(0,r.kt)(a.Z,{imageSource:"/img/introduction/getting-started/application-template-ui-template.gif",mdxType:"Figure"},"Creating a project using a UI template"),(0,r.kt)("h2",m({},{id:"online-applications"}),"Online Applications"),(0,r.kt)("p",null,"Online Applications are out-of-the-box applications for specific hardware solutions and it is therefore not possible to run these on any other STM32 evaluation kit than the one it was created for (aside from the PC simulator). These examples are generally a lot larger and explore multiple different features of the TouchGFX framework and can also include sample integration with the hardware."),(0,r.kt)("p",null,"To create an application using an Online Application, first access these by clicking the 'Online Applications' tab in the top of the startup window. Click the card under the 'Online Application' label to show what applications are available. Click the application you want and press 'Select'. Finish by pressing 'Create' and either press 'Run Simulator' or 'Run Target' to see the application running."),(0,r.kt)("p",null,"An animation of these steps can be seen below:"),(0,r.kt)(a.Z,{imageSource:"/img/introduction/getting-started/online-application.gif",mdxType:"Figure"},"Creating a project using an online application"),(0,r.kt)(i.Z,{mdxType:"FurtherReading"},"To read more about how to create applications using examples, see the ",(0,r.kt)(o.Z,{to:"../designer-user-guide/startup-window",mdxType:"Link"},"Startup Window section.")))}x.isMDXComponent=!0}}]);