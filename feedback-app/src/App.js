import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackData from "./Data/Feedbackdata"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('are you sure you wannt to delete')){
      setFeedback()
    }
  }
  return (
    <>
    <Header />
  <div className="container">
    <FeedbackList feedback={feedback}
    handleDelete={deleteFeedback} />
    
  </div>
</>
)}   

export default App