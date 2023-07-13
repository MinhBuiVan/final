import { useState } from 'react'
import { Input ,Typography } from 'antd'
import './App.css'

const { Text, Title } = Typography;

function Hi() {
    const [word, setWord] = useState("");

    const handle = (e) => {
        setWord(e.target.value);
    }

  return (
    <div className='wrapper_hi'>
        <Title 
            level={5}
            style={{
                color: '#848580',
                fontWeight: 'bold'
            }}
        >
            Enter Something
        </Title>
            <Input
                style={{
                    maxWidth: '20rem',
                    border: '2px solid #ccc',
                    color: '#848580',
                    fontSize: '1.2rem'
                }}
                value={word}
                onChange={handle}
            >
            </Input>
        <Text
            style={{
                maxWidth: '20rem',
                margin: '3rem 0',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '0.2rem',
                lineHeight: '2rem',
            }}
        >
            {word}
        </Text>
    </div>
  )
}

export default Hi