// outsource dependencies
import React, {useEffect} from "react";
import { useDispatch } from "react-redux";

// local dependencies
import "../style/index.less";
import Layout from "./Layout.jsx";
import { getUserProfile } from "../actions/user";


const App = () => {
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(getUserProfile());
    }, []);

  return (
     <Layout/>
  )
};

export default App;


