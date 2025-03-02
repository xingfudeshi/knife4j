/*
 * Copyright © 2017-2023 Knife4j(xiaoymin@foxmail.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */


package com.github.xingfudeshi.knife4j.spring.plugin;

import com.github.xingfudeshi.knife4j.annotations.ApiOperationSupport;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;
import springfox.documentation.service.ListVendorExtension;
import springfox.documentation.service.VendorExtension;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spi.service.contexts.OperationContext;

import java.util.*;

/***
 * 忽略接口某个参数,避免编写过多的实体类,该插件通过给Open API v2.0 的Path节点添加扩展属性x-ignoreParameters扩展属性,结合前端ui自定义实现过滤规则.
 * 2.0.3版本添加includeParameters属性的支持
 * @since  1.9.5
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a> 
 * 2019/07/30 15:32
 */
@Component
@Order(Ordered.HIGHEST_PRECEDENCE + 102)
public class OperationIgnoreParameterPlugin extends AbstractOperationBuilderPlugin {
    
    public static final String IGNORE_PARAMETER_EXTENSION_NAME = "x-ignoreParameters";
    
    public static final String INCLUDE_PARAMETER_EXTENSION_NAME = "x-includeParameters";
    
    @Override
    public void apply(OperationContext context) {
        Optional<ApiOperationSupport> apiOperationSupportOptional = context.findAnnotation(ApiOperationSupport.class);
        if (apiOperationSupportOptional.isPresent()) {
            ApiOperationSupport apiOperationSupport = apiOperationSupportOptional.get();
            addExtensionParameters(apiOperationSupport.ignoreParameters(), IGNORE_PARAMETER_EXTENSION_NAME, context);
            addExtensionParameters(apiOperationSupport.includeParameters(), INCLUDE_PARAMETER_EXTENSION_NAME, context);
        }
    }
    
    @Override
    public boolean supports(DocumentationType delimiter) {
        return true;
    }
    
    /**
     * 添加扩展属性参数
     * @param params 参数
     * @param extensionName 扩展名称
     * @param context 上下文
     */
    private void addExtensionParameters(String[] params, String extensionName, OperationContext context) {
        if (params != null && params.length > 0) {
            Map<String, Boolean> map = new HashMap<>();
            for (String ignore : params) {
                if (ignore != null && !"".equals(ignore) && !"null".equals(ignore)) {
                    map.put(ignore, true);
                }
            }
            if (map.size() > 0) {
                List<Map<String, Boolean>> maps = new ArrayList<>();
                maps.add(map);
                ListVendorExtension<Map<String, Boolean>> listVendorExtension = new ListVendorExtension<>(extensionName, maps);
                List<VendorExtension> vendorExtensions = new ArrayList<>();
                vendorExtensions.add(listVendorExtension);
                // context.operationBuilder().extensions(Lists.newArrayList(listVendorExtension));
                context.operationBuilder().extensions(vendorExtensions);
            }
        }
    }
}
