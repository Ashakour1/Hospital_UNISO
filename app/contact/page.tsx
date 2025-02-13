import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Contact Form Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-2xl font-bold text-[#00A651] mb-8">
            SUBMIT A REQUEST
          </h2>
          <form className="space-y-6">
            <div>
              <Input
                placeholder="Enter your name"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div>
              <Input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div>
              <Input
                placeholder="Enter your subject"
                className="w-full p-3 border rounded-md"
              />
            </div>
            <div>
              <Textarea
                placeholder="Write your message"
                className="w-full p-3 border rounded-md min-h-[150px]"
              />
            </div>
            <Button className="w-full bg-[#00A651] hover:bg-[#008c44] text-white py-6">
              Send
            </Button>
          </form>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="w-full h-[400px] bg-gray-100 relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.119763973046!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1645564756836!5m2!1sen!2s"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0"
            />
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
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="font-bold text-xl mb-4">Address</h3>
              <p className="text-gray-600">
                123 Medical Center Drive
                <br />
                New York, NY 10001
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-4">Contact</h3>
              <p className="text-gray-600">
                Phone: +1 (234) 567-8900
                <br />
                Email: info@hospital.com
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-bold text-xl mb-4">Working Hours</h3>
              <p className="text-gray-600">
                Monday - Friday: 9:00 AM - 5:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
