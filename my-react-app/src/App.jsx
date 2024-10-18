import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css';
import VideoComponent from './component/VideoComponent';
import DisplayComponent from './component/ReceiveContext';
import  GetValues  from './component/GetValues';
import NewClass from './component/ClassComponent';
import {SampleFunction} from './component/ClassComponent';
import MyVideo from './component/VideoComponent';
import BasicUi from './component/BasicUiComponent';

function App() {

  return (
    <>
    {/* <MyVideo></MyVideo> */}
    <GetValues></GetValues>
    <BasicUi></BasicUi>

    
    </>
  )
}

export default App
