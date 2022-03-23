import './App.css';
import { useState } from 'react';
import Feedbacklist from './components/Feedbacklist';
import Header from './components/Header';
import FeedbackData from './data/Feedbackdata';
import Feedbackstat from './components/Feedbackstat';
import Feedbackfrom from './components/Feedbackfrom';
import Card from './components/shared/Card';
import Button from './components/Button';
function App() {
  const [feedback, setFeedback] = useState(FeedbackData)
  const [mode, setmode] = useState(false)
  const [uid, setUid] = useState(FeedbackData.length)
  const deleteFeedback = (id)=>{
      if(window.confirm("Are you sure to delete Feedback")){
           setFeedback(feedback.filter(item=>item.id!==id))
      }  
  }
  const addFeedback=(obj)=>{
       setFeedback([...feedback,obj]);
       setUid(uid+1);
       
  }
  return (
    <div>
      <Header text='FEEDBACK UI'/>
      <div className="container">
        <Card reverse={mode}>
         <a onClick={()=>{setmode(!mode)}}>
         <Button version={!mode?'btn-primary':'btn-secondary'}>
         {mode?'DAY':'NIGHT'}
         </Button>
         </a>
         
        </Card>
      </div>
      <div className="container">
        <Feedbackfrom addFeedback={addFeedback} uid={uid} reverse={mode}/>
        <Feedbackstat feedback={feedback}/>
        <Feedbacklist feedback={feedback} deleteFeedback={deleteFeedback} setmode={mode}/>
      </div>
    </div>
  );
}

export default App;
