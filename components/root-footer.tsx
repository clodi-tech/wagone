import {
  SiFacebook,
  SiInstagram,
  SiLinkedin,
} from "@icons-pack/react-simple-icons";
import { urlInstagram, urlFacebook, urlLinkedin, urlEmail } from "@/lib/consts";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 py-8">
          <div>
            <h2 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              MISSION
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Wagone aims to promote low-carbon transportation means by sharing
              unique travel itineraries and tips to get the best deals.
            </p>
          </div>
          <div>
            <h2 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              CONTACT
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              For any enquiry:
              <br />
              <a href={urlEmail} className="hover:underline">
                contact.wagone@gmail.com
              </a>
            </p>
          </div>
          <Link href="/about">
            <h2 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              ABOUT
            </h2>
            <p className="text-sm sm:text-base leading-relaxed">
              Discover the story behind Wagone and the founder.
            </p>
          </Link>
          <div>
            <h2 className="font-bold text-base sm:text-lg mb-3 sm:mb-4">
              SOCIAL NETWORKS
            </h2>
            <p className="text-sm sm:text-base leading-relaxed mb-2">
              Follow us on social networks.
            </p>
            <div className="flex space-x-6 sm:space-x-4">
              <a href={urlInstagram} className="hover:text-primary">
                <SiInstagram className="h-8 w-8 sm:h-6 sm:w-6" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href={urlFacebook} className="hover:text-primary">
                <SiFacebook className="h-8 w-8 sm:h-6 sm:w-6" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href={urlLinkedin} className="hover:text-primary">
                <SiLinkedin className="h-8 w-8 sm:h-6 sm:w-6" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 sm:pt-8 border-t text-center text-xs sm:text-sm">
          <p>&copy; Wagone 2024</p>
        </div>
      </div>
    </footer>
  );
}
