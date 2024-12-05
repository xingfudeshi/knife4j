/*
 * Copyright 2017-2023 八一菜刀(xiaoymin@foxmail.com)
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


package com.github.xingfudeshi.knife4j.gateway.context;

import com.github.xingfudeshi.knife4j.datasource.DocumentSessionHolder;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

/**
 * @author <a href="xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2022/12/17 22:14
 * @since:knife4j-desktop
 */
public interface GatewayContext {
    
    /**
     * 构建网关请求上下文对象
     * @param sessionHolder sessionHolder
     * @param request 当前请求Servlet对象
     * @param response response对象
     * @return
     */
    GatewayRequestContext buildContext(DocumentSessionHolder sessionHolder, HttpServletRequest request, HttpServletResponse response);
}
