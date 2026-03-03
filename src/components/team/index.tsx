
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Wrapper from '@/layouts/Wrapper' 
import MessageFromLeaders from './MessageFromLeaders'

export default function Leadership() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <MessageFromLeaders />           
          <FooterOne />         
        </div>
      </div>
    </Wrapper>
  )
}
