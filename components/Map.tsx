import React from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import IntPostCard from "../types/IntResponcePostApi";
import { FaMapMarkerAlt } from "react-icons/fa";
import style from "../styles/map.module.css";

interface props {
  info: IntPostCard;
}

const Mapa = ({ info }: props) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: "AIzaSyCQjeq974aUXPJmmvbgEYsS2JoMIjK_GgI",
  });

  const Phone = () => {
    const result = `${info.phone.slice(0, 3)} (${info.phone.slice(
      3,
      6
    )}) ${info.phone.slice(6, 9)}-${info.phone.slice(9)}`;
    return <h2 className="p1">{result}</h2>;
  };

  return (
    <div id="map">
      <div className="infoBlock">
        <div className="cirle" />
        <div id="info">
          <h1>{info.name}</h1>
          <h2 className="p1">
            <FaMapMarkerAlt />
            {info.address}
          </h2>
          <Phone />
          <h2 className="p1">{info.email}</h2>
        </div>
      </div>
      {!isLoaded ? (
        <p>Loading...</p>
      ) : (
        <Map long={info.location.long} lang={info.location.lat} />
      )}
      <style jsx>{`
        #map {
          margin-top: 20px;
          float: right;
          width: 402px;
          height: 436px;
          border-radius: 8px;
        }
        .infoBlock {
          display: flex;
          margin-top: 30px;
          width: 100%;
          height: 50%;
          background-color: #2a3047;
          border-top-right-radius: 8px;
          border-top-left-radius: 8px;
        }
        .cirle {
          height: 218px;
          width: 200px;
          border-radius: 5% 58% 24% 0% / 5% 56% 43% 0%;
          background-color: #202336;
        }
        #info {
          margin-top: 30px;
          margin-left: -150px;
          width: 300px;
          height: 160px;
          color: white;
        }
        .p1 {
          margin-top: 5px;
          font-size: 18px;
          font-weight: 400;
        }
        .googleMap {
          width: 100%;
          height: 50%;
          border-bottom-left-radius: 8px;
          border-bottom-right-radius: 8px;
          color: #2a3047;
        }
      `}</style>
    </div>
  );
};

function Map({ long, lang }: any) {
  const position: { lat: number; lng: number } = {
    lat: lang,
    lng: long,
  };

  const MarkerOnMap = () => {
    return <Marker position={position} />;
  };

  return (
    <GoogleMap
      clickableIcons={false}
      mapTypeId="hybrid"
      zoom={3}
      center={position}
      mapContainerClassName={style.googleMap}
    >
      <MarkerOnMap />
    </GoogleMap>
  );
}

export default Mapa;
