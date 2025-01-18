import { useState, useContext } from "react"
import GooglePlacesAutocomplete from "react-google-places-autocomplete"
import Budget, { Traveller, AiPrompt } from "./helper.js"
import Button from '@mui/material/Button';
import { ToastContainer, toast } from 'react-toastify';
import chatSession from "./AIModal.js";
import { AiOutlineLoading } from "react-icons/ai";
import { MdOutlineAirplanemodeActive } from "react-icons/md";
import Signin from "./Signin";
import { UserContext } from '../App';

import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase.js";
import { useNavigate } from "react-router-dom";




function CreateTrip() {
    const [destination, setDestination] = useState();
    const [Formdata, setFormdata] = useState([]);
    const [Load, setLoad] = useState(false);
    const value = useContext(UserContext);

    const navigate = useNavigate();

    const handleInput = (type, data) => {
        setFormdata({
            ...Formdata,
            [type]: data
        })
    }


    const handleSubmit = async () => {

        const user = localStorage.getItem("user");
        if (!user) {
            value.setOpen(true);
            return;
        }

        if (!Formdata.place || !Formdata.days || !Formdata.budget || !Formdata.traveller) {
            toast.error("Please fill all the fields! 🥲", { position: "bottom-right" });
            return;
        }
        setLoad(true);
        const prompt = AiPrompt.replace("{location}", Formdata.place).replace("{days}", Formdata.days).replace("{traveller}", Formdata.traveller).replace("{budget}", Formdata.budget).replace("{days}", Formdata.days);
        toast.success("Submitted Successfully! 🚀", { position: "bottom-right" });
        const res = await chatSession.sendMessage(prompt);
        const result = JSON.parse(res.response.candidates[0].content.parts[0].text);
        setLoad(false);
        saveData(result);
    }

    const saveData = async (data) => {
        setLoad(true);
        const docId = Date.now().toString();
        const user = JSON.parse(localStorage.getItem("user"));
        await setDoc(doc(db, "tripper", docId), {
            id: docId,
            userMail: user.email,
            userDetail: user,
            userInput: Formdata,
            tripInfo: data,
        });
        setLoad(false);
        navigate("/viewtrip/" + docId);
    }


    return (
        <>
            <div className="min-h-screen px-6 sm:px-10 md:px-20 lg:px-40 xl:px-56 mt-14">
                <div>

                    <h2 className="text-3xl sm:text-4xl font-bold my-4">
                        Tell us your travel preferences 🚀
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-600">
                        Just provide some basic information, and our trip planner will generate a customized itinerary based on your preferences.
                    </p>
                </div>
                <div className="flex flex-col gap-10 mt-14">
                    <div>
                        <h2 className="text-lg sm:text-xl font-medium my-4">
                            What is Destination of choice ?  🌍
                        </h2>
                        <GooglePlacesAutocomplete
                            apiKey={import.meta.env.VITE_GOOGLE_MAPS_API_KEY}
                            selectProps={{
                                destination,
                                onChange: (e) => {
                                    setDestination(e)
                                    handleInput("place", e.label)
                                }
                            }}
                        />

                    </div>

                    <div>
                        <h2 className="text-lg sm:text-xl font-medium my-4">
                            How many days are you planning your trip for?
                        </h2>

                        <input required type="number" name="days" id="days" placeholder="Ex.4"
                            onChange={(e) => { handleInput("days", e.target.value) }}
                            className="block w-full rounded-md bg-white px-4 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder-gray-400 focus:outline-2 focus:outline-indigo-600 transition-all sm:text-lg"
                        />
                    </div>
                    <div>
                        <h2 className="text-lg sm:text-xl font-medium my-4">
                            What is your Budget?
                        </h2>
                        <h3 className="text-base sm:text-lg font-normal text-gray-600">
                            This will help us suggest the best places to stay, eat and visit.
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                            {Budget.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => handleInput("budget", item.title)}
                                    className={`p-5 border rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200 ${item.title === Formdata.budget ? "bg-gray-100 border-black" : ""
                                        }`}
                                >
                                    <h2 className="text-4xl">{item.icon}</h2>
                                    <h2 className="font-bold text-lg">{item.title}</h2>
                                    <h2 className="text-sm text-gray-500">{item.desc}</h2>
                                </div>
                            ))}
                        </div>
                    </div>


                    <div>
                        <h2 className="text-lg sm:text-xl font-medium my-4">
                            Who do you plan on traveling with on your next adventure?
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-5">
                            {Traveller.map((item) => (
                                <div
                                    key={item.id}
                                    onClick={() => handleInput("traveller", item.title)}
                                    className={`p-5 border rounded-lg cursor-pointer hover:shadow-lg transition-all duration-200 ${item.title === Formdata.traveller ? "bg-gray-100 border-black" : ""
                                        }`}
                                >
                                    <h2 className="text-4xl">{item.icon}</h2>
                                    <h2 className="font-bold text-lg">{item.title}</h2>
                                    <h2 className="text-sm text-gray-500">{item.desc}</h2>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex justify-center mb-16">
                        <Button
                            disabled={Load}
                            onClick={handleSubmit} size='large' className="bg-black px-6 py-3 text-lg sm:text-xl transition-all"
                            variant="contained" >
                            {Load ? <AiOutlineLoading color="white"
                                className="m-2 h-8 w-8 animate-spin" />
                                : <>Generate Trip <MdOutlineAirplanemodeActive className="h-5 w-8" />
                                </>}</Button>

                        <ToastContainer />
                        <Signin />

                    </div>

                </div>

            </div>

        </>
    )
}

export default CreateTrip

