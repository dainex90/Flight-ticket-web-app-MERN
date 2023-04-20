import React from 'react'
import SideNavbar from '../components/SideNavbar'

const Settings = () => {
  return (
    <div className='page-content'>
        <SideNavbar />
        <div className='settings-container'>
            <div className='settings-inner-left'>
                <div className='settings-form'>
                    <input 
                        type='button'
                        value="General Settings"
                    />
                    <input 
                        type='button'
                        value="Account Settings"
                    />
                    <input 
                        type='button'
                        value="Regional"
                    />
                    <input 
                        type='button'
                        value="Miscoullaneous"
                    />
                </div>
            </div>
            <div className='settings-inner-right'>

            </div>
        </div>
    
    </div>
  )
}

export default Settings
