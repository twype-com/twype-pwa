import { Header } from "@/features/headline/Header/Header";

export default function Home() {
  const fakeContent = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <>
      {fakeContent.map((item) => (
        <p key={item}>{item}</p>
      ))}
    </>
  );
}
