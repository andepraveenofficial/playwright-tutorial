import { Link } from "react-router-dom";

const Home = () => {
	return (
		<div>
			<h1 className="m-2">I am Home Page</h1>

			<div className="m-2">
				<Link to="/form" className="bg-primary-500 border border-green-300 ">
					Form
				</Link>
			</div>
		</div>
	);
};

export default Home;
