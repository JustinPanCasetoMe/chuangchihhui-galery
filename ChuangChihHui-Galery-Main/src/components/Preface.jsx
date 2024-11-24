const Preface = ({ listings = [] }) => {

    const prefaceRender = listings.map((item, index) => {
        return(
            <p key={index} className="mg-b-10" style={{color:'#8C8383', lineHeight:'2'}}>{item}</p>
        )
    })

    return (
        <div>
            <div className="mg-b-30">
                <h2>最新消息</h2>
            </div>
            <div className="preface mg-b-box" style={{padding:'80px 50px'}}>
                {prefaceRender}
            </div>
        </div>
    )
}

export default Preface