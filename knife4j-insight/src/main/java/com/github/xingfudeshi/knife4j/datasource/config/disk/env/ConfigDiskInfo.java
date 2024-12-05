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


package com.github.xingfudeshi.knife4j.datasource.config.disk.env;

import cn.hutool.core.lang.Assert;
import com.github.xingfudeshi.knife4j.datasource.model.config.common.ConfigCommonInfo;
import lombok.Data;

/**
 * @author <a href="xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2022/12/16 21:19
 * @since:knife4j-desktop
 */
@Data
public class ConfigDiskInfo extends ConfigCommonInfo {
    
    /**
     * 本地磁盘数据目录
     */
    private String dir;
    
    public void validate() {
        Assert.notBlank(dir, "knife4j.disk.dir must specified");
    }
}
