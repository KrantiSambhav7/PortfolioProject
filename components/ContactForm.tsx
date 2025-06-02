"use client"
import React, { useState } from 'react'
import { toast } from 'sonner';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    async function handleForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const { name, email, message } = formData;

        if (!name || !email || !message) {
            toast.error("Please fill all the fields");
            return;
        }

        // Simulate form submission
        setTimeout(() => {
            toast.success("Form Submitted");
            // Reset form fields
            setFormData({
                name: "",
                email: "",
                message: ""
            });
        }, 1000);
    }

    return (
        <form
            id='form'
            onSubmit={handleForm}
            className='py-10 text-neutral-300 flex flex-col gap-4 max-w-lg mx-auto'
        >
            <div className='flex flex-col gap-2 mt-2'>
                <label htmlFor="name" className='text-sm font-bold'>Full Name</label>
                <input
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    type="text"
                    placeholder='David Goggins'
                    className='text-sm py-2 border border-neutral-400 px-1 rounded-lg tracking-tight focus:outline-none focus:ring-2 focus:ring-primary'
                />
            </div>
            <div className='flex flex-col gap-2 mt-2'>
                <label htmlFor="email" className='text-sm font-bold'>Email</label>
                <input
                    id='email'
                    name='email'
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    type="text"
                    placeholder='goggins@gmail.com'
                    className='focus:ring-2 focus:ring-primary text-sm py-2 border border-neutral-400 px-1 rounded-lg tracking-tight'
                />
            </div>
            <div className='flex flex-col gap-2 mt-2'>
                <label htmlFor="message" className='text-sm font-bold'>Message</label>
                <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder='Hi I am interested in ....'
                    className='focus:ring-2 focus:ring-primary text-sm py-2 border border-neutral-400 px-1 rounded-lg tracking-tight'
                ></textarea>
            </div>
            <button
                type="submit"
                className='bg-secondary text-neutral-300 py-1  mt-2 rounded-lg w-[10rem] mx-auto hover:bg-neutral-600 text-md'
            >
                Submit Form
            </button>
        </form>
    );
}

export default ContactForm;
