/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const zhSidebar = {
  "/zh/UserGuide/V1.0.x/": [
    {
      text: "IoTDB用户手册 (V1.0.x)",
      collapsible: false,
      children: [],
    },
    {
      text: "关于IoTDB",
      collapsible: true,
      prefix: "IoTDB-Introduction/",
      children: [
        { text: "IoTDB简介", link: "What-is-IoTDB" },
        { text: "主要功能特点", link: "Features" },
        //   { text: '系统架构', link: 'Architecture' },
        //  { text: '应用场景', link: 'Scenario' },
        { text: "研究论文", link: "Publication" },
      ],
    },
    {
      text: "快速上手",
      collapsible: true,
      prefix: "QuickStart/",
      children: [
        { text: "快速上手", link: "QuickStart" },
        //       { text: '下载与安装', link: 'WayToGetIoTDB' },
        //        { text: 'SQL命令行终端(CLI)', link: 'Command-Line-Interface' },
        //        { text: '数据文件存储', link: 'Files' },
      ],
    },
    {
      text: "安全管理",
      collapsible: true,
      prefix: "Security-Management/",
      // children: 'structure',
      children: [
        { text: "白名单", link: "White-List" },
        { text: "审计日志", link: "Audit-Log" },
        { text: "权限管理", link: "Administration" },
      ],
    },
    {
      text: "基础概念",
      collapsible: true,
      prefix: "Basic-Concept/",
      children: [
        { text: "数据模型", link: "Data-Model-and-Terminology" },
        //        { text: '元数据模板', link: 'Schema-Template' },
        { text: "数据类型", link: "Data-Type" },
        //        { text: '死区处理', link: 'Deadband-Process' },
        { text: "编码和压缩", link: "Encoding-and-Compression" },
        //       { text: '数据的时间分区', link: 'Time-Partition' },
        //     { text: '时区', link: 'Time-zone' },
      ],
    },
    {
      text: "语法约定",
      collapsible: true,
      prefix: "Syntax-Conventions/",
      children: [
        { text: "字面值常量", link: "Literal-Values" },
        { text: "标识符", link: "Identifier" },
        { text: "路径结点名", link: "NodeName-In-Path" },
        { text: "键值对", link: "KeyValue-Pair" },
        { text: "关键字", link: "Keywords-And-Reserved-Words" },
        { text: "Session And TsFile API", link: "Session-And-TsFile-API" },
        { text: "词法和文法详细定义", link: "Detailed-Grammar" },
      ],
    },
    {
      text: "应用编程接口",
      collapsible: true,
      prefix: "API/",
      children: [
        { text: "Java 原生接口", link: "Programming-Java-Native-API" },
        { text: "Python 原生接口", link: "Programming-Python-Native-API" },
        { text: "C++ 原生接口", link: "Programming-Cpp-Native-API" },
        { text: "Go 原生接口", link: "Programming-Go-Native-API" },
        { text: "JDBC (不推荐)", link: "Programming-JDBC" },
        { text: "MQTT", link: "Programming-MQTT" },
        { text: "REST API", link: "RestService" },
        { text: "TsFile API", link: "Programming-TsFile-API" },
        { text: "InfluxDB 协议适配器", link: "InfluxDB-Protocol" },
        { text: "原生接口对比", link: "Interface-Comparison" },
      ],
    },
    {
      text: "元数据操作",
      collapsible: true,
      prefix: "Operate-Metadata/",
      children: [
        { text: "数据库操作", link: "Database" },
        { text: "节点操作", link: "Node" },
        { text: "时间序列操作", link: "Timeseries" },
        { text: "元数据模板", link: "Template" },
        { text: "自动创建元数据", link: "Auto-Create-MetaData" },
      ],
    },
    {
      text: "数据写入（数据更新）",
      collapsible: true,
      prefix: "Write-Data/",
      children: [
        { text: "CLI 写入数据", link: "Write-Data" },
        { text: "原生接口写入", link: "Session" },
        { text: "REST 服务", link: "REST-API" },
        { text: "MQTT 写入", link: "MQTT" },
        { text: "批量数据导入", link: "Batch-Load-Tool" },
      ],
    },
    {
      text: "数据删除",
      collapsible: true,
      prefix: "Delete-Data/",
      children: [
        { text: "删除数据", link: "Delete-Data" },
        { text: "TTL", link: "TTL" },
      ],
    },
    {
      text: "数据查询",
      collapsible: true,
      prefix: "Query-Data/",
      children: [
        { text: "概述", link: "Overview" },
        { text: "选择表达式", link: "Select-Expression" },
        { text: "最新点查询", link: "Last-Query" },
        { text: "查询对齐模式", link: "Align-By" },
        { text: "查询过滤条件", link: "Where-Condition" },
        { text: "分段分组聚合", link: "Group-By" },
        { text: "聚合结果过滤", link: "Having-Condition" },
        // { text:'结果集排序', link: 'Order-By' },
        { text: "结果集补空值", link: "Fill" },
        { text: "结果集分页", link: "Pagination" },
        { text: "查询写回", link: "Select-Into" },
        { text: "连续查询", link: "Continuous-Query" },
      ],
    },
    {
      text: "运算符和函数",
      collapsible: true,
      prefix: "Operators-Functions/",
      children: [
        { text: "概述", link: "Overview" },
        { text: "用户自定义函数", link: "User-Defined-Function" },
        { text: "聚合函数", link: "Aggregation" },
        { text: "算数运算符和函数", link: "Mathematical" },
        { text: "比较运算符和函数", link: "Comparison" },
        { text: "逻辑运算符", link: "Logical" },
        { text: "字符串处理", link: "String" },
        { text: "数据类型转换", link: "Conversion" },
        { text: "常序列生成", link: "Constant" },
        { text: "选择函数", link: "Selection" },
        { text: "区间查询", link: "Continuous-Interval" },
        { text: "趋势计算", link: "Variation-Trend" },
        { text: "采样函数", link: "Sample" },
        { text: "时间序列处理", link: "Time-Series" },
        { text: "Lambda 表达式", link: "Lambda" },

        // IoTDB-Quality
        { text: "数据画像", link: "Data-Profiling" },
        { text: "异常检测", link: "Anomaly-Detection" },
        { text: "数据匹配", link: "Data-Matching" },
        { text: "频域分析", link: "Frequency-Domain" },
        { text: "数据质量", link: "Data-Quality" },
        { text: "数据修复", link: "Data-Repairing" },
        { text: "序列发现", link: "Series-Discovery" },
      ],
    },
    {
      text: "触发器",
      collapsible: true,
      prefix: "Trigger/",
      children: [
        { text: "使用说明", link: "Instructions" },
        { text: "编写触发器", link: "Implement-Trigger" },
        { text: "管理触发器", link: "Trigger-Management" },
        { text: "重要注意事项", link: "Notes" },
        { text: "配置参数", link: "Configuration-Parameters" },
      ],
    },
    {
      text: "监控告警",
      collapsible: true,
      prefix: "Monitor-Alert/",
      children: [
        { text: "监控工具", link: "Metric-Tool" },
        { text: "告警机制", link: "Alerting" },
      ],
    },
    {
      text: "运维工具",
      collapsible: true,
      prefix: "Maintenance-Tools/",
      children: [
        { text: "运维命令", link: "Maintenance-Command" },
        { text: "日志工具", link: "Log-Tool" },
        { text: "JMX 工具", link: "JMX-Tool" },
        { text: "Mlog解析工具", link: "MLogParser-Tool" },
        {
          text: "IoTDB数据文件夹概览工具",
          link: "IoTDB-Data-Dir-Overview-Tool",
        },
        { text: "TsFile概览工具", link: "TsFile-Sketch-Tool" },
        {
          text: "TsFile Resource概览工具",
          link: "TsFile-Resource-Sketch-Tool",
        },
        { text: "TsFile 拆分工具", link: "TsFile-Split-Tool" },
        { text: "TsFile 导入导出工具", link: "TsFile-Load-Export-Tool" },
        { text: "CSV 导入导出工具", link: "CSV-Tool" },
      ],
    },
    {
      text: "端云协同",
      collapsible: true,
      prefix: "Edge-Cloud-Collaboration/",
      children: [{ text: "TsFile 同步工具", link: "Sync-Tool" }],
    },
    {
      text: "系统集成",
      collapsible: true,
      prefix: "Ecosystem-Integration/",
      children: [
        { text: "Grafana-Plugin", link: "Grafana-Plugin" },
        { text: "Grafana-Connector（不推荐）", link: "Grafana-Connector" },
        { text: "Zeppelin-IoTDB", link: "Zeppelin-IoTDB" },
        { text: "DBeaver-IoTDB", link: "DBeaver" },
        { text: "MapReduce-TsFile", link: "MapReduce-TsFile" },
        { text: "Spark-TsFile", link: "Spark-TsFile" },
        { text: "Spark-IoTDB", link: "Spark-IoTDB" },
        { text: "Hive-TsFile", link: "Hive-TsFile" },
        { text: "Flink-IoTDB", link: "Flink-IoTDB" },
        { text: "Flink-TsFile", link: "Flink-TsFile" },
        { text: "NiFi-IoTDB", link: "NiFi-IoTDB" },
      ],
    },
    {
      text: "分布式",
      collapsible: true,
      prefix: "Cluster/",
      children: [
        { text: "基本概念", link: "Cluster-Concept" },
        { text: "分布式部署", link: "Cluster-Setup" },
        { text: "分布式运维命令", link: "Cluster-Maintenance" },
        { text: "部署推荐", link: "Deployment-Recommendation" },
        { text: "异构 Database", link: "Heterogeneous-DataBase" },
      ],
    },
    {
      text: "FAQ",
      collapsible: true,
      prefix: "FAQ/",
      children: [
        { text: "常见问题", link: "Frequently-asked-questions" },
        { text: "分布式部署FAQ", link: "FAQ-for-cluster-setup" },
      ],
    },
    {
      text: "参考",
      collapsible: true,
      prefix: "Reference/",
      children: [
        { text: "公共配置参数", link: "Common-Config-Manual" },
        { text: "ConfigNode配置参数", link: "ConfigNode-Config-Manual" },
        { text: "DataNode配置参数", link: "DataNode-Config-Manual" },
        { text: "SQL参考文档", link: "SQL-Reference" },
        { text: "状态码", link: "Status-Codes" },
        { text: "关键字", link: "Keywords" },
        { text: "时间序列数据库比较", link: "TSDB-Comparison" },
      ],
    },
  ],
};
