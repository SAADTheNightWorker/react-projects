import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import EmailIcon from "@mui/icons-material/Email";
import MapIcon from "@mui/icons-material/Map";
const Contact = () => {
  return (
    <div
      className="h-screen relative flex flex-col items-center 
                 justify-center max-w-full mx-auto z-0"
    >
      <h3
        className="absolute top-10 text-2xl text-gray-500 font-medium
       tracking-[20px] uppercase"
      >
        Contact
      </h3>

      <h3 className="text-3xl text-gray-500 mt-32 font-medium flex flex-col text-center">
        I have got just what you need,
        <span className="underline decoration-yellow-500/40 my-3">
          {" "}
          Lets talk.
        </span>
      </h3>

      <div className="space-y-10 mx-auto  decoration-yellow-500/40 mt-10">
        <div className="flex space-x-5 items-center justify-center">
          <AddIcCallIcon className="text-red-500/40 h-7 w-7 animate-bounce" />
          <p className="text-2xl p-1 border-b-[3px] border-yellow-500/40">
            +92362677598
          </p>
        </div>

        <div className="flex space-x-5 items-center justify-center">
          <EmailIcon className="text-blue-500/40 h-7 w-7 animate-pulse" />
          <p className="text-2xl p-1 border-yellow-500/40 border-b-[3px]">
            saadsahib398@gmail.com
          </p>
        </div>

        <div className="flex space-x-5 items-center justify-center">
          <MapIcon className="text-yellow-500/40 h-7 w-7 animate-ping" />
          <p className="text-2xl border-b-[3px] p-1 border-yellow-500/40">
            123 Devloper Lane
          </p>
        </div>
      </div>

      <form className="flex flex-col space-y-2 w-fit mx-auto my-6">
        <div className="space-x-2">
          <input placeholder="Name" type="text" className="contact_input" />
          <input placeholder="Email" type="email" className="contact_input" />
        </div>

        <input placeholder="Subject" type="text" className="contact_input" />

        <textarea placeholder="Message" className="contact_input" />

        <button
          className="text-lg bg-[#F7AB0A]/40 text-black font-bold
                    py-5 rounded-md hover:bg-[#F7AB0A] transition duration-200"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contact;
