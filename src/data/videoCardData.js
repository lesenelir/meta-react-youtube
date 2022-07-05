/**
 * 图片的引入需要做特殊的处理，所以props要传递图片的来源， 即data数组直接保存"实例"
 */
import videoImg_1 from '../images/list-item/1.png'
import profileImg_1 from '../images/profile/1.jpg'

import videoImg_2 from '../images/list-item/2.png'
import profileImg_2 from '../images/profile/2.jpg'

import videoImg_3 from '../images/list-item/3.png'
import profileImg_3 from '../images/profile/3.jpg'

import videoImg_4 from '../images/list-item/4.png'
import profileImg_4 from '../images/profile/4.jpg'

import videoImg_5 from '../images/list-item/5.png'
import profileImg_5 from '../images/profile/7.jpg'

import videoImg_6 from '../images/list-item/6.png'
import profileImg_6 from '../images/profile/8.jpg'

import videoImg_7 from '../images/list-item/7.png'
import profileImg_7 from '../images/profile/7.jpg'

import videoImg_8 from '../images/list-item/8.png'
import profileImg_8 from '../images/profile/8.jpg'


const arr = [
  {
    id: 1,
    videoImg: videoImg_1,
    profileImg: profileImg_1,
    title: "Build and deploy a profile",
    author: "freeCodeCamp.org",
    time: "71万次观看 · 2年前",
  },
  {
    id: 2,
    videoImg: videoImg_2,
    profileImg: profileImg_2,
    title: "西部世界第四季第2级解析!",
    author: "大聪看电影",
    time: "1494次观看 · 25分钟前",
  },
  {
    id: 3,
    videoImg: videoImg_3,
    profileImg: profileImg_3,
    title: "MC HotDog 热狗【阿姨 Sugar Mommy】",
    author: "滚石唱片 ROCK RECORDS",
    time: "229万次观看 · 2月前",
  },
  {
    id: 4,
    videoImg: videoImg_4,
    profileImg: profileImg_4,
    title: "神奈川钢琴噪音事件|X调查",
    author: "X调查",
    time: "3340次观看 · 12分钟前",
  },
  {
    id: 5,
    videoImg: videoImg_5,
    profileImg: profileImg_5,
    title: "Learn PostgreSQL Tutorial - Full Course for Beginners",
    author: "freeCodeCamp.org",
    time: "147万次观看 · 3年前",
  },
  {
    id: 6,
    videoImg: videoImg_6,
    profileImg: profileImg_6,
    title: "Full React Course 2020",
    author: "freeCodeCamp.org",
    time: "204万次观看 · 1年前",
  },
  {
    id: 7,
    videoImg: videoImg_7,
    profileImg: profileImg_7,
    title: "System Design: Why is Kafka fast?",
    author: "freeCodeCamp.org",
    time: "3.8万次观看 · 5天前",
  },
  {
    id: 8,
    videoImg: videoImg_8,
    profileImg: profileImg_8,
    title: "周杰伦2001《范特西》专辑",
    author: "milly cool",
    time: "7.2万次观看 · 8个月前",
  }
]

export default arr
