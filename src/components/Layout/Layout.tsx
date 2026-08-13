import { memo } from "react";
import { Outlet } from "react-router";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThreeModel from "@/utils/ThreeModel/ThreeModel";
import ScrollToTop from "@/components/ScrollToTop/ScrollToTop";

const Layout = memo(() => {
    return (
        <div className="w-full min-h-screen flex flex-col">
            <ScrollToTop />

            <div className="flex justify-center">
                <Header />
            </div>

            <div className="flex justify-center w-full mt-12 px-4 flex-grow">
                <div className="w-full md:w-[768px] flex flex-col">
                    <div className="w-full max-w-[90%] md:max-w-[640px] -mt-[120px] -mb-[200px] h-[650px] touch-none mx-auto my-8">
                        <ThreeModel />
                    </div>

                    <div className="flex-grow">
                        <Outlet />
                    </div>
                </div>
            </div>

            <div className="animate__animated animate__fadeIn animate__slow">
                <Footer />
            </div>
        </div>
    );
});

Layout.displayName = "Layout";

export default Layout;