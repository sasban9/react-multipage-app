import QuoteList from "../components/quotes//QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Sasban", text: "Learning NODE is great!" },
];

const AllQuotes = () => {
  return (
    <section>
      {/* <h1>All Quotes Page</h1> */}
      <QuoteList quotes={DUMMY_QUOTES} />
    </section>
  );
};

export default AllQuotes;
