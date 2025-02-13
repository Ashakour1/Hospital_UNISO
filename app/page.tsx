import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}

      {/* Hero Section */}
      <section className="relative h-[600px]">
        <Image
          src="/home.png"
          alt="Medical Laboratory"
          fill
          className="object-cover brightness-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent">
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
                Leading the Way
                <br />
                in Medical Excellence
              </h1>
              <p className="text-white text-lg mb-8 opacity-90">
                Providing comprehensive healthcare services with
                <br />
                state-of-the-art facilities
              </p>
              <Button className="bg-[#00A651] hover:bg-[#008c44] text-white px-8 py-6 text-lg rounded-md">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Director&apos;s Message */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-gray-800">
                Hospital Director&apos;s Message
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Welcome to our state-of-the-art medical facility. Our commitment
                to excellence in healthcare is reflected in every aspect of our
                operations. We combine cutting-edge technology with
                compassionate care to ensure the best possible outcomes for our
                patients.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Our team of dedicated professionals works tirelessly to maintain
                the highest standards of medical care while ensuring patient
                comfort and satisfaction remain our top priorities.
              </p>
              <Button className="border-2 border-[#00A651] text-[#00A651] hover:bg-[#00A651] hover:text-white px-8 py-6 rounded-md bg-transparent">
                Read More
              </Button>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/director.png"
                alt="Hospital Director"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
