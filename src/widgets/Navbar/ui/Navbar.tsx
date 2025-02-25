import React, { useCallback, useState } from "react";
import { classNames } from "shared/lib/classNames/classNames";
import styles from "./Navbar.module.scss";
import { useTranslation } from "react-i18next";
import { Button, ThemeButton } from "shared/ui/Button/Button";
import { LoginModal } from "features/AuthByUsername";
import { getUserAuthData } from "entities/User/model/selectors/getUserAuthData/getUserAuthData";
import { userActions } from "entities/User";
import { useAppDispatch, useAppSelector } from "app/providers/StoreProvider";

interface NavbarProps {
  className?: string;
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const { t } = useTranslation();
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);
  const authData = useAppSelector(getUserAuthData);
  const dispatch = useAppDispatch();

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);

  const onLogout = useCallback(() => {
    setIsAuthModal(false);
    dispatch(userActions.logout());
  }, [dispatch]);

  if (authData) {
    return (
      <div className={classNames(styles.navbar, {}, [className])}>
        <Button theme={ThemeButton.CLEAR_INVERTED} className={styles.navButton} onClick={onLogout}>
          {t("Logout")}
        </Button>
      </div>
    );
  }

  return (
    <div className={classNames(styles.navbar, {}, [className])}>
      <Button onClick={onShowModal} className={styles.navButton} theme={ThemeButton.CLEAR_INVERTED}>
        {t("signIn")}
      </Button>
      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  );
};
