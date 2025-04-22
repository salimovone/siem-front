import { useState } from "react";
import useWebSocket from "../../libs/useWebSocket";

const Devices = () => {
	const { messages, sendMessage, isConnected } = useWebSocket(
		"wss://echo.websocket.org"
	);
	const [value, setValue] = useState("");

    const handleSendMessage = () => {
        sendMessage(value);
        setValue("");
    }
	return (
		<div>
			<span>Is Active: {isConnected ? "Yes" : "No"}</span>
			<div className="">
				<input
					type="text"
					onChange={e => setValue(e.target.value)}
					value={value}
				/>
                <button onClick={handleSendMessage}>send</button>
			</div>
			<ul>
				{messages.map((message, index) => (
					<li key={index}>{message}</li>
				))}
			</ul>
		</div>
	);
};

export default Devices;
