import React from 'react'
import { Dropdown, Avatar, Typography } from 'antd';
const Text = Typography.text;

function Language({lang, languages}) {
    /* language = [{
        key: 'vi',
        label: '',
    }]
    */
    function getFlag(lang) {
        
        return (
            <Avatar 
                src={`./flags/${lang}`}
            />
        )
    }

    const selectedLang = languages.find(item => item.lang === lang)
    const menuItems = languages.map(item => ({
        key: item.lang,
        label: item.label,
        icon: getFlag(item.lang)
    }))
  return (
    <div className='language'>
        <Dropdown 
            menu={{items : menuItems}}
            trigger={['click']}
        >
            <div>
                <Avatar 
                    src={`./flags/${lang}`}
                />
                <Text>{selectedLang.label}</Text>
            </div>
        </Dropdown>
    </div>
  )
}

export default Language