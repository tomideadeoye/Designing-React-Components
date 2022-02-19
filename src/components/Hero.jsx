import React from "react";
// import "./Hero.module.css";
import styled from "styled-components";

const StyledDiv = styled.div`
	// display: block;
	box-sizing: border-box;
`;

const StyledHeader = styled.header`
	display: block;
	box-sizing: border-box;
	position: relative;
	height: 800px;
	min-height: 500px;
	width: 100%;
	background-image: url("/public/images/values.jpg");
	background-position: center top;
	background-repeat: no-repeat;
	background-attachment: initial;
	background-origin: initial;
	background-clip: initial;
	background-color: rgb(22, 20, 21);
	text-align: center;
	overflow: hidden;
	background-size: cover !important;
	content: "";
	display: inline-block;
	vertical-align: middle;
	height: 100%;
`;

const StyledDiv_2 = styled.div`
	display: block;
	box-sizing: border-box;
	width: auto;
	max-width: none;
	margin: 0px -20px;
	content: " ";
	display: table;
	clear: both;
	@media only screen and (max-width: 767px) {
		width: 460px;
		margin: 0px auto;
		padding: 0px;
		width: auto;
		max-width: none;
		margin: 0px -30px;
	}
	@media only screen and (max-width: 460px) {
		width: auto;
	}
	@media screen and (min-width: 1200px) {
		max-width: 1180px;
	}
	@media only screen and (max-width: 900px) {
		padding-bottom: 12px;
	}
	@media only screen and (max-width: 767px) {
		padding-bottom: 12px;
		padding-top: 6px;
	}
	@media only screen and (max-width: 480px) {
		padding-top: 24px;
	}
	display: inline-block;
	vertical-align: middle;
	margin: 0px auto;
	width: 85%;
	padding-bottom: 30px;
	text-align: center;
`;

const StyledDiv_3 = styled.div`
	display: block;
	box-sizing: border-box;
	border: 10px;
	background-color: black;
	opacity: 0.9;
	z-index: -2;
	padding: 20px;
	border-radius: 20px;
	box-shadow: rgba(108, 106, 106, 0.1) 0px 2px 8px 4px;
	width: 100%;
	z-index: 1;
`;

const StyledH1 = styled.h1`
	display: block;
	box-sizing: border-box;
	text-align: center;
	justify-content: center;
	color: rgb(49, 49, 49);
	font-family: opensans-bold, sans-serif;
	font-weight: normal;
	font-size: 38px;
	line-height: 42px;
	margin-bottom: 12px;
	letter-spacing: -1px;
	@media only screen and (max-width: 1024px) {
		font: 80px / 1.1em opensans-bold, sans-serif;
		letter-spacing: -1px;
		margin: 0px auto 12px;
	}
	@media only screen and (max-width: 900px) {
		font: 78px / 1.1em opensans-bold, sans-serif;
		letter-spacing: -1px;
		font: 16px / 24px opensans-bold, sans-serif;
	}
	@media only screen and (max-width: 767px) {
		font: 68px / 1.1em opensans-bold, sans-serif;
		letter-spacing: 3px;
	}
	@media only screen and (max-width: 480px) {
		font: 40px / 1.1em opensans-bold, sans-serif;
		margin: 0px auto 24px;
	}
	font: 90px / 1.1em opensans-bold, sans-serif;
	color: rgb(255, 255, 255);
	letter-spacing: -2px;
	margin: 0px auto 18px;
	text-shadow: rgba(0, 0, 0, 0.8) 0px 1px 3px;
	z-index: 1;
`;

