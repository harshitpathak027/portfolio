import React, { useState } from "react";
import { useDarkMode } from "./DarkModeContext";
import emailjs from "emailjs-com";


const Contact = () => {

  const { darkMode, setDarkMode } = useDarkMode();
 const inputBg = darkMode ? "bg-slate-900" : "bg-white";
const [form,setform] = useState({
    name:"",
    email:"",
    message:""
})

const handleChange=(e)=>{
    setform({...form,[e.target.name]:e.target.value});
}

const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.send("service_qkwtp4i","template_js8ke8d",{
        name: form.name,
        email: form.email,
        message: form.message,
      },"2rMUI3_1UFz8xXrU9").then(
      () => {
        alert("Message sent successfully 🚀");
        setform({ name: "", email: "", message: "" });
      },
      (error) => {
        alert("Failed to send message 😢");
        console.error(error);
      }

    );
}

    return (
        <>
            <section className="contact-section p-7" id="contact">
                <div className="flex flex-col items-center justify-center gap-3">
                    <h2 className="text-4xl">Contact Me</h2>
                    <p>Feel free to reach out for collaborations or just a friendly hello!</p>
                </div>
            </section>

            <div className="flex flex-col md:flex-row justify-around p-4 gap-10">
                {/* Left side contact info */}
                <div className="flex flex-col gap-6">
                    <a href="mailto:harshitpathak027@gmail.com" className="text-center border border-gray-400 p-6 rounded-lg block hover:bg-gray-50 dark:hover:bg-slate-800" rel="noopener noreferrer">
                        <div>Email</div>
                        <div className="text-gray-500">
                            harshitpathak027@gmail.com
                        </div>
                    </a>

                    <a href="https://wa.me/916395133813" target="_blank" rel="noopener noreferrer" className="text-center border border-gray-400 p-6 rounded-lg block hover:bg-gray-50 dark:hover:bg-slate-800">
                        <div>Whatsapp</div>
                        <div className="text-gray-500">
                            (+91) 6395133813
                        </div>
                    </a>

                    <a href="https://www.linkedin.com/in/harshit-pathak-7914ab348" target="_blank" rel="noopener noreferrer" className="text-center border border-gray-400 p-6 rounded-lg block hover:bg-gray-50 dark:hover:bg-slate-800">
                        <div>Linkedin</div>
                        <div className="text-gray-500">
                            harshit-pathak-7914ab348
                        </div>
                    </a>
                </div>

                {/* Right side form */}
                <form
  onSubmit={handleSubmit}
  className="flex flex-col gap-6 w-full max-w-xl"
>

                <div className="flex flex-col gap-6 w-full max-w-xl">

               
                <div className="relative w-full">
                    <input onChange={handleChange} name="name" required type="text" value={form.name} className={`peer w-full border-2 border-gray-300 px-4 py-4 rounded-md outline-none ${darkMode?"bg-slate-900":"bg-white"}`} />
                    <label className={`absolute left-4 top-1/2 -translate-y-1/2  px-1 pointer-events-none
 text-gray-400 transition-all duration-300 peer-valid:top-0 peer-valid:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:text-orange-500 ${inputBg}`}>Name</label>
                </div>
                <div className="relative w-full">
                    <input placeholder=" " onChange={handleChange} name="email" required type="email" value={form.email}  className={`peer w-full border-2 border-gray-300 px-4 py-4 rounded-md outline-none ${darkMode?"bg-slate-900":"bg-white"}`}  />
                    <label className={`absolute left-4 top-1/2 -translate-y-1/2  px-1 pointer-events-none ${inputBg} 
 text-gray-400 transition-all duration-300 peer-[&:not(:placeholder-shown)]:top-0 peer-[&:not(:placeholder-shown)]:text-sm peer-focus:top-0 peer-focus:text-sm peer-focus:text-orange-500`}>Email</label>
                </div>
                <div className="relative w-full">
                    <textarea onChange={handleChange}
                        required
                        value={form.message}
                        name="message"
                        rows={4}
                        className={`peer w-full border-2  px-4 pt-6 pb-3  rounded-md outline-none resize-none focus:border-orange-500 ${darkMode?"bg-slate-900":"bg-white"}`}
                    />
                    <label
                        className={`
                            absolute left-4 top-6
                             px-1 text-gray-400 ${inputBg}
                            transition-all duration-300 pointer-events-none
                            peer-focus:-translate-y-8 peer-focus:text-sm peer-focus:text-orange-500 
                            peer-valid:-translate-y-8  peer-valid:text-sm
                        `}
                    >
                        Message
                    </label>
                </div>
                 </div>
                   <button
    type="submit"
    className="self-start px-8 py-4 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
  >
    Send Message ✈️
  </button>
</form>

            </div>
        </>
    );
};

export default Contact;
