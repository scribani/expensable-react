import styled from "@emotion/styled";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { SessionContext } from "../components/contexts/SessionContext";
import MainContainer from "../components/MainContainer";
import { TextButton } from "../components/UI/Buttons";
import { Input } from "../components/UI/Inputs";
import { ContentM, Heading2 } from "../components/UI/Typography";
import { logIn } from "../services/session_fetcher";

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

export default function Login() {
  const { contextLogIn } = useContext(SessionContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const history = useHistory();

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const { email, password } = form;
      const userData = await logIn(email, password);
      contextLogIn(userData.token);
      history.push("/expenses");
    } catch (error) {
      alert(error);
      setForm({ email: "", password: "" });
    }
  }

  return (
    <MainContainer>
      <Heading2 color="var(--gray-2)">Welcome to Expensable</Heading2>
      <ContentM color="var(--gray-2)">
        Please login to start using the app
      </ContentM>
      <Form onSubmit={handleSubmit}>
        <Input
          label="Email"
          type="email"
          name="email"
          value={form.email}
          placeholder="somebody@mail.com"
          onChange={handleChange}
          required
        />
        <Input
          label="Password"
          type="password"
          name="password"
          value={form.password}
          placeholder="********"
          onChange={handleChange}
          required
        />
        <TextButton type="primary" text="Login" />
      </Form>
    </MainContainer>
  );
}
