import { useState, useEffect, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import './App.css';

const Slider = (props) => {

  const [slide, setSlide] = useState(0);
  const [autoplay, setAutoPlay] = useState(false);
  const getSomeImages = useCallback(() => {
    console.log('fetching');
    return [
      "https://static.toiimg.com/photo/77630680.cms?imgsize=780095",
      "https://media.istockphoto.com/id/669772676/photo/great-lakes-sunset.jpg?s=612x612&w=0&k=20&c=lxRS90b0HUNAeBnXoTXZZTyfBeVN5u9QllXpPmSTbRg="
    ]
  }, [])

  useEffect(() => {
    // console.log('effect');
    document.title = `Slide ${slide}`

    // window.addEventListener('click', logging);

    // return () => {
    //   window.removeEventListener('click', logging)
    // }
  }, [slide]);

  useEffect(() => {
    // console.log('autoplay');
  }, [autoplay])

  function changeSlide(i) {
    setSlide(slide => slide + i);
  }

  function toggleAutoplay() {
    setAutoPlay(autoplay => !autoplay);
  }

  return (
    <Container>
      <div className="slider w-50 m-auto">
        {/* {
          getSomeImages().map((url, i) => {
            return (
              <img key={i} className="d-block w-100" src={url} alt="slide" />
            )
          })
        } */}

        <Slide getSomeImages={getSomeImages} />

        <div className="text-center mt-5">Active slide {slide} <br />{autoplay ? 'Yes auto' : null}</div>
        <div className="buttons mt-3">
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(-1)}>-1</button>
          <button
            className="btn btn-primary me-2"
            onClick={() => changeSlide(1)}>+1</button>
          <button
            className="btn btn-primary me-2"
            onClick={toggleAutoplay}>toggle autoplay</button>
        </div >
      </div >
    </Container >
  )
}

const Slide = ({ getSomeImages }) => {
  const [images, setImages] = useState([]);
  useEffect(() => {
    setImages(getSomeImages())
  }, [getSomeImages])

  return (
    <>
      {images.map((url, i) => <img key={i} className="d-block w-100" src={url} alt="slide" />)}
    </>
  )
}

function App() {
  const [slider, setSlider] = useState(true);

  return (
    <>
      <button onClick={() => setSlider(false)}>Click</button>
      {slider ? <Slider /> : null}
    </>
  );
}

export default App;
