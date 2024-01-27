import React from 'react'
import styles from './dashboard.module.scss'
import DashboardLayout from '@/components/Layouts/DashboardLayout'
import Card from '@/components/Card'

const Dashboard = () => {
  return (
    <div>
        <DashboardLayout>
            <Card/>
        </DashboardLayout>
    </div>
  )
}

export default Dashboard