import {memo} from "react";
import {Outlet} from "react-router";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

const Layout = memo(() => {
    return (
        <div
            className="w-full min-h-screen flex flex-col bg-[#202023] dark:bg-[#f0e7db] transition-colors duration-500">
            <ScrollToTop/>
            <div className="flex justify-center">
                <Header/>
            </div>
            <div className="flex justify-center w-full px-4 flex-grow">
                <div className="w-full md:w-[768px] flex flex-col">
                    <div className="relative w-full max-w-[600px] h-[500px] touch-none mx-auto">
                        <div
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#81e6d9]/10 dark:bg-[#319795]/10 rounded-full blur-[80px] pointer-events-none"></div>
                        <ThreeModel/>
                    </div>
                    <div className="flex-grow">
                        <Outlet/>
                    </div>
                </div>
            </div>
            <div className="animate__animated animate__fadeIn animate__slow">
                <Footer/>
            </div>
        </div>
    );
});

Layout.displayName = "Layout";

export default Layout;