const StyledH3 = styled.h3`
	display: block;
	box-sizing: border-box;
	color: rgb(49, 49, 49);
	font-family: opensans-bold, sans-serif;
	font-weight: normal;
	font-size: 22px;
	line-height: 30px;
	margin-bottom: 12px;
	@media only screen and (max-width: 900px) {
		font: 17px / 1.9em librebaskerville-regular, serif;
		width: 80%;
	}
	@media only screen and (max-width: 767px) {
		font: 16px / 1.9em librebaskerville-regular, serif;
		width: 85%;
		text-align: center;
	}
	@media only screen and (max-width: 480px) {
		font: 14px / 1.9em librebaskerville-regular, sans-serif;
		width: 90%;
	}
	font: 18px / 1.9em librebaskerville-regular, serif;
	color: rgb(168, 168, 168);
	margin: 0px auto;
	width: 70%;
	z-index: 1;
	text-shadow: rgba(0, 0, 0, 0.5) 0px 1px 2px;
`;

const StyledSpan = styled.span`
	display: block;
	box-sizing: border-box;
	color: rgb(255, 255, 255);
`;

const StyledHr = styled.hr`
	display: block;
	box-sizing: border-box;
	@media only screen and (max-width: 900px) {
		width: 65%;
		margin: 12px auto;
	}
	@media only screen and (max-width: 767px) {
		width: 80%;
		margin: 18px auto;
	}
	width: 60%;
	margin: 18px auto 24px;
	border-color: rgb(47, 45, 46);
`;

const StyledUl_2 = styled.ul`
	display: block;
	box-sizing: border-box;
	margin-bottom: 24px;
	margin-top: 12px;
	list-style: outside none;
	list-style: outside none;
	@media only screen and (max-width: 767px) {
		margin: 18px 0px 24px;
		font-size: 24px;
		line-height: 36px;
	}
	@media only screen and (max-width: 480px) {
		font-size: 20px;
	}
	margin: 24px 0px;
	padding: 0px;
	font-size: 30px;
	text-shadow: rgba(0, 0, 0, 0.8) 0px 1px 2px;
	margin: 0px;
	padding: 0px;
	border: none;
	outline: none;
`;

const StyledLi_5 = styled.li`
	display: block;
	box-sizing: border-box;
	line-height: 18px;
	margin-bottom: 12px;
	@media only screen and (max-width: 767px) {
		display: block;
		height: auto;
		margin: 0px auto;
		padding: 0px 4%;
		text-align: left;
		border-bottom: 1px dotted rgb(45, 46, 52);
		margin: 0px 10px;
	}
	@media only screen and (max-width: 480px) {
		margin: 0px 6px;
	}
	display: inline-block;
	margin: 0px 15px;
	padding: 0px;
	margin: 0px;
	padding: 0px;
	border: none;
	outline: none;
	position: relative;
	list-style: none;
	height: 48px;
	display: inline-block;
`;

const StyledA_5 = styled.a`
	display: block;
	box-sizing: border-box;
	text-decoration: none;
	outline: 0px;
	color: rgb(17, 171, 176);
	transition: color 0.3s ease-in-out 0s;
	line-height: inherit;
	@media only screen and (max-width: 767px) {
		width: 48px;
		height: 48px;
		text-align: left;
		background-color: rgb(204, 82, 0);
		border: none;
		float: right;
		font: 0px / 0 a;
		text-shadow: none;
		color: transparent;
		position: relative;
		top: 0px;
		right: 30px;
		position: absolute;
		border: 2px solid rgb(255, 255, 255);
		top: 35%;
		left: 25%;
		right: 25%;
		content: "";
		top: 60%;
		display: block;
		display: block;
		padding: 0px;
		margin: 12px 0px;
		line-height: 16px;
		border: none;
		width: 54px;
		height: 54px;
		font-size: 18px;
		line-height: 54px;
	}
	color: rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	color: rgb(17, 171, 176);
	position: absolute;
	bottom: 30px;
	left: 50%;
	margin-left: -29px;
	display: block;
	height: 42px;
	width: 42px;
	font-size: 42px;
	line-height: 42px;
	color: rgb(255, 255, 255);
	border-radius: 100%;
	transition: all 0.3s ease-in-out 0s;
	color: rgb(17, 171, 176);
	margin: 0px;
	padding: 0px;
	border: none;
	outline: none;
	display: inline-block;
	padding: 8px 13px;
	line-height: 32px;
	text-decoration: none;
	text-align: left;
	color: rgb(255, 255, 255);
	background-color: transparent !important;
	color: rgb(240, 96, 0);
	color: rgb(255, 255, 255);
	color: rgb(17, 171, 176);
`;

