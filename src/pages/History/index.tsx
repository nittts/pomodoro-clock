import { IHistory } from "../../@types/history.types";
import Card from "../../components/Card";
import { useClockHistory } from "../../store/History";
import { Container } from "./styles/history.styles";

function History() {
  const { historyState } = useClockHistory();

  return (
    <Container>
      {historyState.map((each: IHistory, index: number) => {
        return <Card history={each} />;
      })}
    </Container>
  );
}

export default History;
