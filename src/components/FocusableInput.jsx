/**
 * The TextInput component renders an input element in the DOM
 * and accepts a ref that is forwarded to that input element.
 * Finish the FocusableInput component:
 * - The component should accept a focused prop.
 * - When the focused prop is changed from false to true, and the input is not focused, it should receive the focus.
 * - If on mounting the focused prop is true, the input should receive the focus.
 */

import React, { useEffect, useRef } from "react";

const TextInput = React.forwardRef((props, ref) => {
	return <input ref={ref} {...props}/>
});

// Implement:
// When the focused prop is changed from false to true,
// and the input is not focused, it should receive focus.
// If focused prop is true, the input should receive the focus.
export function FocusableInput({ focusable = false }) {
	const inputRef = useRef()

	useEffect(() => {
		if(focusable && inputRef) {
			inputRef?.current?.focus()
		}
	}, [focusable, inputRef])

	return (
		<TextInput placeholder="Text Input" ref={inputRef}/>
	)
}
