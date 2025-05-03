import { useParams } from 'react-router';
import './App.css';

function App() {
    let { id } = useParams();
    return <div>{id}</div>;
}

export default App;
