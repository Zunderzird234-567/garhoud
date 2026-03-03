
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Wrapper from '@/layouts/Wrapper' 
import MessageFromLeaders from './MessageFromLeaders'

export default function Leadership({ dictionary, lang }: { dictionary: any; lang: string }) {
  return (
    <Wrapper>
      <HeaderOne dictionary={dictionary} lang={lang} />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <MessageFromLeaders dictionary={dictionary.team_page} />           
          <FooterOne dictionary={dictionary.footer} lang={lang} />         
        </div>
      </div>
    </Wrapper>
  )
}
