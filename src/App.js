
import TaskList from '../src/components/TaskList'
import TaskForm from '../src/components/TaskForm';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css';

function App() {


    return ( 
    <div className="bg-zinc-900 h-screen text-white">
        <div className="flex items-center justify-center h-full">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<TaskList></TaskList>}></Route>
                    <Route path='/create-task' element={<TaskForm></TaskForm>}></Route>
                    <Route path='/edit-task/:id' element = {<TaskForm></TaskForm>}></Route>
                </Routes>
            </BrowserRouter>
        </div>

        
        
    </div>
    );
}

export default App;