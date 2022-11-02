import { NextPage, GetStaticProps } from "next";
import { Layout } from "../components/layouts";

//title: listado de pokemons

const HomePage: NextPage = (props) => {
  console.log({props});
  return (
    <Layout title="Listado de Pokemons">
      <ul>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
        <li>Pokemon</li>
      </ul>
    </Layout>
  );
};



export const getStaticProps: GetStaticProps = async (ctx) => {
  console.log("Hola mundo");
  return {
    props: {
    name: 'Yair'
    },
  };
};

export default HomePage;
