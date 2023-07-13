import { useState, useEffect } from 'react';
import "./App.css"
import { Row, Col, Typography, Input, Button, Card } from 'antd';

const { Title } = Typography;
function App() {
  const [quotes, setQuotes] = useState([]);
  const [numberOfQuote, setnumberOfQuote] = useState('');

  useEffect(() => {
    fetchQuotes();
  }, []);

  const changeNum = () => {
    const num = parseInt(numberOfQuote);
    if (!isNaN(num) && num > 0) {
      setnumberOfQuote(num);
      fetchQuotes();
    }
  };

  const fetchQuotes = async () => {
    try {
      const response = await fetch('http://localhost:3000/quotes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ num: numberOfQuote }),
      });

      const data = await response.json();

      if (data && data.length > 0) {
        setQuotes(data);
      }
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };


  return (
    <div className="wrapper_quote">
      <Title
        level={2}
        style={{
          color: '#848580',
        }}
      >
        Quote of the day
      </Title>
      <div className='group_quote'>
        <Title 
          level={5}
          style={{
            marginLeft: '1rem',
            color: '#848580',
          }}
        >
          Enter a Number
        </Title>
        <div className='input_group_quote'>
          <Input 
            placeholder="Enter the number of quote" 
            value={numberOfQuote} 
            onChange={(e) => setnumberOfQuote(e.target.value)}
            style={{
              maxWidth: '20rem',
              fontWeight: 'bold'
            }}
          />
          <Button 
            type="primary" 
            onClick={changeNum}
            style={{
              height: 50,
              backgroundColor: '#FF9240',
              marginLeft: '1rem',
            }}
          >
            Click
          </Button>
        </div>
      </div>
      <div>
          <Row
            gutter={{
              xs: 8,
              sm: 16,
              md: 24,
              lg: 32,
            }}
          >
            {quotes.map((quote, index) => (
              <Col 
                key={index}  className='gutter-row'
                xs={{ span: 32, order: 1}} 
                sm={{ span: 24, order: 3}} 
                md={{ span: 12, order: 3}} 
                lg={{ span: 8, order: 4}} 
                xl={{ span: 6, order: 4}}
              >
                <Card 
                  title={quote.author} bordered={false}
                  style={{
                    backgroundColor: '#FF9240',
                    color: '#FFFFA9'
                  }}
                  headStyle={{
                    color: '#FFFFA9',
                    fontSize: '1.2  rem',
                  }}
                >
                  {quote.quote}
                </Card>
              </Col>
            ))}
          </Row>
      </div>   
    </div>
  );
}

export default App;