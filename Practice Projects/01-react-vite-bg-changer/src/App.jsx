import Button from "./components/Button";

function App() {

  const colors = ['red','green', 'blue', 'olive', 'gray', 'yellow', 'pink', 'purple','lavendor', 'while', 'black']

  const [Color, setColor] = useState('red');

  const handleChange = (color) => {
    if(color === 'no color'){
      setColor('white');
    }else{
      setColor(color);
    }
  }

  return (
    // <div className={`bg-${Color}-400`}>
    //   <h1>HI there</h1>
    //   <div>
    //     {
    //       colors.map(color => {
    //         <Button color={color} handleCange={handleChange}/>
    //       })
    //     }
    //   </div>
    // </div>
    <h1>hgfgdgf</h1>
  )
}

export default App
