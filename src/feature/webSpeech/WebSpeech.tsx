import React from "react";
import styled from "styled-components";
import useWebSpeech from "./useWebSpeech";
import useCheckDevice from "./useCheckDevice";

export default function WebSpeech() {
  const {
    statusText,
    transcript,
    startListening,
    stopListening,
    resetTranscript,
  } = useWebSpeech();

  const { browserInfo, deviceType } = useCheckDevice();

  return (
    <Container>
      <StatusBox>deviceType : {deviceType}</StatusBox>
      <StatusBox>browserInfo : {browserInfo}</StatusBox>
      <StatusBox>{statusText}</StatusBox>
      <TextBox>{transcript}</TextBox>
      <ButtonWrap>
        <Button onClick={startListening}>시작</Button>
        <Button onClick={stopListening}>중지</Button>
        <Button onClick={resetTranscript}>초기화</Button>
      </ButtonWrap>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StatusBox = styled.div`
  width: 100%;
  /* height: 50px; */
  max-width: 500px;
  background-color: beige;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const TextBox = styled.div`
  width: 100%;
  height: 300px;
  max-width: 500px;
  background-color: gainsboro;
  padding: 10px;
`;

const ButtonWrap = styled.div`
  display: flex;
  gap: 30px;
`;

const Button = styled.button`
  width: 100px;
  height: 50px;
`;
