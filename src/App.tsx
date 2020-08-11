import React, { ReactElement } from "react";
import { Header } from "./components/Header";
import { ArrayBlocks } from "./components/ArrayBlocks";
import { Information } from "./components/Information";
import Tutorial from "./Tutorial";

function App(): ReactElement {
    // Const [isLoading, toggleLoading] = useState(false);

    /*
     * UseEffect(() => {
     *     const html = document.querySelector("html");
     */

    /*
     *     If (html) {
     *         let value = "";
     *         const theme = localStorage.getItem("theme");
     */

    /*
     *         If (theme === null) {
     *             value = "dark";
     *             localStorage.setItem("theme", "dark");
     *         } else {
     *             value = theme;
     *         }
     *         html.setAttribute("theme", value);
     *         toggleLoading(false);
     *     }
     * }, []);
     */

    return (
        <>
            <Header />
            <div className="main-blocks">
                <Tutorial />
                <Information />
                <ArrayBlocks key="1" />
            </div>
        </>
    );
}

export default App;