const StyledI = styled.i`
	display: block;
	box-sizing: border-box;
	margin-right: 15px;
	font-size: 20px;
	opacity: 0;
	transition: opacity 1s ease 0s;
`;

const StyledLi_6 = styled.li`
	display: block;
	box-sizing: border-box;
	line-height: 18px;
	margin-bottom: 12px;
	@media only screen and (max-width: 767px) {
		display: block;
		height: auto;
		margin: 0px auto;
		padding: 0px 4%;
		text-align: left;
		border-bottom: 1px dotted rgb(45, 46, 52);
		margin: 0px 10px;
	}
	@media only screen and (max-width: 480px) {
		margin: 0px 6px;
	}
	display: inline-block;
	margin: 0px 15px;
	padding: 0px;
	margin: 0px;
	padding: 0px;
	border: none;
	outline: none;
	position: relative;
	list-style: none;
	height: 48px;
	display: inline-block;
`;

const StyledA_6 = styled.a`
	display: block;
	box-sizing: border-box;
	text-decoration: none;
	outline: 0px;
	color: rgb(17, 171, 176);
	transition: color 0.3s ease-in-out 0s;
	line-height: inherit;
	@media only screen and (max-width: 767px) {
		width: 48px;
		height: 48px;
		text-align: left;
		background-color: rgb(204, 82, 0);
		border: none;
		float: right;
		font: 0px / 0 a;
		text-shadow: none;
		color: transparent;
		position: relative;
		top: 0px;
		right: 30px;
		position: absolute;
		border: 2px solid rgb(255, 255, 255);
		top: 35%;
		left: 25%;
		right: 25%;
		content: "";
		top: 60%;
		display: block;
		display: block;
		padding: 0px;
		margin: 12px 0px;
		line-height: 16px;
		border: none;
		width: 54px;
		height: 54px;
		font-size: 18px;
		line-height: 54px;
	}
	color: rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	color: rgb(17, 171, 176);
	position: absolute;
	bottom: 30px;
	left: 50%;
	margin-left: -29px;
	display: block;
	height: 42px;
	width: 42px;
	font-size: 42px;
	line-height: 42px;
	color: rgb(255, 255, 255);
	border-radius: 100%;
	transition: all 0.3s ease-in-out 0s;
	color: rgb(17, 171, 176);
	margin: 0px;
	padding: 0px;
	border: none;
	outline: none;
	display: inline-block;
	padding: 8px 13px;
	line-height: 32px;
	text-decoration: none;
	text-align: left;
	color: rgb(255, 255, 255);
	background-color: transparent !important;
	color: rgb(240, 96, 0);
	color: rgb(255, 255, 255);
	color: rgb(17, 171, 176);
`;

const StyledI_2 = styled.i`
	display: block;
	box-sizing: border-box;
	margin-right: 15px;
	font-size: 20px;
	opacity: 0;
	transition: opacity 1s ease 0s;
`;

const StyledLi_7 = styled.li`
	display: block;
	box-sizing: border-box;
	line-height: 18px;
	margin-bottom: 12px;
	@media only screen and (max-width: 767px) {
		display: block;
		height: auto;
		margin: 0px auto;
		padding: 0px 4%;
		text-align: left;
		border-bottom: 1px dotted rgb(45, 46, 52);
		margin: 0px 10px;
	}
	@media only screen and (max-width: 480px) {
		margin: 0px 6px;
	}
	display: inline-block;
	margin: 0px 15px;
	padding: 0px;
	margin: 0px;
	padding: 0px;
	border: none;
	outline: none;
	position: relative;
	list-style: none;
	height: 48px;
	display: inline-block;
`;

