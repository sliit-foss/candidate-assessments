import { useState } from 'react'
import Button from './components/Button'
import './App.css'
import ComboBox from './components/ComboBox'

const options = ["option 1", "option 2", "option 3", "option 4"]
function App() {
  return (
    <div>
      <div className='border-2 border-slate-300 m-2'>
        <label for="btn" className='m-4'>Button</label>
        <Button id="btn" name="btn" Text="Upload"/>
      </div>
      <div className='flex flex-col border-2 border-slate-300 m-2'>
        <label for="combobox">ComboBox</label>
        <ComboBox id="combobox" Options={options} Text="Select One"/>
      </div>
    </div>
    
  )
}

export default App
