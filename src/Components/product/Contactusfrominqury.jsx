import React, { useState } from 'react'
import PhoneInput from 'react-phone-number-input/input'
import "react-phone-number-input/style.css";
import { countryList } from '../../data/country.utils';
import { useParams } from 'react-router-dom';
import { product , SERVICE_INQURY_KEY,TEMPLATE_INQURY_KEY,API_INQURY_KEY } from '../../data/product';
import emailjs from '@emailjs/browser';
import { useLocation } from 'react-router-dom';
const insensitive = {
    firstname: '',
    lastname: '',
    phoneno: '',
    country: '',
    email: '',
    message: ''
}
const Contactusfrominqury = () => {
    const location = useLocation()
    const { size } = location.state || {};
    const { link } = useParams()
    const [fromdata, setFromdata] = useState(insensitive)
    const selectedProduct = product.find(
        (p) => p.link && p.link.toLowerCase() === decodeURIComponent(link).toLowerCase()
    )
    if (!selectedProduct) {
        return <div className="py-10 text-center">Product not found</div>;
    }

    const OnChange = (e) => {
        const { name, value } = e.target;
        setFromdata((prev) => ({
            ...prev,
            [name]: value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault();

        const payload = {
            ...fromdata,
            product: selectedProduct?.title || "N/A",
            price: selectedProduct?.rs || "N/A",
            category: selectedProduct?.category || "N/A",
            subcategory: selectedProduct?.subcategory || "N/A",
            size: size || "N/A"
        };
        console.log(payload)
        emailjs.send(
            SERVICE_INQURY_KEY,
            TEMPLATE_INQURY_KEY,
            payload,
            API_INQURY_KEY
        )
            .then((result) => {
                console.log('Email successfully sent!', result.text);
                alert("Thank you! Your inquiry has been sent.");
                setFromdata(insensitive);
            })
            .catch((error) => {
                console.error('Error sending email:', error.text);
                alert("Something went wrong. Please try again later.");
            });
    };


    return (
        <>
            <div className="container py-16 mx-auto ">
                <form onSubmit={onSubmit}
                    className="grid gap-5 py-10 bg-white sm:grid-cols-2 sm:place-content-center max-md:px-6 lg:px-6"
                >
                    <div className="grid gap-[.25rem]">
                        <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="firstname">
                            First Name
                        </label>
                        <input
                            className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                            type="text"
                            name="firstname"
                            value={fromdata.firstname}
                            onChange={OnChange}
                            id="firstname"
                            placeholder="Enter your first name" />

                    </div>
                    <div className="grid gap-[.25rem]">
                        <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="lastname">
                            Last Name
                        </label>
                        <input
                            className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                            type="text"
                            name="lastname"
                            value={fromdata.lastname}
                            onChange={OnChange}
                            id="lastname"
                            placeholder="Enter your last name"
                        />

                    </div>
                    <div className="grid gap-5">
                        <div className="grid gap-[.25rem]">
                            <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="Whatappnum">
                                whatsapp number
                            </label>
                            <PhoneInput
                                id="Whatappnum"
                                defaultCountry="US"
                                placeholder="Enter phone number"
                                international
                                value={fromdata.phoneno}
                                onChange={(value) =>
                                    setFromdata((prev) => ({
                                        ...prev,
                                        phoneno: value,
                                    }))
                                }
                                countryCallingCodeEditable={false}
                                className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem]"
                            />

                        </div>
                        <div className="grid gap-[.25rem]">
                            <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="country">
                                Country
                            </label>
                            <div>
                                <select
                                    className="w-full rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                                    name="country"
                                    id="country"
                                    value={fromdata.country}
                                    onChange={OnChange}
                                >
                                    <option disabled value="">
                                        Select Country
                                    </option>
                                    {countryList.map((data, index) => (
                                        <option value={data.country} key={`country-${index}`}>
                                            {data.country}
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        <div className="grid gap-[.25rem]">
                            <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="email">
                                Email
                            </label>
                            <input
                                className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                                type="text"
                                name="email"
                                value={fromdata.email}
                                onChange={OnChange}
                                id="email"
                                placeholder="Enter your email"
                            />
                        </div>
                    </div>
                    <div className="grid grid gap-[.25rem]">
                        <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                            name="message"
                            id="message"
                            value={fromdata.message}
                            onChange={OnChange}
                            placeholder="Describe your message..."
                            rows={7}

                        />

                    </div>
                    <div className="mx-auto md:col-span-2">
                        <button className=" bg-[#293b97] px-8 rounded-full uppercase text-white py-2.5 flex  items-center gap-2 border   transform transition duration-500 ease-in-out hover:scale-110 ">Submit</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Contactusfrominqury