const StyledA_7 = styled.a`
	display: block;
	box-sizing: border-box;
	text-decoration: none;
	outline: 0px;
	color: rgb(17, 171, 176);
	transition: color 0.3s ease-in-out 0s;
	line-height: inherit;
	@media only screen and (max-width: 767px) {
		width: 48px;
		height: 48px;
		text-align: left;
		background-color: rgb(204, 82, 0);
		border: none;
		float: right;
		font: 0px / 0 a;
		text-shadow: none;
		color: transparent;
		position: relative;
		top: 0px;
		right: 30px;
		position: absolute;
		border: 2px solid rgb(255, 255, 255);
		top: 35%;
		left: 25%;
		right: 25%;
		content: "";
		top: 60%;
		display: block;
		display: block;
		padding: 0px;
		margin: 12px 0px;
		line-height: 16px;
		border: none;
		width: 54px;
		height: 54px;
		font-size: 18px;
		line-height: 54px;
	}
	color: rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	color: rgb(17, 171, 176);
	position: absolute;
	bottom: 30px;
	left: 50%;
	margin-left: -29px;
	display: block;
	height: 42px;
	width: 42px;
	font-size: 42px;
	line-height: 42px;
	color: rgb(255, 255, 255);
	border-radius: 100%;
	transition: all 0.3s ease-in-out 0s;
	color: rgb(17, 171, 176);
	margin: 0px;
	padding: 0px;
	border: none;
	outline: none;
	display: inline-block;
	padding: 8px 13px;
	line-height: 32px;
	text-decoration: none;
	text-align: left;
	color: rgb(255, 255, 255);
	background-color: transparent !important;
	color: rgb(240, 96, 0);
	color: rgb(255, 255, 255);
	color: rgb(17, 171, 176);
`;

const StyledI_3 = styled.i`
	display: block;
	box-sizing: border-box;
	margin-right: 15px;
	font-size: 20px;
	opacity: 0;
	transition: opacity 1s ease 0s;
`;

const StyledLi_8 = styled.li`
	display: block;
	box-sizing: border-box;
	line-height: 18px;
	margin-bottom: 12px;
	@media only screen and (max-width: 767px) {
		display: block;
		height: auto;
		margin: 0px auto;
		padding: 0px 4%;
		text-align: left;
		border-bottom: 1px dotted rgb(45, 46, 52);
		margin: 0px 10px;
	}
	@media only screen and (max-width: 480px) {
		margin: 0px 6px;
	}
	display: inline-block;
	margin: 0px 15px;
	padding: 0px;
	margin: 0px;
	padding: 0px;
	border: none;
	outline: none;
	position: relative;
	list-style: none;
	height: 48px;
	display: inline-block;
`;

const StyledA_8 = styled.a`
	display: block;
	box-sizing: border-box;
	text-decoration: none;
	outline: 0px;
	color: rgb(17, 171, 176);
	transition: color 0.3s ease-in-out 0s;
	line-height: inherit;
	@media only screen and (max-width: 767px) {
		width: 48px;
		height: 48px;
		text-align: left;
		background-color: rgb(204, 82, 0);
		border: none;
		float: right;
		font: 0px / 0 a;
		text-shadow: none;
		color: transparent;
		position: relative;
		top: 0px;
		right: 30px;
		position: absolute;
		border: 2px solid rgb(255, 255, 255);
		top: 35%;
		left: 25%;
		right: 25%;
		content: "";
		top: 60%;
		display: block;
		display: block;
		padding: 0px;
		margin: 12px 0px;
		line-height: 16px;
		border: none;
		width: 54px;
		height: 54px;
		font-size: 18px;
		line-height: 54px;
	}
	color: rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	color: rgb(17, 171, 176);
	position: absolute;
	bottom: 30px;
	left: 50%;
	margin-left: -29px;
	display: block;
	height: 42px;
	width: 42px;
	font-size: 42px;
	line-height: 42px;
	color: rgb(255, 255, 255);
	border-radius: 100%;
	transition: all 0.3s ease-in-out 0s;
	color: rgb(17, 171, 176);
	margin: 0px;
	padding: 0px;
	border: none;
	outline: none;
	display: inline-block;
	padding: 8px 13px;
	line-height: 32px;
	text-decoration: none;
	text-align: left;
	color: rgb(255, 255, 255);
	background-color: transparent !important;
	color: rgb(240, 96, 0);
	color: rgb(255, 255, 255);
	color: rgb(17, 171, 176);
`;

