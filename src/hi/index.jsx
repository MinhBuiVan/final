import { useState } from 'react'
import { Input ,Typography, Checkbox } from 'antd'
import './App.css'

const { Text, Title } = Typography;

function Hi() {
    const [word, setWord] = useState("");
    const [upper, setUpper] = useState(false);

    const handle = (e) => {
        setWord(e.target.value);
    }

    const handleChecked = (e) => {
        setUpper(e.target.checked);
    }
    
    const handleDisplayWord = () => {
        if(upper) {
            return word.toUpperCase();
        }else {
            return word.toLowerCase();
        }
    }


  return (
      <div className='wrapper_hi'>
            <Title
                style={{
                    color: '#FFFFA9',
                }}
            >Typing</Title>
            <Title 
                level={5}
                style={{
                    fontWeight: 'bold',
                    marginRight: '18.5rem',
                    color: '#FFFFA9',
                }}
            >
                Enter Something
            </Title>
        
            <div className='group_input'>
                <Input
                    style={{
                        maxWidth: '20rem',
                        border: '2px solid #ccc',
                        color: '#848580',
                        fontSize: '1.2rem'
                    }}
                    value={upper ? word.toUpperCase() : word}
                    onChange={handle}
                >
                </Input>
                <div className='group_check'>
                    <Checkbox 
                        onChange={handleChecked}
                        checked= {upper}
                        style={{
                            marginLeft: '1rem',
                        }}
                    >
                    </Checkbox>
                    <Text 
                        style={{
                            marginLeft: '1rem', 
                            color: '#FFFFA9',
                            fontWeight: 'bold'
                        }}
                    >
                        Check to Uppercase
                    </Text>
                </div>
            </div>
        <Text
            style={{
                maxWidth: '20rem',
                margin: '3rem 6.4rem 3rem 0',
                fontSize: '1rem',
                border: '1px solid #ccc',
                borderRadius: '0.2rem',
                lineHeight: '2rem',
                backgroundColor: '#ffffff',
                color: '#848580',
            }}
        >
            {handleDisplayWord()}
        </Text>
    </div>
  )
}

export default Hi