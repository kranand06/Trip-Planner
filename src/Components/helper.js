const Budget=[
    {
        id:1,
        title : "Cheap",
        desc: 'Budget-friendly options',
        icon: '💵'
    },
    {
        id:2,
        title : "Moderate",
        desc: 'Mid-range options',
        icon: '💰'
    },
    {
        id:3,
        title : "Luxury",
        desc: 'High-end options',
        icon: '💸'
    },
]


export const Traveller=[
    {
        id:1,
        title : "Just Me",
        desc: 'A solo traveller experience',
        icon: '🕴️',
    },
    {
        id:2,
        title : "A Couple",
        desc: 'Two travel in tandem',
        icon: ' 👫',
    },
    {
        id:3,
        title : "My Family",
        desc: 'A family for the trip',
        icon:  '👨‍👩‍👧‍👦',
    },
    {
        id:4,
        title : "A Friend Group",
        desc: 'Group of thrill-seekers',
        icon: '🎢',
    },
]

export const AiPrompt="Generate Travel Plan for Location: {location}, for {days} Days for {traveller} with a {budget} budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket, Pricing,ratings, Time to travel each of the location for {days} days with each day plan with best time to visit in JSON format."


export default Budget