import React from 'react'
import { Image } from 'antd';
import BackgroundEffect from './BackgroundEffect';
import CenterCardDetail from './CenterCardDetail';
import CastList from './CastList';
import SuggestionMovieCard from './SuggestionMovieCard';

export default function ContentDetail({ movie }) {
    const imageFallback = "https://www.leicestercathedral.org/wp-content/uploads/2019/03/abstract-astrology-astronomy-1376766-350x525.jpg"

    return (
        <>
            <BackgroundEffect movie={movie} />
            <div style={{
                margin: "auto",
                marginTop: "-500px",
            }}>
                <div className="text-white container-fluid" >
                    <div className="row mt-4 m-1">
                        <div className="col-md-4 col-sm-6 mx-auto shadow-lg rounded">
                            <div className="d-flex justify-content-center mb-2">
                                <Image src={movie.large_cover_image} className="border shadow-lg"
                                    fallback={imageFallback} />
                            </div>
                        </div>
                        <CenterCardDetail movie={movie} />
                        <SuggestionMovieCard movieId={movie.id} />
                    </div>
                    <div className="row bg-dark"></div>
                    <hr className="bg-dark p-1 mx-5 rounded" />

                    <CastList movie={movie} />
                    <div className="row m-lg-4">
                        <div className="col-lg-10 text-justify mx-2">
                            <div className="h3">Synopsis:</div>
                            <div className="font-italic">{movie.description_full}</div>
                        </div>
                    </div>
                    <div className="m-lg-4">
                        {movie.yt_trailer_code &&
                            <div className="col-lg-6 mx-auto">
                                <div className="text-center">
                                    <iframe title={movie.yt_trailer_code}
                                        width="100%" height="340"
                                        src={`https://www.youtube.com/embed/${movie.yt_trailer_code}`}
                                        allowFullScreen={true} frameBorder={0}>
                                    </iframe>

                                </div>

                            </div>
                        }
                    </div>
                    <div className="card-deck m-lg-4">


                        <div className="col-lg-4">
                            <Image src={movie.large_screenshot_image1} className="border shadow-lg"
                                fallback={imageFallback} />
                        </div>
                        <div className="col-lg-4">
                            <Image src={movie.large_screenshot_image2} className="border shadow-lg"
                                fallback={imageFallback} />
                        </div>
                        <div className="col-lg-4">
                            <Image src={movie.large_screenshot_image3} className="border shadow-lg"
                                fallback={imageFallback} />
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}
