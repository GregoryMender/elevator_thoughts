function which_elevator_is_down(how_many_elevators){
	const MINIMUM_ELEVATORS_BROKEN = 1;

	let current_elevators_broken = Math.floor(Math.random() * how_many_elevators) + MINIMUM_ELEVATORS_BROKEN;
	let elevators_broken = {1:false,2:false,3:false,4:false};

	while (current_elevators_broken--){
		let elevator_broken = Math.floor(Math.random() * how_many_elevators);
		elevators_broken[elevator_broken] = true;
	}

	if (elevators_broken.length === 4){
		throw new Error("You're working from home today!")
	}
		
	return elevators_broken;
}