
import {Provider} from "react-redux";
import './App.css';
import {Main} from "./Main";

import store, {AppStateType} from "./redux/reduxStore";


const AppAllTree: React.FC = () => {
    return <Provider store={store}>
        <Main />
    </Provider>


}

export default AppAllTree