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


package com.github.xingfudeshi.knife4j.core.model;

/***
 *
 * @since  1.0
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a> 
 * 2019/07/31 15:00
 */
public class DynamicClass {
    
    private Class<?> targetClazz;
    
    private Class<?> fieldClazz;
    
    public Class<?> getTargetClazz() {
        return targetClazz;
    }
    
    public void setTargetClazz(Class<?> targetClazz) {
        this.targetClazz = targetClazz;
    }
    
    public Class<?> getFieldClazz() {
        return fieldClazz;
    }
    
    public void setFieldClazz(Class<?> fieldClazz) {
        this.fieldClazz = fieldClazz;
    }
    
}
