import React from 'react'
import { Link } from 'react-router-dom'

const ErrorResponse = () => {
    return (
        <div className='bg-white absolute'>
            <h1>Page Does Not Exist 404</h1>
            <span className='text-emerald400 underline'><Link to={"/"}>Click here to go back to home screen!</Link></span>
        </div>
    )
}

export default ErrorResponse
