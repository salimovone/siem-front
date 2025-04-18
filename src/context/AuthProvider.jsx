import React, {
	createContext,
	useState,
	useEffect,
	useMemo,
	useContext,
} from "react";

// AuthContext yaratish
const AuthContext = createContext(null);

export const useAuth = () => {
	return useContext(AuthContext);
};

const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("token") || null);

	const setAuthToken = newToken => {
		setToken(newToken);
		localStorage.setItem("token", newToken);
	};




	const contextValue = useMemo(
		() => ({
			token,
			setAuthToken,
		}),
		[token]
	);

	return (
		<AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
	);
};

export default AuthProvider;
