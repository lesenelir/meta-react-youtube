import './Main.css'
import VideoCard from "../VideoCard/VideoCard"

import videoImg from '../../images/list-item/1.png'
import profileImg from '../../images/profile/1.jpg'

const Main = () => {
  return (
      <main>
        <div className={"main-top"}>
          <div className={"deal-margin"}>
            <VideoCard
                videoImg={videoImg}
                profileImg={profileImg}
                title={"Build and deploy a profile"}
                author={"freeCodeCamp.org"}
                time={"71万次观看 · 2年前"}
            />
          </div>
        {/*  <div className={"deal-margin"}>*/}
        {/*    <VideoCard/>*/}
        {/*  </div>*/}
        {/*  <div className={"deal-margin"}>*/}
        {/*    <VideoCard/>*/}
        {/*  </div>*/}
        {/*  <div className={"deal-margin"}>*/}
        {/*    <VideoCard/>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {/*<div className={"main-bottom"}>*/}
        {/*  <div className={"deal-margin"}>*/}
        {/*    <VideoCard/>*/}
        {/*  </div>*/}
        {/*  <div className={"deal-margin"}>*/}
        {/*    <VideoCard/>*/}
        {/*  </div>*/}
        {/*  <div className={"deal-margin"}>*/}
        {/*    <VideoCard/>*/}
        {/*  </div>*/}
        {/*  <div className={"deal-margin"}>*/}
        {/*    <VideoCard/>*/}
        {/*  </div>*/}
        </div>
      </main>
  )
}

export default Main
