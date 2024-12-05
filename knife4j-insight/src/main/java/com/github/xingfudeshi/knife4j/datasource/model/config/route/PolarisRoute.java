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


package com.github.xingfudeshi.knife4j.datasource.model.config.route;


import com.github.xingfudeshi.knife4j.datasource.model.ConfigRoute;
import lombok.Data;
import lombok.EqualsAndHashCode;

/**
 * @author zc
 * @date 2023/4/10 19:04
 */
@Data
@EqualsAndHashCode(callSuper = true)
public class PolarisRoute extends ConfigRoute {

    /**
     * 服务名称,不能为空,代表需要聚合的服务
     */
    private String service;

    /**
     * 命名空间id
     */
    private String namespace;
}
