import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase.js";
import Info from './Info.jsx';
import Hotels from './Hotels.jsx';
import Itinerary from './Itinerary.jsx';
import { createContext } from 'react';

export const LocationContext = createContext()

function ViewTrip() {
    const [location, setLocation] = useState(false);


    const { tripId } = useParams();

    const [Data, setData] = useState();



    useEffect(() => {
        tripId && GetTripData();
    }, [tripId]);

    const GetTripData = async () => {
        const docRef = doc(db, "tripper", tripId);
        let docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setData(docSnap.data());
            setLocation(docSnap.data()?.userInput.place);
        }
        else {
            console.log("No such document!");
        }
    }



    return (
        <>
            <LocationContext.Provider value={{ location, setLocation }}>
                <div className="min-h-screen px-4 sm:px-10 md:px-20 lg:px-40 xl:px-56 mt-14">
                    <Info Data={Data} />
                    <Hotels hotel={Data?.tripInfo.hotelOptions} />
                    <Itinerary data={Data?.tripInfo.itinerary} />
                </div>
            </LocationContext.Provider>
        </>
    )
}

export default ViewTrip