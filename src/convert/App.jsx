
import { useEffect, useState } from 'react'
import './App.css'
import {SwapOutlined} from '@ant-design/icons'
import { Button, Avatar, Typography} from 'antd'
import ReactCountryFlag from "react-country-flag"

const {Text, Title} = Typography;
function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("us");
  const [to, setTo] = useState("vn");
  const [convertAmount, setConvertAmount] = useState(0);
  const [nameFrom, setNameFrom] = useState("us");
  const [nameTo, setNameTo] = useState("vn");
  const [showResult, setShowResult] = useState(false);

  const handleConvert = () => {
    let res = 0;
    if(amount >= 0) {
      if(from === 'us' && to === 'vn') {
        res = amount * 23617.50;
      }else if(from === 'us' && to === 'au') {
        res = amount * 1.5;
      }else if(from === 'us' && to === 'jp') {
        res = amount * 142.81;
      }else if(from === 'us' && to === 'eu') {
        res = amount * 0.91;
      }else if(from === 'vn' && to === 'us') {
        res = amount * 0.000042;
      }else if(from === 'vn' && to === 'jp') {
        res = amount * 0.0060;
      }else if(from === 'vn' && to === 'eu') {
        res = amount * 0.000039;
      }else if(from === 'vn' && to === 'au') {
        res = amount * 0.000063;
      }else if(from === 'eu' && to === 'jp') {
        res = amount * 156.51;
      }else if(from === 'eu' && to === 'us') {
        res = amount * 1.10;
      }else if(from === 'eu' && to === 'au') {
        res = amount * 1.64;
      }else if(from === 'eu' && to === 'vn') {
        res = amount * 25899.28;
      }else if(from === 'jp' && to === 'vn') {
        res = amount * 165.41;
      }else if(from === 'jp' && to === 'eu') {
        res = amount * 0.0064;
      }else if(from === 'jp' && to === 'au') {
        res = amount * 0.010;
      }else if(from === 'jp' && to === 'us') {
        res = amount * 0.0070;
      }else if(from === 'au' && to === 'vn') {
        res = amount * 15780.84;
      }else if(from === 'au' && to === 'us') {
        res = amount * 0.67;
      }else if(from === 'au' && to === 'jp') {
        res = amount * 95.32;
      }else if(from === 'au' && to === 'eu') {
        res = amount * 0.61;
      }else if(from === 'us' && to === 'us') {
        res = amount;
      }else if(from === 'au' && to === 'au') {
        res = amount;
      }else if(from === 'eu' && to === 'eu') {
        res = amount;
      }else if(from === 'vn' && to === 'vn') {
        res = amount;
      }else if(from === 'jp' && to === 'jp') {
        res = amount;
      }
    }
    setConvertAmount(res);
  }

  useEffect(() => {
    if(from === 'us') {
      setNameFrom(" US Dollar")
    }else if(from === 'vn') {
      setNameFrom(" Vietnamese Dong")
    }else if(from === 'eu') {
      setNameFrom(" EURO")
    }else if(from === 'jp') {
      setNameFrom(" Japanese Yen")
    }else if(from === 'au') {
      setNameFrom(" Australian Dollar")
    }
  }, [from, to])

  useEffect(() => {
    if(to === 'us') {
      setNameTo(" US Dollar")
    }else if(to === 'vn') {
      setNameTo(" Vietnamese Dong")
    }else if(to === 'eu') {
      setNameTo(" EURO")
    }else if(to === 'jp') {
      setNameTo(" Japanese Yen")
    }else if(to === 'au') {
      setNameTo(" Australian Dollar")
    }
  }, [to])


  const handleChange = () => {
    setFrom(to);
    setTo(from);
  }

  const countries = [
    {
      code: {from},
      flag: <ReactCountryFlag countryCode={from} svg/>
    },
  ]

  return (
    <div className='wrapper_convert'>
      <Title 
        level={2}
        style={{
          // color: '#848580',
          color: '#ffffff',
          fontWeight: 'bold',
        }}
      >
        Converter
      </Title>
      <div className='amount_group'>
        <label className='label_convert'>Amount</label>
        <input
          type='number'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className='input_amount'
        ></input>
      </div>
      <div className='input_convert_group'>
      <div className='from_group'>
        <label className='label_convert'>From</label>
      
        <div className='country_from'>
          <div className='input_convert'>
              <Avatar 
                src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${from}.svg`}
                shape='square'
                style={{
                  marginLeft: '1rem'
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  textAlign: 'center',
                  marginLeft: '1rem',
                  textTransform: 'uppercase',
                  color: '#ffffff',
                }}
              >
                {nameFrom}
              </Text>
          </div>
          <select className="from_money" value={from} onChange={(e) => setFrom(e.target.value)}>
            <option value="us">USD</option>
            <option value="vn">VND</option>
            <option value="eu">EUR</option>
            <option value="au">AUD</option>
            <option value="jp">JPY</option>
          </select>
        </div>
        
      </div>
      <div className='change_group'>
        <Button
              style={{
                type: 'text',
                border: 'none',  
              }}
              shape='circle'
              onClick={handleChange}
            >
              <SwapOutlined
                style={{
                  fontSize: 22
                }}
              />
        </Button>
      </div>
      <div className='to_group'>
        <label className='label_convert'>To</label>
        <div className='country_to'>
            <div className='input_convert'>
                <Avatar 
                  src={`https://cdn.jsdelivr.net/gh/lipis/flag-icons/flags/4x3/${to}.svg`}
                  style={{
                    marginLeft: '1rem'
                  }}
                  shape='square'
                />
                <Text
                    style={{
                      fontSize: 12,
                      textAlign: 'center',
                      marginLeft: '1rem',
                      textTransform: 'uppercase',
                      color: '#ffffff',
                    }}
                  >
                    {nameTo}
                </Text>
            </div>
            <select className="to_money" value={to} onChange={(e) => setTo(e.target.value)}>
              <option value="vn">VND</option>
              <option value="us">USD</option>
              <option value="eu">EUR</option>
              <option value="au">AUD</option>
              <option value="jp">JPY</option>
            </select>
        </div>
      </div>
      </div>
      
      <div className='convert_group'>
        <Button 
          type="primary"
          onClick={handleConvert}
          style={{
            backgroundColor: '#0063EC',
            border: '2px solid #ffffff'
          }}
        >
          Convert
        </Button>
      </div>
      <div className='convert_res_group'>
        <span className='convert_res'>{`${amount} ${nameFrom}=${convertAmount} ${nameTo}`}</span>
      </div>
    </div>
  )
}

export default App
