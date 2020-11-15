import React from "react";
import youtubeIcon from '../icons/youtubeIcon.webp';
import magnetTorrent from '../icons/magnetTorrent.png';
import { Image } from 'antd';
import { Tooltip } from 'antd';
import { Link } from "react-router-dom";


export default function ContentList({ movie }) {

    const imageFallback = "https://www.leicestercathedral.org/wp-content/uploads/2019/03/abstract-astrology-astronomy-1376766-350x525.jpg"

    return (
        <div className="col-lg-2 col-md-3 col-sm-4 col-8 mx-lg-3 mx-auto p-0" >
            <Link to={movie.id.toString()} >
                <div className="text-center mx-sm-3">
                    <Image src={movie.large_cover_image} className="w-100 px-sm-2 px-md-0 px-3"
                        fallback={imageFallback} />
                </div>
                <div className="my-1">
                    <div className="text-white h6 text-center m-0">{movie.title}</div>
                </div>
            </Link>
            <div>
                <div className="text-muted text-center justify-content-between d-flex mx-md-1 mx-5">
                    <span >{movie.year}</span>
                    <span className="small">{movie.runtime}mins</span>

                    <span>
                        {movie.torrents.map((torrentSite) =>
                            <a className="mx-1" key={torrentSite.hash} href={`magnet:?xt=urn:btih:${torrentSite.hash}`} alt="movie" onClick={(e) => { e.preventDefault(); window.open(`magnet:?xt=urn:btih:${torrentSite.hash}`) }}  >
                                <Tooltip title={`${torrentSite.quality} ${torrentSite.type}`}>
                                    <img style={{ height: 15, width: 15 }} src={magnetTorrent} alt={movie.title} />
                                </Tooltip>
                            </a>
                        )}
                        {movie.yt_trailer_code &&
                            <Tooltip title="Youtube Trailer"><a href={`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`} alt="movie" onClick={(e) => { e.preventDefault(); window.open(`https://www.youtube.com/watch?v=${movie.yt_trailer_code}`) }}  >
                                <img style={{ height: 15, width: 15 }} src={youtubeIcon} alt={movie.title} />
                            </a> </Tooltip>
                        }
                    </span>
                </div>
                <hr className="bg-dark mx-2 my-1" />
            </div>
        </div>
    );
}
