import { useState } from "react";
import { FilePdf } from "react-huge-icons/outline";
import { submit_form } from "../../utils/apiService";
interface ApplicationFormProps {
  onClose: () => void;
}

const ApplicationForm: React.FC<ApplicationFormProps> = ({ onClose }) => {
  const [cvName, setCvName] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    position: "",
    lastName: "",
    name: "",
    gender: "",
    dob: "",
    maritalStatus: "",
    address: "",
    primaryMobile: "",
    secondaryMobile: "",
    email: "",
    qualification: "",
    schoolAttended: "",
    durationOfStudy: "",
    courseOfStudy: "",
    degree: "",
    previousWorkPlace: "",
    positionHeld: "",
    dateAppointed: "",
    endDate: "",
    reasonForLeaving: "",
    monthlySalary: "",
    primarySubject: "",
    secondarySubject: "",
    greatestAchievement: "",
    teachingReason: "",
    whyNewHall: "",
    referee1Name: "",
    referee1Position: "",
    referee1Phone: "",
    referee1Email: "",
    referee1Relation: "",
    referee2Name: "",
    referee2Position: "",
    referee2Phone: "",
    referee2Email: "",
    referee2Relation: "",
    cv: null as File | null,
    staffRelation: "",
    relationDetails: "",
    conviction: "",
    disqualification: "",
    details: "",
    registeredBody: "",
    specifyBody: "",
    declaration: "",
  });
  // const [isFormValid, setIsFormValid] = useState(false);

  // useEffect(() => {
  //   const checkFormValidity = () => {
  //     for (let key in formData) {
  //       if (formData[key] === "" || formData[key] === null) {
  //         return false;
  //       }
  //     }
  //     return true;
  //   };

  //   setIsFormValid(checkFormValidity());
  // }, [formData]);

  const handleChange = (e: any) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // const handleFileChange = (e: any) => {
  //   setFormData({
  //     ...formData,
  //     cv: e.target.files[0],
  //   });
  //   setCvName(cv.name);
  // };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, cv: file });
      setCvName(file.name); // Update the file name in state
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(key, (formData as any)[key]);
      });

      const res = await submit_form(data);
      if (res) {
        onClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full lg:w-[50%] px-4 py-6 m-auto flex-col justify-between items-center"
    >
      {/* Basic Information */}
      <div className="flex flex-col w-full justify-between items-start gap-4">
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            placeholder="Position"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            placeholder="Last Name"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="First Name"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <select
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          >
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <label htmlFor="dob" className="font-OpenSans font-normal">
            Date of Birth
          </label>
          <input
            type="date"
            id="dob"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            className="w-full py-2 border-[0.5px] bg-[#ddd] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex flex-col w-full items-start justify-center gap-2">
          <select
            name="maritalStatus"
            value={formData.maritalStatus}
            onChange={handleChange}
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          >
            <option value="">Marital Status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
          </select>
        </div>
        <div className="flex flex-col items-start w-full justify-center gap-2">
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="Residential Address"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex flex-col items-start w-full justify-center gap-2">
          <input
            type="tel"
            name="primaryMobile"
            value={formData.primaryMobile}
            onChange={handleChange}
            placeholder="Primary Mobile Number"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex flex-col items-start w-full justify-center gap-2">
          <input
            type="tel"
            name="secondaryMobile"
            value={formData.secondaryMobile}
            onChange={handleChange}
            placeholder="Secondary Mobile Number"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex flex-col items-start w-full justify-center gap-2">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
      </div>

      {/* Education and Work Experience */}
      <div className="flex flex-col mt-4 w-full justify-between items-start gap-4">
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="qualification"
            value={formData.qualification}
            onChange={handleChange}
            placeholder="Qualification"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="schoolAttended"
            value={formData.schoolAttended}
            onChange={handleChange}
            placeholder="School Attended"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="durationOfStudy"
            value={formData.durationOfStudy}
            onChange={handleChange}
            placeholder="Duration of Study"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="courseOfStudy"
            value={formData.courseOfStudy}
            onChange={handleChange}
            placeholder="Course of Study"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="degree"
            value={formData.degree}
            onChange={handleChange}
            placeholder="Degree"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="previousWorkPlace"
            value={formData.previousWorkPlace}
            onChange={handleChange}
            placeholder="Previous Work Place"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="positionHeld"
            value={formData.positionHeld}
            onChange={handleChange}
            placeholder="Position Held"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="date"
            name="dateAppointed"
            value={formData.dateAppointed}
            onChange={handleChange}
            placeholder="Date Appointed"
            className="w-full py-2 bg-[#ddd] border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            placeholder="End Date"
            className="w-full py-2 bg-[#ddd] border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="reasonForLeaving"
            value={formData.reasonForLeaving}
            onChange={handleChange}
            placeholder="Reason for Leaving"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
      </div>

      {/* Teaching Information */}
      <div className="flex flex-col mt-4 w-full justify-between items-start gap-4">
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="number"
            name="monthlySalary"
            value={formData.monthlySalary}
            onChange={handleChange}
            placeholder="Monthly Salary"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">
            Primary Teaching Subject and Class (i.e. what subject can you teach
            the most and what class)
          </label>
          <input
            type="text"
            name="primarySubject"
            value={formData.primarySubject}
            onChange={handleChange}
            placeholder="Primary Subject"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">
            Secondary Teaching Subject and Class (i.e. what other subject can
            you teach and what class)
          </label>
          <input
            type="text"
            name="secondarySubject"
            value={formData.secondarySubject}
            onChange={handleChange}
            placeholder="Secondary Subject"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">
            What is your greatest achievement in education? (Max 100 words)
          </label>
          <textarea
            name="greatestAchievement"
            value={formData.greatestAchievement}
            onChange={handleChange}
            placeholder="Greatest Achievement"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">
            Why did you choose the teaching profession? (Max 100 words)
          </label>
          <textarea
            name="teachingReason"
            value={formData.teachingReason}
            onChange={handleChange}
            placeholder="Reason for Teaching"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">
            Do you have any relations at the school?
          </label>
          <div className="w-full py-2 bg-transparent rounded-lg px-2 font-OpenSans font-normal">
            <input
              type="radio"
              name="staffRelation"
              value="yes"
              checked={formData.staffRelation === "yes"}
              onChange={handleChange}
              className="mr-2 transform scale-150"
            />
            <label className="mr-4">Yes</label>
            <input
              type="radio"
              name="staffRelation"
              value="no"
              checked={formData.staffRelation === "no"}
              onChange={handleChange}
              className="mr-2 transform scale-150"
            />
            <label>No</label>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="relationDetails"
            value={formData.relationDetails}
            onChange={handleChange}
            placeholder="If yes, please specify"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
      </div>

      {/* References */}
      <div className="flex flex-col mt-4 w-full justify-between items-start gap-4">
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="referee1Name"
            value={formData.referee1Name}
            onChange={handleChange}
            placeholder="Referee 1 Name"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="referee1Position"
            value={formData.referee1Position}
            onChange={handleChange}
            placeholder="Referee 1 Position"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>

        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="tel"
            name="referee1Phone"
            value={formData.referee1Phone}
            onChange={handleChange}
            placeholder="Referee 1 Phone"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="email"
            name="referee1Email"
            value={formData.referee1Email}
            onChange={handleChange}
            placeholder="Referee 1 Email"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="referee1Relation"
            value={formData.referee1Relation}
            onChange={handleChange}
            placeholder="Referee 1 Relation"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="referee2Name"
            value={formData.referee2Name}
            onChange={handleChange}
            placeholder="Referee 2 Name"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="referee2Position"
            value={formData.referee2Position}
            onChange={handleChange}
            placeholder="Referee 2 Position"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="tel"
            name="referee2Phone"
            value={formData.referee2Phone}
            onChange={handleChange}
            placeholder="Referee 2 Phone"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="email"
            name="referee2Email"
            value={formData.referee2Email}
            onChange={handleChange}
            placeholder="Referee 2 Email"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="referee2Relation"
            value={formData.referee2Relation}
            onChange={handleChange}
            placeholder="Referee 2 Relation"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
      </div>

      {/* Additional Information */}
      <div className="flex flex-col w-full justify-between items-start gap-4">
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">Why New Hall? (Max 100 words)</label>
          <textarea
            name="whyNewHall"
            value={formData.whyNewHall}
            onChange={handleChange}
            placeholder="Why New Hall?"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <p className="font-semibold">
            Upload your CV <span className="italic">.pdf</span>
          </p>
          <label className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal">
            {cvName ? cvName : <FilePdf fontSize={30} color="red" />}
            <input
              type="file"
              className="hidden h-full"
              name="cv"
              onChange={handleFileChange}
            />
          </label>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">
            Have you ever received a conviction, caution or bind-over?
          </label>
          <div className="w-full py-2 bg-transparent rounded-lg px-2 font-OpenSans font-normal">
            <input
              type="radio"
              name="conviction"
              value="yes"
              checked={formData.conviction === "yes"}
              onChange={handleChange}
              className="mr-2 transform scale-150"
            />
            <label className="mr-4">Yes</label>
            <input
              type="radio"
              name="conviction"
              value="no"
              checked={formData.conviction === "no"}
              onChange={handleChange}
              className="mr-2 transform scale-150"
            />
            <label>No</label>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">
            Have you ever been disqualified from working with children or been
            subject to any sanctions imposed by a regulatory body (e.g General
            Teaching Council)
          </label>
          <div className="w-full py-2 bg-transparent rounded-lg px-2 font-OpenSans font-normal">
            <input
              type="radio"
              name="disqualification"
              value="yes"
              checked={formData.disqualification === "yes"}
              onChange={handleChange}
              className="mr-2 transform scale-150"
            />
            <label className="mr-4">Yes</label>
            <input
              type="radio"
              name="disqualification"
              value="no"
              checked={formData.disqualification === "no"}
              onChange={handleChange}
              className="mr-2 transform scale-150"
            />
            <label>No</label>
          </div>
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <textarea
            name="details"
            value={formData.details}
            onChange={handleChange}
            placeholder="If yes to any above, please provide details"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">
            Are you currently registered with the General Teaching Council or
            TRCN or a similar body?
          </label>
          <input
            type="text"
            name="registeredBody"
            value={formData.registeredBody}
            onChange={handleChange}
            placeholder="Registered Body"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <input
            type="text"
            name="specifyBody"
            value={formData.specifyBody}
            onChange={handleChange}
            placeholder="Please specify organisation body"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-OpenSans text-[#1EB3FE] text-left text-[16px] font-normal leading-[44px]">
            Declaration:
          </label>
          <p className="font-semibold">
            I declare that the information I have given on this form is correct
            and I understand that failure to complete this form fully and
            accurately could result in an incorrect assessment of salary and/or
            exclusion from short listing or in the event of employment result in
            disciplinary action or dismissal.
          </p>
          <input
            type="text"
            name="declaration"
            value={formData.declaration}
            onChange={handleChange}
            required
            placeholder="Full Name"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <button
          type="submit"
          className={`w-full py-2 font-semibold font-OpenSans bg-[#1EB3FE] text-[#fff]`}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default ApplicationForm;
