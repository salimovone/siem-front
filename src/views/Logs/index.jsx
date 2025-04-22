import React, { useEffect, useState } from "react";
import { logService } from "../../service/logService";

const Logs = () => {
	const [logData, setLogData] = useState([]);
	useEffect(() => {
		logService()
			.then(response => {
				setLogData(response);
				console.log("Fetched log data: \n", response);
			})
			.catch(error => {
				console.error("Error fetching logs:", error);
			});
	}, []);
	return <><ul>
        {logData.map((log, index) => (
            <li key={index}>
                {
                    Object.entries(log).map(([key, value]) => {
                        if (value===null) 
                            return null
                        return (
                            <div key={key}>
                                <strong>{key}:</strong> {value}
                            </div>
                        );
                    })
                }
                <br />  
                <br />  
                <br />  
            </li>
        ))}
        </ul></>;
};

export default Logs;
