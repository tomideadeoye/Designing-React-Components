import { useState } from "react";

function useSpeakerFilter(startingShowSessions, startingEventYear) {
	const [showSessions, setShowSessions] = useState(startingShowSessions);
	const [eventYear, setEventYear] = useState(startingEventYear);
	const [searchQuery, setSearchQuery] = useState("");

	const EVENT_YEARS = ["2018", "2019", "2020"];

	// const EVENT_YEARS = [
	// 	"Visualization",
	// 	"SQL",
	// 	"JavaScript",
	// 	"Beautiful Soup",
	// 	"Node",
	// 	"Python",
	// 	"React",
	// 	"All",
	// ];

	return {
		showSessions,
		setShowSessions,
		eventYear,
		setEventYear,
		searchQuery,
		setSearchQuery,
		EVENT_YEARS,
	};
}

export default useSpeakerFilter;
