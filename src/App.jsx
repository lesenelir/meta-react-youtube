import './App.css'

import VideoCard from "./components/VideoCard/VideoCard"

function App() {
  return (
    <div className="App">
      <header>12</header>
      <div className={"bottom"}>
        <aside>
          12
        </aside>
        <main>
          <div className={"deal-margin"}>
            <VideoCard/>
          </div>
          <div className={"deal-margin"}>
            <VideoCard/>
          </div>
          <div className={"deal-margin"}>
            <VideoCard/>
          </div>
          <div className={"deal-margin"}>
            <VideoCard/>
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
