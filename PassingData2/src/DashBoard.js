import React, { Component } from 'react';
import MovieCard from './MovieCard';

class DashBoard extends Component {
  // decode info to moviecard
  render(){
      // let users =  this.props.users;
      // let userByMovies = this.props.userByMovies;
      // let movies = this.movies;
      const { movies, userByMovie, users} = this.props;

      // console.log(this.props);
      // console.log(Object.keys(userByMovie));
      // decode to the right information

      const movieCards = Object.keys(movies).map((movieID) => {
          //  console.log(movieID);
          //  console.log(userByMovie[movieID]);

           return (
            <MovieCard
              movieID = {movieID}
              movieLikedBy = {userByMovie[movieID] === undefined? []:userByMovie[movieID]}
              users = {users}
              movies = {movies}
             />
           );
         }
      );
        
      
      // console.log(movieCards);
      return (
        <ul>{movieCards}</ul>
      );
  }
}



export default DashBoard;