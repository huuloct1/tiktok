import { useEffect, useState } from 'react'
import Video from '~/components/Video'
import * as videoService from '~/services/video'

const Home = () => {
  const [videos, setVideos] = useState([])

  //Api call video list
  useEffect(() => {
    const fetchApi = async () => {
      const result = await videoService.getVideos()
      setVideos(result)
    }
    fetchApi()
  }, [])

  console.log(videos)

  return (
    <div className='wrapper'>
      {videos.map((item) => (
        <Video key={item.id} data={item} />
      ))}
    </div>
  )
}

export default Home
