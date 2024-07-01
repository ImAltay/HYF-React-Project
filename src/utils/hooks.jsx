import { useContext } from "react";
import { WatchListContext } from "../contexts/WatchListContext.jsx";

export const useWatchList = () =>  useContext(WatchListContext); 