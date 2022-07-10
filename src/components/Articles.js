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
                <Article articleName='tools' url='https://www.ebay.com/b/Bonsai-Scissor-Bonsai-Tools/75664/bn_7115963491?mkevt=1&siteid=1&mkcid=2&mkrid=711-153320-877673-6&source_name=google&mktype=dsa&campaignid=16573845087&groupid=139820097252&crlp=587861631591&keyword=&targeted=dsa-19959388920&MT_ID=&adpos=&device=c&googleloc=9062774&geo_id=56&gclid=Cj0KCQjw8amWBhCYARIsADqZJoWdwIySyTwu7i5mZ3X8Z-dIUGtPrtXHoWXguffAN4iZnVoF7YRrZH8aAvMIEALw_wcB' header='Tools' />
            </div>
        </div>
    )
}

export default Articles