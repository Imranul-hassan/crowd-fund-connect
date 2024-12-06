
import banner_1 from "../assets/crowd-1.jpg";
import banner_2 from "../assets/crowd-2.jpg";
import banner_3 from "../assets/crowd-2.jpg";
import banner_4 from "../assets/crowd-bg.jpg";
import banner_5 from "../assets/crowd2.jpg";
 

const Slider = () => {
    return (
            <div className="carousel w-full rounded-md mt-5">
                <div id="slide1" className="carousel-item relative w-full h-[420px]">
                    <img
                    src={banner_1}
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full h-[420px]">
                    <img
                    src={banner_5}
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full h-[420px]">
                    <img
                    src={banner_4}
                    className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
                </div>
    
    );
};

export default Slider;