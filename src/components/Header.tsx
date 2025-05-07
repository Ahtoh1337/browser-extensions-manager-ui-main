import { toggleTheme } from "../data/themeSlice";
import { useEffect } from "react";
import logo from "/images/logo.svg";
import sun from "/images/icon-sun.svg";
import moon from "/images/icon-moon.svg";
import { useAppDispatch, useAppSelector } from "../hooks";

export default function Header() {
    const isDark = useAppSelector(state => state.theme.isDark);
    const dispatch = useAppDispatch();

    useEffect(() => {
        if (isDark)
            document.querySelector("body")?.classList.add("dark");
        else document.querySelector("body")?.classList.remove("dark");
    }, [isDark])

    return <header>
        <img src={logo} alt="Website logo" />
        <button onClick={() => dispatch(toggleTheme())}>
            {isDark ?
                <img src={sun} /> :
                <img src={moon} />}
        </button>
    </header>
}