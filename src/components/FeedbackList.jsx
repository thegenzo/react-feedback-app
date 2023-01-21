import React, { useContext } from 'react'
import FeedbackItem from './FeedbackItem'
import { motion, AnimatePresence } from 'framer-motion';
import FeedbackContext from '../context/FeedbackContext';

const FeedbackList = () => {
	const { feedback } = useContext(FeedbackContext);

	if(!feedback || feedback.length === 0) {
		return <p>No feedback yet!</p>
	}
	// return (
	// 		<div className='feedback-list'>
	// 			{feedback.map((item, index) => (
	// 				<FeedbackItem key={index} item={item} handleDelete={handleDelete} />
	// 			))}
	// 		</div>
	// )
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item, index) => (
					<motion.div key={index} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
						<FeedbackItem key={index} item={item} />
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

export default FeedbackList