import React from 'react';
import Card from './shared/Card';
import { useState } from 'react';
import Button from './Button';
import RatingSelect from './RatingSelect';
const Feedbackfrom = ({addFeedback,uid,setuid,reverse}) => {
    const [text, setText] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true)
    const [rating, setRating] = useState(10)
    const [message, setMessage] = useState('')
    const handleTextChange=(e)=>{
        setText(e.target.value);
        if(text===''){
            setBtnDisabled(true);
            setMessage(null)
        }else if(text !=='' && text.trim().length<10){
            setBtnDisabled(true);
            setMessage(`Need more ${10 - text.trim().length}`);
        }else{
            setBtnDisabled(false);
            setMessage(null)
        }
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        let id = uid;
        if(text.trim().length>=10){
            const newFeedback={
                id:++id,
                text:text,
                rating:rating
            }
           
            addFeedback(newFeedback);
        }
    }
    return (
       <Card reverse={reverse}>
           <form onSubmit={handleSubmit}>
               <h2>How would you rate your survice with us?</h2>
               <RatingSelect select={(val)=>setRating(val)}/>
               <div className="input-group">
                   <input onChange={(e)=>{handleTextChange(e)}} type="text" placeholder='Write your review'/>
                   <Button isDisabled={btnDisabled} type='submit'>
                       Send
                   </Button>
               </div>
               {message && <div className='message'>{message}</div>}
           </form>
       </Card>
    );
};

export default Feedbackfrom;