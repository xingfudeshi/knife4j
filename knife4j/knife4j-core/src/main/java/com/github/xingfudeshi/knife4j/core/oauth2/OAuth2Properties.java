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


package com.github.xingfudeshi.knife4j.core.oauth2;

import com.github.xingfudeshi.knife4j.core.enums.OAuth2TypeEnums;
import lombok.Data;

import java.util.List;

/**
 * @author <a href="xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2022/11/28 21:07
 * @since 
 */
@Data
public class OAuth2Properties {
    
    /**
     * OAuth2 type
     */
    private OAuth2TypeEnums grantType;
    
    /**
     * OAuth2 config properties
     */
    private OAuth2Info config;
    
    /**
     * OAuth2 Scope
     */
    private List<OAuth2Scope> scopes;
    
    /**
     * OAuth2 APi Path Collection,Only support Ant,not support regex.
     * example: /api/**, /config/** etc.
     */
    private List<String> paths;
}