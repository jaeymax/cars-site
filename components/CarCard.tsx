import Image from "next/image";

interface CarCardProps {
  make: string;
  model: string;
  year: number;
  price: number;
  mileage: number;
  image: string;
  condition: string;
  transmission: string;
}

export default function CarCard({
  make,
  model,
  year,
  price,
  mileage,
  image,
  condition,
  transmission,
}: CarCardProps) {
  return (
    <div className="bg-whit rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative w-full h-48 cursor-pointer">
        <Image
          src={image}
          alt={`${year} ${make} ${model}`}
          fill
          className="object-cover"
        />
        {/* <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {condition}
        </div> */}
         <div className="absolute bottom-2 left-2 bg-gray text-white px-2 py-1 rounded-md text-sm">
         <span className="text-gray-400 mr-2" >Price</span> <span className="font-semibold" > ₵{price.toLocaleString()}</span>
          
        </div>
      </div>

      <div className="p-5">
        <h3 className="text-lg font-bold text-gray-300 mb-1">
          {year} {make} {model}
        </h3>

        {/* <p className="text-lg font-bold text-white mb-4">
        ₵{price.toLocaleString()}
        </p> */}

        <div className="space-y-2 mb-4 text-sm text-gray-500">
          <div className="flex justify-between">
            <span>Mileage:</span>
            <span className="font-semibold">
              {mileage.toLocaleString()} miles
            </span>
          </div>
          <div className="flex justify-between">
            <span>Transmission:</span>
            <span className="font-semibold">{transmission}</span>
          </div>
        </div>

        {/* <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold">
          View Details
        </button> */}
      </div>
    </div>
  );
}
