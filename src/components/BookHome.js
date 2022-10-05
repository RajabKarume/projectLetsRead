import React from "react";
import 'antd/dist/antd.css';
import Homebanner from "./HomeBanner";
import BookCard from "./BookCard"

export default function BookHome(){

    return(
        <>
            < Homebanner />
            < BookCard />
        </>
    )
}