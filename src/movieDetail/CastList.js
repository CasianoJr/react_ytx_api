import React from 'react'
import { Image } from 'antd';
import { TeamOutlined } from '@ant-design/icons';



export default function CastList({ movie }) {
    const imageFallback = "https://www.leicestercathedral.org/wp-content/uploads/2019/03/abstract-astrology-astronomy-1376766-350x525.jpg"

    return (<>
        {movie.cast && <>
            <div className="h5 ml-5"><TeamOutlined /> <span className="mb-2">Main Cast:</span> </div>

            <div className="row m-lg-4 px-sm-3">

                {movie.cast.map((cast, idx) =>
                    <div className="mx-lg-3 mx-auto" key={idx}>
                        <div className="">
                            {cast.url_small_image &&
                                <div className="mx-auto" style={{ height: 60, width: 60 }} >
                                    <Image src={cast.url_small_image} preview={false} fallback={imageFallback} />
                                </div >
                            }
                            <div className="lead text-center">{cast.name}</div>
                            <p className="text-center">
                                "{cast.character_name}"
                </p>
                        </div>
                    </div>
                )}
            </div>
            <hr className="bg-dark p-1 mx-5 rounded" />
        </>}
    </>
    )
}
