import type { DbInfoVO, DbInfoForm, DbInfoQuery } from './model';

import type { ID, IDS } from '#/api/common';
import type { PageResult } from '#/api/common';

import { commonExport } from '#/api/helper';
import { requestClient } from '#/api/request';

/**
* 查询向量数据库信息列表
* @param params
* @returns 向量数据库信息列表
*/
export function dbInfoList(params?: DbInfoQuery) {
  return requestClient.get<PageResult<DbInfoVO>>('/vector/db/list', { params });
}

/**
 * 导出向量数据库信息列表
 * @param params
 * @returns 向量数据库信息列表
 */
export function dbInfoExport(params?: DbInfoQuery) {
  return commonExport('/vector/db/export', params ?? {});
}

/**
 * 查询向量数据库信息详情
 * @param id id
 * @returns 向量数据库信息详情
 */
export function dbInfoInfo(id: ID) {
  return requestClient.get<DbInfoVO>(`/vector/db/${id}`);
}

/**
 * 新增向量数据库信息
 * @param data
 * @returns void
 */
export function dbInfoAdd(data: DbInfoForm) {
  return requestClient.postWithMsg<void>('/vector/db/insert', data);
}

/**
 * 更新向量数据库信息
 * @param data
 * @returns void
 */
export function dbInfoUpdate(data: DbInfoForm) {
  return requestClient.putWithMsg<void>('/vector/db', data);
}

/**
 * 删除向量数据库信息
 * @param id id
 * @returns void
 */
export function dbInfoRemove(id: ID | IDS) {
  return requestClient.deleteWithMsg<void>(`/vector/db/${id}`);
}
