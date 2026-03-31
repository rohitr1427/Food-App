import { useRouteError } from "react-router-dom";


const Error = () => {
    const error = useRouteError();
    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            <p>We're sorry, but an error occurred while loading this page.</p>
            <h3>{error?.status}</h3>
            <p>{error?.message}</p>
        </div>
    );
};

export default Error;