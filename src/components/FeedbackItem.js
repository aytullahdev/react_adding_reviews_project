import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'




import Card from './shared/Card';
const FeedbackItem = ({item,deleteFeedback,setmode,reverse}) => {
    
    
    return (
        <Card reverse={setmode}>
        <div className="num-display">{item.rating}</div>
        <button className='close'>
            <FontAwesomeIcon icon={faTimes} color={reverse?'white':''} onClick={()=>{deleteFeedback(item.id)}} />
        </button>
        <div className="text-dispaly">
            {item.text}
        </div>
        
            
        </Card>
    );
};

export default FeedbackItem;