import React, { ReactElement, useEffect, useState } from "react";
import { Header } from "./Header";

function App(): ReactElement {
    const [isLoading, toggleLoading] = useState(true);

    useEffect(() => {
        const html = document.querySelector("html");

        if (html) {
            let value = "";
            const theme = localStorage.getItem("theme");

            if (theme === null) {
                value = "dark";
                localStorage.setItem("theme", "dark");
            } else {
                value = theme;
            }
            html.setAttribute("theme", value);
            toggleLoading(false);
        }
    }, []);

    return !isLoading ? <Header /> : <div />;
}

export default App;
