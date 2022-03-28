import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Constellation () {
    const [constellation, setConstellation] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/constellations/${id}`)
          .then((r) => r.json())
          .then(setConstellation)
    }, []);

    return (
        <>
        </>
    )
}

export default Constellation;