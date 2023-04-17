import './App.css';
/* BrowserRouter 를 이용해 Route, Routes 을 사용 */
import {BrowserRouter, Route, Routes} from "react-router-dom";

/* SPA 페이지 이동에 필요 */
import RouteTest from "./components/RouteTest";

/* 페이지 Route  */
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";
import New from "./pages/New";

function App() {
    return (<BrowserRouter>
        <div className="App">
            <h1>App.js</h1>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/diary/:id'} element={<Diary/>}/>
                <Route path={'/edit'} element={<Edit/>}/>
                <Route path={'/new'} element={<New/>}/>
            </Routes>
        </div>
        <RouteTest/>
    </BrowserRouter>);
}

export default App;
