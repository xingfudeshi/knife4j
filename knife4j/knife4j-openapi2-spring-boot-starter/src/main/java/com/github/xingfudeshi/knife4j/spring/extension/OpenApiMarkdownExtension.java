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


package com.github.xingfudeshi.knife4j.spring.extension;

import com.github.xingfudeshi.knife4j.core.extend.OpenApiExtendMarkdownFile;
import springfox.documentation.service.VendorExtension;

import java.util.List;

/**
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2020/10/23 21:22
 * @since  1.0
 */
public class OpenApiMarkdownExtension implements VendorExtension<List<OpenApiExtendMarkdownFile>> {
    
    private final List<OpenApiExtendMarkdownFile> openApiExtendMarkdownFiles;
    
    public OpenApiMarkdownExtension(List<OpenApiExtendMarkdownFile> openApiExtendMarkdownFiles) {
        this.openApiExtendMarkdownFiles = openApiExtendMarkdownFiles;
    }
    
    @Override
    public String getName() {
        return "x-markdownFiles";
    }
    
    @Override
    public List<OpenApiExtendMarkdownFile> getValue() {
        return this.openApiExtendMarkdownFiles;
    }
}
