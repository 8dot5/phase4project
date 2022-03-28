import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Constellation () {
    const [constellation, setConstellation] = useState({});
    let { id } = useParams();

    useEffect(() => {
        fetch(`/constellations/${id}`)
        // fetch(`http://localhost:3000/constellations/${id}`)
          .then((r) => r.json())
          .then(setConstellation)
    }, []);
//  TODO
    // setConstellation()
    console.log(constellation)
    return (
        <>
        <p>test</p>
        </>

    )

}

export default Constellation;