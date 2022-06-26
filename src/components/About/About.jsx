import React, { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import { Box, CssBaseline, Tab, Tabs, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./About.css";

import Appbar from "../Appbar";
import img1 from "./images/img_1.jpeg";
import img2 from "./images/img_2.jpg";
import img3 from "./images/img_3.jpg";
import img4 from "./images/img_4.jpg";
import img5 from "./images/img_5.jpg";

import RoomIcon from "@mui/icons-material/Room";
import EmailIcon from "@mui/icons-material/Email";
import CallIcon from "@mui/icons-material/Call";

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

export default function About() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === image.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  const colors = ["#0088FE", "#00C49F", "#FFBB28"];
  const delay = 2500;
  const image = [img1, img2, img3, img4, img5];

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Appbar active="masterList" />

      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />

        <Typography
          variant="h5"
          style={{ textAlign: "center", width: "70%", margin: "auto" }}
        >
          About
        </Typography>
        <br />
        <Grid container rowSpacing={1} style={{ marginBottom: 10 }}>
          <Grid item xs={5}>
            <div className="slideshow">
              <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
              >
                {image.map((item, index) => (
                  <div
                    className="slide"
                    key={index}
                    // style={{ backgroundColor }}
                  >
                    <img
                      src={item}
                      alt=""
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                ))}
              </div>

              {/* <div className="slideshowDots">
                {colors.map((_, idx) => (
                  <div
                    key={idx}
                    className={`slideshowDot${index === idx ? " active" : ""}`}
                    onClick={() => {
                      setIndex(idx);
                    }}
                  ></div>
                ))}
              </div> */}
            </div>
            <Typography style={{ color: "#0066ff" }}>
              <RoomIcon
                style={{ marginBottom: -5, color: "#555", marginRight: 5 }}
              />
              <u>A. Mabini St., Tibag, Baliuag Bulacan Philippines</u>
            </Typography>
            <Typography style={{ color: "#0066ff" }}>
              <EmailIcon style={{ marginBottom: -5, color: "#555" }} />{" "}
              <u>evangelistateodoro10@gmail.com</u>
            </Typography>
            <Typography style={{ color: "#0066ff" }}>
              <CallIcon style={{ marginBottom: -5, color: "#555" }} />{" "}
              <u>(044) 798 0803</u>
            </Typography>
          </Grid>
          <Grid item xs={6} style={{ marginLeft: 20 }}>
            <Typography style={{ textAlign: "left" }}>
              DR. TEODORO TRINIDAD EVANGELISTA, SR Si Dr. Teodoro Trinidad
              Evangelista, Sr. o "Ka During"ay ipinanganak noong ika-1 ng Abril,
              taong 1906 sa mag-asawang sina Maximo C. Evangelista at Filomena
              Trinidad. Siya at ang kanyang naging kabiyak na si Flora
              Yaptinchay ay nabiyayaan ng dalawang anak, sina Teodoro Y.
              Evangelista, Jr. at Ma. Cristina E, Robinson. <br />
              Sa panahon ng kanyang pag-aaral, itinanghal siyang atatanging
              mag-aaral ng Unibersidad ng Pilipinas (UP) Taong 1928 nang siya at
              ang kaniyang mga piling kamag- aral na sina Jacinto Borja,
              Deogracias Puyat, Pedro Camos. at Carlos P. Romulo ay nawagi sa
              patimpalak ng debate ukol sa demokrasya at kalayaan. <br />
              Tumulong siya sa pagbabalik-operasyon ng Far Eastern University
              (FEU) noong 1945. Mula naman 1948 hanggang 1951, siya ang naupong
              Executive Secretary of the President sa termino ni dating to
              Quirino. Naging DepED Secretary siya sa kaparehas na taong natapos
              ang tungkulin niya rito. Nagsilbi siya bilang President of the FEU
              noong 1952-1971. kung saan ang kaniyang paglilingkod ay natuldukan
              lamang nang siya ay yumao noong Marso 31, 1971.
              <br />
              Abril 1, 2006, ika-100 kaarawan nya, nang itinayo ang TEODORO
              EVANGELISTA MEMORIAL HIGH SCHOOL, bilang parangal at pag-alaala sa
              kaniyang mga ambag sa lipunan lalo na sa larangan ing edukasyon.
              Nagsimulang magbukas ang mga pintuan nito sa mga mag-aaral noong
              Hulyo 11, 2011. <br />
              Pinasinayaan ngayon araw ng Panginoon ika-11 ng Hulyo taong
              dalawang libo at dalawamput isa.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
