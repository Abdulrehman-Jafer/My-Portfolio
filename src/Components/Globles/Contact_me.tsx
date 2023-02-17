import { ChangeEvent, FormEvent, useState, RefObject, useRef } from "react"
import emailjs from '@emailjs/browser';
import { toast } from "react-toastify";


const Contact_me = ({ inputRef }: { inputRef: RefObject<HTMLInputElement> }) => {
    const [formData, setFormData] = useState({
        user_name: "",
        user_email: "",
        message: ""
    })
    const [submitting, setSubmitting] = useState(false)

    const changeFormData = (event: ChangeEvent) => {

        const { name, value }: any = event.target
        return setFormData((old) => {
            return { ...old, [name]: value }
        })
    }

    const formRef = useRef<HTMLFormElement>(null);

    const sendEmail = async (event: FormEvent) => {
        setSubmitting(true)
        event.preventDefault()
        await emailjs.sendForm('service_8r2wc4k', 'template_6xpa85q', formRef.current!, 'yZh03GJHdX_U_r3mf')
            .then(res => {
                if (res.status == 200) {
                    toast.success(" Your message has been sent")
                    setSubmitting(false)
                    setFormData({ user_name: "", user_email: "", message: "" })
                }
                else{
                    setSubmitting(false)
                    toast.error("Request time out")
                }
            }).catch(err => {
                console.log(err)
                toast.error("Something went wrong")
                setSubmitting(false)
            })
    };


    return (
        <main>
            <section className='max-w-[800px] w-[100%]' id='scroll'>
                <h6 className='text-3xl text-secondary'>Want to get in touch?</h6>
                <h6 className='text-3xl text-secondary mb-[1rem] '>Drop me a line!</h6>
                <form
                    className='flex flex-col gap-[1rem] text-primary mb-[10rem]'
                    ref={formRef}
                    onSubmit={(event) => sendEmail(event)}>
                    <div className='flex justify-between gap-[1rem] flexWrap'>
                        <div className='w-[100%]'>
                            <p className='mb-[0.5rem]'>Name</p>
                            <input
                                ref={inputRef}
                                className='indent-2 py-[0.5rem] rounded-[0.2rem] w-[100%] outline-third font-serif'
                                type="text"
                                name="user_name"
                                id="name"
                                value={formData.user_name}
                                onChange={(event) => changeFormData(event)}
                                placeholder='Enter Your Name'
                                required />
                        </div>
                        <div className='w-[100%]'>
                            <p className='mb-[0.5rem]'>
                                Email
                            </p>
                            <input
                                className='indent-2 py-[0.5rem] rounded-[0.2rem] w-[100%] outline-third font-serif'
                                type="email"
                                name='user_email'
                                id='email'
                                value={formData.user_email}
                                onChange={(event) => changeFormData(event)}
                                placeholder='Enter Your Email'
                                required />
                        </div>
                    </div>
                    <div>
                        <div
                            className='mb-[0.5rem]'>
                            Your Message
                        </div>
                        <textarea
                            className='w-[100%] indent-2 py-[0.5rem] rounded-[0.2rem] outline-third font-serif'
                            name="message"
                            rows={10}
                            id="textArea"
                            value={formData.message}
                            onChange={(event) => changeFormData(event)}
                            required
                            placeholder='Enter Your Message'>
                        </textarea>
                    </div>
                    <button
                        disabled={submitting}
                        className='flex-none bg-primary w-[100px] text-main [font-weight:600] py-1 rounded-[0.2rem]  hover:text-third hover:scale-[1.05] noBorder'>
                        {submitting ? "Please wait" : "Submit"}
                    </button>
                </form>
            </section>
        </main>
    )
}
export default Contact_me
