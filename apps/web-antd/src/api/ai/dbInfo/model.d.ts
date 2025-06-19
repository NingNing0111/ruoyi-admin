import type { PageQuery, BaseEntity } from '#/api/common';

export interface DbInfoVO {
  /**
   * 主键ID
   */
  id: string | number;

  label: string;

  /**
   * 向量数据库类型，如milvus、pgvector等，用Int常量表示
   */
  type: number;

  /**
   * 向量库主机名，域名/ip
   */
  hostname: string;

  /**
   * 端口号
   */
  port: number;

  /**
   * 向量维度
   */
  dimension: number;

  /**
   * 数据库名，有些向量数据库需要，如pgvector
   */
  dbName: string;

  /**
   * 表名，部分db需要
   */
  tableName: string;

  /**
   * 集合名，部分db需要
   */
  collection: string;

  /**
   * 索引类型
   */
  indexType: number;

  /**
   * 指标类型
   */
  metricType: number;

  /**
   * ID字段名称
   */
  idFieldName: string | number;

  /**
   * Meta字段名称
   */
  metadataFieldName: string;

  /**
   * 向量字段名称
   */
  embeddingFieldName: string;

  /**
   * ID类型，如Long/String等
   */
  idType: string | number;

  /**
   * 距离计算类型
   */
  distanceType: number;

  /**
   * 模式名（Schema Name）
   */
  schemaName: string;

  /**
   * 是否开启Schema验证
   */
  schemaValidation: string | number;

  /**
   * 是否自动初始化Schema（建表、清空）
   */
  initializeSchema: number;

  /**
   * 是否删除已存在的向量存储表
   */
  removeExistingVectorStoreTable: number;

  /**
   * 最大文档批量处理数量
   */
  maxDocumentBatchSize: number;

  /**
   * 连接用户名
   */
  username: string;

  /**
   * 连接密码
   */
  password: string;

  /**
   * 连接参数，JSON格式
   */
  params: string;

}

export interface DbInfoForm extends BaseEntity {
  /**
   * 主键ID
   */
  id?: string | number;
  label?: string;
  /**
   * 向量数据库类型，如milvus、pgvector等，用Int常量表示
   */
  type?: number;

  /**
   * 向量库主机名，域名/ip
   */
  hostname?: string;

  /**
   * 端口号
   */
  port?: number;

  /**
   * 向量维度
   */
  dimension?: number;

  /**
   * 数据库名，有些向量数据库需要，如pgvector
   */
  dbName?: string;

  /**
   * 表名，部分db需要
   */
  tableName?: string;

  /**
   * 集合名，部分db需要
   */
  collection?: string;

  /**
   * 索引类型
   */
  indexType?: number;

  /**
   * 指标类型
   */
  metricType?: number;

  /**
   * ID字段名称
   */
  idFieldName?: string | number;

  /**
   * Meta字段名称
   */
  metadataFieldName?: string;

  /**
   * 向量字段名称
   */
  embeddingFieldName?: string;

  /**
   * ID类型，如Long/String等
   */
  idType?: string | number;

  /**
   * 距离计算类型
   */
  distanceType?: number;

  /**
   * 模式名（Schema Name）
   */
  schemaName?: string;

  /**
   * 是否开启Schema验证
   */
  schemaValidation?: string | number;

  /**
   * 是否自动初始化Schema（建表、清空）
   */
  initializeSchema?: number;

  /**
   * 是否删除已存在的向量存储表
   */
  removeExistingVectorStoreTable?: number;

  /**
   * 最大文档批量处理数量
   */
  maxDocumentBatchSize?: number;

  /**
   * 连接用户名
   */
  username?: string;

  /**
   * 连接密码
   */
  password?: string;

  /**
   * 连接参数，JSON格式
   */
  params?: string;

}

export interface DbInfoQuery extends PageQuery {
  /**
   * 向量数据库类型，如milvus、pgvector等，用Int常量表示
   */
  type?: number;
  label: string;
  /**
   * 向量库主机名，域名/ip
   */
  hostname?: string;

  /**
   * 端口号
   */
  port?: number;

  /**
   * 向量维度
   */
  dimension?: number;

  /**
   * 数据库名，有些向量数据库需要，如pgvector
   */
  dbName?: string;

  /**
   * 表名，部分db需要
   */
  tableName?: string;

  /**
   * 集合名，部分db需要
   */
  collection?: string;

  /**
   * 索引类型
   */
  indexType?: number;

  /**
   * 指标类型
   */
  metricType?: number;

  /**
   * ID字段名称
   */
  idFieldName?: string | number;

  /**
   * Meta字段名称
   */
  metadataFieldName?: string;

  /**
   * 向量字段名称
   */
  embeddingFieldName?: string;

  /**
   * ID类型，如Long/String等
   */
  idType?: string | number;

  /**
   * 距离计算类型
   */
  distanceType?: number;

  /**
   * 模式名（Schema Name）
   */
  schemaName?: string;

  /**
   * 是否开启Schema验证
   */
  schemaValidation?: string | number;

  /**
   * 是否自动初始化Schema（建表、清空）
   */
  initializeSchema?: number;

  /**
   * 是否删除已存在的向量存储表
   */
  removeExistingVectorStoreTable?: number;

  /**
   * 最大文档批量处理数量
   */
  maxDocumentBatchSize?: number;

  /**
   * 连接用户名
   */
  username?: string;

  /**
   * 连接密码
   */
  password?: string;

  /**
   * 连接参数，JSON格式
   */
  params?: string;

  /**
    * 日期范围参数
    */
  params?: any;
}
