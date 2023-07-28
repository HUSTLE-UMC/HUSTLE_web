import * as F from './FooterStyles'
import sendIcon from '../../stories/assets/Vector.png'

const footer = () => {
  return (
    <>
    <F.Footer>
    <F.Table>
      <F.tHead>
        <tr>
          <F.td>Product</F.td>
          <F.td>Information</F.td>
          <F.td>Development</F.td>
          <F.td>Subscribe</F.td>
        </tr>
      </F.tHead>
      <F.tBody>
        <tr>
          <F.td>COMPETITION</F.td>
          <F.td>TEAM</F.td>
          <F.td>UMC 4TH HUSTLE</F.td>
          <F.td rowSpan={2}>이메일 폼 만들기</F.td>
        </tr>
        <tr>
            <F.td>FRIENDLY MATCH</F.td>
          </tr>
          <tr>
            <F.td>SPORTS</F.td>
          </tr>
          <tr>
              <F.td>University Team</F.td>
              {/* <F.td colSpan={4}>이메일을 입력하시면 각종 대회 정보 및, 교류전 정보를<br/> 이메일로 발송해드립니다.</F.td> */}
          </tr>
          <tr>
              <F.td>RANKING</F.td>
          </tr>
          <tr>
              <F.td>MVP of the Game</F.td>
          </tr>
          <tr>
              <F.td>VIDEOS</F.td>
          </tr>

      </F.tBody>
    </F.Table>
  </F.Footer>
  </>
  )
}

export default footer;
