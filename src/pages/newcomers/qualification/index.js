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

        // Check if all required fields are filled
        if (!formData.firstName.trim()) {
            alert("لطفاً نام خود را وارد کنید.");

            return;
        }
        if (!formData.lastName.trim()) {
            alert("لطفاً نام خانوادگی خود را وارد کنید.");

            return;
        }
        if (!formData.email.trim()) {
            alert("لطفاً ایمیل خود را وارد کنید.");

            return;
        }
        if (!formData.phoneNumber.trim()) {
            alert("لطفاً شماره تلفن خود را وارد کنید.");
            toast.error("لطفاً نام خود را وارد کنید.", { position: "bottom-center" });

            return;
        }
        if (!formData.lastName.trim()) {
            toast.error("لطفاً نام خانوادگی خود را وارد کنید.", { position: "bottom-center" });
            return;
        }
        if (!formData.email.trim()) {
            toast.error("لطفاً ایمیل خود را وارد کنید.", { position: "bottom-center" });
            return;
        }
        if (!formData.phoneNumber.trim()) {
            toast.error("لطفاً شماره تلفن خود را وارد کنید.", { position: "bottom-center" });

            return;
        }

        // If all validations pass
        toast.success("اطلاعات کامل است! به مرحله بعد می‌رویم.", { position: "bottom-center" });
        nextStep();
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

    const nextStep = () => setStep((prevStep) => prevStep + 1);
    const prevStep = () => setStep((prevStep) => prevStep - 1);

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
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '10%' }} >مرحله اول</div>
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
                                    رفتن به مرحله بعد
                                </button>
                            </div>
                        </div>
                    </>
                );
            case 2:
                return (
                    <>
                        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '20%' }} >مرحله دوم</div>
                        </div>

                        {/* Conditional Warning Message */}
                        {formData.englishLevel === "کمتر از CLB 4" && (
                            <p className="FNV-InfoBox-Danger">
                                پیش مشخص کردن فاکتورهای دیگر، باید ابتدا سطح زبان خود را تقویت کنید. لطفا از طریق کالج ITD ونکوور برای این منظور اقدام بفرمایید.
                            </p>
                        )}

                        <div className='row'>
                            {/* English Level */}
                            <div className='col-6 mb-4'>
                                <label className='LabelMain'>سطح زبان انگلیسی شما :</label>

                                <div>
                                    <input
                                        type="radio"
                                        name="englishLevel"
                                        value="کمتر از CLB 4"
                                        checked={formData.englishLevel === "کمتر از CLB 4"}
                                        onChange={handleChange}
                                    />
                                    <label>کمتر از CLB 4</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="englishLevel"
                                        value="CLB 5 تا CLB 7"
                                        checked={formData.englishLevel === "CLB 5 تا CLB 7"}
                                        onChange={handleChange}
                                    />
                                    <label> CLB 5 تا CLB 7</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="englishLevel"
                                        value="بیشتر از CLB 7 و کمتر از CLB 10"
                                        checked={formData.englishLevel === "بیشتر از CLB 7 و کمتر از CLB 10"}
                                        onChange={handleChange}
                                    />
                                    <label>بیشتر از CLB 7 و کمتر از CLB 10</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        name="englishLevel"
                                        value="بیشتر از CLB 10"
                                        checked={formData.englishLevel === "بیشتر از CLB 10"}
                                        onChange={handleChange}
                                    />
                                    <label>بیشتر از CLB 10</label>
                                </div>
                            </div>
                        </div>

                        {/* Conditional Warning Message */}
                        {(formData.englishLevel === "کمتر از CLB 4" ||
                            formData.englishLevel === "CLB 5 تا CLB 7" ||
                            formData.englishLevel === "بیشتر از CLB 7 و کمتر از CLB 10") && (
                                <p className="FNV-InfoBox-Default">
                                    آیا می‌دانستید فناوران در همکاری با کالج ITD کانادا (مستقر در ونکوور) دوره‌های تقویت زبان انگلیسی به صورت تخصصی مطابق با فیلد کاری شما برگزار می‌کند.
                                </p>
                            )}

                        <p className='FNV-InfoBox-Default'>
                            زبان انگلیسی مهمترین اسکیل برای موفقیت مهاجران در کانادا است. حتی اگر لایسنس و سرتیفیکیت‌های حوزه شغلی خود را دریافت کرده باشید و از سابقه کار خوبی هم برخودار باشید، بدون داشتن دانش قوی زبان انگلیسی، شانس موفقیت شما در کانادا به شدت کاهش می‌یابد.
                        </p>

                        {/* Next & Previous */}
                        <div className='row justify-content-between mt-4'>
                            <div className='col-md-4'>
                                <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                            </div>

                            <div className='col-md-4'>
                                <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                            </div>
                        </div>
                    </>
                );

                //return <button onClick={nextStep}>Next</button>; // Skip if not Work Permit
            case 3:
                return (
                    <>
                        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '30%' }} >مرحله سوم</div>
                        </div>

                        <div className='row'>
                            {/* Age Range*/}
                            <div className='col-12 mb-2'>
                                <label className='LabelMain'>محدوده سنی :</label>

                                <div>
                                    <input
                                        type="radio"
                                        id="ageRange-30-35"
                                        name="ageRange"
                                        value="30-35"
                                        checked={formData.ageRange === "30-35"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="ageRange-30-35">30-35</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="ageRange-35-40"
                                        name="ageRange"
                                        value="35-40"
                                        checked={formData.ageRange === "35-40"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="ageRange-35-40">35-40</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="ageRange-40-45"
                                        name="ageRange"
                                        value="40-45"
                                        checked={formData.ageRange === "40-45"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="ageRange-40-45">40-45</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="ageRange-45-50"
                                        name="ageRange"
                                        value="45-50"
                                        checked={formData.ageRange === "45-50"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="ageRange-45-50">45-50</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="ageRange-50+"
                                        name="ageRange"
                                        value="50+"
                                        checked={formData.ageRange === "50+"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="ageRange-50+">50+</label>
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
                                <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                            </div>

                            <div className='col-md-4'>
                                <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                            </div>
                        </div>
                    </>
                );
            case 4:
                return (
                    <>
                        <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                            <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '40%' }} >مرحله چهارم</div>
                        </div>

                        <div className='row'>
                            {/* Field of Activity */}
                            <div className='col-12 mb-2'>
                                <label className='LabelMain'>زمینه فعالیت مورد نظر در کانادا:</label>

                                <div>
                                    <input
                                        type="radio"
                                        id="fieldOfActivity-Engineering"
                                        name="fieldOfActivity"
                                        value="Engineering"
                                        checked={formData.fieldOfActivity === "Engineering"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="fieldOfActivity-Engineering">مهندسی</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="fieldOfActivity-Architect"
                                        name="fieldOfActivity"
                                        value="Architect"
                                        checked={formData.fieldOfActivity === "Architect"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="fieldOfActivity-Architect">معماری</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="fieldOfActivity-ProjectManagement"
                                        name="fieldOfActivity"
                                        value="Project Management"
                                        checked={formData.fieldOfActivity === "Project Management"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="fieldOfActivity-ProjectManagement">مدیریت پروژه</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="fieldOfActivity-Technician"
                                        name="fieldOfActivity"
                                        value="Technician"
                                        checked={formData.fieldOfActivity === "Technician"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="fieldOfActivity-Technician">تکنسین</label>
                                </div>
                                <div>
                                    <input
                                        type="radio"
                                        id="fieldOfActivity-Accounting"
                                        name="fieldOfActivity"
                                        value="Accounting"
                                        checked={formData.fieldOfActivity === "Accounting"}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="fieldOfActivity-Accounting">حسابداری</label>
                                </div>
                            </div>
                        </div>

                        {/* Conditional Warning Message */}
                        {formData.fieldOfActivity === "Engineering" && (
                            <p className="FNV-InfoBox-Default">
                                آیا می‌دانستید فناوران در همکاری با کالج ITD کانادا (مستقر در ونکوور) دوره‌های تقویت زبان انگلیسی به صورت تخصصی مطابق با فیلد کاری شما برگزار می‌کند.
                            </p>
                        )}

                        {/* Conditional Warning Message */}
                        {formData.fieldOfActivity === "Architect" && (
                            <p className="FNV-InfoBox-Default">
                                معماری در کانادا به معنای برنامه‌ریزی، طراحی و نظارت بر ساخت‌وساز ساختمان‌ها و فضاهای فیزیکی است. برای فعالیت به عنوان معمار و کسب «لایسنس معماری» در کانادا، شما باید تحصیلات تخصصی معماری داشته و در آزمون‌های لایسنس شرکت کنید. کارهای کارگاهی و اجرایی ساخت، جزو حوزه معماری محسوب نمی‌شوند.
                            </p>
                        )}

                        {/* Conditional Warning Message */}
                        {formData.fieldOfActivity === "Project Management" && (
                            <p className="FNV-InfoBox-Default">
                                مطابق با تعریف، مدیریت پروژه فرآیند رهبری یک تیم برای دستیابی به تمام اهداف پروژه در چارچوب محدودیت‌های داده شده است.
                            </p>
                        )}

                        {/* Conditional Warning Message */}
                        {formData.fieldOfActivity === "Technician" && (
                            <p className="FNV-InfoBox-Default">
                                مطابق با تعریف، تکنسین فنی فردی است که سابقه کار اجرایی (به عبارتی، کار یدی) دارد. بعضی از مشاغل فنی در کانادا نظام‌مند هستند و برای فعالیت نیاز به دریافت لایسنس دارید.
                            </p>
                        )}

                        {/* Conditional Warning Message */}
                        {formData.fieldOfActivity === "Accounting" && (
                            <p className="FNV-InfoBox-Default">
                                حسابداری حرفه‌ای است که شامل ثبت، طبقه‌بندی و گزارش‌گیری از معاملات مالی و اقتصادی یک نهاد است. در کانادا، برخی از حوزه‌های حسابداری به طور نظام‌مند نیازمند دریافت مدارک حرفه‌ای و عضویت در نهادهای معتبر هستند، تا فرد بتواند به عنوان حسابدار رسمی فعالیت کند.
                            </p>
                        )}

                        {/* Next & Previous */}
                        <div className='row justify-content-between mt-4'>
                            <div className='col-md-4'>
                                <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                            </div>

                            <div className='col-md-4'>
                                <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
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

                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '50%' }} >مرحله پنجم</div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>گرایش مهندسی:</label>

                                    <div>
                                        {engineeringMajors.map((major, index) => (
                                            <div key={index}>
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
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Architect') {
                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '50%' }} >مرحله پنجم</div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>زمینه فعالیت:</label>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectField-InteriorDesigner"
                                            name="architectField"
                                            value="Interior Designer"
                                            checked={formData.architectField === "Interior Designer"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectField-InteriorDesigner">Interior Designer</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectField-SmallBuildingArchitect"
                                            name="architectField"
                                            value="Small Building architect"
                                            checked={formData.architectField === "Small Building architect"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectField-SmallBuildingArchitect">Small Building architect</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectField-LandscapeUrbanDesign"
                                            name="architectField"
                                            value="Landscape and urban design"
                                            checked={formData.architectField === "Landscape and urban design"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectField-LandscapeUrbanDesign">Landscape and urban design</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectField-Architects"
                                            name="architectField"
                                            value="Architects"
                                            checked={formData.architectField === "Architects"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectField-Architects">Architects</label>
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Project Management') {
                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '50%' }} >مرحله پنجم</div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>زمینه فعالیت شما: </label>

                                    <div>
                                        <input
                                            type="radio"
                                            id="projectManagementField-Predictive"
                                            name="projectManagementField"
                                            value="پروژه‌های پیش‌بینی‌پذیر (Predictive)- ساختمانی و صنعتی"
                                            checked={formData.projectManagementField === "پروژه‌های پیش‌بینی‌پذیر (Predictive)- ساختمانی و صنعتی"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="projectManagementField-Predictive">پروژه‌های پیش‌بینی‌پذیر (Predictive) - ساختمانی و صنعتی</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="projectManagementField-Agile"
                                            name="projectManagementField"
                                            value="پروژه‌های منعطف (Agile )- مارکتینگ و فناوری اطلاعات (IT)"
                                            checked={formData.projectManagementField === "پروژه‌های منعطف (Agile )- مارکتینگ و فناوری اطلاعات (IT)"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="projectManagementField-Agile">پروژه‌های منعطف (Agile) - مارکتینگ و فناوری اطلاعات (IT)</label>
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Technician') {
                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '60%' }} >مرحله پنجم</div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>زمینه فعالیت شما: </label>

                                    <div>
                                        <input
                                            type="radio"
                                            id="technicianField-carpentry"
                                            name="technicianField"
                                            value="نجاری"
                                            checked={formData.technicianField === "نجاری"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="technicianField-carpentry">نجاری (Carpentry)</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="technicianField-plumbing"
                                            name="technicianField"
                                            value="لوله کشی"
                                            checked={formData.technicianField === "لوله کشی"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="technicianField-plumbing">لوله کشی (Plumbing)</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="technicianField-welding"
                                            name="technicianField"
                                            value="جوشکاری"
                                            checked={formData.technicianField === "جوشکاری"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="technicianField-welding">جوشکاری (Welding)</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="technicianField-electrical"
                                            name="technicianField"
                                            value="برقکاری"
                                            checked={formData.technicianField === "برقکاری"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="technicianField-electrical">برقکاری (Electrical)</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="technicianField-hvac"
                                            name="technicianField"
                                            value="تهویه مطبوع"
                                            checked={formData.technicianField === "تهویه مطبوع"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="technicianField-hvac">تهویه مطبوع (HVAC)</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="technicianField-other"
                                            name="technicianField"
                                            value="سایر"
                                            checked={formData.technicianField === "سایر"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="technicianField-other">سایر (Other)</label>
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
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

                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '60%' }} >مرحله ششم</div>
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
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Architect') {
                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '60%' }} >مرحله ششم</div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>سابقه کار:</label>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectWorkHistory-0-3"
                                            name="architectWorkHistory"
                                            value="0 تا 3 سال"
                                            checked={formData.architectWorkHistory === "0 تا 3 سال"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectWorkHistory-0-3">0 تا 3 سال</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectWorkHistory-3-6"
                                            name="architectWorkHistory"
                                            value="3 سال تا 6 سال"
                                            checked={formData.architectWorkHistory === "3 سال تا 6 سال"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectWorkHistory-3-6">3 سال تا 6 سال</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectWorkHistory-7-12"
                                            name="architectWorkHistory"
                                            value="7 سال تا 12 سال"
                                            checked={formData.architectWorkHistory === "7 سال تا 12 سال"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectWorkHistory-7-12">7 سال تا 12 سال</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectWorkHistory-12-plus"
                                            name="architectWorkHistory"
                                            value="12 سال به بالا"
                                            checked={formData.architectWorkHistory === "12 سال به بالا"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectWorkHistory-12-plus">12 سال به بالا</label>
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Project Management') {
                    if (formData.projectManagementField === 'پروژه‌های پیش‌بینی‌پذیر (Predictive)- ساختمانی و صنعتی') {
                        return (
                            <>
                                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '60%' }} >مرحله ششم</div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 mb-2'>
                                        <label className='LabelMain'>عنوان شغلی مورد نظر شما:</label>

                                        <div>
                                            <input
                                                type="radio"
                                                id="projectManagementDesiredPosition-SiteSupervisor"
                                                name="projectManagementDesiredPosition"
                                                value="Site Supervisor"
                                                checked={formData.projectManagementDesiredPosition === "Site Supervisor"}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="projectManagementDesiredPosition-SiteSupervisor">Site Supervisor</label>
                                        </div>

                                        <div>
                                            <input
                                                type="radio"
                                                id="projectManagementDesiredPosition-SiteTechnician"
                                                name="projectManagementDesiredPosition"
                                                value="Site Technician"
                                                checked={formData.projectManagementDesiredPosition === "Site Technician"}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="projectManagementDesiredPosition-SiteTechnician">Site Technician</label>
                                        </div>

                                        <div>
                                            <input
                                                type="radio"
                                                id="projectManagementDesiredPosition-ProjectCoordinator"
                                                name="projectManagementDesiredPosition"
                                                value="Project Coordinator"
                                                checked={formData.projectManagementDesiredPosition === "Project Coordinator"}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="projectManagementDesiredPosition-ProjectCoordinator">Project Coordinator</label>
                                        </div>

                                        <div>
                                            <input
                                                type="radio"
                                                id="projectManagementDesiredPosition-ProjectManager"
                                                name="projectManagementDesiredPosition"
                                                value="Project Manager"
                                                checked={formData.projectManagementDesiredPosition === "Project Manager"}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="projectManagementDesiredPosition-ProjectManager">Project Manager</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Next & Previous */}
                                <div className='row justify-content-between mt-4'>
                                    <div className='col-md-4'>
                                        <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                    </div>

                                    <div className='col-md-4'>
                                        <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                    </div>
                                </div>
                            </>
                        )
                    } else if (formData.projectManagementField === 'پروژه‌های منعطف (Agile )- مارکتینگ و فناوری اطلاعات (IT)') {
                        return (
                            <>
                                <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                    <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '60%' }} >مرحله ششم</div>
                                </div>

                                <div className='row'>
                                    <div className='col-12 mb-2'>
                                        <label className='LabelMain'>عنوان شغلی مورد نظر شما:</label>

                                        <div>
                                            <input
                                                type="radio"
                                                id="projectManagementDesiredPosition-ProductOwner"
                                                name="projectManagementDesiredPosition"
                                                value="Product Owner"
                                                checked={formData.projectManagementDesiredPosition === "Product Owner"}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="projectManagementDesiredPosition-ProductOwner">Product Owner</label>
                                        </div>

                                        <div>
                                            <input
                                                type="radio"
                                                id="projectManagementDesiredPosition-ScrumMaster"
                                                name="projectManagementDesiredPosition"
                                                value="Scrum Master"
                                                checked={formData.projectManagementDesiredPosition === "Scrum Master"}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="projectManagementDesiredPosition-ScrumMaster">Scrum Master</label>
                                        </div>

                                        <div>
                                            <input
                                                type="radio"
                                                id="projectManagementDesiredPosition-Developer"
                                                name="projectManagementDesiredPosition"
                                                value="Developer"
                                                checked={formData.projectManagementDesiredPosition === "Developer"}
                                                onChange={handleChange}
                                            />
                                            <label htmlFor="projectManagementDesiredPosition-Developer">Developer</label>
                                        </div>
                                    </div>
                                </div>

                                {/* Next & Previous */}
                                <div className='row justify-content-between mt-4'>
                                    <div className='col-md-4'>
                                        <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                    </div>

                                    <div className='col-md-4'>
                                        <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                    </div>
                                </div>
                            </>
                        )
                    }
                } else if (formData.fieldOfActivity === 'Technician') {
                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '80%' }} >مرحله ششم</div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>سابقه کار خارج از کانادا:</label>

                                    <div>
                                        <input
                                            type="radio"
                                            id="technicianExperienceOutsideCanada-more"
                                            name="technicianExperienceOutsideCanada"
                                            value="بیشتر از ۹۰۰۰ ساعت (بیشتر از ۵ سال)"
                                            checked={formData.technicianExperienceOutsideCanada === "بیشتر از ۹۰۰۰ ساعت (بیشتر از ۵ سال)"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="technicianExperienceOutsideCanada-more">بیشتر از ۹۰۰۰ ساعت (بیشتر از ۵ سال)</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="technicianExperienceOutsideCanada-less"
                                            name="technicianExperienceOutsideCanada"
                                            value="کمتر از ۹۰۰۰ ساعت (کمتر از ۵ سال)"
                                            checked={formData.technicianExperienceOutsideCanada === "کمتر از ۹۰۰۰ ساعت (کمتر از ۵ سال)"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="technicianExperienceOutsideCanada-less">کمتر از ۹۰۰۰ ساعت (کمتر از ۵ سال)</label>
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
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

                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '80%' }} >مرحله هفتم</div>
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
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Architect') {
                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '80%' }} >مرحله هفتم</div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>کدامیک از لایسنس‌ها و سرتیفیکیت‌های زیر را دارید؟</label>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectLicense-Architect"
                                            name="architectLicense"
                                            value="لایسنس معماری (Architect)"
                                            checked={formData.architectLicense === "لایسنس معماری (Architect)"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectLicense-Architect">لایسنس معماری (Architect)</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectLicense-BCIN"
                                            name="architectLicense"
                                            value="لایسنس BCIN (فقط ساکنان استان انتاریو)"
                                            checked={formData.architectLicense === "لایسنس BCIN (فقط ساکنان استان انتاریو)"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectLicense-BCIN">لایسنس BCIN (فقط ساکنان استان انتاریو)</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectLicense-PMP"
                                            name="architectLicense"
                                            value="سرتیفیکیت PMP"
                                            checked={formData.architectLicense === "سرتیفیکیت PMP"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectLicense-PMP">سرتیفیکیت PMP</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectLicense-LEED"
                                            name="architectLicense"
                                            value="سرتیفیکیت LEED"
                                            checked={formData.architectLicense === "سرتیفیکیت LEED"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectLicense-LEED">سرتیفیکیت LEED</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectLicense-None"
                                            name="architectLicense"
                                            value="هیچکدام"
                                            checked={formData.architectLicense === "هیچکدام"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectLicense-None">هیچکدام</label>
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Project Management') {
                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '80%' }} >مرحله هفتم</div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>سابقه کار شما خارج از کانادا</label>

                                    <div>
                                        <input
                                            type="radio"
                                            id="projectManagementExperienceOutsideCanada-more"
                                            name="projectManagementExperienceOutsideCanada"
                                            value="بیشتر از 3 سال"
                                            checked={formData.projectManagementExperienceOutsideCanada === "بیشتر از 3 سال"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="projectManagementExperienceOutsideCanada-more">بیشتر از 3 سال</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="projectManagementExperienceOutsideCanada-less"
                                            name="projectManagementExperienceOutsideCanada"
                                            value="کمتر از 3 سال"
                                            checked={formData.projectManagementExperienceOutsideCanada === "کمتر از 3 سال"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="projectManagementExperienceOutsideCanada-less">کمتر از 3 سال</label>
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                </div>
                            </div>
                        </>
                    )
                } else if (formData.fieldOfActivity === 'Technician') {
                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%' }} >مرحله هشتم</div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>سابقه کار کانادایی</label>

                                    <div>
                                        <input
                                            type="radio"
                                            id="technicianExperienceInsideCanada-6monthsOrMore"
                                            name="technicianExperienceInsideCanada"
                                            value="6 ماه و بیشتر"
                                            checked={formData.technicianExperienceInsideCanada === "6 ماه و بیشتر"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="technicianExperienceInsideCanada-6monthsOrMore">6 ماه و بیشتر (6 months or more)</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="technicianExperienceInsideCanada-lessThan6Months"
                                            name="technicianExperienceInsideCanada"
                                            value="کمتر از 6 ماه"
                                            checked={formData.technicianExperienceInsideCanada === "کمتر از 6 ماه"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="technicianExperienceInsideCanada-lessThan6Months">کمتر از 6 ماه (Less than 6 months)</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="technicianExperienceInsideCanada-noExperience"
                                            name="technicianExperienceInsideCanada"
                                            value="بدون سابقه کار کانادایی"
                                            checked={formData.technicianExperienceInsideCanada === "بدون سابقه کار کانادایی"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="technicianExperienceInsideCanada-noExperience">بدون سابقه کار کانادایی (No Canadian work experience)</label>
                                    </div>

                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
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

                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%' }} >مرحله هشتم</div>
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
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Architect') {
                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%' }} >مرحله هشتم</div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>به کدامیک از نرم افزارهای زیر تسلط دارید؟</label>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectLicense-Architect"
                                            name="architectLicense"
                                            value="لایسنس معماری (Architect)"
                                            checked={formData.architectLicense === "لایسنس معماری (Architect)"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectLicense-Architect">لایسنس معماری (Architect)</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectLicense-BCIN"
                                            name="architectLicense"
                                            value="لایسنس BCIN (فقط ساکنان استان انتاریو)"
                                            checked={formData.architectLicense === "لایسنس BCIN (فقط ساکنان استان انتاریو)"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectLicense-BCIN">لایسنس BCIN (فقط ساکنان استان انتاریو)</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectLicense-PMP"
                                            name="architectLicense"
                                            value="سرتیفیکیت PMP"
                                            checked={formData.architectLicense === "سرتیفیکیت PMP"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectLicense-PMP">سرتیفیکیت PMP</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectLicense-LEED"
                                            name="architectLicense"
                                            value="سرتیفیکیت LEED"
                                            checked={formData.architectLicense === "سرتیفیکیت LEED"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectLicense-LEED">سرتیفیکیت LEED</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="architectLicense-None"
                                            name="architectLicense"
                                            value="هیچکدام"
                                            checked={formData.architectLicense === "هیچکدام"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="architectLicense-None">هیچکدام</label>
                                    </div>
                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                </div>
                            </div>
                        </>
                    );
                } else if (formData.fieldOfActivity === 'Project Management') {
                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%' }} >مرحله هشتم</div>
                            </div>

                            <div className='row'>
                                <div className='col-12 mb-2'>
                                    <label className='LabelMain'>سابقه کار کانادایی</label>

                                    <div>
                                        <input
                                            type="radio"
                                            id="projectManagementExperienceInsideCanada-less"
                                            name="projectManagementExperienceInsideCanada"
                                            value="کمتر از 2 سال"
                                            checked={formData.projectManagementExperienceInsideCanada === "کمتر از 2 سال"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="projectManagementExperienceInsideCanada-less">کمتر از 2 سال</label>
                                    </div>

                                    <div>
                                        <input
                                            type="radio"
                                            id="projectManagementExperienceInsideCanada-more"
                                            name="projectManagementExperienceInsideCanada"
                                            value="بیشتر از 2 سال"
                                            checked={formData.projectManagementExperienceInsideCanada === "بیشتر از 2 سال"}
                                            onChange={handleChange}
                                        />
                                        <label htmlFor="projectManagementExperienceInsideCanada-more">بیشتر از 2 سال</label>
                                    </div>

                                </div>
                            </div>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={nextStep}>رفتن به مرحله بعد</button>
                                </div>
                            </div>
                        </>
                    )
                } else if (formData.fieldOfActivity === 'Technician') {
                    return (
                        <>
                            <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{ height: '50px' }}>
                                <div className="progress-bar progress-bar-striped progress-bar-animated" style={{ width: '100%' }} >چک کردن اطلاعت</div>
                            </div>

                            <h2>چک کردن اطلاعات</h2>
                            <pre>{JSON.stringify(
                                Object.fromEntries(
                                    Object.entries(formData).filter(([_, value]) => value !== "")
                                ),
                                null,
                                2
                            )}</pre>

                            {/* Next & Previous */}
                            <div className='row justify-content-between mt-4'>
                                <div className='col-md-4'>
                                    <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                                </div>

                                <div className='col-md-4'>
                                    <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={() => alert("Form Submitted")}>تکمیل اطلاعات</button>
                                </div>
                            </div>
                        </>
                    );
                }

                return null;

            default:
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
                                <button className='FNV-Btn ThirdColor BtnMedium w-100' onClick={prevStep}>برگشت به مرحله قبل</button>
                            </div>

                            <div className='col-md-4'>
                                <button className='FNV-Btn BtnPrimary BtnMedium w-100' onClick={() => alert("Form Submitted")}>تکمیل اطلاعات</button>
                            </div>
                        </div>
                    </>
                );
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
