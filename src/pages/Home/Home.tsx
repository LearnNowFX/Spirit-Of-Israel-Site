import { useQuery } from "react-query";
import { useStyles } from "./Home.styles";
import { Typography } from "@mui/material";
import { aboutService } from "src/services/about.service";
import { getImageLocation } from "src/utilities/image.utility";
import { cachePromiseInLocalStorage } from "src/utilities/browser.utility";

const Home = () => {
  const styles = useStyles();

  const { data } = useQuery({
    queryKey: "about",
    staleTime: Infinity,
    queryFn: () => cachePromiseInLocalStorage("about", aboutService.getAbout),
  });

  return (
    <div>
      <div style={styles.landingContainer}>
        <div style={styles.landingContent}>
          <Typography style={styles.landingTitle}>
            {data?.title || ""}
          </Typography>
          <Typography style={styles.landingSubtitle}>
            {data?.description || ""}
          </Typography>
        </div>

        {data && (
          <img src={getImageLocation(data.image)} style={styles.landingImage} />
        )}
      </div>
    </div>
  );
};

export default Home;
