import Students from "./components/one/Students";
import Form from "./components/one/Form";
import { useState } from "react";

function App() {
 

  const [students, setStudents] = useState([])

  const addNewMember = (memInfo) => {
    setStudents([...students,memInfo]);
  };

  let contentSection = <p>No member yet!!</p>

  if(students.length > 0){
    contentSection = students.map((student)=>(
      <Students name={student.name} live={student.live} key={student.name}/>
    ))
  }
  return (
    <div className="App">
      <section>
        {contentSection}
      </section>
      <Form addNewMember={addNewMember} />
    </div>
  );
}

export default App;
