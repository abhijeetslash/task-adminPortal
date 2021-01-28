import React from 'react'
import { Link } from 'react-router-dom'

const Main = () => {
    return (
        <div>
            <div>
                <Link to='/users?email=gmail'>Gmail users</Link>
            </div>
            <div>
                <Link to='/users?email=example'>Example users</Link>
            </div>
        </div>
    )
}

export default Main
