import BoxForm from "../components/boxFormComponents/BoxForm";

export default function Box(){
  return (
    <section className="w-full bg-black h-[100vh] py-4 overflow-scroll">
      <h1 className="text-4xl text-center title md:text-4xl lg:text-5xl">New Box Form</h1>
      <BoxForm />
    </section>
  );
};