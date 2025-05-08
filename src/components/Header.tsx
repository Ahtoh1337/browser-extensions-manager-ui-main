import { toggleTheme } from "../data/themeSlice";
import { useEffect } from "react";
import logo from "/images/logo.svg";
import logoDark from "/images/logo-dark.svg";
import sun from "/images/icon-sun.svg";
import moon from "/images/icon-moon.svg";
import { useAppDispatch, useAppSelector } from "../hooks";

export default function Header() {
    const isDark = useAppSelector(state => state.theme.isDark);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isDark)
            document.body.classList.add("dark");
        else document.body.classList.remove("dark");
    }, [isDark])

    return <header className="header bordered">
        {isDark ?
            <img src={logoDark} alt="Website logo" /> :
            <img src={logo} alt="Website logo" />}
        <button className="header__theme-button"
            onClick={() => dispatch(toggleTheme())}>
            {isDark ?
                <img src={sun} /> :
                <img src={moon} />}
        </button>
    </header>
}