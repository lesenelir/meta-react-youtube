import VideoCard from "../VideoCard/VideoCard"

import videoCardData from "../../data/videoCardData"

import './Main.css'


// props要传入图片

const Main = () => {

  console.log(videoCardData)
  const videoCards = videoCardData.map((item) => {
    return ( // return 一个jsx元素
      <VideoCard
          videoImg={item.videoImg}
          profileImg={item.profileImg}
          title={item.title}
          author={item.author}
          time={item.time}
      />
    )
  })

  return (
      <main>
        <div className={"main-top"}>
          {videoCards}



          {/*<div className={"deal-margin"}>*/}
          {/*  <VideoCard*/}
          {/*      videoImg={'../../images/list-item/1.png'}*/}
          {/*      // profileImg={profileImg}*/}
          {/*      title={"Build and deploy a profile"}*/}
          {/*      author={"freeCodeCamp.org"}*/}
          {/*      time={"71万次观看 · 2年前"}*/}
          {/*  />*/}
          {/*</div>*/}


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
