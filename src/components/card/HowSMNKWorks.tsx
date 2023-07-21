import * as React from "react";
import {
  Box,
  Button,
  Card,
  Typography,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  Divider,
} from "@mui/material";
import { useRouter } from "next/router";
import { useTheme, useMediaQuery } from "@mui/material";

export default function HowSMNKWorks() {
  const router = useRouter();
  const newTheme = useTheme();
  const mediaQuery = useMediaQuery(newTheme.breakpoints.down("sm"));
  return (
    <>
      <Card
        sx={{
          width: "100%",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              flexDirection: { xs: "column", sm: "row" },
              bgcolor: "whitesmoke",
            }}
          >
            <Box sx={{ maxWidth: { xs: 300, md: 400 } }}>
              <CardMedia
                component="img"
                sx={{ height: { xs: 300, md: 400 } }}
                src="/assets/create-account.png"
              />
              <CardContent>
                <Typography
                  fontWeight={"bold"}
                >{`Let's Get You Started`}</Typography>
                <Typography>
                  Start Your journey with SMNK by creating an account. You can
                  create an account as a Skilled Worker/Professional/Service
                  Provider Or as a Client/Employer/Customer
                </Typography>
              </CardContent>
              <CardActions
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {" "}
                <Button
                  onClick={() => {
                    router.push("/account/signup");
                  }}
                  sx={{
                    bgcolor: "#C7CEDB",
                    fontWeight: "bold",
                    textTransform: "capitalize",
                    borderRadius: "30px",
                    maxWidth: 350,
                  }}
                  fullWidth
                >
                  Create an account
                </Button>
              </CardActions>
              {mediaQuery && <Divider sx={{ mt: 3, mb: 3 }} />}
            </Box>

            <Box
              sx={{
                maxWidth: { xs: 300, md: 400 },
              }}
            >
              <CardHeader title="Post Jobs" />
              <CardMedia
                component="img"
                sx={{ height: { xs: 200, md: 400 } }}
                src="/assets/post-a-job.png"
              />
              <CardContent>
                <Typography mb={5}>
                  It is free and easy to post a job. You can simply choose your
                  identity,profile and budget and recommendations would come
                  witing minutes.
                </Typography>
              </CardContent>
              {mediaQuery && <Divider sx={{ mt: 3, mb: 3 }} />}
            </Box>
            <Box
              sx={{
                mt: 2,
                maxWidth: { xs: 300, md: 400 },
              }}
            >
              <CardHeader title="Choose A Professional" />
              <CardMedia
                component="img"
                sx={{ height: { xs: 200, md: 400 } }}
                src="/assets/hire-smnk.png"
              />
              <CardContent>
                <Typography>
                  No discrimination on any job. We have got
                  Professionals/Artisans for jobs of any budget or size, across
                  1000+ skills. As long as there is a job to be done, then there
                  is an expert that can do it
                </Typography>
              </CardContent>
              {mediaQuery && <Divider sx={{ mt: 3, mb: 3 }} />}
            </Box>
            <Box
              sx={{
                mt: 2,
                maxWidth: { xs: 300, md: 400 },
              }}
            >
              <CardHeader title="Pay Safely" />
              <CardMedia
                component="img"
                sx={{ height: { xs: 200, md: 400 } }}
                src="/assets/pay.png"
              />
              <CardContent>
                <Typography>
                  SMNK guarantees that only professionals/Skilled workers who
                  have completed their jobs satisfactorily will receive your
                  money. Fell free to pay through our milestone payment system.
                </Typography>
              </CardContent>
              {mediaQuery && <Divider sx={{ mt: 3, mb: 3 }} />}
            </Box>
            <Box
              sx={{
                mt: 2,
                maxWidth: { xs: 300, md: 400 },
              }}
            >
              <CardHeader title="We Are Here To help" />
              <CardMedia
                component="img"
                sx={{ height: { xs: 200, md: 400 } }}
                src="/assets/we-help.png"
              />
              <CardContent>
                <Typography>
                  Our talented team of recruiters are always available to find
                  you the best fit for your job and ensure you get true value
                  for your money
                </Typography>
              </CardContent>
              {mediaQuery && <Divider sx={{ mt: 3, mb: 3 }} />}
            </Box>
          </Box>
        </CardContent>
      </Card>
    </>
  );
}
