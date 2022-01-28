import React from "react";
import LogoImg from "src/assets/fulllogo.png";

import {
  Container,
  Logo,
  OpenCameraButton,
  Paragraph,
  TextButton,
  Title,
} from "./styles";

export function HomeScreen({ navigation }) {
  const onPress = () => {
    alert("Clicou!");
  };

  return (
    <Container>
      {/* <Logo source={LogoImg} /> */}
      <Title>Olá! Seja bem-vindo(a).</Title>
      <Paragraph style={{ marginBottom: 5 }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi eum
        fugiat obcaecati maxime illo iusto quidem minus facere nihil soluta
        cumque suscipit vero quis quod, optio facilis quos natus sed! Numquam
        quibusdam laudantium aut quia adipisci aperiam inventore odit nulla
        molestias minima nemo suscipit deleniti beatae, ullam quis nesciunt.
        Voluptas ullam sit, temporibus tempora doloremque commodi possimus velit
        dignissimos fugiat?
      </Paragraph>

      <OpenCameraButton onPress={onPress}>
        <TextButton>Clique me!</TextButton>
      </OpenCameraButton>
    </Container>
  );
}
