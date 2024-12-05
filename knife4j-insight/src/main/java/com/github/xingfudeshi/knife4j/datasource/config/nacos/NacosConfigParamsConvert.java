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


package com.github.xingfudeshi.knife4j.datasource.config.nacos;

import com.github.xingfudeshi.knife4j.common.lang.DesktopConstants;
import com.github.xingfudeshi.knife4j.common.utils.PropertyUtils;
import com.github.xingfudeshi.knife4j.datasource.config.ConfigParamsConvert;
import com.github.xingfudeshi.knife4j.datasource.config.nacos.env.ConfigNacosInfo;
import com.github.xingfudeshi.knife4j.datasource.model.config.common.ConfigCommonInfo;
import com.github.xingfudeshi.knife4j.datasource.model.config.common.ConfigEnv;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.StringUtils;
import org.springframework.core.env.Environment;

import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

/**
 * @author <a href="xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2022/12/19 22:27
 * @since:knife4j-desktop
 */
@Slf4j
public class NacosConfigParamsConvert implements ConfigParamsConvert {
    
    private Environment environment;

    @Override
    public ConfigCommonInfo getConfigInfo() {
        Map<String, String> params = new HashMap<>();
        params.put(DesktopConstants.DESKTOP_SOURCE_KEY, environment.getProperty(DesktopConstants.DESKTOP_SOURCE_KEY));
        for (String key : DesktopConstants.CONFIG_NACOS) {
            String value = environment.getProperty(key);
            log.debug("Env -> {}:{}", key, value);
            params.put(key, StringUtils.isNotBlank(value) ? value : "");
        }
        Optional<ConfigEnv> configEnvOptional = PropertyUtils.resolveSingle(params, ConfigEnv.class);
        if (configEnvOptional.isPresent()) {
            return configEnvOptional.get().getKnife4j().getNacos();
        }
        return new ConfigNacosInfo();
    }

    @Override
    public void setEnvironment(Environment environment) {
        this.environment = environment;
    }
}
