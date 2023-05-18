/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */
import { useState } from "react";

function Image({ src, onRemove }) {
	return (
		<div className="image">
			<img src={src} />
			<button onClick={onRemove} className="remove">X</button>
		</div>
	);
}

export function ImageGallery({ links }) {
	const [list, setList] = useState(links)

	const handleOnRemove = id => {
		const newList = list.filter(item => item.id !== id)

		setList(newList)
	}

	return (
		<div>
			{
				list.map(link => {
					return (
						<Image
							key={link.id}
							src={link.thumbnailUrl}
							onRemove={() => handleOnRemove(link.id)}
						/>
					)
				})
			}
		</div>
	);
}
