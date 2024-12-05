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


package com.github.xingfudeshi.knife4j.spring.gateway.discover;

import com.github.xingfudeshi.knife4j.spring.gateway.spec.v2.OpenAPI2Resource;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.extern.slf4j.Slf4j;
import org.springframework.util.CollectionUtils;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

/**
 * @author <a href="xiaoymin@foxmail.com">xiaoymin@foxmail.com</a>
 * 2023/8/3 14:49
 * @since knife4j v4.3.0
 */
@Slf4j
@Getter
@AllArgsConstructor
public class ServiceRouterHolder {
    
    /**
     * 服务发现列表
     */
    final List<String> service;
    /**
     * 需要排除的服务列表
     */
    final Set<String> excludeService;
    
    /**
     * discoverHandler
     */
    final ServiceDiscoverHandler discoverHandler;
    
    /**
     * 添加资源
     * @param resource 分组聚合资源
     */
    public void add(OpenAPI2Resource resource) {
        if (resource == null) {
            log.warn("resource is null");
            return;
        }
        log.debug("add resource:{}", resource);
        this.discoverHandler.add(resource);
    }
    
    /**
     * 每次服务发现处理时，清除已经下线的服务
     */
    public void clearService() {
        Set<OpenAPI2Resource> openAPI2Resources = this.discoverHandler.getGatewayResources();
        if (CollectionUtils.isEmpty(openAPI2Resources)) {
            return;
        }
        // 获取已经下线的服务列表
        List<String> downService = openAPI2Resources.stream().map(OpenAPI2Resource::getServiceName).filter(s -> !this.service.contains(s)).collect(Collectors.toList());
        if (CollectionUtils.isEmpty(downService)) {
            return;
        }
        downService.forEach(this.discoverHandler::remove);
    }
}
