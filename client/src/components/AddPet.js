import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { addPet } from '../store/adoptSlice';

export default function AddPet() {
    const [petName, setpetName] = useState("");
    const [location, setlocation] = useState("")
    const [age, setage] = useState("")
    const [price, setprice] = useState(0)

    const dispatch = useDispatch()

    const address = useSelector((state) => {
        return state.adoptReducer.address;
    })
    // const petinfo = useSelector((state) => {
    //     return state.adoptReducer.petInfo
    // })



    return (
        <div>
            Hello Pet List = {address}
            {

                <form >
                   <div className="form-control">
                        <label htmlFor="Name"
                        >Name <br />
                        </label>
                        <input type="text" value={petName} onChange={(e) => setpetName(e.target.value)} placeholder="Enter petName..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="location"
                        >location <br />
                        </label>
                        <input type="text" value={location} onChange={(e) => setlocation(e.target.value)} placeholder="Enter location..." />
                    </div>

                    <div className="form-control">
                        <label htmlFor="age"
                        >age <br />
                        </label>
                        <input type="text" value={age} onChange={(e) => setage(e.target.value)} placeholder="Enter age..." />
                    </div>
                    <div className="form-control">
                        <label htmlFor="price"
                        >price <br />
                        </label>
                        <input type="text" value={price} onChange={(e) => setprice(e.target.value)} placeholder="Enter price..." />
                    </div>

                    {
                        { address } !== '0x0000000000000000000000000000000000000000' ? <button type="button" onClick={async () => {
                            console.log("this is =>",petName, location,age,price);
                            // console.log("this is description=>", description);

                            dispatch(addPet({ petName, location,age,price }));

                        }} >Add </button> : null
                    }
                </form>


            }



            {/* <form>
                <input type="text" label="Pet-Name" onChange={(e) => setpetName(e.target.value)} variant="outlined" required />
                <br /> <input type="text" label="location" onChange={(e) => setlocation(e.target.value)} variant="outlined" required />
                <br />  <input type="text" label="age" onChange={(e) => setage(e.target.value)} variant="outlined" required />
                <br /><input type="text" label="age" onChange={(e) => setprice(e.target.value)} variant="outlined" required />
                <br /> <button type="button" onClick={async () => {
                    console.log(petName, location, age, price)

                    dispatch(addPet({ petName, location, age, price }));


                }} >Adopt</button>
            </form> */}

        </div>



    )
}
