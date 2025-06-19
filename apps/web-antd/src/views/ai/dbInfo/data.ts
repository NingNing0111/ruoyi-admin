import type { FormSchemaGetter } from '#/adapter/form';
import type { VxeGridProps } from '#/adapter/vxe-table';


export const querySchema: FormSchemaGetter = () => [
  {
    component: 'Select',
    componentProps: {
      allowClear: true,
      filterOption: true,
      options: [
        {
          label: 'Milvus',
          value: 1,
        },
        {
          label: 'Pgvector',
          value: 2,
        },
      ],
      placeholder: '数据库类型',
    },
    fieldName: 'type',
    label: '数据库类型',
  },
];

// 需要使用i18n注意这里要改成getter形式 否则切换语言不会刷新
// export const columns: () => VxeGridProps['columns'] = () => [
export const columns: VxeGridProps['columns'] = [
  { type: 'checkbox', width: 60 },
  {
    title: '数据库类型',
    field: 'type',
    slots: { default: 'dbType' },
  },
  {
    title: '主机名',
    field: 'hostname',
  },
  {
    title: '端口',
    field: 'port',
  },
  {
    title: '向量维度大小',
    field: 'dimension',
  },
  {
    title: '是否自动初始化Schema',
    field: 'initializeSchema',
  },
  {
    title: '连接用户名',
    field: 'username',
  },
  {
    field: 'action',
    fixed: 'right',
    slots: { default: 'action' },
    title: '操作',
    width: 180,
  },
];

export const drawerSchema: FormSchemaGetter = () => [
  {
    component: 'Input',
    dependencies: {
      show: () => false,
      triggerFields: [''],
    },
    fieldName: 'id',
  },
  {
    component: 'Select',
    componentProps: {
      class: 'w-[180px]',
      allowClear: true,
      options: [
        {
          label: 'Milvus',
          value: 1,

        },
        {
          label: 'Pgvector',
          value: 2,
        },
      ],
      placeholder: '请选择数据库类型',
    },

    fieldName: 'type',
    label: '数据库类型',
    rules: 'selectRequired',
  },
  {
    component: 'Input',
    fieldName: 'label',
    label: '标签',
    rules: 'required'
  },

  {
    label: '是否初始化',
    fieldName: 'initializeSchema',
    component: 'Switch',
    defaultValue: false,
    componentProps: {
      class: 'w-100',
    }
  },
  {
    label: '主机名',
    componentProps: {
      allowClear: true,
      placeholder: '请输入主机名',
    },
    fieldName: 'hostname',
    defaultValue: 'localhost',
    component: 'Input',
    rules: 'required',
  },
  {
    label: '端口号',
    fieldName: 'port',
    component: 'Input',
    rules: 'required',
    componentProps: {
      allowClear: true,
      placeholder: '请输入端口号',
    },
  },
  {
    label: '用户名',
    fieldName: 'username',
    component: 'Input',
    defaultValue: '',
    componentProps: {
      allowClear: true,
      placeholder: '请输入用户名',
    },
  },
  {
    label: '密码',
    fieldName: 'password',
    component: 'InputPassword',
    defaultValue: '',
    componentProps: {
      allowClear: true,
      placeholder: '请输入密码',
    },
  },
  {
    label: '向量维度',
    fieldName: 'dimension',
    component: 'Input',
    rules: 'required',
    defaultValue: 1536,
    componentProps: {
      placeholder: '请输入向量存储的维度大小',
    },
  },
  ...MILVUS_SCHEMA(),
  ...PG_VECTOR_SCHEMA(),
  {
    label: '高级选项',
    fieldName: 'supperOptions',
    component: 'Switch',
    defaultValue: false,
    componentProps: {
      class: 'w-100',
    },
    dependencies: {
      triggerFields: ['type'],
      show: ({ type }) => type
    }
  },
  ...COMMON_OTHER_SCHEMA()
];

