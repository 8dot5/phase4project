import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


function Constellation () {
    const [constellation, setConstellation] = useState({});
    let { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:3000/constellation/${id}`)
        // fetch(`https://constellation-lookup.herokuapp.com/constellation/${id}`)
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