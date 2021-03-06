import React from "react";
import {
  SoundOutlined,
  StarOutlined,
  UnorderedListOutlined,
} from "@ant-design/icons";
import magnetTorrent from "../icons/magnetTorrent.png";
import ytsImage from "../icons/ytsImage.png";
import { Typography } from "antd";

export default function CenterCardDetail({ movie }) {
  return (
    <div className="col-md-4 col-sm-6 mx-auto shadow-lg rounded">
      <div className="mx-sm-5 my-3">
        <div className="h2">{movie.title}</div>
        <div className="h5 mt-0 mb-3">{movie.year}</div>

        <div className="lead h5 py-0">
          {movie.genres.map((genre, idx) => (
            <span key={idx}> {genre}, </span>
          ))}
        </div>
        {movie.language && (
          <div>
            <SoundOutlined className="my-1" /> {movie.language}
          </div>
        )}
        {movie.rating && (
          <div>
            <StarOutlined className="my-1" /> IMDb rating: {movie.rating}
          </div>
        )}
        {movie.mpa_rating && (
          <div>
            <UnorderedListOutlined className="my-1" /> Mpa rating:{" "}
            {movie.mpa_rating}
          </div>
        )}
        {movie.url && (
          <div>
            <a
              href={movie.url}
              onClick={(e) => {
                e.preventDefault();
                window.open(movie.url);
              }}
            >
              <img
                src={ytsImage}
                style={{ height: 15, width: 15 }}
                alt={movie.title}
              />
              <span> Available at YTS</span>
            </a>
          </div>
        )}
        <div className="row mt-5 shadow-lg">
          {movie.torrents.map((torrent, idx) => (
            <div key={idx} className="col-sm-4 text-center mx-auto">
              <div className="lead">{torrent.quality}</div>
              <div>({torrent.type})</div>
              <div>{torrent.size}</div>
              <div className="small text-dark my-1">
                {torrent.date_uploaded}
              </div>
              <div>
                {/* <a
                  className="btn btn-success px-1"
                  href={`magnet:?xt=urn:btih:${torrent.hash}`}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(`magnet:?xt=urn:btih:${torrent.hash}`);
                  }}
                >
                  <img
                    style={{ height: 15, width: 15 }}
                    src={magnetTorrent}
                    alt={movie.title}
                  />
                  Magnet
                </a> */}
                <Typography.Paragraph
                  className="btn btn-success text-white"
                  copyable={{
                    text: `magnet:?xt=urn:btih:${torrent.hash}`,
                    icon: "",
                  }}
                >
                  Copy{" "}
                  <img
                    style={{ height: 15, width: 15 }}
                    src={magnetTorrent}
                    alt={movie.title}
                  />{" "}
                </Typography.Paragraph>
              </div>
              <div>
                <a className="btn btn-success my-1" href={torrent.url}>
                  Torrent
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
