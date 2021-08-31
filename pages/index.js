// react

// next
import Head from "next/head";

// react-icons
import { BiCodeAlt, BiInfoCircle } from "react-icons/bi";

// components
import MainTop from "../components/mainTop";
import Books from "../components/books";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MA - Library</title>
        <meta
          name="description"
          content="Library project developed for The Odin Project's Full Stack JavaScript Course"
        />
      </Head>
      {/* the following will be part of main */}
      <div>
        <MainTop />
      </div>
      <div>
        <div>
          <BiInfoCircle />
        </div>
        <div>
          <BiCodeAlt />
        </div>
      </div>
      <div>
        <Books />
      </div>
    </div>
  );
}
