import { Box, Flex } from "@chakra-ui/react";
import { CSSProperties, Dispatch, SetStateAction } from "react";

type InnerComponentProps = {
  word: string;
  seconds: number;
  counter: number;
  setCounter: Dispatch<SetStateAction<number>>;
  disabledButton: boolean;
};
const InnerComponent = ({
  word,
  seconds,
  counter,
  setCounter,
  disabledButton,
}: InnerComponentProps) => {
  const commonButtonStyle = (): CSSProperties => ({
    padding: "12px",
    fontSize: "26px",
    fontWeight: "bold",
  });
  console.log(disabledButton);

  const styleSeconds = (): CSSProperties => ({
    background:
      "linear-gradient(4deg, rgba(2,0,36,1) 0%, rgba(17,17,190,1) 29%, rgba(0,212,255,1) 100%)",
    width: "90px",
    borderRadius: "15px 15px 0 15px",
  });
  const styleWord = (): CSSProperties => ({
    background:
      "linear-gradient(180deg, rgba(0,255,70,1) 69%, rgba(246,246,246,1) 100%)",
    width: "500px",
    borderRadius: "0 15px 15px 15px",
    textTransform: "uppercase",
  });
  const styleNumResp = (): CSSProperties => ({
    background:
      "linear-gradient(167deg, rgba(255,143,0,1) 69%, rgba(246,246,246,1) 100%)",
    width: "90px",
    borderRadius: "15px 0 15px 0",
  });

  const styleDecrementButton = (): CSSProperties => ({
    background:
      "linear-gradient(150deg, rgba(249,7,7,1) 70%, rgba(255,255,255,1) 100%)",
    width: "90px",
    borderRadius: "0 15px 0 15px",
  });

  return (
    <Flex align={"center"} justify={"center"} p={"50px"} gap={"8px"}>
      <Box style={{ ...styleSeconds(), ...commonButtonStyle() }}>
        :{seconds}
      </Box>
      <Box style={{ ...styleWord(), ...commonButtonStyle() }}>
        {word ?? "Avvia sta partita dottoressa 👩‍🎓"}
      </Box>
      <Box
        style={{
          cursor: disabledButton ? "not-allowed" : "pointer",
          zIndex: disabledButton ? -1 : 0,
          ...styleNumResp(),
          ...commonButtonStyle(),
        }}
        onClick={() => {
          setCounter((counter) => counter + 1);
        }}
      >
        {counter}
      </Box>
      <Box
        style={{
          cursor: disabledButton ? "not-allowed" : "pointer",
          zIndex: disabledButton ? -1 : 0,
          ...styleDecrementButton(),
          ...commonButtonStyle(),
        }}
        onClick={() => {
          if (counter > 0) setCounter((counter) => counter - 1);
        }}
      >
        :(
      </Box>
    </Flex>
  );
};

export default InnerComponent;
