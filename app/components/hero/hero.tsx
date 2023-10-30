import Image from "next/image";
import styles from "./hero.module.scss";

interface HeroProps {
  title: string;
  imgPath: string;
  height?: string;
  titleMaxWidth?: string;
}

const Hero = ({
  title,
  imgPath,
  height = "400px",
  titleMaxWidth = "790px",
}: HeroProps) => {
  return (
    <div
      className={styles.hero}
      style={{
        height: height,
      }}
    >
      <h1
        style={{
          maxWidth: titleMaxWidth,
        }}
      >
        {title}
      </h1>
      <Image
        src={imgPath}
        alt="Picture of the author"
        fill
        style={{
          objectFit: "cover",
          zIndex: "-1",
        }}
      />
    </div>
  );
};

export default Hero;
