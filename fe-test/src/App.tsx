import { drive } from "googleapis/build/src/apis/drive";
import "./App.css";
import BookStoreCard from "./components/BookStoreCard";
import { useBookStores } from "./hooks/rq/useGetStore";

function App() {
  const { data, isLoading } = useBookStores();

  return (
    <>
      {data?.map(
        ({
          name,
          image,
          books,
          rating,
          establishmentDate,
          website,
          countryCode,
        }) => {
          if (isLoading) {
            return <p>Loading...</p>;
          }

          return (
            <BookStoreCard
              key={name}
              name={name}
              books={books}
              image={image}
              rating={rating}
              establishmentDate={establishmentDate}
              website={website}
              countryCode={countryCode}
            />
          );
        },
      )}
    </>
  );
}

export default App;
