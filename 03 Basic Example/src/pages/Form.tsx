import { useState } from "react";

export default function Form() {
	const [items, setItems] = useState<string[]>([]);
	const [inputValue, setInputValue] = useState("");

	return (
		<div className="flex flex-col gap-2 border shadow-lg p-4 w-80">
			<h1 className="text-2xl font-bold">I am Form</h1>
			<form
				onSubmit={(e) => {
					e.preventDefault();
					setItems([...items, inputValue]);
					setInputValue("");
				}}
			>
				<label>
					<input
						type="text"
						name="item"
						value={inputValue}
						onChange={(e) => setInputValue(e.target.value)}
						placeholder="Enter item"
						className="border-2 border-grayscale-700 bg-grayscale-700 px-2 py-1 text-orange-600 shadow-lg outline-none focus:border-primary-500"
					/>
				</label>
				<button className="ml-2" type="submit">
					Add
				</button>
			</form>
			<ul data-testId="items-list">
				{items.map((item, index) => (
					<li key={index} data-testId="item">
						{item}
					</li>
				))}
			</ul>
		</div>
	);
}
