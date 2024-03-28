import {
  NavigateFunction,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { NavigationItem, pages as clientPages } from "./pages";
import {
  Divider,
  FluentProvider,
  Tab,
  TabList,
  makeStyles,
} from "@fluentui/react-components";
import { useAtomValue } from "jotai";
import { getTheme, themeAtom } from "@/atoms/local";
import {
  CalendarMonthRegular,
  CalendarMonthFilled,
  bundleIcon,
  type FluentIcon,
} from "@fluentui/react-icons";
import { LazyImportComponent } from "./components/LazyImportComponent";
import { createElement } from "react";
import { Tabs } from "./components/Tabs";
const useStyles = makeStyles({
  provider: {
    width: "100%",
    height: "100%",
  },
});


function App() {
  const styles = useStyles();
  const theme = useAtomValue(themeAtom);
  return (
    <div className="App">
      <FluentProvider className={styles.provider} theme={getTheme(theme)}>
        <div className="Nav">
          <Tabs></Tabs>
          {/* <Divider vertical style={{ height: "100%" }} /> */}
          <div className="Routes">
            <Routes>
              {clientPages.map(({ path, element }, index) => (
                <Route
                  key={`${path}-${index}`}
                  path={path}
                  element={<LazyImportComponent lazyChildren={element} />}
                />
              ))}
            </Routes>
          </div>
        </div>
      </FluentProvider>
    </div>
  );
}

export default App;
