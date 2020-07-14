import React from "react";
import { Dimensions } from "react-native";
import { Btn, BtnText } from "../styles/Btn";
import { FindPWType } from "../screens/verifyEmail";

type Props = {
  state: FindPWType;
  setState: React.Dispatch<React.SetStateAction<FindPWType>>;
  onPress?: any;
};

const FindPWBtn = ({ state, onPress }: Props): JSX.Element => {
  const renderButton = () => {
    const { err } = state;
    if (Object.keys(err).length === 0) {
      return (
        <Btn
          onPress={() => onPress(state)}
          screenHeight={Dimensions.get("window").height}
          screenWidth={Dimensions.get("window").width}
        >
          <BtnText>이메일 전송</BtnText>
        </Btn>
      );
    }
    return (
      <Btn
        isEmpty
        disabled={true}
        screenHeight={Dimensions.get("window").height}
        screenWidth={Dimensions.get("window").width}
      >
        <BtnText isEmpty>이메일 전송</BtnText>
      </Btn>
    );
  };

  return <React.Fragment>{renderButton()}</React.Fragment>;
};

export default FindPWBtn;
