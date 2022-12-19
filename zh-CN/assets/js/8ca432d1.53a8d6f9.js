"use strict";(self.webpackChunktouchgfx_documentation=self.webpackChunktouchgfx_documentation||[]).push([[5232],{3905:function(e,t,i){i.d(t,{Zo:function(){return c},kt:function(){return h}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(i),g=r,h=p["".concat(s,".").concat(g)]||p[g]||d[g]||a;return i?n.createElement(h,o(o({ref:t},c),{},{components:i})):n.createElement(h,o({ref:t},c))}));function h(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,o=new Array(a);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var u=2;u<a;u++)o[u]=i[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,i)}g.displayName="MDXCreateElement"},44035:function(e,t,i){var n=i(67294),r=i(25026);t.Z=function(e){const t=e.noShadow||!1,i=e.width,a=e.height,o=(0,r.Z)(e.imageSource);return t?n.createElement("div",{class:"figure noshadow"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:i,height:a,src:o})),n.createElement("p",null,e.children)):n.createElement("div",{class:"figure"},n.createElement("a",{href:o,target:"_blank"},n.createElement("img",{width:i,height:a,src:o})),n.createElement("p",null,e.children))}},43470:function(e,t,i){i.r(t),i.d(t,{assets:function(){return v},contentTitle:function(){return h},default:function(){return b},frontMatter:function(){return g},metadata:function(){return m},toc:function(){return f}});var n=i(3905),r=i(44035),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,i)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,d=(e,t)=>{for(var i in t||(t={}))u.call(t,i)&&p(e,i,t[i]);if(s)for(var i of s(t))c.call(t,i)&&p(e,i,t[i]);return e};const g={id:"images-view",title:"Images View"},h=void 0,m={unversionedId:"development/ui-development/designer-user-guide/images-view",id:"development/ui-development/designer-user-guide/images-view",title:"Images View",description:"",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/development/ui-development/designer-user-guide/images-view.mdx",sourceDirName:"development/ui-development/designer-user-guide",slug:"/development/ui-development/designer-user-guide/images-view",permalink:"/4.16/zh-CN/docs/development/ui-development/designer-user-guide/images-view",draft:!1,tags:[],version:"current",frontMatter:{id:"images-view",title:"Images View"},sidebar:"docs",previous:{title:"Canvas View",permalink:"/4.16/zh-CN/docs/development/ui-development/designer-user-guide/canvas-view"},next:{title:"Texts View",permalink:"/4.16/zh-CN/docs/development/ui-development/designer-user-guide/texts-view"}},v={},f=[{value:"Tree View",id:"tree-view",level:2},{value:"Table View",id:"table-view",level:2},{value:"Properties View",id:"properties-view",level:2}],w={toc:f};function b(e){var t,i=e,{components:a}=i,p=((e,t)=>{var i={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&c.call(e,n)&&(i[n]=e[n]);return i})(i,["components"]);return(0,n.kt)("wrapper",(t=d(d({},w),p),o(t,l({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"The Images View is used to manage the images used in a TouchGFX application (located under the assets\\images folder). It includes 3 sections: the ",(0,n.kt)("a",d({parentName:"p"},{href:"#tree-view"}),"tree view")," (left side), the ",(0,n.kt)("a",d({parentName:"p"},{href:"#table-view"}),"table view")," (middle) and the ",(0,n.kt)("a",d({parentName:"p"},{href:"#properties-view"}),"properties view")," (right side)."),(0,n.kt)("p",null,"The default configuration values for an image can be changed in the ",(0,n.kt)("a",d({parentName:"p"},{href:"config-view#default-image-configuration"}),"Default Image Configuration")," in the ",(0,n.kt)("a",d({parentName:"p"},{href:"config-view"}),"Config View"),"."),(0,n.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-view.webp",mdxType:"Figure"},"Images view in TouchGFX Designer"),(0,n.kt)("h2",d({},{id:"tree-view"}),"Tree View"),(0,n.kt)("p",null,"The tree view provides an overview of the images and folders present in your application. The width of the tree view can be changed by dragging the grid-splitter thumb to suit your needs."),(0,n.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-tree-view.gif",mdxType:"Figure"},"The tree view in Images"),(0,n.kt)("p",null,"You can add images to the assets\\images folder by clicking the blue button with a plus icon or by dragging the images directly to the Designer from the File Explorer. Images added to the assets\\images folder will automatically show up in the Image Manager."),(0,n.kt)("p",null,"Clicking on a folder node will show the images in that folder in the table view (clicking on the root folder \u201cimages\u201d will show all images in the application, including images located in subfolders)."),(0,n.kt)("p",null,"Clicking on an image node will also show the other images under the same folder in the table view and select it such that its properties can be changed in the right side properties view."),(0,n.kt)("p",null,"Clicking the chevron next to a folder will collapse/expand the folder."),(0,n.kt)("p",null,"Clicking the x button while hovering over a node lets you delete that item from disk."),(0,n.kt)("h2",d({},{id:"table-view"}),"Table View"),(0,n.kt)("p",null,"The table view shows a list of the images located under the currently selected folder and contains different columns corresponding to different properties for an image. Clicking the header of a column sorts the list either ascending or descending."),(0,n.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-table-view.webp",mdxType:"Figure"},"The table view in Images"),(0,n.kt)("p",null,"The Image column contains a preview of the image. Hovering over the image preview will show the preview in full size. Clicking the preview will open the image in the default application associated with .png images (for example paint.net)."),(0,n.kt)("p",null,"Clicking a row will select the image such that its properties can be changed in the right side properties view."),(0,n.kt)("p",null,"When the value of a cell is grayed out, it means that the default value is used. When an explicit value has been set on an image, the cell will light up, as seen in the image above, where the image 'menu_demo_screen_05.png' has had its default Image Format value changed to ARGB8888."),(0,n.kt)("h2",d({},{id:"properties-view"}),"Properties View"),(0,n.kt)("p",null,"The properties view is used to change the properties of an image. It includes an image preview at the top, which, like the preview in the table view, will show a full size version if you hover over it, and will also open up the default application associated with .png files when clicked."),(0,n.kt)(r.Z,{imageSource:"/img/development/ui-development/designer-user-guide/images-view/designer-images-properties-view.gif",mdxType:"Figure"},"The properties view in Images"),(0,n.kt)("p",null,"The different properties all have a default value. When no explicit value has been set on a property, the default value is shown in a grayed out manner in the selection boxes. When an explicit value is set, the value is shown in a lit up matter as shown below."),(0,n.kt)("p",null,"Pressing the Reset button will remove the current value and reset it back to its default value. When an explicit value has been set, changing the default value will not have an impact on that specific property."))}b.isMDXComponent=!0}}]);