import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import HeroHomeOne from "./HeroHomeOne";
import FeaturesHomeOne from "./FeaturesHomeOne";
import AboutHomeOne from "./AboutHomeOne";
import PricingHomeOne from "./PricingHomeOne";
import FaqHomeOne from "./FaqHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";
import FooterOne from "@/layouts/footers/FooterOne";
import QuoteHomeOne from "./QuoteHomeOne";

export default function HomeOne({ dictionary, lang }: { dictionary: any, lang: string }) {
	return (
		<Wrapper>
			<HeaderOne dictionary={dictionary} lang={lang} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
          <HeroHomeOne dictionary={dictionary.hero} lang={lang} />
          <FeaturesHomeOne dictionary={dictionary.features} lang={lang} />
          <AboutHomeOne dictionary={dictionary.about} />
          <PricingHomeOne dictionary={dictionary.mission_vision} />
          <QuoteHomeOne dictionary={dictionary.quote} />
          <FaqHomeOne dictionary={dictionary.faq} lang={lang} />
          <TestimonialHomeOne dictionary={dictionary.testimonials} />
          <FooterOne dictionary={dictionary.footer} lang={lang} />
        </div>
			</div>
		</Wrapper>
	);
}
