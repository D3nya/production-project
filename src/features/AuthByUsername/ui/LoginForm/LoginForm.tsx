import { classNames } from "shared/lib/classNames/classNames";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { Input } from "shared/ui/Input/Input";
import { memo, useCallback } from "react";
import { Text, TextTheme } from "shared/ui/Text/Text";
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername";
import { loginActions } from "../../model/slice/loginSlice";
import styles from "./LoginForm.module.scss";
import { getLoginState } from "../../model/selectors/getLoginState/getLoginState";
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";

interface LoginFormProps {
  className?: string;
}

export const LoginForm: React.FC<LoginFormProps> = memo(({ className }) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const { username, password, error, isLoading } = useAppSelector(getLoginState);

  const onChangeUsername = useCallback(
    (value: string) => {
      dispatch(loginActions.setUsername(value));
    },
    [dispatch]
  );

  const onChangePassword = useCallback(
    (value: string) => {
      dispatch(loginActions.setPassword(value));
    },
    [dispatch]
  );

  const onLoginClick = useCallback(() => {
    dispatch(loginByUsername({ username, password }));
  }, [dispatch, username, password]);

  return (
    <div className={classNames(styles.LoginForm, {}, [className])}>
      <Text title={t("Форма авторизации")} />
      {error && <Text text={t("Вы ввели неверный логин или пароль")} theme={TextTheme.ERROR} />}
      <Input
        autofocus
        type="text"
        className={styles.input}
        placeholder={t("EnterLogin")}
        onChange={onChangeUsername}
        value={username}
      />
      <Input
        type="password"
        className={styles.input}
        placeholder={t("EnterPassword")}
        onChange={onChangePassword}
        value={password}
      />
      <Button className={styles.loginBtn} theme={ThemeButton.OUTLINE} onClick={onLoginClick} disabled={isLoading}>
        {t("Enter")}
      </Button>
    </div>
  );
});

LoginForm.displayName = "LoginForm";
