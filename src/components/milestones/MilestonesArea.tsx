
"use client";
import Slider from "react-slick";

const image_data = [
  {
    image: "https://picsum.photos/seed/1/600/400",
    hint: "building foundation"
  },
  {
    image: "https://picsum.photos/seed/2/600/400",
    hint: "government partnership"
  },
  {
    image: "https://picsum.photos/seed/3/600/400",
    hint: "health authority"
  },
  {
    image: "https://picsum.photos/seed/4/600/400",
    hint: "business license"
  },
  {
    image: "https://picsum.photos/seed/5/600/400",
    hint: "digital platform"
  },
  {
    image: "https://picsum.photos/seed/6/600/400",
    hint: "achievement celebration"
  }
];

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} milestone-arrow milestone-next`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} milestone-arrow milestone-prev`}
      style={{ ...style }}
      onClick={onClick}
    />
  );
}


export default function MilestonesArea({ dictionary }: { dictionary: any }) {

  const milestones = dictionary.items.map((item: any, index: number) => ({
    ...item,
    ...image_data[index]
  }));
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <section className="azzle-section-padding">
      <div className="container">
        <div className="azzle-section-title center max-width-780" data-aos="fade-up" data-aos-delay="500">
          <h2>{dictionary.title}</h2>
        </div>
        <div className="milestones-carousel-wrapper" data-aos="fade-up">
        <Slider {...settings} className="milestones-carousel mobile-single-slide">
          {milestones.map((milestone: any, index: number) => (
            <div key={index}>
              <div className="milestone-card">
                <div className="milestone-card-image">
                  <img src={milestone.image} alt={milestone.title} data-ai-hint={milestone.hint} />
                </div>
                <div className="milestone-card-content">
                  <div className="milestone-card-year">{milestone.year}</div>
                  <h3 className="milestone-card-title">{milestone.title}</h3>
                  <p className="milestone-card-description">{milestone.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </section>
  );
}
