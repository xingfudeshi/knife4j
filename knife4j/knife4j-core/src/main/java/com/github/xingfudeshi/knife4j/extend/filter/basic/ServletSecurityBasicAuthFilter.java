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


package com.github.xingfudeshi.knife4j.extend.filter.basic;

import com.github.xingfudeshi.knife4j.core.conf.GlobalConstants;
import com.github.xingfudeshi.knife4j.extend.util.FilterUtils;
import lombok.Data;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author <a href="xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2023/2/25 19:06
 * @since knife4j
 */
@Data
public class ServletSecurityBasicAuthFilter extends AbstractSecurityFilter implements Filter {
    
    @Override
    public void init(FilterConfig filterConfig) throws ServletException {
        this.initServletConfig(filterConfig.getInitParameterNames(),
                filterConfig.getInitParameter("enableBasicAuth"),
                filterConfig.getInitParameter("userName"),
                filterConfig.getInitParameter("password"));
    }
    
    @Override
    public void doFilter(ServletRequest servletRequest, ServletResponse servletResponse, FilterChain chain) throws IOException, ServletException {
        HttpServletRequest request = (HttpServletRequest) servletRequest;
        HttpServletResponse response = (HttpServletResponse) servletResponse;
        String url = request.getRequestURI();
        if (this.isEnableBasicAuth() && this.match(url)) {
            Object sessionObject = request.getSession().getAttribute(GlobalConstants.KNIFE4J_BASIC_AUTH_SESSION);
            String auth = request.getHeader(GlobalConstants.AUTH_HEADER_NAME);
            if (this.tryCommonBasic(url, sessionObject, auth)) {
                if (sessionObject == null) {
                    request.getSession().setAttribute(GlobalConstants.KNIFE4J_BASIC_AUTH_SESSION, getUserName());
                }
                chain.doFilter(servletRequest, servletResponse);
            } else {
                FilterUtils.writeForbiddenCode(response);
            }
        } else {
            chain.doFilter(servletRequest, servletResponse);
        }
    }
    
    @Override
    public void destroy() {
        this.urlFilters = null;
    }
}
