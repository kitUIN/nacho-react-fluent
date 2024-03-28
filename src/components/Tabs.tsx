import { FC, createElement } from "react";
import { 
  Tab,
  TabList,
} from "@fluentui/react-components";
import { pages } from "@/pages";
import { useLocation, useNavigate } from "react-router-dom"; 
const noTab: string[] = ["/login", "/register"];

export const Tabs: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const selectTab = (selectedPath: unknown) =>
    typeof selectedPath === "string"
      ? navigate({ pathname: selectedPath })
      : null;

  const isLogin: boolean = noTab.indexOf(location.pathname) !== -1;
  return isLogin ? (
    <></>
  ) : (
    <div className="Tabs">
      <TabList
        onTabSelect={(_, { value }) => selectTab(value)}
        size="large"
        selectedValue={location.pathname}
        vertical
      >
        {pages
          .filter((page) => !page.top)
          .map(({ label, path, icon }, index) => (
            <Tab
              icon={createElement(icon)}
              key={`${path}-${index}`}
              value={path}
            >
              {label}
            </Tab>
          ))}
      </TabList>
      <TabList
        onTabSelect={(_, { value }) => selectTab(value)}
        size="large"
        selectedValue={location.pathname}
        vertical
      >
        {pages
          .filter((page) => page.top)
          .map(({ label, path, icon }, index) => (
            <Tab
              icon={createElement(icon)}
              key={`${path}-${index}`}
              value={path}
            >
              {label}
            </Tab>
          ))}
      </TabList>
    </div>
  );
};
