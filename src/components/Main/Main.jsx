import VideoCard from "../VideoCard/VideoCard"

import videoCardData from "../../data/videoCardData"

import './Main.css'

// props要传入图片

const Main = () => {

  const videoCards = videoCardData.map((item) => {
    return ( // return 一个jsx元素
      <VideoCard
          key={item.id}
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
          {/*{videoCards}*/}
          {/*选取前四个作为top*/}
          {videoCards[0]}
          {videoCards[1]}
          {videoCards[2]}
          {videoCards[3]}
        </div>

        <div className={"main-bottom"}>
          {/*选取后四个作为bottom*/}
          {videoCards[4]}
          {videoCards[5]}
          {videoCards[6]}
          {videoCards[7]}
        </div>
      </main>
  )
}

export default Main
