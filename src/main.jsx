// Importaciones de react
import React from 'react';
import ReactDOM from 'react-dom/client';
// import { createBrowserRouter, RouterProvider, Route,} from "react-router-dom";
// Importacion de Router
import { BrowserRouter } from 'react-router-dom';
// Importaciones de CSS
import './index.css';
// Importacion de componentes
import { MainApp } from './09-useContext/MainApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <React.StrictMode>
      < MainApp />
    </React.StrictMode>
  </BrowserRouter>
)


// Importaciones de componentes
// import { HookApp } from './HookApp';
// import { CounterApp } from './01-useState/CounterApp';
// import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
// import { SimpleForm } from './02-useEffect/SimpleForm';
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
// import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
// import { FocusScreen } from './04-useRef/FocusScreen';
// import { Layout } from './05-useLayoutEffect/Layout';
// import { Memorize } from './06-memos/Memorize';
// import { MemoHook } from './06-memos/MemoHook';
// import { CallbackHook } from './06-memos/CallbackHook';
// import {Padre } from './07-tarea-memo/Padre';
// import './08-useReducer/intro-reducer';
// import { TodoApp } from './08-useReducer/TodoApp';

{/* < TodoApp/> */}
{/* < HookApp /> */}
{/* <CounterApp/> */}
{/* <CounterWithCustomHook /> */}
{/* <SimpleForm /> */}
{/* <FormWithCustomHook/> */}
{/* < MultipleCustomHooks /> */}
{/* < FocusScreen /> */}
{/* <Layout /> */}
{/* < Memorize/> */}
{/* < MemoHook/> */}
{/* < CallbackHook/> */}
{/* //   < Padre /> */}