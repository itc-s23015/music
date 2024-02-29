import axios from 'axios'

const handler = async (req, res) => {
  const { data } = await axios.get(
    'https://www.googleapis.com/youtube/v3/videos',
    {
      params: {
        key: process.env.NEXT_PUBLIC_YOUTUBE_API_KEY,
        part: 'snippet',
        chart: 'mostPopular',
        videoCategoryId: '10', // Music category
        maxResults: 10 // Number of results
      }
    }
  )

  const videos = data.items.map(video => ({
    id: video.id,
    title: video.snippet.title,
    thumbnail: video.snippet.thumbnails.default.url,
    youtubeLink: `https://www.youtube.com/watch?v=${video.id}`
  }))

  res.status(200).json(videos)
}
export default handler
