import team1 from "../../assets/img/team1.webp";
import team2 from "../../assets/img/team2.webp";
import team3 from "../../assets/img/team3.webp";
import team4 from "../../assets/img/team4.webp";
import TeamCard from "./TeamCard";
import { Link } from "react-router-dom";
export default function OurTeam() {
  return (
    <>
      <div className="bg-stone-900 py-20 overflow-hidden">
        <div className="mx-6 md:mx-10 lg:mx-30 xl:mx-45 text-white">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-5">Meet Our Team</h2>
            <p className="text-stone-400">
              Our team is dedicated to providing the best experience for our
              guests.
            </p>
          </div>
          {/* Team members would be listed here */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10 mt-20">
            <TeamCard
              name="John Doe"
              position="Executive Chef"
              imageUrl={team1}
            />

            <TeamCard
              name="Mike Johnson"
              position="Pastry Chef"
              imageUrl={team2}
            />
            <TeamCard
              name="Clyde Smith"
              position="Sous Chef"
              imageUrl={team4}
            />
            <TeamCard
              name="Emily Davis"
              position="Line Cook"
              imageUrl={team3}
            />
          </div>

          <p className="text-center mt-10 text-stone-400">
            Meet the passionate team behind every flavour and experience{" "}
            <Link
              to="/about"
              className="text-white underline hover:text-amber-300"
            >
              Meet Our Team
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
