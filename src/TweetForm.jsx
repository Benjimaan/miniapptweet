export function TweetForm({onSubmit}) {

    const handleSubmit = (e) => {
        e.preventDefault()
        const name = e.target.value
        const content = e.target.content.value
    
        const newTweet = {
          name,
          content,
          like: 0
        }
    
        onSubmit(newTweet)
      }


    return(
        <form onSubmit={handleSubmit} className="tweet-form">
        <h4>New tweet</h4>
        <input placeholder="name" type="text" name="name" />
        <input placeholder="content" type="content" name="content" />
        <input type="submit" />
      </form>
    )
}