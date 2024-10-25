import "./App.css";
import { Box, Flex } from "@chakra-ui/react";
import InnerComponent from "./InnerComponent";
import { CSSProperties, useEffect, useState } from "react";
import { getWord } from "./endpoint";

function App() {
  const [parole, setParole] = useState<string[]>([]);
  const [buttonClick, setButtonClick] = useState(false);
  const [counter, setCounter] = useState(0);
  const [seconds, setSeconds] = useState(60);
  const [isRunning, setIsRunning] = useState(false);

  const handleButtonClick = () => {
    if (isRunning) {
      setIsRunning(false);
      setButtonClick(false);
    } else {
      setIsRunning(true);
      setButtonClick(true);
    }
  };

  useEffect(() => {
    let interval: ReturnType<typeof setInterval> | null = null;

    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((prev) => {
          if (prev <= 1) {
            clearInterval(interval!);
            setIsRunning(false);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [isRunning, seconds]);

  useEffect(() => {
    const fetchParoleOnCounterChange = async () => {
      try {
        const response = await getWord();
        setParole(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    if (buttonClick) {
      fetchParoleOnCounterChange();
    }
  }, [buttonClick]);

  const commonButtonStyle = (): CSSProperties => ({
    padding: "12px",
    fontSize: "26px",
    fontWeight: "bold",
  });

  const styleGoButton = (): CSSProperties => ({
    background:
      "linear-gradient(150deg, rgba(249,7,7,1) 70%, rgba(255,255,255,1) 100%)",
    width: "280px",
    cursor: "pointer",
    borderRadius: "0 15px 0 15px",
  });

  return (
    <div className="app">
      <Flex align={"center"} justify={"center"} gap={"4px"}>
        <Box
          onClick={handleButtonClick}
          style={{ ...styleGoButton(), ...commonButtonStyle() }}
        >
          {isRunning ? "Ce l'hai?" : "Starta dottoressa👩‍🎓"}
        </Box>
      </Flex>
      <InnerComponent
        disabledButton={buttonClick}
        word={parole[0]}
        seconds={seconds}
        counter={counter}
        setCounter={setCounter}
      />
    </div>
  );
}

export default App;
