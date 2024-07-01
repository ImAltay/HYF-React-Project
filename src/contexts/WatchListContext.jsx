import React, {useState} from "react";
import PropTypes from "prop-types";

export const WatchListContext = React.createContext();

export const WatchListProvider = ({children}) => {
  const [watchList, setWatchList] = useState([]);

 const toggleWatchList = (animeID) => {
    if (watchList.includes(animeID)) {
      setWatchList(watchList.filter(id => id !== animeID));
    } else {
      setWatchList([...watchList, animeID]);
    }
     };

    return (
      <WatchListContext.Provider value={{watchList, toggleWatchList}}>
        {children}
      </WatchListContext.Provider>
    );
}

WatchListProvider.propTypes = {
  children: PropTypes.node.isRequired
};