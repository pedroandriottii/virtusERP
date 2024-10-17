function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
            <p className="mt-4 text-lg">Sorry, the page you're looking for doesn't exist.</p>
            <a href="/" className="mt-6 text-blue-500 underline">Go back to Home</a>
        </div>
    );
}

export default NotFound;
