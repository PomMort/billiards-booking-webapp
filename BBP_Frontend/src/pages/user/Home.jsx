import { useLoaderData } from "react-router-dom";
import Clubs from "../../components/Clubs.jsx";
import { Container, Heading } from "@chakra-ui/react";

function Home() {
  const clubs = useLoaderData();
  const mostRatedClubs = clubs.sort((a, b) => b.rating - a.rating).slice(0, 4);
  const mostBookedClubs = clubs
    .sort((a, b) => b.numberOfBooking - a.numberOfBooking)
    .slice(0, 4);
  const mostReviewedClubs = clubs
    .sort((a, b) => b.numberOfRating - a.numberOfRating)
    .slice(0, 4);

  return (
    <Container maxW="1200px" as="main" py={10}>
      <Heading as="h2" size="md" mb={5}>
        Clubs được đánh giá cao nhất
      </Heading>
      <Clubs clubs={mostRatedClubs} />
      <Heading as="h2" size="md" mb={5} mt={10}>
        Clubs được đặt nhiều nhất
      </Heading>
      <Clubs clubs={mostBookedClubs} />
      <Heading as="h2" size="md" mb={5} mt={10}>
        Clubs được review nhiều nhất
      </Heading>
      <Clubs clubs={mostReviewedClubs} />
    </Container>
  );
}

export default Home;