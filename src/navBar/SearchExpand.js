import React, { useState, useEffect } from "react";
import { Input } from "antd";
import { useHistory } from "react-router-dom";
import { SearchChoices } from "./SearchChoices";
import { useSearch } from "../shared/SearchProvider";
const { genre, quality, minimum_rating, sort_by } = SearchChoices;

export default function SearchExpand() {
  const { endPoints, setEndPoints } = useSearch();
  const [options, setOptions] = useState(endPoints);
  const history = useHistory();

  useEffect(() => {
    setOptions(endPoints);
  }, [endPoints]);

  const handleGenre = (e) => {
    setOptions((rest) => {
      return { ...rest, genre: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEndPoints(options);
    console.log(options);
    history.push("/");
  };

  return (
    <div
      className="collapse"
      style={{ backgroundColor: "#020926" }}
      id="detailedSearch"
    >
      <div className="p-4 col-md-8 mx-auto">
        <div className="form-group">
          <label htmlFor="exampleInputEmail1" className="text-white">
            Search Term:
          </label>
          <div className="d-flex">
            (
            <Input
              placeholder="Search Term"
              allowClear={true}
              value={options.query_term}
              onChange={(e) =>
                setOptions((rest) => {
                  return {
                    ...rest,
                    query_term: e.target.value,
                    page: 1,
                  };
                })
              }
              onPressEnter={handleSubmit}
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="mx-3 btn btn-success"
            >
              Search
            </button>
          </div>
          <small id="emailHelp" className="form-text text-muted">
            An exact word from the movie title will help narrow down the search.
          </small>
        </div>
        <div className="row">
          <div className="form-group col-sm-2">
            <label htmlFor="selectGenre" className="text-white">
              Genre:
            </label>
            <select
              className="form-control"
              id="selectGenre"
              value={options.genre}
              onChange={handleGenre}
            >
              <option value={""}>All</option>
              {genre.map((genre) => (
                <option className="small" key={genre} value={genre}>
                  {genre}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-sm-2">
            <label htmlFor="selectQuality" className="text-white">
              Quality:
            </label>
            <select
              className="form-control"
              id="selectQuality"
              value={options.quality}
              onChange={(e) => {
                setOptions((rest) => {
                  return { ...rest, quality: e.target.value };
                });
              }}
            >
              <option value={""}>All</option>
              {quality.map((quality) => (
                <option className="small" key={quality} value={quality}>
                  {quality}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group col-sm-2">
            <label htmlFor="selectRating" className="text-white">
              IMDb R:
            </label>
            <select
              className="form-control"
              id="selectRating"
              value={options.minimum_rating}
              onChange={(e) =>
                setOptions((rest) => {
                  return { ...rest, minimum_rating: e.target.value };
                })
              }
            >
              <option className="small" value={""}>
                All
              </option>
              {minimum_rating.map((minRate) => (
                <option key={minRate} value={minRate}>
                  {minRate}+
                </option>
              ))}
            </select>
          </div>
          <div className="form-group col-sm-2">
            <label htmlFor="selectTomato" className="text-white">
              RT rated:
            </label>
            <select
              className="form-control"
              id="selectTomato"
              value={options.with_rt_ratings}
              onChange={(e) =>
                setOptions((rest) => {
                  return { ...rest, with_rt_ratings: e.target.value };
                })
              }
            >
              <option className="small" value={""}>
                All
              </option>
              <option className="small" value={true}>
                Yes
              </option>
              <option className="small" value={false}>
                No
              </option>
            </select>
          </div>

          <div className="form-group col-sm-2">
            <label htmlFor="selectOrder" className="text-white">
              Order by:
            </label>
            <select
              className="form-control"
              id="selectOrder"
              value={options.order_by}
              onChange={(e) =>
                setOptions((rest) => {
                  return { ...rest, order_by: e.target.value };
                })
              }
            >
              <option className="small" value={""}>
                All
              </option>
              <option className="small" value={"asc"}>
                Ascend
              </option>
              <option className="small" value={"desc"}>
                Descend
              </option>
            </select>
          </div>
          <div className="form-group col-sm-2">
            <label htmlFor="selectSort" className="text-white">
              Sort by:
            </label>
            <select
              className="form-control"
              id="selectSort"
              value={options.sort_by}
              onChange={(e) =>
                setOptions((rest) => {
                  return { ...rest, sort_by: e.target.value };
                })
              }
            >
              <option value={""}>All</option>
              {sort_by.map((sortBy) => (
                <option className="small" key={sortBy} value={sortBy}>
                  {sortBy}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
