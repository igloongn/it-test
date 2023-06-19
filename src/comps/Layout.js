import React from 'react'
import CustomAppBar from './Navbar'
const Layout = ({ children }) => {
    return (
        <div>
            <div>
                <CustomAppBar />
            </div>
            
            <div>
                {children}
            </div>
        </div>
    )
}

export default Layout
