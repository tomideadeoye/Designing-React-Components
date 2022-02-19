import React, { useState, useContext } from "react";
import styled from "styled-components";
import { SpeakerContext, SpeakerProvider } from "../context/SpeakerContext";
import { SpeakerFilterContext } from "../context/speakerFilterContext";

import SpeakerDelete from "./SpeakerDelete";

function Session({ title, room }) {
	return (
		<span className="session w-100">
			{title} <strong>Tools & Tech: {room.name}</strong>
		</span>
	);
}

function Sessions() {
	const { eventYear } = useContext(SpeakerFilterContext);
	const { speaker } = useContext(SpeakerContext);
	const sessions = speaker.sessions;
	return (
		<div className="sessionBox card h-250">
			{sessions
				.filter(function (session) {
					return session.eventYear === eventYear;
				})
				.map(function (session) {
					return (
						<div className="session w-100" key={session.id}>
							<Session {...session} />
						</div>
					);
				})}
		</div>
	);
}

function ImageWithFallback({ src, ...props }) {
	const [error, setError] = useState(false);
	const [imgSrc, setImgSrc] = useState(src);

	function onError() {
		if (!error) {
			setImgSrc("/images/speaker-99999.jpg");
			setError(true);
		}
	}
	return <ImageContainer src={imgSrc} {...props} onError={onError} />;
}

function SpeakerImage() {
	const {
		speaker: { id, first, last },
	} = useContext(SpeakerContext);
	return (
		<div className="speaker-img d-flex flex-row justify-content-center align-items-center h-300">
			<ImageWithFallback
				className="contain-fit rounded-circle border border-info border-top-0"
				style={{ height: 300 }}
				src={`/images/speaker-${id}.jpg`}
				width="300"
				alt={`${first} ${last}`}
			/>
		</div>
	);
}

function SpeakerFavorite() {
	const { speaker, updateRecord } = useContext(SpeakerContext);
	const [inTransition, setInTransition] = useState(false);
	function doneCallback() {
		setInTransition(false);
		console.log(
			`In SpeakerFavorite:doneCallback    ${new Date().getMilliseconds()}`
		);
	}

	return (
		<div className="action padB1">
			<span
				onClick={function () {
					setInTransition(true);
					updateRecord(
						{
							...speaker,
							favorite: !speaker.favorite,
						},
						doneCallback
					);
				}}
			>
				<i
					className={
						speaker.favorite === true
							? "fa fa-star orange"
							: "fa fa-star-o orange"
					}
				/>{" "}
				Favorite{" "}
				{inTransition ? (
					<span className="fas fa-circle-notch fa-spin"></span>
				) : null}
			</span>
		</div>
	);
}

function SpeakerDemographics() {
	const { speaker } = useContext(SpeakerContext);
	const { first, last, bio, company, twitterHandle, favorite } = speaker;
	return (
		<div className="speaker-info">
			<div className="d-flex justify-content-between mb-3">
				<h3 className="text-truncate w-200">
					{first} {last}
				</h3>
			</div>
			<SpeakerFavorite />
			<div>
				<p className="card-description">{bio}</p>
				<div className="social d-flex flex-row mt-4">
					<div className="company">
						<h5>Language</h5>
						<h6>{company}</h6>
					</div>
					<div className="company">
						<h5>Link</h5>

						<h6>
							<a href="https://github.com/tomideadeoye?tab=repositories">
								{twitterHandle}
							</a>
						</h6>
					</div>
				</div>
			</div>
		</div>
	);
}

function Speaker({ speaker, updateRecord, insertRecord, deleteRecord }) {
	const { showSessions } = useContext(SpeakerFilterContext);
	console.log(`speaker: ${speaker.id} ${speaker.first} ${speaker.last}`);
	return (
		<SpeakerProvider
			speaker={speaker}
			updateRecord={updateRecord}
			insertRecord={insertRecord}
			deleteRecord={deleteRecord}
		>
			<div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-sm-12 col-xs-12">
				<StyledCard className="card card-height p-4 mt-4">
					<SpeakerImage />
					<SpeakerDemographics />
				</StyledCard>
				{showSessions === true ? <Sessions /> : null}
				{/* <SpeakerDelete /> */}
			</div>
		</SpeakerProvider>
	);
}

export default Speaker;

const ImageContainer = styled.img`
	background-color: #fff;
`;

const StyledCard = styled.div`
	flex: 1 1 auto;
	margin: 10px;
	padding: 5px;
	transition: 0.5s;
	color: white;
	background-size: 200% auto;

	border-radius: 10px;

	background-image: linear-gradient(
		to right,
		#4169e1 0%,
		#4b0082 51%,
		#000000 100%
	);
	&:hover {
		background-position: top right;
		box-shadow: 0 0 5px #eee;
	}
`;
