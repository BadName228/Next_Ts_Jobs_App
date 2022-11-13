import React from "react";
import axios from "axios";
import { FaMapMarkerAlt } from "react-icons/fa";
import style from "../../styles/Location.module.css";

type Props = {
  coord: {
    lat: number;
    long: number;
  };
};

interface PlusCode {
  compound_code: string | null;
  global_code: string | null;
}

const Location = ({ coord }: Props) => {
  const [location, setLocation] = React.useState<PlusCode>({
    compound_code: null,
    global_code: null,
  });

  React.useEffect(() => {
    axios
      .get(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${coord.lat},${coord.long}&key=AIzaSyBpusxoY8nL67om0yyNC0NUglLXTqZl6KQ`
      )
      .then((res) => {
        setLocation(res.data.plus_code);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const redusedLocation = (): string => {
    let result: string = "Unknown location";
    if (location.compound_code) {
      result = location.compound_code.split("+")[1].slice(3);
    }
    return result;
  };

  return (
    <div>
      <h3 className={style.h3}>
        <FaMapMarkerAlt />
        {redusedLocation()}
      </h3>
    </div>
  );
};

export default Location;
