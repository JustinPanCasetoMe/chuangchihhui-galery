import React from 'react'
import { useTranslation } from 'react-i18next';

const Critics2 = () => {
  const { t } = useTranslation();

  return (
  <div className='criticsContainer'>
    <div className='title'>
        <h2><b>{t('風‧海‧記憶──莊志輝的藝術創作')}</b></h2>
        <h4>{t('國立成功大學歷史系名譽教授 蕭瓊瑞')}</h4>
    </div>
    <div className='content'>
      <h4>{t('長居新竹的莊志輝（1965-），出生澎湖鎖港，從小立志成為「偉大藝術家」的他，作品中充滿了風城與海港的記憶，化成一幅幅、一座座看似熟悉，卻又不可掌握的記憶圖像；那是介於現實與超現實之間的心靈塑像，無法言喻、但可心傳。')}</h4>
      <h4>{t('16歲那年，他勇跨黑水溝，前往新竹圓夢。4年後即推出個展，深獲好評；隔年，即帶著回家交作業的心情，準備返鄉展出，無奈遇上史上怪颱「韋恩」，摧毀了他大量的作品。那是1986年8月。')}</h4>
      <h4>{t('36年後的2022年，同樣是8月，莊志輝已然是一個歷經海內外無數次展出的成熟藝術家，精選一百多件作品，以「閱讀記憶」為名，重新回到故鄉澎湖，為父老、弟兄姊妹與晚輩，呈顯他近半世紀努力耕耘的成果。')}</h4>
      <h4>{t('莊志輝的創作，包含立體雕塑與平面繪畫兩大區塊，儘管材質有異，但藝術的思維與表現的手法，則頗為一致，那是成功的藝術家必然的特質；但更重要的是：思維、風格貫連，作品卻不重覆；顯然，每一次次的創作，就是一個個獨立的生命悸動與探索，也是一次次獨立的挑戰與完成。')}</h4>
      <h4>{t('莊志輝創作中最明顯的圖像，尤其是早期的作品，似乎都和海洋、魚、船、女孩有關，而這些元素，不免令人容易聯想起那美麗的人魚公主的故事；一個因為愛情而願意犧牲「聲音」去換取一雙能夠離海上岸的雙腳的海中女孩。')}</h4>
      <h4>{t('不過這個美麗卻淒涼的故事，來到了莊志輝的筆下，卻不因最後的勇敢示愛而化為泡沫；反而是因為勇於追求而化成飛鳥，那不正是他的先祖「莊子」筆下鯤鯓化為大鵬的宏偉譬喻？')}</h4>
      <h4>{t('莊志輝離開故鄉，在風城新竹獲得成就，把來自澎湖海鄉的滋養，化為歷經紅塵考驗的粒粒果實；有問世間情為何物的戀戀苦尋、有充滿引誘的慾望城市、有在孤獨中尋找方向的迷惘，有四季流轉的情境浪漫，也有帶著音樂去旅行的愉悅…..；而竹塹地區特殊的宗教風情，也顯然在他近期的作品中，扮演了一定的角色，特別是那些充滿禪味的油畫，以及禪定如山的坐佛銅雕。')}</h4>
      <h4>{t('莊志輝的創作除了創作意念與造型上的獨特，在立體雕塑上的材料運作，更是充滿創意與幽默，特別是〈慢步行走的魚〉（2022）、〈宇宙快遞〉（2022）等等，也都讓人感受到從漁鄉走向風城的生命之旅。')}</h4>
      <h4>{t('2022年的返鄉之展，是莊志輝藝術行旅中的重要一站，也期待鄉親對這位傑出子弟的創作成果，給予最熱切的關懷、欣賞，與支持。')}</h4>

      {/* <h4>國立成功大學歷史系名譽教授</h4> */}
    </div>
  </div>
  )
}

export default Critics2