import { useQuery } from "react-query";
import { Typography } from "@mui/material";
import { useStyles } from "./Contact.styles";
import { contactService } from "src/services/contact.service";
import { insertParamsIntoTemplate } from "src/utilities/string.utility";
import { cachePromiseInLocalStorage } from "src/utilities/browser.utility";

const PARAMS = {
  email: import.meta.env.VITE_EMAIL_ADDRESS,
};

const Contact = () => {
  const styles = useStyles();
  const { data } = useQuery({
    queryKey: "contact",
    queryFn: () =>
      cachePromiseInLocalStorage("contact", contactService.getContact),
  });

  if (!data) {
    return <div>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <Typography style={styles.title}>{data.title}</Typography>
      <div
        style={styles.subtitle}
        dangerouslySetInnerHTML={{
          __html: insertParamsIntoTemplate(data.description, PARAMS),
        }}
      ></div>
    </div>
  );
};

export default Contact;
