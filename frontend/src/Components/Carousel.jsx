import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Container, Image } from "@chakra-ui/react";
import c1 from "../Images/c1.jpg";
import c2 from "../Images/c2.jpg";
import c3 from "../Images/c3.jpg";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000
    };
    return (
        <Container minW={"7xl"}>
            <Slider {...settings}>
            <Box>
                <Image width={"100%"} margin={"auto"} src={c3} />
            </Box>
            <Box>
                <Image width={"100%"} margin={"auto"} src={c2} />
            </Box>
            <Box>
                <Image width={"100%"} margin={"auto"} src={c1} />
            </Box>
            </Slider>
        </Container>
    );
  }
}