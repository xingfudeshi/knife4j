"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7290],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>E});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=r,E=s["".concat(p,".").concat(m)]||s[m]||d[m]||o;return t?a.createElement(E,i(i({ref:n},u),{},{components:t})):a.createElement(E,i({ref:n},u))}));function E(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},2901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>p,default:()=>E,frontMatter:()=>l,metadata:()=>c,toc:()=>s});var a=t(87462),r=t(63366),o=(t(67294),t(3905)),i=["components"],l={},p="3.3 \u5f00\u653eAPI",c={unversionedId:"middleware-sources/cloud-openapi",id:"middleware-sources/cloud-openapi",title:"3.3 \u5f00\u653eAPI",description:"Knife4jCloud\u5e73\u53f0\u5bf9\u5916\u63d0\u4f9b\u6ce8\u518cSwagger\u670d\u52a1\u7684\u5f00\u653eAPI\u63a5\u53e3,\u901a\u8fc7\u8be5\u63a5\u53e3,\u975eJava\u8bed\u8a00\u7684\u5f00\u53d1\u8005,\u53ef\u4ee5\u8fdb\u884c\u72ec\u7acb\u5f00\u53d1,\u505a\u5230Swagger\u6587\u6863\u7684\u9879\u76ee\u81ea\u542f\u52a8\u6ce8\u5165\u5e73\u53f0",source:"@site/docs/middleware-sources/cloud-openapi.md",sourceDirName:"middleware-sources",slug:"/middleware-sources/cloud-openapi",permalink:"/docs/middleware-sources/cloud-openapi",draft:!1,tags:[],version:"current",lastUpdatedBy:"xiaoyumin",lastUpdatedAt:1660471539,formattedLastUpdatedAt:"2022\u5e748\u670814\u65e5",frontMatter:{}},u={},s=[{value:"3.3.1 \u6ce8\u518cAPI",id:"331-\u6ce8\u518capi",level:2},{value:"3.3.2 Spring Boot\u81ea\u52a8\u6ce8\u518c",id:"332-spring-boot\u81ea\u52a8\u6ce8\u518c",level:2}],d={toc:s},m="wrapper";function E(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.kt)(m,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"33-\u5f00\u653eapi"},"3.3 \u5f00\u653eAPI"),(0,o.kt)("p",null,"Knife4jCloud\u5e73\u53f0\u5bf9\u5916\u63d0\u4f9b\u6ce8\u518cSwagger\u670d\u52a1\u7684\u5f00\u653eAPI\u63a5\u53e3,\u901a\u8fc7\u8be5\u63a5\u53e3,\u975eJava\u8bed\u8a00\u7684\u5f00\u53d1\u8005,\u53ef\u4ee5\u8fdb\u884c\u72ec\u7acb\u5f00\u53d1,\u505a\u5230Swagger\u6587\u6863\u7684\u9879\u76ee\u81ea\u542f\u52a8\u6ce8\u5165\u5e73\u53f0"),(0,o.kt)("h2",{id:"331-\u6ce8\u518capi"},"3.3.1 \u6ce8\u518cAPI"),(0,o.kt)("p",null,"\u63a5\u53e3\u5730\u5740\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"/knife4j/cloud/upload")),(0,o.kt)("p",null,"\u63a5\u53e3\u7c7b\u578b\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"application/json")),(0,o.kt)("p",null,"\u63a5\u53e3\u65b9\u5f0f\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"POST")),(0,o.kt)("p",null,"\u63a5\u53e3\u53c2\u6570\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "accessKey":"JDUkd1YvSi5zZmUkMHYuSGNmN1hMazJPajJuMjNJVW43dWNyL2tyR3N4bzJaa1A2ZC5mSUlwNA",\n    "code":"APIFactory",\n    "applicationHost":"192.168.0.152",\n    "applicationPort":"9200",\n    "ssl":false,\n    "client":"",\n    "cloudRoutes":[{\n        "groupName":"\u8ba2\u5355\u670d\u52a1",\n        "content":"{....}",\n        "path":"/aaa/v2/api-docs?group=\u8ba2\u5355\u670d\u52a1"\n    }]\n}\n')),(0,o.kt)("p",null,"\u53c2\u6570\u8bf4\u660e\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"accessKey"),":\u8be5\u53c2\u6570\u662f\u6ce8\u518cAPI\u63a5\u53e3\u7684\u8ba4\u8bc1\u51ed\u8bc1,\u6bcf\u4e00\u4e2a\u6ce8\u518c\u7528\u6237\u62e5\u6709\u81ea\u5df1\u72ec\u7acb\u7684accessKey,\u5e73\u53f0\u6ce8\u518c\u6210\u529f\u540e\u53ef\u4ee5\u5728\u53f3\u4e0a\u89d2\u901a\u8fc7",(0,o.kt)("strong",{parentName:"li"},"\u4e2a\u4eba\u4fe1\u606f"),"\u4e2d\u83b7\u53d6"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"code"),":\u9879\u76ee\u7f16\u7801,\u5982\u679c\u5728\u5e73\u53f0\u4e2d\u4e0d\u5b58\u5728,\u5219\u6ce8\u518c\u4e0d\u4f1a\u6210\u529f,\u56e0\u6b64\u9700\u8981\u5148\u5728\u5e73\u53f0\u4e2d\u6dfb\u52a0\u9879\u76ee"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"applicationHost"),":\u5f53\u524d\u5e94\u7528\u670d\u52a1\u7684IP\u5730\u5740,\u8be5\u53c2\u6570\u4e3b\u8981\u4f5c\u7528\u4e8eSwagger\u8c03\u8bd5"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"applicationPort"),"\uff1a\u5f53\u524d\u5e94\u7528\u670d\u52a1\u7684\u7aef\u53e3\u53f7"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"ssl"),":\u9ed8\u8ba4false,\u5982\u679c\u662ftrue,\u5219\u4ee3\u8868\u5f53\u524d\u670d\u52a1\u662fhttps"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"client"),":\u914d\u7f6e\u4e00\u4e2a\u5e94\u7528\u670d\u52a1\u7684Client\u5730\u5740,\u4e00\u822c\u662fhttp://host:port,Knife4j\u4f1a\u81ea\u52a8\u8bc6\u522b,\u5982\u679c\u5f00\u53d1\u8005\u63d0\u4f9b\u7684\u662f\u57df\u540d\u8bbf\u95ee,\u9632\u706b\u5899\u5c4f\u853d\u4e86\u7aef\u53e3\u53f7(\u4f8b\u5982\uff1a",(0,o.kt)("a",{parentName:"li",href:"http://doc.xiaominfo.com),%E5%88%99%E5%BC%80%E5%8F%91%E8%80%85%E5%9C%A8%E4%B8%8A%E4%BC%A0%E7%9A%84%E6%97%B6%E5%80%99%E9%9C%80%E8%A6%81%E8%AE%BE%E7%BD%AE%E8%AF%A5%E5%B1%9E%E6%80%A7,%E5%90%A6%E5%88%99%E6%97%A0%E6%B3%95%E8%B0%83%E8%AF%95,%E8%AF%A5%E5%8F%82%E6%95%B0%E8%AE%BE%E7%BD%AE%E5%90%8E%E5%88%99Host%E3%80%81Port%E4%B8%8D%E4%BC%9A%E7%94%9F%E6%95%88,%E4%BC%9A%E6%A0%B9%E6%8D%AE%E8%AF%A5%E5%9C%B0%E5%9D%80%E8%87%AA%E5%8A%A8%E8%A7%A3%E6%9E%90%E5%BE%97%E5%88%B0host%E5%92%8C%E7%AB%AF%E5%8F%A3,%E6%89%80%E4%BB%A5%E4%B8%A4%E4%B8%AA%E5%B1%9E%E6%80%A7%E9%85%8D%E7%BD%AE%E5%85%B6%E4%B8%AD%E4%B8%80%E4%B8%AA%E5%8D%B3%E5%8F%AF",target:"_blank",rel:"noopener"},"http://doc.xiaominfo.com),\u5219\u5f00\u53d1\u8005\u5728\u4e0a\u4f20\u7684\u65f6\u5019\u9700\u8981\u8bbe\u7f6e\u8be5\u5c5e\u6027,\u5426\u5219\u65e0\u6cd5\u8c03\u8bd5,\u8be5\u53c2\u6570\u8bbe\u7f6e\u540e\u5219Host\u3001Port\u4e0d\u4f1a\u751f\u6548,\u4f1a\u6839\u636e\u8be5\u5730\u5740\u81ea\u52a8\u89e3\u6790\u5f97\u5230host\u548c\u7aef\u53e3,\u6240\u4ee5\u4e24\u4e2a\u5c5e\u6027\u914d\u7f6e\u5176\u4e2d\u4e00\u4e2a\u5373\u53ef"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"cloudRoutes"),":\u670d\u52a1\u5206\u7ec4",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"groupName"),":\u670d\u52a1\u540d\u79f0"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"content"),":\u8be5\u5185\u5bb9\u662fOpenAPIv2\u7684JSON\u7ed3\u6784"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path"),":\u63d0\u4f9b\u8bbf\u95ee\u5f97\u5230OpenAPIv2\u7684\u63a5\u53e3\u5730\u5740,\u5728\u5b9e\u9645\u9884\u89c8\u7684\u65f6\u5019,\u4f1a\u901a\u8fc7\u8be5\u63a5\u53e3\u5f97\u5230Swagger\u7684JSON\u5185\u5bb9\u8fdb\u884c\u6e32\u67d3")))),(0,o.kt)("h2",{id:"332-spring-boot\u81ea\u52a8\u6ce8\u518c"},"3.3.2 Spring Boot\u81ea\u52a8\u6ce8\u518c"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684\u9879\u76ee\u662f\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"Spring Boot"),"\u8fdb\u884c\u5f00\u53d1,\u5e76\u4e14\u4e0d\u60f3\u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"p"},"Knife4jCloud"),"\u63d0\u4f9b\u7684\u754c\u9762\u8fdb\u884c\u64cd\u4f5c,\u5e76\u4e14\u5df2\u7ecf\u96c6\u6210\u4e86springfox-swagger\u7ec4\u4ef6,\u90a3\u4e48,\u4f60\u53ef\u4ee5\u5f15\u7528",(0,o.kt)("inlineCode",{parentName:"p"},"Knife4jCloud"),"\u63d0\u4f9b\u7684\u81ea\u52a8\u6ce8\u518c\u7684jar\u5305\u7ec4\u4ef6\u8fdb\u884c\u81ea\u52a8\u6ce8\u518c"),(0,o.kt)("p",null,"1.Maven\u5f15\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},"<dependency>\n    <groupId>com.github.xiaoymin</groupId>\n    <artifactId>knife4j-discovery-spring-boot-starter</artifactId>\n    \x3c!--\u5728\u5f15\u7528\u65f6\u8bf7\u5728maven\u4e2d\u592e\u4ed3\u5e93(http://search.maven.org)\u641c\u7d22\u6700\u65b0\u7248\u672c\u53f7--\x3e\n    \x3c!-- \u8be5\u7248\u672c\u5fc5\u987b\u548cKnife4jCloud\u4e3b\u7248\u672c\u4e00\u81f4--\x3e\n    <version>1.0</version>\n</dependency>\n")),(0,o.kt)("p",null,"2\u3001\u5728",(0,o.kt)("inlineCode",{parentName:"p"},"application.yml"),"\u6216\u8005",(0,o.kt)("inlineCode",{parentName:"p"},"application.properties"),"\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e\u76f8\u5173\u53c2\u6570,\u4ee5",(0,o.kt)("inlineCode",{parentName:"p"},"yml"),"\u4e3a\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"knife4j:\n  cloud:\n    ## \u53c2\u8003\u6ce8\u518cAPI\u4e2d\u7684accessKey\n    accessKey: JDUkd1YvSi5zZmUkMHYuSGNmN1hMazJPajJuMjNJVW43dWNyL2tyR3N4bzJaa1A2ZC5mSUlwNA\n    ## \u9879\u76ee\u7f16\u53f7\n    code: APITest\n    ## Knife4jCloud\u7684\u5bf9\u5916\u57df\u540d\u5730\u5740\n    server: http://127.0.0.1:19011\n    ## \u5f53\u524d\u670d\u52a1\u662f\u5426\u662fHTTPS\u7684,\u9ed8\u8ba4\u53ef\u4ee5\u4e0d\u914d\u7f6e,\u5e76\u4e14\u8be5\u53c2\u6570\u9ed8\u8ba4\u4e3afalse\n    ssl: false\n    ## \u53c2\u8003\u6ce8\u518cAPI\u4e2d\u7684client\u5c5e\u6027,\u8be5\u53c2\u6570\u53ef\u4ee5\u4e0d\u914d\u7f6e,\u53ea\u6709\u5728\u57df\u540d\u7684\u60c5\u51b5\u4e0b\u9700\u8981\u8fdb\u884c\u914d\u7f6e\n    client: http://test.domain.com\n    \n")),(0,o.kt)("p",null,"3\u3001\u5728Spring Boot\u5e94\u7528\u4e2d\u901a\u8fc7\u6ce8\u89e3",(0,o.kt)("inlineCode",{parentName:"p"},"@EnableKnife4jCloudDiscovery"),"\u8fdb\u884c\u542f\u7528"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@EnableKnife4jCloudDiscovery\n@SpringBootApplication\npublic class Knife4jSpringBootDemoApplication implements WebMvcConfigurer{\n    //more..\n}\n")))}E.isMDXComponent=!0}}]);