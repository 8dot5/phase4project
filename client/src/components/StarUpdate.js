import { useState, useEffect } from 'react';
import { useParams, useHistory } from "react-router-dom"

function StarUpdate( {constellations, handleStarUpdate}) {
    // TODO: fix persistence of constellation ID
    const [star, setStar] = useState('');
    const [name, setName] = useState('');
    const [brightStar, setBrightstar] = useState(false);
    const [rightAscension, setRightAscension] = useState('');
    const [declination, setDeclination] = useState('');
    const [apparentMagnitude, setApparentMagnitude] = useState('');
    const [age, setAge] = useState('');
    const [massKg, setMassKg] = useState('');
    const [radiusKm, setRadiusKm] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [distanceFromSun, setDistanceFromSun] = useState('');
    let { id, star_id } = useParams();
    let history = useHistory();

    useEffect(() => {
        fetch(`/stars/${star_id}`)
        .then(r => r.json())
        .then(data => setStar(data))
        .then((data) => {
       console.log(data)
            // setName(data.name)
            // setRightAscension(star.right_ascension_hrs_mins)
            // setDeclination(star.declination_degs_mins)
            // setApparentMagnitude(star.apparent_magnitude)
            // setAge(star.age)
            // setMassKg(star.mass_kg)
            setRadiusKm(star.radius_km)
            setImageUrl(star.image_url)
        })
    }, [star_id])

    let formData = {
        "name": name,
        "bright_star": brightStar,
        "right_ascension_hrs_mins": rightAscension,
        "declination_degs_mins": declination,
        "apparent_magnitude": apparentMagnitude,
        "age": age,
        "mass_kg": massKg,
        "radius_km": radiusKm,
        "image_url": imageUrl ? imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/57/Betelgeuse_captured_by_ALMA.jpg',
        "distance_from_sun": distanceFromSun
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`/stars/${star_id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(star => {
                    handleStarUpdate(star);
            })
            // alert("Updated!");
            .then(() => {
                setName('');
                setStar('');
                setBrightstar('');
                setRightAscension('');
                setDeclination('');
                setApparentMagnitude('');
                setAge('');
                setMassKg('');
                setRadiusKm('');
                setImageUrl('');
                setDistanceFromSun('');
                history.push(`/constellations/${id}`)
            }
                )
        }

    let form = (
        <div className='form-container'>
            <form className="star-form">
                <label>Edit the information for {star.name}</label>
                <br></br>
                <br></br>

            </form>
            <form className='form' onSubmit={handleSubmit}>
                <label htmlFor='Form'>Star Name:</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="name"
                    value={name}
                    placeholder={star.name}
                    onChange={e => setName(e.target.value)}
                />
                <br></br>

                <br></br>
                <label htmlFor='Form'>Image:</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={imageUrl}
                    placeholder={star.image_url}
                    onChange={e => setImageUrl(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Right ascension (hours, minutes, seconds):</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={rightAscension}
                    placeholder={star.right_ascension_hrs_mins}
                    onChange={e => setRightAscension(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Declination (degrees, minutes, seconds):</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={declination}
                    placeholder={star.declination_degs_mins}
                    onChange={e => setDeclination(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Apparent Magnitude:</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={apparentMagnitude}
                    placeholder={star.apparent_magnitude}
                    onChange={e => setApparentMagnitude(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Age:</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={age}
                    placeholder={star.age}
                    onChange={e => setAge(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Mass (kg): </label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={massKg}
                    placeholder={star.mass_kg}
                    onChange={e => setMassKg(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Radius (km):</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={radiusKm}
                    placeholder={star.radius_km}
                    onChange={e => setRadiusKm(e.target.value)}
                />
                <br></br>
                <br></br>
                <label htmlFor='Form'>Distance from the Sun:</label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={distanceFromSun}
                    placeholder={star.distance_from_sun}
                    onChange={e => setDistanceFromSun(e.target.value)}
                />
                <br></br>
                <input className="star_submit_button" type="submit" value="Submit"></input>
            </form>
        </div>
    )

    return (
        <div className="star-form">
            {form}
        </div>
    )
}

export default StarUpdate;


