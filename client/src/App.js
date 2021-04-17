import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { initWeb3 } from './store/adoptSlice';

import AddPet from './components/AddPet';

function App() {
  const dispatch = useDispatch();

  
  const web3 = useSelector((state)=>{
    // console.log("state in app= ",state);
    return state.adoptReducer.web3
  })
 
  useEffect(()=>{
    dispatch(initWeb3());
    // setTimeout(function (){
    //   dispatch(loadAdopters())
    // },1000 )
  },[web3])

 



  return (
    <div>
      Hello Dapp web 3
      
      <AddPet/>
    </div>
  );
}

export default App;
