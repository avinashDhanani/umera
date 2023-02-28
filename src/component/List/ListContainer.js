import React, { useEffect } from "react";
import ListS from "./ListS";
import "./ListContainer.css";
function ListContainer({ listData, title }) {
  useEffect(() => {
    console.log(listData);
    console.log(title);
    console.log();
  }, []);

  return (
    <div className="listcontainer">
      <h4>{title}</h4>
      <div className="item-container">
        {listData.map((item) => (
          <>
            <ListS item={listData[ Math.floor(Math.random()*10)]} />
          </>
        ))}
      </div>
    </div>
  );
}

export default ListContainer;
