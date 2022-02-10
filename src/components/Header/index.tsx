import { Container, Content } from "./styles";

export function Header() {
  return (
    <Container>
      <Content>
        <div>
          <h1>Codelândia</h1>
          <h2>blog</h2>
        </div>
        <form>
          <input type="text" placeholder="Pesquisar no blog" />
        </form>
      </Content>
    </Container>
  );
}
