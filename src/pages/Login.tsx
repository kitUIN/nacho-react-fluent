

import {
  makeStyles,
  Button,
  shorthands,
  Input,
  useId,
  Checkbox,
  Link,
} from "@fluentui/react-components";
import { PersonRegular, KeyRegular } from "@fluentui/react-icons";
import { Card, CardFooter } from "@fluentui/react-components";

import { themeAtom } from "@/atoms/local";
import {  useSetAtom } from "jotai";

const useStyles = makeStyles({
  card: {
    ...shorthands.margin("auto"),
    "--fui-Card--size": "0px",
    ...shorthands.padding("36px"),
    ...shorthands.borderRadius("10px"),
    width: "320px",
    maxWidth: "100%",
    boxShadow:
      "0 0 4px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.14)",
  },
  footer: {
    justifyContent: "center",
    display: "flex",
    alignItems: "center",
  },
  loginButton: {
    width: "100%",
  },
  registerButton: {
    width: "100%",
    marginTop: "10px",
  },
  wrapper: {
    width: "100%",
    justifyContent: "space-between",
    marginTop: "15px",
    display: "flex",
  },
  root: {
    display: "flex",
    flexDirection: "column",
    ...shorthands.gap("20px"),
  },
  avatar: {
    width: "60px",
    height: "60px",
  },
  divFooter: {
    display: "flex",
    flexDirection: "column", 
    width: "100%",
  },
  headers: {
    alignItems: "center",
    flexDirection: "column",
    display: "flex",
  },
});

export const Login = () => {
  const setTheme = useSetAtom(themeAtom);
  const styles = useStyles();
  const userId = useId("content-user");
  const pwdId = useId("content-pwd");
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <Card className={styles.card}>
      <div className={styles.headers}>
        <img className={styles.avatar} src="avatar.svg" alt="avatar" />
        <h2>大猫猫控制台</h2>
      </div>
      <div className={styles.root}>
        <Input contentBefore={<PersonRegular />} id={userId} />
        <Input contentBefore={<KeyRegular />} type="password" id={pwdId} />
      </div>

      <CardFooter className={styles.footer}>
        <div className={styles.divFooter}>
          <div className={styles.wrapper}>
            <Checkbox label="记住我"></Checkbox>
            <Link>忘记密码</Link>
          </div>
          <Button onClick={()=>{
            setTheme("DefaultDark"); 
          }} className={styles.loginButton} appearance="primary">
            登录
          </Button>
          <Button className={styles.registerButton}>注册</Button>
        </div>
      </CardFooter>
    </Card>
    </div>
  );
};
