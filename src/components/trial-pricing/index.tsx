import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import TrialPricingArea from "./TrialPricingArea";

export default function TrialPricing() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <TrialPricingArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
