import React from 'react'

function header() {
    return (
        <div className='header'>
            <img src='../images/logo.png' />
            {/* <img
                src='https://www.citypng.com/public/uploads/preview/-11596409208veqai6z1fx.png' /> */}
            <div className='header_serach'>
                <input className='header_serachInput' type="text" />
            </div>
            <div className='header_nav'>
                <div className='header_option1'>
                    <span className='header_optionline1'>Hello Guest</span>
                    <span className='header_optionline2'>Sign Guest</span>
                </div>
                <div className='header_option2'>
                    <span className='header_optionline1'>Hello Guest</span>
                    <span className='header_optionline2'>Sign Guest</span>
                </div>
                <div className='header_option3'>
                    <span className='header_optionline1'>Hello Guest</span>
                    <span className='header_optionline2'>Sign Guest</span>
                </div>
            </div>
        </div>
    )
}

export default header
