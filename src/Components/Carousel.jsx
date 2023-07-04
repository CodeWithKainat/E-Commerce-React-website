import Carousel from 'react-bootstrap/Carousel';
import Sidebar from './Sidebar';

function CarouselImage() {
  return (
    <div className="row p-0 m-0 ">
       <div className="col-2 sideBar">
       <Sidebar/>
      </div>
      <div className="col-10 p-0">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100 sideBar"
              src="https://icms-image.slatic.net/images/ims-web/d6eb4258-c597-4969-9271-3c14f194dc0b.jpg"
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sideBar"
              src="https://icms-image.slatic.net/images/ims-web/4151e813-b7e9-4328-a73d-eef04469c7a2.jpg"
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 sideBar"
              src="https://icms-image.slatic.net/images/ims-web/af1fc7a4-1557-443c-b0d5-cefa56b44c5c.jpg"
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}


export default CarouselImage;