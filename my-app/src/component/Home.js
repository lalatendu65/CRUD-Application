import React from "react";
import "./home.css"

function Home(){
    return (
      <div className="home">
        <h1>Welcome to My user management application!</h1> <br />
        <h3>
          In this Application you can Adduser, Edit/update user and Delete the
          user
        </h3>
        <p>
          For making this Application i use React js (Frontend) ,Nodejs(Backend) and Database(monogoDb)
        </p>
      </div>
    );
}
export default Home