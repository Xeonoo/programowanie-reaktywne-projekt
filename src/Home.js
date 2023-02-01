import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";
import axios from "axios";
import React, { useEffect, useState } from "react";

function Home({setSearch,search=""}) {
  const[data,setdata]=useState([])
  const[movies,setmovies]=useState([])
  const[finishloading,setfinishloading]=useState(false)
  useEffect(()=>{
    axios.get("https://at.usermd.net/api/movies")
    .then((Response)=>{
      setdata(Response.data) 
      setmovies(Response.data)
      console.log(Response)
      setfinishloading(true)
    })
    .catch((Error)=>{
      console.log(Error)
    })
  },[])
    useEffect(()=>{
      if (finishloading){
        let newmovies=[];
        data.forEach((movie)=>{
          if (movie.title){
            if(movie.title.toLowerCase().includes(search.toLowerCase())) newmovies.push(movie);
          }
        })
        setmovies(newmovies)
      }
    },[search])
    return(
        <>
      <Header setSearch={setSearch} />
      {
        movies.map((movie,i)=>{
          return(
            <Content key={i} movie={movie}/>
          )
        })
      }
      <Footer />
    </>
    );
}
export default Home;