import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function DoctorsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gray-100">
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl font-bold text-[#00A651]">Our Doctors</h1>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Prof.Dr. Mohamed Amiin",
                specialty: "Director of Hospital & Surgeon",
                image: "/doc2.jpg",
              },
              {
                name: "Dr. Muna Ahmed",
                specialty: "Pediatrician",
                image: "/doc1.jpg",
              },
              {
                name: "Dr. Hussein Abshir",
                specialty: "Oncologist",
                image: "/doc3.jpg",
              },
            ].map((doctor, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-[400px]">
                  <Image
                    src={doctor.image || "/placeholder.svg"}
                    alt={doctor.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="text-center p-6 bg-[#00A651] text-white">
                  <h3 className="font-bold text-xl mb-2">{doctor.name}</h3>
                  <p className="mb-4">{doctor.specialty}</p>
                  <div className="flex justify-center gap-2">
                    {[1, 2, 3].map((dot) => (
                      <div
                        key={dot}
                        className="w-2 h-2 rounded-full bg-white"
                      />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative h-[400px]">
        <div className="absolute inset-0 bg-[#00A651]/90">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="max-w-3xl text-center text-white">
              <p className="text-2xl italic mb-8">
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat."
              </p>
              <div className="flex justify-center gap-2">
                {[1, 2, 3].map((dot) => (
                  <button
                    key={dot}
                    className={`w-3 h-3 rounded-full ${
                      dot === 1 ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-bold text-3xl mb-12">
            BETTER INFORMATION, BETTER HEALTH
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((news, index) => (
              <div key={news} className="flex gap-4 items-start">
                <div className="relative w-32 h-32 flex-shrink-0">
                  <Image
                    src={`/news.png`}
                    alt="Medical News"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-medium mb-2">
                    How to stay healthy: 10 tips for better health
                  </h3>
                  <p className="text-sm text-gray-500">Feb 13, 2025</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-8">
            {[1, 2].map((dot) => (
              <button
                key={dot}
                className={`w-3 h-3 rounded-full ${
                  dot === 1 ? "bg-[#00A651]" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center font-bold text-3xl mb-12">Contact</h2>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Emergency",
                content: "+1 234 567 890",
                icon: Phone,
                color: "bg-[#00A651]",
              },
              {
                title: "Location",
                content: "123 Medical Center Dr",
                icon: MapPin,
                color: "bg-blue-100",
              },
              {
                title: "Email",
                content: "info@hospital.com",
                icon: Mail,
                color: "bg-blue-100",
              },
              {
                title: "Working Hours",
                content: "Mon-Fri: 9AM-5PM",
                icon: Clock,
                color: "bg-blue-100",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`text-center ${item.color} ${
                  index === 0 ? "text-white" : "text-gray-800"
                }`}
              >
                <CardContent className="p-6">
                  <item.icon
                    className={`w-8 h-8 mx-auto mb-4 ${
                      index === 0 ? "text-white" : "text-[#00A651]"
                    }`}
                  />
                  <h3 className="font-bold mb-2">{item.title}</h3>
                  <p className="text-sm">{item.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
