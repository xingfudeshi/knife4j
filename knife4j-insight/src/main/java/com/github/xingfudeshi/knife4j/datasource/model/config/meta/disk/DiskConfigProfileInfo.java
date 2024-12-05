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


package com.github.xingfudeshi.knife4j.datasource.model.config.meta.disk;

import com.github.xingfudeshi.knife4j.datasource.model.config.meta.common.ConfigDefaultCloudProfile;
import com.github.xingfudeshi.knife4j.datasource.model.config.meta.common.ConfigDefaultPolarisProfile;
import com.github.xingfudeshi.knife4j.datasource.model.config.meta.disk.service.ConfigDefaultDiskProfile;
import com.github.xingfudeshi.knife4j.datasource.model.config.meta.common.ConfigDefaultEurekaProfile;
import com.github.xingfudeshi.knife4j.datasource.model.config.meta.common.ConfigDefaultNacosProfile;
import lombok.Data;

import java.util.List;

/**
 * @author <a href="xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2022/12/17 11:49
 * @since:knife4j-desktop
 */
@Data
public class DiskConfigProfileInfo {
    
    /**
     * disk模式
     */
    private List<ConfigDefaultDiskProfile> disk;
    /**
     * Cloud模式
     */
    private List<ConfigDefaultCloudProfile> cloud;
    /**
     * nacos模式
     */
    private List<ConfigDefaultNacosProfile> nacos;
    /**
     * eureka模式
     */
    private List<ConfigDefaultEurekaProfile> eureka;

    /**
     * polaris模式
     */
    private List<ConfigDefaultPolarisProfile> polaris;
}
