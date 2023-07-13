import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';

const workTime = 10;
const breakTime = 5;
const modes = ['working', 'breaking']

function App() {
  const [now, setNow] = useState(new Date());
  const [working, setWorking] = useState(workTime);
  const [breaking, setBreaking] = useState(breakTime);
  const [elaptime, setElaptime] = useState(working);
  const [mode, setMode] = useState('working');

  useEffect(() => {
    setTimeout(() => {
      setNow(new Date());

    }, 1000)
  }, [now])

  useEffect(() => {
    const intervalId = setInterval(() => {
      setElaptime(prev => prev -1);
    }, 1000)
    return () => clearInterval(intervalId);
  }, [elaptime])

  useEffect(() => {
    setTimeout(() => {
      if(elaptime === 0) {
        if(mode === 'working') {
          setMode(modes[1]);
          setElaptime(breaking);
        } else {
          setMode(modes[0]);
          setElaptime(working);
        }
      }
    }, 1000)
  }, [working, breaking, elaptime, mode])

  
    const totalSeconds = elaptime;
    const hours = Math.floor(totalSeconds / 3600); // get Hours
    const minutes = Math.floor((totalSeconds % 3600) / 60); // get Minutes
    const seconds = totalSeconds % 60; // get seconds
    const dateString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;

  return (
    <div className='wrapper'
      style={mode === 'working' ? {
        backgroundColor: '#38858a',
        color: '#fff',
      } : 
      {
        backgroundColor: '#FFD154',
        color: '#002795',
      }}
    >
      <div className='header_pomodoro'>
        <span className='header_logo'>
          <img className='img_logo' src='https://pomofocus.io/images/icon-white2.png'></img>
          <span className='header_title'>Pomodoro</span>
        </span>
      </div>

      <div className='content'>
        <div className='content_realtime'>
          {now.toLocaleTimeString()}
        </div>
        <div className='content_timer'>
          <div>
            <p className='timer_state'>{mode === 'breaking' ? 'Working Time' : 'Breaking Time'}</p>
            <div className='timer_clock'>
              {dateString}
            </div>
            <div className='group_setting_time'>
              <span className='text_setting'>Working Time</span>
              <input 
                type='text' 
                placeholder='Working'
                value={working}
                onChange={(e) => setWorking(e.target.value)}
                className='input_time'
              >
              </input>
            </div>
            <div className='group_setting_time'>
              <span className='text_setting'>Breaking Time</span>
              <input 
                type='number' 
                placeholder='Breaking'
                value={breaking}
                onChange={(e) => setBreaking(e.target.value)}
                className='input_time'
              >
              </input>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
