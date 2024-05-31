import { Card } from "react-native-paper";

const CardComponent = ({ title, mode, LeftContent, content }) => {
  return (
    <Card mode={mode}>
      <Card.Title title={title} left={LeftContent} />
      <Card.Content>
        {content.map(({ c }) => (
          c
        ))}
      </Card.Content>
    </Card>
  );
};
export default CardComponent;
