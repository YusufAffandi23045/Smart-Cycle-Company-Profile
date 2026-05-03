import Link from "next/link";
import Image from "next/image";
import { team } from "@/data/team";

export default function Home() {
  return (
    <section className="team-page">
      <h1>Tim Kami</h1>

      <div className="team-list">
        {team.map((member) => (
          <Link href={`/team/${member.id}`} key={member.id} className="team-card">
            <div>
              <Image
                src={member.image}
                alt={member.name}
                width={200}
                height={200}
              />
              <h3>{member.name}</h3>
              <p>{member.role}</p>
              <p>{member.bio}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
