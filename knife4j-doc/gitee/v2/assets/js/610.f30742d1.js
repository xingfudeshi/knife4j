(window.webpackJsonp=window.webpackJsonp||[]).push([[610],{959:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"_3-3-开放api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-开放api"}},[t._v("#")]),t._v(" 3.3 开放API")]),t._v(" "),a("p",[t._v("Knife4jCloud平台对外提供注册Swagger服务的开放API接口,通过该接口,非Java语言的开发者,可以进行独立开发,做到Swagger文档的项目自启动注入平台")]),t._v(" "),a("h2",{attrs:{id:"_3-3-1-注册api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-1-注册api"}},[t._v("#")]),t._v(" 3.3.1 注册API")]),t._v(" "),a("p",[t._v("接口地址："),a("code",[t._v("/knife4j/cloud/upload")])]),t._v(" "),a("p",[t._v("接口类型："),a("code",[t._v("application/json")])]),t._v(" "),a("p",[t._v("接口方式："),a("code",[t._v("POST")])]),t._v(" "),a("p",[t._v("接口参数：")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"accessKey"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"JDUkd1YvSi5zZmUkMHYuSGNmN1hMazJPajJuMjNJVW43dWNyL2tyR3N4bzJaa1A2ZC5mSUlwNA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"code"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"APIFactory"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"applicationHost"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"192.168.0.152"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"applicationPort"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"9200"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"ssl"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"client"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"cloudRoutes"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"groupName"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"订单服务"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"content"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{....}"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"path"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/aaa/v2/api-docs?group=订单服务"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("参数说明：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("accessKey")]),t._v(":该参数是注册API接口的认证凭证,每一个注册用户拥有自己独立的accessKey,平台注册成功后可以在右上角通过"),a("strong",[t._v("个人信息")]),t._v("中获取")]),t._v(" "),a("li",[a("code",[t._v("code")]),t._v(":项目编码,如果在平台中不存在,则注册不会成功,因此需要先在平台中添加项目")]),t._v(" "),a("li",[a("code",[t._v("applicationHost")]),t._v(":当前应用服务的IP地址,该参数主要作用于Swagger调试")]),t._v(" "),a("li",[a("code",[t._v("applicationPort")]),t._v("：当前应用服务的端口号")]),t._v(" "),a("li",[a("code",[t._v("ssl")]),t._v(":默认false,如果是true,则代表当前服务是https")]),t._v(" "),a("li",[a("code",[t._v("client")]),t._v(":配置一个应用服务的Client地址,一般是http://host:port,Knife4j会自动识别,如果开发者提供的是域名访问,防火墙屏蔽了端口号(例如：http://doc.xiaominfo.com),则开发者在上传的时候需要设置该属性,否则无法调试,该参数设置后则Host、Port不会生效,会根据该地址自动解析得到host和端口,所以两个属性配置其中一个即可.")]),t._v(" "),a("li",[a("code",[t._v("cloudRoutes")]),t._v(":服务分组\n"),a("ul",[a("li",[a("code",[t._v("groupName")]),t._v(":服务名称")]),t._v(" "),a("li",[a("code",[t._v("content")]),t._v(":该内容是OpenAPIv2的JSON结构")]),t._v(" "),a("li",[a("code",[t._v("path")]),t._v(":提供访问得到OpenAPIv2的接口地址,在实际预览的时候,会通过该接口得到Swagger的JSON内容进行渲染")])])])]),t._v(" "),a("h2",{attrs:{id:"_3-3-2-spring-boot自动注册"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-2-spring-boot自动注册"}},[t._v("#")]),t._v(" 3.3.2 Spring Boot自动注册")]),t._v(" "),a("p",[t._v("如果你的项目是通过"),a("code",[t._v("Spring Boot")]),t._v("进行开发,并且不想通过"),a("code",[t._v("Knife4jCloud")]),t._v("提供的界面进行操作,并且已经集成了springfox-swagger组件,那么,你可以引用"),a("code",[t._v("Knife4jCloud")]),t._v("提供的自动注册的jar包组件进行自动注册")]),t._v(" "),a("p",[t._v("1.Maven引用")]),t._v(" "),a("div",{staticClass:"language-xml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-xml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("com.github.xingfudeshi"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("groupId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("knife4j-discovery-spring-boot-starter"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("artifactId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!--在引用时请在maven中央仓库(http://search.maven.org)搜索最新版本号--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- 该版本必须和Knife4jCloud主版本一致--\x3e")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("1.0"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("version")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("dependency")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("2、在"),a("code",[t._v("application.yml")]),t._v("或者"),a("code",[t._v("application.properties")]),t._v("配置文件中配置相关参数,以"),a("code",[t._v("yml")]),t._v("为例：")]),t._v(" "),a("div",{staticClass:"language-yml extra-class"},[a("pre",{pre:!0,attrs:{class:"language-yml"}},[a("code",[a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("knife4j")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cloud")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 参考注册API中的accessKey")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("accessKey")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" JDUkd1YvSi5zZmUkMHYuSGNmN1hMazJPajJuMjNJVW43dWNyL2tyR3N4bzJaa1A2ZC5mSUlwNA\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 项目编号")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("code")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" APITest\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## Knife4jCloud的对外域名地址")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("server")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//127.0.0.1"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("19011")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 当前服务是否是HTTPS的,默认可以不配置,并且该参数默认为false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("ssl")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 参考注册API中的client属性,该参数可以不配置,只有在域名的情况下需要进行配置")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("client")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" http"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//test.domain.com\n    \n")])])]),a("p",[t._v("3、在Spring Boot应用中通过注解"),a("code",[t._v("@EnableKnife4jCloudDiscovery")]),t._v("进行启用")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableKnife4jCloudDiscovery")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@SpringBootApplication")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Knife4jSpringBootDemoApplication")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("implements")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("WebMvcConfigurer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//more..")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),a("comment-comment")],1)}),[],!1,null,null,null);s.default=e.exports}}]);
