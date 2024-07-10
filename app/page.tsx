import Link from "next/link";

export default function Home() {
  return (
    <div>
      <div>news feeds</div>
      <Link href="/stories/vazha"> vazhas story</Link>
    </div>
  );
}
