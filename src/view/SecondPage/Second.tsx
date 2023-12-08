/*
 * @Description: 这里只是来看看antd样式是否变化的
 * @Author: Zzt
 * @Date: 2023/12/6
 * @LastEditTime: 17:46
 */
import Layout from '../../layout/index';
import { Table } from 'antd';
import React, { Key, useState } from 'react';

const Second = () => {
  const [tableIds, setTableIds] = useState<Key[]>([]);

  // Table多选
  const rowSelection = {
    onChange: (key: React.Key[]) => setTableIds(key)
  };
  return (
    <>
      <Layout>
        <Table
          rowKey="id"
          rowSelection={rowSelection}
          bordered
          dataSource={[{ id: 1, name: 'one', size: 30 }]}
          columns={[
            { dataIndex: 'id', title: '序号' },
            { dataIndex: 'name', title: '名字' },
            { dataIndex: 'size', title: '大小' }
          ]}
        />
      </Layout>
    </>
  );
};
export default Second;
