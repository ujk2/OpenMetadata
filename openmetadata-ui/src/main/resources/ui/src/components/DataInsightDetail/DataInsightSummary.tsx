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

import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { SUMMARY_DATA } from '../../pages/DataInsightPage/DataInsight.mock';

const DataInsightSummary = () => {
  return (
    <Card data-testid="summary-card">
      <div data-testid="summary-card-heder">
        <Typography.Title level={5}>
          OpenMetadata health at a glance
        </Typography.Title>
        <Typography.Text>
          Some description over here could be helpful
        </Typography.Text>
      </div>
      <Row
        className="mt-4"
        data-testid="summary-card-content"
        gutter={[16, 16]}>
        {SUMMARY_DATA.map((summary, id) => (
          <Col data-testid="summary-item" key={id} span={4}>
            <Typography.Text>{summary.key}</Typography.Text>
            <Typography className="tw-font-semibold">
              {summary.value}
            </Typography>
          </Col>
        ))}
      </Row>
    </Card>
  );
};

export default DataInsightSummary;