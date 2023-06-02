import React from 'react'
  
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Protected(props) {

const {Comp}=props

  const Navigate=useNavigate()

  useEffect(()=>{
    let auth=localStorage.getItem("auth")
    if(!auth){
      Navigate("/")
    }
  },[])
  
    return (
      <>
     
      <Comp />
      </>
    )
}


