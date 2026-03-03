
import FooterOne from '@/layouts/footers/FooterOne'
import HeaderOne from '@/layouts/headers/HeaderOne'
import Wrapper from '@/layouts/Wrapper'
import MessageFromLeaders from '@/components/team/MessageFromLeaders'
import { getDictionary } from "@/lib/get-dictionary";
import { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ lang: Locale }>;
};

export default async function LeadershipPage({ params }: Props) {
  const { lang } = await params;
  const dictionary = await getDictionary(lang);
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
