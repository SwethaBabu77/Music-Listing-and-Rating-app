import React from "react";
import "./UserContent.css";
import { Link } from "react-router-dom";
import { LogoutContext } from "./LogoutContext";
import Cards from "./Cards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
function UserContents() {
  const { Message, isLoggedOut, setIsLoggedOut } =
    React.useContext(LogoutContext);
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
    <div className="UHomebody">
      {isLoggedOut && (
        <Cards Message={Message} setIsLoggedOut={setIsLoggedOut} />
      )}
      <div className="UHomebodyInfoUser">
        <div className="Users">
          <div className="UserImage">
            <img className="Avatar" src="/src/assets/Avatar.png" alt="Avatar" />
            <div className="AvatarName">
              <h3>User</h3>
            </div>
            <Link to="/Home/EditDetails">
              <div className="editDetails">
                <p className="detailsavartar">Edit details</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      <div className="section">
        <h3 className="UserRated">Rated songs</h3>


        <div class="Usercard1">
          <div className="CardSong">
            <div className="songRating">
              <div className="SongNames">
                <p className="userSong">Automatic</p>
              </div>
              <div className="UserRatings">
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

          <div className="CardSong">
            <div className="songRating">
              <div className="SongNames">
                <p className="userSong">Calm Down</p>
              </div>
              <div className="UserRatings">
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


          <div className="CardSong">
            <div className="songRating">
              <div className="SongNames">
                <p className="userSong">Midnight Rain</p>
              </div>
              <div className="UserRatings">
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





        </div>


        



      </div>
    </div>
  );
}

export default UserContents;
