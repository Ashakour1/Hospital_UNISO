import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h1 className="text-4xl font-bold text-[#00A651] mb-6">
              WE ARE CARE YOU
            </h1>
            <p className="text-gray-600 leading-relaxed">
              Our specialized healthcare is designed to meet your unique needs.
              With a staff of expert medical professionals and state-of-the-art
              facilities, we provide comprehensive care that puts your health
              and comfort first. Our commitment to excellence ensures you
              receive the highest quality treatment in a welcoming environment.
            </p>
          </div>
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about.png"
              alt="Our Medical Team"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="relative h-[400px]">
        <Image
          src="/home.png"
          alt="Medical Background"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#00A651]/90">
          <div className="container mx-auto px-4 h-full flex items-center justify-center">
            <div className="max-w-3xl text-center text-white">
              <p className="text-2xl italic mb-8">
                "Our mission is to provide exceptional healthcare services with
                compassion and expertise. We are committed to maintaining the
                highest standards of medical care while ensuring patient comfort
                and satisfaction."
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
          <h2 className="text-center font-bold text-2xl mb-12">
            BETTER INFORMATION, BETTER HEALTH
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 4 }).map((_, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={`/news.png`}
                    alt="Medical News"
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <p className="text-sm text-[#00A651] mb-2">
                    February 13, 2025
                  </p>
                  <h3 className="font-medium line-clamp-2">
                    Latest Medical Technology Breakthrough
                  </h3>
                </CardContent>
              </Card>
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

      {/* Contact Info Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-2xl font-bold mb-12">Contact</h2>
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

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Our Mission",
                description:
                  "To provide exceptional healthcare with compassion and expertise.",
              },
              {
                title: "Our Vision",
                description:
                  "To be the leading healthcare provider, recognized for excellence.",
              },
              {
                title: "Our Values",
                description:
                  "Integrity, compassion, excellence, and patient-centered care.",
              },
            ].map((value, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#00A651] mb-4">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
