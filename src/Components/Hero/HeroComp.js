import React from 'react'
import HeroSlider, { Overlay, Slide, MenuNav } from "hero-slider";
import Wrapper from "../Hero/Wrapper";


const bogliasco = "https://i.ibb.co/gz4SLgT/maxresdefault-7.jpg";
const countyClare = "https://i.ibb.co/1zkv0z3/maxresdefault-8.jpg";
const craterRock = "https://i.ibb.co/NmZVwkV/maxresdefault-9.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";
const dejongo = "https://i.ibb.co/NmZVwkV/maxresdefault-9.jpg";
const hihihihi = "https://i.ibb.co/NmZVwkV/maxresdefault-9.jpg";

export default function BasicSlider() {
  return (
    <HeroSlider
      height={"100vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide)
      }}
    >
      <Overlay>
        <Wrapper>
          
        </Wrapper>
      </Overlay>

      <Slide
        shouldRenderMask
        label="Giau Pass - Italy"
        background={{
          backgroundImageSrc: giauPass
        }}
      />

      <Slide
        shouldRenderMask
        label="Bogliasco - Italy"
        background={{
          backgroundImageSrc: bogliasco
        }}
      />

      <Slide
        shouldRenderMask
        label="County Clare - Ireland"
        background={{
          backgroundImageSrc: countyClare
        }}
      />

      <Slide
        shouldRenderMask
        label="Crater Rock, OR - United States"
        background={{
          backgroundImageSrc: craterRock
        }}
      />

      <Slide
        shouldRenderMask
        label="dejongo, OR - Sri Lanka"
        background={{
          backgroundImageSrc: dejongo
        }}
      />

      <Slide
        shouldRenderMask
        label="hihihihi, OR - Sri Lanka"
        background={{
          backgroundImageSrc: hihihihi
        }}
      />

      <MenuNav />
    </HeroSlider>
  );
}
