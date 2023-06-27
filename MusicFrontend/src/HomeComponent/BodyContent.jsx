import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import "./Body.css";
function BodyContent(props) {
  const [rating, setRating] = React.useState(0);
  const handleRatingSelect = (ratingValue) => {
    // If the same rating is clicked again, deselect it by setting rating to 0
    if (rating === ratingValue) {
      setRating(0);
    } else {
      setRating(ratingValue);
    }
  };

  return (
    <div>
      <div className="HomebodyInfo">
        <div className="Homecontainer">
          <input
            className="Hradios"
            type="radio"
            name="slider"
            id="item-1"
            defaultChecked
          />
          <input className="Hradios" type="radio" name="slider" id="item-2" />
          <input className="Hradios" type="radio" name="slider" id="item-3" />

          <div className="Hcards">
            <label className="Hcard" htmlFor="item-1" id="song-1">
              <img
                className="HomeSongImg"
                src="/src/assets/aintme.jpg"
                alt="song"
              />
            </label>
            <label className="Hcard" htmlFor="item-2" id="song-2">
              <img
                className="HomeSongImg"
                src="https://i.ytimg.com/vi/Lv6EV478u3U/maxresdefault.jpg"
                alt="song"
              />
            </label>
            <label className="Hcard" htmlFor="item-3" id="song-3">
              <img
                className="HomeSongImg"
                src="/src/assets/weeknd.jpg"
                alt="song"
              />
            </label>
          </div>
        </div>
      </div>
      <div className="Halbumtitles">
        <div className="Hfeatures">
          <h3>Featured</h3>
          <p>THIS WEEK</p>
        </div>
        <Link to="/Home/AllSongs">
          <div className="seeAll">
            <p className="SeeAllp">See All</p>
          </div>
        </Link>
      </div>

      <div className="HalbumList">
        <div className="wholeCard">
          <div className="Bcard" onClick={() => play(props.set(1))}>
            <div className="face face1">
              <div className="Bcontent">
                <span className="Bstars"></span>
                <p className="Songdetails">
                  <strong>Genre: </strong>Synthpop
                </p>
                <p className="Songdetails">
                  <strong>Release date: </strong>October 3, 2018
                </p>
                <p className="Songdetails"><strong>Rating: </strong></p>
                <div className="HomefooterRating">
                  {[1, 2, 3, 4, 5].map((ratingValue) => (
                    <button
                      key={ratingValue}
                      onClick={() => handleRatingSelect(ratingValue)}
                      className={rating >= ratingValue ? "active" : ""}
                    >
                      <FontAwesomeIcon icon={faStar} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="face face2">
              <img
                className="bimg"
                src="https://tse3.mm.bing.net/th/id/OIP.BAEM18CBhq_K0BgAzm90vwHaHa?pid=ImgDet&rs=1"
              />
            </div>
          </div>

          <div className="Hcontents">
            <p className="HsongName">Euphoria</p>
            <p className="Hartist">Jungkook</p>
          </div>
        </div>

        <div className="wholeCard">
          <div className="Bcard">
            <div className="face face1">
            <div className="Bcontent">
                <span className="Bstars"></span>
                <p className="Songdetails">
                  <strong>Genre: </strong>Synthpop
                </p>
                <p className="Songdetails">
                  <strong>Release date: </strong>October 3, 2018
                </p>
                <p className="Songdetails"><strong>Rating: </strong></p>
                <div className="HomefooterRating">
                  {[1, 2, 3, 4, 5].map((ratingValue) => (
                    <button
                      key={ratingValue}
                      onClick={() => handleRatingSelect(ratingValue)}
                      className={rating >= ratingValue ? "active" : ""}
                    >
                      <FontAwesomeIcon icon={faStar} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="face face2">
              <img
                className="bimg"
                src="https://tse2.mm.bing.net/th/id/OIP.EVMQzABbuT_d4dqjhjBBEgHaHa?pid=ImgDet&rs=1"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="Hcontents">
            <p className="HsongName">Euphoria</p>
            <p className="Hartist">Jungkook</p>
          </div>
        </div>

        <div className="wholeCard">
          <div className="Bcard">
            <div className="face face1">
            <div className="Bcontent">
                <span className="Bstars"></span>
                <p className="Songdetails">
                  <strong>Genre: </strong>Synthpop
                </p>
                <p className="Songdetails">
                  <strong>Release date: </strong>October 3, 2018
                </p>
                <p className="Songdetails"><strong>Rating: </strong></p>
                <div className="HomefooterRating">
                  {[1, 2, 3, 4, 5].map((ratingValue) => (
                    <button
                      key={ratingValue}
                      onClick={() => handleRatingSelect(ratingValue)}
                      className={rating >= ratingValue ? "active" : ""}
                    >
                      <FontAwesomeIcon icon={faStar} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="face face2">
              <img
                className="bimg"
                src="https://tse3.mm.bing.net/th/id/OIP.wqF7tBXbVYV3aJbynsewVAHaHa?pid=ImgDet&rs=1"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="Hcontents">
            <p className="HsongName">Euphoria</p>
            <p className="Hartist">Jungkook</p>
          </div>
        </div>

        <div className="wholeCard">
          <div className="Bcard">
            <div className="face face1">
            <div className="Bcontent">
                <span className="Bstars"></span>
                <p className="Songdetails">
                  <strong>Genre: </strong>Synthpop
                </p>
                <p className="Songdetails">
                  <strong>Release date: </strong>October 3, 2018
                </p>
                <p className="Songdetails"><strong>Rating: </strong></p>
                <div className="HomefooterRating">
                  {[1, 2, 3, 4, 5].map((ratingValue) => (
                    <button
                      key={ratingValue}
                      onClick={() => handleRatingSelect(ratingValue)}
                      className={rating >= ratingValue ? "active" : ""}
                    >
                      <FontAwesomeIcon icon={faStar} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="face face2">
              <img
                className="bimg"
                src="https://i.ytimg.com/vi/OQ6Q_SvO7jw/maxresdefault.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="Hcontents">
            <p className="HsongName">Euphoria</p>
            <p className="Hartist">Jungkook</p>
          </div>
        </div>

        <div className="wholeCard">
          <div className="Bcard">
            <div className="face face1">
            <div className="Bcontent">
                <span className="Bstars"></span>
                <p className="Songdetails">
                  <strong>Genre: </strong>Synthpop
                </p>
                <p className="Songdetails">
                  <strong>Release date: </strong>October 3, 2018
                </p>
                <p className="Songdetails"><strong>Rating: </strong></p>
                <div className="HomefooterRating">
                  {[1, 2, 3, 4, 5].map((ratingValue) => (
                    <button
                      key={ratingValue}
                      onClick={() => handleRatingSelect(ratingValue)}
                      className={rating >= ratingValue ? "active" : ""}
                    >
                      <FontAwesomeIcon icon={faStar} />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            <div className="face face2">
              <img
                className="bimg"
                src="https://images.genius.com/98c4c2bd9bbc3b28ec347e0f35e68ddd.1000x1000x1.jpg"
                alt=""
                srcset=""
              />
            </div>
          </div>
          <div className="Hcontents">
            <p className="HsongName">Euphoria</p>
            <p className="Hartist">Jungkook</p>
          </div>
        </div>
      </div>
      <div className="HalbumNames"></div>
    </div>
  );
}

export default BodyContent;
