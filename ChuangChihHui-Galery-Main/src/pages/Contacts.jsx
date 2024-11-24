import React from 'react'
import { Link } from 'react-router-dom'

const Contacts = () => {
  return (
    <div>
      <h1 className='fw-b' style={{marginBottom:'20px'}}>聯繫我們</h1>
      <h1 className='fw-b' style={{marginBottom:'80px'}}>歡迎合作邀約</h1>
      <div style={{marginBottom:'80px'}}>
        <h3 className='mg-b-20'>經紀人：楊素敏小姐</h3>
        <h3 className='mg-b-20'>聯絡電話：０９１１８６８６４９</h3>
        <h3 className='mg-b-20'>工作室地址：新竹市東區學府路１９號</h3>
        <h3 className='mg-b-20'>EMAIL：yamifilm@gmail.com</h3>
      </div>
      {/* <div className='df jc-c' style={{marginBottom:'120px'}}>
        <div className='fh df jc-sb aln-itm-c' style={{width:'1000px'}}>
          <Link to='/chuangchihhui-galery/'>
            <div className="Logo df aln-itm-c">
              <img 
                src="https://live.staticflickr.com/65535/54137328621_14ed0a9d0d_c.jpg"
                alt=""
                className='mg-r-20'
                style={{height:'50%'}}
              />
              <div>
                <h2>莊志輝</h2>
                <h2>CHUANG CHIH HUI</h2>
              </div>
            </div>
          </Link>
          
        </div>
      </div> */}
      <div>
        <ul className='df'>
          <a href='https://maps.app.goo.gl/A4tttWxRBfXKYTRf8' className='outerLink mg-r-30' target='_blank'><li>地址</li></a>
          <a href='https://www.instagram.com/sawago88/' className='outerLink mg-r-30' target='_blank'><li>IG</li></a>
          <a href='https://www.facebook.com/chc888' className='outerLink mg-r-30' target='_blank'><li>FB</li></a>
          <a href='https://youtu.be/aSooyTSjAh8?si=kG7R3wzFHLUqbYqg' className='outerLink mg-r-30' target='_blank'><li>紀錄片</li></a>
        </ul>
      </div>
    </div>
  )
}

export default Contacts