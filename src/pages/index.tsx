import HowSMNKWorks from "@/components/card/HowSMNKWorks";
import Layout from "@/components/layout";
import TestimonialStepper from "@/components/stepper/TestimonialStepper";
import Head from "next/head";
import ServiceCategories from "@/components/card/ServiceCategories";
import { Typography, Box, Card, CardContent, IconButton } from "@mui/material";
import ReactPlayer from "react-player";
import Image from "next/image";

//import { toast } from 'react-toastify';
import { useState } from "react";
import { Cancel } from "@mui/icons-material";
import HomePageStepper from "@/components/stepper/HomePageStepper";

export default function Home() {
  const [showVideo, setShowVideo] = useState("block");
  const [muted, setMuted] = useState(false);

  return (
    <Layout>
      <Head>
        <title>SMNK - Home</title>
        <link rel="icon" href="smnk.jpg" type="image/x-icon" />
      </Head>
      <main>
        <HomePageStepper />
        {/* <Box m={2} height={{ xs: 300, sm: 400, md: 500 }}>
          <video
            width="100%"
            height="100%"
            autoPlay
            loop
            controls
            style={{ objectFit: "fill" }}
          >
            <source src="/assets/SMNK front page video.mp4" type="video/mp4" />
            <source src="/assets/SMNK front page video.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
        </Box> */}
        <Box
          bgcolor={"black"}
          height={{ xs: 200, md: 300 }}
          width={{ xs: 200, md: 300 }}
          position={"fixed"}
          bottom={50}
          left={0}
          display={showVideo}
          zIndex={100}
        >
          <IconButton
            sx={{ color: "white" }}
            onClick={() => {
              setShowVideo("none");
              setMuted(true);
            }}
          >
            <Cancel />
          </IconButton>
          <video
            width="100%"
            height="100%"
            muted={muted}
            autoPlay={true}
            loop
            controls
            style={{ objectFit: "fill" }}
          >
            <source src="/assets/video.mp4" type="video/mp4" />
            <source src="/assets/video.mp4" type="video/ogg" />
            Your browser does not support the video tag.
          </video>
          {/* <ReactPlayer
            url="/assets/video.mp4"
            volume={volume}
            playing={playing}
            controls
            width={200}
            height={200}
          /> */}
          {/* <video
            width="100%"
            height="100%"
            loop
            controls
            style={{ objectFit: "fill" }}
          >
            <source src="/assets/video.mp4" type="video/mp4" />
            <source src="/assets/video.ogg" type="video/ogg" />
            Your browser does not support the video tag.
          </video> */}
        </Box>

        {/* <*/}

        <ServiceCategories />
        <HowSMNKWorks />

        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"flex-start"}
          overflow={"scroll"}
          p={2}
        >
          <Card
            sx={{
              bgcolor: "#2266BF",
              color: "white",
              minHeight: 250,
              minWidth: { xs: 300, md: 400 },
              maxWidth: { xs: 300, md: 400 },
              mr: 2,
            }}
          >
            <CardContent>
              <Typography variant="h6">How service fees are charged</Typography>
              <Typography>
                Each job comes with a fee, however the amount depends on how
                much money you would make from a customer. A 12% administrative
                cost fee would be applied to all skilled personnel.
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              bgcolor: "green",
              color: "white",
              minHeight: 250,
              minWidth: { xs: 300, md: 400 },
              maxWidth: { xs: 300, md: 400 },
              mr: 2,
            }}
          >
            <CardContent>
              <Typography variant="h6">
                How your ranking impacts your success of landing jobs
              </Typography>
              <Typography>
                After completing them, your review gauges how happy your clients
                are with your job. Your work rating affects how well-liked and
                trusted you are among clients.
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              bgcolor: "#7E1120",
              color: "white",
              minHeight: 250,
              minWidth: { xs: 300, md: 400 },
              maxWidth: { xs: 300, md: 400 },
            }}
          >
            <CardContent>
              <Typography variant="h6">Improvement suggestions</Typography>
              <Typography>
                Before submitting your work, make sure you often review it to
                ensure it is error-free. Before you start, take some time to go
                through what your clients want you to deliver.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box
          position={"relative"}
          height={{ xs: 300, sm: 400, md: 500, lg: 600 }}
          width={"100vw"}
          mb={2}
        >
          <Image
            src="/assets/blog1.png"
            alt=""
            fill
            style={{ objectFit: "fill" }}
          />
        </Box>
        <Box
          position={"relative"}
          height={{ xs: 300, sm: 400, md: 500, lg: 600 }}
        >
          <Image
            src="/assets/blog2.png"
            alt=""
            fill
            style={{ objectFit: "fill" }}
          />
        </Box>
        <TestimonialStepper />
      </main>
    </Layout>
  );
}

const PlayerComponent = () => {
  const [fullscreenMode, setFullscreenMode] = useState(false);
  let player: any;
  const ref = (p: any) => {
    player = p;
  };

  const onStart = () => {
    setFullscreenMode(true);
  };

  const onEnded = () => {
    setFullscreenMode(document.fullscreenElement !== null);
  };

  return (
    <ReactPlayer
      ref={ref}
      url="/assets/SMNK front page video.mp4"
      onStart={onStart}
      onEnded={onEnded}
      playing
      loop
    />
  );
};
