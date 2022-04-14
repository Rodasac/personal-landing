import Image from "next/image";

import styles from "./ItemCase.module.css";

type ItemCaseProps = {
  imageUrl: string;
  title: string;
  skills: string[];
  url: string;
};

const ItemCase: React.FC<ItemCaseProps> = ({
  imageUrl,
  title,
  skills,
  url,
}) => {
  return (
    <div className={styles.itemCase}>
      <div className={styles.itemImage}>
        <Image
          src={imageUrl}
          alt={`${title} image cover`}
          objectFit="cover"
          layout="fill"
        />
      </div>
      <h3>{title}</h3>
      <p>{skills.join(", ")}</p>
      <a href={url} rel="noreferrer noopener" target="_blank">
        {url}
      </a>
    </div>
  );
};

export default ItemCase;
