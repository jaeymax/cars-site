import CarCard from "@/components/CarCard";
import { mockCars } from "@/lib/mockData";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bgzinc-50 font-sans dark:bg-blac">
      <main className="flex min-h-screen w-full max-w-7xl flex-col py-16 px-4 bgwhite dark:bg-blac">
        <section>
          <div className="mb-12">
            <h2 className="text-4xl font-bold text- mb-2">
              Featured Vehicles
            </h2>
            <p className="text-gray-600 text-sm md:text-lg">
              Browse our selection of quality cars at great prices
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mockCars.map((car) => (
              <CarCard
                key={car.id}
                make={car.make}
                model={car.model}
                year={car.year}
                price={car.price}
                mileage={car.mileage}
                image={car.image}
                condition={car.condition}
                transmission={car.transmission}
              />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
