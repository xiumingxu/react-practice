import React, {Component} from 'react';

class MovieCard extends Component {

    

    render(){
        const {movieID, movieLikedBy, users, movies} = this.props;

        // console.log(movies);
        const movieName = movies[movieID].name;
        console.log(movieLikedBy);
        return (
          <li key={movieID}> 
            <h2>{movies[movieID].name}</h2>
            {
              (movieLikedBy.length === 0 || movieLikedBy === undefined) ? (
                <p>None of the current users liked this movie</p>
              ):
              (
                <div>
                  <h3>Liked By: </h3>
                  <ul>
                    {
                      movieLikedBy.map(userID => {
                        return (
                          <li key={userID}>
                           <p> {users[userID].name} </p>
                          </li>
                        );
                      })
                    }
                  </ul>
                </div>

              )
            }
            





          </li>

            // <li key={movieID}>
            //   <h2> {movieName} </h2>
            //   {
            //     movieLikedBy.length === 0? (
            //       <p> None of the current users liked this movie.</p>
            //     ):{
            //       return();
            //     }

            //   }

           
          );
        
    }


}




export default MovieCard;