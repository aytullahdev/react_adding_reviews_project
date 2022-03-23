import React from 'react';
import FeedbackItem from './FeedbackItem';
import  {motion,AnimatePresence} from 'framer-motion'

const Feedbacklist = ({feedback,deleteFeedback,setmode}) => {
    if(!feedback || feedback.length===0){
        return(
            <p>No FeedBack</p>
        )
    }
   
    return (
        <div className='feedback-list'>
        <AnimatePresence>
        {feedback.map((item)=>(
           <motion.div key={item.id} initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
            <FeedbackItem key={item.id} item={item} deleteFeedback={deleteFeedback}  reverse={setmode}/>
           </motion.div>
        ))}
        </AnimatePresence>
           
        </div>
    );
};

export default Feedbacklist;