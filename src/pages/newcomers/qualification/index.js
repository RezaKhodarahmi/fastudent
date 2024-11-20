import React from 'react'
import { useState } from 'react';

// Components
import { toast, Toaster } from 'react-hot-toast';

function Qualification() {
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        residencyStatus: '',
        email: '',
        phoneNumber: '',
        englishLevel: '',
        ageRange: '',
        province: '',
        city: '',
        fieldOfActivity: '',
        engineeringMajor: '',
        engineeringActivity: '',
        engineeringExperience: '',
        engineeringLicense: '',
        desiredPosition: '',
        architectField: '',
        architectWorkHistory: '',
        architectLicense: '',
        architectSoftware: '',
        projectManagementField: '',
        projectManagementDesiredPosition: '',
        projectManagementExperienceOutsideCanada: '',
        projectManagementExperienceInsideCanada: '',
        technicianField: '',
        technicianExperienceOutsideCanada: '',
        technicianExperienceInsideCanada: '',
    });

    const validateAndNextStep = (e) => {
        e.preventDefault(); // Prevent default button behavior

        const nameRegex = /^[a-zA-Z\u0600-\u06FF\s]{2,50}$/; // Supports Latin and Persian characters, 2-50 chars
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Standard email regex
        const phoneRegex = /^\d{10,15}$/; // Accepts 10-15 digits for phone number

        let isValid = true;

        // Validate First Name
        if (!formData.firstName.trim() || !nameRegex.test(formData.firstName)) {
            toast.error("لطفاً یک نام معتبر وارد کنید.", { position: "bottom-center" });
            isValid = false;
        }

        // Validate Last Name
        if (!formData.lastName.trim() || !nameRegex.test(formData.lastName)) {
            toast.error("لطفاً یک نام خانوادگی معتبر وارد کنید.", { position: "bottom-center" });
            isValid = false;
        }

        // Validate Email
        if (!formData.email.trim() || !emailRegex.test(formData.email)) {
            toast.error("لطفاً یک ایمیل معتبر وارد کنید.", { position: "bottom-center" });
            isValid = false;
        }

        // Validate Phone Number
        if (!formData.phoneNumber.trim() || !phoneRegex.test(formData.phoneNumber)) {
            toast.error("لطفاً یک شماره تلفن معتبر وارد کنید.", { position: "bottom-center" });
            isValid = false;
        }

        // If all validations pass
        if (isValid) {
            toast.success("اطلاعات کامل است", { position: "bottom-center" });
            nextStep();
        }
    };

    const canadaLocations = {
        "Ontario": [
            "Toronto", "Ottawa", "Mississauga", "Brampton", "Hamilton",
            "London", "Markham", "Kingston", "Windsor", "Sudbury",
            "Thunder Bay", "Peterborough", "Barrie", "Sarnia", "Guelph",
            "Kitchener", "Waterloo", "Cambridge", "Niagara Falls", "St. Catharines",
            "Oakville", "Burlington"
        ],
        "Quebec": [
            "Montreal", "Quebec City", "Laval", "Gatineau", "Longueuil",
            "Sherbrooke", "Saguenay", "Trois-Rivières", "Drummondville",
            "Saint-Jérôme", "Granby", "Shawinigan", "Blainville", "Châteauguay",
            "Saint-Hyacinthe", "Saint-Jean-sur-Richelieu", "Repentigny"
        ],
        "British Columbia": [
            "Vancouver", "Victoria", "Surrey", "Burnaby", "Richmond",
            "Kelowna", "Abbotsford", "Langley", "Nanaimo", "Kamloops",
            "Chilliwack", "Maple Ridge", "Prince George", "New Westminster",
            "North Vancouver", "Coquitlam", "Port Coquitlam", "White Rock"
        ],
        "Alberta": [
            "Calgary", "Edmonton", "Red Deer", "Lethbridge", "St. Albert",
            "Medicine Hat", "Grande Prairie", "Airdrie", "Spruce Grove",
            "Okotoks", "Leduc", "Fort Saskatchewan"
        ],
        "Manitoba": [
            "Winnipeg", "Brandon", "Steinbach", "Thompson", "Portage la Prairie",
            "Selkirk", "Winkler", "Morden", "Dauphin"
        ],
        "Saskatchewan": [
            "Saskatoon", "Regina", "Prince Albert", "Moose Jaw",
            "North Battleford", "Yorkton", "Swift Current", "Estevan"
        ],
        "Nova Scotia": [
            "Halifax", "Sydney", "Truro", "New Glasgow", "Glace Bay",
            "Dartmouth", "Bridgewater", "Kentville"
        ],
        "New Brunswick": [
            "Moncton", "Saint John", "Fredericton", "Dieppe", "Riverview",
            "Miramichi", "Bathurst", "Edmundston"
        ],
        "Newfoundland and Labrador": [
            "St. John's", "Corner Brook", "Gander", "Mount Pearl", "Paradise",
            "Grand Falls-Windsor", "Conception Bay South", "Happy Valley-Goose Bay"
        ],
        "Prince Edward Island": [
            "Charlottetown", "Summerside", "Stratford", "Cornwall"
        ],
        "Northwest Territories": [
            "Yellowknife", "Inuvik", "Hay River", "Fort Smith", "Norman Wells"
        ],
        "Yukon": [
            "Whitehorse", "Dawson City", "Watson Lake", "Haines Junction"
        ],
        "Nunavut": [
            "Iqaluit", "Rankin Inlet", "Arviat", "Cambridge Bay", "Pond Inlet"
        ]
    };

    // Define nextStep and prevStep outside the switch-case
    const nextStep = () => setStep((prevStep) => prevStep + 1);

    const prevStep = () => {
        setStep((prevStep) => {
            const newStep = prevStep - 1;
    
            // Reset fields for specific steps
            switch (newStep) {
                case 1:
                    setFormData((prevData) => ({
                        ...prevData,
                        englishLevel: ""
                    }));
                    break;
    
                case 2:
                    setFormData((prevData) => ({
                        ...prevData,
                        ageRange: "",
                        province: "",
                        city: ""
                    }));
                    break;
    
                case 3:
                    setFormData((prevData) => ({
                        ...prevData,
                        fieldOfActivity: ""
                    }));
                    break;
    
                case 4:
                    setFormData((prevData) => {
                        const resetData = { ...prevData };
                        if (prevData.fieldOfActivity === "Engineering") {
                            resetData.engineeringMajor = ""; // Reset engineering major
                        } else if (prevData.fieldOfActivity === "Architect") {
                            resetData.architectField = ""; // Reset architect field
                        } else if (prevData.fieldOfActivity === "Project Management") {
                            resetData.projectManagementField = ""; // Reset project management field
                        } else if (prevData.fieldOfActivity === "Technician") {
                            resetData.technicianField = ""; // Reset technician field
                            resetData.otherTechnicianField = ""; // Reset "سایر" input field
                        }
                        return resetData;
                    });
                    break;
    
                case 5: // New case for engineering majors
                    setFormData((prevData) => ({
                        ...prevData,
                        engineeringMajor: "" // Reset engineering major field
                    }));
                    break;
    
                default:
                    break;
            }
    
            return newStep;
        });
    };
    
    

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const renderStep = () => {
        switch (step) {
            case 1:
                return (
                    <>
                        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '10%' }} >10%</div>
                        </div>

                        <div className='row'>
                            {/* First Name */}
                            <div className='col-6 mb-4'>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="نام"
                                    className='form-control form-control-lg'
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Last Name */}
                            <div className='col-6 mb-4'>
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="نام خانوادگی"
                                    className='form-control form-control-lg'
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Email */}
                            <div className='col-6 mb-4'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="ایمیل"
                                    className='form-control form-control-lg'
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Phone Number */}
                            <div className='col-6 mb-4'>
                                <input
                                    type="tel"
                                    name="phoneNumber"
                                    placeholder="شماره تلفن همراه"
                                    className='form-control form-control-lg'
                                    value={formData.phoneNumber}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        {/* Next */}
                        <div className='row justify-content-end mt-4'>
                            <div className='col-md-4'>
                                <button
                                    className='FNV-Btn BtnPrimary BtnMedium w-100'
                                    onClick={validateAndNextStep}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </>
                );
            case 2:
                const englishLevels = [
                    { value: "کمتر از CLB 4", label: "کمتر از CLB 4" },
                    { value: "CLB 5 تا CLB 7", label: "CLB 5 تا CLB 7" },
                    { value: "بیشتر از CLB 7 و کمتر از CLB 10", label: "بیشتر از CLB 7 و کمتر از CLB 10" },
                    { value: "بیشتر از CLB 10", label: "بیشتر از CLB 10" }
                ];

                const validateAndGoToNextStep = () => {
                    if (!formData.englishLevel) {
                        // Show error toast and prevent going to the next step
                        toast.error("لطفاً سطح زبان انگلیسی خود را انتخاب کنید.", { position: "bottom-center" });
                        return; // Prevent navigation
                    }

                    // Proceed to the next step if validation passes
                    nextStep();
                };

                return (
                    <>
                        <div
                            className="progress"
                            role="progressbar"
                            aria-label="Animated striped example"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: '50px' }}
                        >
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated"
                                style={{ width: '20%' }}
                            >
                                20%
                            </div>
                        </div>

                        <div className='row'>
                            {/* English Level */}
                            <div className='col-6 mb-4'>
                                <label className='LabelMain'>سطح زبان انگلیسی شما :</label>

                                <div>
                                    {englishLevels.map((level, index) => (
                                        <div key={index}>
                                            <input
                                                type="radio"
                                                id={`englishLevel-${index}`}
                                                name="englishLevel"
                                                value={level.value}
                                                checked={formData.englishLevel === level.value}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor={`englishLevel-${index}`}>{level.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Conditional Warning Message */}
                        {formData.englishLevel === "کمتر از CLB 4" && (
                            <p className="FNV-InfoBox-Danger">
                                پیش مشخص کردن فاکتورهای دیگر، باید ابتدا سطح زبان خود را تقویت کنید. لطفا از طریق کالج ITD ونکوور برای این منظور اقدام بفرمایید.
                            </p>
                        )}

                        {/* Conditional Warning Message */}
                        {(formData.englishLevel === "کمتر از CLB 4" ||
                            formData.englishLevel === "CLB 5 تا CLB 7" ||
                            formData.englishLevel === "بیشتر از CLB 7 و کمتر از CLB 10") && (
                                <p className="FNV-InfoBox-Warning">
                                    آیا می‌دانستید فناوران در همکاری با کالج ITD کانادا (مستقر در ونکوور) دوره‌های تقویت زبان انگلیسی به صورت تخصصی مطابق با فیلد کاری شما برگزار می‌کند.
                                </p>
                            )}

                        <p className='FNV-InfoBox-Default'>
                            زبان انگلیسی مهمترین اسکیل برای موفقیت مهاجران در کانادا است. حتی اگر لایسنس و سرتیفیکیت‌های حوزه شغلی خود را دریافت کرده باشید و از سابقه کار خوبی هم برخودار باشید، بدون داشتن دانش قوی زبان انگلیسی، شانس موفقیت شما در کانادا به شدت کاهش می‌یابد.
                        </p>

                        {/* Next & Previous */}
                        <div className='row justify-content-between mt-4'>
                            <div className='col-md-4'>
                                <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>Previous</button>
                            </div>

                            <div className='col-md-4'>
                                <button
                                    className='FNV-Btn BtnPrimary BtnMedium w-100'
                                    onClick={validateAndGoToNextStep}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </>
                );

            //return <button onClick={nextStep}>Next</button>; // Skip if not Work Permit
            case 3:
                const ageRanges = [
                    { value: "Under 30", label: "کمتر از 30 سال" },
                    { value: "30-35", label: "30-35 سال" },
                    { value: "35-40", label: "35-40 سال" },
                    { value: "40-45", label: "40-45 سال" },
                    { value: "45-50", label: "45-50 سال" },
                    { value: "50+", label: "+50 سال" }
                ];

                const validateCase3AndNextStep = () => {
                    if (!formData.ageRange) {
                        toast.error("لطفاً محدوده سنی خود را انتخاب کنید.", { position: "bottom-center" });
                        return;
                    }

                    if (!formData.province) {
                        toast.error("لطفاً استان محل زندگی خود را انتخاب کنید.", { position: "bottom-center" });
                        return;
                    }

                    if (!formData.city) {
                        toast.error("لطفاً شهر محل زندگی خود را انتخاب کنید.", { position: "bottom-center" });
                        return;
                    }

                    // Proceed to the next step if all fields are valid
                    nextStep();
                };

                return (
                    <>
                        <div
                            className="progress"
                            role="progressbar"
                            aria-label="Animated striped example"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: '50px' }}
                        >
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated"
                                style={{ width: '30%' }}
                            >
                                30%
                            </div>
                        </div>

                        <div className='row'>
                            {/* Age Range */}
                            <div className='col-12 mb-2'>
                                <label className='LabelMain'>محدوده سنی :</label>

                                <div>
                                    {ageRanges.map((range, index) => (
                                        <div key={index}>
                                            <input
                                                type="radio"
                                                id={`ageRange-${range.value}`}
                                                name="ageRange"
                                                value={range.value}
                                                checked={formData.ageRange === range.value}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor={`ageRange-${range.value}`}>{range.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Province */}
                            <div className='col-12 mb-4'>
                                <label htmlFor="province">استان محل زندگی</label>
                                <select
                                    name="province"
                                    id="province"
                                    className='form-control form-control-lg'
                                    value={formData.province}
                                    onChange={handleChange}
                                >
                                    <option value="">انتخاب استان</option>
                                    {Object.keys(canadaLocations).map((province) => (
                                        <option key={province} value={province}>{province}</option>
                                    ))}
                                </select>
                            </div>

                            {/* City */}
                            <div className='col-12 mb-4'>
                                <label htmlFor="city">شهر محل زندگی</label>
                                <select
                                    name="city"
                                    id="city"
                                    className='form-control form-control-lg'
                                    value={formData.city}
                                    onChange={handleChange}
                                >
                                    <option value="">انتخاب شهر</option>
                                    {formData.province && canadaLocations[formData.province].map((city) => (
                                        <option key={city} value={city}>{city}</option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Next & Previous */}
                        <div className='row justify-content-between mt-4'>
                            <div className='col-md-4'>
                                <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>Previous</button>
                            </div>

                            <div className='col-md-4'>
                                <button
                                    className='FNV-Btn BtnPrimary BtnMedium w-100'
                                    onClick={validateCase3AndNextStep}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </>
                );
            case 4:
                const fieldOfActivityOptions = [
                    { id: "fieldOfActivity-Engineering", value: "Engineering", label: "مهندسی" },
                    { id: "fieldOfActivity-Architect", value: "Architect", label: "معماری" },
                    { id: "fieldOfActivity-ProjectManagement", value: "Project Management", label: "مدیریت پروژه" },
                    { id: "fieldOfActivity-Technician", value: "Technician", label: "تکنسین" },
                    { id: "fieldOfActivity-Accounting", value: "Accounting", label: "حسابداری" }
                ];

                const validateCase4AndNextStep = () => {
                    if (!formData.fieldOfActivity) {
                        toast.error("لطفاً زمینه فعالیت خود را انتخاب کنید.", { position: "bottom-center" });
                        return; // Prevent navigation if validation fails
                    }

                    // Proceed to the next step if validation passes
                    nextStep();
                };

                return (
                    <>
                        <div
                            className="progress"
                            role="progressbar"
                            aria-label="Animated striped example"
                            aria-valuenow="75"
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: '50px' }}
                        >
                            <div
                                className="progress-bar progress-bar-striped progress-bar-animated"
                                style={{ width: '40%' }}
                            >
                                40%
                            </div>
                        </div>

                        <div className='row'>
                            {/* Field of Activity */}
                            <div className='col-12 mb-2'>
                                <label className='LabelMain'>زمینه فعالیت مورد نظر در کانادا:</label>

                                <div>
                                    {fieldOfActivityOptions.map((option) => (
                                        <div key={option.id}>
                                            <input
                                                type="radio"
                                                id={option.id}
                                                name="fieldOfActivity"
                                                value={option.value}
                                                checked={formData.fieldOfActivity === option.value}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor={option.id}>{option.label}</label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Conditional Warning Messages */}
                        {formData.fieldOfActivity === "Engineering" && (
                            <p className="FNV-InfoBox-Default">
                                مهندسی در کانادا فقط شامل «طراحی، آنالیز و محاسبات» است. اگر فعالیت قبلی شما در این سه حوزه قرار ندارد، شما همچنان می‌توانید برای «لایسنس مهندسی» و فعالیت به عنوان مهندس اقدام کنید، اما آزمون‌های متعددی در مقابل شما قرار خواهد داشت. برای مثال، کارهای کارگاهی، مدیریت پروژه و … در دسته فعالیت‌های مهندسی قرار نمی‌گیرد.
                            </p>
                        )}

                        {formData.fieldOfActivity === "Architect" && (
                            <p className="FNV-InfoBox-Default">
                                 معماری در کانادا به معنای برنامه‌ریزی، طراحی و نظارت بر ساخت‌وساز ساختمان‌ها و فضاهای فیزیکی است. برای فعالیت به عنوان معمار و کسب «لایسنس معماری» در کانادا، شما باید تحصیلات تخصصی معماری داشته و در آزمون‌های لایسنس شرکت کنید. کارهای کارگاهی و اجرایی ساخت، جزو حوزه معماری محسوب نمی‌شوند.
                            </p>
                        )}

                        {formData.fieldOfActivity === "Project Management" && (
                            <p className="FNV-InfoBox-Default">
                                مطابق با تعریف، مدیریت پروژه فرآیند رهبری یک تیم برای دستیابی به تمام اهداف پروژه در چارچوب محدودیت‌های داده شده است.
                            </p>
                        )}

                        {formData.fieldOfActivity === "Technician" && (
                            <p className="FNV-InfoBox-Default">
                                مطابق با تعریف، تکنسین فنی فردی است که سابقه کار اجرایی (به عبارتی، کار یدی) دارد. بعضی از مشاغل فنی در کانادا نظام‌مند هستند و برای فعالیت نیاز به دریافت لایسنس دارید.
                            </p>
                        )}

                        {formData.fieldOfActivity === "Accounting" && (
                            <p className="FNV-InfoBox-Default">
                                حسابداری حرفه‌ای است که شامل ثبت، طبقه‌بندی و گزارش‌گیری از معاملات مالی و اقتصادی یک نهاد است. در کانادا، برخی از حوزه‌های حسابداری به طور نظام‌مند نیازمند دریافت مدارک حرفه‌ای و عضویت در نهادهای معتبر هستند، تا فرد بتواند به عنوان حسابدار رسمی فعالیت کند.
                            </p>
                        )}

                        {/* Next & Previous */}
                        <div className='row justify-content-between mt-4'>
                            <div className='col-md-4'>
                                <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                    Previous
                                </button>
                            </div>

                            <div className='col-md-4'>
                                <button
                                    className='FNV-Btn BtnPrimary BtnMedium w-100'
                                    onClick={validateCase4AndNextStep}
                                >
                                    Next
                                </button>
                            </div>
                        </div>
                    </>
                );

            case 5:
                if (formData.fieldOfActivity === 'Engineering') {
                    const engineeringMajors = [
                        "مهندسی کشاورزی",
                        "مهندسی مکانیک",
                        "مهندسی الکترونیک",
                        "مهندسی عمران و سازه",
                        "مهندسی شیمی",
                        "مهندسی صنایع",
                        "مهندسی زمین شناسی",
                        "مهندسی متالورژی (مواد)",
                        "مهندسی معدن",
                        "مهندسی هوافضا",
                        "مهندسی نفت",
                        "مهندسی نرم افزار",
                        "مهندسی محیط زیست"
                    ];

                    const validateCase5EngineeringAndNextStep = () => {
                        if (!formData.engineeringMajor) {
                            toast.error("لطفاً گرایش مهندسی خود را انتخاب کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '50%' }} >50%</div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>گرایش مهندسی:</label>

                                    <div className='row'>
                                        {engineeringMajors.map((major, index) => (
                                            <div className='col-4' key={index}>
                                                <input
                                                    type="radio"
                                                    id={`engineeringMajor-${index}`}
                                                    name="engineeringMajor"
                                                    value={major}
                                                    checked={formData.engineeringMajor === major}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`engineeringMajor-${index}`}>{major}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase5EngineeringAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Architect') {
                    const architectFields = [
                        { value: "Interior Designer", label: "Interior Designer" },
                        { value: "Small Building Architect", label: "Small Building Architect" },
                        { value: "Landscape and Urban Design", label: "Landscape and Urban Design" },
                        { value: "Architects", label: "Architects" }
                    ];

                    const validateCase5ArchitectAndNextStep = () => {
                        if (!formData.architectField) {
                            toast.error("لطفاً حوزه فعالیت خود را انتخاب کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '50%' }}
                                >
                                    50%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>حوزه فعالیت:</label>

                                    <div>
                                        {architectFields.map((field, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={`architectField-${index}`}
                                                    name="architectField"
                                                    value={field.value}
                                                    checked={formData.architectField === field.value}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`architectField-${index}`}>{field.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase5ArchitectAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Project Management') {
                    const projectManagementFields = [
                        {
                            value: "پروژه‌های پیش‌بینی‌پذیر (Predictive)- ساختمانی و صنعتی",
                            label: "پروژه‌های پیش‌بینی‌پذیر (Predictive) - ساختمانی و صنعتی"
                        },
                        {
                            value: "پروژه‌های منعطف (Agile )- مارکتینگ و فناوری اطلاعات (IT)",
                            label: "پروژه‌های منعطف (Agile) - مارکتینگ و فناوری اطلاعات (IT)"
                        }
                    ];

                    const validateCase5ProjectManagementAndNextStep = () => {
                        if (!formData.projectManagementField) {
                            toast.error("لطفاً زمینه فعالیت خود را انتخاب کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '50%' }}
                                >
                                    50%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>زمینه فعالیت شما: </label>

                                    <div>
                                        {projectManagementFields.map((field, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={`projectManagementField-${index}`}
                                                    name="projectManagementField"
                                                    value={field.value}
                                                    checked={formData.projectManagementField === field.value}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`projectManagementField-${index}`}>{field.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase5ProjectManagementAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Technician') {
                    const technicianFields = [
                        { id: "technicianField-carpentry", value: "نجاری", label: "نجاری" },
                        { id: "technicianField-plumbing", value: "لوله کشی", label: "لوله کشی" },
                        { id: "technicianField-welding", value: "جوشکاری", label: "جوشکاری" },
                        { id: "technicianField-electrical", value: "برقکاری", label: "برقکاری" },
                        { id: "technicianField-hvac", value: "تهویه مطبوع", label: "تهویه مطبوع" },
                        { id: "technicianField-other", value: "سایر", label: "سایر" }
                    ];

                    const validateCase5TechnicianAndNextStep = () => {
                        if (!formData.technicianField) {
                            toast.error("لطفاً زمینه فعالیت خود را انتخاب کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        if (formData.technicianField === "سایر" && !formData.otherTechnicianField.trim()) {
                            toast.error("لطفاً زمینه فعالیت خود را وارد کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if "سایر" is selected but input is empty
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '60%' }}
                                >
                                    60%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>زمینه فعالیت شما: </label>

                                    <div>
                                        {technicianFields.map((field, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={field.id}
                                                    name="technicianField"
                                                    value={field.value}
                                                    checked={formData.technicianField === field.value}
                                                    onChange={(e) => {
                                                        handleChange(e);
                                                        if (field.value === "سایر") {
                                                            setFormData((prev) => ({
                                                                ...prev,
                                                                otherTechnicianField: "" // Reset "سایر" input field
                                                            }));
                                                        }
                                                    }}
                                                />
                                                <label htmlFor={field.id}>{field.label}</label>
                                            </div>
                                        ))}

                                        {/* Show input box when "سایر" is selected */}
                                        {formData.technicianField === "سایر" && (
                                            <div className="mt-3">
                                                <label className="LabelMain">زمینه فعالیت را وارد کنید:</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    value={formData.otherTechnicianField || ""}
                                                    onChange={(e) =>
                                                        setFormData((prev) => ({
                                                            ...prev,
                                                            otherTechnicianField: e.target.value
                                                        }))
                                                    }
                                                />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase5TechnicianAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                } else if (formData.fieldOfActivity === 'Accounting') {
                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '60%' }} >60%</div>
                            </div>

                            <div className='row'>
                                <h2>در روزهای آینده بارگذاری می‌شود</h2>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>Previous</button>
                                </div>
                            </div>
                        </>
                    )
                }
            case 6:
                if (formData.fieldOfActivity === 'Engineering') {
                    const engineeringActivities = [
                        "فعالیت مهندسی - کارمندی (مانند مهندس مشاور، مهندس محاسب یا مهندس طراح)",
                        "مدیریت پروژه و کارگاهی - کارمندی",
                        "کارآفرینی"
                    ];

                    const validateCase6EngineeringAndNextStep = () => {
                        if (!formData.engineeringActivity) {
                            toast.error("لطفاً پوزیشن مورد نظر خود را انتخاب کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '60%' }}
                                >
                                    60%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>پوزیشن مورد نظر برای ادامه فعالیت در کانادا:</label>

                                    <div>
                                        {engineeringActivities.map((activity, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={`engineeringActivity-${index}`}
                                                    name="engineeringActivity"
                                                    value={activity}
                                                    checked={formData.engineeringActivity === activity}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`engineeringActivity-${index}`}>{activity}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase6EngineeringAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Architect') {
                    const architectWorkHistories = [
                        { value: "0 تا 3 سال", label: "0 تا 3 سال" },
                        { value: "3 سال تا 6 سال", label: "3 سال تا 6 سال" },
                        { value: "7 سال تا 12 سال", label: "7 سال تا 12 سال" },
                        { value: "12 سال به بالا", label: "12 سال به بالا" }
                    ];

                    const validateCase6ArchitectAndNextStep = () => {
                        if (!formData.architectWorkHistory) {
                            toast.error("لطفاً سابقه کار خود را انتخاب کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '60%' }}
                                >
                                    60%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>سابقه کار:</label>

                                    <div>
                                        {architectWorkHistories.map((history, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={`architectWorkHistory-${index}`}
                                                    name="architectWorkHistory"
                                                    value={history.value}
                                                    checked={formData.architectWorkHistory === history.value}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`architectWorkHistory-${index}`}>{history.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase6ArchitectAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Project Management') {
                    if (formData.projectManagementField === 'پروژه‌های پیش‌بینی‌پذیر (Predictive)- ساختمانی و صنعتی') {
                        const desiredPositions = [
                            { value: "Site Supervisor", label: "Site Supervisor" },
                            { value: "Site Technician", label: "Site Technician" },
                            { value: "Project Coordinator", label: "Project Coordinator" },
                            { value: "Project Manager", label: "Project Manager" }
                        ];

                        const validateCase6ProjectManagementP1AndNextStep = () => {
                            if (!formData.projectManagementDesiredPosition) {
                                toast.error("لطفاً عنوان شغلی مورد نظر خود را انتخاب کنید.", { position: "bottom-center" });
                                return; // Prevent navigation if no selection is made
                            }

                            // Proceed to the next step if validation passes
                            nextStep();
                        };

                        return (
                            <>
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-label="Animated striped example"
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ height: '50px' }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated"
                                        style={{ width: '60%' }}
                                    >
                                        60%
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 mb-2'>
                                        <label className='LabelMain'>عنوان شغلی مورد نظر شما:</label>

                                        <div>
                                            {desiredPositions.map((position, index) => (
                                                <div key={index}>
                                                    <input
                                                        type="radio"
                                                        id={`projectManagementDesiredPosition-${index}`}
                                                        name="projectManagementDesiredPosition"
                                                        value={position.value}
                                                        checked={formData.projectManagementDesiredPosition === position.value}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor={`projectManagementDesiredPosition-${index}`}>{position.label}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Next & Previous */}
                                <div className='row justify-content-between mt-4'>
                                    <div className='col-md-4'>
                                        <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                            Previous
                                        </button>
                                    </div>

                                    <div className='col-md-4'>
                                        <button
                                            className='FNV-Btn BtnPrimary BtnMedium w-100'
                                            onClick={validateCase6ProjectManagementP1AndNextStep}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    } else if (formData.projectManagementField === 'پروژه‌های منعطف (Agile )- مارکتینگ و فناوری اطلاعات (IT)') {
                        const desiredPositions = [
                            { value: "Product Owner", label: "Product Owner" },
                            { value: "Scrum Master", label: "Scrum Master" },
                            { value: "Developer", label: "Developer" }
                        ];

                        const validateCase6ProjectManagementPart2AndNextStep = () => {
                            if (!formData.projectManagementDesiredPosition) {
                                toast.error("لطفاً عنوان شغلی مورد نظر خود را انتخاب کنید.", { position: "bottom-center" });
                                return; // Prevent navigation if no selection is made
                            }

                            // Proceed to the next step if validation passes
                            nextStep();
                        };

                        return (
                            <>
                                <div
                                    className="progress"
                                    role="progressbar"
                                    aria-label="Animated striped example"
                                    aria-valuenow="75"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ height: '50px' }}
                                >
                                    <div
                                        className="progress-bar progress-bar-striped progress-bar-animated"
                                        style={{ width: '60%' }}
                                    >
                                        60%
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 mb-2'>
                                        <label className='LabelMain'>عنوان شغلی مورد نظر شما:</label>

                                        <div>
                                            {desiredPositions.map((position, index) => (
                                                <div key={index}>
                                                    <input
                                                        type="radio"
                                                        id={`projectManagementDesiredPosition-${index}`}
                                                        name="projectManagementDesiredPosition"
                                                        value={position.value}
                                                        checked={formData.projectManagementDesiredPosition === position.value}
                                                        onChange={handleChange}
                                                    />
                                                    <label htmlFor={`projectManagementDesiredPosition-${index}`}>{position.label}</label>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                {/* Next & Previous */}
                                <div className='row justify-content-between mt-4'>
                                    <div className='col-md-4'>
                                        <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                            Previous
                                        </button>
                                    </div>

                                    <div className='col-md-4'>
                                        <button
                                            className='FNV-Btn BtnPrimary BtnMedium w-100'
                                            onClick={validateCase6ProjectManagementPart2AndNextStep}
                                        >
                                            Next
                                        </button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                } else if (formData.fieldOfActivity === 'Technician') {
                    const technicianExperienceOptions = [
                        { id: "technicianExperienceOutsideCanada-more", value: "بیشتر از ۹۰۰۰ ساعت (بیشتر از ۵ سال)", label: "بیشتر از ۹۰۰۰ ساعت (بیشتر از ۵ سال)" },
                        { id: "technicianExperienceOutsideCanada-less", value: "کمتر از ۹۰۰۰ ساعت (کمتر از ۵ سال)", label: "کمتر از ۹۰۰۰ ساعت (کمتر از ۵ سال)" }
                    ];

                    const validateCase6TechnicianAndNextStep = () => {
                        if (!formData.technicianExperienceOutsideCanada) {
                            toast.error("لطفاً سابقه کار خود را انتخاب کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '80%' }}
                                >
                                    80%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>سابقه کار خارج از کانادا:</label>

                                    <div>
                                        {technicianExperienceOptions.map((option, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={option.id}
                                                    name="technicianExperienceOutsideCanada"
                                                    value={option.value}
                                                    checked={formData.technicianExperienceOutsideCanada === option.value}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={option.id}>{option.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase6TechnicianAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                }
            case 7:
                if (formData.fieldOfActivity === 'Engineering') {
                    const engineeringExperiences = [
                        "0 تا 3 سال",
                        "3 سال تا 6 سال",
                        "7 سال تا 12 سال",
                        "12 سال به بالا"
                    ];

                    const validateCase7EngineeringAndNextStep = () => {
                        if (!formData.engineeringExperience) {
                            toast.error("لطفاً سابقه کار خود را انتخاب کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '80%' }}
                                >
                                    80%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>سابقه کار</label>

                                    <div>
                                        {engineeringExperiences.map((experience, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={`engineeringExperience-${index}`}
                                                    name="engineeringExperience"
                                                    value={experience}
                                                    checked={formData.engineeringExperience === experience}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`engineeringExperience-${index}`}>{experience}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase7EngineeringAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Architect') {
                    const architectLicenses = [
                        { value: "لایسنس معماری (Architect)", label: "لایسنس معماری (Architect)" },
                        { value: "لایسنس BCIN (فقط ساکنان استان انتاریو)", label: "لایسنس BCIN (فقط ساکنان استان انتاریو)" },
                        { value: "سرتیفیکیت PMP", label: "سرتیفیکیت PMP" },
                        { value: "سرتیفیکیت LEED", label: "سرتیفیکیت LEED" },
                        { value: "هیچکدام", label: "هیچکدام" }
                    ];

                    const validateCase7ArchitectAndNextStep = () => {
                        if (!formData.architectLicense) {
                            toast.error("لطفاً یکی از لایسنس‌ها یا سرتیفیکیت‌های موجود را انتخاب کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '80%' }}
                                >
                                    80%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>کدامیک از لایسنس‌ها و سرتیفیکیت‌های زیر را دارید؟</label>

                                    <div>
                                        {architectLicenses.map((license, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={`architectLicense-${index}`}
                                                    name="architectLicense"
                                                    value={license.value}
                                                    checked={formData.architectLicense === license.value}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`architectLicense-${index}`}>{license.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase7ArchitectAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Project Management') {
                    const projectManagementExperienceOptions = [
                        { value: "کمتر از 3 سال", label: "کمتر از 3 سال" },
                        { value: "بیشتر از 3 سال", label: "بیشتر از 3 سال" }
                    ];

                    const validateCase7ProjectManagementAndNextStep = () => {
                        if (!formData.projectManagementExperienceOutsideCanada) {
                            toast.error("لطفاً سابقه کار خود را مشخص کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '80%' }}
                                >
                                    80%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>سابقه کار خارج از کانادا</label>

                                    <div>
                                        {projectManagementExperienceOptions.map((option, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={`projectManagementExperienceOutsideCanada-${index}`}
                                                    name="projectManagementExperienceOutsideCanada"
                                                    value={option.value}
                                                    checked={formData.projectManagementExperienceOutsideCanada === option.value}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`projectManagementExperienceOutsideCanada-${index}`}>{option.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase7ProjectManagementAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                } else if (formData.fieldOfActivity === 'Technician') {
                    const technicianExperienceInsideCanadaOptions = [
                        { id: "technicianExperienceInsideCanada-6monthsOrMore", value: "6 ماه و بیشتر", label: "6 ماه و بیشتر" },
                        { id: "technicianExperienceInsideCanada-lessThan6Months", value: "کمتر از 6 ماه", label: "کمتر از 6 ماه" },
                        { id: "technicianExperienceInsideCanada-noExperience", value: "بدون سابقه کار کانادایی", label: "بدون سابقه کار کانادایی" }
                    ];

                    const validateCase7TechnicianAndNextStep = () => {
                        if (!formData.technicianExperienceInsideCanada) {
                            toast.error("لطفاً سابقه کار کانادایی خود را مشخص کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '100%' }}
                                >
                                    100%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>سابقه کار کانادایی</label>

                                    <div>
                                        {technicianExperienceInsideCanadaOptions.map((option, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={option.id}
                                                    name="technicianExperienceInsideCanada"
                                                    value={option.value}
                                                    checked={formData.technicianExperienceInsideCanada === option.value}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={option.id}>{option.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase7TechnicianAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                }
            case 8:
                if (formData.fieldOfActivity === 'Engineering') {
                    const engineeringLicenses = [
                        "لایسنس مهندسی (P.Eng)",
                        "لایسنس مهندسی OIQ (فقط ساکنان استان کبک)",
                        "لایسنس BCIN (فقط ساکنان استان انتاریو)",
                        "سرتیفیکیت LEED",
                        "لایسنس P.Geo",
                        "لایسنس CET",
                        "دزیگنیشن EIT",
                        "هیچکدام"
                    ];

                    const validateCase8EngineeringAndNextStep = () => {
                        if (!formData.engineeringLicense) {
                            toast.error("لطفاً یکی از گزینه‌ها را انتخاب کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '100%' }}
                                >
                                    100%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>کدامیک از لایسنس‌های زیر را دارید؟</label>

                                    <div>
                                        {engineeringLicenses.map((license, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={`engineeringLicense-${index}`}
                                                    name="engineeringLicense"
                                                    value={license}
                                                    checked={formData.engineeringLicense === license}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`engineeringLicense-${index}`}>{license}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase8EngineeringAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Architect') {
                    const architectLicenses = [
                        { value: "Revit", label: "Revit" },
                        { value: "Autodesk 3D Max", label: "Autodesk 3D Max" },
                        { value: "AutoCAD", label: "AutoCAD" },
                        { value: "هیچکدام", label: "هیچکدام" }
                    ];

                    const validateCase8ArchitectAndNextStep = () => {
                        if (!formData.architectLicense) {
                            toast.error("لطفاً یکی از گزینه‌ها را انتخاب کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '100%' }}
                                >
                                    100%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>به کدامیک از نرم افزارهای زیر تسلط دارید؟</label>

                                    <div>
                                        {architectLicenses.map((license, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={`architectLicense-${index}`}
                                                    name="architectLicense"
                                                    value={license.value}
                                                    checked={formData.architectLicense === license.value}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`architectLicense-${index}`}>{license.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase8ArchitectAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Project Management') {
                    const projectManagementExperienceInsideCanadaOptions = [
                        { value: "کمتر از 2 سال", label: "کمتر از 2 سال" },
                        { value: "بیشتر از 2 سال", label: "بیشتر از 2 سال" }
                    ];

                    const validateCase8ProjectManagementAndNextStep = () => {
                        if (!formData.projectManagementExperienceInsideCanada) {
                            toast.error("لطفاً یکی از گزینه‌های سابقه کار کانادایی را انتخاب کنید.", { position: "bottom-center" });
                            return; // Prevent navigation if no selection is made
                        }

                        // Proceed to the next step if validation passes
                        nextStep();
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: '50px' }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: '90%' }}
                                >
                                    90%
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>سابقه کار کانادایی</label>

                                    <div>
                                        {projectManagementExperienceInsideCanadaOptions.map((option, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={`projectManagementExperienceInsideCanada-${index}`}
                                                    name="projectManagementExperienceInsideCanada"
                                                    value={option.value}
                                                    checked={formData.projectManagementExperienceInsideCanada === option.value}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`projectManagementExperienceInsideCanada-${index}`}>{option.label}</label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn BtnPrimary BtnMedium w-100'
                                        onClick={validateCase8ProjectManagementAndNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    )
                } else if (formData.fieldOfActivity === 'Technician') {
                    const fieldLabels = {
                        firstName: "نام",
                        lastName: "نام خانوادگی",
                        email: "ایمیل",
                        phoneNumber: "شماره تلفن",
                        englishLevel: "سطح زبان انگلیسی",
                        ageRange: "محدوده سنی",
                        province: "استان",
                        city: "شهر",
                        fieldOfActivity: "زمینه فعالیت مورد نظر در کانادا",
                        technicianField: "حوزه فعالیت",
                        otherTechnicianField: "حوزه فعالیت تکنسینی",
                        projectManagementDesiredPosition: "عنوان شغلی مورد نظر",
                        technicianExperienceOutsideCanada: "سابقه کار خارج از کانادا",
                        technicianExperienceInsideCanada: "سابقه کار کانادایی",
                    };

                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%' }} >چک کردن اطلاعت</div>
                            </div>

                            <div className='row CheckDetails'>
                                <h2>بررسی اطلاعات</h2>

                                <div className='col-12'>
                                    {Object.entries(
                                        Object.fromEntries(
                                            Object.entries(formData).filter(([_, value]) => value !== "")
                                        )
                                    ).map(([key, value]) => (
                                        <p><strong>{fieldLabels[key]}:</strong> {value}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>Previous</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={() => alert("Form Submitted")}>تکمیل اطلاعات</button>
                                </div>
                            </div>
                        </>
                    );
                }

            case 9:
                if (formData.fieldOfActivity === 'Project Management') {
                    const projectManagementCertificates = [
                        { value: "سرتیفیکیت PMP- مدیریت پروژه", label: "سرتیفیکیت PMP- مدیریت پروژه" },
                        { value: "سرتیفیکیت PMI-RMP- مدیریت ریسک", label: "سرتیفیکیت PMI-RMP- مدیریت ریسک" },
                        { value: "سرتیفیکیت CAPM- مدیریت پروژه جونیور لول", label: "سرتیفیکیت CAPM- مدیریت پروژه جونیور لول" },
                        { value: "سرتیفیکیت PSM- اسکرام مستر", label: "سرتیفیکیت PSM- اسکرام مستر" },
                        { value: "سرتیفیکیت ACP- اسکرام مستر", label: "سرتیفیکیت ACP- اسکرام مستر" }
                    ];

                    const validateCertificateSelection = () => {
                        if (!formData.projectManagementCertificate) {
                            toast.error("لطفاً یک سرتیفیکیت انتخاب کنید.", { position: "bottom-center" });
                            return false;
                        }
                        return true;
                    };

                    const handleNextStep = () => {
                        if (validateCertificateSelection()) {
                            nextStep();
                        }
                    };

                    return (
                        <>
                            <div
                                className="progress"
                                role="progressbar"
                                aria-label="Animated striped example"
                                aria-valuenow="100"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                style={{ height: "50px" }}
                            >
                                <div
                                    className="progress-bar progress-bar-striped progress-bar-animated"
                                    style={{ width: "100%" }}
                                >
                                    100%
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-12 mb-2">
                                    <label className="LabelMain">سرتیفیکیت‌های مدیریت پروژه</label>

                                    <div>
                                        {projectManagementCertificates.map((certificate, index) => (
                                            <div key={index}>
                                                <input
                                                    type="radio"
                                                    id={`projectManagementCertificate-${index}`}
                                                    name="projectManagementCertificate"
                                                    value={certificate.value}
                                                    checked={formData.projectManagementCertificate === certificate.value}
                                                    onChange={handleChange}
                                                />
                                                <label htmlFor={`projectManagementCertificate-${index}`}>
                                                    {certificate.label}
                                                </label>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className="row justify-content-between mt-4">
                                <div className="col-md-4">
                                    <button className="FNV-Btn ThirdColor BtnMedium w-100" onClick={prevStep}>
                                        Previous
                                    </button>
                                </div>

                                <div className="col-md-4">
                                    <button
                                        className="FNV-Btn BtnPrimary BtnMedium w-100"
                                        onClick={handleNextStep}
                                    >
                                        Next
                                    </button>
                                </div>
                            </div>
                        </>
                    );
                } else {
                    // Skip this case and move to the last step or next logic
                    nextStep(); // Move to the next step
                }
                break;

            default:
                if (formData.fieldOfActivity === 'Engineering') {
                    const fieldLabels = {
                        firstName: "نام",
                        lastName: "نام خانوادگی",
                        email: "ایمیل",
                        phoneNumber: "شماره تلفن",
                        englishLevel: "سطح زبان انگلیسی",
                        ageRange: "محدوده سنی",
                        province: "استان",
                        city: "شهر",
                        fieldOfActivity: "حوزه فعالیت",
                        engineeringMajor: "رشته مهندسی",
                        engineeringActivity: "نوع فعالیت مهندسی",
                        engineeringExperience: "تجربه کاری مهندسی",
                        engineeringLicense: "نوع لایسنس مهندسی"
                    };

                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%' }} >چک کردن اطلاعت</div>
                            </div>

                            <div className='row CheckDetails'>
                                <h2>بررسی اطلاعات</h2>

                                <div className='col-12'>
                                    {Object.entries(
                                        Object.fromEntries(
                                            Object.entries(formData).filter(([_, value]) => value !== "")
                                        )
                                    ).map(([key, value]) => (
                                        <p><strong>{fieldLabels[key]}:</strong> {value}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn ThirdColor BtnMedium w-100'
                                        onClick={() => {
                                            if (formData.fieldOfActivity !== 'Project Management') {
                                                // Go back two steps for non-Project Management users
                                                prevStep();
                                                prevStep();
                                            } else {
                                                // Normal one-step back for Project Management users
                                                prevStep();
                                            }
                                        }}
                                    >
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={() => alert("Form Submitted")}>تکمیل اطلاعات</button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Architect') {
                    const fieldLabels = {
                        firstName: "نام",
                        lastName: "نام خانوادگی",
                        email: "ایمیل",
                        phoneNumber: "شماره تلفن",
                        englishLevel: "سطح زبان انگلیسی",
                        ageRange: "محدوده سنی",
                        province: "استان",
                        city: "شهر",
                        fieldOfActivity: "زمینه فعالیت مورد نظر در کانادا",
                        architectField: "حوزه فعالیت",
                        architectWorkHistory: "سابقه کار",
                        architectLicense: "تسلط نرم افزاری",
                    };

                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%' }} >چک کردن اطلاعت</div>
                            </div>

                            <div className='row CheckDetails'>
                                <h2>بررسی اطلاعات</h2>

                                <div className='col-12'>
                                    {Object.entries(
                                        Object.fromEntries(
                                            Object.entries(formData).filter(([_, value]) => value !== "")
                                        )
                                    ).map(([key, value]) => (
                                        <p><strong>{fieldLabels[key]}:</strong> {value}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button
                                        className='FNV-Btn ThirdColor BtnMedium w-100'
                                        onClick={() => {
                                            if (formData.fieldOfActivity !== 'Project Management') {
                                                // Go back two steps for non-Project Management users
                                                prevStep();
                                                prevStep();
                                            } else {
                                                // Normal one-step back for Project Management users
                                                prevStep();
                                            }
                                        }}
                                    >
                                        Previous
                                    </button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={() => alert("Form Submitted")}>تکمیل اطلاعات</button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Project Management') {
                    const fieldLabels = {
                        firstName: "نام",
                        lastName: "نام خانوادگی",
                        email: "ایمیل",
                        phoneNumber: "شماره تلفن",
                        englishLevel: "سطح زبان انگلیسی",
                        ageRange: "محدوده سنی",
                        province: "استان",
                        city: "شهر",
                        fieldOfActivity: "زمینه فعالیت مورد نظر در کانادا",
                        projectManagementField: "حوزه فعالیت",
                        projectManagementDesiredPosition: "عنوان شغلی مورد نظر",
                        projectManagementExperienceOutsideCanada: "سابقه کار خارج از کانادا",
                        projectManagementExperienceInsideCanada: "سابقه کار کانادایی",
                        projectManagementCertificate: "سرتیفیکت‌های مدیریت پروژه",
                    };

                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%' }} >چک کردن اطلاعت</div>
                            </div>

                            <div className='row CheckDetails'>
                                <h2>بررسی اطلاعات</h2>

                                <div className='col-12'>
                                    {Object.entries(
                                        Object.fromEntries(
                                            Object.entries(formData).filter(([_, value]) => value !== "")
                                        )
                                    ).map(([key, value]) => (
                                        <p><strong>{fieldLabels[key]}:</strong> {value}</p>
                                    ))}
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>Previous</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={() => alert("Form Submitted")}>تکمیل اطلاعات</button>
                                </div>
                            </div>
                        </>
                    );
                }
                break;
        }
    };

    return (
        <section className='FNV-Qualification'>
            <div className='container d-flex justify-content-center'>
                <div className='card col-8'>
                    <h1>فرم ارزیابی</h1>

                    {renderStep()}
                </div>
            </div>
        </section>
    );
}

Qualification.guestGuard = true

export default Qualification
