import { useSelector, useDispatch } from 'react-redux'
import petsListJson from '../pets.json'
import { adoptPet, removeAdoption } from '../store/adoptSlice';
import Adopters from './Adopters';


function PetList() {
  const address = useSelector((state) => {
    return state.adoptReducer.address;
  })
  const contract = useSelector((state) => {
    return state.adoptReducer.contract;
  })
  const adopterList = useSelector((state) => {
    return state.adoptReducer.adopters
  })
  const { adoptInProgess, adoptError, adoptErrorMessage } = useSelector((state) => {
    return state.adoptReducer;
  })


  const dispatch = useDispatch();


  return (
    <div>
      <div>
        Hello Pet List = {address}
      </div>

      <Adopters />

      {
        adoptInProgess ? <div className={"loading"}>
          <img src="images/progress.gif" style={{ width: "300px" }} />
        </div> : null
      }

      {
        adoptError ? <p style={{ color: "red" }}>{adoptErrorMessage}</p> : null
      }

      

      
    </div>
  );
}

export default PetList;