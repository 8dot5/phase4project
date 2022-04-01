import { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import styled from "styled-components";



function StarCreate( {history}) {
    // TODO: fix persistence of constellation ID - I THINK WE CAN DELETE THIS?
    let { id } = useParams();
    
    const [name, setName] = useState('');
    const [constellation, setConstellation] = useState('');
    // const [constellationId, setConstellationId] = useState('');
    const [brightStar, setBrightstar] = useState(false);
    const [rightAscension, setRightAscension] = useState('');
    const [declination, setDeclination] = useState('');
    const [apparentMagnitude, setApparentMagnitude] = useState('');
    const [age, setAge] = useState('');
    const [massKg, setMassKg] = useState('');
    const [radiusKm, setRadiusKm] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [distanceFromSun, setDistanceFromSun] = useState('');

    useEffect(() => {
        fetch(`/constellations/${id}`)
        .then(r => r.json())
        .then(data => setConstellation(data))
    }, [id])

    let formData = {
        "name": name,
        "constellation_id": constellation.id,
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

    // let dropdownItems = constellations.map(constellation => {
    //     return <option value={constellation.id}>{constellation.name}</option>
    // })
    function handleSubmit(e) {
        e.preventDefault()
        // switch (true) {
            // case (formData.name.length < 1):
            //     alert("Please enter the star name.");
            //     break;
            // case (!formData.architect_id || formData.architect_id === "select"):
            //     alert("Please select an architect.");
            //     break;
            // case (!formData.city_id || formData.city_id === "select"):
            //     alert("Please select the city.");
            //     break;
            // case (formData.opened.length < 1):
            //     alert("Please enter the building's date of completion.");
            //     break;
            // case (formData.description.length < 1):
            //     alert("Please enter a description.");
            //     break;
            // default:
        fetch("/stars", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(formData)
            })
                .then(res => res.json())
                .then(star => {
                //     handleAddUpdateStar(star)
            })
            // alert("Submitted!");
            history.push(`/constellations/${id}`)
            setName('');
            setConstellation('');
            setBrightstar('');
            setRightAscension('');
            setDeclination('');
            setApparentMagnitude('');
            setAge('');
            setMassKg('');
            setRadiusKm('');
            setImageUrl('');
            setDistanceFromSun('');
        }

    // let constellation = constellations.find(c => c.id == id)
    let form = (
        <Card className='form-container'>
            <form className="star-form">
                <Label>Add a star to the constellation {constellation.name}</Label>
                <br></br>
                    {/* <select name="constellations" className="constellations-dropdown" value={constellationId} onChange={(e) => setConstellationId(e.target.value)}>
                       {dropdownItems}
                    </select> */}
                <br></br>

            </form>
            <form className='form' onSubmit={handleSubmit}>
                <Label htmlFor='Form'>Star Name:</Label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="name"
                    value={name}
                    placeholder="Star name..."
                    onChange={e => setName(e.target.value)}
                />
                <br></br>
                {/* <Label htmlFor='Form'>Opened:</Label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="opened"
                    value={opened}
                    placeholder="Year..."
                    onChange={e => setOpened(e.target.value)}
                /> */}

                <br></br>
                <Label htmlFor='Form'>Image:</Label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="image"
                    value={imageUrl}
                    placeholder="Image URL..."
                    onChange={e => setImageUrl(e.target.value)}
                />
                <br></br>
                {/* <Label htmlFor='Form'>Description:</Label>
                <br></br>
                <input
                    className="name"
                    type="text"
                    id="description"
                    value={description}
                    placeholder="Description..."
                    onChange={e => setDescription(e.target.value)}
                />
                <br></br> */}
                <br></br>
                <input className="button-35" type="submit"></input>
            </form>
        </Card>
    )

    return (
        <div className="star-form">
            {form}
        </div>
    )
}

const Card = styled.div `
margin-left:auto;
margin-right:auto;
background: rgba(0, 0, 0, 0.8);
display:flex;
flex-direction:column;
justify-content:center;
width:60%;
padding-bottom:10vw;
`

const Label = styled.label`
color:white;
`;

export default StarCreate;


