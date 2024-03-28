import { CompoundButton } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";

function About() {
  return (<CompoundButton
    icon={<CalendarMonthRegular />}
    secondaryContent="Secondary content"
 
  >
    Example
  </CompoundButton>
);
}

export default About;