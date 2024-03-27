import { CompoundButton } from "@fluentui/react-components";
import { CalendarMonthRegular } from "@fluentui/react-icons";
import type { CompoundButtonProps } from "@fluentui/react-components";

export const About = (props: CompoundButtonProps) => (
  <CompoundButton
    icon={<CalendarMonthRegular />}
    secondaryContent="Secondary content"
    {...props}
  >
    Example
  </CompoundButton>
);