import React, { ReactElement } from "react";
import { Header } from "./components/Header";
import { ArrayBlocks } from "./components/ArrayBlocks";

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
            <ArrayBlocks key="1" />
        </>
    );
}

export default App;
