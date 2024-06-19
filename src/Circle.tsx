import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${(props) => props.bgColor};
  border-radius: 100px;
  border: 1px solid ${(props) => props.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      <span>{text}</span>
    </Container>
  );
}

export default Circle;

interface PlayerShape {
  name: string;
  age: number;
}

const sayHello = (palyerObj: PlayerShape) =>
  `Hello ${palyerObj.name} you are ${palyerObj.age} years old.`;

sayHello({ name: "nico", age: 12 });
// sayHello({ name: "hi", age: 12, hello:1});
