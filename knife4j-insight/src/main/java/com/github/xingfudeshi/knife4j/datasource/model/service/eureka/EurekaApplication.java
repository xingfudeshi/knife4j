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


package com.github.xingfudeshi.knife4j.datasource.model.service.eureka;

import java.util.List;

/**
 * Eureka注册中心应用Model
 * @author <a href="mailto:xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2020/11/16 22:20
 * @since:knife4j-aggregation-spring-boot-starter 2.0.8
 */
public class EurekaApplication {
    
    /**
     * 服务列表
     */
    private String name;
    
    /**
     * 实例列表
     */
    private List<EurekaInstance> instance;
    
    public String getName() {
        return name;
    }
    
    public void setName(String name) {
        this.name = name;
    }
    
    public List<EurekaInstance> getInstance() {
        return instance;
    }
    
    public void setInstance(List<EurekaInstance> instance) {
        this.instance = instance;
    }
}
