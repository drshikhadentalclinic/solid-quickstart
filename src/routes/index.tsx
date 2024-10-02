import { Title } from "solid-start";
import Counter from "~/components/Counter";

export default function Home() {
  return (
    <main>
      <Title>Dr. Shikha's Dental Clinic</Title>
      <h1>Dr. Shikha's Dental Clinic!</h1>
      <Counter />
      <p>
        Whatsapp Now{" "}
        <a href="https://wa.me/919560222949" target="_blank">
          Click Here!
        </a>{" "}
        to Book your appointment.
      </p>
    </main>
  );
}
