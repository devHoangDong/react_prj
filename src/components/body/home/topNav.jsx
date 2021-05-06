import React from 'react'
import { format } from 'date-fns'
import '../../../scss/topnav.scss'

const d = format(new Date(), 'do MMMM yyyy')
export default function TopNav() {
    return (
        <div className="topNav">
            <div className="topNav__left">
                <p className="topNav__left__title">Dashboard Overview</p>
                <p>Today, {d}</p>
            </div>
            <div className="topNav__right">
                account
            </div>
        </div>
    )
}