const StyledI_4 = styled.i`
	display: block;
	box-sizing: border-box;
	margin-right: 15px;
	font-size: 20px;
	opacity: 0;
	transition: opacity 1s ease 0s;
`;

const StyledP = styled.p`
	display: block;
	box-sizing: border-box;
	margin: 0px 0px 30px;
	@media only screen and (max-width: 767px) {
		display: none;
	}
	line-height: 30px;
	color: rgb(122, 122, 122);
`;

const StyledA_9 = styled.a`
	display: block;
	box-sizing: border-box;
	text-decoration: none;
	outline: 0px;
	color: rgb(17, 171, 176);
	transition: color 0.3s ease-in-out 0s;
	line-height: inherit;
	@media only screen and (max-width: 767px) {
		width: 48px;
		height: 48px;
		text-align: left;
		background-color: rgb(204, 82, 0);
		border: none;
		float: right;
		font: 0px / 0 a;
		text-shadow: none;
		color: transparent;
		position: relative;
		top: 0px;
		right: 30px;
		position: absolute;
		border: 2px solid rgb(255, 255, 255);
		top: 35%;
		left: 25%;
		right: 25%;
		content: "";
		top: 60%;
		display: block;
		display: block;
		padding: 0px;
		margin: 12px 0px;
		line-height: 16px;
		border: none;
		width: 54px;
		height: 54px;
		font-size: 18px;
		line-height: 54px;
	}
	color: rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	color: rgb(17, 171, 176);
	position: absolute;
	bottom: 30px;
	left: 50%;
	margin-left: -29px;
	display: block;
	height: 42px;
	width: 42px;
	font-size: 42px;
	line-height: 42px;
	color: rgb(255, 255, 255);
	border-radius: 100%;
	transition: all 0.3s ease-in-out 0s;
	color: rgb(17, 171, 176);
	margin: 0px;
	padding: 0px;
	border: none;
	outline: none;
	display: inline-block;
	padding: 8px 13px;
	line-height: 32px;
	text-decoration: none;
	text-align: left;
	color: rgb(255, 255, 255);
	background-color: transparent !important;
	color: rgb(240, 96, 0);
	color: rgb(255, 255, 255);
	color: rgb(17, 171, 176);
`;

const StyledI_5 = styled.i`
	display: block;
	box-sizing: border-box;
	margin-right: 15px;
	font-size: 20px;
`;

const StyledSection = styled.section`
	display: block;
	box-sizing: border-box;
	background: rgb(43, 43, 43);
	padding-top: 20px;
	overflow: hidden;
`;

const StyledDiv_4 = styled.div`
	display: block;
	box-sizing: border-box;
	width: auto;
	max-width: none;
	margin: 0px -20px;
	content: " ";
	display: table;
	clear: both;
	@media only screen and (max-width: 767px) {
		width: 460px;
		margin: 0px auto;
		padding: 0px;
		width: auto;
		max-width: none;
		margin: 0px -30px;
	}
	@media only screen and (max-width: 460px) {
		width: auto;
	}
	@media screen and (min-width: 1200px) {
		max-width: 1180px;
	}
`;

