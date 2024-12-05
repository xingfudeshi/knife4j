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


package com.github.xingfudeshi.knife4j.spring.configuration;

import lombok.Data;
import org.springframework.boot.context.properties.ConfigurationProperties;

import java.util.List;

/***
 * HTTP basic properties
 * @since  1.9.6
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a> 
 * 2019/08/27 15:40
 */
@Data
@ConfigurationProperties(prefix = "knife4j.basic")
public class Knife4jHttpBasic {
    
    /**
     * Whether to enable HTTP basic authentication, the default is false
     */
    private boolean enable = false;
    
    /**
     * HTTP basic username
     */
    private String username;
    
    /**
     * HTTP basic password
     */
    private String password;
    
    /**
     * All configured urls need to be verified by basic，Only support Regex
     * since 4.1.0
     */
    private List<String> include;
}
