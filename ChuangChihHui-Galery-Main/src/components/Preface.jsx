const Preface = ({ listings = [] }) => {

    const prefaceRender = listings.map((item, index) => {
        return(
            <p key={index} className="mg-b-10">{item}</p>
        )
    })

    return (
        <div className="preface pd-50 mg-b-box">
            {prefaceRender}
        </div>
    )
}

export default Preface