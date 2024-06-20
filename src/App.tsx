import styled from "styled-components";
import Circle from "./Circle";
import { useState } from "react";

// https://ko.legacy.reactjs.org/docs/getting-started.html
// https://react.dev/

function App1() {
  const [value, setValue] = useState("");
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
    // <div>
    //   <Circle bgColor="teal" borderColor="red" />
    //   <Circle text="im here" bgColor="tomato" />
    // </div>
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={value}
          onChange={onChange}
          type="text"
          placeholder="username"
        />
        <button>Log in</button>
      </form>
    </div>
  );
}
const Container = styled.div`
  background-color: ${(props) => props.theme.bgColor};
`;
const H1 = styled.h1`
  color: ${(props) => props.theme.textColor};
`;

interface DummyProps {
  text: string;
  active?: boolean;
}

function Dummy({ text, active = false }: DummyProps) {
  return <H1>{text}</H1>;
}

function App() {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const {
      currentTarget: { value },
    } = event;
  };
  return (
    <Container>
      {/* <H1>protected</H1> */}
      {/* <Dummy active={true} text="hello" /> */}
      <Dummy active text="hello" />
      <button onClick={onClick}>click me</button>
    </Container>
  );
}
export default App;
