// react

// in-house hooks
import { useLibrary } from "./libraryProvider";

// sass styles

export default function BookTable() {
  const { library } = useLibrary();
  return (
    <div>
      {library.map((book, index) => (
        <p key={index}>{book.title}</p>
      ))}
    </div>
  );
}
