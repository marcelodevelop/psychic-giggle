/**
 * Given a list of items implement a navigation through the keyboard, following these requirements:
 * - Navigate through the list with UP and RIGHT keys will focus the next item.
 * - Navigate through the list with DOWN and LEFT keys will focus the previous item.
 * - Only one item will be FOCUSED per time in the browser.
 *
 * Suggestion: you may to think in term of "indexes".
 * You may calculate the index and use it to select the item, then you will focus that item.
 *
 * NOTE: The keydown event will work once the <ul> receives the focus.
 */

import { useEffect, useRef, useState } from "react";

// Simulating a list of items to render.
// This can be passed through props as well. The constant is declared here for convenience
const itemsList = Array(10).fill(null).map((title, index) => ({ title: `Title ${index}`, id: index }))

export function ListItemsForNavigation(props) {
	const [
		selectedIndex,
		setSelectedIndex,
	] = useState(-1);
	const activeItemRef = useRef();

	useEffect(
		function () {
			if(activeItemRef) {
				activeItemRef?.current?.focus()
			}
		},
		[
			selectedIndex, activeItemRef
		]
	);

	function handleKeyDown(event) {
		if (event.keyCode === 38 || event.keyCode === 39) {
			if(selectedIndex > itemsList.length - 2) {
				setSelectedIndex(0)
			} else {
				setSelectedIndex(selectedIndex + 1)
			}
		} else if (event.keyCode === 37 || event.keyCode === 40) {
			if(selectedIndex <= -1) {
				setSelectedIndex(itemsList.length - 1)
			} else {
				setSelectedIndex(selectedIndex - 1)
			}
		}
	}

	return (
		<ul tabIndex={0} onKeyDown={handleKeyDown}>
			{itemsList.map((item, index) => {
				return (
					<li tabIndex={-1} ref={index === selectedIndex ? activeItemRef : null} id={item.id} key={item.id}>{item.title}</li>
				)
			})}
		</ul>
	);
} 
