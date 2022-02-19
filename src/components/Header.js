import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Header() {
	const { setTheme, theme } = useContext(ThemeContext);

	return (
		<div className="padT4 padB4">
			<div className="container mobile-container">
				<div className="d-flex justify-content-between">
					<div>
						<a href="https://www.linkedin.com/in/tomide-adeoye-828604129/">
							<img
								alt="SVCC Home Page"
								src="/images/tomide.png"
								style={{
									border: "3px solid #fff",
									height: 60,
									borderRadius: 50,
								}}
							/>
						</a>
					</div>
					<div className="light">
						<h3
							className={
								theme == "light"
									? "header-title text-dark"
									: "header-title text-light"
							}
						>
							TOMIDE ADEOYE [DEVELOPER] PORTFOLIO
						</h3>
					</div>
					<div className={theme == "light" ? "" : "text-info"}>
						Hello Recruiter 😁 &nbsp;&nbsp;
						<span>
							<a href="#">sign-out</a>
						</span>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
