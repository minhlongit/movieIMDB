import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import user from "./../../images/user.png";
import "./Header.scss";

export default function Header() {
  const [term, setTerm] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(term);
    if (term == "") return alert("Pls enter Search term");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  };
  return (
    <div className="header ">
      <div className="logo">
        <Link to="/">MovieApp</Link>
      </div>

      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i class="fas fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
}
