import { Spacer, Text, useTheme } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  const { theme } = useTheme();

  // console.log(theme);

  return (
    <Link
    href='/'
      style={{
        display: "flex",
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "start",
        padding: "0px, 20px",
        backgroundColor: theme?.colors.gray50.value,
        // backgroundColor: '#11181C'
      }}
    >
      <Image
        alt="icono de la aplicacion"
        width={70}
        height={70}
        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
      />
      <Text color="white" h2>
        P
      </Text>
      <Text color="white" h3>
        okemon
      </Text>
      <Spacer css={{ flex: 1 }} />
      <Text color="white">Favoritos</Text>
    </Link>
  );
};
