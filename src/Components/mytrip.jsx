import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import { UserContext } from '../App';
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from './firebase';
import Mytripcard from './Mytripcard';



function Mytrip() {

  const value = useContext(UserContext);

  const [userTrip, setUserTrip] = useState([]);

  const handleTrips = (data) => {
    setUserTrip([
      ...userTrip, data
    ])
  }

  const navigator = useNavigate();
  const getUser = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      navigator("/")
      value.setOpen(true);
      return
    }
    getData(user);
  }
  const getData = async (user) => {
    try {
      const q = query(collection(db, "tripper"), where("userMail", "==", user.email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        // console.log(doc.id, " => ", doc.data());
        setUserTrip(prev=>[...prev,doc.data()])
      });
    }
    catch (error) {
      console.error("Error fetching data:", error);
    }
  }



  useEffect(() => {
    getUser();
  }, [])





  return (
    <div className="min-h-screen sm:px-10 md:px-32 lg:px-56 xl:px-56 2xl:px-56 px-10 mt-14">
      <div>
        <h2 className="text-4xl font-bold my-4">
          My Trips
        </h2>
        <p className=" text-gray-600 text-xl">
          All your Trips saved here!
        </p>
      </div>
      <div className='grid grid-cols-2  gap-10 mt-8 mb-20'>
        {userTrip.length>0?
        userTrip.map((trip) => (
          <Mytripcard trip={trip} />
        ))
        :[1,2,3,4,5,6].map((item)=>(
          <div className='h-80 w-full bg-slate-200 shadow-lg p-5 rounded-xl border-2'>

          </div>
        ))
        }
      </div>
    </div>
  )
}

export default Mytrip