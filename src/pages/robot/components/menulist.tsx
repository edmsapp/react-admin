import React from 'react';
import { Typography, Row, Col, Button, Badge } from 'antd';
import styles from './menu.less';

const { Text } = Typography;
const country = [{
  code: 'GLOBAL',
  name: '全球'
},
{
  code: 'IN',
  name: '印度'
},
{
  code: 'ID',
  name: '印尼'
},
{
  code: 'TW',
  name: '台湾'
},
{
  code: 'ARABIC',
  name: '阿拉伯'
},
{
  code: 'RU',
  name: '俄罗斯'
},
{
  code: 'NG',
  name: '尼日利亚'
},
{
  code: 'DE',
  name: '德国'
},
{
  code: 'BR',
  name: '巴西'
},
{
  code: 'TR',
  name: '土耳其'
},
{
  code: 'TH',
  name: '泰国'
},
{
  code: 'PK',
  name: '巴基斯坦'
},
{
  code: 'AE',
  name: '阿联酋'
},
{
  code: 'VN',
  name: '越南'
},
{
  code: 'PH',
  name: '菲律宾'
},
{
  code: 'MA',
  name: '摩洛哥'
},
{
  code: 'US',
  name: '美国'
}]
const levels = [{
  code: 0,
  name: '全部'
}, {
  code: -5,
  name: '第一层'
}, {
  code: -4,
  name: '第二层'
}, {
  code: -3,
  name: '第三层'
}, {
  code: -2,
  name: '第四层'
}, {
  code: -1,
  name: '第五层'
}, {
  code: 1,
  name: '第六层'
}, {
  code: 2,
  name: '第七层'
}, {
  code: 3,
  name: '第八层'
}, {
  code: 4,
  name: '第九层'
}, {
  code: 5,
  name: '第十层'
}, {
  code: -10,
  name: '待审核'
}]

const status = [{
  code: 0,
  name: '全部'
}, {
  code: 1,
  name: '上线'
}, {
  code: 2,
  name: '下线'
}]

const order = [{
  code: 0,
  name: '倒序'
}, {
  code: 1,
  name: '正序'
}]


const Menu: React.FC<> = () => {
  const [nowCountry, setNowCountry] = React.useState('GLOBAL')
  const [nowLevel, setNowLevel] = React.useState(0)
  const [nowState, setNowState] = React.useState(0)
  const [nowOrder, setNowOrder] = React.useState(0)

  const changeCountry = ((item: { code: any; name?: string; }) => {
    setNowCountry(item.code)
  })
  const changeLevel = ((item: { code: any; name?: string; }) => {
    setNowLevel(item.code)
  })
  const changeState = ((item: { code: any; name?: string; }) => {
    setNowState(item.code)
  })
  const changeOrder = ((item: { code: any; name?: string; }) => {
    setNowOrder(item.code)
  })



  const countryLists = country.map((item) => {
    return (
      <div key={item.code} className={styles.btn}>
        <Button onClick={() => { changeCountry(item) }} type={nowCountry === item.code ? "primary" : ""} size="small">{item.name}</Button>
      </div>
    )
  })
  const imgLists = levels.map((item) => {
    return (
      <div key={item.code} className={styles.btn}>
        <Button onClick={() => { changeLevel(item) }} type={nowLevel === item.code ? "primary" : ""} size="small">{item.name}</Button>
      </div>
    )
  })
  const statusLists = status.map((item) => {
    return (
      <div key={item.code} className={styles.btnum}>
        <Badge count={0} overflowCount={99999} showZero>
          <Button onClick={() => { changeState(item) }} type={nowState === item.code ? "primary" : ""} size="small">{item.name}</Button>
        </Badge>
      </div>
    )
  })
  const orderListat = order.map((item) => {
    return (
      <div key={item.code} className={styles.btn}>
        <Button onClick={() => { changeOrder(item) }} type={nowOrder === item.code ? "primary" : ""} size="small">{item.name}</Button>
      </div>
    )
  })


  return (
    <pre className={styles.pre}>
      <div className={styles.btntop}>
        <Col className={styles.top} flex="90px"><Text code>当前地区:</Text></Col>
        <Row>
          <Col className={styles.btnall} flex="auto">{countryLists}</Col>
        </Row>
      </div>
      <div className={styles.line10px} />
      <div className={styles.btntop}>
        <Col className={styles.top} flex="90px"><Text code>图片分层:</Text></Col>
        <Row>
          <Col className={styles.btnall} flex="auto">{imgLists}</Col>
        </Row>
      </div>
      <div className={styles.line10px} />
      <div className={styles.btntop}>
        <Col className={styles.top} flex="90px"><Text code>显示状态:</Text></Col>
        <Row>
          <Col className={styles.btnall} flex="auto">{statusLists}</Col>
        </Row>
      </div>
      <div className={styles.line10px} />
      <Row>
        <Col className={styles.top} flex="90px"><Text code>显示顺序:</Text></Col>
        <Col className={styles.btnall} flex="auto">{orderListat}</Col>
      </Row>
    </pre >
  )
}


export default Menu;
