import { useEffect, useState } from "react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import Budget from "./helper.js"
import { Traveller } from "./helper.js"
import Button from '@mui/material/Button';
import FlightIcon from '@mui/icons-material/Flight';
import { ToastContainer, toast } from 'react-toastify';




function CreateTrip() {
    const [destination, setDestination] = useState();
    const [Formdata, setFormdata] = useState([]);

    const handleInput = (type,data) => {
        setFormdata({
            ...Formdata,
            [type]: data
        })
    }

    const handleSubmit = () => {
        if(!Formdata.place || !Formdata.days || !Formdata.budget || !Formdata.traveller){
            toast.error("Please fill all the fields! 🥲",{position: "bottom-right"});
            return;
        }
        console.log(Formdata);
        toast.success("Submitted Successfully! 🚀",{position: "bottom-right"});
    }


    return (
        <>
           <div className=" sm:px-10 md:px-32 lg:px-56 xl:px-56 2xl:px-56 px-10 mt-14">
                <div>

                    <h2 className="text-4xl font-bold my-4">
                        Tell us your travel preferences 🚀
                    </h2>
                    <p className=" text-gray-600 text-xl">
                        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
                    </p>
                </div>
                <div className="flex flex-col gap-10 mt-20">
                    <div>
                        <h2 className="my-4 text-xl font-medium ">
                            What is Destination of choice ?  🌍
                        </h2>
                        <GooglePlacesAutocomplete
                            apiKey={import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY}
                            selectProps={{ destination,
                                onChange: (e) =>{
                                    setDestination(e) 
                                    handleInput("place",e.label)
                                }}}
                        />

                    </div>

                    <div>
                        <h2 className="text-xl font-medium my-4">
                            How many days are you planning your trip for?
                        </h2>

                        <input required type="number" name="days" id="days" placeholder="Ex.4" 
                        onChange={(e) => {handleInput("days",e.target.value)}}
                        className=" mt-3 block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                    <div>
                        <h2 className="text-xl font-medium mt-4">
                            What is your Budget?
                        </h2>
                        <h3 className="text-lg font-normal">
                            This will help us suggest the best places to stay, eat and visit.
                        </h3>
                        <div className="grid grid-cols-3 gap-5 my-5">
                            {
                                Budget.map((item) => {
                                    return (
                                        <div key={item.id} 
                                        onClick={() => handleInput("budget",item.title)}
                                        className={`p-4 border rounded-lg hover:shadow-lg ${item.title === Formdata.budget ? "bg-gray-100 border-black" : ""}`}>
                                            <h2 className="text-4xl">{item.icon}</h2>
                                            <h2 className="font-bold text-lg">{item.title}</h2>
                                            <h2 className="text-sm text-gray-500">{item.desc}</h2>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div>
                        <h2 className="text-xl font-medium mt-4">
                            Who do you plan on traveling with on your next adventure?
                        </h2>

                        <div className="grid grid-cols-3 gap-5 my-5">
                            {
                                Traveller.map((item) => {
                                    return (
                                        <div key={item.id}
                                        onClick={() => handleInput("traveller",item.title)}
                                        className={`p-4 border rounded-lg hover:shadow-lg ${item.title === Formdata.traveller ? "bg-gray-100 border-black" : ""}`}>
                                            <h2 className="text-4xl">{item.icon}</h2>
                                            <h2 className="font-bold text-lg">{item.title}</h2>
                                            <h2 className="text-sm text-gray-500">{item.desc}</h2>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className="mb-16 flex justify-center">
                        <Button onClick={handleSubmit} size='large' className='bg-black' variant="contained" endIcon={<FlightIcon />}>Generate Trip</Button>
                        <ToastContainer />
                    </div>

                </div>

            </div>

        </>
    )
}

export default CreateTrip
