import React from "react";
import Registration from "./components/forms/Registration";

function App() {
  return (
    <>
      <div className="flex justify-center ">
        <h1 className="text-3xl font-bold underline">Track My Stuffs</h1>
      </div>
      <Registration />
    </>
  );
}

export default App;

//   useEffect(() => {
//     const url = "http://localhost:8080/register";
//     const data = {
//       email: "asdff@email.com",
//       password: "asdad",
//       role: "user",
//     };

//     // Make a POST request using Axios
//     axios
//       .post(url, data)
//       .then((response) => {
//         // Handle the response data here
//         console.log("yay")
//         console.log(response.data);
//       })
//       .catch((error) => {
//         // Handle any errors here

//         console.error("Error:", error);
//       });
//   }, []);
