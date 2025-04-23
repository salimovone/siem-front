import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { defaultGetService } from "../../service/defaultGetService";

const DeviceLogs = () => {
	const { state } = useLocation();
	const [logList, setLogList] = useState([]);
	const fetchData = () => {
		defaultGetService(`/agent/device/${state.id}/logs/`)
			.then(res => {
				setLogList(res);
				console.log("App List: ", res);
			})
			.catch(err => {
				console.log(err);
			});
	};

	useEffect(() => {
		console.log("location state: \n", state.id);
		fetchData();
	}, []);
	return (
		<div>
			<ul>
				{logList.map((log, index) => (
					<li key={index}>
						{Object.entries(log).map(([key, value]) => {
							if (value === null || value === "") return null;
							return (
								<div key={key}>
									<strong>{key}:</strong> {String(value)}
								</div>
							);
						})}
						<br />
						<br />
						<br />
					</li>
				))}
			</ul>
		</div>
	);
};

export default DeviceLogs;