const StyledDiv_5 = styled.div`
	display: block;
	box-sizing: border-box;
	position: relative;
	padding: 0px 20px;
	min-height: 1px;
	float: left;
	width: 25%;
	@media only screen and (max-width: 767px) {
		float: none;
		margin-left: 0px;
		margin-right: 0px;
		padding: 0px 30px;
		width: auto !important;
	}
	@media only screen and (max-width: 767px) {
		margin-bottom: 40px;
	}
`;

const StyledImg = styled.img`
	display: block;
	box-sizing: border-box;
	max-width: 100%;
	height: auto;
	@media only screen and (max-width: 900px) {
		width: 114px;
		height: 114px;
		margin-left: 12px;
	}
	@media only screen and (max-width: 767px) {
		display: none;
	}
	position: relative;
	width: 120px;
	height: 120px;
	border-radius: 100%;
`;

const StyledDiv_6 = styled.div`
	display: block;
	box-sizing: border-box;
	position: relative;
	padding: 0px 20px;
	min-height: 1px;
	float: left;
	width: 75%;
	@media only screen and (max-width: 767px) {
		float: none;
		margin-left: 0px;
		margin-right: 0px;
		padding: 0px 30px;
		width: auto !important;
	}
	@media only screen and (max-width: 900px) {
		padding-right: 5%;
	}
	@media only screen and (max-width: 767px) {
		padding-right: 30px;
		padding-right: 30px;
		margin-bottom: 40px;
	}
	padding-right: 5%;
`;

const StyledH2 = styled.h2`
	display: block;
	box-sizing: border-box;
	color: rgb(49, 49, 49);
	font-family: opensans-bold, sans-serif;
	font-weight: normal;
	font-size: 28px;
	line-height: 36px;
	margin-bottom: 6px;
	font: 22px / 30px opensans-bold, sans-serif;
	color: rgb(255, 255, 255);
	margin-bottom: 12px;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	color: rgb(255, 255, 255);
	margin: 20px;
	opacity: 0;
	transition: opacity 1s ease 0s;
`;

const StyledP_2 = styled.p`
	display: block;
	box-sizing: border-box;
	margin: 0px 0px 30px;
	line-height: 30px;
	color: rgb(122, 122, 122);
`;

const StyledDiv_7 = styled.div`
	display: block;
	box-sizing: border-box;
	width: auto;
	max-width: none;
	margin: 0px -20px;
	content: " ";
	display: table;
	clear: both;
	@media only screen and (max-width: 767px) {
		width: 460px;
		margin: 0px auto;
		padding: 0px;
		width: auto;
		max-width: none;
		margin: 0px -30px;
	}
	@media only screen and (max-width: 460px) {
		width: auto;
	}
	@media screen and (min-width: 1200px) {
		max-width: 1180px;
	}
`;

const StyledDiv_8 = styled.div`
	display: block;
	box-sizing: border-box;
	position: relative;
	padding: 0px 20px;
	min-height: 1px;
	float: left;
	@media only screen and (max-width: 767px) {
		float: none;
		margin-left: 0px;
		margin-right: 0px;
		padding: 0px 30px;
		width: auto !important;
	}
	@media only screen and (max-width: 900px) {
		width: 50%;
	}
	@media only screen and (max-width: 767px) {
		margin-bottom: 40px;
	}
	width: 41.6667%;
`;

const StyledH2_2 = styled.h2`
	display: block;
	box-sizing: border-box;
	color: rgb(49, 49, 49);
	font-family: opensans-bold, sans-serif;
	font-weight: normal;
	font-size: 28px;
	line-height: 36px;
	margin-bottom: 6px;
	font: 22px / 30px opensans-bold, sans-serif;
	color: rgb(255, 255, 255);
	margin-bottom: 12px;
	font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
	color: rgb(255, 255, 255);
	margin: 20px;
	opacity: 0;
	transition: opacity 1s ease 0s;
`;

const StyledP_3 = styled.p`
	display: block;
	box-sizing: border-box;
	margin: 0px 0px 30px;
	line-height: 30px;
	color: rgb(122, 122, 122);
`;

