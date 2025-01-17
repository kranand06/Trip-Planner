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
        tripId&&GetTripData();
    },[tripId]);

    const GetTripData = async () => {
        // Fetch data from the server using tripId
        const docRef = doc(db, "tripper", tripId);
        let docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setData(docSnap.data());
            setLocation(docSnap.data()?.userInput.place);
            // console.log("Document data:", docSnap.data()?.userInput.place);
        }
        else {
            console.log("No such document!");
        }
    }



    return (
        <>
        <LocationContext.Provider value={{ location, setLocation }}>
        <div className="min-h-screen sm:px-10 md:px-32 lg:px-56 xl:px-56 2xl:px-56 px-1 mt-14">
            <Info Data={Data} />
            <Hotels hotel={Data?.tripInfo.hotelOptions} />
            <Itinerary data ={Data?.tripInfo.itinerary} />
        </div>
        </LocationContext.Provider>
        </>
    )
}

export default ViewTrip