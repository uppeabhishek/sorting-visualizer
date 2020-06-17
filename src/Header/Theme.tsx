import React, { FunctionComponent, useState } from "react";

export const Theme: FunctionComponent = () => {
    const [theme, changeThemeState] = useState(localStorage.getItem("theme"));

    const changeTheme = () => {
        const html = document.querySelector("html");

        if (html) {
            const currentHTMLtheme = html.getAttribute("theme");
            let newTheme = "";

            if (currentHTMLtheme === "dark") {
                newTheme = "light";
            } else {
                newTheme = "dark";
            }
            localStorage.setItem("theme", newTheme);
            changeThemeState(newTheme);
            html.setAttribute("theme", newTheme);
        }
    };

    return (
        <div>
            {theme === "dark" ? (
                <i aria-hidden="true" className="fa fa-sun-o" onClick={changeTheme} />
            ) : (
                <i aria-hidden="true" className="fa fa-moon-o" onClick={changeTheme} />
            )}
        </div>
    );
};
