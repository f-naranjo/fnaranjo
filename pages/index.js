import styled from "styled-components";
import Page from "../components/Layout/Page/Page";

const Title = styled.h1`
font-size:32px;
line-height:100%;
font-family: "Founders Grotesk Semibold";


background-color: #21D4FD;
background-image: linear-gradient(19deg, #21D4FD 0%, #B721FF 100%);

-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

@media screen and (min-width:768px){
  font-size:48px;
}

`

const Text = styled.p`
font-size:24px;
line-height:120%;
max-width:800px;
color:#000000;
@media screen and (min-width:768px){
  font-size:36px;
}
`

const Circle =styled.span`
width:6px;
height:6px;
border-radius:10px;
background-color: #21D4FD;

display:inline-block;
animation: parpadea 1s infinite;
margin-bottom:5px;
margin-right:6px;
@keyframes parpadea{
  0%{
    opacity:0;
  }
  50%{
    opacity:1;
  }
  100%{
    opacity:0;
  }
}
@media screen and (min-width:768px){
  width:10px;
height:10px;
margin-bottom:6px;
margin-right:10px;
}
`

const MainWrapper = styled.div`
padding:24px 24px;
max-width:1000px;
>p{
  margin: 24px 0; 
}
.mapayuda{
  :hover{
    color: rgb(28, 118, 227);
  }
}
.cuimo{
  :hover{
    color: rgb(244, 105, 105);
  }
}
.shootfy{
  :hover{
    color:#6d6d6d;
  }
}
.tailor{
  :hover{
    color:#0F1B51;
  }
}
@media screen and (min-width:768px){
padding:48px 48px;
}
`

const TextSmall = styled.p`
font-size:32px;
`

const TextLink = styled.a`
text-decoration:none;
font-family: "Founders Grotesk Light Italic";
color:#000000;
:hover{
  text-decoration:underline;
}
`
const SocialLink = styled.a`
text-decoration:underline;
font-family: "Founders Grotesk Light";
color:#000000;
:hover{
  text-decoration:underline;
}
`


export default function Home() {
  return (
    <Page>
      <MainWrapper>
      <Title>Francisco Naranjo</Title>
      <Text>Aprendí a hacer páginas webs en Frontpage en el 2000, me enamoré de la arquitectura hace 10 años y en el camino tuve varias aventuras con el diseño, la tipografía y el desarrollo web. En la programación he encontrado un espacio de desarrollo creativo que ofrece retos apasionantes.</Text>
      <Text>Me gusta hacer cosas que involucren el diseño, la arquitectura y el universo tecnológico. Y me encanta hacerlo en equipo.</Text>
      <Text>Descubrir, usar, crear, transmitir y ayudar.</Text>
      <Text> <Circle/>Actualmente desarrollo productos digitales como <TextLink as="a" href="https://shootfy.com" target="_blank" className="shootfy">Shootfy</TextLink> ,  <TextLink as="a" href="mailto:hola@fnaranjo.dev"  className="cuimo">Cüimo</TextLink>  o <TextLink as="a" href="https://mapayuda.org" target="_blank" className="mapayuda">Mapayuda</TextLink> en  <Text as="a" href="https://tailor-hub.com" target="_blank" className="tailor">Tailor</Text>.</Text>
      <Text>Si quieres contactar conmigo puedes <SocialLink as="a" href="mailto:fran@fnaranjo.dev">escribirme un email</SocialLink> o <SocialLink as="a" href="https://twitter.com/frannaran" target="_blank">seguirme en twitter</SocialLink>.</Text>
      </MainWrapper>
    </Page>
  )
}
