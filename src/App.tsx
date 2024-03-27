import { About } from "@/pages/About";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import { Login } from "@/pages/Login";
import {
  FluentProvider,
  Tab,
  TabList,
  makeStyles,
  webDarkTheme,
  webLightTheme,
} from "@fluentui/react-components";
import { useAtomValue } from "jotai";
import { themeAtom } from "@/atoms/local";
import {
  CalendarMonthRegular,
  CalendarMonthFilled,
  bundleIcon,
} from "@fluentui/react-icons";
const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);
const useStyles = makeStyles({
  provider: {
    width: "100%",
    height: "100%",
  },
});
function getTheme(themeName: string) {
  switch (themeName) {
    case "DefaultDark":
      return webDarkTheme;
    case "DefaultLight":
      return webLightTheme;
    default:
      return webLightTheme;
  }
}
function App() {
  const styles = useStyles();
  const theme = useAtomValue(themeAtom);
  return (
    <div className="App">
      <FluentProvider className={styles.provider} theme={getTheme(theme)}>
        <div className="Nav">
          <TabList defaultSelectedValue="tab2" size="large" vertical>
            <Tab value="tab1">First Tab</Tab>
            <Tab icon={<CalendarMonth />} value="tab2">
              Second Tab
            </Tab>
            <Tab value="tab3">Third Tab</Tab>
            <Tab value="tab4">Fourth Tab</Tab>
          </TabList>

          <div className="Routes">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="login" element={<Login />} />
            </Routes>
          </div>
        </div>
      </FluentProvider>
    </div>
  );
}

export default App;
