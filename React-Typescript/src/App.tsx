import Box from "./components/Box";

const App = () => {
  return (
    <div>
      <Box heading={"Hello"} count={24}
      func1={()=>{
        alert("LOL")
        
      }}
      
      />
    </div>
  );
};

export default App;
