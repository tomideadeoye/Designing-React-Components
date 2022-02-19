import SpeakersToolbar from "./SpeakersToolbar";
import SpeakersList from "./SpeakersList";
import { useContext, useState } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { SpeakerFilterProvider } from "../context/speakerFilterContext";

function Speakers() {
	const { theme, setTheme } = useContext(ThemeContext);
	const [showSessions, setShowSessions] = useState(true);

	return (
		<SpeakerFilterProvider>
			<SpeakersToolbar />
			<SpeakersList />
		</SpeakerFilterProvider>
	);
}

export default Speakers;
