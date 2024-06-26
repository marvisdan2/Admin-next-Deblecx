import { useCallback, useEffect, useState, createContext, PropsWithChildren } from "react";
import { usePathname, useRouter } from "next/navigation";
// MUI
import useMediaQuery from "@mui/material/useMediaQuery";
import { Theme } from "@mui/material/styles/createTheme";
// CUSTOM NAVIGATION DATA
import { ChildNavItem, NavItem, navigation } from "./navigation";

// ==============================================================
interface ContextProps {
  active: string;
  downMd: boolean;
  activeSubMenuItem: string;
  showMobileSideBar: boolean;
  openSecondarySideBar: boolean;
  categoryMenus: ChildNavItem[];
  handleCloseMobileSidebar: () => void;
  handleToggleSecondarySideBar: () => void;
  handleSubMenuItem: (path: string) => void;
  handleSecondarySideBar: (value: boolean) => void;
  handleActiveMainMenu: (menuItem: NavItem) => () => void;
}
// ==============================================================

export const LayoutContext = createContext({} as ContextProps);

export default function LayoutProvider({ children }: PropsWithChildren) {
  const router = useRouter();
  const pathname = usePathname();

  const [active, setActive] = useState("");
  const [activeSubMenuItem, setActiveSubMenuItem] = useState("");
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const [openSecondarySideBar, setOpenSecondarySideBar] = useState(false);
  const [categoryMenus, setCategoryMenus] = useState<ChildNavItem[]>([]);
  const downMd = useMediaQuery((theme: Theme) => theme.breakpoints.down(1200));

  const handleCloseMobileSidebar = () => setShowMobileSideBar(false);
  const handleSecondarySideBar = (value: boolean) => setOpenSecondarySideBar(value);
  const handleToggleSecondarySideBar = () => setShowMobileSideBar((state) => !state);

  // Function to handle the active main menu item.
  const handleActiveMainMenu = (menuItem: NavItem) => () => {
    // Set the active menu item title
    setActive(menuItem.name);

    // Check if the menu item has children
    if (menuItem.children && menuItem.children.length > 0) {
      // Set the category menus to the children of the menu item
      setCategoryMenus(menuItem.children);

      // Check if the secondary sidebar is already open and the active menu item is the same as the title
      const matched = openSecondarySideBar && active === menuItem.name;

      // Set the openSecondarySideBar state based on the conditions
      handleSecondarySideBar(matched ? false : true);
    } else {
      // Navigate to the path of the menu item
      router.push(menuItem.path!);

      // Set the category
      setCategoryMenus([]);

      // Close the mobile sidebar
      handleCloseMobileSidebar();

      // Close the secondary sidebar
      handleSecondarySideBar(false);
    }
  };

  // Function to activate the route based on the current path
  const activeRoute = useCallback(() => {
    navigation.forEach((menu) => {
      // Find the child of the current menu item that matches the current path
      const findChild = menu.children?.find((item) => item.path === pathname);

      if (findChild) {
        setActive(menu.name); // Update active menu item
        handleSecondarySideBar(true); // Open secondary sidebar
        setCategoryMenus(menu.children!); // Update category menus
        setActiveSubMenuItem(findChild.path); // Update active sub menu item
      } else if (menu.path === pathname) {
        setActive(menu.name); // update the active menu item
        handleSecondarySideBar(false); // close the secondary sidebar
      }
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    activeRoute();
  }, [activeRoute]);

  // Handles the sub menu item click event.
  const handleSubMenuItem = (path: string) => {
    // Navigate to the clicked sub menu item.
    router.push(path);

    // Update the active sub menu item.
    setActiveSubMenuItem(path);

    // Close the mobile side bar.
    handleCloseMobileSidebar();
  };

  return (
    <LayoutContext.Provider
      value={{
        active,
        downMd,
        categoryMenus,
        activeSubMenuItem,
        showMobileSideBar,
        openSecondarySideBar,

        handleSubMenuItem,
        handleActiveMainMenu,
        handleSecondarySideBar,
        handleCloseMobileSidebar,
        handleToggleSecondarySideBar
      }}>
      {children}
    </LayoutContext.Provider>
  );
}
