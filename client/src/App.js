import '../src/css/App.css';
import VendingMachine from "./components/VendingMachine";

// class App extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {apiResponse: ""};
//   }
  
//   callAPI(){
//     ("http:localhost:4000/")
//     .then(res => res.text())
//     .then(res => this.setState({apiResponse: res}))
//   }

//   componentWillMount(){
//     this.callAPI();
//   }
// }

function App() {
  return (
        <VendingMachine />
  );
}

export default App;
