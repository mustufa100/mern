import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState("");
    const [services , setServices] = useState();

    const storeTokenInLS = (serverToken) => {
        localStorage.setItem("token", serverToken);
        setToken(serverToken);
    };

    const isLoggedIn = !!token;
    const LogoutUser = () => {
        setToken("");
        localStorage.removeItem("token");
    };

    // JWT authentication
    const userAuthentication = async () => {
        if (!token) return;

        try {
            const response = await fetch("http://localhost:5000/api/auth/user", {
                method: "GET",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });
            if (response.ok) {
                const data = await response.json();
                console.log("User data", data.userData);
                setUser(data.userData);
            } else {
                console.error("Failed to authenticate user");
            }
        } catch (error) {
            console.error("Error fetching user data", error);
        }
    };

    const getServices = async()=>{
        try{
            const response = await fetch("http://localhost:5000/api/data/service",{
                method:"GET",       
            });
            if(response.ok){
                const data = await response.json();
                console.log(data.msg);
                setServices(data.msg);
            }
        }catch(error){
            console.log(`services frontend error: ${error}`)
        }
    }

    useEffect(() => {
        getServices();
        userAuthentication();
    }, [token]); // Runs only when `token` changes

    return (
        <AuthContext.Provider value={{ isLoggedIn, storeTokenInLS, LogoutUser, user, services }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth must be used within AuthProvider");
    }
    return authContextValue;
};
