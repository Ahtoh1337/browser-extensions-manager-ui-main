import { createRoot } from "react-dom/client";
import App from "./components/App";
import { Provider } from 'react-redux';
import { store } from './data/store';

const root = createRoot(document.getElementById("root")!);

root.render(<Provider store={store}>
    <App />
</Provider>)