import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Country, State, City } from 'country-state-city';
import Select from 'react-select';

const CreateAccountPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        email: '',
        country: '',
        state: '',
        city: '',
        password: '',
        confirmPassword: '',
    });

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    // Fetch countries data
    useEffect(() => {
        const fetchedCountries = Country.getAllCountries();
        setCountries(
            fetchedCountries.map((country) => ({
                value: country.isoCode,
                label: country.name,
            }))
        );
    }, []);

    // Handle country selection and fetch states
    const handleCountryChange = (selectedCountry) => {
        setFormData({
            ...formData,
            country: selectedCountry.value, // Store isoCode for fetching states
            state: '',
            city: '',
        });

        const fetchedStates = State.getStatesOfCountry(selectedCountry.value);
        setStates(
            fetchedStates.map((state) => ({
                value: state.isoCode,
                label: state.name,
            }))
        );
        setCities([]); // Reset cities when a new country is selected
    };

    // Handle state selection and fetch cities
    const handleStateChange = (selectedState) => {
        setFormData({
            ...formData,
            state: selectedState.value, // Store isoCode for fetching cities
            city: '',
        });

        const fetchedCities = City.getCitiesOfState(formData.country, selectedState.value);
        setCities(
            fetchedCities.map((city) => ({
                value: city.name,
                label: city.name,
            }))
        );
    };

    // Handle city selection
    const handleCityChange = (selectedCity) => {
        setFormData({
            ...formData,
            city: selectedCity.label,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to create account
        toast.success('Successfully created your account!', {
            position: 'top-center',
        });
    };

    return (
        <div className="mx-auto max-w-[50rem] p-6">
            <ToastContainer />
            <h2 className="text-2xl font-semibold text-center mb-4">Create Account</h2>
            <form onSubmit={handleSubmit}>

                {/* First Name and Last Name */}
                <div className="flex space-x-4 mb-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">First Name *</label>
                        <input
                            type="text"
                            name="firstName"
                            value={formData.firstName}
                            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                            className="w-full border border-gray-300 rounded-md p-2 mt-1"
                            placeholder="Enter your first name"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">Last Name *</label>
                        <input
                            type="text"
                            name="lastName"
                            value={formData.lastName}
                            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                            className="w-full border border-gray-300 rounded-md p-2 mt-1"
                            placeholder="Enter your last name"
                            required
                        />
                    </div>
                </div>

                {/* Mobile Number and Email */}
                <div className="flex space-x-4 mb-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">Mobile Number *</label>
                        <input
                            type="text"
                            name="mobileNumber"
                            value={formData.mobileNumber}
                            onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                            className="w-full border border-gray-300 rounded-md p-2 mt-1"
                            placeholder="Enter your mobile number"
                            required
                        />
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">Email *</label>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full border border-gray-300 rounded-md p-2 mt-1"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                </div>

                {/* Country */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Country *</label>
                    <Select
                        options={countries}
                        onChange={handleCountryChange}
                        placeholder="Select Country"
                        required
                    />
                </div>

                {/* State */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">State *</label>
                    <Select
                        options={states}
                        onChange={handleStateChange}
                        placeholder="Select State"
                        isDisabled={!states.length}
                        required
                    />
                </div>

                {/* City */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">City *</label>
                    <Select
                        options={cities}
                        onChange={handleCityChange}
                        placeholder="Select City"
                        isDisabled={!cities.length}
                        required
                    />
                </div>

                {/* Password and Confirm Password */}
                <div className="flex space-x-4 mb-4">
                    <div className="w-1/2 relative">
                        <label className="block text-sm font-medium text-gray-700">Password *</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            name="password"
                            value={formData.password}
                            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                            className="w-full border border-gray-300 rounded-md p-2 mt-1"
                            placeholder="Enter your password"
                            required
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-9 cursor-pointer"
                        >
                            👁️
                        </span>
                    </div>
                    <div className="w-1/2 relative">
                        <label className="block text-sm font-medium text-gray-700">Confirm Password *</label>
                        <input
                            type={showConfirmPassword ? 'text' : 'password'}
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                            className="w-full border border-gray-300 rounded-md p-2 mt-1"
                            placeholder="Confirm your password"
                            required
                        />
                        <span
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            className="absolute right-3 top-9 cursor-pointer"
                        >
                            👁️
                        </span>
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full bg-[#16528f] text-white rounded-md py-2 mt-4"
                >
                    Create Account
                </button>
            </form>
        </div>
    );
};

export default CreateAccountPage;
