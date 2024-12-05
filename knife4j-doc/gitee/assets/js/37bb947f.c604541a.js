"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9445],{3905:(t,e,n)=>{n.d(e,{Zo:()=>g,kt:()=>s});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),d=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},g=function(t){var e=d(t.components);return a.createElement(o.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,g=p(t,["components","mdxType","originalType","parentName"]),u=d(n),k=r,s=u["".concat(o,".").concat(k)]||u[k]||m[k]||l;return n?a.createElement(s,i(i({ref:e},g),{},{components:n})):a.createElement(s,i({ref:e},g))}));function s(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[u]="string"==typeof t?t:r,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},11897:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>g,contentTitle:()=>o,default:()=>s,frontMatter:()=>p,metadata:()=>d,toc:()=>u});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],p={id:"start-knife4j-version",title:"Knife4j\u7248\u672c\u53c2\u8003",description:"Knife4j\u9002\u914dSpring Boot\u7248\u672c"},o=void 0,d={unversionedId:"quick-start/start-knife4j-version",id:"quick-start/start-knife4j-version",title:"Knife4j\u7248\u672c\u53c2\u8003",description:"Knife4j\u9002\u914dSpring Boot\u7248\u672c",source:"@site/docs/quick-start/start-knife4j-version.mdx",sourceDirName:"quick-start",slug:"/quick-start/start-knife4j-version",permalink:"/docs/quick-start/start-knife4j-version",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1691914117,formattedLastUpdatedAt:"2023\u5e748\u670813\u65e5",frontMatter:{id:"start-knife4j-version",title:"Knife4j\u7248\u672c\u53c2\u8003",description:"Knife4j\u9002\u914dSpring Boot\u7248\u672c"},sidebar:"docs",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/docs/quick-start/"},next:{title:"\u5982\u4f55\u8d21\u732e\u6587\u6863",permalink:"/docs/community/joinus"}},g={},u=[{value:"1.\u524d\u4e16\u4eca\u751f",id:"1\u524d\u4e16\u4eca\u751f",level:2},{value:"2.Spring Boot\u7248\u672c\u517c\u5bb9\u6027",id:"2spring-boot\u7248\u672c\u517c\u5bb9\u6027",level:2},{value:"2.1 Spring Boot 2.x",id:"21-spring-boot-2x",level:3},{value:"2.1.1 Swagger2\u89c4\u8303",id:"211-swagger2\u89c4\u8303",level:4},{value:"2.1.2 OpenAPI3\u89c4\u8303",id:"212-openapi3\u89c4\u8303",level:4},{value:"2.2 Spring Boot 3.x",id:"22-spring-boot-3x",level:3},{value:"3.\u89c4\u8303\u8bf4\u660e",id:"3\u89c4\u8303\u8bf4\u660e",level:2},{value:"4.\u7f51\u5173\u805a\u5408",id:"4\u7f51\u5173\u805a\u5408",level:2},{value:"5.\u6700\u540e",id:"5\u6700\u540e",level:2}],m={toc:u},k="wrapper";function s(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)(k,(0,a.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u5173\u4e8eKnife4j\u9002\u914d\u4e0d\u540cSpring Boot\u7248\u672c\u7684\u8bf4\u660e\u6587\u6863"),(0,l.kt)("admonition",{title:"\u7248\u672c\u89c4\u8303\u8bf4\u660e",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u672c\u6587\u6863\u65e8\u5728\u5e2e\u52a9\u5f00\u53d1\u8005\u9009\u62e9\u9002\u5408\u5176\u9879\u76ee\u7684Knife4j\u7248\u672c\u4e0eSpring Boot\u7248\u672c\u7684\u9002\u914d\u3002\u8bf7\u6839\u636e\u60a8\u7684\u9879\u76ee\u8981\u6c42\u548c\u4f7f\u7528\u7684Spring Boot\u7248\u672c\u9009\u62e9\u9002\u5f53\u7684Knife4j\u7248\u672c\u3002")),(0,l.kt)("h2",{id:"1\u524d\u4e16\u4eca\u751f"},"1.\u524d\u4e16\u4eca\u751f"),(0,l.kt)("p",null,"\u5728\u66f4\u540d\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Knife4j"),"\u4e4b\u524d,\u539f\u6765\u7684\u540d\u79f0\u662f\u53eb",(0,l.kt)("inlineCode",{parentName:"p"},"swagger-bootstrap-ui"),"\uff0c\u8fd9\u662f\u4e24\u79cd\u4e0d\u4e00\u6837\u98ce\u683c\u7684Ui,\u5bf9\u6bd4\u60c5\u51b5\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,l.kt)("th",{parentName:"tr",align:null},"\u5f00\u53d1\u8bed\u8a00&\u6846\u67b6"),(0,l.kt)("th",{parentName:"tr",align:null},"\u72b6\u6001"),(0,l.kt)("th",{parentName:"tr",align:null},"\u6700\u540e\u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u98ce\u683c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Knife4j"),(0,l.kt)("td",{parentName:"tr",align:null},"Java\u3001JavaScript\u3001Vue"),(0,l.kt)("td",{parentName:"tr",align:null},"\u6301\u7eed\u66f4\u65b0\u4e2d..."),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u9ed1\u8272")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"swagger-bootstrap-ui"),(0,l.kt)("td",{parentName:"tr",align:null},"Java\u3001JavaScript\u3001jQuery"),(0,l.kt)("td",{parentName:"tr",align:null},"\u505c\u66f4"),(0,l.kt)("td",{parentName:"tr",align:null},"1.9.6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u84dd\u8272")))),(0,l.kt)("p",null,"Knife4j\u4ece\u5f00\u6e90\u81f3\u4eca,\u76ee\u524d\u4e3b\u8981\u7ecf\u5386\u7248\u672c\u7684\u53d8\u5316\uff0c\u5206\u522b\u5982\u4e0b\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"\u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.0~1.9.6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u540d\u79f0\u662f\u53eb",(0,l.kt)("inlineCode",{parentName:"td"},"swagger-bootstrap-ui"),",\u84dd\u8272\u98ce\u683cUi")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.9.6"),(0,l.kt)("td",{parentName:"tr",align:null},"\u84dd\u8272\u76ae\u80a4\u98ce\u683c,\u5f00\u59cb\u66f4\u540d\uff0c\u589e\u52a0\u66f4\u591a\u540e\u7aef\u6a21\u5757")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2.0~2.0.5"),(0,l.kt)("td",{parentName:"tr",align:null},"Ui\u57fa\u4e8eVue2.0+AntdV\u91cd\u5199,\u9ed1\u8272\u98ce\u683c,\u53c2\u8003",(0,l.kt)("a",{parentName:"td",href:"https://doc.xiaominfo.com/demo/doc.html",target:null,rel:null},"\u793a\u4f8b"),"\uff0c\u5e95\u5c42\u4f9d\u8d56\u7684springfox\u6846\u67b6\u7248\u672c\u662f2.9.2,\u4ec5\u63d0\u4f9bSwagger2\u89c4\u8303\u7684\u9002\u914d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2.0.6~2.0.9"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e95\u5c42springfox\u6846\u67b6\u7248\u672c\u5347\u7ea7\u77e52.10.5,,\u4ec5\u63d0\u4f9bSwagger2\u89c4\u8303\u7684\u9002\u914d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3.0~3.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u5e95\u5c42\u4f9d\u8d56springfox\u6846\u67b6\u7248\u672c\u5347\u7ea7\u81f33.0.3,OpenAPI\u89c4\u8303\u662fv3,\u8fc7\u5ea6\u7248\u672c\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u5efa\u8bae\u5f00\u53d1\u8005\u4e0d\u8981\u4f7f\u7528"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4.0~"),(0,l.kt)("td",{parentName:"tr",align:null},"\u533a\u5206OpenAPI2\u548cSwagger3\u7684Maven\u5750\u6807artifactId",(0,l.kt)("br",null)," OpenAPI2\u89c4\u8303\u670d\u52a1\u7aef\u89e3\u6790\u6846\u67b6\u7a33\u5b9a\u5728springfox2.10.5",(0,l.kt)("br",null),"OpenAPI3\u6846\u67b6\u670d\u52a1\u7aef\u89e3\u6790\u8ddf\u968fspringdoc\u9879\u76ee\u66f4\u65b0\u8fed\u4ee3",(0,l.kt)("br",null),(0,l.kt)("strong",{parentName:"td"},"\u5efa\u8bae\u5f00\u53d1\u8005\u4f7f\u7528\u8be5\u7248\u672c"),",\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"td",href:"/docs/upgrading/upgrading-to-v4",target:null,rel:null},"4.x\u5347\u7ea7\u6587\u6863"))))),(0,l.kt)("h2",{id:"2spring-boot\u7248\u672c\u517c\u5bb9\u6027"},"2.Spring Boot\u7248\u672c\u517c\u5bb9\u6027"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u786e\u4fdd\u60a8\u4e86\u89e3\u60a8\u7684\u9879\u76ee\u6240\u4f7f\u7528\u7684Spring Boot\u7248\u672c\u3002"),(0,l.kt)("p",null,"\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5e38\u89c1\u7684Spring Boot\u7248\u672c\u53ca\u5176\u5bf9\u5e94\u7684Knife4j\u7248\u672c\u517c\u5bb9\u63a8\u8350\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Spring Boot\u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"Knife4j Swagger2\u89c4\u8303"),(0,l.kt)("th",{parentName:"tr",align:null},"Knife4j OpenAPI3\u89c4\u8303"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.5.x~2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},"<Knife4j 2.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},">=Knife4j 4.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2.0~2.2"),(0,l.kt)("td",{parentName:"tr",align:null},"Knife4j 2.0.0 ~ 2.0.6"),(0,l.kt)("td",{parentName:"tr",align:null},">=Knife4j 4.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2.2.x~2.4.0"),(0,l.kt)("td",{parentName:"tr",align:null},"Knife4j 2.0.6 ~ 2.0.9"),(0,l.kt)("td",{parentName:"tr",align:null},">=Knife4j 4.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2.4.0~2.7.x"),(0,l.kt)("td",{parentName:"tr",align:null},">=Knife4j 4.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},">=Knife4j 4.0.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">= 3.0"),(0,l.kt)("td",{parentName:"tr",align:null},">=Knife4j 4.0.0"),(0,l.kt)("td",{parentName:"tr",align:null},">=Knife4j 4.0.0")))),(0,l.kt)("p",null,"Knife4j\u5728\u4e4b\u524d\u7684\u7248\u672c\u66f4\u65b0\u4e2d\uff0c\u9010\u6e10\u63d0\u4f9b\u4e86\u4e00\u4e9b\u670d\u52a1\u7aef\u9002\u914d\u7684\u589e\u5f3a\u7279\u6027\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u4f46\u662f\u5f00\u53d1\u8005\u5e94\u8be5\u660e\u767d\uff0c\u4e0d\u7ba1\u662fSwagger2\u89c4\u8303\u8fd8\u662fOpenAPI3\u89c4\u8303\uff0cKnife4j\u7684\u6700\u65b0\u7248\u672c\u7684\u7eafUi\u7248\u672c\uff0c\u662f\u53ef\u4ee5\u9002\u914dSpring Boot\u6240\u6709\u7248\u672c\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u4e0d\u8003\u8651\u4f7f\u7528Knife4j\u63d0\u4f9b\u7684\u670d\u52a1\u7aef\u589e\u5f3a\u529f\u80fd\uff0c\u5f15\u5165Knife4j\u7684\u7eafUi\u7248\u672c\u6ca1\u6709\u4efb\u4f55\u9650\u5236\u3002\u53ea\u9700\u8981\u8003\u8651\u4e0d\u540c\u7684\u89c4\u8303\u5373\u53ef")),(0,l.kt)("h3",{id:"21-spring-boot-2x"},"2.1 Spring Boot 2.x"),(0,l.kt)("p",null,"\u5728Knife4j\u76844.0\u7248\u672c\u4e4b\u524d\uff0c\u5f00\u53d1\u8005\u5f15\u7528\u7684\u65b9\u5f0f\u662f\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"knife4j-spring-boot-starter"),"\u8fdb\u884c\u4f7f\u7528\uff0c\u4f46\u662f\u57284.0\u7248\u672c\u4e4b\u540e\uff0c\u5f00\u53d1\u8005\u5728\u5f15\u7528\u65f6\u9700\u8981\u5bf9\u9009\u62e9\u4e0d\u540c\u7684\u89c4\u8303\u7248\u672c\u8fdb\u884c\u533a\u5206"),(0,l.kt)("p",null,"Knife4j\u5728\u7ec4\u4ef6\u4e2d\u9488\u5bf9\u4e0d\u540c\u7684\u89c4\u8303\u7248\u672c\u505a\u4e86\u533a\u5206\uff0cmaven\u7ec4\u4ef6\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"artifactId"),"\u5df2\u7ecf\u53d1\u751f\u4e86\u53d8\u5316\u3002"),(0,l.kt)("h4",{id:"211-swagger2\u89c4\u8303"},"2.1.1 Swagger2\u89c4\u8303"),(0,l.kt)("p",null,"\u57284.0\u7248\u672c\u4e4b\u524d\uff0c\u5e94\u7528\u5750\u6807\uff1a"),(0,l.kt)("p",null,"\u5f15\u7528\u7ec4\u4ef6maven\u5750\u6807\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.github.xingfudeshi</groupId>\n    <artifactId>knife4j-spring-boot-starter</artifactId>\n    <version>{<4.0.0\u7248\u672c}</version>\n</dependency>\n")),(0,l.kt)("p",null,"\u81ea4.0\u7248\u672c\u5f00\u59cb\uff0cmaven\u7ec4\u4ef6\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"artifactId"),"\u5df2\u7ecf\u53d1\u751f\u4e86\u53d8\u5316\u3002"),(0,l.kt)("p",null,"\u5f15\u7528\u7ec4\u4ef6maven\u5750\u6807\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.github.xingfudeshi</groupId>\n    <artifactId>knife4j-openapi2-spring-boot-starter</artifactId>\n    <version>{maven\u4ed3\u5e93\u6700\u65b0\u7248\u672c}</version>\n</dependency>\n")),(0,l.kt)("h4",{id:"212-openapi3\u89c4\u8303"},"2.1.2 OpenAPI3\u89c4\u8303"),(0,l.kt)("p",null,"\u81ea4.0\u7248\u672c\u5f00\u59cb\uff0cKnife4j\u63d0\u4f9b\u5bf9OpenAPI3\u89c4\u8303\u7684\u9002\u914d\uff0c\u5e95\u5c42\u89c4\u8303\u89e3\u6790\u6846\u67b6\u4f9d\u8d56",(0,l.kt)("a",{parentName:"p",href:"https://github.com/springdoc/springdoc-openapi",target:"_blank",rel:"noopener"},"springdoc-openapi"),"\u9879\u76ee"),(0,l.kt)("p",null,"\u5f15\u7528\u7ec4\u4ef6maven\u5750\u6807\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.github.xingfudeshi</groupId>\n    <artifactId>knife4j-openapi3-spring-boot-starter</artifactId>\n    <version>{maven\u4ed3\u5e93\u6700\u65b0\u7248\u672c}</version>\n</dependency>\n")),(0,l.kt)("h3",{id:"22-spring-boot-3x"},"2.2 Spring Boot 3.x"),(0,l.kt)("p",null,"\u7531\u4e8espringfox\u957f\u4e45\u672a\u66f4\u65b0\uff0c\u5e76\u4e14Swagger2\u89c4\u8303\u5728\u76ee\u524d\u6765\u770b\uff0c\u4e00\u5b9a\u7a0b\u5ea6\u4e0a\u4e5f\u5e76\u672a\u5347\u7ea7\uff0c\u89c4\u8303\u5df2\u7ecf\u5168\u90e8\u5f80OpenAPI3\u89c4\u8303\u9760\u62e2\uff0c\u56e0\u6b64\uff0c\u5728Spring Boot 3.x\u7248\u672c\u4e2d\uff0c\u5f00\u53d1\u8005\u5e94\u8be5\u9009\u62e9OpenAPI3\u89c4\u8303\u6765\u4f5c\u4e3a\u5e94\u7528\u6846\u67b6\u7684\u5f00\u53d1\u9996\u9009\u65b9\u6848\u3002"),(0,l.kt)("p",null,"Knife4j\u81ea",(0,l.kt)("a",{parentName:"p",href:"/docs/upgrading/upgrading-to-v4",target:null,rel:null},"4.0\u7248\u672c"),"\u4e3aSpring Boot 3\u6846\u67b6\u63d0\u4f9b\u4e86\u9002\u914d"),(0,l.kt)("p",null,"\u5f15\u7528\u7ec4\u4ef6maven\u5750\u6807\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.github.xingfudeshi</groupId>\n    <artifactId>knife4j-openapi3-jakarta-spring-boot-starter</artifactId>\n    <version>{maven\u4ed3\u5e93\u6700\u65b0\u7248\u672c}</version>\n</dependency>\n")),(0,l.kt)("h2",{id:"3\u89c4\u8303\u8bf4\u660e"},"3.\u89c4\u8303\u8bf4\u660e"),(0,l.kt)("p",null,"\u9488\u5bf9",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/2.0.md",target:"_blank",rel:"noopener"},"Swagger2\u89c4\u8303"),"\u548c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/OAI/OpenAPI-Specification/blob/main/versions/3.1.0.md",target:"_blank",rel:"noopener"},"OpenAPI3\u89c4\u8303"),"\u7684\u8bf4\u660e\uff1a"),(0,l.kt)("admonition",{title:"\u670d\u52a1\u7aef\u89c4\u8303\u89e3\u6790\u8bf4\u660e",type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5728Spring Boot\u6846\u67b6\u4e2d,Knife4j\u5bf9\u4e8e\u670d\u52a1\u7aef\u5c06Spring\u7684\u5f00\u653e\u63a5\u53e3\u89e3\u6790\u6210Swagger2\u6216\u8005OpenAPI3\u89c4\u8303\u7684\u6846\u67b6\uff0c\u4e5f\u662f\u4f9d\u8d56\u7684\u7b2c\u4e09\u65b9\u6846\u67b6\u7ec4\u4ef6\u3002\u8bf4\u660e\u5982\u4e0b\uff1a"),(0,l.kt)("ul",{parentName:"admonition"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"Swagger2\u89c4\u8303"),"\uff1a\u4f9d\u8d56",(0,l.kt)("a",{parentName:"li",href:"https://github.com/springfox/springfox",target:"_blank",rel:"noopener"},"Springfox"),"\u9879\u76ee\uff0c\u8be5\u9879\u76ee\u76ee\u524d\u51e0\u4e4e\u5904\u4e8e\u505c\u66f4\u72b6\u6001\uff0c\u4f46\u5f88\u591a\u8001\u9879\u76ee\u4f9d\u7136\u4f7f\u7528\u7684\u662f\u8be5\u89c4\u8303\uff0c\u6240\u4ee5Knife4j\u5728\u66f4\u65b0\u524d\u7aefUi\u7684\u540c\u65f6\u4e5f\u7ee7\u7eed\u4fdd\u6301\u4e86\u517c\u5bb9"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("strong",{parentName:"li"},"OpenAPI3\u89c4\u8303"),"\uff1a\u4f9d\u8d56",(0,l.kt)("a",{parentName:"li",href:"https://github.com/springdoc/springdoc-openapi",target:"_blank",rel:"noopener"},"Springdoc"),"\u9879\u76ee\uff0c\u66f4\u65b0\u53d1\u7248\u9891\u7387\u975e\u5e38\u5feb\uff0c\u5efa\u8bae\u5f00\u53d1\u8005\u5c3d\u5feb\u8fc1\u79fb\u8fc7\u6765\u4f7f\u7528OpenAPI3\u89c4\u8303,Knife4j\u540e\u9762\u7684\u91cd\u5fc3\u4e5f\u4f1a\u5728\u8fd9\u91cc\u3002"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Knife4j\u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"Swagger2\u89c4\u8303"),(0,l.kt)("th",{parentName:"tr",align:null},"OpenAPI3\u89c4\u8303"),(0,l.kt)("th",{parentName:"tr",align:null},"\u8bf4\u660e"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.0~1.9.6"),(0,l.kt)("td",{parentName:"tr",align:null},"springfox 2.9.2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"Knife4j\u7684\u524d\u8eab\uff0c\u540d\u79f0\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"swagger-bootstrap-ui"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"1.9.6~2.0.5"),(0,l.kt)("td",{parentName:"tr",align:null},"springfox 2.9.2"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"2.0.6~2.0.9"),(0,l.kt)("td",{parentName:"tr",align:null},"springfox 2.10.5"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"3.0.0~3.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},"springfox 3.0.3"),(0,l.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,l.kt)("td",{parentName:"tr",align:null},"\u8fc7\u5ea6\u7248\u672c\uff0c",(0,l.kt)("strong",{parentName:"td"},"\u5efa\u8bae\u5f00\u53d1\u8005\u4e0d\u8981\u4f7f\u7528"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"4.0.0~"),(0,l.kt)("td",{parentName:"tr",align:null},"springfox 2.10.5"),(0,l.kt)("td",{parentName:"tr",align:null},">=springdoc-openapi 1.6.9"),(0,l.kt)("td",{parentName:"tr",align:null},"Swagger2\u89c4\u8303\u7a33\u5b9a\u4f7f\u7528springfox2.10.5\u4fdd\u6301\u4e0d\u53d8\u3002\u5f00\u53d1\u8005\u5e94\u8be5\u5c3d\u65e9\u8fc1\u79fb\u5230OpenAPI3\u89c4\u8303\u4e0a\u6765,\u8bf7\u53c2\u8003",(0,l.kt)("a",{parentName:"td",href:"/docs/upgrading/upgrading-to-v4",target:null,rel:null},"4.x\u5347\u7ea7\u6587\u6863"))))),(0,l.kt)("h2",{id:"4\u7f51\u5173\u805a\u5408"},"4.\u7f51\u5173\u805a\u5408"),(0,l.kt)("p",null,"\u81ea4.0\u7248\u672c\u540e,Knife4j\u63d0\u4f9b\u4e86\u4e00\u4e2a\u9488\u5bf9\u5728Spring Cloud Gateway\u7f51\u5173\u8fdb\u884c\u805a\u5408\u7684\u7ec4\u4ef6",(0,l.kt)("a",{parentName:"p",href:"/docs/middleware-sources/spring-cloud-gateway/spring-gateway-introduction",target:null,rel:null},"knife4j-gateway"),"\uff0c\u5f00\u53d1\u8005\u53ef\u4ee5\u57fa\u4e8e\u6b64\u7ec4\u4ef6\u8f7b\u677e\u7684\u805a\u5408\u5404\u4e2a\u5b50\u670d\u52a1\u7684OpenAPI\u6587\u6863"),(0,l.kt)("p",null,"Maven\u5750\u6807\u5982\u4e0b\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.github.xingfudeshi</groupId>\n    <artifactId>knife4j-gateway-spring-boot-starter</artifactId>\n    <version>{\u5927\u4e8e4.0.0\u7248\u672c}</version>\n</dependency>\n")),(0,l.kt)("p",null,"\u7531\u4e8e\u5f00\u53d1\u7f51\u5173\u805a\u5408\u7ec4\u4ef6\u65f6\uff0cKnife4j\u6240\u5f15\u7528\u7684Spring Cloud Gateway\u7684\u4f9d\u8d56\u5168\u90e8\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"Optional"),"\u7c7b\u578b\uff0c\u5e38\u89c4\u64cd\u4f5c\u4e0b\uff0c\u5f00\u53d1\u8005\u5e94\u8be5\u662f\u5728Gateway\u7684\u4efb\u610f\u7248\u672c\u4e2d\u90fd\u80fd\u4f7f\u7528\uff0c\u4f46\u8fd8\u662f\u7ed9\u51fa\u6700\u4f4e\u7684\u63a8\u8350\u7248\u672c\u914d\u7f6e\uff1a"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Spring Boot\u7248\u672c"),(0,l.kt)("th",{parentName:"tr",align:null},"Knife4j Gateway\u7f51\u5173\u805a\u5408\u7248\u672c"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},">=2.4.8~3.x"),(0,l.kt)("td",{parentName:"tr",align:null},">=4.0.0")))),(0,l.kt)("h2",{id:"5\u6700\u540e"},"5.\u6700\u540e"),(0,l.kt)("p",null,"\u5982\u679c\u60a8\u5728\u9009\u62e9\u4f7f\u7528Knife4j\u7684\u7248\u672c\u8fc7\u7a0b\u4e2d\u4ecd\u7136\u5b58\u5728\u7591\u60d1\uff0c\u53ef\u4ee5\u901a\u8fc7\u5173\u6ce8\u6587\u6863\u5e95\u90e8\u7684\u5fae\u4fe1\u516c\u4f17\u53f7\uff0c\u70b9\u51fb\u83dc\u5355\u52a0\u5165\u5fae\u4fe1\u4ea4\u6d41\u7fa4\uff0c\u4e0e\u4f5c\u8005\u5f53\u9762\u5bf9\u8bdd\u3002"))}s.isMDXComponent=!0}}]);
