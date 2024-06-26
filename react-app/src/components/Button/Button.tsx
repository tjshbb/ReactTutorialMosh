import { ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
    children?: ReactNode;
    color?: 'primary' | 'secondary' | 'danger';
    onClick: () => void;
}

const Button = ({ children, onClick, color = 'primary' }: Props) => {
    return (
        <button type="button" className={[styles.btn, styles.btnPrimary].join(' ')} onClick={onClick}>{children}</button>
    )
}

export default Button