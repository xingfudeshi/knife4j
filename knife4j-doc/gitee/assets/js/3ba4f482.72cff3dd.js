"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5438],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),p=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.createElement(u.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),c=p(t),f=a,m=c["".concat(u,".").concat(f)]||c[f]||d[f]||o;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=f;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[c]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},85162:(e,n,t)=>{t.d(n,{Z:()=>i});var r=t(67294),a=t(86010);const o={tabItem:"tabItem_Ymn6"};function i(e){var n=e.children,t=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:t},n)}},65488:(e,n,t)=>{t.d(n,{Z:()=>d});var r=t(87462),a=t(67294),o=t(86010),i=t(72389),l=t(67392),u=t(7094),p=t(12466);const s={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function c(e){var n,t,i=e.lazy,c=e.block,d=e.defaultValue,f=e.values,m=e.groupId,g=e.className,b=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),v=null!=f?f:b.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),y=(0,l.l)(v,(function(e,n){return e.value===n.value}));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===d?d:null!=(n=null!=d?d:null==(t=b.find((function(e){return e.props.default})))?void 0:t.props.value)?n:b[0].props.value;if(null!==w&&!v.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+v.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var h=(0,u.U)(),x=h.tabGroupChoices,k=h.setTabGroupChoices,j=(0,a.useState)(w),O=j[0],I=j[1],E=[],N=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var S=x[m];null!=S&&S!==O&&v.some((function(e){return e.value===S}))&&I(S)}var T=function(e){var n=e.currentTarget,t=E.indexOf(n),r=v[t].value;r!==O&&(N(n),I(r),null!=m&&k(m,String(r)))},P=function(e){var n,t=null;switch(e.key){case"ArrowRight":var r,a=E.indexOf(e.currentTarget)+1;t=null!=(r=E[a])?r:E[0];break;case"ArrowLeft":var o,i=E.indexOf(e.currentTarget)-1;t=null!=(o=E[i])?o:E[E.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:(0,o.Z)("tabs-container",s.tabList)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":c},g)},v.map((function(e){var n=e.value,t=e.label,i=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return E.push(e)},onKeyDown:P,onFocus:T,onClick:T},i,{className:(0,o.Z)("tabs__item",s.tabItem,null==i?void 0:i.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),i?(0,a.cloneElement)(b.filter((function(e){return e.props.value===O}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function d(e){var n=(0,i.Z)();return a.createElement(c,(0,r.Z)({key:String(n)},e))}},99756:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>u,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>c});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),i=(t(65488),t(85162),["components"]),l={},u="Spring Webflux\u96c6\u6210",p={unversionedId:"middleware-sources/spring-webflux/spring-webflux-introduction",id:"middleware-sources/spring-webflux/spring-webflux-introduction",title:"Spring Webflux\u96c6\u6210",description:"Spring Webflux\u6a21\u5f0f\u4e0b\u7684Knife4j\u4ec5\u4ec5\u662fui\u5305\uff0c\u76ee\u524d\u6ca1\u6709\u63d0\u4f9bKnife4j\u7684\u589e\u5f3a\u529f\u80fd",source:"@site/docs/middleware-sources/spring-webflux/spring-webflux-introduction.mdx",sourceDirName:"middleware-sources/spring-webflux",slug:"/middleware-sources/spring-webflux/spring-webflux-introduction",permalink:"/docs/middleware-sources/spring-webflux/spring-webflux-introduction",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1678022183,formattedLastUpdatedAt:"2023\u5e743\u67085\u65e5",frontMatter:{},sidebar:"middleware-sources",previous:{title:"Spring Cloud Gateway\u7f51\u5173\u805a\u5408",permalink:"/docs/middleware-sources/spring-cloud-gateway/spring-gateway-introduction"},next:{title:"1.1 \u4ecb\u7ecd",permalink:"/docs/middleware-sources/aggregation-introduction"}},s={},c=[],d={toc:c},f="wrapper";function m(e){var n=e.components,t=(0,a.Z)(e,i);return(0,o.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"spring-webflux\u96c6\u6210"},"Spring Webflux\u96c6\u6210"),(0,o.kt)("admonition",{title:"\u6ce8\u610f\u4e8b\u9879",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"Spring Webflux\u6a21\u5f0f\u4e0b\u7684Knife4j\u4ec5\u4ec5\u662fui\u5305\uff0c\u76ee\u524d\u6ca1\u6709\u63d0\u4f9bKnife4j\u7684\u589e\u5f3a\u529f\u80fd")),(0,o.kt)("p",null,"\u5728\u76ee\u524dKnife4j\u7684\u7248\u672c\u4e2d\uff0c\u867d\u6ca1\u6709\u76f4\u63a5\u63d0\u4f9b\u5728Spring Webflux\u6846\u67b6\u4e0b\u7684\u96c6\u6210starter\u5305\uff0c\u4f46\u662f\u5f00\u53d1\u8005\u4f9d\u7136\u53ef\u4ee5\u4f7f\u7528Knife4j\u7684ui\u7ec4\u4ef6\uff0c\u8fd9\u5f97\u76ca\u4e8espringdoc-openapi\u9879\u76ee\u7684\u652f\u6301\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528\u65b9\u6cd5"),(0,o.kt)("p",null,"1\u3001\u9488\u5bf9\u5355\u4f53Spring Webflux\u9879\u76ee\uff0c\u5f00\u53d1\u8005\u9996\u5148\u9700\u8981\u5f15\u5165springdoc-openapi\u6a21\u5757\u7684jar\u5305\uff0cMaven\u5750\u6807\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Spring Boot < 3.0.0-M1 "',title:'"Spring',Boot:!0,"<":!0,"3.0.0-M1":!0,'"':!0},"<dependency>\n    <groupId>org.springdoc</groupId>\n    <artifactId>springdoc-openapi-webflux-ui</artifactId>\n    <version>1.6.14</version>\n</dependency>\n")),(0,o.kt)("p",null,"\u53c2\u8003demo\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-openapi3-spring-webflux-demo",target:"_blank",rel:"noopener"},"knife4j-openapi3-spring-webflux-demo")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u662fSpring Boot 3\uff0c\u90a3\u4e48Maven\u5750\u6807\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml",metastring:'title="Spring Boot >= 3.0.0-M1 "',title:'"Spring',Boot:!0,">":"","3.0.0-M1":!0,'"':!0},"<dependency>\n    <groupId>org.springdoc</groupId>\n    <artifactId>springdoc-openapi-starter-webflux-ui</artifactId>\n    <version>2.0.2</version>\n</dependency>\n")),(0,o.kt)("p",null,"\u53c2\u8003demo\uff1a",(0,o.kt)("a",{parentName:"p",href:"https://gitee.com/xiaoym/swagger-bootstrap-ui-demo/tree/master/knife4j-openapi3-spring-boot3-webflux-demo",target:"_blank",rel:"noopener"},"knife4j-openapi3-spring-boot3-webflux-demo")),(0,o.kt)("p",null,"2\u3001\u5f15\u5165Knife4j 4.0\u7248\u672c\u63d0\u4f9b\u7684OpenAPI3\u89c4\u8303\u7684ui\u7ec4\u4ef6\u5305\uff0cMaven\u5750\u6807\u5982\u4e0b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.github.xiaoymin</groupId>\n    <artifactId>knife4j-openapi3-ui</artifactId>\n    <version>4.0.0</version>\n</dependency>\n\n")))}m.isMDXComponent=!0}}]);