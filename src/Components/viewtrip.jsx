import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore";
import { db } from "./firebase.js";

function ViewTrip() {

    const { tripId } = useParams();

    const [Data, setData] = useState();
    const [stringData, setStringData] = useState();

    useEffect(() => {
        tripId&&GetTripData();
        setStringData(JSON.stringify(Data));
    }, [tripId]);

    const GetTripData = async () => {
        // Fetch data from the server using tripId
        const docRef = doc(db, "tripper", tripId);
        let docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            setData(docSnap.data());
            // console.log("Document data:", docSnap.data());
        }
        else {
            console.log("No such document!");
        }
    }



    return (
        <div>
            {JSON.stringify(Data)}
        </div>
    )
}

export default ViewTrip