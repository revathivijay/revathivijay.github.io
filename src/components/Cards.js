import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

import { Link } from "react-router-dom";

function Cards() {
  return (
    <div className="cards">
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/ytmusync.jpg"
              text="Youtube Mu-sync"
              label="YT Mu-sync"
              repository="yt-musync"
            ></CardItem>

            <CardItem
              src="images/penncloud.jpg"
              text="Penn Cloud (In progress)"
              label="Penn Cloud"
              repository=""
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/vqa.jpg"
              text="Visual Question Answering Using Deep Learning"
              label="VQA"
              repository="Visual-Question-Answering"
            />
            <CardItem
              src="images/aplite.jpg"
              text="APLite - An Interactive APL Interpreter"
              label="APlite"
              repository=""
            />

            <CardItem
              src="images/xray.jpg"
              text="Classification of COVID-19 and Pneumonia from Chest X-Ray Images"
              label="COVID-19|Pneumonia"
              repository="COVID-19-and-Pneumonia-Classification"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
