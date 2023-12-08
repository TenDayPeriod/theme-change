import FirstPage from '../src/view/FirstPage/First';
import SecondPage from '../src/view/SecondPage/Second';
import './custom.css';
import { ConfigProvider, Radio, Space } from 'antd';
import { useState } from 'react';
function App() {
  const [prefix, setPrefix] = useState('ant');

  const handlePrefixChange = (evt: any) => {
    setPrefix(evt.target.value);
  };

  return (
    <ConfigProvider prefixCls="custom">
      <div className="App">
        {/* <h1> */}
        {/*  <Space> */}
        {/*    Change Theme: */}
        {/*    /!* radio动态修改prefix *!/ */}
        {/*    <Radio.Group onChange={handlePrefixChange} value={prefix}> */}
        {/*      <Radio value="ant">Ant Style</Radio> */}
        {/*      <Radio value="custom">Custom Style</Radio> */}
        {/*      <Radio value="green">Green Style</Radio> */}
        {/*    </Radio.Group> */}
        {/*  </Space> */}
        {/* </h1> */}

        <FirstPage />
        <hr />
        <SecondPage />
      </div>
    </ConfigProvider>
  );
}

export default App;
