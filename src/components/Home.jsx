import  { useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import Webcam from "react-webcam";
import { detectFace } from "../store/slices/webCam.slice";


const Home = () => {
  const webcamRef = useRef(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const interval = setInterval(async () => {
      if (webcamRef.current) {
        const imageSrc = webcamRef.current.getScreenshot();
        if (imageSrc) {
          dispatch(detectFace(imageSrc));
        }
      }
    }, 5000); 

    return () => clearInterval(interval);
  }, [dispatch]);

  return (
    <div className="home-container">
      <h1>Face Detection Attendance System</h1>
      <Webcam
        audio={false}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={400}
        height={300}
      />
    </div>
  );
};

export default Home;