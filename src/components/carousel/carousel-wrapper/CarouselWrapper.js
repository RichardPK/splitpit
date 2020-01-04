import React, { useRef, useState } from 'react';
import styled from 'styled-components/macro';
import Swiper from 'react-id-swiper';
import Devices from '../../../consts/Devices';
import Colors from '../../../consts/Colors';
import CarouselItem from '../carousel-item/CarouselItem';
import CarouselProgressBar from '../carousel-progress-bar/CarouselProgressBar';
import CarouselDots from '../carousel-dots/CarouselDots';

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentIndex: 0,
      carouselData: this.props.carouselData,
      swiper: null,
      awaitCarouselRender: true
    };

    this.yesClick = this.yesClick.bind(this);
    this.noClick = this.noClick.bind(this);
    this.carouselItemRef = React.createRef();
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ awaitCarouselRender: false });
    }, 400);
  }

  yesClick() {
    setTimeout(() => this.state.swiper.slideNext(), 500);
  }

  noClick() {
    this.state.swiper.slidePrev();
  }

  render() {
    const params = {
      initialSlide: 0,
      allowTouchMove: true,
      slidesPerView: 1.1,
      spaceBetween: 10,
      speed: 400,
      centeredSlides: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true
      },
      breakpoints: {
        1440: {
          slidesPerView: 5,
          spaceBetween: 50
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
          allowTouchMove: false
        }
      },
      on: {
        slideChange: () =>
          this.state.swiper && this.setState({ currentIndex: this.state.swiper.activeIndex })
      }
    };

    return (
      <>
        {this.state.currentIndex !== null && this.state.carouselData ? (
          <>
            <PageWrapper className={this.props.className}>
              <SwiperWrapper>
                {this.state.awaitCarouselRender === false ? (
                  <Swiper getSwiper={(swiperEl) => this.setState({ swiper: swiperEl })} {...params}>
                    {this.state.carouselData.map((item, index) => {
                      return (
                        <div>
                          <CarouselItem
                            key={index}
                            index={index}
                            onClick={() => {
                              this.state.swiper.slideTo(index);
                            }}
                          />
                        </div>
                      );
                    })}
                  </Swiper>
                ) : null}
              </SwiperWrapper>

              <CarouselDots
                items={this.state.carouselData}
                currentIndex={this.state.currentIndex}
                color={Colors.black}
                backgroundColor={Colors.white}
              />

              <CarouselProgressBar
                completed={this.state.currentIndex + 1}
                total={this.state.carouselData.length}
              />
            </PageWrapper>
          </>
        ) : null}
      </>
    );
  }
}

const PageWrapper = styled.div`
  width: 100%;
  position: relative;
`;

const SwiperWrapper = styled.div`
  .swiper-container {
    overflow: visible !important;

    .swiper-slide {
      opacity: 0.5;
      transition: opacity 0.3s, transform 0.3s;

      .yes-no-toggle {
        pointer-events: none;
      }
    }
    .swiper-slide-active {
      .yes-no-toggle {
        pointer-events: auto;
      }
      opacity: 1;
      transition: opacity 0.3s, transform 0.3s;

      @media ${Devices.tablet} {
        transform: scale(1.05);
      }

      @media ${Devices.laptopL} {
        transform: scale(1.08);
      }
    }
  }
`;

export default Carousel;
