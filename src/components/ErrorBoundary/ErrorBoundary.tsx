import { Component, ErrorInfo, ReactNode } from "react";
import { Link } from "react-router";

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error: Error | null;
}

class ErrorBoundary extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
        };
    }

    static getDerivedStateFromError(error: Error): State {
        return {
            hasError: true,
            error,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Error caught by boundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="flex items-center justify-center min-h-screen bg-[#202023] dark:bg-[#f0e7db] px-4">
                    <div className="text-center text-white/80 dark:text-gray-800 max-w-md">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h1 className="text-6xl font-bold text-[#ff63c3] dark:text-indigo-400">
                                    Oops!
                                </h1>
                                <h2 className="text-2xl font-semibold">Something went wrong</h2>
                            </div>

                            <p className="text-white/60 dark:text-gray-800/60">
                                {this.state.error?.message || "An unexpected error occurred"}
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                                <button
                                    onClick={() => window.location.reload()}
                                    className="bg-[#81e6d9] hover:bg-[#81e6d9]/80 h-[40px] px-6 flex justify-center items-center text-black dark:text-white/90 dark:bg-[#319795] dark:hover:bg-[#319795]/80 font-semibold rounded-md transition-colors duration-200"
                                >
                                    Reload Page
                                </button>

                                <Link
                                    to="/"
                                    className="border border-[#81e6d9] dark:border-[#319795] hover:bg-[#81e6d9]/10 dark:hover:bg-[#319795]/10 h-[40px] px-6 flex justify-center items-center text-[#81e6d9] dark:text-[#319795] font-semibold rounded-md transition-colors duration-200"
                                >
                                    Go Home
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;