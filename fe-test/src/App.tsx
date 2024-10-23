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
