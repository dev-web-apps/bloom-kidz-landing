import { Box, Container, Typography } from "@mui/material";
import { SwiperSlide } from "swiper/react";

import { FeatureCard, Slider } from "../../components";
import { featureData } from "../../mocks/home";

const KeyFeatures = () => {
  return (
    <Box>
      <Container maxWidth="lg">
        <Box my={10}>
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
      </Container>
    </Box>
  );
};

export default KeyFeatures;
