
import FooterOne from "@/layouts/footers/FooterOne";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Wrapper from "@/layouts/Wrapper";
import GalleryArea from "./GalleryArea";

export default function Gallery() {
  return (
    <Wrapper>
      <HeaderOne />
      <div id="smooth-wrapper">
        <div id="smooth-content" style={{ paddingTop: '120px' }}>
          <GalleryArea />
          <FooterOne />
        </div>
      </div>
    </Wrapper>
  )
}
