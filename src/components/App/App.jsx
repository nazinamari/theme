import Header from "../Header/Header";
import { refreshUser } from "../../reduxTheme/authRedux/operations";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return <Header />;
}
