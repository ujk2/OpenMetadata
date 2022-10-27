/*
 *  Copyright 2021 Collate
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *  http://www.apache.org/licenses/LICENSE-2.0
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import { Card, Table, Typography } from 'antd';
import { ColumnsType } from 'antd/lib/table';
import React, { useMemo } from 'react';
import { TOP_ACTIVE_USER } from '../../pages/DataInsightPage/DataInsight.mock';
import { getDateTimeByTimeStamp } from '../../utils/TimeUtils';
import './DataInsightTables.less';

interface ActiveUserView {
  userName: string;
  Team: null;
  mostRecentSession: number;
  totalSessions: number;
  avgSessionDuration: number;
}

const TopActiveUsers = () => {
  const columns: ColumnsType<ActiveUserView> = useMemo(
    () => [
      {
        title: 'Name',
        dataIndex: 'userName',
        key: 'userName',
        render: (_, record) => (
          <Typography.Text>{record.userName}</Typography.Text>
        ),
      },
      {
        title: 'Team',
        dataIndex: 'Team',
        key: 'Team',
        render: (_, record) => (
          <Typography.Text>{record.Team ?? '--'}</Typography.Text>
        ),
      },
      {
        title: 'Recent Session',
        dataIndex: 'mostRecentSession',
        key: 'mostRecentSession',
        render: (_, record) => (
          <Typography.Text>
            {getDateTimeByTimeStamp(record.mostRecentSession)}
          </Typography.Text>
        ),
      },
      {
        title: 'Total Session',
        dataIndex: 'totalSessions',
        key: 'totalSessions',
        render: (_, record) => (
          <Typography.Text>{record.totalSessions}</Typography.Text>
        ),
      },
      {
        title: 'Average Session Duration',
        dataIndex: 'avgSessionDuration',
        key: 'avgSessionDuration',
        render: (_, record) => (
          <Typography.Text>{record.avgSessionDuration}</Typography.Text>
        ),
      },
    ],
    []
  );

  return (
    <Card className="mt-4" data-testid="entity-summary-card-percentage">
      <div data-testid="entity-summary-card-percentage-heder">
        <Typography.Title level={5}>Top Active Users</Typography.Title>
      </div>
      <Table
        bordered={false}
        className="mt-4 data-insight-table-wrapper"
        columns={columns}
        dataSource={TOP_ACTIVE_USER}
        pagination={false}
        size="small"
      />
    </Card>
  );
};

export default TopActiveUsers;
