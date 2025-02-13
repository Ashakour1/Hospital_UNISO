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

      {/* Director's Message */}
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

      {/* Services Grid */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-4 gap-6">
            {[
              { icon: "/icon.png", title: "Emergency Care" },
              { icon: "/icon.png", title: "Laboratory" },
              { icon: "/icon.png", title: "Medical Check Up" },
              { icon: "/icon.png", title: "Pharmacy" },
              { icon: "/icon.png", title: "Ambulance" },
              { icon: "/icon.png", title: "Vaccination" },
              { icon: "/icon.png", title: "Cardiology" },
              { icon: "/icon.png", title: "Dental Care" },
            ].map((service, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow bg-white"
              >
                <CardContent className="p-6">
                  <div className="w-16 h-16 mx-auto mb-4">
                    <Image
                      src={service.icon || "/home.png"}
                      alt={service.title}
                      width={64}
                      height={64}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <h3 className="font-medium text-gray-800">{service.title}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Specialists
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[2, 1, 3].map((doctor) => (
              <Card key={doctor} className="overflow-hidden">
                <div className="relative h-[300px]">
                  <Image
                    src={`/Doc${doctor}.jpg`}
                    alt="Doctor"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="text-center p-6">
                  <div className="flex justify-center gap-2 mb-4">
                    {[1, 2, 3].map((star) => (
                      <div
                        key={star}
                        className="w-2 h-2 rounded-full bg-[#00A651]"
                      />
                    ))}
                  </div>
                  {doctor === 2 && (
                    <>
                      <h3 className="font-bold text-xl mb-2">Dr. Amiin</h3> {/* cspell:ignore Amiin */}
                      <p className="text-gray-600">Director & Surgeon</p>
                    </>
                  )}
                  {doctor === 1 && (
                    <>
                      <h3 className="font-bold text-xl mb-2">Dr. Muna</h3> {/* cspell:ignore Muna */}
                      <p className="text-gray-600">Pediatrician</p>
                    </>
                  )}
                  {doctor === 3 && (
                    <>
                      <h3 className="font-bold text-xl mb-2">Dr. Hussein</h3>
                      <p className="text-gray-600">Oncologist</p>
                    </>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Latest News</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((news) => (
              <Card key={news} className="overflow-hidden bg-white">
                <div className="relative h-[200px]">
                  <Image
                    src={`/news.png`}
                    alt="Medical News"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <p className="text-sm text-[#00A651] mb-2">
                    February 13, 2025
                  </p>
                  <h3 className="font-semibold text-lg mb-3 line-clamp-2">
                    Latest Medical Technology
                  </h3>
                  <p className="text-gray-600 line-clamp-3">
                    Discover the latest advancements in medical technology and
                    how they're improving patient care and treatment outcomes.
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
    </div>
  );
}
