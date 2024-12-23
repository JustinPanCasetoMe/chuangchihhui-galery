import React from 'react'
import { useParams } from 'react-router'
import criticsContent from '../datas/criticsContent/text01.json'

const CriticsContent = ({ }) => {

    const { CriticsItem } = useParams()
    console.log(CriticsItem)


    const criticsRender = criticsContent.map((critic, index) => {

        const contentRender = criticsContent.map((criticContent, criticIndex) => {

            const topicRender = criticContent.topic.map((topic, topicIndex) => {
                return(
                    <h4 key={topicIndex} className='fw-b' style={{color:'#000'}}>{topic}</h4>
                )
            })

            const paragraphRender = criticContent.content.map((paragraph, paragraphInex) => {
                return(
                    <h4 key={paragraphInex} className='mg-b-10' style={{color:'#000', fontWeight:'200'}}>{paragraph}</h4>
                )
            })

            return(
                <div key={criticIndex} style={{marginBottom:'80px'}}>
                    <div className='mg-b-20'>
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
                    <div className='bd-b mg-b-30 df jc-sb aln-itm-fe'>
                        <h2 className=''>{critic.title}</h2>
                        <h4>{critic.position} {critic.author} {critic.year}</h4>
                    </div>
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