import React, { useState } from 'react';
import { ComponentWrapper } from './index.styled';
import {Switch} from 'antd';
import styles from './switcher.less'


const TestComponent: React.FC = () => {
  const [toggle, setToggle] = useState(true);

  const title = {
    display: 'block',
    fontSize: '20px',
    paddingLeft: '10px',
    marginBottom: '10px'
  }



  return <ComponentWrapper>
    <span style={title}>{toggle ? 'Да' : 'Нет'}</span>
    <Switch defaultChecked className={styles} onChange={() => setToggle(!toggle)}/>
  </ComponentWrapper>;
};

export default TestComponent;
