import {
  makeStyles,
  Button,
  shorthands,
  Input,
  useId,
  Checkbox,
  Link,
  mergeClasses,
} from "@fluentui/react-components";
import {
  PersonRegular,
  KeyRegular,
  CommentRegular,
  PersonAddRegular,
} from "@fluentui/react-icons";
import { Card, CardFooter } from "@fluentui/react-components";

import { themeAtom } from "@/atoms/local";
import { useSetAtom } from "jotai";
import { useMotion } from "@fluentui/react-motion-preview";
import React from "react";

const useStyles = makeStyles({
  cardDiv: {
    opacity: 0,
    transitionDuration: "300ms",
    transform: "translate3D(0, 20%, 0)",
    // transitionTimingFunction: "ease-out",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
  },

  visible: {
    opacity: 1,
    transform: "translate3D(0, 0, 0)",
    height: "100%",
  },
  card: {
    ...shorthands.margin("auto"),
    "--fui-Card--size": "0px",
    ...shorthands.padding("36px"),
    ...shorthands.borderRadius("10px"),
    width: "360px",
    maxWidth: "100%",
    boxShadow: "0 0 4px rgba(0,0,0,0.12), 0 8px 16px rgba(0,0,0,0.14)",
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

function SendSMS(){

}

function Login() {
  // true是验证码,false是密码登录
  const [isMessage, setIsMessage] = React.useState(false);
  const [icon, setIcon] = React.useState(<CommentRegular />);
  const [otherText, setOtherText] = React.useState("验证码登录");
  const [isVisible, setIsVisible] = React.useState(false);
  const [time, setTime] = React.useState(60);
  const [messageTimeout, setMessageTimeout] = React.useState("发送验证码");
  const [isMessageButton, setIsMessageButton] = React.useState(false);
  const motion = useMotion(isVisible, { animateOnFirstMount: false });

  const setTheme = useSetAtom(themeAtom);
  const styles = useStyles();
  const userId = useId("content-user");
  const pwdId = useId("content-pwd");
  const yzmId = useId("content-yzm");

  React.useEffect(() => {
    setIsVisible(true);
  }, []);
  return (
    <>
      {motion.canRender && (
        <div
          ref={motion.ref}
          className={mergeClasses(
            styles.cardDiv,
            motion.active && styles.visible
          )}
        >
          <Card className={styles.card}>
            <div className={styles.headers}>
              <img className={styles.avatar} src="avatar.svg" alt="avatar" />
              <h2>大猫猫控制台</h2>
            </div>
            <div className={styles.root}>
              <Input
                placeholder="QQ"
                contentBefore={<PersonRegular />}
                id={userId}
              />
              {isMessage ? (
                <div style={{ width: "100%", display: "flex", gap: "10px" }}>
                  <Input
                    style={{ width: "150px" }}
                    placeholder="验证码"
                    contentBefore={<CommentRegular />}
                    id={yzmId}
                  />
                  <Button disabled={isMessageButton}
                    onClick={() => {
                      SendSMS();
                      setIsMessageButton(true);
                      setMessageTimeout(time + "秒后重新发送");
                      const timerId = setInterval(() => {
                        setTime((time) => {
                          if (time === 0) {
                            setIsMessageButton(false);
                            setMessageTimeout("发送验证码"); 
                            clearInterval(timerId);
                            return 60;
                          }
                          setMessageTimeout(time - 1 + "秒后重新发送");
                          return time - 1;
                        });
                      }, 1000);
                    }}
                    style={{ width: "100%" }}
                  >
                    {messageTimeout}
                  </Button>
                </div>
              ) : (
                <Input
                  placeholder="密码"
                  contentBefore={<KeyRegular />}
                  type="password"
                  id={pwdId}
                />
              )}
            </div>

            <CardFooter className="nacho-card-footer">
              <div className={styles.divFooter}>
                {isMessage ? (
                  <></>
                ) : (
                  <div className={styles.wrapper}>
                    <Checkbox label="记住我"></Checkbox>
                    <Link>忘记密码</Link>
                  </div>
                )}
                <Button
                  onClick={() => {
                    setTheme("DefaultDark");
                  }}
                  style={{ marginTop: "15px" }}
                  appearance="primary"
                >
                  登录
                </Button>
                <div
                  style={{ display: "flex", gap: "10px", marginTop: "15px" }}
                >
                  <Button
                    icon={icon}
                    onClick={() => {
                      setIsMessage(!isMessage);
                      setIcon(!isMessage ? <KeyRegular /> : <CommentRegular />);
                      setOtherText(!isMessage ? "密码登录" : "验证码登录");
                    }}
                    className="nacho-login-bottom-button"
                  >
                    {otherText}
                  </Button>
                  <Button
                    icon={<PersonAddRegular />}
                    className="nacho-login-bottom-button"
                  >
                    注册
                  </Button>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      )}
    </>
  );
}

export default Login;
