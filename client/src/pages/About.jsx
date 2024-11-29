import { useAuth } from "../store/auth";

export const About = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <h1>Loading user data...</h1>; // Show while user data is being fetched
    }

    return (
        <>
            <h1>welcome, {user ? `${user.username} to our website` : `to our website`}</h1>
        </>
    );
};
