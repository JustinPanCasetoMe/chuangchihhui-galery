import React from 'react'
import { useParams } from 'react-router'
import criticsContent from '../datas/criticsContent/text01.json'

const CriticsContent = ({ critics = [] }) => {

    const { CriticsItem } = useParams()

    const criticsRender = critics.map((critic, index) => {

        const contentRender = criticsContent.map((criticContent, criticIndex) => {

            const topicRender = criticContent.topic.map((topic, topicIndex) => {
                return(
                    <h3 key={topicIndex} className='fw-b' style={{color:'#000'}}>{topic}</h3>
                )
            })

            const paragraphRender = criticContent.content.map((paragraph, paragraphInex) => {
                return(
                    <h3 key={paragraphInex} className='mg-b-10' style={{color:'#000', fontWeight:'200'}}>{paragraph}</h3>
                )
            })

            return(
                <div key={criticIndex} style={{marginBottom:'50px'}}>
                    <div className='mg-b-30'>
                        {topicRender}
                    </div>
                    <div>
                        {paragraphRender}
                    </div>
                </div>
            )

        }) 

        if( critic.id == CriticsItem ){
            return(
                <div key={`${index}`}>
                    <h2 className='bd-b mg-b-50'>{critic.title}</h2>
                    {contentRender}
                </div>
            )
        }
    })

    return (
    <div>
        {criticsRender}
    </div>
    )
}

export default CriticsContent