import Image from "next/image";
import { team } from "@/data/team";
import { notFound } from "next/navigation";

export default async function TeamDetail({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const member = team.find((item) => item.id === id);

  if (!member) return notFound();

  return (
    <section className="team-detail">
      <Image
        src={member.image}
        alt={member.name}
        width={200}
        height={200}
        priority
      />

      <h1>{member.name}</h1>
      <h3>{member.role}</h3>
      <p>{member.bio}</p>
    </section>
  );
}
