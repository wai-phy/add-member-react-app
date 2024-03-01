import { useState } from "react";
function Students(props) {
  let live = props.live.toUpperCase();

  const [name] = useState(props.name);

  return (
        <div className="box">
          <p>name : {name}</p>
          <p>live : {live}</p>
        </div>
     
  );
}

export default Students;