const StyledSpan_2 = styled.span`
	display: block;
	box-sizing: border-box;
	color: rgb(255, 255, 255);
`;

const StyledBr = styled.br`
	display: block;
	box-sizing: border-box;
`;

const StyledBr_2 = styled.br`
	display: block;
	box-sizing: border-box;
`;

const StyledBr_3 = styled.br`
	display: block;
	box-sizing: border-box;
`;

const StyledBr_4 = styled.br`
	display: block;
	box-sizing: border-box;
`;

const StyledDiv_9 = styled.div`
	display: block;
	box-sizing: border-box;
	position: relative;
	padding: 0px 20px;
	min-height: 1px;
	float: left;
	@media only screen and (max-width: 767px) {
		float: none;
		margin-left: 0px;
		margin-right: 0px;
		padding: 0px 30px;
		width: auto !important;
	}
	@media only screen and (max-width: 900px) {
		width: 50%;
	}
	@media only screen and (max-width: 767px) {
		margin-bottom: 40px;
	}
	width: 58.3333%;
	padding-top: 6px;
`;

const StyledP_4 = styled.p`
	display: block;
	box-sizing: border-box;
	margin: 0px 0px 30px;
	line-height: 30px;
	color: rgb(122, 122, 122);
`;

const StyledA_10 = styled.a`
	display: block;
	box-sizing: border-box;
	text-decoration: none;
	outline: 0px;
	color: rgb(17, 171, 176);
	transition: color 0.3s ease-in-out 0s;
	line-height: inherit;
	font: 16px / 30px opensans-bold, sans-serif;
	background: rgb(17, 171, 176);
	display: inline-block;
	text-decoration: none;
	letter-spacing: 0px;
	color: rgb(255, 255, 255);
	padding: 12px 20px;
	margin-bottom: 18px;
	border: none;
	cursor: pointer;
	height: auto;
	transition: all 0.2s ease-in-out 0s;
	border-radius: 3px;
	@media only screen and (max-width: 767px) {
		width: 48px;
		height: 48px;
		text-align: left;
		background-color: rgb(204, 82, 0);
		border: none;
		float: right;
		font: 0px / 0 a;
		text-shadow: none;
		color: transparent;
		position: relative;
		top: 0px;
		right: 30px;
		position: absolute;
		border: 2px solid rgb(255, 255, 255);
		top: 35%;
		left: 25%;
		right: 25%;
		content: "";
		top: 60%;
		display: block;
		display: block;
		padding: 0px;
		margin: 12px 0px;
		line-height: 16px;
		border: none;
		width: 100%;
		text-align: center;
		padding: 15px 20px;
		width: 54px;
		height: 54px;
		font-size: 18px;
		line-height: 54px;
	}
	color: rgb(255, 255, 255);
	color: rgb(255, 255, 255);
	color: rgb(17, 171, 176);
	position: absolute;
	bottom: 30px;
	left: 50%;
	margin-left: -29px;
	display: block;
	height: 42px;
	width: 42px;
	font-size: 42px;
	line-height: 42px;
	color: rgb(255, 255, 255);
	border-radius: 100%;
	transition: all 0.3s ease-in-out 0s;
	color: rgb(17, 171, 176);
	margin: 0px;
	padding: 0px;
	border: none;
	outline: none;
	display: inline-block;
	padding: 8px 13px;
	line-height: 32px;
	text-decoration: none;
	text-align: left;
	color: rgb(255, 255, 255);
	background-color: transparent !important;
	color: rgb(240, 96, 0);
	color: rgb(255, 255, 255);
	color: rgb(17, 171, 176);
	margin-top: 6px;
	background: rgb(68, 68, 68);
	background: rgb(255, 255, 255);
	color: rgb(43, 43, 43);
`;

const StyledI_6 = styled.i`
	display: block;
	box-sizing: border-box;
	margin-right: 15px;
	font-size: 20px;
	opacity: 0;
	transition: opacity 1s ease 0s;
`;

