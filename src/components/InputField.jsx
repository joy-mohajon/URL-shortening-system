import axios from "axios";
import { useEffect, useState } from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import AlertDialog from "./AlertDialog";

const InputField = ({ urlHandler, loadingHandler, longUrl }) => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (longUrl) {
      setInputValue(longUrl);
    }
  }, [longUrl]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      loadingHandler(true);
      const res = await axios.post(
        `https://api.shrtco.de/v2/shorten?url=${inputValue}`
      );
      const shortUrl = res.data.result.full_short_link;
      loadingHandler(false);
      urlHandler(inputValue, shortUrl);
      setInputValue("");
    } catch (err) {
      loadingHandler(false);
      console.log("error: " + err);
      setError(err);
    }
  };

  return (
    <>
      {/* <AlertDialog message={error} /> */}
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter your long url.."
        />
        <button type="submit" className="enter-button">
          <BiRightArrowAlt />
        </button>
      </form>
    </>
  );
};

export default InputField;
