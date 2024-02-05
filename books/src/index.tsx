import App from './App'
import {createRoot} from 'react-dom/client';
import './index.css'
import Provider from "./context/Books";

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
    <Provider>
        <App/>
    </Provider>
);