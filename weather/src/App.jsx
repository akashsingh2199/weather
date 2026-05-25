import { useState, useEffect } from "react";

function App() {
  const [temp, settemp] = useState(10);
  const [name, setname] = useState("Katihar");
  const [time, settime] = useState(0);
  const [link, setlink] = useState(" ");
  
  const [location, setlocation] = useState("");

  useEffect(() => {
    async function getreport() {
      try {
        const Response = await fetch(
          `https://api.weatherapi.com/v1/current.json?key=f9bbd0c2930442989ac195531261405&q=${name}&aqi=yes`,
        );
        const data = await Response.json();
        console.log(data);
        settemp(data.current.temp_c);
        settime(data.location.localtime);
        setlink(data.current.condition.icon);
       
        setlocation(`${data.location.name},${data.location.country}`);
        console.log(data.current.condition.icon);
      } catch (error) {
        console.log("error", error);
      }
    }
    getreport();
  }, [name]);

  return (
  <div
    style={{
      background: "linear-gradient(to right, #1e3c72, #2a5298)",
      width: "100vw",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      position: "fixed",
      top: 0,
      left: 0,
      fontFamily: "Arial",
      color: "white",
    }}
  >
    <h1
      style={{
        fontSize: "50px",
        marginBottom: "30px",
        letterSpacing: "3px",
      }}
    >
      WEATHER APP
    </h1>

    <input
      type="text"
      placeholder="Enter city..."
      value={name}
      onChange={(e) => {
        setname(e.target.value);
      }}
      style={{
        padding: "12px 20px",
        borderRadius: "30px",
        border: "none",
        outline: "none",
        width: "250px",
        fontSize: "16px",
        marginBottom: "30px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
      }}
    />

    <div
      style={{
        display: "flex",
        gap: "20px",
        flexWrap: "wrap",
        justifyContent: "center",
        maxWidth: "1000px",
      }}
    >
      {/* City Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          width: "220px",
          height: "140px",
          borderRadius: "20px",
          textAlign: "center",
          padding: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2>CITY</h2>
        <h1>{name}</h1>
      </div>

      {/* Temp Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          width: "220px",
          height: "140px",
          borderRadius: "20px",
          textAlign: "center",
          padding: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2>TEMPERATURE</h2>
        <h1>{temp}°C</h1>
      </div>

      {/* Time Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          width: "220px",
          height: "140px",
          borderRadius: "20px",
          textAlign: "center",
          padding: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2>TIME</h2>
        <h3>{time}</h3>
      </div>

      {/* Location Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          width: "220px",
          height: "140px",
          borderRadius: "20px",
          textAlign: "center",
          padding: "15px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        }}
      >
        <h2>LOCATION</h2>
        <h3>{location}</h3>
      </div>

      {/* Weather Icon Card */}
      <div
        style={{
          background: "rgba(255,255,255,0.15)",
          backdropFilter: "blur(10px)",
          width: "220px",
          height: "140px",
          borderRadius: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "0 8px 20px rgba(0,0,0,0.3)",
        }}
      >
        <img
          src={link}
          alt="weather icon"
          style={{
            width: "80px",
            height: "80px",
          }}
        />
      </div>
    </div>
    <footer style={{position:"fixed",bottom:'0'}}>
      <p>Created by <a href="https://github.com/akashsingh2199" style={{color:'white'}}>Akash</a></p>
    </footer>
  </div>
)
}

export default App;
