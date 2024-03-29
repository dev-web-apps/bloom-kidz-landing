import { Box, Grid, Stack, Typography } from "@mui/material";
import TrustPilot from "../../../assets/Trustpilot.png";
import { ReviewCard } from "../../../components";
import { reviewData } from "../../../mocks/home";

const Reviews = () => {
  return (
    <Box px={1} pb={4}>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        mb={3}
      >
        <Typography variant="h2" fontWeight={700}>
          Trusted by millions of <br /> nurseries & parents.
        </Typography>
        <Stack spacing={1}>
          <img
            src={TrustPilot}
            alt=""
            style={{ width: "160px", height: "auto" }}
          />
          <Typography fontSize={"15px"} textAlign={"end"}>
            4.5/5 (25 avis)
          </Typography>
        </Stack>
      </Box>
      <Grid container spacing={2}>
        {reviewData.map(
          (review, index) =>
            index % 2 === 0 && (
              <Grid key={index} item xs={12} sm={6} md={4}>
                <Stack>
                  <ReviewCard
                    name={review.name}
                    position={review.position}
                    text={review.text}
                    secondPara={review.secondPara}
                  />
                  {reviewData[index + 1] && (
                    <ReviewCard
                      name={reviewData[index + 1].name}
                      position={reviewData[index + 1].position}
                      text={reviewData[index + 1].text}
                      secondPara={reviewData[index + 1].secondPara}
                    />
                  )}
                </Stack>
              </Grid>
            )
        )}
      </Grid>
    </Box>
  );
};

export default Reviews;
