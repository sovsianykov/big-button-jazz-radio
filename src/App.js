import './App.css';



function App() {
    const audio = new Audio('https://playerservices.streamtheworld.com/api/livestream-redirect/WRTI_JAZZ.mp3')

  async  function   f()   {

      await  audio.play()

    }
    const stop = () => {
        audio.pause()
    }





  return (
    <div className="App ">
       <button className='btn btn-info waves-effect'  onClick={f}><h1>PLAY</h1></button>
       <button className='btn btn-outline-primary waves-effect'   onClick ={stop}><h1>STOP</h1></button>
    </div>
  );
}

export default App;
