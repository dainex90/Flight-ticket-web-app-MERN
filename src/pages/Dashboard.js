import React from 'react'
import SideNavbar from '../components/SideNavbar'
import { useSelector } from 'react-redux';
import { Navigate, useNavigate } from 'react-router-dom';
const Dashboard = () => {

  const navigate = useNavigate()
    // Redux setup
    const { email, password, loggedIn } = useSelector(state => state.user);

  return (
    <div className='page-content'>
      {!loggedIn && navigate("/pagenotfound")}
            < SideNavbar />
            <div className="inner-page-content">
                <h2> Welcome <span style={{color: 'orange'}}>
                    {email} </span>, You have password <span style={{color: 'orange'}}>
                    {password} </span> and We have missed you!</h2>
                    <h3>This is your Dashboard!<br></br> under <strong>My tickets</strong> you can find all of your owned tickets.</h3>
                    
            </div>
    </div>
  )
}

export default Dashboard
