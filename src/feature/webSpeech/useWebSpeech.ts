import { useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

export default function useWebSpeech() {
  const [statusText, setStatusText] = useState("초기상태");
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  const checkPermission = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      stream.getTracks().forEach((track) => track.stop());
      return true;
    } catch (error) {
      console.error("권한이 거부되었습니다.", error);
      return false;
    }
  };

  const startListening = async () => {
    const hasPermission = await checkPermission();
    if (!hasPermission) {
      setStatusText("권한이 거부되었습니다.");
      return;
    }
    try {
      SpeechRecognition.startListening({ continuous: true });
      setStatusText("음성인식 중...");
    } catch (error) {
      console.error(error);
      setStatusText("거부됨");
    }
  };
  const stopListening = () => {
    SpeechRecognition.stopListening();
    setStatusText("음성인식 종료");
  };

  if (!browserSupportsSpeechRecognition) {
    console.warn("브라우저가 음성 인식을 지원하지 않습니다.");
    setStatusText("브라우저가 음성 인식을 지원하지 않습니다.");
    return {
      transcript: "",
      listening: false,
      startListening: () => {},
      stopListening: () => {},
      resetTranscript: () => {},
    };
  }

  return {
    statusText,
    transcript,
    listening,
    startListening,
    stopListening,
    resetTranscript,
  };
}
