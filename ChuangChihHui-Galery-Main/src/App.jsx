import './App.css'
import { useState } from 'react'
import { Route, Routes, useParams } from 'react-router'
import { useTranslation } from 'react-i18next'
import './i18n'
import { Portfolio, Experiences, Critics, Collections, Contacts, Home, Artworks, ArtworkPeriods } from './pages'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import exhibition from './datas/exhibition.json'
import competition from './datas/competition.json'
import archive from './datas/archive.json'
import artworks from './datas/artworks.json'
import criticsContent1 from './datas/criticsContent/text01.json'
import criticsContent2 from './datas/criticsContent/text02.json'
import criticsContent3 from './datas/criticsContent/text03.json'
import criticsContent4 from './datas/criticsContent/text04.json'
import criticsContent5 from './datas/criticsContent/text05.json'
import criticsContent6 from './datas/criticsContent/text06.json'
import 'slick-carousel/slick/slick.css'
import "slick-carousel/slick/slick-theme.css"
import Period_1986_2001 from './pages/Periods/Period_1986_2001'
import Period_2002_2019 from './pages/Periods/Period_2002_2019'
import Period_2020_2024 from './pages/Periods/Period_2020_2024'
import CriticsContent from './pages/CriticsContent'
import UnXiangArea from './pages/Periods/UnXiangArea'
import Input from './pages/Input'
import OrderResultURL from './pages/OrderResultURL'
import Payment from './pages/Payment'
// import { usePayment } from './hooks/usePayment'
import PaymentInfoPage from './pages/PaymentInfoPage'

function App() {

  const { CriticsItem } = useParams()

  const { t, i18n } = useTranslation() 
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng)
  }

  // Transaction
  function getCurrentTime() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    const milliseconds = String(now.getMilliseconds()).padStart(3, "0");
    const time = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`;
    const string = `${year}${month}${day}${hours}${minutes}${seconds}${milliseconds}`;
    return {time, string};
  }

  const [MerchantID, setMerchantID] = useState("3002607");
  const [Token, setToken] = useState("");
  const [Language, setLanguage] = useState(ECPay.Language.zhTW); //ECPay.Language.enUS
  const [ServerType, setServerType] = useState("Stage");
  const [IsLoading, setIsLoading] = useState(1);
  const [Version, setVersion] = useState("V2");
  const [PaymentInfo, setPaymentInfo] = useState("");
  const [MerchantTradeNo, setMerchantTradeNo] = useState("");
  const backendurl = "https://ecpay-embedded-checkout-backend.vercel.app";
  // const backendurl = "http://localhost:3000";

  return (
    <div className=''>

      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:MenuItem/'/>

        {/* Header Menu Navigation Bar Component */}
        <Route path='/portfolio' element={<Portfolio artworks={artworks}/>} />
        <Route path='/portfolio/:Classics' element={<Portfolio artworks={artworks}/>} />
        <Route path='/portfolio/:graphics' element={<Portfolio artworks={artworks}/>} />
        <Route path='/portfolio/:threeD' element={<Portfolio artworks={artworks}/>} />
        <Route 
          path='/experiences'
          element={
            <Experiences
              exhibition={exhibition}
              competition={competition}
              archive={archive}
            />}/>

        {/* Critics */}
        <Route path='/critics' element={<Critics />} />
        <Route
          path='/critics/:CriticsItem'
          element={
            <CriticsContent
              CriticsContent={
                CriticsItem == 1 ? criticsContent1 :
                CriticsItem == 2 ? criticsContent2 :
                CriticsItem == 3 ? criticsContent3 :
                CriticsItem == 4 ? criticsContent4 :
                CriticsItem == 5 ? criticsContent5 :
                CriticsItem == 6 ? criticsContent6 : {}
              }
            />
          }
        />

        <Route path='/collections' element={<Collections/>} />
        <Route path='/contacts' element={<Contacts />} />

        {/* Artworks */}
        <Route path='/portfolio/artworks/:ArtworkName' element={<Artworks artworks={artworks} mainArtwork={{}}/>} />

        {/* Period */}
        <Route path='/portfolio/periods/:Period' element={<ArtworkPeriods artworks={artworks}/>} />
        <Route path='/portfolio/periods/1986-2001' element={<Period_1986_2001 artworks={artworks} />} />
        <Route path='/portfolio/periods/2002-2019' element={<Period_2002_2019 artworks={artworks} />} />
        <Route path='/portfolio/periods/2020-2024' element={<Period_2020_2024 artworks={artworks} />} />
        <Route path='/portfolio/unxiangarea' element={<UnXiangArea artworks={artworks} />} />

        {/* Transaction */}
        <Route
          path="/transaction/input"
          element={
            <Input
              Language={Language}
              setLanguage={setLanguage}
              backendurl={backendurl}
              setToken={setToken}
              MerchantID={MerchantID}
              setMerchantID={setMerchantID}
              getCurrentTime={getCurrentTime}
              setMerchantTradeNo={setMerchantTradeNo}
            />
          }
        />
      
        <Route
          path="/transaction/payment"
          element={
            <Payment
              backendurl={backendurl}
              MerchantID={MerchantID}
              setMerchantTradeNo={setMerchantTradeNo}
              MerchantTradeNo={MerchantTradeNo}
              setPaymentInfo={setPaymentInfo}
              Token={Token}
              Language={Language}
              ServerType={ServerType}
              IsLoading={IsLoading}
              Version={Version}
            />
          }
        />

        <Route
          path="/OrderResultURL"
          element={
            <OrderResultURL
              backendurl={backendurl}
              Language={Language}
            />
          }
        />

        <Route
            path="/PaymentInfoPage"
            element={<PaymentInfoPage PaymentInfo={PaymentInfo} />}
        />
        
      </Routes>

      <Header />
      <Footer />
    </div>
  )
}

export default App
