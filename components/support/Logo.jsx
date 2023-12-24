import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  const logoWidth = 100;
  const logoHeight = 90;

  return (
    <Link href="/" passHref>

        <Image
          src="/img/logo-removebg-preview.svg"
          width={logoWidth}
          height={logoHeight}
          className="hidden xl:block"
          priority
          alt="Logotipo da Pokemon"
        />
    </Link>
  );

};

export default Logo;
