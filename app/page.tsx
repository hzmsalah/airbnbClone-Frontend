import Categories from "./components/Categories";
import PropertyList from "./components/properties/PropertyList";

export default function Home() {
  return (
    <main className="max-w-full mx-auto px-6">
      <Categories/>

      <div>
        <PropertyList/>
      </div>
    </main>
  );
}
