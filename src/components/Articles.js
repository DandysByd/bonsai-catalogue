import React from 'react'
import Article from './Article'

const Articles = () => {
    return (
        <div className='articles'>
            <div className='articles__first'>
                <div className='articles__half'>
                    <Article articleName='shapes' url='#' header='Shapes' />
                    <Article articleName='contact' url='#' header='Contact us' />
                </div>
                <Article articleName='types' url='#' header='Types of bonsai' />
            </div>
            <div className='articles__second'>
                <Article articleName='guides' url='#' header='How to create bonsai' />
                <Article articleName='tools' url='#' header='Tools' />
            </div>
        </div>
    )
}

export default Articles