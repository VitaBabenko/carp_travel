import { useState } from "react";

export const useToggle = (initialState = false) => {
  const [isOpenMenu, setIsOpenMenu] = useState(initialState);
  const openMenu = () => setIsOpenMenu(true);
  const closeMenu = () => setIsOpenMenu(false);

  return { isOpenMenu, openMenu, closeMenu };
};
