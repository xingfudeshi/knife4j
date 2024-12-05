(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{749:function(t,a,s){"use strict";s.r(a);var n=s(42),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"_3-1-增强模式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-增强模式"}},[t._v("#")]),t._v(" 3.1 增强模式")]),t._v(" "),s("p",[t._v("Knife4j自2.0.6版本开始,将目前在Ui界面中一些个性化配置剥离,开发者可以在后端进行配置，并且提供的knife4j-spring-boot-strater组件自动装载")]),t._v(" "),s("p",[t._v("spring.factories配置如下：")]),t._v(" "),s("div",{staticClass:"language-properties extra-class"},[s("pre",{pre:!0,attrs:{class:"language-properties"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Auto Configure")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("org.springframework.boot.autoconfigure.EnableAutoConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[t._v("\\\ncom.github.xingfudeshi.knife4j.spring.configuration.Knife4jAutoConfiguration")]),t._v("\n\n")])])]),s("p",[t._v("在Spring Boot配置文件中,完整的配置如下:")]),t._v(" "),s("div",{staticClass:"language-yml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("knife4j")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("documents")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("group")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 2.X版本\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 接口签名\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("locations")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" classpath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("sign/*\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("setting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("language")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" zh"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("CN\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableSwaggerModels")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableDocumentManage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("swaggerModelName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 实体类列表\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableVersion")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableReloadCacheParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableAfterScript")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableFilterMultipartApiMethodType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" POST\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableFilterMultipartApis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableRequestCache")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableHost")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableHostText")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 192.168.0.193"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8000")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableHomeCustom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("homeCustomLocation")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" classpath"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("markdown/home.md\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableSearch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableFooter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableFooterCustom")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("footerCustomContent")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Apache License 2.0 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),t._v(" Copyright  2019"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("浙江八一菜刀股份有限公司"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("(https"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("//gitee.com/xiaoym/knife4j)\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableDynamicParameter")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableDebug")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableOpenApi")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enableGroup")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("true")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("cors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("production")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("basic")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("enable")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean important"}},[t._v("false")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("username")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" test\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("password")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("12313")]),t._v("\n")])])]),s("p",[t._v("在以前的版本中,开发者需要在配置文件中手动使用"),s("code",[t._v("@EnableKnife4j")]),t._v("来使用增强，自2.0.6版本后,只需要在配置文件中配置"),s("code",[t._v("knife4j.enable=true")]),t._v("即可不在使用注解")]),t._v(" "),s("p",[s("strong",[t._v("注意：要使用Knife4j提供的增强，"),s("code",[t._v("knife4j.enable=true")]),t._v("必须开启")])]),t._v(" "),s("p",[t._v("各个配置属性说明如下：")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("属性")]),t._v(" "),s("th",[t._v("默认值")]),t._v(" "),s("th",[t._v("说明值")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("knife4j.enable")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("是否开启Knife4j增强模式")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.cors")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("是否开启一个默认的跨域配置,该功能配合自定义Host使用")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.production")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("是否开启生产环境保护策略,详情参考"),s("RouterLink",{attrs:{to:"/documentation/accessControl.html"}},[t._v("文档")])],1)]),t._v(" "),s("tr",[s("td",[t._v("knife4j.basic")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("对Knife4j提供的资源提供BasicHttp校验,保护文档")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.basic.enable")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("关闭BasicHttp功能")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.basic.username")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("basic用户名")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.basic.password")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("basic密码")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.documents")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("自定义文档集合，该属性是数组")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.documents.group")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("所属分组")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.documents.name")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("类似于接口中的tag,对于自定义文档的分组")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.documents.locations")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("markdown文件路径,可以是一个文件夹("),s("code",[t._v("classpath:markdowns/*")]),t._v(")，也可以是单个文件("),s("code",[t._v("classpath:md/sign.md")]),t._v(")")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("前端Ui的个性化配置属性")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableAfterScript")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("调试Tab是否显示AfterScript功能,默认开启")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.language")]),t._v(" "),s("td",[t._v("zh-CN")]),t._v(" "),s("td",[t._v("Ui默认显示语言,目前主要有两种:中文(zh-CN)、英文(en-US)")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableSwaggerModels")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("是否显示界面中SwaggerModel功能")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.swaggerModelName")]),t._v(" "),s("td",[s("code",[t._v("Swagger Models")])]),t._v(" "),s("td",[t._v("重命名SwaggerModel名称,默认")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableDocumentManage")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v('是否显示界面中"文档管理"功能')])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableReloadCacheParameter")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("是否在每个Debug调试栏后显示刷新变量按钮,默认不显示")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableVersion")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("是否开启界面中对某接口的版本控制,如果开启，后端变化后Ui界面会存在小蓝点")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableRequestCache")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("是否开启请求参数缓存")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableFilterMultipartApis")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("针对RequestMapping的接口请求类型,在不指定参数类型的情况下,如果不过滤,默认会显示7个类型的接口地址参数,如果开启此配置,默认展示一个Post类型的接口地址")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableFilterMultipartApiMethodType")]),t._v(" "),s("td",[t._v("POST")]),t._v(" "),s("td",[t._v("具体接口的过滤类型")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableHost")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("是否启用Host")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableHomeCustom")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("是否开启自定义主页内容")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.homeCustomLocation")]),t._v(" "),s("td"),t._v(" "),s("td",[t._v("主页内容Markdown文件路径")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableSearch")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("是否禁用Ui界面中的搜索框")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableFooter")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("是否显示Footer")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableFooterCustom")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("是否开启自定义Footer")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.footerCustomContent")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("自定义Footer内容")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableDynamicParameter")]),t._v(" "),s("td",[t._v("false")]),t._v(" "),s("td",[t._v("是否开启动态参数调试功能")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableDebug")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("启用调试")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableOpenApi")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("显示OpenAPI规范")])]),t._v(" "),s("tr",[s("td",[t._v("knife4j.setting.enableGroup")]),t._v(" "),s("td",[t._v("true")]),t._v(" "),s("td",[t._v("显示服务分组")])])])]),t._v(" "),s("p",[t._v("关于个性化文档("),s("code",[t._v("knife4j.documents")]),t._v(")以及个性化设置("),s("code",[t._v("knife4j.setting")]),t._v("),有一些细微的区别,开发者在配置文件中进行配合好后,还需要在创建Docket对象时调用"),s("code",[t._v("Knife4j")]),t._v("提供的扩展Extesions进行赋值")]),t._v(" "),s("p",[t._v("示例代码如下：")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Configuration")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@EnableSwagger2WebMvc")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/*引入Knife4j提供的扩展类*/")]),t._v("\n   "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("final")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OpenApiExtensionResolver")]),t._v(" openApiExtensionResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Autowired")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("SwaggerConfiguration")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("OpenApiExtensionResolver")]),t._v(" openApiExtensionResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("openApiExtensionResolver "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" openApiExtensionResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[t._v("@Bean")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"defaultApi2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Docket")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("defaultApi2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" groupName"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2.X版本"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Docket")]),t._v(" docket"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Docket")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("DocumentationType")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SWAGGER_2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://www.baidu.com"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apiInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apiInfo")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupName")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("select")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("apis")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("RequestHandlerSelectors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("basePackage")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"com.swagger.bootstrap.ui.demo.new2"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("paths")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PathSelectors")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("any")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("build")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//赋予插件体系")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("extensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("openApiExtensionResolver"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("buildExtensions")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("groupName"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" docket"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[s("code",[t._v("buildExtensions")]),t._v("方法需要传入分组名称,该分组名称主要是为了区分开发者在构建自定义文档时，在不同的Docket逻辑分组下进行区别显示。")]),t._v(" "),s("p",[s("code",[t._v("OpenApiExtensionResolver")]),t._v("辅助类需要配置"),s("code",[t._v("knife4j.enable=true")]),t._v("才能自动"),s("code",[t._v("@Autowired")])]),t._v(" "),s("p",[t._v("增强效果开启后,在最终调用接口时，Knife4j会添加扩展属性"),s("code",[t._v("x-openapi")]),t._v(",如下图：")]),t._v(" "),s("p",[s("img",{attrs:{src:"/knife4j/images/knife4j/enc.png",alt:""}})]),t._v(" "),s("comment-comment")],1)}),[],!1,null,null,null);a.default=e.exports}}]);
