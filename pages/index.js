import React, { useState, useEffect } from 'react'
import styles from 'styles/styles.module.css'

const HomePage = () => {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await fetch('/api/youtube')
        const data = await response.json()
        setVideos(data)
      } catch (error) {
        console.error('Error fetching YouTube videos:', error)
      }
    }

    fetchVideos()
  }, [])

  return (
    <div className={styles.container}>
      <h1>今、YouTubeで人気の音楽を聴こう</h1>
      <ul className={styles.videoList}>
        {videos.map(video => (
          <li key={video.id} className={styles.videoItem}>
            <img src={video.thumbnail} alt={video.title} />
            <p>{video.title}</p>
            <a
              href={video.youtubeLink}
              target='_blank'
              rel='noopener noreferrer'
            >
              YouTubeで見る
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
