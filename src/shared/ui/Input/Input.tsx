import React, { InputHTMLAttributes, memo, useEffect, useRef, useState } from "react";
import styles from "./Input.module.scss";
import { classNames } from "shared/lib/classNames/classNames";

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange">;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string;
  onChange?: (value: string) => void;
  autofocus?: boolean;
}

export const Input: React.FC<InputProps> = memo(
  ({ autofocus, className, value, onChange, type = "text", placeholder, ...otherProps }) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onSelect = (e: React.SyntheticEvent<HTMLInputElement, Event>) => {
      const target = e.target as HTMLInputElement;
      setCaretPosition(target.selectionStart || 0);
    };

    return (
      <div className={classNames(styles.inputWrapper, {}, [className])}>
        {placeholder && <div className={styles.placeholder}>{`${placeholder}>`}</div>}
        <div className={styles.caretWrapper}>
          <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={styles.input}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            {...otherProps}
          />
          {isFocused && <span className={styles.caret} style={{ left: `${caretPosition * 9}px` }} />}
        </div>
      </div>
    );
  }
);

Input.displayName = "Input";
