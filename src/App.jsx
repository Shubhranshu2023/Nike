import {
  CustomerReviews,
  Hero,
  PopularProducts,
  SpecialOffer,
  SuperQuality,
  Services,
  Subscribe,
  Footer,
} from "./sections";
import Nav from "./components/Nav";

const App = () => (
  <main className="relative">
    <Nav></Nav>
    <section className="xl:padding-l wide: padding-r padding-b">
      <Hero></Hero>
    </section>
    <section className="padding">
      <PopularProducts></PopularProducts>
    </section>
    <section className="padding">
      <SuperQuality></SuperQuality>
    </section>
    <section className="padding-x py-10">
      <Services></Services>
    </section>
    <section className="padding">
      <SpecialOffer></SpecialOffer>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews></CustomerReviews>
    </section>
    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe></Subscribe>
    </section>
    <section className="bg-black padding-x padding-y pb-8">
      <Footer></Footer>
    </section>
  </main>
);

export default App;
