import { useState } from "react"
import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackData from "./Data/Feedbackdata"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from "./components/FeedbackForm"

function App() {
  const [feedback, setFeedback] = useState(FeedbackData)

  const deleteFeedback = (id) => {
    if(window.confirm('are you sure you wannt to delete')){
      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }
  return (
    <>
    <Header />
  <div className="container">
    <FeedbackForm />

    <FeedbackStats  feedback={feedback}/>
    <FeedbackList feedback={feedback}
    handleDelete={deleteFeedback} />
    
  </div>
</>
)}   

export default App