import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Img01 from '../../../assets/Images/BannerImg/Banner01.jpg';
import Img02 from '../../../assets/Images/BannerImg/Banner02.jpg';
import Img03 from '../../../assets/Images/BannerImg/Banner03.jpg';
import Img04 from '../../../assets/Images/BannerImg/Banner04.jpg';

const Banner = () => {
    return (
        <Carousel>
            <div className="h-96">
                <img src={Img01} />
                <p className="legend">Legend 1</p>
            </div>
            <div className="h-96">
                <img src={Img02} />
            </div>
            <div className="h-96">
                <img src={Img03} />
            </div>
            <div className="h-96">
                <img src={Img04} />
            </div>
        </Carousel>
    );
};

export default Banner;