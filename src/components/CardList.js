import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
	return (
		<div>
			{robots.map((robot) => {
				return (
					<Card
						key={Math.random()}
						id={robot.id}
						name={robot.name}
						email={robot.email}
					/>
				);
			})}
		</div>
	);
};

export default CardList;
