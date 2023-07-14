import {
  CalculatorOutlined,
  ClockCircleOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  TableOutlined,
  BellOutlined,
  SwapOutlined,
  BookOutlined,
  EditOutlined,
} from '@ant-design/icons';
import { 
  Button, 
  Layout, 
  Menu, 
  theme,
  Avatar, 
  Typography,
  Image,
} from 'antd';

import { useState } from 'react';
import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import ChessBoard from './chessboard/ChessBoard/index'
import Calculator from './cal/App'
import Pomodoro from './pomodoro/App'
import Convert from './convert/App'
import Hi from './hi/index'
import Quote from './quote/index';
import './App.css'
import vlogo from './assets/vlogo.png'
import vitelogo from './assets/logovite.jpg'


const { Header, Sider, Content, Footer } = Layout;
const { Text, Title } = Typography;
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  // const toggleCollapsed = () => {
  //   setCollapsed(!collapsed);
  // };
  
  
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const footerStyle = {
    textAlign: 'center',
    backgroundColor: '#fff',
  };

  const menuitems = [
    {
      key: '1',
      icon: <EditOutlined />,
      label: 'Typing',
      path: '/hi'
    },
    {
      key: '2',
      icon: <TableOutlined />,
      label: 'Chessboard',
      path: '/chessboard'
    },
    {
      key: '3',
      icon: <CalculatorOutlined />,
      label: 'Calculator',
      path: '/calculator'
    },
    {
      key: '4',
      icon: <ClockCircleOutlined />,
      label: 'Pomodoro',
      path: '/pomodoro',
    },
    {
      key: '5',
      icon: <SwapOutlined />,
      label: 'Convert',
      path: '/convert',
    },
    {
      key: '6',
      icon: <BookOutlined />,
      label: 'Quote',
      path: '/quote',
    },
  ]


  return (
    <Router>
      <Layout>
        <Sider
          style={{
            height: '100vh',
            borderRight: '1px solid #ccc'
          }}
          theme='light'
          trigger={null} collapsible collapsed={collapsed}
        >
          <div className="demo-logo-vertical" />
          <Header
            style={{
              background: colorBgContainer,
              boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px, rgba(0, 0, 0, 0.03) 0px 1px 0px',
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              justifyContent: 'center'
            }}
            className='header_close'
          >
            <Image
              src={collapsed ? vlogo : vitelogo}
              preview={false}
              width={collapsed ? 30 : 120}
            />
          </Header>
          <Menu 
            theme="light"
            mode="inline"
            defaultSelectedKeys={['1']}
            //inlineCollapsed={collapsed}
            style={{
              fontWeight: '500'
            }}
          >
            {menuitems.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Header
            style={{
              background: colorBgContainer,
              boxShadow: 'rgba(0, 0, 0, 0.02) 0px 2px 2px, rgba(0, 0, 0, 0.03) 0px 1px 0px',
              display: 'flex',
              alignItems: 'center',
              padding: '0 20px'
            }}
          >
            <Button 
              icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
              onClick={() => setCollapsed(!collapsed)}
              shape='circle'
              style={{
                border: 'none'
              }}
            />           
            <Text
              style={{
                fontSize: 32,
                textAlign: 'center',
                flex: 1,
              }}
            >
            </Text>
            <Button
              style={{
                type: 'text',
                border: 'none',  
              }}
              shape='circle'
            >
              <BellOutlined
                style={{
                  fontSize: 22
                }}
              />
            </Button>
            <Title
              level={5}
              style={{
                margin: '0 1rem',
              }}
            >
              Bui Van Minh
            </Title>
            <Avatar 
              style={{
                border: '2px solid #ccc',
                boxShadow: '1px 1px 1px #eee',
              }}
              src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=1" 
            />
            
          </Header>
          <Content
            style={{
              padding: 24,
              minHeight: 280,
              background: colorBgContainer,
            }}
          >
            <Switch>
                <Route path='/hi'>
                  <Hi />
                </Route>
                <Route path='/chessboard'>
                  <ChessBoard/>
                </Route>
                <Route path='/calculator'>
                  <Calculator/>
                </Route>
                <Route path='/pomodoro'>
                  <Pomodoro />
                </Route>
                <Route path='/convert'>
                  <Convert />
                </Route>
                <Route path='/quote'>
                  <Quote />
                </Route>
            </Switch>
          </Content>
          <Footer style={footerStyle}></Footer>
        </Layout>
      </Layout>
    </Router>
  );
};
export default App;