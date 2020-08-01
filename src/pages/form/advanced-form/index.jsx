import { CloseCircleOutlined } from '@ant-design/icons';
import {
  Button,
  Card,
  Col,
  DatePicker,
  Form,
  Input,
  Popover,
  Row,
  Select,
  Table,
  Divider,
  Popconfirm,
  Switch,
  message,
  Tabs,
} from 'antd';
import React, { useState, useEffect } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'umi';
import moment from 'moment';
import TableForm from './components/TableForm';
import FooterToolbar from './components/FooterToolbar';
import styles from './style.less';
import { fundInfoMap } from './data/fundInfoMap';
import { initChartConfig, getPeConfigList } from './data/chartConfig';
import { renderChart } from './data/chartUtil';
import EqualTableForm from './components/EqualTableForm';

const { Option } = Select;
const { TabPane } = Tabs;
const { RangePicker } = DatePicker;
const fieldLabels = {
  dateRange: '回测日期',
  baseMoney: '基础数额',
};
const tableData = [];
const fundList = [];
fundInfoMap.forEach((fund) => {
  fundList.push(fund);
});

const AdvancedForm = ({ submitting, dispatch, backtestResult, styList, pagination }) => {
  const [btForm] = Form.useForm();
  const [styForm] = Form.useForm();
  const [shForm] = Form.useForm();
  const [error, setError] = useState([]);
  const [index, setIndex] = useState(0);
  const [strategies, setStrategies] = useState([]);
  const [chartConfig, setChartConfig] = useState(initChartConfig(strategies));
  const [isEdit, setIsEdit] = useState(false);
  const [editing, setEditing] = useState({});
  const [showVolTable,setShowVolTable] = useState(true);

  const getErrorInfo = (errors) => {
    const errorCount = errors.filter((item) => item.errors.length > 0).length;

    if (!errors || errorCount === 0) {
      return null;
    }

    const scrollToField = (fieldKey) => {
      const labelNode = document.querySelector(`label[for="${fieldKey}"]`);

      if (labelNode) {
        labelNode.scrollIntoView(true);
      }
    };

    const errorList = errors.map((err) => {
      if (!err || err.errors.length === 0) {
        return null;
      }

      const key = err.name[0];
      return (
        <li key={key} className={styles.errorListItem} onClick={() => scrollToField(key)}>
          <CloseCircleOutlined className={styles.errorIcon} />
          <div className={styles.errorMessage}>{err.errors[0]}</div>
          <div className={styles.errorField}>{fieldLabels[key]}</div>
        </li>
      );
    });
    return (
      <span className={styles.errorIcon}>
        <Popover
          title="表单校验信息"
          content={errorList}
          overlayClassName={styles.errorPopover}
          trigger="click"
          getPopupContainer={(trigger) => {
            if (trigger && trigger.parentNode) {
              return trigger.parentNode;
            }
            return trigger;
          }}
        >
          <CloseCircleOutlined />
        </Popover>
        {errorCount}
      </span>
    );
  };

  const removeStrategy = (record) => {
    const newData = strategies?.filter((item) => item.key !== record.key);
    setStrategies(newData);
    const newChartConfig = initChartConfig(newData);
    setChartConfig(newChartConfig);
  };

  const onRefreshChart = () => {
    refreshChart()
  };

  const onChartConfigChnage = (checked, cIndex, index) => {
    const newChartConfig = chartConfig.map((item) => ({
      ...item,
    }));
    newChartConfig[cIndex].config[index].show = checked;
    setChartConfig(newChartConfig);
  };

  const onStyFundChange = (fundValue) => {
    styForm.setFieldsValue({
      name: `${fundInfoMap.get(fundValue).fundName  }--${  strategies.length}`,
    });
  };

  const onStyTypeChange = (styType) =>{
    setShowVolTable(styType === 'FundVolStrategy'?true:false);
  }

  const editStrategy = (strategy) => {
    setEditing(strategy);
    const newStrategy = {
      ...strategy,
      fund: strategy.fund.fundCode,
    };
    newStrategy.factorList = newStrategy.factorList.map((item) => ({
      ...item,
    }));
    newStrategy.factors = newStrategy.factors.map((item) => ({
      ...item,
    }));
    newStrategy.factorList.cover = true;
    newStrategy.factors.cover = true;
    styForm.setFieldsValue(newStrategy);
    setIsEdit(true);
    setShowVolTable(strategy.type==='FundVolStrategy'?true:false);
  };

  const onDelOldRecord = async (sty) => {
    await dispatch({ type: 'fundValBackTest/delSty', payload: sty });
    onSearchStyList();
  };

  const onAddOldRecord = (sty) => {
    const isIn = strategies.filter((item) => item._id === sty._id).length > 0;
    if (isIn) {
      message.error('该云端策略已存在已选策略列表');
      return;
    }
    onAddStrategy(sty, true);
    message.success('成功应用至当前策略列表!');
  };

  const onAddStrategy = (values, isOld) => {
    setError([]);
    const fundInfo = typeof values.fund === 'object' ? values.fund : fundInfoMap.get(values.fund);
    let newStrategies = [...strategies];
    if (isEdit && !isOld) {
      values = {
        ...editing,
        ...values,
        fund: fundInfo,
      };
      newStrategies = newStrategies.map((item) => {
        if (item.uuid === values.uuid) {
          return values;
        }
        return item;
      });
    } else {
      const newStrategy = {
        ...values,
        fund: fundInfo,
        key: index,
        uuid: `${Date.now()  }_${  Math.random()}`,
      };
      newStrategies.push(newStrategy);
      setIndex(index + 1);
      /** 更新图表设置选项 */
      const newChartConfig = chartConfig.map((item) => ({
        ...item,
      }));
      newChartConfig.push(initChartConfig([newStrategy])[0]);
      setChartConfig(newChartConfig);
    }
    setStrategies(newStrategies);
    setIsEdit(false);
  };

  const onBackStart = () => {
    if (strategies.length < 1) {
      message.error('请填写至少一个策略!');
      return;
    }
    const { dateRange, baseMoney } = btForm.getFieldsValue();
    const startDate = dateRange[0].format('YYYY-MM-DD');
    const endDate = dateRange[1].format('YYYY-MM-DD');
    const params = {
      mainInfo: {
        startDate,
        endDate,
        baseMoney,
      },
      stInfo: strategies,
    };
    dispatch({ type: 'fundValBackTest/fetchBacktestData', payload: params });
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
    setError(errorInfo.errorFields);
  };

  const doSearchStyLits = (search, pagination) => {
    dispatch({
      type: 'fundValBackTest/fetchFundStyData',
      payload: {
        pagination,
        search,
      },
    });
  };

  const saveSty = async (styInfo) => {
    const rs = await dispatch({
      type: styInfo._id ? 'fundValBackTest/updateSty' : 'fundValBackTest/addSty',
      payload: styInfo,
    });
    onSearchStyList();
  };

  const onSearchStyList = () => {
    doSearchStyLits(shForm.getFieldsValue(), pagination);
  };

  const getFactorName = (factory) => {
    const { max, maxModi, maxPercent, min, minModi, minPercent } = factory;
    const maxStr = maxPercent === '0' ? '' : `_${maxModi}_${maxPercent}`;
    const minStr = minPercent === '0' ? '' : `${minModi}_${minPercent}`;
    return `${max + maxStr  }-${  max === min ? '' : `${minStr ? `${min  }_` : min}`  }${minStr}`;
  };

  const getEqualFactorName = (factor) => {
    const { max, maxModi, maxPercent } = factor;
    const maxStr = maxPercent === '0' ? '' : `_${maxModi}_${maxPercent}`;
    return `${max + maxStr}`;
  }

  const refreshChart = ()=>{
    const chartConfig0 = [];
    const chartConfig1 = [];
    const chartConfig2 = [];
    chartConfig.forEach((configs,sIndex)=>{
      chartConfig0[sIndex] = {name:configs.name,config:[]}
      chartConfig1[sIndex] = {name:configs.name,config:[]}
      chartConfig2[sIndex] = {name:configs.name,config:[]}
      configs.config.forEach(item=>{
        const field = item.field;
        const ids = item.chartIds;
        if(field === 'pe' && ids.includes(0)){
          chartConfig0[sIndex].config = [...getPeConfigList(item.show)];
        }
        if(field !== 'pe' && ids.includes(1)){
          chartConfig1[sIndex].config.push({...item});
        }
        if(field !== 'pe' && ids.includes(2)){
          chartConfig2[sIndex].config.push({...item});
        }
      });
    })
    console.log('configs',chartConfig0,chartConfig1,chartConfig2)
    renderChart('chart0', backtestResult, chartConfig0, strategies,styles.chart0Wrapper,300);
    renderChart('chart1', backtestResult, chartConfig1, strategies,styles.chart1Wrapper,400);
    renderChart('chart2', backtestResult, chartConfig2, strategies,styles.chart2Wrapper,400);
  }

  useEffect(() => {
    doSearchStyLits(
      {
        styName: '',
        fundCode: '',
      },
      pagination,
    );
  }, [1]);

  useEffect(() => {
    /** update back result */
    if (backtestResult.length > 0) {
      refreshChart()
    }
  }, [backtestResult]);

  const getStyColumns = (isNet) => {
    return [
      {
        title: '策略',
        dataIndex: 'name',
        key: `name${  isNet}`,
        render: (text, record) => {
          return (
            <div>
              <p className={styles.tableInnerPara}>{text}</p>
              <p className={styles.tableInnerPara}>{record.type}</p>
              {isNet ? record.createTime : ''}
            </div>
          );
        },
      },
      {
        title: '基金',
        dataIndex: 'fund',
        key: `fund${  isNet}`,
        render: (text, record) => {
          const { fundName, fundCode, indexCode } = text;
          return (
            <div>
              <p className={styles.tableInnerPara}>
                {fundName}({record.baseMoney}元)
              </p>
              <p className={styles.tableInnerPara}>
                {fundCode}/{indexCode}
              </p>
            </div>
          );
        },
      },
      {
        title: '指数周期',
        dataIndex: 'during',
        key: `during${isNet}`,
      },
      {
        title: '指数算法',
        dataIndex: 'algo',
        key: `algo${isNet}`,
      },
      {
        title: '投资周期日',
        dataIndex: 'weekDay',
        key: `weekDay${isNet}`,
      },
      {
        title: '策略因子',
        dataIndex: 'factorList',
        key: `factorList ${isNet}`,
        render: (data,record) => {
          let factorList = record.type === 'FundVolStrategy'?record.factorList:record.factors;
          return (
            <div>
              {(factorList||[]).map((factor, index) => {
                return record.type === 'FundVolStrategy'?(
                  <p key={index} className={styles.tableInnerPara}>
                    {getFactorName(factor)}({factor.baseMoneyRate},{factor.factorRate})
                  </p>
                ):(
                  <p key={index} className={styles.tableInnerPara}>
                    {getEqualFactorName(factor)}({factor.minMoney},{factor.maxRate},{factor.csi})
                  </p>
                );
              })}
            </div>
          );
        },
      },
      {
        title: '操作',
        key: `action${isNet}`,
        render: (text, record) => {
          if (!isNet) {
            return (
              <span>
                <a onClick={(e) => editStrategy(record)}>编辑</a>
                <Divider type="vertical" />
                <Popconfirm title="是否要删除此策略？" onConfirm={() => removeStrategy(record)}>
                  <a>删除</a>
                </Popconfirm>
                <Divider type="vertical" />
                <Popconfirm title="是否确认保存到云端？" onConfirm={() => saveSty(record)}>
                  <a>云同步</a>
                </Popconfirm>
              </span>
            );
          }
          return (
            <span>
              <a onClick={(e) => onAddOldRecord(record)}>应用</a>
              <Divider type="vertical" />
              <Popconfirm title="是否要从云端删除此策略？" onConfirm={() => onDelOldRecord(record)}>
                <a>删除</a>
              </Popconfirm>
            </span>
          );
        },
      },
    ];
  };

  return (
    <PageHeaderWrapper title="基金回测">
      <Form
        form={btForm}
        layout="vertical"
        hideRequiredMark
        initialValues={{
          dateRange: [moment(new Date()).subtract(3, 'years'), moment(new Date())],
        }}
      >
        <Card title="回测主体" className={styles.card} bordered={false}>
          <Row gutter={16}>
            <Col lg={10} md={12} sm={24}>
              <Form.Item
                label={fieldLabels.dateRange}
                name="dateRange"
                rules={[
                  {
                    required: true,
                    message: '请选择回测日期区间',
                  },
                ]}
              >
                <RangePicker
                  placeholder={['开始日期', '结束日期']}
                  style={{
                    width: '100%',
                  }}
                />
              </Form.Item>
            </Col>
            <Col
              lg={{
                span: 10,
                offset: 4,
              }}
              md={{
                span: 12,
              }}
              sm={24}
            >
              <Form.Item
                label={fieldLabels.baseMoney}
                name="baseMoney"
                rules={[
                  {
                    required: true,
                    message: '请输入基础金额',
                  },
                ]}
              >
                <Input
                  style={{
                    width: '100%',
                  }}
                  type="number"
                  placeholder="请输入基础金额"
                />
              </Form.Item>
            </Col>
          </Row>
        </Card>
      </Form>
      <Form
        form={styForm}
        layout="vertical"
        hideRequiredMark
        initialValues={{
          factorList: [],
          factors:[],
          type:'FundVolStrategy'
        }}
        onFinish={onAddStrategy}
        onFinishFailed={onFinishFailed}
      >
        <Card title="策略主体" className={styles.card} bordered={false}>
          <Row gutter={16}>
            <Col xl={6} lg={8} md={12} sm={24}>
              <Form.Item
                label="策略方法"
                name="type"
                rules={[
                  {
                    required: true,
                    message: '请选择策略方法',
                  },
                ]}
              >
                <Select onChange={onStyTypeChange} placeholder="请选择策略">
                  <Option value="FundVolStrategy">估值策略</Option>
                  <Option value="FundEqualStrategy">市值均仓</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xl={6} lg={8} md={12} sm={24}>
              <Form.Item
                label="测试基金"
                name="fund"
                rules={[
                  {
                    required: true,
                    message: '请选择需要测试的基金',
                  },
                ]}
              >
                <Select onChange={onStyFundChange} placeholder="请选择基金">
                  {fundList.map((fund) => (
                    <Option key={fund.fundCode} value={fund.fundCode}>
                      {fund.fundName}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
            <Col
              xl={{
                span: 6,
                offset: 3,
              }}
              lg={{
                span: 8,
              }}
              md={{
                span: 12,
              }}
              sm={24}
            >
              <Form.Item
                label="策略名称"
                name="name"
                rules={[
                  {
                    required: true,
                    message: '请输入策略名称',
                  },
                ]}
              >
                <Input placeholder="请输入策略名称" />
              </Form.Item>
            </Col>
            <Col
              xl={{
                span: 6,
                offset: 3,
              }}
              lg={{
                span: 8,
              }}
              md={{
                span: 24,
              }}
              sm={24}
            >
              <Form.Item label="基础金额" name="baseMoney">
                <Input type="number" placeholder="请输入基础金额" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col xl={6} lg={8} md={12} sm={24}>
              <Form.Item
                label="投资周期日"
                name="weekDay"
                rules={[
                  {
                    required: true,
                    message: '请输入投资周期日',
                  },
                ]}
              >
                <Input type="number" placeholder="请输入投资周期日" />
              </Form.Item>
            </Col>
            <Col
              xl={{
                span: 6,
                offset: 3,
              }}
              lg={{
                span: 8,
              }}
              md={{
                span: 12,
              }}
              sm={24}
            >
              <Form.Item
                label="估值周期"
                name="during"
                rules={[
                  {
                    required: true,
                    message: '请选择估值周期',
                  },
                ]}
              >
                <Select placeholder="请选择估值周期">
                  <Option value="y5">五年</Option>
                  <Option value="y10">十年</Option>
                  <Option value="y20">20年</Option>
                  <Option value="y3">三年</Option>
                  <Option value="fs">全部</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col
              xl={{
                span: 6,
                offset: 3,
              }}
              lg={{
                span: 8,
              }}
              md={{
                span: 24,
              }}
              sm={24}
            >
              <Form.Item
                label="估值算法"
                name="algo"
                rules={[
                  {
                    required: true,
                    message: '请选择估值算法',
                  },
                ]}
              >
                <Select placeholder="请选择估值算法">
                  <Option value="mcw">市值加权</Option>
                  <Option value="ew">市值等权</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>
        </Card>

        <Card title="回测因子" className={styles.card} bordered={false}>
          <Form.Item style={{display:showVolTable?'block':'none'}} name="factorList">
            <TableForm />
          </Form.Item>
          <Form.Item style={{display:showVolTable?'none':'block'}} name="factors">
            <EqualTableForm />
          </Form.Item>
        </Card>
      </Form>

      <Tabs defaultActiveKey="1" className={styles.card}>
        <TabPane key="1" tab="策略列表">
          <Table columns={getStyColumns()} dataSource={strategies} pagination={false} />
        </TabPane>
        <TabPane key="2" tab="收藏列表">
          <Form
            form={shForm}
            layout="horizontal"
            hideRequiredMark
            initialValues={{
              styName: '',
              fundCode: '',
            }}
          >
            <Row>
              <Col xl={6} lg={8} md={12} sm={24}>
                <Form.Item label="策略名称" name="styName" rules={[]}>
                  <Input type="text" placeholder="请输入策略名" />
                </Form.Item>
              </Col>
              <Col xl={6} lg={8} md={12} sm={24}>
                <Form.Item label="策略基金" name="fundCode" rules={[]}>
                  <Select placeholder="请选择策略基金">
                    <Option key="0001" value="">
                      未选择
                    </Option>
                    {fundList.map((fund) => (
                      <Option key={fund.fundCode} value={fund.fundCode}>
                        {fund.fundName}
                      </Option>
                    ))}
                  </Select>
                </Form.Item>
              </Col>
              <Col xl={6} lg={8} md={12} sm={24}>
                <Button type="primary" onClick={() => onSearchStyList()}>
                  查询
                </Button>
              </Col>
            </Row>
          </Form>
          <Table
            size="small"
            columns={getStyColumns(true)}
            dataSource={styList}
            pagination={pagination}
          />
        </TabPane>
      </Tabs>

      <Card title="回测结果设置" className={styles.card} bordered={false}>
        {chartConfig.map((singleConfig, cIndex) => {
          const doc = (
            <div key={cIndex}>
              <h4>{singleConfig.name}</h4>
              <Row>
                {singleConfig.config.map((single, index) => {
                  return (
                    <Col key={single.field + index} xl={4} lg={4} md={8} sm={12}>
                      <div className={styles.configBox} key={single.field + cIndex}>
                        <span>{single.name}</span>
                        <Switch
                          checked={single.show}
                          onChange={(checked) => onChartConfigChnage(checked, cIndex, index)}
                        />
                      </div>
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
          return doc;
        })}
      </Card>

      <Card title="回测结果图表" className={styles.card} bordered={false}>
        <div id="chart0" className={styles.chart0Wrapper} />
        <div id="chart1" className={styles.chart1Wrapper} />
        <div id="chart2" className={styles.chart2Wrapper} />
      </Card>

      <FooterToolbar>
        {getErrorInfo(error)}
        <Button type="primary" onClick={() => styForm?.submit()}>
          {isEdit ? '保存' : '添加'}策略
        </Button>
        <Button type="primary" onClick={() => onRefreshChart()}>
          刷新回测图表
        </Button>
        <Button type="primary" onClick={() => onBackStart()} loading={submitting}>
          开始回测
        </Button>
      </FooterToolbar>
    </PageHeaderWrapper>
  );
};

export default connect(({ fundValBackTest, loading }) => ({
  backtestResult: fundValBackTest.backtestResult,
  styList: fundValBackTest.styList,
  pagination: fundValBackTest.pagination,
  submitting: loading.effects['fundValBackTest/fetchBacktestData'],
}))(AdvancedForm);
