import { Container } from "./styles";
import { Button } from '../../components/Button';

export function Details() {

  return (
    <Container>
      <h1>Hello</h1>
      <span>Word</span>

      <Button title="Entrar" loading/>
    </Container>
  )
}