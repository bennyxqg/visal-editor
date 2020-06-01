import { Button } from 'antd';
import Nav from '../modules/Nav'

// todo: 和下面的 methods 放到一起
function handleClick() {}

const defaultClick = `handleClick () {
  const { getFieldsValue } = this.props.form;
  const values = getFieldsValue();
  console.log(values);
  alert(JSON.stringify(values));
}`;

export default function getNavInstance(params = {}) {
  const {
    text = '提交', 
    type = 'primary',
    click = defaultClick,
  } = params;
  return {
    Component: Nav,
    label: 'Nav',
    import: 'Nav',
    // 这部分内容会被添加到页面代码中，todo: 自动判断生成
    constructorCode: 'this.handleClick = this.handleClick.bind(this);',
    methods: click,
    props: {
      children: text,
      type,
      onClick: handleClick,
    },
  };
};
