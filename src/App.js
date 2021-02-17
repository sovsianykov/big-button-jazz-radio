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
    <div className="App">
       <button onClick={f}>play</button>
       <button onClick={stop}>stop</button>
    </div>
  );
}

export default App;
