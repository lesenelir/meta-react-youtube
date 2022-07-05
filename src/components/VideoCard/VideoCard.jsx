import './VideoCard.css'

// React 引入图片要以这种形式引入
// import picture1 from '../../images/list-item/1.png'
// import profile_picture1 from '../../images/profile/1.jpg'


// const VideoCard = () => {
//   return (
//       <div className={"video-box"}>
//         <img src={picture1} alt="" className={"video-main-img"}/>
//         <div className={"video-down"}>
//           <img src={profile_picture1} alt="" className={"video-down-img"}/>
//           <div className={"video-down-right"}>
//             <p className={"p-header"}>Build and deploy a profile website</p>
//             <p className={"p-footer"}>freeCodeCamp.org</p>
//             <p className={"p-footer"}>71万次观看 · 2年前</p>
//           </div>
//         </div>
//       </div>
//   )
// }

// 可复用的组件
const VideoCard = (props) => {
  console.log(props)
  return (
      <div className={"video-box"}>
        <img src={props.videoImg} alt="" className={"video-main-img"}/>
        <div className={"video-down"}>
          <img src={props.profileImg} alt="" className={"video-down-img"}/>
          <div className={"video-down-right"}>
            <p className={"p-header"}>{props.title}</p>
            <p className={"p-footer"}>{props.author}</p>
            <p className={"p-footer"}>{props.time}</p>
          </div>
        </div>
      </div>
  )
}

export default VideoCard
