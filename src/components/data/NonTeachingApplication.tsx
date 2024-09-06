import { useState } from "react";
import { FilePdf } from "react-huge-icons/outline";
import { non_submit_form } from "../../utils/apiService";
interface ApplicationFormProps {
  onClose: () => void;
}
const NonTeachingApplication: React.FC<ApplicationFormProps> = ({
  onClose,
}) => {
  const [cvName, setCvName] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    position: "",
    lastName: "",
    firstName: "",
    gender: "",
    dob: "",
    maritalStatus: "",
    address: "",
    primaryMobile: "",
    secondaryMobile: "",
    email: "",
    highestQualification: "",
    schoolName: "",
    studyDuration: "",
    courseOfStudy: "",
    qualificationObtained: "",
    organizationName: "",
    positionHeld: "",
    dateAppointed: "",
    salaryEarned: "",
    endDate: "",
    reasonForLeaving: "",
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
    relatedToStaff: "",
    tools: "",
    priorities: "",
    softwaresfamiliar: "",
    msfamiliar: "",
    relationDetails: "",
    conviction: "",
    disqualification: "",
    details: "",
    cv: null as File | null,
    declaration: "",
  });

  const handleChange = (e: any) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData({ ...formData, cv: file });
      setCvName(file.name);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const data = new FormData();
      Object.keys(formData).forEach((key) => {
        data.append(
          key,
          formData[key as keyof typeof formData] as string | Blob
        );
      });

      const res = await non_submit_form(data);
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
      className="space-y-4 w-[50%] m-auto flex justify-center items-center flex-col"
    >
      {/* Position Applied For */}
      <div className="w-full">
        <input
          type="text"
          name="position"
          value={formData.position}
          onChange={handleChange}
          required
          placeholder="Position Applied For"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Last Name */}
      <div className="w-full">
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          placeholder="Last Name"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* First Names */}
      <div className="w-full">
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          placeholder="First Names"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Gender */}
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

      {/* Date of Birth */}
      <div className="w-full">
        <label htmlFor="dob">Date of Birth *</label>
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          required
          placeholder="Position"
          className="w-full py-2 bg-[#ddd] border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Marital Status */}
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

      {/* Full Address */}
      <div className="w-full">
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          required
          placeholder="Residential Address"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Primary Mobile Number */}
      <div className="w-full">
        <input
          type="text"
          name="primaryMobile"
          value={formData.primaryMobile}
          onChange={handleChange}
          required
          placeholder="Primary Mobile Number"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Secondary Mobile Number */}
      <div className="w-full">
        <input
          type="text"
          name="secondaryMobile"
          value={formData.secondaryMobile}
          onChange={handleChange}
          placeholder="Secondary Mobile Number"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Email Address */}
      <div className="w-full">
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="Email Address"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Highest Qualification Obtained */}
      <div className="w-full">
        <select
          name="highestQualification"
          value={formData.highestQualification}
          onChange={handleChange}
          required
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        >
          <option value="">Highest Qualification Obtained</option>
          <option value="Secondary school">Secondary school</option>
          <option value="Diploma">Diploma</option>
          <option value="Bachelors">Bachelors</option>
          <option value="Masters">Masters</option>
          <option value="Further Qualification/PGDE/PGCE">
            Further Qualification/PGDE/PGCE
          </option>
        </select>
      </div>

      {/* School Name for Highest Qualification */}
      <div className="w-full">
        <input
          type="text"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleChange}
          required
          placeholder="Name of School/College/University"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Duration of Study for Highest Qualification */}
      <div className="w-full">
        <input
          type="text"
          name="studyDuration"
          value={formData.studyDuration}
          onChange={handleChange}
          required
          placeholder="Duration of Study"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Course of Study for Highest Qualification */}
      <div className="w-full">
        <input
          type="text"
          name="courseOfStudy"
          value={formData.courseOfStudy}
          onChange={handleChange}
          required
          placeholder="Course of Study"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Qualification Obtained for Highest Qualification */}
      <div className="w-full">
        <input
          type="text"
          name="qualificationObtained"
          value={formData.qualificationObtained}
          onChange={handleChange}
          required
          placeholder="Qualification Obtained"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Present Appointment/Most Recent Employment */}
      <div className="w-full">
        <h3 className="w-full text-left bg-transparent font-OpenSans font-normal">
          Present Appointment/Most Recent Employment
        </h3>
        <div className="w-full mt-4">
          <input
            type="text"
            name="organizationName"
            value={formData.organizationName}
            onChange={handleChange}
            placeholder="Name of Organization"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>

        <div className="w-full mt-4">
          <input
            type="text"
            name="positionHeld"
            value={formData.positionHeld}
            onChange={handleChange}
            required
            placeholder="Position held"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>

        <div className="w-full mt-4">
          <label htmlFor="dateAppointed" className="font-OpenSans font-normal">
            Date Appointed
          </label>
          <input
            type="date"
            name="dateAppointed"
            value={formData.dateAppointed}
            onChange={handleChange}
            required
            placeholder="Date Appointed"
            className="w-full py-2 bg-[#ddd] border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>

        <div className="w-full mt-4">
          <input
            type="text"
            name="salaryEarned"
            value={formData.salaryEarned}
            onChange={handleChange}
            required
            placeholder="Salary Earned"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>

        <div className="w-full mt-4">
          <label htmlFor="endDate" className="font-OpenSans font-normal">
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            placeholder="End Date (If applicable)"
            className="w-full py-2 bg-[#ddd] border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>

        <div className="w-full mt-4">
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

      {/* Referee 1 */}
      <h3 className="w-full text-left bg-transparent font-OpenSans font-normal">
        Referee 1 Information
      </h3>
      <div className="w-full">
        <input
          type="text"
          name="referee1Name"
          value={formData.referee1Name}
          onChange={handleChange}
          required
          placeholder="Referee 1 Name"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      <div className="w-full mt-4">
        <input
          type="text"
          name="referee1Position"
          value={formData.referee1Position}
          onChange={handleChange}
          required
          placeholder="Referee 1 Position"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      <div className="w-full mt-4">
        <input
          type="text"
          name="referee1Phone"
          value={formData.referee1Phone}
          onChange={handleChange}
          required
          placeholder="Referee 1 Phone"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      <div className="w-full mt-4">
        <input
          type="email"
          name="referee1Email"
          value={formData.referee1Email}
          onChange={handleChange}
          required
          placeholder="Referee 1 Email"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      <div className="w-full mt-4">
        <input
          type="text"
          name="referee1Relation"
          value={formData.referee1Relation}
          onChange={handleChange}
          required
          placeholder="Relationship to referee"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Referee 2 */}
      <h3 className="w-full text-left bg-transparent font-OpenSans font-normal">
        Referee 2 Information
      </h3>
      <div className="w-full">
        <input
          type="text"
          name="referee2Name"
          value={formData.referee2Name}
          onChange={handleChange}
          required
          placeholder="Referee 2 Name"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      <div className="w-full mt-4">
        <input
          type="text"
          name="referee2Position"
          value={formData.referee2Position}
          onChange={handleChange}
          required
          placeholder="Referee 2 Position"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      <div className="w-full mt-4">
        <input
          type="text"
          name="referee2Phone"
          value={formData.referee2Phone}
          onChange={handleChange}
          required
          placeholder="Referee 2 Phone"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      <div className="w-full mt-4">
        <input
          type="email"
          name="referee2Email"
          value={formData.referee2Email}
          onChange={handleChange}
          required
          placeholder="Referee 2 Email"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      <div className="w-full mt-4">
        <input
          type="text"
          name="referee2Relation"
          value={formData.referee2Relation}
          onChange={handleChange}
          required
          placeholder="Relationship to referee"
          className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
        />
      </div>

      {/* Declaration */}
      <div className="w-full">
        <div className="w-full">
          <label>Are you related to any member of staff of New Hall? *</label>
          <div className="flex mt-4 justify-start gap-4 items-center">
            <label>
              <input
                type="radio"
                name="relatedToStaff"
                value="yes"
                checked={formData.relatedToStaff === "yes"}
                onChange={handleChange}
                required
                className="mr-2 transform scale-150"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="relatedToStaff"
                value="no"
                checked={formData.relatedToStaff === "no"}
                onChange={handleChange}
                className="mr-2 transform scale-150"
              />
              No
            </label>
          </div>
        </div>

        {formData.relatedToStaff === "yes" && (
          <div className="w-full mt-4">
            <input
              type="text"
              name="relationDetails"
              value={formData.relationDetails}
              onChange={handleChange}
              placeholder="If yes, who and in what capacity?"
              className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
            />
          </div>
        )}

        <div className="w-full mt-4">
          <label>
            Have you ever received a conviction, caution, or bind-over? *
          </label>
          <div className="flex justify-start gap-4 items-center w-full mt-4">
            <label>
              <input
                type="radio"
                name="conviction"
                value="yes"
                checked={formData.conviction === "yes"}
                onChange={handleChange}
                required
                className="mr-2 transform scale-150"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="conviction"
                value="no"
                checked={formData.conviction === "no"}
                onChange={handleChange}
                className="mr-2 transform scale-150"
              />
              No
            </label>
          </div>
        </div>

        <div className="w-full mt-4">
          <label>
            Have you ever been disqualified from working with children or been
            subject to any sanctions imposed by a regulatory body (e.g. General
            Teaching Council)? *
          </label>
          <div className="w-full flex justify-start gap-4 items-center mt-4">
            <label>
              <input
                type="radio"
                name="disqualification"
                value="yes"
                checked={formData.disqualification === "yes"}
                onChange={handleChange}
                required
                className="mr-2 transform scale-150"
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="disqualification"
                value="no"
                checked={formData.disqualification === "no"}
                onChange={handleChange}
                className="mr-2 transform scale-150"
              />
              No
            </label>
          </div>
        </div>

        {(formData.conviction === "yes" ||
          formData.disqualification === "yes") && (
          <div className="w-full mt-4">
            <textarea
              name="details"
              value={formData.details}
              onChange={handleChange}
              placeholder="  If yes to any Above, provide details below"
              className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
            ></textarea>
          </div>
        )}

        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">
            What tools do you use to stay organized
          </label>
          <textarea
            name="whyNewHall"
            value={formData.tools}
            onChange={handleChange}
            placeholder=" (Limit 200 words)"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">
            How do you juggle completing high priority projects
          </label>
          <textarea
            name="whyNewHall"
            value={formData.priorities}
            onChange={handleChange}
            placeholder="(Limit 200 words)"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">
            What computer programs and software are you comfortable using
          </label>
          <textarea
            name="whyNewHall"
            value={formData.softwaresfamiliar}
            onChange={handleChange}
            placeholder="Software Knowledge"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
        <div className="flex w-full flex-col items-start justify-center gap-2">
          <label className="font-semibold">
            State the level of proficiency in the following applications
            MS-WORD, MS-EXCEL, MS-POWERPOINT, MS-ACCESS, GRAPHICS, DATA
            ANALYSIS, AND SOCIAL MEDIA MARKETING. Please give them a dropdown
            with three options for each
          </label>
          <textarea
            name="whyNewHall"
            value={formData.msfamiliar}
            onChange={handleChange}
            placeholder="(Basic, Intermediate and Advance)"
            className="w-full py-2 bg-transparent border-[0.5px] outline-none border-[#ddd] rounded-lg px-2 font-OpenSans font-normal"
          />
        </div>
      </div>

      {/* Upload CV */}
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
      {/* Final Declaration */}
      <div className="w-full flex flex-col gap-3">
        <label className="font-OpenSans text-[#1EB3FE] text-left text-[16px] font-normal leading-[44px]">
          Declaration:
        </label>
        <p className="font-semibold">
          I declare that the information I have given on this form is correct
          and I understand that failure to complete this form fully and
          accurately could result in an incorrect assessment of salary and/or
          exclusion from short listing or in the event of employment result in
          disciplinary action or dismissal. (Write full name) *
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
    </form>
  );
};

export default NonTeachingApplication;
