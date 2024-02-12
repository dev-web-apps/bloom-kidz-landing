import { Box, Typography } from "@mui/material";
import { featureData } from "../../../mocks/home";
import { SwiperSlide } from "swiper/react";
import { FeatureCard, Slider } from "../../../components";

const SliderSection = () => {
  return (
    <Box mt={10} mb={2}>
      <Typography textAlign={"center"} variant="h2">
        Key Features
      </Typography>
      <Box p={2} py={10} alignSelf={"center"}>
        <Slider>
          {featureData.map((data, index) => (
            <SwiperSlide key={index}>
              <FeatureCard
                icon={data.icon}
                subText={data.subText}
                heading={data.heading}
              />
            </SwiperSlide>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};

export default SliderSection;
