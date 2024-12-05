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


package com.github.xingfudeshi.knife4j.extend.filter;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import java.util.ArrayList;
import java.util.Base64;
import java.util.Collection;
import java.util.List;
import java.util.regex.Pattern;

/***
 *
 * @since  1.9.0
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a> 
 * 2019/02/02 19:57
 */
public class BasicFilter {
    
    private Logger logger = LoggerFactory.getLogger(BasicFilter.class);
    
    protected List<Pattern> urlFilters = null;
    
    public BasicFilter() {
        urlFilters = new ArrayList<>();
        urlFilters.add(Pattern.compile(".*?/doc\\.html.*", Pattern.CASE_INSENSITIVE));
        urlFilters.add(Pattern.compile(".*?/v2/api-docs.*", Pattern.CASE_INSENSITIVE));
        urlFilters.add(Pattern.compile(".*?/v2/api-docs-ext.*", Pattern.CASE_INSENSITIVE));
        urlFilters.add(Pattern.compile(".*?/swagger-resources.*", Pattern.CASE_INSENSITIVE));
        urlFilters.add(Pattern.compile(".*?/swagger-resources/configuration/ui.*", Pattern.CASE_INSENSITIVE));
        urlFilters.add(Pattern.compile(".*?/swagger-resources/configuration/security.*", Pattern.CASE_INSENSITIVE));
        // https://gitee.com/xiaoym/knife4j/issues/I6H8BE
        urlFilters.add(Pattern.compile(".*?/swagger-ui.*", Pattern.CASE_INSENSITIVE));
        urlFilters.add(Pattern.compile(".*?/v3/api-docs.*", Pattern.CASE_INSENSITIVE));
    }
    
    /**
     * 添加外部过滤规则，正则表达式
     * @param rule 外部自定义规则
     */
    public void addRule(String rule) {
        this.urlFilters.add(Pattern.compile(rule, Pattern.CASE_INSENSITIVE));
    }
    
    /**
     * 添加外部过滤规则，正则表达式
     * @param rules
     */
    public void addRule(Collection<String> rules) {
        if (rules != null && !rules.isEmpty()) {
            rules.forEach(this::addRule);
        }
    }
    
    protected boolean match(String uri) {
        boolean match = false;
        // 考虑双斜杠的问题会绕过校验
        // https://gitee.com/xiaoym/knife4j/issues/I4XDYE
        String newUri = uri.replaceAll("/+", "/");
        if (uri != null) {
            for (Pattern pattern : getUrlFilters()) {
                if (pattern.matcher(newUri).matches()) {
                    match = true;
                    break;
                }
            }
        }
        return match;
    }
    protected String decodeBase64(String source) {
        String decodeStr = null;
        if (source != null) {
            // BASE64Decoder decoder=new BASE64Decoder();
            try {
                // byte[] bytes=decoder.decodeBuffer(source);
                byte[] bytes = Base64.getDecoder().decode(source);
                decodeStr = new String(bytes);
            } catch (Exception e) {
                logger.error(e.getMessage(), e);
            }
        }
        return decodeStr;
    }
    
    public List<Pattern> getUrlFilters() {
        return urlFilters;
    }
}
