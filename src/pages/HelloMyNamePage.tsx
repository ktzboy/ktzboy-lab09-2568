import { useState } from "react"
export default function HelloMyNamePage() {
  const [name, setName] = useState("");
  const ipname = (event : any) => {
    setName(event.target.value);
  }

  const [result, setResult] = useState("Please insert your name")
  const [isgreet, setIsGreet] = useState(false);
  const greetonclick = () => {
    if(name === ""){
      setResult("Please insert your name");
      setIsGreet(false);
    } else{
      setResult(`Hello ${name}`);
      setIsGreet(true);
    }
  }

  return (
    <div className="container text-center">
      <h3>Hello My Name</h3>
      <input
        className="form-control d-inline m-1"
        placeholder="Insert your name here!"
        style={{ width: "300px" }}
        onChange={ipname}
        value={name}
      />
      <button className="btn btn-primary" onClick={greetonclick}>Greet Me</button>
      {/* Result Text */}
      <p className={isgreet ? "" : "text-danger"}>{result}</p>
    </div>
  );
}
