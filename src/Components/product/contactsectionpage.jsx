import React from 'react'
import PhoneInput from 'react-phone-number-input/input'
import "react-phone-number-input/style.css";
import { countryList } from '../../data/country.utils';

const Contactsectionpage = () => {
    return (
        <>
            <div className="container py-16 mx-auto ">
            <form
                className="grid gap-5 py-10 bg-white sm:grid-cols-2 sm:place-content-center max-md:px-6 lg:px-6"
            >
                <div className="grid gap-[.25rem]">
                    <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="inp-name">
                        First Name
                    </label>
                    <input
                        className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                        type="text"
                        name="name"
                        id="inp-name"
                        placeholder="Enter your first name" />
    
                </div>
                <div className="grid gap-[.25rem]">
                    <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="inp-surname">
                        Last Name
                    </label>
                    <input
                        className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                        type="text"
                        name="surname"
                        id="inp-surname"
                        placeholder="Enter your last name"
                    />
    
                </div>
                <div className="grid gap-5">
                    <div className="grid gap-[.25rem]">
                        <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="inp-phone">
                            Phone
                        </label>
                        <PhoneInput
                            id="inp-phone"
                            defaultCountry="US"
                            placeholder="Enter phone number"
                            international
                            countryCallingCodeEditable={false}
                            className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                        />
                    </div>
                    <div className="grid gap-[.25rem]">
                        <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="inp-country">
                            Country
                        </label>
                        <div>
                            <select
                                className="w-full rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                                name="country"
                                id="inp-country"
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
                        <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="inp-email">
                            Email
                        </label>
                        <input
                            className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                            type="text"
                            name="email"
                            id="inp-email"
                            placeholder="Enter your email"
                        />
                    </div>
                </div>
                <div className="grid grid gap-[.25rem]">
                    <label className="ml-3 ml-3 text-14 leading-[1.25rem] font-semibold text-primary" htmlFor="inp-message">
                        Message
                    </label>
                    <textarea
                        className="rounded-[1rem] border border-primary/20 px-[1rem] py-[0.75rem] "
                        name="message"
                        id="inp-message"
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

export default Contactsectionpage