import Image from "next/image";
import Link from "next/link";

const datas = [
  {
    name: "github",
    color: "#181717",
    link: "https://github.com/1-blue",
  },
  {
    name: "bloglovin",
    color: "#000000",
    link: "https://1-blue.github.io",
  },
];

/** 2023/08/13 - <footer>을 감싸는 컴포넌트 - by 1-blue */
const Footer: React.FC = () => {
  return (
    <footer className="bg-sub-900 text-white py-16 space-y-6">
      <ul className="max-w-[1024px] mx-auto flex justify-center items-center space-x-4">
        {datas.map(({ name, color, link }) => (
          <li key={name} className="">
            <Link href={link} target="_blank">
              <Image
                src={`https://cdn.simpleicons.org/${name}/${color}`}
                alt={`${name} 아이콘`}
                width="80"
                height="80"
                className="p-2 rounded-md border-2 bg-white"
                style={{ borderColor: color }}
              />
            </Link>
          </li>
        ))}
      </ul>

      <span className="inline-block w-full text-center font-sub">
        Copyright 2023. 박상은 all rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