const Hero = () => {
	return (
		<>
			<StyledDiv>
				<StyledHeader id="home">
					<StyledDiv_2 id="blackback">
						<StyledDiv_3>
							<StyledH1>I'm Tomide Adeoye.</StyledH1>

							<StyledH3>
								I'm a Tomide Adeoye
								<StyledSpan>
									React / Node FullStack developer. I am passionate about
									building software and
								</StyledSpan>{" "}
								making meaningful impact in Africa (and the world) through
								software and public policy.
							</StyledH3>

							<StyledHr />
							<StyledUl_2>
								<StyledLi_5>
									<StyledA_5 href="https://twitter.com/_tomide">
										<StyledI />
									</StyledA_5>
								</StyledLi_5>

								<StyledLi_6>
									<StyledA_6 href="https://github.com/tomideadeoye">
										<StyledI_2 />
									</StyledA_6>
								</StyledLi_6>

								<StyledLi_7>
									<StyledA_7 href="https://www.linkedin.com/in/tomide-adeoye-828604129/">
										<StyledI_3 />
									</StyledA_7>
								</StyledLi_7>

								<StyledLi_8>
									<StyledA_8 href="https://www.instagram.com/tomide_adeoye/?hl=en">
										<StyledI_4 />
									</StyledA_8>
								</StyledLi_8>
							</StyledUl_2>
						</StyledDiv_3>
					</StyledDiv_2>

					<StyledP>
						<StyledA_9 href="#about">
							<StyledI_5 />
						</StyledA_9>
					</StyledP>
				</StyledHeader>

				<StyledSection id="about">
					<StyledDiv_4>
						<StyledDiv_5>
							<StyledImg src="/images/Capture.JPG" alt="" />
						</StyledDiv_5>

						<StyledDiv_6>
							<StyledH2>Tomide Adeoye</StyledH2>

							<StyledP_2>
								Tomide Adeoye is the founder of lawvisuals.org. His life mission
								is to make meaningful impact in Africa (and the world) through
								software and public policy. Towards fulfilling his mission, he
								has garnered experience in legal practice, consulting, finance
								and strategy through internship and work engagements with
								organisations such as PwC, KPMG, Providus Bank, VFD Group, Banwo
								& Ighodalo, the Nigerian Institute of Chartered Arbitrators and
								more. As an undergrad he was president of the Tax Club Obafemi
								Awolowo University; he also represented the institution at
								several competitions affiliated with the Nigerian Joint Tax
								Board, the International Center for Tax Development, the CFA
								Society, Bain & Company and more. He takes great interest in
								computer programming and corporate presentations; his current
								project (lawvisuals.org) is an elegant blend of both. He spends
								his leisure reading, watching sci-fi or daydreaming.
							</StyledP_2>

							<StyledDiv_7>
								<StyledDiv_8>
									<StyledH2_2>Contact Details</StyledH2_2>

									<StyledP_3>
										<StyledSpan_2>
											Tomide Adeoye
											<StyledBr />
											Richmond Gate,
											<StyledBr_2 />
											Lekki, Lagos, Nigeria.
											<StyledBr_3 />
											+2348181927251
											<StyledBr_4 />
											tomideadeoye@gmail.com
										</StyledSpan_2>
									</StyledP_3>
								</StyledDiv_8>

								<StyledDiv_9>
									<StyledP_4>
										<StyledA_10
											href="https://nutm-my.sharepoint.com/:w:/g/personal/tomide_adeoye_nsp_nutmng_org/EVpYxzO4U_1NgW6xfPvbMDcBByw_fYzXAWTi6tHNSDgNYA?e=2faQJD"
											target="_blank"
										>
											<StyledI_6 />
											Download Resume
										</StyledA_10>
									</StyledP_4>
								</StyledDiv_9>
							</StyledDiv_7>
						</StyledDiv_6>
					</StyledDiv_4>
				</StyledSection>
			</StyledDiv>
		</>
	);
};

export default Hero;
