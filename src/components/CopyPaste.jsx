import { CircularProgress, makeStyles } from "@material-ui/core";
import { useEffect, useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";

const useStyles = makeStyles((theme) => ({
  circularLoader: {
    width: "5px", // Set the desired width
    height: "5px", // Set the desired height
    marginTop: "30px", // Set the desired margin
    // color: "navyblue", // Set the desired color
    color: "#F4D8E9",
    // color: "#4285F4",
  },
}));

const CopyPaste = ({ shortedUrl, loading }) => {
  const classes = useStyles();
  const [copied, setCopied] = useState(false);

  // useEffect(() => {
  //   const delay = 3000; // 3 seconds

  //   const timeoutId = setTimeout(() => {
  //     shortUrlHandler("");
  //   }, delay);

  //   return () => {
  //     clearTimeout(timeoutId);
  //   };
  // }, [copied]);

  return (
    <>
      {loading ? (
        <CircularProgress className={classes.circularLoader} />
      ) : (
        shortedUrl && (
          <div className="copy">
            <p>{shortedUrl}</p>
            <CopyToClipboard
              className="button"
              text={shortedUrl}
              onCopy={() => setCopied(true)}
            >
              <button>Copy to clipboard</button>
            </CopyToClipboard>
          </div>
        )
      )}
    </>
  );
};

export default CopyPaste;
