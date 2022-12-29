import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/Sidebar";
import getSingleQuote from "../../services/quoteAPI";
import { useSession } from "../../store/Session";
import { Container, Content } from "./styles/home.styles";
import { ThemeProvider } from "styled-components";
import { theme } from "../../styles/accentThemes";
import { BsGearFill } from "react-icons/bs";

function Home() {
  const { dispatch, setQuote } = useSession();
  const [curTheme, setCurTheme] = useState("red");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getSingleQuote().then((res) => {
      dispatch(setQuote(res));
    });
  }, []);

  function changeTheme(name: string) {
    setCurTheme(name);
  }

  return (
    <ThemeProvider theme={theme[curTheme]}>
      <Container>
        <Sidebar changeTheme={changeTheme} curTheme={curTheme} isOpen={isOpen} setIsOpen={setIsOpen} />
        <Content isOpen={isOpen}>
          <BsGearFill onClick={() => setIsOpen(!isOpen)} />
          <Outlet />
        </Content>
      </Container>
    </ThemeProvider>
  );
}

export default Home;
