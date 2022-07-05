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
          <div className={"main-top"}>
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
          </div>
          <div className={"main-bottom"}>
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
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
