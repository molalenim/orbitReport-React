import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  return (
    <div>
      {/* First button */}
      {displaySats.map((sat, id) => (
        <button key={id} onClick={() => filterByType(sat)}>
          {sat} Orbit
        </button>
      ))}

      {/* Second button */}
      <button onClick={() => setSat(satData)}>All Satellites</button>
    </div>
  );
};

export default Buttons;