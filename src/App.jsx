import { useRef, useState } from "react"
import Tweet from "./Tweet"
import { TweetForm } from "./TweetForm"

const DEFAULT_TWEET = [
  {
    id: 0,
    name: "Ben",
    content: "Yesay !",
    like: 2500
  },
  {
    id: 1,
    name: "Aicha",
    content: "Je suis chic choc !",
    like: 3000
  },
  {
    id: 2,
    name: "Talyana",
    content: "Chérriiiiieeee ! Aller viens !",
    like: 200
  },
  {
    id: 3,
    name: "Zeke",
    content: "Papaaaaaa !!!",
    like: 175
  },
]

function App() {

  const [tweets, setTweets] = useState(DEFAULT_TWEET)

  const onDelete = (tweetId) => {
    setTweets(curr => curr.filter(tweet => tweet.id !== tweetId))
  }

  const handleSubmit = (tweet) => {
    const newTweet = {
      id: tweets[tweets.length - 1]?.id + 1 ?? 0,
      name: tweet.name,
      content: tweet.content,
      like: 0
    }

    addTweet(newTweet)
  }
  
  
  const addTweet = (tweet) => {
    setTweets([...tweets, tweet])
  }

  const onLike = (tweetId) => {
    setTweets(curr => {
      const copyTweet = [...curr]
      const likedTweet = copyTweet.find(tweet => tweet.id === tweetId)
      likedTweet.like += 1

      return copyTweet
    })
  }

  const tweetList = tweets.map(tweet => {
    return(
      <Tweet 
        key={tweet.id}
        id={tweet.id}
        name={tweet.name}
        content={tweet.content}
        like={tweet.like} 
        onDelete={(id) => onDelete(id)}
        onLike={(id) => onLike(id)}
      />
    ) 
  })

  return(
    <div>
      <TweetForm onSubmit={handleSubmit} />
      <div className="tweet-container">
        {tweetList}
      </div>
    </div>
  ) 
}

export default App