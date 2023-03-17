import React from 'react'
import { TfiMenu } from 'react-icons/tfi'
import { useSelector } from 'react-redux'

const DashboardHeader = ({setShowSidebar}) => {
  const {user} = useSelector(state=> state.user)

  return (
    <>
       <TfiMenu onClick={()=> setShowSidebar(true)} className="dashboard-menu" size={28} />
          <div className="dashboard-header">
            Welcome {user?.username}, Your balance is  ${user?.balance}
          </div>
    </>
  )
}

export default DashboardHeader