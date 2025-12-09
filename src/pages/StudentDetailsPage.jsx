import { Link, useParams } from "react-router-dom";
import students from "../assets/students.json";

export default function StudentDetailsPage() {
  const { studentId } = useParams();
  const student = students.find((s) => s._id === studentId);

  return (
    <div className="page student-details p-4">
      <Link to="/">
        <button className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          ⬅ Back
        </button>
      </Link>

      {student ? (
        <>
          <h1 className="text-2xl font-bold mt-4">
            {student.firstName} {student.lastName}
          </h1>

          <img
            src={student.image}
            alt={student.firstName}
            width="200"
            className="my-4 rounded shadow"
          />

          <p><strong>Email:</strong> {student.email}</p>
          <p><strong>Phone:</strong> {student.phone}</p>
          <p>
            <strong>LinkedIn:</strong>{" "}
            <a href={student.linkedinUrl} target="_blank" className="text-blue-600">
              {student.linkedinUrl}
            </a>
          </p>
          <p><strong>Program:</strong> {student.program}</p>
          <p><strong>Background:</strong> {student.background}</p>
          <p><strong>Cohort:</strong> {student.cohort}</p>

          <h3 className="font-semibold mt-4">Languages</h3>
          <ul className="list-disc ml-6">
            {student.languages.map((lang, i) => (
              <li key={i}>{lang}</li>
            ))}
          </ul>
        </>
      ) : (
        <p className="mt-4 text-red-600">Student not found</p>
      )}
    </div>
  );
}