const COMMON_OTHER_SCHEMA: FormSchemaGetter = () => [
  {
    label: 'ID字段',
    fieldName: 'idFieldName',
    component: 'Input',
    dependencies: {
      triggerFields: ['type', 'supperOptions'],
      show: ({ type, supperOptions }) => type === 1 && supperOptions,
    },
    componentProps: {
      placeholder: '请输入ID字段的名称',
    },
  },
  {
    label: 'Meta字段',
    fieldName: 'metadataFieldName',
    component: 'Input',
    dependencies: {
      triggerFields: ['type', 'supperOptions'],
      show: ({ type, supperOptions }) => type === 1 && supperOptions,
    },
    componentProps: {
      placeholder: '请输入Meta字段的名称',
    },
  },
  {
    label: 'Embedding字段',
    fieldName: 'embeddingFieldName',
    component: 'Input',
    dependencies: {
      triggerFields: ['type', 'supperOptions'],
      show: ({ type, supperOptions }) => type === 1 && supperOptions,
    },
    componentProps: {
      placeholder: '请输入Embedding字段的名称',
    },
  },

  // {
  //   label: '连接参数',
  //   fieldName: 'params',
  //   component: 'Textarea',
  // },
];

/**
 * 
 * @returns milvus的属性
 */
const MILVUS_SCHEMA: FormSchemaGetter = () => [
  {
    label: '集合名',
    fieldName: 'collection',
    component: 'Input',
    rules: 'required',
    defaultValue: 'vector_store',
    dependencies: {
      triggerFields: ['type'],
      show: ({ type }) => type === 1,
    },
  },
  {
    label: '索引类型',
    fieldName: 'indexType',
    component: 'Select',
    defaultValue: 0,
    componentProps: {
      options: [
        {
          label: 'None',
          value: 0
        },
        {
          label: 'FLAT',
          value: 1
        }
      ]
    },
    rules: 'selectRequired',
    dependencies: {
      triggerFields: ['type'],
      show: ({ type }) => type === 1,
    },
  },
  {
    label: '指标类型',
    fieldName: 'metricType',
    component: 'Select',
    defaultValue: 0,
    componentProps: {
      options: [
        {
          label: 'None',
          value: 0
        },
        {
          label: 'L2',
          value: 1
        }
      ]
    },
    rules: 'selectRequired',
    dependencies: {
      triggerFields: ['type'],
      show: ({ type }) => type === 1,
    },
  },
]

/**
 * 
 * @returns pgvector的属性
 */
const PG_VECTOR_SCHEMA: FormSchemaGetter = () => [
  {
    label: '数据库名',
    fieldName: 'dbName',
    component: 'Input',
    defaultValue: 'default',
    rules: 'required',
    dependencies: {
      triggerFields: ['type'],
      show: ({ type }) => type === 2,
    },
  },
  {
    label: '表名',
    fieldName: 'tableName',
    component: 'Input',
    defaultValue: 'vector_store',
    rules: 'required',
    dependencies: {
      triggerFields: ['type'],
      show: ({ type }) => type === 2,
    },
  },
  {
    label: 'ID类型',
    fieldName: 'idType',
    component: 'Select',
    componentProps: {
    },
    rules: 'selectRequired',
    dependencies: {
      triggerFields: ['type'],
      show: ({ type }) => type === 2,
    },
  },
  {
    label: '相似度计算类型',
    fieldName: 'distanceType',
    component: 'Select',
    componentProps: {
    },
    rules: 'selectRequired',
    dependencies: {
      triggerFields: ['type'],
      show: ({ type }) => type === 2,
    },
  },
  {
    label: 'Schema名',
    fieldName: 'schemaName',
    component: 'Input',
    rules: 'required',
    defaultValue: 'public',
    dependencies: {
      triggerFields: ['type'],
      show: ({ type }) => type === 2,
    },
  },
  {
    label: '是否开启Schema验证',
    fieldName: 'schemaValidation',
    component: 'Switch',
    defaultValue: false,
    rules: 'required',
    dependencies: {
      triggerFields: ['type'],
      show: ({ type }) => type === 2,
    },
  },
  {
    label: '是否删除已存在的向量存储表',
    fieldName: 'removeExistingVectorStoreTable',
    component: 'Switch',
    defaultValue: false,
    colProps: {
      span: 8
    },
    rules: 'required',
    dependencies: {
      triggerFields: ['type'],
      show: ({ type }) => type === 2,
    },
  },
  {
    label: '最大文档批量处理数量',
    fieldName: 'maxDocumentBatchSize',
    component: 'InputNumber',
    rules: 'required',
    defaultValue: 10000,
    dependencies: {
      triggerFields: ['type'],
      show: ({ type }) => type === 2,
    },
  },
]
